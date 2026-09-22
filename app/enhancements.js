function renderEvidenceProvenance(color) {
  const node=document.getElementById('evidenceProvenance');
  if(!node) return;
  const provenance=color.evidence.provenance;
  const conflicts=provenance.conflicts.filter(c=>c.field.startsWith('geo.'));
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  if (isEn) {
    node.textContent='Color metrics: computed from sRGB • Spectral & 3D Texture: Simulation • Historical & Mineral: Primary source documented.';
    if(conflicts.length) node.textContent+=' Geographic data divergence: '+conflicts.map(c=>c.field.split('.').at(-1)+' '+c.selected+' / '+c.alternative).join(', ')+'; Displayed coordinates follow initial site registry.';
  } else {
    node.textContent='محاسبات رنگ: از sRGB • طیف و بافت: شبیه‌سازی • اطلاعات تاریخی و ماده: نیازمند بررسی منبع.';
    if(conflicts.length) node.textContent+=' اختلاف در دادهٔ جغرافیایی: '+conflicts.map(c=>c.field.split('.').at(-1)+' '+c.selected+' / '+c.alternative).join('،')+'؛ مختصات نمایش‌داده‌شده از رکورد اولیهٔ نقشه است.';
  }
  node.dataset.state=conflicts.length?'conflicting':'unverified';
}

window.addEventListener('DOMContentLoaded',()=>{
  const dialogs=[...document.querySelectorAll('[id$="Modal"],#previewDrawer')].filter(n=>n.classList.contains('fixed'));
  const previousFocus=new WeakMap();
  const closers={
    evidenceDashboardModal:closeEvidenceDashboard, arSimulatorModal:closeARSimulator,
    scientificModal:closeScientificModal, matrixModal:closeMatrixModal, gradientModal:closeGradientModal,
    exportModal:closeExportModal, npmModal:closeNpmModal, mixerModal:closeMixerModal,
    previewDrawer:closePreviewDrawer
  };
  let stack=[];
  const focusables=(node)=>[...node.querySelectorAll('button,[href],input,select,textarea,[tabindex]')]
    .filter(el=>!el.disabled && el.tabIndex>=0 && el.getClientRects().length && !el.closest('[inert]'));

  function updateLayers() {
    const active=stack.at(-1);
    for(const child of document.body.children) {
      if(['SCRIPT','STYLE','LINK'].includes(child.tagName)||child.id==='toast') continue;
      child.inert=Boolean(active && child!==active && !child.contains(active));
    }
    dialogs.forEach(d=>{d.setAttribute('aria-modal',String(d===active));d.style.zIndex=String(60+Math.max(0,stack.indexOf(d)));});
    document.body.classList.toggle('dialog-open',Boolean(active));
  }

  function sync() {
    const open=dialogs.filter(d=>!d.classList.contains('hidden'));
    for(const d of stack.filter(d=>!open.includes(d))) {
      stack=stack.filter(x=>x!==d);updateLayers();
      const focus=previousFocus.get(d);
      if(focus?.isConnected&&!focus.closest('[inert]')) focus.focus();
    }
    for(const d of open.filter(d=>!stack.includes(d))) {
      previousFocus.set(d,document.activeElement); stack.push(d);updateLayers();
      (focusables(d)[0]||d).focus();
    }
    updateLayers();
  }

  dialogs.forEach(d=>{
    d.setAttribute('role','dialog');d.tabIndex=-1;
    const heading=d.querySelector('h2,h3,h4');
    if(heading){if(!heading.id)heading.id=d.id+'Heading';d.setAttribute('aria-labelledby',heading.id);}
    else d.setAttribute('aria-label','پنجرهٔ ابزار رنگ');
    new MutationObserver(sync).observe(d,{attributes:true,attributeFilter:['class']});
    d.addEventListener('click',e=>{if(e.target===d)close(d);});
  });

  function close(d) {
    if(closers[d.id]) { try { closers[d.id](); } catch(e){} }
    d.classList.add('hidden');
    d.classList.remove('flex');
    sync();
  }

  document.addEventListener('keydown',e=>{
    const active=stack.at(-1);
    if(e.key==='Escape'&&active){e.preventDefault();close(active);return;}
    if(e.key==='Tab'&&active){
      const items=focusables(active),first=items[0],last=items.at(-1);
      if(!first){e.preventDefault();active.focus();}
      else if(e.shiftKey&&(document.activeElement===first||document.activeElement===active)){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&(document.activeElement===last||document.activeElement===active)){e.preventDefault();first.focus();}
    }
    const target=e.target.closest('[role="button"][onclick]:not(button)');
    if(target&&(e.key==='Enter'||e.key===' ')){e.preventDefault();target.click();}
  });

  function labelControls(root) {
    root.querySelectorAll('button').forEach(b=>{
      if(!b.textContent.trim()&&!b.hasAttribute('aria-label')){
        const label=b.title||(b.getAttribute('onclick')?.startsWith('close')?'بستن پنجره':'انتخاب رنگ');
        b.setAttribute('aria-label',label);
      }
    });
    root.querySelectorAll('div[onclick],td[onclick],span[onclick]').forEach(n=>{
      n.setAttribute('role','button');n.tabIndex=0;
    });
    root.querySelectorAll('input,select').forEach(n=>{
      if(n.hasAttribute('aria-label')||n.labels?.length) return;
      const text=n.closest('div')?.querySelector('label')?.textContent.trim();
      n.setAttribute('aria-label',text||n.title||'تنظیم رنگ');
    });
  }

  labelControls(document);
  new MutationObserver(records=>{
    for(const r of records) for(const node of r.addedNodes) if(node.nodeType===1) {
      labelControls(node);
      if(node.matches('button')&&!node.textContent.trim()&&!node.hasAttribute('aria-label'))
        node.setAttribute('aria-label',node.title||'انتخاب رنگ');
    }
  }).observe(document.body,{childList:true,subtree:true});

  sync();
  const note=document.createElement('p');note.className='apca-note';
  note.textContent='راهنمای اندازه و وزن از جدول مرجع APCA با فونت Barlow است؛ خوانایی فونت فارسی نیاز به ارزیابی جداگانه دارد.';
  document.getElementById('evApcaMatrixTbody')?.closest('table')?.after(note);
  document.querySelectorAll('[class*="ev-color-pill"]').forEach(n=>n.setAttribute('aria-label',n.title));
});

window.addEventListener('pagehide',()=>{
  stopARCamera();
  if(threeAnimationFrame)cancelAnimationFrame(threeAnimationFrame);
  if(radarAnimFrame)cancelAnimationFrame(radarAnimFrame);
  if(sharedAudioContext)sharedAudioContext.close();
  threeRenderer?.dispose();
});

document.addEventListener('visibilitychange',()=>{
  if(document.hidden) stopARCamera();
  else if(activeScientificPalette&&currentScientificTab==='radar') drawOklabRadar();
});
