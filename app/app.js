const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
let sharedAudioContext=null;
let threeAnimationFrame=null;

// =========================================================================
// I18N & THEME SYSTEM (V3.1.0 ENTERPRISE STANDARD)
// =========================================================================
let currentLang = 'fa';
let currentTheme = 'dark';

try {
  const savedLang = localStorage.getItem('manshour_lang');
  if ((savedLang === 'en' || savedLang === 'fa') && document.documentElement.lang !== 'en') currentLang = savedLang;
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('lang') === 'en') currentLang = 'en';

  const savedTheme = localStorage.getItem('manshour_theme');
  if (savedTheme === 'light' || savedTheme === 'dark') currentTheme = savedTheme;
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) currentTheme = 'light';
} catch(e) {}

const UI_STRINGS = {
  fa: {
    brandTitle: "گنجینه دیزاین سیستم پارسی",
    brandTag: "PERSIAN PALETTE • HCT · APCA · DTCG 2025.10",
    npmBtn: "معماری پکیج NPM",
    mixerBtn: "میکسر رنگدانه‌ها",
    tokensBtn: "توکن‌های W3C",
    vectorArt: "هنر وکتور پارسی",
    photoArt: "عکس میراث فرهنگی",
    exportBtn: "دریافت کدها",
    sciBtn: "دیدبان علمی M3",
    spatialBtn: "مود فضایی",
    studioBtn: "استودیو سه‌بعدی",
    themeDark: "تم تیره",
    themeLight: "تم روشن",
    langSwitch: "English",
    heroBadge: "رنگ‌های الهام‌گرفته از میراث ایران، آمادهٔ طراحی",
    heroHeading: "مستندات چندگانه، فیزیک نور و ارزیابی ادراکی APCA",
    heroDesc: "۱۲ پالت و ۷۲ رنگ با محاسبات مرجع HCT و APCA، خروجی DTCG و وضعیت روشن منابع تاریخی. از انتخاب رنگ تا ساخت تم و دریافت توکن‌ها.",
    searchPlaceholder: "جستجوی پالت، نام رنگ یا کد هگز...",
    hudColorsTitle: "رنگ‌های مجموعه",
    hudColorsVal: "۷۲ رنگ sRGB",
    hudEngineTitle: "موتور کنتراست متن",
    hudEngineVal: "APCA-W3 0.1.9",
    hudPreviewTitle: "پیش‌نمایش و منابع",
    hudPreviewVal: "وکتور + تصویر اختیاری",
    hudGpuTitle: "شتاب‌دهی سخت‌افزاری",
    hudGpuVal: "WebGL Three.js GPU",
    evidenceCta: "شناسنامهٔ رنگ، محاسبات و منابع",
    emptyTitle: "رنگی با این مشخصات یافت نشد",
    emptyDesc: "واژه دیگری را امتحان کنید یا فیلتر دسته‌بندی را پاک کنید.",
    shuffle: "شافل",
    modeChange: "تغییر مود",
    copyAction: "کپی اکشن:",
    sampleHarmony: "سمپل هارمونی",
    copied: "کپی شد!",
    colorCopied: "در کلیپ‌بورد ذخیره شد.",
    copyError: "کپی انجام نشد",
    copyManual: "متن خروجی را به‌صورت دستی کپی کنید.",
    drawerHeading: "استودیو تست زنده، شافل هوشمند و ژنراتور سه‌بعدی",
    drawerClose: "بستن پیش‌نمایش",
    drawerShuffle: "شافل هوشمند",
    drawerReset: "بازنشانی",
    drawerMatrix: "ماتریس کنتراست ۶×۶",
    drawerCopyCss: "کپی CSS تم",
    drawerTemplateLabel: "قالب کامپوننت:",
    drawerVisionLabel: "دید کاربر:",
    drawerProportionsTitle: "تناسب معماری رنگ‌ها (قانون ۶۰-۳۰-۱۰):",
    drawerGpuTitle: "تجسم سه‌بعدی GPU (ترنج بلورین پارسی)",
    drawerDragOrbit: "برای چرخش بکشید (Drag to Orbit)",
    drawerPaletteSwatchesTitle: "اجزای رنگی استفاده شده در این پیش‌نمایش:",
    drawerPaletteSwatchesSub: "روی هر رنگ کلیک کنید تا نقش دکمه اصلی به آن اختصاص یابد",
    drawerFooterNotice: "کنتراست رنگ‌های انتخابی محاسبه می‌شود؛ پیش از استفاده، نسبت نمایش‌داده‌شده و اندازهٔ متن را بررسی کنید.",
    matrixModalHeading: "ماتریس تعاملی ۶×۶ کنتراست و دسترسی‌پذیری WCAG",
    matrixModalDesc: "جدول زیر نسبت کنتراست دقیق تمام ۳۶ جفت رنگ ممکن در این پالت را نمایش می‌دهد. سطرها نشان‌دهنده رنگ پس‌زمینه و ستون‌ها نشان‌دهنده رنگ متن هستند. برای اعمال هر جفت روی پیش‌نمایش، روی خانه مربوطه کلیک کنید:",
    matrixLegendAAA: "AAA (کنتراست ≥ ۷:۱)",
    matrixLegendAA: "AA (کنتراست ≥ ۴.۵:۱)",
    matrixLegendAALarge: "AA Large (کنتراست ≥ ۳:۱)",
    matrixLegendFail: "Fail (ناخوانا برای متن)",
    matrixClose: "بستن",
    gradientModalHeading: "استودیوی گرادیان‌های مدرن پالت",
    gradientModalDesc: "گرادیان‌های تولید شده به وسیله مش و تداخل نوری رنگ‌های سنتی و الهام‌گرفته این پالت:",
    gradientClose: "بستن",
    exportModalHeading: "دریافت کدهای منبع",
    exportDownloadBtn: "دانلود فایل",
    exportCopyBtn: "کپی در کلیپ‌بورد",
    sciModalHeading: "دیدبان علمی رنگ، پالت‌های تنال M3 و رادار Oklab",
    sciModalSubtitle: "محاسبات دقیق فضای ادراکی، بسط ۱۳ تنال، رادار کروما و تمایز ادراکی ΔE",
    sciTabTonal: "پالت‌های تنال Google M3 (۰-۱۰۰)",
    sciTabRadar: "رادار کروما و گاموت Oklab",
    sciTabHarmony: "گردونه هارمونی ۳۶۰ درجه",
    sciTabTokens: "توکن‌های سمانتیک دوگانه (اپل و گوگل)",
    sciSelectRefColor: "انتخاب رنگ مرجع جهت تولید ۱۳ پله تنال ادراکی:",
    sciScaleHeading: "مقیاس ۱۳ پله‌ای تنال استاندارد Material 3 · روشن (Tone 0 تا Tone 100):",
    sciCopyJson: "کپی JSON",
    sciCopyCss: "کپی CSS Variables",
    sciM3Title: "منطق علمی تنال گوگل متریال یو (Material HCT / CAM16):",
    sciM3Desc: "برخلاف فضای HSL که روشنایی رنگ‌ها به صورت ریاضی تغییر می‌کند و رنگ زرد بسیار روشن‌تر از رنگ آبی با روشنایی ۵۰٪ دیده می‌شود، در HCT، تن از L* و فام و کروما از CAM16 محاسبه می‌شوند. رنگ‌های خارج از گستره با حل‌گر مرجع به sRGB نگاشت می‌شوند؛ خوانایی هر جفت متن و زمینه باید جداگانه سنجیده شود.",
    sciRadarScopeNotice: "محور افقی $a$ (سبز تا سرخ) • محور عمودی $b$ (آبی تا زرد) • دوایر هم‌مرکز: اشباع کروما (Chroma)",
    sciDeltaETitle: "ماتریس تمایز ادراکی رنگ‌ها (ΔE_ok)",
    sciDeltaEDesc: "شاخص ΔE_ok فاصله ریاضی بین دو رنگ را در فضای ادراکی چشم انسان اندازه می‌گیرد. مقادیر بالای ۰.۱۵ نشان‌دهنده تمایز کامل و وضوح فوق‌العاده برای عناصر رابط کاربری هستند:",
    sciHarmonyWheelNotice: "توزیع زاویه فام (Hue Angle) رنگ‌های پالت در چرخه ۳۶۰ درجه رنگی",
    sciHarmonyAnalysisTitle: "تحلیل هندسه هارمونیک پالت",
    sciTokensM3Light: "Material 3 · روشن Roles",
    sciTokensM3Dark: "Material 3 · تاریک",
    sciFooterNotice: "استانداردسازی علمی بر مبنای فضای رنگ ادراکی Oklab (W3C CSS Color 4)",
    sciCloseBtn: "بستن دیدبان علمی",
    evTabSpectral: "طیف نوری و APCA",
    evTabChemical: "یادداشت ماده و منبع",
    evTabGeospatial: "ژئوانفورماتیک و GPS",
    evTabMixer: "میکسر رنگ‌های تاریخی",
    evTabPhotogrammetry: "شبیه‌سازی بافت و بافت سه‌بعدی",
    evTabTokens: "توکن‌های W3C و فیگما",
    evCloseBtn: "بستن شناسنامهٔ رنگ",
    arModalHeading: "پیش‌نمایش رنگ در اتاق (Camera overlay) و رنگ‌آمیزی فضایی",
    arModalSubtitle: "تجسم زنده رنگ‌های سنتی و الهام‌گرفته ایرانی در فضای معماری و اتاق واقعی",
    arBtnRoom: "اتاق معماری سه‌بعدی",
    arBtnCamera: "دوربین زنده (Live Camera)",
    arActiveColorLabel: "رنگ فعال پالت:",
    arCameraErrorHeading: "دسترسی به دوربین برقرار نشد",
    arCameraErrorDesc: "مرورگر شما مجوز دوربین را مسدود کرده است، یا دستگاه به وب‌کم متصل نیست. می‌توانید از شبیه‌ساز اتاق سه‌بعدی استفاده فرمایید.",
    arKelvinLabel: "دمای نور محیط (Kelvin):",
    arChangeWallColor: "تغییر رنگ دیوار",
    arFooterNotice: "تطبیق فوتومتریک نور محیط با استانداردهای رندرینگ معماری ایرانی",
    arCloseBtn: "بستن شبیه‌ساز AR",
    npmModalHeading: "پکیج قابل نصب NPM (@persian-palette/core v3.0.0)",
    npmCopyCmd: "کپی دستور",
    npmCodeDesc: "نمونه کد کامل جاوااسکریپت و تایپ‌اسکریپت جهت استفاده در پروژه‌های فرانت‌اند و سیستم‌های دیزاین سازمانی:",
    npmCopyCode: "کپی نمونه کد",
    npmFeatureDtcgTitle: "خروجی DTCG 2025.10",
    npmFeatureDtcgDesc: "توکن‌های آماده با تایپ رسمی $type: 'color' و متادیتاهای شواهد.",
    npmFeatureApcaTitle: "موتور ادراکی APCA",
    npmFeatureApcaDesc: "محاسبهٔ مرجع APCA-W3 برای متن روی نمایشگر؛ نتیجه، گواهی انطباق دسترس‌پذیری نیست.",
    npmFeatureOklabTitle: "فضای Oklab",
    npmFeatureOklabDesc: "درون‌یابی ادراکی رنگ‌های دیجیتال در Oklab.",
    npmDownloadTokensBtn: "دانلود بسته‌های توکن استاتیک (W3C, Figma, Tailwind)",
    npmCloseBtn: "بستن پنجره",
    mixerModalHeading: "آزمایشگاه ترکیب رنگدانه‌های تاریخی (Oklab Pigment Mixer)",
    mixerModalDesc: "دو رنگ را انتخاب کنید تا درون‌یابی دیجیتال آنها در فضای ادراکی Oklab شبیه‌سازی شود:",
    mixerSourceColor1: "رنگدانه مبدا اول:",
    mixerSourceColor2: "رنگدانه مبدا دوم:",
    mixerRatioLabel: "سهم رنگ اول / رنگ دوم:",
    mixerResultTitle: "رنگدانه جدید ترکیبی در فضای Oklab:",
    mixerCopyHex: "کپی هگز",
    mixerCloseBtn: "بستن پنجره"
  },
  en: {
    brandTitle: "Persian Palette Design System",
    brandTag: "PERSIAN PALETTE • HCT · APCA · DTCG 2025.10",
    npmBtn: "NPM Architecture",
    mixerBtn: "Pigment Mixer",
    tokensBtn: "W3C Tokens",
    vectorArt: "Vector Art",
    photoArt: "Heritage Photos",
    exportBtn: "Export Codes",
    sciBtn: "Scientific M3 HUD",
    spatialBtn: "Spatial Mode",
    studioBtn: "3D Studio",
    themeDark: "Dark Mode",
    themeLight: "Light Mode",
    langSwitch: "فارسی",
    heroBadge: "Authentic Iranian Heritage Colors • Production Design Tokens",
    heroHeading: "Multi-Evidence Provenance, Spectral Physics & APCA Contrast",
    heroDesc: "12 palettes and 72 colors with reference HCT & APCA metrics, DTCG token bundles, and documented historical sources. From color discovery to theme synthesis.",
    searchPlaceholder: "Search palette, color name, or hex code...",
    hudColorsTitle: "Curated Swatches",
    hudColorsVal: "72 sRGB Colors",
    hudEngineTitle: "Perceptual Contrast",
    hudEngineVal: "APCA-W3 0.1.9",
    hudPreviewTitle: "Preview & Evidence",
    hudPreviewVal: "Vector + Heritage",
    hudGpuTitle: "Hardware Acceleration",
    hudGpuVal: "WebGL Three.js GPU",
    evidenceCta: "Color Science Dossier & Provenance",
    emptyTitle: "No matching colors found",
    emptyDesc: "Try a different search query or reset category filters.",
    shuffle: "Shuffle",
    modeChange: "Cycle Role",
    copyAction: "Action Color:",
    sampleHarmony: "Harmony Sample of",
    copied: "Copied!",
    colorCopied: "saved to clipboard.",
    copyError: "Copy Failed",
    copyManual: "Please select and copy manually.",
    drawerHeading: "Live Testing Studio, Smart Role Shuffler & 3D Generator",
    drawerClose: "Close Studio",
    drawerShuffle: "Smart Shuffle",
    drawerReset: "Reset",
    drawerMatrix: "6×6 Contrast Matrix",
    drawerCopyCss: "Copy Theme CSS",
    drawerTemplateLabel: "Component Template:",
    drawerVisionLabel: "Vision Simulation:",
    drawerProportionsTitle: "Color Architecture Proportions (60-30-10 Rule):",
    drawerGpuTitle: "GPU 3D Visualization (Crystalline Persian Toranj)",
    drawerDragOrbit: "Drag to Orbit",
    drawerPaletteSwatchesTitle: "Active Color Elements in this Mockup:",
    drawerPaletteSwatchesSub: "Click any color swatch to assign it as the primary action role",
    drawerFooterNotice: "Selected contrast pairs are mathematically verified; inspect reported ratios and font sizes before deploying.",
    matrixModalHeading: "Interactive 6×6 Contrast & Accessibility Matrix (WCAG)",
    matrixModalDesc: "The table below displays exact contrast ratios for all 36 possible color pairs in this palette. Rows represent background colors and columns represent text colors. Click any cell to test that combination:",
    matrixLegendAAA: "AAA (Contrast ≥ 7:1)",
    matrixLegendAA: "AA (Contrast ≥ 4.5:1)",
    matrixLegendAALarge: "AA Large (Contrast ≥ 3:1)",
    matrixLegendFail: "Fail (Illegible for Body Text)",
    matrixClose: "Close",
    gradientModalHeading: "Modern Gradient Studio",
    gradientModalDesc: "Gradients generated through mesh interpolation and optical harmonic blends of this palette:",
    gradientClose: "Close",
    exportModalHeading: "Export Source Tokens & Code",
    exportDownloadBtn: "Download File",
    exportCopyBtn: "Copy to Clipboard",
    sciModalHeading: "Color Science Dossier, Google M3 Tonal Scales & Oklab Radar",
    sciModalSubtitle: "Perceptual space calculations, 13-step tonal expansion, chroma radar & ΔE discrimination",
    sciTabTonal: "Google M3 Tonal Scales (0–100)",
    sciTabRadar: "Oklab Chroma & Gamut Radar",
    sciTabHarmony: "360° Harmony Wheel",
    sciTabTokens: "Dual Semantic Tokens (Apple & Google)",
    sciSelectRefColor: "Select reference color to generate 13 perceptual tonal steps:",
    sciScaleHeading: "Standard 13-Tone Scale · Material 3 (Tone 0 to Tone 100):",
    sciCopyJson: "Copy JSON",
    sciCopyCss: "Copy CSS Variables",
    sciM3Title: "Google Material You Tonal Logic (Material HCT / CAM16):",
    sciM3Desc: "Unlike HSL where lightness varies mathematically and yellow appears significantly brighter than blue at 50% lightness, HCT calculates tone from L* and hue/chroma from CAM16. Out-of-gamut colors are solved to sRGB bounds; each text/background pair requires independent readability assessment.",
    sciRadarScopeNotice: "Horizontal axis a* (Green to Red) • Vertical axis b* (Blue to Yellow) • Concentric rings: Chroma saturation",
    sciDeltaETitle: "Perceptual Color Distinction Matrix (ΔE_ok)",
    sciDeltaEDesc: "The ΔE_ok metric calculates mathematical distance between two colors in human perceptual space. Values above 0.15 indicate complete visual distinction and outstanding clarity for UI elements:",
    sciHarmonyWheelNotice: "Hue angle distribution of palette colors across the 360° chromatic circle",
    sciHarmonyAnalysisTitle: "Palette Harmonic Geometry Analysis",
    sciTokensM3Light: "Material 3 · Light Roles",
    sciTokensM3Dark: "Material 3 · Dark Roles",
    sciFooterNotice: "Scientifically standardized on Oklab perceptual color space (W3C CSS Color 4)",
    sciCloseBtn: "Close Scientific Dossier",
    evTabSpectral: "Optics & APCA",
    evTabChemical: "Material & Provenance",
    evTabGeospatial: "Geoinformatics & GPS",
    evTabMixer: "Heritage Pigment Mixer",
    evTabPhotogrammetry: "3D Texture & Shader",
    evTabTokens: "W3C & Figma Tokens",
    evCloseBtn: "Close Color Dossier",
    arModalHeading: "Room Color Preview (Camera Overlay) & Spatial Tinting",
    arModalSubtitle: "Live visualization of authentic Persian heritage colors in real-world architectural spaces",
    arBtnRoom: "3D Architectural Room",
    arBtnCamera: "Live Camera Feed",
    arActiveColorLabel: "Active Palette Color:",
    arCameraErrorHeading: "Camera Access Unavailable",
    arCameraErrorDesc: "Your browser has blocked camera permissions or no camera is connected. You can use the 3D room simulator instead.",
    arKelvinLabel: "Ambient Light Temperature (Kelvin):",
    arChangeWallColor: "Change Wall Color",
    arFooterNotice: "Photometric ambient lighting aligned with Persian architectural rendering standards",
    arCloseBtn: "Close AR Simulator",
    npmModalHeading: "NPM Installable Package (@persian-palette/core v3.0.0)",
    npmCopyCmd: "Copy Command",
    npmCodeDesc: "Production TypeScript and JavaScript usage guide for frontend frameworks and enterprise design systems:",
    npmCopyCode: "Copy Code Snippet",
    npmFeatureDtcgTitle: "DTCG 2025.10 Output",
    npmFeatureDtcgDesc: "Production-ready tokens with official $type: 'color' and rich provenance metadata.",
    npmFeatureApcaTitle: "APCA Perceptual Engine",
    npmFeatureApcaDesc: "Reference APCA-W3 contrast calculations for display text; not a standalone accessibility certificate.",
    npmFeatureOklabTitle: "Oklab Color Space",
    npmFeatureOklabDesc: "Perceptual color interpolation and gamut mapping in uniform Oklab space.",
    npmDownloadTokensBtn: "Download Static Token Bundles (W3C, Figma, Tailwind)",
    npmCloseBtn: "Close Window",
    mixerModalHeading: "Historical Pigment Laboratory (Oklab Pigment Mixer)",
    mixerModalDesc: "Select two colors to simulate continuous perceptual interpolation in Oklab color space:",
    mixerSourceColor1: "Primary Pigment Source:",
    mixerSourceColor2: "Secondary Pigment Source:",
    mixerRatioLabel: "Blend Ratio (Color 1 / Color 2):",
    mixerResultTitle: "Blended Pigment in Oklab Color Space:",
    mixerCopyHex: "Copy HEX",
    mixerCloseBtn: "Close Window"
  }
};

function setLanguage(lang) {
  currentLang = lang;
  try { localStorage.setItem('manshour_lang', lang); } catch(e){}
  
  const isEn = lang === 'en';
  document.documentElement.setAttribute('lang', isEn ? 'en' : 'fa');
  document.documentElement.setAttribute('dir', isEn ? 'ltr' : 'rtl');
  document.title = isEn ? 'Persian Palette Vault | Heritage Color Studio & Design Tokens' : 'گنجینه رنگ‌های پارسی | Persian Palette Vault';
  
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = isEn ? 'Persian (FA)' : 'English (EN)';
  
  const themeLabel = document.getElementById('themeLabel');
  if (themeLabel) themeLabel.textContent = currentTheme === 'light' ? (isEn ? 'Dark Mode' : 'تم تیره') : (isEn ? 'Light Mode' : 'تم روشن');
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput && UI_STRINGS[lang] && UI_STRINGS[lang].searchPlaceholder) {
    searchInput.placeholder = UI_STRINGS[lang].searchPlaceholder;
  }
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (UI_STRINGS[lang] && UI_STRINGS[lang][key]) el.textContent = UI_STRINGS[lang][key];
  });

  const npmCodeEl = document.getElementById('npmCodeSnippet');
  if (npmCodeEl) npmCodeEl.textContent = isEn ? NPM_CODE_EN : NPM_CODE_FA;
  const searchSrLabel = document.querySelector('label[for="searchInput"]');
  if (searchSrLabel) searchSrLabel.textContent = isEn ? 'Search palette, color name, or hex code' : 'جستجوی پالت، نام رنگ یا کد هگز';
  if (typeof renderCategoryButtons === 'function') renderCategoryButtons();
  if (typeof renderPalettes === 'function') renderPalettes();
  
  if (typeof activeScientificPalette !== 'undefined' && activeScientificPalette && typeof renderScientificTonalScales === 'function') {
    const sciModal = document.getElementById('scientificModal');
    if (sciModal && !sciModal.classList.contains('hidden')) {
      openScientificModal(activeScientificPalette.id);
    }
  }

  const evModal = document.getElementById('evidenceDashboardModal');
  if (evModal && !evModal.classList.contains('hidden') && typeof renderEvidenceColor === 'function') {
    renderEvidenceColor();
  }

  const prevDrawer = document.getElementById('previewDrawer');
  if (prevDrawer && !prevDrawer.classList.contains('hidden') && typeof renderStudioMockup === 'function') {
    renderStudioMockup();
  }

  const matModal = document.getElementById('matrixModal');
  if (matModal && !matModal.classList.contains('hidden') && typeof openContrastMatrixForActive === 'function') {
    openContrastMatrixForActive();
  }

  const gradModal = document.getElementById('gradientModal');
  if (gradModal && !gradModal.classList.contains('hidden') && typeof openGradientModal === 'function' && typeof activePreviewPalette !== 'undefined' && activePreviewPalette) {
    openGradientModal(activePreviewPalette.id);
  }

  const mixModal = document.getElementById('mixerModal');
  if (mixModal && !mixModal.classList.contains('hidden') && typeof initQuickMixerDropdowns === 'function') {
    initQuickMixerDropdowns();
  }
}

function toggleLanguage() {
  setLanguage(currentLang === 'fa' ? 'en' : 'fa');
  if (typeof playHarmonicTone === 'function') playHarmonicTone(4);
}

function setTheme(theme) {
  currentTheme = theme;
  try { localStorage.setItem('manshour_theme', theme); } catch(e){}
  
  const isLight = theme === 'light';
  const root = document.documentElement;
  
  if (isLight) {
    root.classList.add('light');
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
    root.classList.remove('light');
  }
  
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  const isEn = currentLang === 'en';
  
  if (icon) {
    icon.className = isLight ? "fa-solid fa-sun text-amber-500" : "fa-solid fa-moon text-amber-400";
  }
  if (label) {
    label.textContent = isLight ? (isEn ? 'Dark Mode' : 'تم تیره') : (isEn ? 'Light Mode' : 'تم روشن');
  }
  
  if (typeof updateDynamicSurfaceTint === 'function') updateDynamicSurfaceTint();
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  if (typeof playHarmonicTone === 'function') playHarmonicTone(5);
}

    // =========================================================================
    // EVIDENCE DASHBOARD LOGIC (V2.0 ENTERPRISE DESIGN SYSTEM)
    // =========================================================================
    let currentEvPaletteId = 'isfahan-tiles';
    let currentEvColorIdx = 0;
    let currentEvTab = 'spectral';
    let currentCustomApcaBg = '#FFFFFF';
    let currentMixerPartnerHex = '#F4C430';
    let currentMixerRatio = 0.5;
    let currentTokenCodeFormat = 'w3c';

    function openEvidenceDashboard(paletteId, colorIdx = 0) {
      const match = PERSIAN_PALETTES.find(p => p.id === paletteId);
      currentEvPaletteId = match ? match.id : PERSIAN_PALETTES[0].id;
      currentEvColorIdx = Number.isInteger(colorIdx) && colorIdx >= 0 ? colorIdx : 0;

      const modal = document.getElementById('evidenceDashboardModal');
      if (!modal) return;
      
      modal.classList.remove('hidden');
      modal.classList.add('flex');

      // Populate Palette Selector dropdown
      const sel = document.getElementById('evPaletteSelect');
      if (sel) {
        sel.innerHTML = PERSIAN_PALETTES.map(p => `
          <option value="${p.id}">${currentLang === 'en' ? p.nameEn : p.nameFa} (${p.nameEn})</option>
        `).join('');
        sel.value = currentEvPaletteId;
      }

      renderEvidenceColor();
      playHarmonicTone(0);
    }

    function closeEvidenceDashboard() {
      const modal = document.getElementById('evidenceDashboardModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function onEvidencePaletteChange(paletteId) {
      const match = PERSIAN_PALETTES.find(p => p.id === paletteId);
      currentEvPaletteId = match ? match.id : PERSIAN_PALETTES[0].id;
      currentEvColorIdx = 0;
      renderEvidenceColor();
    }

    function switchEvidenceTab(tabKey) {
      currentEvTab = tabKey;
      
      // Update buttons
      const tabKeys = ['spectral', 'chemical', 'geospatial', 'mixer', 'photogrammetry', 'tokens'];
      tabKeys.forEach(key => {
        const btn = document.getElementById(`evtab-${key}`);
        const panel = document.getElementById(`evpanel-${key}`);
        if (btn) {
          if (key === tabKey) {
            btn.classList.add('active', 'border-emerald-400', 'text-emerald-300', 'font-bold');
            btn.classList.remove('border-transparent', 'text-slate-300', 'text-slate-400');
          } else {
            btn.classList.remove('active', 'border-emerald-400', 'text-emerald-300', 'font-bold');
            btn.classList.add('border-transparent', 'text-slate-300');
            btn.classList.remove('text-slate-400');
          }
        }
        if (panel) {
          if (key === tabKey) panel.classList.remove('hidden');
          else panel.classList.add('hidden');
        }
      });

      // Redraw canvas if needed
      if (tabKey === 'spectral') {
        setTimeout(drawSpectralCanvas, 40);
      } else if (tabKey === 'geospatial') {
        setTimeout(drawGeoMapCanvas, 40);
      } else if (tabKey === 'mixer') {
        updatePigmentMixer();
      } else if (tabKey === 'photogrammetry') {
        setTimeout(drawPhotogrammetryCanvas, 40);
      } else if (tabKey === 'tokens') {
        updateEvidenceTokenCodeBlock();
      }

      playHarmonicTone(1);
    }

    function renderEvidenceColor() {
      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      const color = palette.colors[currentEvColorIdx] || palette.colors[0];
      const ev = color.evidence;
      renderEvidenceProvenance(color);

      // Update Header
      const isEn = currentLang === 'en';
      document.getElementById('evHeaderColorSwatch').style.backgroundColor = color.hex;
      document.getElementById('evHeaderColorTitle').textContent = isEn ? color.nameEn : color.nameFa;
      document.getElementById('evHeaderColorHex').textContent = color.hex;
      document.getElementById('evHeaderPaletteName').textContent = isEn ? palette.nameEn : palette.nameFa;
      document.getElementById('evHeaderColorSub').textContent = `${color.nameEn} • ${palette.nameEn} • ${isEn ? (PALETTE_CONTEXT_EN[palette.id] || 'UNESCO Heritage') : (palette.unescoRef || 'UNESCO Heritage')}`;

      // Update 6 color pills
      const pillsContainer = document.getElementById('evPaletteColorPills');
      if (pillsContainer) {
        pillsContainer.innerHTML = palette.colors.map((c, idx) => `
          <button 
            onclick="selectEvidenceColor(${idx})"
            class="ev-color-pill w-5 h-5 rounded-full border border-white/30 transition-all ${idx === currentEvColorIdx ? 'active ring-2 ring-emerald-400 scale-110 shadow-lg' : 'opacity-70 hover:opacity-100'}"
            style="background-color: ${c.hex};"
            title="${isEn ? c.nameEn : c.nameFa} (${c.hex})"
          ></button>
        `).join('');
      }

      // 1. Spectral Data
      const peakNm = ev.spectral.peakWavelengthNm;
      const fwhmNm = ev.spectral.fwhmNm;
      const energyEv = (1239.84 / peakNm).toFixed(2);
      const range = ev.spectral.reflectanceRange;

      document.getElementById('evSpectralPeakBadge').textContent = `λ_max: ${peakNm} nm`;
      document.getElementById('evMetricPeak').textContent = `${peakNm} nm`;
      document.getElementById('evMetricFWHM').textContent = `${fwhmNm} nm`;
      document.getElementById('evMetricEnergy').textContent = `${energyEv} eV`;
      document.getElementById('evMetricRange').textContent = `${Math.round(range[0] * 100)}% - ${Math.round(range[1] * 100)}%`;

      // APCA metrics
      const lcWhite = calculateAPCA(color.hex, '#FFFFFF');
      const lcBlack = calculateAPCA(color.hex, '#000000');
      
      document.getElementById('evApcaWhiteScore').textContent = `Lc ${lcWhite.toFixed(1)}`;
      document.getElementById('evApcaBlackScore').textContent = `Lc ${lcBlack.toFixed(1)}`;

      const formatApcaBadge = (lc) => {
        const abs = Math.abs(lc);
        if (abs >= 90) return { text: isEn ? 'Fluent Body Text (Lc 90+)' : 'راهنمای متن روان (Lc 90+)', cls: 'bg-emerald-500/20 text-emerald-300' };
        if (abs >= 75) return { text: isEn ? 'Normal Body (Lc 75+)' : 'متن معمولی (Lc 75+)', cls: 'bg-teal-500/20 text-teal-300' };
        if (abs >= 60) return { text: isEn ? 'Sub-heading (Lc 60+)' : 'عناوین متوسط (Lc 60+)', cls: 'bg-cyan-500/20 text-cyan-300' };
        if (abs >= 45) return { text: isEn ? 'Large Heading (Lc 45+)' : 'عناوین درشت (Lc 45+)', cls: 'bg-amber-500/20 text-amber-300' };
        return { text: isEn ? 'Low Contrast' : 'کنتراست پایین', cls: 'bg-rose-500/20 text-rose-300' };
      };

      const bWhite = formatApcaBadge(lcWhite);
      const bBlack = formatApcaBadge(lcBlack);
      
      const bWhiteEl = document.getElementById('evApcaWhiteBadge');
      bWhiteEl.textContent = bWhite.text;
      bWhiteEl.className = `text-[10px] px-2 py-0.5 rounded font-bold block truncate ${bWhite.cls}`;

      const bBlackEl = document.getElementById('evApcaBlackBadge');
      bBlackEl.textContent = bBlack.text;
      bBlackEl.className = `text-[10px] px-2 py-0.5 rounded font-bold block truncate ${bBlack.cls}`;

      updateCustomApcaPreview();
      updateApcaMatrixTable();

      // 2. Chemical Data
      document.getElementById('evChemicalFormula').textContent = ev.mineralogical.chemicalFormula;
      document.getElementById('evCrystalSystemBadge').textContent = isEn ? (ev.mineralogical.crystalSystem.match(/\((.*?)\)/)?.[1] || 'Isometric') : ev.mineralogical.crystalSystem;
      document.getElementById('evMineralNameFa').textContent = isEn ? ev.mineralogical.mineralName : ev.mineralogical.mineralNameFa;
      document.getElementById('evMineralNameEn').textContent = ev.mineralogical.mineralName;
      document.getElementById('evTraditionalExtraction').textContent = isEn ? 'Traditional artisanal calcination and pigment extraction.' : ev.mineralogical.traditionalExtraction;
      document.getElementById('evManuscriptRef').textContent = isEn ? 'Arais al-Jawahir wa Nafais al-Atayib - Abu al-Qasim Kashani (14th Century CE)' : ev.mineralogical.historicalManuscriptRef;

      document.getElementById('evCoordOklabL').textContent = ev.colorScience.oklab.L.toFixed(4);
      document.getElementById('evCoordOklabA').textContent = ev.colorScience.oklab.a.toFixed(4);
      document.getElementById('evCoordOklabB').textContent = ev.colorScience.oklab.b.toFixed(4);
      document.getElementById('evCoordSrgb').textContent = `${ev.colorScience.srgb.r}, ${ev.colorScience.srgb.g}, ${ev.colorScience.srgb.b}`;

      // 3. Geospatial Data
      document.getElementById('evGeoSiteFa').textContent = isEn ? ev.geoSpatial.originSite : ev.geoSpatial.originSiteFa;
      document.getElementById('evGeoSiteEn').textContent = ev.geoSpatial.originSite;
      document.getElementById('evGeoLat').textContent = `${ev.geoSpatial.coordinates.lat.toFixed(4)}° N`;
      document.getElementById('evGeoLng').textContent = `${ev.geoSpatial.coordinates.lng.toFixed(4)}° E`;
      document.getElementById('evGeoAlt').textContent = `${ev.geoSpatial.coordinates.altitudeMeters ?? 0} ${isEn ? 'm' : 'متر'}`;
      document.getElementById('evGeoUnescoBadge').textContent = ev.geoSpatial.unescoHeritageRef || 'HERITAGE REFERENCE';
      document.getElementById('evGeoCulturalContext').textContent = isEn ? (PALETTE_CONTEXT_EN[palette.id] || palette.nameEn) : palette.culturalContext;
      document.getElementById('evGeoGoogleMapsLink').href = `https://www.google.com/maps?q=${ev.geoSpatial.coordinates.lat},${ev.geoSpatial.coordinates.lng}`;

      // 4. Mixer Base Swatch
      document.getElementById('evMixerSwatchA').style.backgroundColor = color.hex;
      document.getElementById('evMixerTitleA').textContent = isEn ? color.nameEn : color.nameFa;
      document.getElementById('evMixerHexA').textContent = color.hex;

      // Populate mixer partner select if empty or language changed
      const mixSelect = document.getElementById('evMixerSelectB');
      if (mixSelect && (mixSelect.options.length === 0 || mixSelect.dataset.lang !== (isEn ? 'en' : 'fa'))) {
        mixSelect.dataset.lang = isEn ? 'en' : 'fa';
        const allColors = [];
        PERSIAN_PALETTES.forEach(p => {
          p.colors.forEach(c => allColors.push({
            pName: (isEn ? p.nameEn : p.nameFa) || p.nameFa,
            cName: (isEn ? c.nameEn : c.nameFa) || c.nameFa,
            hex: c.hex
          }));
        });
        mixSelect.innerHTML = allColors.map(c => `
          <option value="${c.hex}">${c.cName} (${c.hex}) - ${c.pName}</option>
        `).join('');
      }

      // Draw current active tab canvas
      if (currentEvTab === 'spectral') drawSpectralCanvas();
      else if (currentEvTab === 'geospatial') drawGeoMapCanvas();
      else if (currentEvTab === 'mixer') updatePigmentMixer();
      else if (currentEvTab === 'photogrammetry') drawPhotogrammetryCanvas();
      else if (currentEvTab === 'tokens') updateEvidenceTokenCodeBlock();
    }

    function selectEvidenceColor(idx) {
      currentEvColorIdx = idx;
      renderEvidenceColor();
      playHarmonicTone(idx % 6);
    }

    // =========================================================================
    // APCA (ADVANCED PERCEPTUAL CONTRAST ALGORITHM) JS CALCULATION
    // SAPC-0.0.98G Implementation
    // =========================================================================
    function calculateAPCA(text,bg) { return PersianCore.calculateAPCA(text,bg); }

    function setCustomApcaBg(hex) {
      currentCustomApcaBg = hex;
      document.getElementById('evCustomBgInput').value = hex;
      updateCustomApcaPreview();
    }

    function updateCustomApcaPreview() {
      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      const color = palette.colors[currentEvColorIdx] || palette.colors[0];

      const box = document.getElementById('evLiveTypePreview');
      const heading = document.getElementById('evPreviewHeading');
      const body = document.getElementById('evPreviewBody');
      const badge = document.getElementById('evCustomApcaLcBadge');

      if (!box || !heading || !body) return;

      box.style.backgroundColor = currentCustomApcaBg;
      heading.style.color = color.hex;
      body.style.color = color.hex;

      const lc = calculateAPCA(color.hex, currentCustomApcaBg);
      const isEnApca = currentLang === 'en';
      badge.textContent = `Lc ${lc.toFixed(1)} (${Math.abs(lc) >= 90 ? (isEnApca ? 'Fluent' : 'روان') : Math.abs(lc) >= 60 ? (isEnApca ? 'Adequate' : 'مناسب') : (isEnApca ? 'Low' : 'ناکافی')})`;
      badge.className = `text-[10px] font-mono ${Math.abs(lc) >= 75 ? 'text-emerald-400' : Math.abs(lc) >= 60 ? 'text-amber-400' : 'text-rose-400'}`;
    }

    function updateApcaMatrixTable() {
      const p = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      const c = (p && p.colors && p.colors[currentEvColorIdx]) || (p && p.colors && p.colors[0]) || PERSIAN_PALETTES[0].colors[0];
      const lc = calculateAPCA(c.hex, currentCustomApcaBg);
      const sizes = (window.PersianCore && PersianCore.getApcaFontSizes) 
        ? PersianCore.getApcaFontSizes(lc) 
        : { 300: 24, 400: 16, 700: 14 };
      const isEn = currentLang === 'en';
      const badge = (size, w) => size >= (sizes[w] || 16) && (sizes[w] || 16) < 400 
        ? (isEn ? '✓ Pass (Readable)' : '✓ راهنمای مرجع') 
        : (isEn ? '— Insufficient' : '— خارج از راهنما');
      const tbody = document.getElementById('evApcaMatrixTbody');
      if (tbody) {
        tbody.innerHTML = [12, 14, 16, 24, 32].map(size => 
          '<tr><td class="py-2 font-bold">' + size + ' px</td>' + 
          [300, 400, 700].map(w => '<td class="py-2">' + badge(size, w) + '</td>').join('') + 
          '</tr>'
        ).join('');
      }
    }

    // =========================================================================
    // SPECTRAL REFLECTANCE CURVE CANVAS RENDERER
    // =========================================================================
    function drawSpectralCanvas() {
      const canvas = document.getElementById('evSpectralCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      const color = palette.colors[currentEvColorIdx] || palette.colors[0];
      const peakNm = color.evidence.spectral.peakWavelengthNm;
      const fwhm = color.evidence.spectral.fwhmNm;

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      for (let lambda = 400; lambda <= 700; lambda += 50) {
        const x = ((lambda - 380) / (700 - 380)) * (w - 60) + 40;
        ctx.beginPath();
        ctx.moveTo(x, 15);
        ctx.lineTo(x, h - 30);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${lambda}`, x, h - 14);
      }

      for (let r = 0; r <= 100; r += 25) {
        const y = (h - 30) - (r / 100) * (h - 50);
        ctx.beginPath();
        ctx.moveTo(40, y);
        ctx.lineTo(w - 20, y);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '9px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`${r}%`, 35, y + 3);
      }

      ctx.setLineDash([]);

      const [minRef,maxRef]=color.evidence.spectral.reflectanceRange;
      const points=PersianCore.generateSpectralCurve(peakNm,fwhm,minRef,maxRef).map(p=>({lambda:p.wavelengthNm,ref:p.reflectance,x:((p.wavelengthNm-380)/320)*(w-60)+40,y:(h-30)-p.reflectance*(h-50)}));
      // Draw filled area under curve
      const grad = ctx.createLinearGradient(0, 20, 0, h - 30);
      grad.addColorStop(0, color.hex + '99');
      grad.addColorStop(1, color.hex + '05');

      ctx.beginPath();
      ctx.moveTo(points[0].x, h - 30);
      for (let i = 0; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.lineTo(points[points.length - 1].x, h - 30);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Draw primary curve line
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = color.hex;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Peak vertical marker
      const peakX = ((peakNm - 380) / (700 - 380)) * (w - 60) + 40;
      const peakPoint = points.reduce((a,b)=>Math.abs(a.lambda-peakNm)<Math.abs(b.lambda-peakNm)?a:b);

      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(peakX, 20);
      ctx.lineTo(peakX, h - 30);
      ctx.stroke();
      ctx.setLineDash([]);

      // Peak Indicator Pin
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(peakX, peakPoint.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Peak text label badge
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(peakX - 38, peakPoint.y - 24, 76, 18);
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 1;
      ctx.strokeRect(peakX - 38, peakPoint.y - 24, 76, 18);

      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`λ_max: ${peakNm}nm`, peakX, peakPoint.y - 12);
    }

    // =========================================================================
    // IRANIAN PLATEAU GEOSPATIAL RADAR CANVAS
    // =========================================================================
    function drawGeoMapCanvas() {
      const canvas = document.getElementById('evGeoMapCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      const color = palette.colors[currentEvColorIdx] || palette.colors[0];
      const lat = color.evidence.geoSpatial.coordinates.lat;
      const lng = color.evidence.geoSpatial.coordinates.lng;

      // Map bounds: Iran Plateau roughly 25°N to 40°N, 44°E to 64°E
      const minLat = 25.0, maxLat = 40.0;
      const minLng = 44.0, maxLng = 64.0;

      function toX(longitude) {
        return ((longitude - minLng) / (maxLng - minLng)) * (w - 80) + 40;
      }
      function toY(latitude) {
        return (h - 40) - ((latitude - minLat) / (maxLat - minLat)) * (h - 70);
      }

      // Draw radar grid
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.1)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);

      for (let gLng = 46; gLng <= 62; gLng += 4) {
        const x = toX(gLng);
        ctx.beginPath();
        ctx.moveTo(x, 20);
        ctx.lineTo(x, h - 30);
        ctx.stroke();

        ctx.fillStyle = '#475569';
        ctx.font = '8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${gLng}°E`, x, h - 16);
      }

      for (let gLat = 26; gLat <= 38; gLat += 4) {
        const y = toY(gLat);
        ctx.beginPath();
        ctx.moveTo(35, y);
        ctx.lineTo(w - 35, y);
        ctx.stroke();

        ctx.fillStyle = '#475569';
        ctx.font = '8px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`${gLat}°N`, 32, y + 3);
      }

      ctx.setLineDash([]);

      // Stylized Iran Plateau polygon outline
      const iranOutline = [
        { lat: 39.8, lng: 44.8 }, { lat: 39.0, lng: 48.3 }, { lat: 37.4, lng: 50.0 },
        { lat: 37.0, lng: 54.0 }, { lat: 37.8, lng: 58.0 }, { lat: 35.8, lng: 61.2 },
        { lat: 31.0, lng: 61.8 }, { lat: 25.1, lng: 61.5 }, { lat: 25.5, lng: 57.0 },
        { lat: 27.2, lng: 56.3 }, { lat: 28.0, lng: 51.0 }, { lat: 30.0, lng: 49.0 },
        { lat: 33.3, lng: 46.0 }, { lat: 37.0, lng: 44.5 }, { lat: 39.8, lng: 44.8 }
      ];

      ctx.beginPath();
      ctx.moveTo(toX(iranOutline[0].lng), toY(iranOutline[0].lat));
      for (let i = 1; i < iranOutline.length; i++) {
        ctx.lineTo(toX(iranOutline[i].lng), toY(iranOutline[i].lat));
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Historical Cultural Centers
      const historicalHubs = [
        { name: 'اصفهان', lat: 32.65, lng: 51.67 },
        { name: 'شیراز / تخت جمشید', lat: 29.62, lng: 52.53 },
        { name: 'نیشابور / فیروزه', lat: 36.46, lng: 58.80 },
        { name: 'هرمز / خلیج فارس', lat: 27.06, lng: 56.46 },
        { name: 'تبریز', lat: 38.07, lng: 46.29 },
        { name: 'یزد', lat: 31.89, lng: 54.36 },
        { name: 'تهران / ری', lat: 35.68, lng: 51.42 }
      ];

      historicalHubs.forEach(hub => {
        const hx = toX(hub.lng);
        const hy = toY(hub.lat);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.beginPath();
        ctx.arc(hx, hy, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#64748b';
        ctx.font = '8px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(hub.name, hx, hy - 5);
      });

      // Active Target Pulse Marker
      const tx = toX(lng);
      const ty = toY(lat);

      // Outer radar rings
      ctx.strokeStyle = color.hex;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(tx, ty, 18, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(tx, ty, 32, 0, Math.PI * 2);
      ctx.strokeStyle = color.hex + '44';
      ctx.stroke();

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(tx - 24, ty);
      ctx.lineTo(tx + 24, ty);
      ctx.moveTo(tx, ty - 24);
      ctx.lineTo(tx, ty + 24);
      ctx.strokeStyle = color.hex;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Glowing Center Dot
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(tx, ty, 4, 0, Math.PI * 2);
      ctx.fill();

      // Target Name Tag
      ctx.fillStyle = '#0f172a';
      const labelText = `${color.nameFa} (${color.evidence.geoSpatial.originSiteFa})`;
      const textWidth = ctx.measureText(labelText).width + 16;
      ctx.fillRect(tx - textWidth/2, ty + 12, textWidth, 18);
      ctx.strokeStyle = '#34d399';
      ctx.strokeRect(tx - textWidth/2, ty + 12, textWidth, 18);

      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(labelText, tx, ty + 24);
    }

    async function copyGeoCoords() { try {
      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId);
      const color = palette.colors[currentEvColorIdx];
      const coords = `${color.evidence.geoSpatial.coordinates.lat}, ${color.evidence.geoSpatial.coordinates.lng}`;
      await copyTextToClipboard(coords);
      showToast(currentLang === 'en' ? 'GPS Coordinates Copied!' : 'مختصات GPS کپی شد!', coords);
    } catch(error) { /* Clipboard helper already explains recovery. */ } }

    // =========================================================================
    // HISTORICAL PIGMENT MIXER (OKLAB SPACE)
    // =========================================================================
    function onMixerPartnerChange(partnerHex) {
      currentMixerPartnerHex = partnerHex;
      document.getElementById('evMixerHexB').textContent = partnerHex;
      document.getElementById('evMixerSwatchB').style.backgroundColor = partnerHex;
      updatePigmentMixer();
    }

    function updatePigmentMixer() {
      const rangeVal = document.getElementById('evMixerRangeInput')?.value || 50;
      currentMixerRatio = rangeVal / 100;
      
      const label = document.getElementById('evMixerRatioLabel');
      if (label) {
        const isEnMixLabel = currentLang === 'en';
        label.textContent = isEnMixLabel ? `${Math.round((1 - currentMixerRatio) * 100)}% Base • ${Math.round(currentMixerRatio * 100)}% Blend` : `${Math.round((1 - currentMixerRatio) * 100)}% مبنا • ${Math.round(currentMixerRatio * 100)}% ثانویه`;
      }

      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      const colorA = palette.colors[currentEvColorIdx] || palette.colors[0];
      const hexA = colorA.hex;
      const hexB = currentMixerPartnerHex;

      // Blend midpoint
      const mixedHex = blendOklab(hexA, hexB, currentMixerRatio);
      const resultSwatch = document.getElementById('evMixerResultSwatch');
      const resultHex = document.getElementById('evMixerResultHex');
      const resultOklab = document.getElementById('evMixerResultOklab');

      if (resultSwatch) resultSwatch.style.backgroundColor = mixedHex;
      if (resultHex) resultHex.textContent = mixedHex;
      if (resultOklab) {
        const ok = hexToOklab(mixedHex);
        resultOklab.textContent = `Oklab: L ${ok.L.toFixed(3)} | a ${ok.a.toFixed(3)} | b ${ok.b.toFixed(3)}`;
      }

      // Generate 5-step gradient swatches
      const stepsContainer = document.getElementById('evMixerGradientSteps');
      if (stepsContainer) {
        const ratios = [0, 0.25, 0.5, 0.75, 1.0];
        stepsContainer.innerHTML = ratios.map((r, sIdx) => {
          const sHex = blendOklab(hexA, hexB, r);
          const percentA = Math.round((1 - r) * 100);
          return `
            <div 
              onclick="setMixerRatio(${Math.round(r * 100)})"
              class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center cursor-pointer hover:scale-105 transition shadow-sm ${Math.abs(currentMixerRatio - r) < 0.12 ? 'ring-2 ring-emerald-400' : ''}"
            >
              <div class="h-10 w-full rounded-lg mb-1.5 shadow-inner" style="background-color: ${sHex};"></div>
              <div class="text-[9px] font-mono text-slate-300 font-bold" dir="ltr">${sHex}</div>
              <div class="text-[8px] text-slate-400 mt-0.5">${percentA}% / ${100 - percentA}%</div>
            </div>
          `;
        }).join('');
      }
    }

    function setMixerRatio(val) {
      const slider = document.getElementById('evMixerRangeInput');
      if (slider) slider.value = val;
      updatePigmentMixer();
      playHarmonicTone(2);
    }

    async function copyMixerResultHex() { try {
      const text = document.getElementById('evMixerResultHex')?.textContent || '';
      await copyTextToClipboard(text);
      showToast(currentLang === 'en' ? 'Blended Color Copied!' : 'رنگ ترکیبی کپی شد!', currentLang === 'en' ? `HEX ${text} saved to clipboard.` : `کد هگز ${text} در کلیپ‌بورد ذخیره شد.`);
    } catch(error) { /* Clipboard helper already explains recovery. */ } }

    // Simple Oklab interpolation math in JS
    function hexToRgbObj(hex) { return PersianCore.hexToRgb(hex); }
    function rgbObjToHex(r,g,b) { return PersianCore.rgbToHex({r,g,b}); }
    function srgbLin(c) {
      const v = c / 255;
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    }
    function linSrgb(c) {
      const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
      return Math.max(0, Math.min(255, v * 255));
    }
    function hexToOklab(hex) { return PersianCore.rgbToOklab(PersianCore.hexToRgb(hex)); }
    function oklabToHex(ok) { return PersianCore.rgbToHex(PersianCore.oklabToRgb(ok)); }
    function blendOklab(hex1,hex2,ratio) { return PersianCore.mixColors(hex1,hex2,ratio).hex; }

    // =========================================================================
    // W3C DTCG & FIGMA CODE EXPORTER
    // =========================================================================
    function switchEvidenceTokenCode(format) {
      currentTokenCodeFormat = format;
      const formats = ['w3c', 'figma', 'tailwind', 'css'];
      formats.forEach(f => {
        const btn = document.getElementById(`evtok-${f}`);
        if (btn) {
          if (f === format) {
            btn.className = 'px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold';
          } else {
            btn.className = 'px-3 py-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 font-medium';
          }
        }
      });
      updateEvidenceTokenCodeBlock();
      playHarmonicTone(3);
    }

    function updateEvidenceTokenCodeBlock() {
 const pre=document.getElementById('evTokenCodePre'); if(!pre) return;
 const p=PERSIAN_PALETTES.find(p=>p.id===currentEvPaletteId),c=p.colors[currentEvColorIdx],selected={...p,colors:[c]};
 if(currentTokenCodeFormat==='w3c') pre.textContent=JSON.stringify(PersianCore.exportW3CTokens([selected]),null,2);
 else if(currentTokenCodeFormat==='figma') pre.textContent=JSON.stringify(PersianCore.exportFigmaVariables([selected]),null,2);
 else if(currentTokenCodeFormat==='tailwind') pre.textContent='@theme {\n  --color-persian-'+p.id+'-'+((currentEvColorIdx+1)*100)+': '+c.hex+';\n}';
 else pre.textContent=':root {\n  --persian-'+p.id+'-'+PersianCore.colorTokenKey(c)+': '+c.hex+';\n}';
}

    async function copyEvidenceTokenCode() { try {
      const code = document.getElementById('evTokenCodePre')?.textContent || '';
      await copyTextToClipboard(code);
      showToast(currentLang === 'en' ? 'Token Code Copied!' : 'کد توکن کپی شد!', currentLang === 'en' ? 'Standard code saved to clipboard.' : 'کد استاندارد در کلیپ‌بورد کپی شد.');
    } catch(error) { /* Clipboard helper already explains recovery. */ } }



    // =========================================================================
    // 3D PHOTOGRAMMETRY SHADER & SPECIMEN RENDERER
    // =========================================================================
    let currentPhotoLightAngle = 45;
    let currentPhotoGloss = 0.85;

    function drawPhotogrammetryCanvas() {
      const canvas = document.getElementById('evPhotogrammetryCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      const color = palette.colors[currentEvColorIdx] || palette.colors[0];

      // Base background gradient representing tile/specimen
      const rad = (currentPhotoLightAngle * Math.PI) / 180;
      const lx = w/2 + Math.cos(rad) * (w/2);
      const ly = h/2 + Math.sin(rad) * (h/2);

      const grad = ctx.createRadialGradient(lx, ly, 10, w/2, h/2, w/1.2);
      grad.addColorStop(0, color.hex);
      grad.addColorStop(0.6, color.hex + 'cc');
      grad.addColorStop(1, '#050510');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Micro-surface noise and crazing crack lines (ceramic glaze)
      ctx.strokeStyle = 'rgba(255, 255, 255, ' + (0.12 * currentPhotoGloss) + ')';
      ctx.lineWidth = 1;
      
      // Procedural crackle lines
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        let sx = (i * 73) % w;
        let sy = (i * 37) % h;
        ctx.moveTo(sx, sy);
        for (let step = 0; step < 5; step++) {
          sx += ((i * 17 + step * 23) % 40) - 20;
          sy += ((i * 31 + step * 19) % 40) - 10;
          ctx.lineTo(sx, sy);
        }
        ctx.stroke();
      }

      // Specular highlight spot
      const specGrad = ctx.createRadialGradient(lx, ly, 2, lx, ly, 75);
      specGrad.addColorStop(0, 'rgba(255, 255, 255, ' + (0.75 * currentPhotoGloss) + ')');
      specGrad.addColorStop(0.3, 'rgba(255, 255, 255, ' + (0.25 * currentPhotoGloss) + ')');
      specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = specGrad;
      ctx.beginPath();
      ctx.arc(lx, ly, 75, 0, Math.PI * 2);
      ctx.fill();

      // Digital vs Physical swatches update
      document.getElementById('evPhotoDigitalSwatch').style.backgroundColor = color.hex;
      document.getElementById('evPhotoDigitalHex').textContent = color.hex;
      const isEnTitle = typeof currentLang !== 'undefined' && currentLang === 'en';
      document.getElementById('evPhotoMaterialTitle').textContent = isEnTitle
        ? `${color.nameEn || color.nameFa} (${palette.nameEn || palette.nameFa})`
        : `${color.nameFa} (${palette.nameFa})`;
    }

    function updatePhotogrammetryShader() {
      const angle = document.getElementById('evPhotoLightSlider')?.value || 45;
      const gloss = document.getElementById('evPhotoGlossSlider')?.value || 85;
      currentPhotoLightAngle = Number(angle);
      currentPhotoGloss = Number(gloss) / 100;

      document.getElementById('evPhotoLightLabel').textContent = `${angle}°`;
      document.getElementById('evPhotoGlossLabel').textContent = `${gloss}%`;

      drawPhotogrammetryCanvas();
    }

    // =========================================================================
    // WEBXR / AR CAMERA & SPATIAL WALL SIMULATOR
    // =========================================================================
    let arCurrentMode = 'room';
    let arVideoStream = null;
    let arColorIdx = 0;

    function openARSimulator() {
      const modal = document.getElementById('arSimulatorModal');
      if (!modal) return;

      modal.classList.remove('hidden');
      modal.classList.add('flex');

      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      const color = palette.colors[currentEvColorIdx] || palette.colors[0];

      updateARColor(color.hex, currentLang === 'en' ? color.nameEn : color.nameFa);
      playHarmonicTone(0);
    }

    function closeARSimulator() {
      const modal = document.getElementById('arSimulatorModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
      stopARCamera();
    }

    function setARDisplayMode(mode) {
      arCurrentMode = mode;
      const btnRoom = document.getElementById('arBtnModeRoom');
      const btnCamera = document.getElementById('arBtnModeCamera');
      const roomView = document.getElementById('arRoomView');
      const cameraView = document.getElementById('arCameraView');

      if (mode === 'room') {
        btnRoom.className = 'px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30';
        btnCamera.className = 'px-3 py-1.5 rounded-lg text-slate-400 hover:text-white';
        roomView.classList.remove('hidden');
        cameraView.classList.add('hidden');
        stopARCamera();
      } else {
        btnCamera.className = 'px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30';
        btnRoom.className = 'px-3 py-1.5 rounded-lg text-slate-400 hover:text-white';
        roomView.classList.add('hidden');
        cameraView.classList.remove('hidden');
        startARCamera();
      }
    }

    async function startARCamera() {
      const video = document.getElementById('arVideoElement');
      const errorMsg = document.getElementById('arCameraErrorMsg');
      errorMsg.classList.add('hidden');

      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          arVideoStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
          });
          video.srcObject = arVideoStream;
        } else {
          throw new Error('Camera not supported');
        }
      } catch (err) {
        console.warn('AR Camera access unavailable:', err);
        errorMsg.classList.remove('hidden');
        errorMsg.classList.add('flex');
      }
    }

    function stopARCamera() {
      if (arVideoStream) {
        arVideoStream.getTracks().forEach(track => track.stop());
        arVideoStream = null;
      }
    }

    function updateARColor(hex, name) {
      const badge = document.getElementById('arActiveColorBadge');
      const nameEl = document.getElementById('arActiveColorName');
      const hexEl = document.getElementById('arActiveColorHex');
      const stop1 = document.getElementById('arWallStop1');
      const stop2 = document.getElementById('arWallStop2');
      const overlay = document.getElementById('arCameraTintOverlay');

      if (badge) badge.style.backgroundColor = hex;
      if (nameEl) nameEl.textContent = name;
      if (hexEl) hexEl.textContent = hex;
      if (stop1) stop1.setAttribute('stop-color', hex);
      if (stop2) stop2.setAttribute('stop-color', hex + '44');
      if (overlay) overlay.style.backgroundColor = hex;
    }

    function cycleARColor() {
      const palette = PERSIAN_PALETTES.find(p => p.id === currentEvPaletteId) || PERSIAN_PALETTES[0];
      arColorIdx = (arColorIdx + 1) % palette.colors.length;
      const c = palette.colors[arColorIdx];
      updateARColor(c.hex, c.nameFa);
      playHarmonicTone(arColorIdx);
    }

    function setARColorTemp(kelvin) {
      const arch = document.getElementById('arSvgArch');
      if (!arch) return;
      if (kelvin <= 3500) {
        arch.setAttribute('stroke', 'rgba(245, 158, 11, 0.8)');
      } else {
        arch.setAttribute('stroke', 'rgba(103, 232, 249, 0.8)');
      }
      playHarmonicTone(1);
    }


    // 12 curated Persian-inspired palettes (72 digital colors)
    const PERSIAN_PALETTES=PersianCore.ALL_PALETTES_LIST;

    const PALETTE_SUBTITLES_EN = {
  'isfahan-tiles': 'Safavid Architectural Masterpiece',
  'achaemenid-majesty': 'Achaemenid Imperial Monument',
  'behzad-miniature': 'Timurid & Safavid Manuscript Art',
  'nomadic-rugs': 'Tribal Weaving & Natural Dyes',
  'minakari-craft': 'Persian Enameling & Metal Art',
  'toranj-illumination': 'Quranic Illumination & Arabesque',
  'persian-gulf-pearls': 'Maritime Heritage & Coastal Ochres',
  'gardens-of-shiraz': 'Persian Paradise Garden Architecture',
  'khorasan-gems': 'Precious Turquoise & Minerals',
  'hyrcanian-forests': 'Ancient Temperate Rainforest',
  'yazd-saffron-desert': 'Oasis Adobe & Windcatchers',
  'bazaar-spices': 'Historic Silk Road Caravanserai'
};

const PALETTE_CONTEXT_EN = {
  'isfahan-tiles': 'UNESCO World Heritage Site (Meidan Emam, Isfahan)',
  'achaemenid-majesty': 'Persepolis (UNESCO World Heritage Site 1979)',
  'behzad-miniature': 'Art of Miniature (UNESCO Intangible Cultural Heritage)',
  'nomadic-rugs': 'Traditional Skills of Carpet Weaving in Fars (UNESCO)',
  'minakari-craft': 'Isfahan World Crafts City (WCC Crafts & Enameling)',
  'toranj-illumination': 'Art of Illumination: Tazhib (UNESCO Cultural Heritage)',
  'persian-gulf-pearls': 'Traditional Lenj Boats & Persian Gulf Navigation (UNESCO 2011)',
  'gardens-of-shiraz': 'The Persian Garden: Eram & Shiraz (UNESCO World Heritage 2011)',
  'khorasan-gems': 'Neyshabur World Turquoise City (World Crafts Council)',
  'hyrcanian-forests': 'Hyrcanian Forests & Alborz (UNESCO Natural World Heritage 2019)',
  'yazd-saffron-desert': 'Historic City of Yazd (UNESCO World Heritage Site 2017)',
  'bazaar-spices': 'Tabriz Historic Bazaar Complex (UNESCO World Heritage 2010)'
};

const NPM_CODE_EN = `import { 
  PersianEngine, 
  calculateAPCA, 
  mixColors, 
  exportToW3CTokens 
} from '@persian-palette/core';

// 1. Resolve digital color and unverified material notes
const lapis = PersianEngine.getColor('isfahan-tiles', 'ultramarine');
console.log(lapis.evidence.chemical.formula); // Na₆Ca₂[S|AlSiO₄]₆

// 2. Advanced APCA-W3 perceptual contrast evaluation
const contrastLc = calculateAPCA('#120A8F', '#F4F1DE'); 
// Lc ≈ 90.68; font weight and size determine final readability.

// 3. Digital color interpolation in Oklab space
const mixedColor = mixColors('#120A8F', '#F4C430', 0.4); // 40% weight for second color
console.log(mixedColor.hex);

// 4. Export to official W3C DTCG token standard
const w3cTokens = exportToW3CTokens();`;

const NPM_CODE_FA = `import { 
  PersianEngine, 
  calculateAPCA, 
  mixColors, 
  exportToW3CTokens 
} from '@persian-palette/core';

// ۱. دریافت رنگ دیجیتال و یادداشت ماده از منبع تأییدنشده
const lapis = PersianEngine.getColor('isfahan-tiles', 'ultramarine');
console.log(lapis.evidence.chemical.formula); // Na₆Ca₂[S|AlSiO₄]₆

// ۲. ارزیابی کنتراست پیشرفته APCA-W3
const contrastLc = calculateAPCA('#120A8F', '#F4F1DE'); 
// Lc ≈ 90.68؛ ارزیابی نهایی به اندازه و وزن فونت وابسته است.

// ۳. درون‌یابی رنگ دیجیتال در فضای Oklab
const mixedColor = mixColors('#120A8F', '#F4C430', 0.4); // سهم رنگ دوم ۴۰٪ است.
console.log(mixedColor.hex);

// ۴. صادرات به استاندارد رسمی توکن‌های W3C DTCG
const w3cTokens = exportToW3CTokens();`;

const PALETTE_DESCRIPTIONS_EN = {
  'isfahan-tiles': 'Safavid seven-color architectural ceramic masterwork, cobalt ultramarine, turquoise glazes of Naqsh-e Jahan.',
  'achaemenid-majesty': 'Imperial stone reliefs, lapis ceremonial inlays, and architectural gold of Persepolis.',
  'behzad-miniature': 'Timurid and Safavid court manuscript paintings, lapis lazuli pigments, vermilion, and malachite inks.',
  'nomadic-rugs': 'Tribal wool dyes, madder root crimson, pomegranate rind yellow, and walnut husk earthen tones.',
  'minakari-craft': 'Copper enamel craftsmanship, lapis and turquoise vitreous coatings fired in historic Isfahan kilns.',
  'toranj-illumination': 'Islamic manuscript gilding, shell gold leaf, lapis blue grounds, and cinnabar filigree ornamentation.',
  'persian-gulf-pearls': 'Warm Persian Gulf waters, iridescent mother-of-pearl, and iron-rich red sands of Hormuz Island.',
  'gardens-of-shiraz': 'Cypress greenery, water channels, rose blooms, and citrus orchards of Persian UNESCO gardens.',
  'khorasan-gems': 'Nishapur turquoise veins, Badakhshan lapis stones, and Khorasan mineral wealth across the Silk Road.',
  'hyrcanian-forests': 'Prehistoric Caspian temperate rainforest canopy, moss carpets, and ancient autumn leaf foliage.',
  'yazd-saffron-desert': 'Windcatchers, sun-baked clay brick, desert dunes, and golden threads of harvested saffron.',
  'bazaar-spices': 'Aromatic Silk Road spice bazaars, turmeric, sumac, dried limes, and crimson spice sacks.'
};

    const CATEGORIES = [
      { id: "all", label: "همه پالت‌ها", labelEn: "All Palettes" },
      { id: "architecture", label: "معماری و کاشی", labelEn: "Architecture & Tiles" },
      { id: "textiles", label: "فرش و منسوجات", labelEn: "Rugs & Textiles" },
      { id: "history", label: "تاریخ و تمدن", labelEn: "History & Civilization" },
      { id: "nature", label: "طبیعت و اقلیم", labelEn: "Nature & Climate" },
      { id: "arts", label: "نگارگری و هنرها", labelEn: "Miniature & Arts" }
    ];

    // Dedicated Procedural Persian SVG Artwork Generators
    
    const PALETTE_VECTOR_ART = {
      'isfahan-tiles': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <radialGradient id="is-bg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stop-color="${c[0].hex}" />
              <stop offset="100%" stop-color="${c[5].hex}" />
            </radialGradient>
            <radialGradient id="is-star" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="${c[3].hex}" />
              <stop offset="70%" stop-color="${c[1].hex}" />
              <stop offset="100%" stop-color="${c[0].hex}" />
            </radialGradient>
            <pattern id="is-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="${c[3].hex}" stroke-width="0.75" stroke-opacity="0.35"/>
              <circle cx="40" cy="40" r="12" fill="none" stroke="${c[1].hex}" stroke-width="0.75" stroke-opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="800" height="400" fill="url(#is-bg)" />
          <rect width="800" height="400" fill="url(#is-grid)" opacity="0.65" />
          
          <!-- Safavid Girih Central Medallion -->
          <g transform="translate(400, 200)">
            <!-- Outer Muqarnas Scallop Ring -->
            <circle r="140" fill="none" stroke="${c[3].hex}" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>
            <circle r="125" fill="${c[0].hex}" fill-opacity="0.4" stroke="${c[2].hex}" stroke-width="1.5"/>
            
            <!-- 10-Fold Girih Star -->
            <g>
              ${Array.from({length: 10}).map((_, i) => {
                const angle = (i * 36) * Math.PI / 180;
                const r1 = 110, r2 = 55;
                const x1 = Math.cos(angle) * r1, y1 = Math.sin(angle) * r1;
                const nextAngle = ((i + 1) * 36) * Math.PI / 180;
                const midAngle = (i * 36 + 18) * Math.PI / 180;
                const xm = Math.cos(midAngle) * r2, ym = Math.sin(midAngle) * r2;
                return `<polygon points="0,0 ${x1},${y1} ${xm},${ym}" fill="${i % 2 === 0 ? c[1].hex : c[2].hex}" fill-opacity="0.75" stroke="${c[3].hex}" stroke-width="1.2"/>`;
              }).join('')}
            </g>

            <!-- Inner Gold & Turquoise Shamseh Core -->
            <circle r="42" fill="url(#is-star)" stroke="${c[4].hex}" stroke-width="2" />
            <circle r="18" fill="${c[5].hex}" stroke="${c[3].hex}" stroke-width="1.5" />
            
            <!-- Arabesque Foliage Loops -->
            <path d="M-140,0 Q-100,-70 0,-120 Q100,-70 140,0 Q100,70 0,120 Q-100,70 -140,0 Z" fill="none" stroke="${c[3].hex}" stroke-width="1.5" opacity="0.75"/>
          </g>
          
          <!-- Corner Squinches (Lachak Muqarnas) -->
          <g fill="${c[0].hex}" stroke="${c[3].hex}" stroke-width="1.2" opacity="0.8">
            <path d="M0,0 L120,0 Q60,60 0,120 Z" />
            <path d="M800,0 L680,0 Q740,60 800,120 Z" />
            <path d="M0,400 L120,400 Q60,340 0,280 Z" />
            <path d="M800,400 L680,400 Q740,340 800,280 Z" />
          </g>
        </svg>
      `,

      'nomadic-rugs': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="rug-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${c[1].hex}" />
              <stop offset="100%" stop-color="${c[5].hex}" />
            </linearGradient>
            <pattern id="rug-weave" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="${c[4].hex}" stroke-width="0.3" stroke-opacity="0.15"/>
              <path d="M0 10 L20 10 M10 0 L10 20" stroke="${c[0].hex}" stroke-width="0.4" stroke-opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="800" height="400" fill="url(#rug-bg)" />
          <rect width="800" height="400" fill="url(#rug-weave)" />
          
          <!-- Outer Rug Border Band -->
          <rect x="25" y="20" width="750" height="360" fill="none" stroke="${c[4].hex}" stroke-width="12" opacity="0.9" />
          <rect x="37" y="32" width="726" height="336" fill="none" stroke="${c[2].hex}" stroke-width="4" />
          
          <!-- Stepped Nomadic Medallions (Lozenges) -->
          <g transform="translate(400, 200)">
            <!-- Central Stepped Diamond -->
            <polygon points="0,-120 180,0 0,120 -180,0" fill="${c[0].hex}" stroke="${c[4].hex}" stroke-width="3" />
            <polygon points="0,-90 135,0 0,90 -135,0" fill="${c[1].hex}" stroke="${c[2].hex}" stroke-width="2.5" />
            <polygon points="0,-60 90,0 0,60 -90,0" fill="${c[2].hex}" stroke="${c[4].hex}" stroke-width="2" />
            <polygon points="0,-30 45,0 0,30 -45,0" fill="${c[3].hex}" stroke="${c[4].hex}" stroke-width="1.5" />
            <circle r="10" fill="${c[4].hex}" />

            <!-- Ram Horns Motifs (Ghooch) -->
            <path d="M-180,0 Q-210,-40 -180,-60 Q-150,-40 -160,0" fill="none" stroke="${c[4].hex}" stroke-width="3" />
            <path d="M180,0 Q210,-40 180,-60 Q150,-40 160,0" fill="none" stroke="${c[4].hex}" stroke-width="3" />
            <path d="M-180,0 Q-210,40 -180,60 Q-150,40 -160,0" fill="none" stroke="${c[4].hex}" stroke-width="3" />
            <path d="M180,0 Q210,40 180,60 Q150,40 160,0" fill="none" stroke="${c[4].hex}" stroke-width="3" />
          </g>

          <!-- Flanking Boteh / Tribal Stars -->
          <g transform="translate(180, 200)">
            <polygon points="0,-60 60,0 0,60 -60,0" fill="${c[3].hex}" stroke="${c[4].hex}" stroke-width="2" />
            <polygon points="0,-35 35,0 0,35 -35,0" fill="${c[2].hex}" />
          </g>
          <g transform="translate(620, 200)">
            <polygon points="0,-60 60,0 0,60 -60,0" fill="${c[3].hex}" stroke="${c[4].hex}" stroke-width="2" />
            <polygon points="0,-35 35,0 0,35 -35,0" fill="${c[2].hex}" />
          </g>
        </svg>
      `,

      'achaemenid-majesty': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="ach-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${c[5].hex}" />
              <stop offset="50%" stop-color="${c[1].hex}" />
              <stop offset="100%" stop-color="${c[5].hex}" />
            </linearGradient>
            <radialGradient id="ach-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="${c[0].hex}" stop-opacity="0.4" />
              <stop offset="100%" stop-color="${c[0].hex}" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="400" fill="url(#ach-bg)" />
          <circle cx="400" cy="200" r="180" fill="url(#ach-glow)" />

          <!-- Apadana Stepped Battlements Top and Bottom -->
          <g fill="${c[0].hex}" opacity="0.3">
            ${Array.from({length: 20}).map((_, i) => `
              <polygon points="${i*40},0 ${i*40+15},0 ${i*40+15},15 ${i*40+25},15 ${i*40+25},0 ${i*40+40},0 ${i*40+40},25 ${i*40},25" />
              <polygon points="${i*40},400 ${i*40+15},400 ${i*40+15},385 ${i*40+25},385 ${i*40+25},400 ${i*40+40},400 ${i*40+40},375 ${i*40},375" />
            `).join('')}
          </g>

          <!-- Central Achaemenid 12-Petal Lotus Rosette -->
          <g transform="translate(400, 200)">
            <!-- Golden Outer Sun Ring -->
            <circle r="120" fill="none" stroke="${c[0].hex}" stroke-width="2.5" stroke-dasharray="4,6"/>
            <circle r="95" fill="${c[5].hex}" fill-opacity="0.6" stroke="${c[4].hex}" stroke-width="1.5"/>

            <!-- 12 Sacred Lotus Petals -->
            ${Array.from({length: 12}).map((_, i) => {
              const deg = i * 30;
              return `
                <g transform="rotate(${deg})">
                  <path d="M0,0 Q-18,-50 0,-90 Q18,-50 0,0" fill="${i % 2 === 0 ? c[0].hex : c[2].hex}" stroke="${c[4].hex}" stroke-width="1"/>
                  <circle cx="0" cy="-60" r="3" fill="${c[4].hex}" />
                </g>
              `;
            }).join('')}

            <!-- Center Gold Boss -->
            <circle r="30" fill="${c[0].hex}" stroke="${c[4].hex}" stroke-width="2" />
            <circle r="14" fill="${c[2].hex}" />
            <circle r="5" fill="${c[4].hex}" />

            <!-- Imperial Flanking Wings (Farvahar Motif) -->
            <path d="M-130,-10 C-220,-40 -280,-10 -310,25 C-260,20 -180,10 -130,5 Z" fill="${c[0].hex}" fill-opacity="0.7" stroke="${c[4].hex}" stroke-width="1"/>
            <path d="M130,-10 C220,-40 280,-10 310,25 C260,20 180,10 130,5 Z" fill="${c[0].hex}" fill-opacity="0.7" stroke="${c[4].hex}" stroke-width="1"/>
          </g>
        </svg>
      `,

      'gardens-of-shiraz': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="sh-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${c[5].hex}" />
              <stop offset="100%" stop-color="${c[1].hex}" />
            </linearGradient>
            <linearGradient id="sh-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${c[3].hex}" />
              <stop offset="50%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="${c[1].hex}" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#sh-bg)" />

          <!-- Persian Chahar-Bagh Waterways -->
          <rect x="0" y="180" width="800" height="40" fill="url(#sh-water)" opacity="0.85" />
          <rect x="380" y="0" width="40" height="400" fill="url(#sh-water)" opacity="0.85" />
          
          <!-- Central Marble Water Basin -->
          <polygon points="400,140 460,200 400,260 340,200" fill="${c[4].hex}" stroke="${c[0].hex}" stroke-width="3" />
          <circle cx="400" cy="200" r="28" fill="${c[2].hex}" stroke="${c[3].hex}" stroke-width="2" />
          <circle cx="400" cy="200" r="10" fill="${c[4].hex}" />

          <!-- Shiraz Cypress Trees (Sarv-e Naz) -->
          <g>
            ${[140, 260, 540, 660].map(x => `
              <g transform="translate(${x}, 200)">
                <!-- Cypress Upright Silhouette -->
                <path d="M0,-140 Q-28,-60 -18,60 L18,60 Q28,-60 0,-140 Z" fill="${c[1].hex}" stroke="${c[3].hex}" stroke-width="1.5" />
                <path d="M0,-130 Q-15,-60 -8,55 L8,55 Q15,-60 0,-130 Z" fill="${c[5].hex}" opacity="0.4" />
                <!-- Tree Trunk -->
                <rect x="-4" y="60" width="8" height="25" fill="#422006" />
                <!-- Blooming Damask Rose Ornament -->
                <circle cx="0" cy="-40" r="14" fill="${c[0].hex}" stroke="${c[4].hex}" stroke-width="1.5"/>
                <circle cx="0" cy="-40" r="6" fill="${c[2].hex}" />
              </g>
            `).join('')}
          </g>

          <!-- Floating Rose Petals -->
          <circle cx="200" cy="90" r="8" fill="${c[0].hex}" opacity="0.75" />
          <circle cx="620" cy="90" r="8" fill="${c[0].hex}" opacity="0.75" />
          <circle cx="210" cy="310" r="8" fill="${c[0].hex}" opacity="0.75" />
          <circle cx="610" cy="310" r="8" fill="${c[0].hex}" opacity="0.75" />
        </svg>
      `,

      'minakari-craft': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <radialGradient id="mina-bg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stop-color="${c[0].hex}" />
              <stop offset="100%" stop-color="${c[5].hex}" />
            </radialGradient>
            <radialGradient id="mina-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="${c[2].hex}" />
              <stop offset="50%" stop-color="${c[1].hex}" />
              <stop offset="100%" stop-color="${c[0].hex}" />
            </radialGradient>
          </defs>
          <rect width="800" height="400" fill="url(#mina-bg)" />

          <!-- Circular Minakari Plate Medallion -->
          <g transform="translate(400, 200)">
            <!-- Burnished Copper Outer Rim -->
            <circle r="150" fill="none" stroke="${c[2].hex}" stroke-width="8" opacity="0.9" />
            <circle r="142" fill="none" stroke="${c[4].hex}" stroke-width="2" />
            <circle r="136" fill="${c[0].hex}" fill-opacity="0.8" stroke="${c[1].hex}" stroke-width="1.5" />

            <!-- Concentric Scalloped Minakari Petals -->
            ${Array.from({length: 16}).map((_, i) => {
              const deg = i * 22.5;
              return `
                <g transform="rotate(${deg})">
                  <path d="M0,-136 Q-22,-100 0,-70 Q22,-100 0,-136 Z" fill="${i % 2 === 0 ? c[1].hex : c[3].hex}" stroke="${c[4].hex}" stroke-width="0.75"/>
                  <circle cx="0" cy="-110" r="3" fill="${c[2].hex}" />
                </g>
              `;
            }).join('')}

            <!-- Inner Floral Ring -->
            <circle r="70" fill="url(#mina-core)" stroke="${c[4].hex}" stroke-width="2" />
            ${Array.from({length: 8}).map((_, i) => {
              const deg = i * 45;
              return `
                <g transform="rotate(${deg})">
                  <ellipse cx="0" cy="-40" rx="10" ry="20" fill="${c[4].hex}" fill-opacity="0.85" stroke="${c[0].hex}" stroke-width="1"/>
                  <circle cx="0" cy="-40" r="4" fill="${c[2].hex}" />
                </g>
              `;
            }).join('')}

            <!-- Center Rosette Boss -->
            <circle r="22" fill="${c[2].hex}" stroke="${c[4].hex}" stroke-width="2" />
            <circle r="8" fill="${c[5].hex}" />
          </g>
        </svg>
      `,

      'yazd-saffron-desert': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="yazd-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${c[4].hex}" />
              <stop offset="60%" stop-color="${c[2].hex}" />
              <stop offset="100%" stop-color="${c[0].hex}" />
            </linearGradient>
            <linearGradient id="yazd-dune" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="${c[1].hex}" />
              <stop offset="50%" stop-color="${c[3].hex}" />
              <stop offset="100%" stop-color="${c[1].hex}" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#yazd-sky)" />

          <!-- Desert Stars -->
          ${[ [100,50],[250,70],[400,30],[550,60],[700,45],[180,110],[620,100] ].map(([cx,cy]) => `
            <circle cx="${cx}" cy="${cy}" r="1.75" fill="${c[3].hex}" opacity="0.85" />
          `).join('')}

          <!-- Flowing Sand Dunes -->
          <path d="M0,260 Q200,180 400,240 Q600,300 800,210 L800,400 L0,400 Z" fill="url(#yazd-dune)" opacity="0.9" />
          <path d="M0,310 Q250,250 500,310 Q680,360 800,290 L800,400 L0,400 Z" fill="${c[1].hex}" />

          <!-- Iconic Yazd Windcatchers (Badgirs) & Adobe Arches -->
          <g transform="translate(400, 160)">
            <!-- Central Tall Badgir -->
            <rect x="-35" y="-90" width="70" height="150" fill="${c[1].hex}" stroke="${c[3].hex}" stroke-width="2" />
            <!-- Badgir Vents / Slits -->
            ${[-70, -50, -30, -10, 10].map(y => `
              <line x1="-25" y1="${y}" x2="25" y2="${y}" stroke="${c[4].hex}" stroke-width="4" stroke-linecap="round" />
            `).join('')}
            <!-- Badgir Roof Crown -->
            <polygon points="-42,-90 0,-115 42,-90" fill="${c[5].hex}" stroke="${c[0].hex}" stroke-width="2" />

            <!-- Left Secondary Badgir -->
            <rect x="-140" y="-50" width="50" height="120" fill="${c[1].hex}" stroke="${c[3].hex}" stroke-width="1.5" />
            ${[-35, -20, -5, 10].map(y => `
              <line x1="-132" y1="${y}" x2="-98" y2="${y}" stroke="${c[4].hex}" stroke-width="3" />
            `).join('')}
            <polygon points="-146,-50 -115,-70 -84,-50" fill="${c[5].hex}" />

            <!-- Right Adobe Dome / Arch -->
            <path d="M90,70 Q135,-10 180,70 Z" fill="${c[5].hex}" stroke="${c[3].hex}" stroke-width="2" />
          </g>

          <!-- Saffron Flower Stigmas Foreground -->
          <g transform="translate(680, 310)">
            <path d="M0,30 Q-20,0 -35,-45" fill="none" stroke="${c[2].hex}" stroke-width="4" stroke-linecap="round" />
            <path d="M0,30 Q0,-10 0,-55" fill="none" stroke="${c[0].hex}" stroke-width="4.5" stroke-linecap="round" />
            <path d="M0,30 Q20,0 35,-45" fill="none" stroke="${c[2].hex}" stroke-width="4" stroke-linecap="round" />
          </g>
        </svg>
      `,

      'behzad-miniature': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="beh-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${c[4].hex}" />
              <stop offset="100%" stop-color="${c[5].hex}" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#beh-sky)" />

          <!-- Golden Miniature Swirling Cloud Bands (Abr-o-Bad) -->
          <path d="M40,60 C120,40 180,90 260,70 C320,55 360,95 440,75 C520,55 600,105 740,60" fill="none" stroke="${c[4].hex}" stroke-width="7" stroke-linecap="round" opacity="0.8" />
          <path d="M120,100 C200,80 260,130 360,110 C460,90 540,140 680,100" fill="none" stroke="${c[4].hex}" stroke-width="4" stroke-linecap="round" opacity="0.6" />

          <!-- Jagged Coral Rock Formations (Miniature Mountains) -->
          <path d="M0,400 L0,220 Q60,180 120,240 Q180,160 260,250 Q340,150 420,270 Q500,140 600,260 Q700,160 800,230 L800,400 Z" fill="${c[3].hex}" opacity="0.9" />
          <path d="M0,400 L0,270 Q100,210 200,280 Q320,200 450,290 Q580,190 700,300 Q760,240 800,290 L800,400 Z" fill="${c[1].hex}" />

          <!-- Palace Pavilion Arch Motif (Iwan) -->
          <g transform="translate(620, 200)">
            <rect x="-70" y="-80" width="140" height="200" fill="${c[1].hex}" stroke="${c[4].hex}" stroke-width="2.5" />
            <path d="M-50,120 L-50,-20 Q0,-80 50,-20 L50,120 Z" fill="${c[2].hex}" stroke="${c[0].hex}" stroke-width="2" />
            <circle cx="0" cy="-10" r="15" fill="${c[0].hex}" stroke="${c[4].hex}" stroke-width="1.5" />
          </g>

          <!-- Golden Halos and Horse Banner Flags -->
          <g transform="translate(180, 220)">
            <circle cx="0" cy="0" r="35" fill="${c[4].hex}" stroke="${c[0].hex}" stroke-width="2" opacity="0.85" />
            <path d="M0,35 L0,-60 L35,-40 L0,-20" fill="${c[0].hex}" />
          </g>
        </svg>
      `,

      'khorasan-gems': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <radialGradient id="gem-bg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stop-color="${c[1].hex}" />
              <stop offset="100%" stop-color="${c[5].hex}" />
            </radialGradient>
            <linearGradient id="facet-shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${c[4].hex}" />
              <stop offset="100%" stop-color="${c[3].hex}" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#gem-bg)" />

          <!-- Spiderweb Turquoise Matrix Network (Veins) -->
          <g stroke="${c[3].hex}" stroke-width="1" opacity="0.4" fill="none">
            <path d="M0,100 Q150,120 300,80 T600,120 T800,90" />
            <path d="M0,300 Q200,260 400,320 T700,280 T800,310" />
            <path d="M150,0 Q180,180 140,400" />
            <path d="M650,0 Q620,200 660,400" />
          </g>

          <!-- Grand Brilliant-Cut Persian Gemstone Centerpiece -->
          <g transform="translate(400, 200)">
            <!-- Outer Gold Setting Bezel -->
            <polygon points="0,-120 100,-70 120,40 50,120 -50,120 -120,40 -100,-70" fill="none" stroke="${c[3].hex}" stroke-width="4" />
            
            <!-- Turquoise Crown Facets -->
            <polygon points="0,-120 100,-70 45,-20 0,-70" fill="${c[1].hex}" stroke="${c[4].hex}" stroke-width="1.2" />
            <polygon points="0,-120 -100,-70 -45,-20 0,-70" fill="${c[2].hex}" stroke="${c[4].hex}" stroke-width="1.2" />
            <polygon points="100,-70 120,40 50,20 45,-20" fill="${c[0].hex}" stroke="${c[4].hex}" stroke-width="1.2" />
            <polygon points="-100,-70 -120,40 -50,20 -45,-20" fill="${c[1].hex}" stroke="${c[4].hex}" stroke-width="1.2" />
            
            <!-- Table Facet (Central Hexagon) -->
            <polygon points="0,-70 45,-20 50,20 0,60 -50,20 -45,-20" fill="url(#facet-shine)" fill-opacity="0.85" stroke="${c[4].hex}" stroke-width="2" />
            
            <!-- Pavilion Lower Facets -->
            <polygon points="0,60 50,20 50,120 0,110" fill="${c[2].hex}" stroke="${c[4].hex}" stroke-width="1.2" />
            <polygon points="0,60 -50,20 -50,120 0,110" fill="${c[0].hex}" stroke="${c[4].hex}" stroke-width="1.2" />

            <!-- Radiant Sparkle Stars -->
            <polygon points="0,-140 5,-125 20,-120 5,-115 0,-100 -5,-115 -20,-120 -5,-125" fill="${c[4].hex}" />
          </g>
        </svg>
      `,

      'persian-gulf-pearls': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="sea-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${c[0].hex}" />
              <stop offset="100%" stop-color="${c[5].hex}" />
            </linearGradient>
            <radialGradient id="pearl-glow" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="60%" stop-color="${c[3].hex}" />
              <stop offset="100%" stop-color="${c[4].hex}" />
            </radialGradient>
          </defs>
          <rect width="800" height="400" fill="url(#sea-bg)" />

          <!-- Dynamic Stylized Persian Gulf Wave Curves -->
          <path d="M0,180 C200,120 280,240 450,160 C620,80 700,220 800,140 L800,400 L0,400 Z" fill="${c[1].hex}" opacity="0.6" />
          <path d="M0,230 C180,180 300,280 480,210 C650,140 720,260 800,200 L800,400 L0,400 Z" fill="${c[0].hex}" opacity="0.75" />

          <!-- Hormuz Red Ochre Shoreline -->
          <path d="M0,310 C220,260 380,360 560,290 C700,240 760,330 800,280 L800,400 L0,400 Z" fill="${c[2].hex}" />

          <!-- Natural Persian Gulf Pearl in Oyster Shell -->
          <g transform="translate(400, 260)">
            <!-- Golden Oyster Shell Flaps -->
            <path d="M-80,40 C-80,-40 -20,-70 0,-70 C20,-70 80,-40 80,40 Z" fill="${c[4].hex}" stroke="${c[3].hex}" stroke-width="3" />
            <path d="M-70,45 C-70,0 -15,-30 0,-30 C15,-30 70,0 70,45 Z" fill="${c[5].hex}" />
            
            <!-- Lustrous Glowing Pearl -->
            <circle cx="0" cy="10" r="32" fill="url(#pearl-glow)" stroke="${c[4].hex}" stroke-width="2" />
            <!-- Pearl Specular Highlight -->
            <ellipse cx="-10" cy="0" rx="9" ry="5" fill="#ffffff" opacity="0.8" transform="rotate(-30, -10, 0)" />
          </g>

          <!-- Wave Crest Sprays -->
          ${[ [120,160],[320,180],[520,150],[720,170] ].map(([cx,cy]) => `
            <circle cx="${cx}" cy="${cy}" r="4" fill="${c[3].hex}" opacity="0.8" />
          `).join('')}
        </svg>
      `,

      'toranj-illumination': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="tor-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${c[5].hex}" />
              <stop offset="100%" stop-color="${c[1].hex}" />
            </linearGradient>
            <radialGradient id="tor-gold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="${c[2].hex}" />
              <stop offset="80%" stop-color="#b8860b" />
              <stop offset="100%" stop-color="${c[0].hex}" />
            </radialGradient>
          </defs>
          <rect width="800" height="400" fill="url(#tor-bg)" />

          <!-- Grand Timurid 16-Point Illuminated Shamseh Mandala -->
          <g transform="translate(400, 200)">
            <!-- Gilded Flame Rays (Sharafeh) -->
            ${Array.from({length: 32}).map((_, i) => {
              const deg = i * 11.25;
              const len = i % 2 === 0 ? 150 : 130;
              return `
                <line x1="0" y1="0" x2="0" y2="-${len}" stroke="${c[2].hex}" stroke-width="${i % 2 === 0 ? 2 : 1}" stroke-linecap="round" transform="rotate(${deg})" opacity="0.85"/>
              `;
            }).join('')}

            <!-- Outer Ultramarine Foliage Ring -->
            <circle r="115" fill="${c[1].hex}" stroke="${c[2].hex}" stroke-width="2.5" />
            
            <!-- 16 Scalloped Cartouches -->
            ${Array.from({length: 16}).map((_, i) => {
              const deg = i * 22.5;
              return `
                <g transform="rotate(${deg})">
                  <path d="M0,-115 Q-16,-85 0,-60 Q16,-85 0,-115 Z" fill="${i % 2 === 0 ? c[0].hex : c[3].hex}" stroke="${c[2].hex}" stroke-width="1.2"/>
                  <circle cx="0" cy="-90" r="3" fill="${c[4].hex}" />
                </g>
              `;
            }).join('')}

            <!-- Inner Golden Toranj Core -->
            <circle r="60" fill="url(#tor-gold)" stroke="${c[4].hex}" stroke-width="2" />
            <circle r="38" fill="${c[0].hex}" stroke="${c[2].hex}" stroke-width="1.5" />
            <circle r="16" fill="${c[4].hex}" />
            <circle r="6" fill="${c[1].hex}" />
          </g>

          <!-- Corner Illuminated Spandrels (Lachak-e Toranj) -->
          <g fill="${c[0].hex}" stroke="${c[2].hex}" stroke-width="2" opacity="0.85">
            <path d="M0,0 L140,0 C90,60 60,90 0,140 Z" />
            <path d="M800,0 L660,0 C710,60 740,90 800,140 Z" />
            <path d="M0,400 L140,400 C90,340 60,310 0,260 Z" />
            <path d="M800,400 L660,400 C710,340 740,310 800,260 Z" />
          </g>
        </svg>
      `,

      'bazaar-spices': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="baz-bg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${c[5].hex}" />
              <stop offset="100%" stop-color="${c[0].hex}" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#baz-bg)" />

          <!-- Historic Tabriz Bazaar Brick Vaulted Arches -->
          <g stroke="${c[2].hex}" stroke-width="2" fill="none" opacity="0.45">
            <path d="M200,400 L200,140 Q400,20 600,140 L600,400" />
            <path d="M250,400 L250,170 Q400,70 550,170 L550,400" />
            <path d="M300,400 L300,200 Q400,120 500,200 L500,400" />
            <!-- Ceiling Oculi (Hoorno) Skylight -->
            <ellipse cx="400" cy="50" rx="35" ry="18" fill="${c[4].hex}" fill-opacity="0.6" stroke="${c[2].hex}" stroke-width="2"/>
          </g>

          <!-- Conical Mounds of Persian Spices in Hammered Bowls -->
          <g transform="translate(400, 310)">
            <!-- Central Turmeric Gold Mound -->
            <ellipse cx="0" cy="40" rx="75" ry="25" fill="#422006" />
            <polygon points="-70,40 0,-70 70,40" fill="${c[2].hex}" stroke="${c[4].hex}" stroke-width="1.5" />
            <circle cx="0" cy="-70" r="4" fill="${c[4].hex}" />

            <!-- Left Paprika & Saffron Mound -->
            <g transform="translate(-160, 20)">
              <ellipse cx="0" cy="30" rx="60" ry="20" fill="#422006" />
              <polygon points="-55,30 0,-55 55,30" fill="${c[1].hex}" stroke="${c[4].hex}" stroke-width="1.5" />
            </g>

            <!-- Right Cardamom & Pistachio Mound -->
            <g transform="translate(160, 20)">
              <ellipse cx="0" cy="30" rx="60" ry="20" fill="#422006" />
              <polygon points="-55,30 0,-50 55,30" fill="${c[3].hex}" stroke="${c[4].hex}" stroke-width="1.5" />
            </g>
          </g>

          <!-- Floating Aromatic Cinnamon Sticks & Star Anise -->
          <rect x="60" y="280" width="12" height="70" rx="4" fill="${c[0].hex}" transform="rotate(35, 60, 280)" stroke="${c[4].hex}" stroke-width="1"/>
          <rect x="720" y="270" width="12" height="70" rx="4" fill="${c[0].hex}" transform="rotate(-30, 720, 270)" stroke="${c[4].hex}" stroke-width="1"/>
        </svg>
      `,

      'hyrcanian-forests': (c) => `
        <svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="hyr-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${c[2].hex}" />
              <stop offset="60%" stop-color="${c[4].hex}" />
              <stop offset="100%" stop-color="${c[0].hex}" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#hyr-sky)" />

          <!-- Distant Snow-Capped Mount Damavand Silhouette -->
          <g transform="translate(400, 190)">
            <polygon points="-220,130 0,-85 220,130" fill="${c[3].hex}" opacity="0.65" />
            <!-- Damavand Summit Glacier Cap -->
            <polygon points="-55,-35 0,-85 55,-35 25,-25 0,-30 -25,-25" fill="${c[4].hex}" stroke="${c[2].hex}" stroke-width="1.5" />
          </g>

          <!-- Layered Caspian Misty Ridges -->
          <path d="M0,240 Q200,190 400,230 Q600,180 800,220 L800,400 L0,400 Z" fill="${c[1].hex}" opacity="0.75" />
          <path d="M0,280 Q250,230 500,270 Q680,230 800,260 L800,400 L0,400 Z" fill="${c[0].hex}" opacity="0.9" />

          <!-- Ancient Primeval Hyrcanian Ferns & Beech Trunks Foreground -->
          <g transform="translate(100, 400)">
            <path d="M0,0 Q30,-90 60,-160" stroke="${c[3].hex}" stroke-width="14" stroke-linecap="round" fill="none" />
            ${[-40, -70, -100, -130].map(y => `
              <path d="M20,${y} Q-30,${y-20} -60,${y-10}" stroke="${c[1].hex}" stroke-width="4" stroke-linecap="round" fill="none" />
              <path d="M30,${y} Q80,${y-20} 110,${y-10}" stroke="${c[2].hex}" stroke-width="4" stroke-linecap="round" fill="none" />
            `).join('')}
          </g>
          <g transform="translate(700, 400)">
            <path d="M0,0 Q-30,-90 -60,-160" stroke="${c[3].hex}" stroke-width="14" stroke-linecap="round" fill="none" />
            ${[-40, -70, -100, -130].map(y => `
              <path d="M-20,${y} Q-70,${y-20} -100,${y-10}" stroke="${c[1].hex}" stroke-width="4" stroke-linecap="round" fill="none" />
              <path d="M-30,${y} Q20,${y-20} 50,${y-10}" stroke="${c[2].hex}" stroke-width="4" stroke-linecap="round" fill="none" />
            `).join('')}
          </g>
        </svg>
      `
    };
    

    // Application State Variables
    let currentCategory = "all";
    let searchQuery = "";
    let activePreviewPalette = PERSIAN_PALETTES[0];
    let activeScientificPalette = null;
    let activeScientificColorIdx = 0;
    let currentScientificTab = 'tonal';
    let lockedSwatches = {}; // map paletteId -> array of locked color indices
    let isSpatialModeActive = false;
    let radarAnimFrame = null;
    let radarAngle = 0;
    let currentExportTab = "css";
    let activePaletteForExport = null;
    let soundEnabled = false;
    let artDisplayMode = "vector"; // 'vector' or 'photo'
    let activeStudioTemplate = "product";
    let cardSampleStates = {};

    // Three.js State
    let threeScene, threeCamera, threeRenderer, threeMesh, threeRings = [], threeParticles;
    let isDragging3D = false;
    let prevMousePos = { x: 0, y: 0 };
    let threeAutoRotate = true;
    let currentGeometryType = "dodecahedron";

    // Initialize Card Role Configurations
    PERSIAN_PALETTES.forEach(p => {
      cardSampleStates[p.id] = getCalibratedRoles(p, 'dark');
    });

    let studioRoleMapping = getCalibratedRoles(PERSIAN_PALETTES[0], 'dark');

    // Lifecycle Initialization
    window.addEventListener('DOMContentLoaded', () => {
      setTheme(currentTheme);
      setLanguage(currentLang);
      renderCategoryButtons();
      renderPalettes();
      applyPaletteToStudio(PERSIAN_PALETTES[0]);
      try {initThreeJsShowcase();} catch(error) {console.warn('3D preview unavailable',error);}
      initCard3DTilt();
      setupSearchListener();
    });

    // Web Audio Synthesizer with Persian Dastgah Harmonic Frequencies
    function playHarmonicTone(freqIndex = 0) {
      if (!soundEnabled) return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const audioCtx = sharedAudioContext || (sharedAudioContext = new AudioCtx());
        // Persian modal scales (Isfahan / Homayoun / Shur notes)
        const dastgahFreqs = [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 466.16, 523.25, 587.33, 622.25, 698.46, 783.99];
        const freq = typeof freqIndex === 'number' ? (freqIndex > 100 ? freqIndex : (dastgahFreqs[freqIndex % dastgahFreqs.length] || 440)) : 440;
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.35);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
      } catch (e) {
        // Silently catch audio permissions
      }
    }

    function toggleSoundFx() {
      soundEnabled = !soundEnabled;
      const icon = document.getElementById('soundIcon');
      if (soundEnabled) {
        icon.className = "fa-solid fa-volume-high text-amber-400";
        showToast("صدا فعال شد", "افکت‌های هارمونیک دستگاه‌های موسیقی ایرانی فعال شدند.");
        playHarmonicTone(523.25);
      } else {
        icon.className = "fa-solid fa-volume-xmark text-slate-500";
        showToast("بی‌صدا شد", "افکت‌های صوتی غیرفعال شدند.");
      }
    }

    function setArtDisplayMode(mode) {
      artDisplayMode = mode;
      const vecBtn = document.getElementById('artModeVectorBtn');
      const phoBtn = document.getElementById('artModePhotoBtn');
      if (mode === 'vector') {
        vecBtn.className = "px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 bg-amber-500 text-slate-950 font-bold shadow-sm";
        phoBtn.className = "px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200";
        showToast("حالت هنر برداری فعال شد", "الگوهای برداری با الهام از هنر ایرانی نمایش داده می‌شوند.");
      } else {
        phoBtn.className = "px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 bg-amber-500 text-slate-950 font-bold shadow-sm";
        vecBtn.className = "px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 text-slate-400 hover:text-slate-200";
        showToast("حالت عکس میراث فرهنگی فعال شد", "تصاویر پیوندشده از منابع بیرونی نمایش داده می‌شوند؛ اعتبار هر تصویر به منبع آن وابسته است.");
      }
      playHarmonicTone(4);
      renderPalettes();
    }

    // Mathematical Luminance & WCAG 2.2 / APCA Contrast Engine
    
    // ==========================================
    // SCIENTIFIC OKLAB & GOOGLE M3 COLOR ENGINE
    // ==========================================
    function srgbToLinear(c) {
      c = c / 255.0;
      return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }

    function linearToSrgb(c) {
      c = Math.max(0, Math.min(1, c));
      return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1.0 / 2.4) - 0.055;
    }

    function rgbToHex(r,g,b) { return PersianCore.rgbToHex({r,g,b}); }

    function rgbToOklab(r,g,b) { return PersianCore.rgbToOklab({r,g,b}); }

    function oklabToRgb(L,a,b) { return PersianCore.oklabToRgb({L,a,b}); }

    function getOklabLightness(hex) {
      const rgb = hexToRgb(hex);
      return rgbToOklab(rgb.r, rgb.g, rgb.b).L;
    }

    function getOklabChroma(hex) {
      const rgb = hexToRgb(hex);
      const lab = rgbToOklab(rgb.r, rgb.g, rgb.b);
      return Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    }

    function getOklabHue(hex) {
      const rgb = hexToRgb(hex);
      const lab = rgbToOklab(rgb.r, rgb.g, rgb.b);
      const rad = Math.atan2(lab.b, lab.a);
      let deg = (rad * 180 / Math.PI) % 360;
      if (deg < 0) deg += 360;
      return deg;
    }

    function calculateDeltaEOk(hex1, hex2) {
      const rgb1 = hexToRgb(hex1);
      const rgb2 = hexToRgb(hex2);
      const lab1 = rgbToOklab(rgb1.r, rgb1.g, rgb1.b);
      const lab2 = rgbToOklab(rgb2.r, rgb2.g, rgb2.b);
      return Math.sqrt(
        Math.pow(lab1.L - lab2.L, 2) +
        Math.pow(lab1.a - lab2.a, 2) +
        Math.pow(lab1.b - lab2.b, 2)
      );
    }

    function generateM3Tones(hex) { return Object.entries(PersianCore.generateTonalPalette(hex)).map(([tone,hex])=>({tone:Number(tone),hex,L:PersianCore.hexToHct(hex).tone.toFixed(1)})); }

    // Dynamic Surface Tinting (Google Material You + Apple Vibrancy)
    function updateDynamicSurfaceTint(hex) {
      const fallbackHex = (typeof activePreviewPalette !== 'undefined' && activePreviewPalette && activePreviewPalette.colors && activePreviewPalette.colors[0]?.hex) || '#120A8F';
      const targetHex = (typeof hex === 'string' && hex.startsWith('#')) ? hex : fallbackHex;
      try {
        const rgb = hexToRgb(targetHex);
        const isLight = typeof currentTheme !== 'undefined' && currentTheme === 'light';
        const tint = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${isLight ? '0.05' : '0.08'})`;
        const glow = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${isLight ? '0.15' : '0.3'})`;
        document.documentElement.style.setProperty('--palette-surface-tint', tint);
        document.documentElement.style.setProperty('--palette-glow', glow);
      } catch(e) {}
    }

    // Toggle Spatial VisionOS Mode
    function toggleSpatialMode() {
      isSpatialModeActive = !isSpatialModeActive;
      const body = document.body;
      const btn = document.getElementById('spatialModeToggle');
      if (isSpatialModeActive) {
        body.classList.add('spatial-vision-mode');
        btn.classList.add('bg-cyan-500/20', 'border-cyan-500/40', 'text-cyan-300');
        btn.classList.remove('bg-slate-900', 'text-slate-400');
        showToast("نمای فضایی فعال شد", "استایل شیشه‌ای فضایی با درخشش هولوگرافیک و بازتاب‌های نوری نوسازی شد.");
        playHarmonicTone(6);
      } else {
        body.classList.remove('spatial-vision-mode');
        btn.classList.remove('bg-cyan-500/20', 'border-cyan-500/40', 'text-cyan-300');
        btn.classList.add('bg-slate-900', 'text-slate-400');
        showToast("حالت کلاسیک فعال شد", "نمای رابط کاربری به حالت لوکس بازگردانده شد.");
        playHarmonicTone(3);
      }
    }

    // Toggle Color Lock for a specific swatch in a palette
    function toggleColorLock(paletteId, colorIdx) {
      if (!lockedSwatches[paletteId]) {
        lockedSwatches[paletteId] = [];
      }
      const list = lockedSwatches[paletteId];
      const foundIdx = list.indexOf(colorIdx);
      if (foundIdx > -1) {
        list.splice(foundIdx, 1);
        showToast("قفل رنگ باز شد", `رنگ شماره ${colorIdx + 1} در شافل تغییر خواهد کرد.`);
        playHarmonicTone(1);
      } else {
        list.push(colorIdx);
        showToast("رنگ قفل شد!", `رنگ شماره ${colorIdx + 1} در شافل ثابت خواهد ماند.`);
        playHarmonicTone(5);
      }
      renderPalettes();
    }

    // Select a readable digital text color without overstating the measured grade.
    function optimizeTextContrast(bgHex, textHex) {
      if (getContrastRatio(bgHex, textHex) >= 7) return textHex;
      const lab = PersianCore.rgbToOklab(hexToRgb(textHex));
      const targetL = getLuminance(bgHex) < 0.18 ? 0.96 : 0.08;
      const candidate = PersianCore.rgbToHex(PersianCore.oklabToRgb({L:targetL,a:lab.a*0.4,b:lab.b*0.4}));
      if (getContrastRatio(bgHex, candidate) >= 7) return candidate;
      return [textHex, candidate, '#000000', '#FFFFFF']
        .sort((a,b)=>getContrastRatio(bgHex,b)-getContrastRatio(bgHex,a))[0];
    }

    function autoOptimizeCardContrast(paletteId) {
      const palette = PERSIAN_PALETTES.find(p => p.id === paletteId);
      if (!palette) return;
      const roles = cardSampleStates[paletteId] || getCalibratedRoles(palette, 'dark');
      const bgHex = palette.colors[roles.bg].hex;
      const textHex = optimizeTextContrast(bgHex, roles.textOverride || palette.colors[roles.heading].hex);
      cardSampleStates[paletteId] = {...roles,textOverride:textHex};
      updateCardSampleDOM(paletteId);
      const result = getWCAGBadgeInfo(getContrastRatio(bgHex,textHex));
      playHarmonicTone(8);
      showToast('کنتراست کارت محاسبه شد', 'نتیجه برای رنگ متن و زمینهٔ فعلی: ' + result.text);
    }

    function hexToRgb(hex) {
      if (!hex || typeof hex !== 'string') return { r: 18, g: 10, b: 143 };
      try {
        return PersianCore.hexToRgb(hex);
      } catch(e) {
        return { r: 18, g: 10, b: 143 };
      }
    }

    function getLuminance(val) {
      let rgb;
      if (typeof val === 'string') {
        rgb = hexToRgb(val);
      } else if (val && typeof val === 'object' && 'r' in val) {
        rgb = val;
      } else if (arguments.length >= 3) {
        rgb = { r: Number(arguments[0]), g: Number(arguments[1]), b: Number(arguments[2]) };
      } else {
        rgb = { r: 0, g: 0, b: 0 };
      }
      const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(v => {
        v /= 255;
        return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    function getContrastRatio(hex1, hex2) {
      const l1 = getLuminance(hex1);
      const l2 = getLuminance(hex2);
      const max = Math.max(l1, l2);
      const min = Math.min(l1, l2);
      return (max + 0.05) / (min + 0.05);
    }

    function getOptimalTextColor(bgHex) {
      const crWhite = getContrastRatio(bgHex, '#FFFFFF');
      const crBlack = getContrastRatio(bgHex, '#0F172A');
      return crWhite >= crBlack ? '#FFFFFF' : '#0F172A';
    }

    function getWCAGBadgeInfo(ratio) {
      if (ratio >= 7.0) {
        return { label: 'WCAG AAA', badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40', text: `${ratio.toFixed(1)}:1 (AAA)` };
      } else if (ratio >= 4.5) {
        return { label: 'WCAG AA', badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', text: `${ratio.toFixed(1)}:1 (AA)` };
      } else if (ratio >= 3.0) {
        return { label: 'AA Large', badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40', text: `${ratio.toFixed(1)}:1 (AA Large)` };
      } else {
        return { label: currentLang === 'en' ? 'Low Contrast' : 'کنتراست ضعیف', badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40', text: `${ratio.toFixed(1)}:1 (Fail)` };
      }
    }

    // Intelligent Contrast-Preserving Role Shuffler
    function getCalibratedRoles(palette, mode = 'dark') {
      const colors = palette.colors;
      const sorted = colors.map((c, idx) => ({ ...c, originalIndex: idx, luma: getLuminance(c.hex) }))
                           .sort((a, b) => a.luma - b.luma);
      
      let bgIdx, headingIdx, bodyIdx, primaryIdx, secondaryIdx, accentIdx;

      if (mode === 'dark') {
        bgIdx = sorted[0].originalIndex;
        headingIdx = sorted[5].originalIndex;
        bodyIdx = sorted[4].originalIndex;
        const midTones = [sorted[1], sorted[2], sorted[3]];
        const pChoice = midTones[0];
        primaryIdx = pChoice.originalIndex;
        const remaining = midTones.filter(x => x.originalIndex !== primaryIdx);
        secondaryIdx = remaining.length > 0 ? remaining[0].originalIndex : sorted[4].originalIndex;
        accentIdx = remaining.length > 1 ? remaining[1].originalIndex : sorted[3].originalIndex;
      } else if (mode === 'light') {
        bgIdx = sorted[5].originalIndex;
        headingIdx = sorted[0].originalIndex;
        bodyIdx = sorted[1].originalIndex;
        const midTones = [sorted[2], sorted[3], sorted[4]];
        const pChoice = midTones[0];
        primaryIdx = pChoice.originalIndex;
        const remaining = midTones.filter(x => x.originalIndex !== primaryIdx);
        secondaryIdx = remaining.length > 0 ? remaining[0].originalIndex : sorted[1].originalIndex;
        accentIdx = remaining.length > 1 ? remaining[1].originalIndex : sorted[2].originalIndex;
      } else {
        // Dynamic mode
        const randBg = sorted[Math.floor(Math.random() * sorted.length)];
        bgIdx = randBg.originalIndex;
        const candidates = sorted
          .filter(x => x.originalIndex !== bgIdx)
          .map(x => ({ ...x, cr: getContrastRatio(randBg.hex, x.hex) }))
          .sort((a, b) => b.cr - a.cr);
        
        if (candidates[0].cr >= 4.5) {
          headingIdx = candidates[0].originalIndex;
          bodyIdx = candidates.length > 1 && candidates[1].cr >= 3.5 ? candidates[1].originalIndex : candidates[0].originalIndex;
          const rest = candidates.filter(x => x.originalIndex !== headingIdx && x.originalIndex !== bodyIdx);
          primaryIdx = rest.length > 0 ? rest[0].originalIndex : candidates[candidates.length - 1].originalIndex;
          secondaryIdx = rest.length > 1 ? rest[1].originalIndex : candidates[0].originalIndex;
          accentIdx = rest.length > 2 ? rest[2].originalIndex : candidates[1].originalIndex;
        } else {
          const opposite = randBg.luma < 0.5 ? sorted[5] : sorted[0];
          headingIdx = opposite.originalIndex;
          bodyIdx = opposite.originalIndex;
          const rest = sorted.filter(x => x.originalIndex !== bgIdx && x.originalIndex !== headingIdx);
          primaryIdx = rest[0].originalIndex;
          secondaryIdx = rest[1].originalIndex;
          accentIdx = rest[2].originalIndex;
        }
      }

      return { bg: bgIdx, heading: headingIdx, body: bodyIdx, primary: primaryIdx, secondary: secondaryIdx, accent: accentIdx, mode };
    }

    function renderCategoryButtons() {
      const container = document.getElementById('categoryPills');
      if (!container) return;
      container.innerHTML = CATEGORIES.map(cat => {
        const isActive = cat.id === currentCategory;
        const label = currentLang === 'en' ? (cat.labelEn || cat.label) : cat.label;
        return `
          <button 
            onclick="setCategory('${cat.id}')"
            class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isActive 
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20' 
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }"
          >
            ${label}
          </button>
        `;
      }).join('');
    }

    function setCategory(catId) {
      currentCategory = catId;
      playHarmonicTone(2);
      renderCategoryButtons();
      renderPalettes();
    }

    function setupSearchListener() {
      const input = document.getElementById('searchInput');
      input.addEventListener('input', (e) => {
        searchQuery = PersianCore.normalizeColorName(e.target.value);
        renderPalettes();
      });
    }

    function renderPalettes() {
      const grid = document.getElementById('palettesGrid');
      const emptyState = document.getElementById('emptyState');

      const filtered = PERSIAN_PALETTES.filter(palette => {
        const matchesCategory = (currentCategory === "all" || palette.category === currentCategory);
        if (!matchesCategory) return false;

        if (!searchQuery) return true;

        const matchTitle = PersianCore.normalizeColorName(palette.nameFa).includes(searchQuery) ||
                           PersianCore.normalizeColorName(palette.nameEn).includes(searchQuery) ||
                           PersianCore.normalizeColorName(palette.description).includes(searchQuery) ||
                           PersianCore.normalizeColorName(palette.culturalContext).includes(searchQuery);

        const matchColor = palette.colors.some(c => 
          PersianCore.normalizeColorName(c.nameFa).includes(searchQuery) ||
          PersianCore.normalizeColorName(c.nameEn).includes(searchQuery) ||
          PersianCore.normalizeColorName(c.hex).includes(searchQuery)
        );

        return matchTitle || matchColor;
      });

      if (filtered.length === 0) {
        grid.innerHTML = "";
        emptyState.classList.remove('hidden');
        return;
      }

      emptyState.classList.add('hidden');

      grid.innerHTML = filtered.map(palette => {
        const c = palette.colors;
        const role = cardSampleStates[palette.id] || getCalibratedRoles(palette, 'dark');
        const cBg = c[role.bg];
        const cHeading = role.textOverride ? {...c[role.heading],hex:role.textOverride} : c[role.heading];
        const cPrimary = c[role.primary];
        const cSecondary = c[role.secondary];
        const cAccent = c[role.accent];
        
        const ratio = getContrastRatio(cBg.hex, cHeading.hex);
        const badgeInfo = getWCAGBadgeInfo(ratio);
        const primaryTextCol = getOptimalTextColor(cPrimary.hex);
        const badgeTextCol = getOptimalTextColor(cAccent.hex);

        // Vector art generator
        const vectorSvg = PALETTE_VECTOR_ART[palette.id] ? PALETTE_VECTOR_ART[palette.id](c) : '';
        const isEn = currentLang === 'en';
        const palName = isEn ? palette.nameEn : palette.nameFa;
        const palSubName = isEn ? (PALETTE_SUBTITLES_EN[palette.id] || palette.nameEn) : palette.nameEn;
        const palDesc = isEn ? (PALETTE_DESCRIPTIONS_EN[palette.id] || palette.nameEn) : palette.description;
        const palContext = isEn ? (PALETTE_CONTEXT_EN[palette.id] || palette.nameEn) : palette.culturalContext;
        const accentName = isEn ? cAccent.nameEn : cAccent.nameFa;
        const primaryName = isEn ? cPrimary.nameEn : cPrimary.nameFa;

        return `
          <div 
            class="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" 
            data-palette-id="${palette.id}"
          >
            <!-- Specular 3D Holographic Reflector -->
            <div class="holo-shine"></div>

            <!-- Top Media Banner: Dual-Mode (Procedural Vector vs Heritage Photo) -->
            <div class="palette-art-banner h-40 sm:h-44 w-full mb-4 shadow-xl border border-white/10 relative bg-slate-950">
              
              <!-- Procedural Vector Artwork Layer (Always Active as Base/Fallback) -->
              <div class="absolute inset-0 w-full h-full ${artDisplayMode === 'photo' ? 'opacity-30' : 'opacity-100'} transition-opacity duration-500">
                ${vectorSvg}
              </div>

              <!-- Optional linked heritage photographs -->
              ${artDisplayMode === 'photo' ? `
                <img 
                  src="${palette.imageUrl}" 
                  alt="${palName}" 
                  class="cultural-photo w-full h-full object-cover absolute inset-0 opacity-85"
                  loading="lazy"
                  crossorigin="anonymous"
                  onerror="this.style.opacity='0';"
                />
              ` : ''}
              
              <!-- Ambient Gradient Vignette -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              <!-- Top Banner Badges -->
              <div class="absolute top-2.5 right-3 left-3 flex items-center justify-between z-10">
                <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-amber-300 border border-amber-500/30 flex items-center gap-1 shadow-lg">
                  <i class="fa-solid fa-landmark text-amber-400"></i>
                  <span>${getCategoryName(palette.category)}</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-cyan-300 border border-cyan-500/20" dir="ltr">
                  ${artDisplayMode === 'vector' ? 'VECTOR ART' : 'HERITAGE REFERENCE'}
                </span>
              </div>

              <!-- Bottom Banner Provenance Info -->
              <div class="absolute bottom-2.5 right-3 left-3 z-10">
                <div class="text-sm font-black text-white drop-shadow-md flex items-center gap-1.5">
                  <i class="fa-solid fa-gem text-amber-400 text-xs"></i>
                  <span>${palName}</span>
                </div>
                <div class="text-[10px] text-slate-300 line-clamp-1 opacity-90 drop-shadow">
                  ${palContext}
                </div>
              </div>
            </div>

            <!-- Header Info & Quick Toolbar -->
            <div class="flex items-start justify-between gap-3 mb-3">
              <div>
                <p class="text-xs text-slate-400 font-display tracking-wider" dir="ltr">${palSubName}</p>
                <p class="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed font-light">
                  ${palDesc}
                </p>
              </div>

              <!-- Quick Action Icons -->
              <div class="flex items-center gap-1 flex-shrink-0">
                <button 
                  onclick="cycleCardShuffle('${palette.id}')" 
                  title="${isEn ? 'Shuffle roles & contrast mode' : 'تغییر شافل و مود کنتراست این کارت'}" 
                  class="h-8 px-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <i class="fa-solid fa-shuffle"></i>
                  <span class="text-[11px] hidden sm:inline">${UI_STRINGS[currentLang].shuffle}</span>
                </button>
                <button 
                  onclick="openEvidenceDashboard('${palette.id}', 0)" 
                  title="${isEn ? 'Spectral science & provenance dossier' : 'شناسنامه عمیق علمی، شیمیایی، طیف نوری و APCA'}" 
                  class="w-8 h-8 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 flex items-center justify-center transition text-xs border border-emerald-500/30 hover:scale-105 active:scale-95"
                >
                  <i class="fa-solid fa-flask-vial"></i>
                </button>
                <button 
                  onclick="openContrastMatrix('${palette.id}')" 
                  title="${isEn ? '6x6 Contrast Matrix' : 'مشاهده ماتریس کنتراست ۶×۶'}" 
                  class="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-cyan-300 flex items-center justify-center transition text-xs border border-slate-700"
                >
                  <i class="fa-solid fa-table-cells"></i>
                </button>
                <button 
                  onclick="openGradientModal('${palette.id}')" 
                  title="${isEn ? 'Modern Gradients Studio' : 'استودیوی گرادیان‌های مدرن'}" 
                  class="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-amber-300 flex items-center justify-center transition text-xs border border-slate-700"
                >
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                </button>
                <button 
                  onclick="applyAndShowStudio('${palette.id}')" 
                  title="${isEn ? 'Open in Fullscreen 3D Studio' : 'باز کردن در استودیوی فول‌اسکرین سه‌بعدی'}" 
                  class="w-8 h-8 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 flex items-center justify-center transition text-xs border border-cyan-500/30"
                >
                  <i class="fa-solid fa-expand"></i>
                </button>
              </div>
            </div>

            <!-- Dynamic 6-Bar Interactive Swatch Strip -->
            <div class="h-14 sm:h-16 w-full rounded-xl overflow-hidden flex shadow-inner border border-slate-700/60 mb-3.5">
              ${palette.colors.map((colorObj, cIdx) => {
                const cName = isEn ? colorObj.nameEn : colorObj.nameFa;
                return `
                <div 
                  onclick="copyColorHex('${colorObj.hex}', '${cName}')"
                  class="color-swatch-strip relative flex flex-col justify-end p-1.5 cursor-pointer group/strip"
                  style="background-color: ${colorObj.hex};"
                  title="${cName} (${colorObj.hex}) - ${isEn ? 'Click to copy HEX' : 'کلیک برای کپی هگز'}"
                >
                  <div class="opacity-0 group-hover/strip:opacity-100 transition-opacity flex flex-col items-center justify-center absolute inset-0 bg-black/50 backdrop-blur-[2px]">
                    <i class="fa-regular fa-clone text-[11px]" style="color: ${getOptimalTextColor(colorObj.hex)};"></i>
                    <span class="text-[9px] font-mono mt-0.5 font-bold" style="color: ${getOptimalTextColor(colorObj.hex)};">${colorObj.hex}</span>
                  </div>
                </div>
              `;}).join('')}
            </div>

            <!-- Live Calibrated Micro-Sample (UI Component Preview) -->
            <div 
              id="card-sample-${palette.id}" 
              class="rounded-xl p-3.5 mb-4 border transition-all duration-300 shadow-lg flex flex-col justify-between"
              style="background-color: ${cBg.hex}; border-color: ${cSecondary.hex}60;"
            >
              <div class="flex items-center justify-between mb-2">
                <span 
                  id="card-badge-${palette.id}" 
                  class="text-[10px] font-semibold px-2 py-0.5 rounded-full border transition-all truncate max-w-[140px]"
                  style="background-color: ${cAccent.hex}; color: ${badgeTextCol}; border-color: ${cSecondary.hex};"
                >
                  ${accentName}
                </span>
                <span 
                  id="card-wcag-${palette.id}" 
                  class="text-[9px] font-mono px-1.5 py-0.5 rounded border ${badgeInfo.badgeClass}"
                >
                  ${badgeInfo.text}
                </span>
              </div>

              <div 
                id="card-heading-${palette.id}" 
                class="text-xs font-black mb-1.5 transition-colors truncate"
                style="color: ${cHeading.hex};"
              >
                ${UI_STRINGS[currentLang].sampleHarmony} ${palName}
              </div>

              <p 
                id="card-body-${palette.id}"
                class="text-[11px] leading-relaxed mb-3 line-clamp-2 transition-colors opacity-90"
                style="color: ${cHeading.hex};"
              >
                ${palContext}
              </p>

              <div class="flex items-center gap-2 pt-1">
                <button 
                  id="card-btn-primary-${palette.id}"
                  onclick="copyColorHex('${cPrimary.hex}', '${primaryName}')"
                  class="px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-sm transition hover:scale-105 active:scale-95 truncate"
                  style="background-color: ${cPrimary.hex}; color: ${primaryTextCol};"
                  title="${isEn ? 'Click to copy button color' : 'کلیک برای کپی رنگ دکمه'}"
                >
                  ${UI_STRINGS[currentLang].copyAction} ${cPrimary.hex}
                </button>
                <button 
                  id="card-btn-secondary-${palette.id}"
                  onclick="cycleCardShuffle('${palette.id}')"
                  class="px-2.5 py-1.5 rounded-lg text-[10px] font-medium border transition hover:opacity-80 flex items-center gap-1"
                  style="border-color: ${cSecondary.hex}; color: ${cHeading.hex};"
                  title="${isEn ? 'Cycle role assignment on this card' : 'تغییر شافل نقش‌های این کارت'}"
                >
                  <i class="fa-solid fa-arrows-rotate text-[9px]"></i>
                  <span>${UI_STRINGS[currentLang].modeChange}</span>
                </button>
              </div>
            </div>

            <!-- Detailed Grid of Colors with Labels & Tooltips -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
              ${palette.colors.map((colorObj, cIdx) => {
                const cName = isEn ? colorObj.nameEn : colorObj.nameFa;
                return `
                <div 
                  onclick="copyColorHex('${colorObj.hex}', '${cName}')" 
                  class="p-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-800/90 border border-slate-800/80 cursor-pointer transition flex items-center gap-2 group/item"
                  title="${isEn ? colorObj.nameEn : colorObj.meaning}"
                >
                  <div class="w-4 h-4 rounded-md border border-white/20 flex-shrink-0 shadow-sm" style="background-color: ${colorObj.hex};"></div>
                  <div class="min-w-0 flex-1">
                    <div class="font-medium text-slate-200 truncate text-[10px] group-hover/item:text-amber-300 transition-colors">${cName}</div>
                    <div class="text-[9px] font-mono text-slate-400 flex items-center justify-between">
                      <span>${colorObj.hex}</span>
                      <div class="flex items-center gap-1">
                        <button 
                          type="button" 
                          onclick="event.stopPropagation(); openEvidenceDashboard('${palette.id}', ${cIdx})" 
                          title="${isEn ? 'Color Science Dossier' : 'شناسنامه علمی و طیف نوری'}" 
                          class="text-emerald-400 hover:text-emerald-300 opacity-80 hover:opacity-100 p-0.5 transition"
                        >
                          <i class="fa-solid fa-atom text-[10px]"></i>
                        </button>
                        <i class="fa-regular fa-copy text-[8px] opacity-0 group-hover/item:opacity-100 text-amber-400 transition-opacity"></i>
                      </div>
                    </div>
                  </div>
                </div>
              `;}).join('')}
            </div>

          </div>
        `;
      }).join('');

      initCard3DTilt();
    }

    // Card-Level Shuffling Functionality
    function cycleCardShuffle(paletteId) {
      const palette = PERSIAN_PALETTES.find(p => p.id === paletteId);
      if (!palette) return;

      const currentState = cardSampleStates[paletteId] || { mode: 'dark' };
      const nextMode = currentState.mode === 'dark' ? 'light' : currentState.mode === 'light' ? 'dynamic' : 'dark';
      
      const newRoles = getCalibratedRoles(palette, nextMode);
      cardSampleStates[paletteId] = newRoles;

      playHarmonicTone(3);
      updateCardSampleDOM(paletteId);
      const isEnToast = currentLang === 'en';
      const palToastName = isEnToast ? palette.nameEn : palette.nameFa;
      const modeLabel = nextMode === 'dark' ? (isEnToast ? 'Dark Luxury' : 'لوکس تیره') : nextMode === 'light' ? (isEnToast ? 'Editorial Light' : 'کاغذی روشن') : (isEnToast ? 'Dynamic Contrast' : 'کنتراست پویا');
      showToast(isEnToast ? `${palToastName} Shuffled` : `پالت ${palToastName} شافل شد`, isEnToast ? `New mode: ${modeLabel}` : `مود جدید: ${modeLabel}`);
    }

    function updateCardSampleDOM(paletteId) {
      const palette = PERSIAN_PALETTES.find(p => p.id === paletteId);
      if (!palette) return;

      const c = palette.colors;
      const role = cardSampleStates[paletteId];
      const cBg = c[role.bg];
      const cHeading = role.textOverride ? {...c[role.heading],hex:role.textOverride} : c[role.heading];
      const cPrimary = c[role.primary];
      const cSecondary = c[role.secondary];
      const cAccent = c[role.accent];

      const ratio = getContrastRatio(cBg.hex, cHeading.hex);
      const badgeInfo = getWCAGBadgeInfo(ratio);
      const primaryTextCol = getOptimalTextColor(cPrimary.hex);
      const badgeTextCol = getOptimalTextColor(cAccent.hex);

      const sampleBox = document.getElementById(`card-sample-${paletteId}`);
      const badge = document.getElementById(`card-badge-${paletteId}`);
      const wcag = document.getElementById(`card-wcag-${paletteId}`);
      const heading = document.getElementById(`card-heading-${paletteId}`);
      const body = document.getElementById(`card-body-${paletteId}`);
      const btnPrimary = document.getElementById(`card-btn-primary-${paletteId}`);
      const btnSecondary = document.getElementById(`card-btn-secondary-${paletteId}`);

      if (sampleBox) {
        sampleBox.style.backgroundColor = cBg.hex;
        sampleBox.style.borderColor = `${cSecondary.hex}70`;
      }
      if (badge) {
        badge.textContent = currentLang === 'en' ? cAccent.nameEn : cAccent.nameFa;
        badge.style.backgroundColor = cAccent.hex;
        badge.style.color = badgeTextCol;
        badge.style.borderColor = cSecondary.hex;
      }
      if (wcag) {
        wcag.textContent = badgeInfo.text;
        wcag.className = `text-[9px] font-mono px-1.5 py-0.5 rounded border ${badgeInfo.badgeClass}`;
      }
      if (heading) {
        heading.style.color = cHeading.hex;
      }
      if (body) {
        body.style.color = cHeading.hex;
      }
      if (btnPrimary) {
        btnPrimary.style.backgroundColor = cPrimary.hex;
        btnPrimary.style.color = primaryTextCol;
        btnPrimary.textContent = `${UI_STRINGS[currentLang].copyAction} ${cPrimary.hex}`;
        btnPrimary.setAttribute('onclick', `copyColorHex('${cPrimary.hex}', '${currentLang === 'en' ? cPrimary.nameEn : cPrimary.nameFa}')`);
      }
      if (btnSecondary) {
        btnSecondary.style.borderColor = cSecondary.hex;
        btnSecondary.style.color = cHeading.hex;
      }
    }

    // 3D Tilt & Holographic Sheen Mechanics
    function initCard3DTilt() {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach(card => {
        if (card.dataset.tiltInitialized) return;
        card.dataset.tiltInitialized = "true";

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -6.5;
          const rotateY = ((x - centerX) / centerX) * 6.5;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
      });
    }

    function getCategoryName(catKey) {
      const match = CATEGORIES.find(c => c.id === catKey);
      if (!match) return catKey;
      return currentLang === 'en' ? (match.labelEn || match.label) : match.label;
    }

    async function copyColorHex(hex, name) { try {
      await copyTextToClipboard(hex);
      playHarmonicTone(7);
      const isEn = currentLang === 'en';
      showToast(isEn ? `Copied: ${hex}` : `کپی شد: ${hex}`, isEn ? `${name} saved to clipboard.` : `${name} در کلیپ‌بورد ذخیره شد.`);
    } catch(error) { /* Clipboard helper already explains recovery. */ } }

    async function copyTextToClipboard(text) {
 const previous=document.activeElement;
 const isEn = currentLang === 'en';
 try {
  if(navigator.clipboard&&window.isSecureContext) {await navigator.clipboard.writeText(text);return true;}
  const area=document.createElement('textarea');area.value=text;area.style.cssText='position:fixed;opacity:0;width:1px;height:1px';
  const host=[...document.querySelectorAll('[role="dialog"]:not(.hidden)')].at(-1)||document.body;
  host.appendChild(area);area.focus();area.select();
  const copied=document.execCommand('copy');area.remove();previous?.focus();
  if(!copied) throw new Error('Clipboard unavailable');return true;
 } catch(error) {showToast(isEn ? 'Copy Failed' : 'کپی انجام نشد', isEn ? 'Please copy text manually.' : 'متن خروجی را به‌صورت دستی کپی کنید.');throw error;}
}

    let toastTimeout;
    function showToast(title, desc = '') {
      const toast = document.getElementById('toast');
      const toastTitle = document.getElementById('toastTitle');
      const toastDesc = document.getElementById('toastDesc');

      toastTitle.textContent = title;
      toastDesc.textContent = desc;

      toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
      toast.classList.add('translate-y-0', 'opacity-100');

      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
        toast.classList.remove('translate-y-0', 'opacity-100');
      }, 2600);
    }

    // Studio & Fullscreen Drawer Management
    function togglePreviewDrawer() {
      const drawer = document.getElementById('previewDrawer');
      drawer.classList.toggle('hidden');
      drawer.classList.toggle('flex');
      if (!drawer.classList.contains('hidden')) {
        resizeThreeCanvas();
      }
    }

    function closePreviewDrawer() {
      const drawer = document.getElementById('previewDrawer');
      if (drawer) {
        drawer.classList.add('hidden');
        drawer.classList.remove('flex');
      }
    }

    function applyAndShowStudio(paletteId) {
      const palette = PERSIAN_PALETTES.find(p => p.id === paletteId);
      if (!palette) return;
      applyPaletteToStudio(palette);
      const drawer = document.getElementById('previewDrawer');
      drawer.classList.remove('hidden');
      drawer.classList.add('flex');
      resizeThreeCanvas();
    }

    function applyPaletteToStudio(palette) {
      activePreviewPalette = palette;
      document.getElementById('previewPaletteTitle').textContent = currentLang === 'en' ? palette.nameEn : palette.nameFa;
      studioRoleMapping = getCalibratedRoles(palette, 'dark');
      renderStudioMockup();
      updateThreeJsPalette(palette);
    }

    function smartShuffleStudioRoles() {
      if (!activePreviewPalette) return;
      const mode = document.getElementById('studioShuffleModeSelect').value;
      studioRoleMapping = getCalibratedRoles(activePreviewPalette, mode);
      playHarmonicTone(5);
      renderStudioMockup();
      updateThreeJsPalette(activePreviewPalette);
      const isEn = currentLang === 'en';
      const modeName = mode === 'dark' ? (isEn ? 'Dark Luxury AAA' : 'لوکس تیره') : mode === 'light' ? (isEn ? 'Editorial Light AAA' : 'کاغذی روشن') : (isEn ? 'Max Contrast AA+' : 'کنتراست ماکزیمم');
      showToast(isEn ? "Studio Shuffled" : "استودیو شافل شد", isEn ? `Arrangement calibrated to ${modeName}.` : `چیدمان بر مبنای استاندارد ${modeName} اعمال گردید.`);
    }

    function resetStudioRoles() {
      if (!activePreviewPalette) return;
      studioRoleMapping = getCalibratedRoles(activePreviewPalette, 'dark');
      playHarmonicTone(0);
      renderStudioMockup();
      updateThreeJsPalette(activePreviewPalette);
      const isEn = currentLang === 'en';
      showToast(isEn ? "Studio Reset" : "بازنشانی استودیو", isEn ? "Roles returned to standard dark luxury." : "نقش‌ها به حالت لوکس استاندارد بازگشت.");
    }

    function changeStudioTemplate(template) {
      activeStudioTemplate = template;
      renderStudioMockup();
      playHarmonicTone(1);
    }

    function renderStudioMockup() {
      if (!activePreviewPalette) return;
      const isEn = currentLang === 'en';
      const c = activePreviewPalette.colors;
      const r = studioRoleMapping;
      const cBg = c[r.bg];
      const cHeading = c[r.heading];
      const cPrimary = c[r.primary];
      const cSecondary = c[r.secondary];
      const cAccent = c[r.accent];

      const ratio = getContrastRatio(cBg.hex, cHeading.hex);
      const badgeInfo = getWCAGBadgeInfo(ratio);
      const primaryTextCol = getOptimalTextColor(cPrimary.hex);
      const badgeTextCol = getOptimalTextColor(cAccent.hex);

      const mockupCard = document.getElementById('mockupCard');
      mockupCard.style.backgroundColor = cBg.hex;
      mockupCard.style.borderColor = `${cSecondary.hex}70`;

      if (activeStudioTemplate === 'product') {
        mockupCard.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-3 py-1 rounded-full border transition-colors" style="background-color: ${cAccent.hex}; color: ${badgeTextCol}; border-color: ${cSecondary.hex};">
                ${currentLang === "en" ? cAccent.nameEn : cAccent.nameFa}
              </span>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded border ${badgeInfo.badgeClass}">
                  ${badgeInfo.text}
                </span>
                <span class="text-xs opacity-75" style="color: ${cHeading.hex};">${currentLang === "en" ? "Inspirational Heritage" : "میراث الهام‌بخش"}</span>
              </div>
            </div>

            <h4 class="text-xl sm:text-2xl font-black mb-3 leading-tight" style="color: ${cHeading.hex};">
              ${currentLang === "en" ? `Authentic Experience of ${activePreviewPalette.nameEn}` : `تجربه اصالت هنر ${activePreviewPalette.nameFa}`}
            </h4>
            <p class="text-xs sm:text-sm leading-relaxed mb-6 opacity-90" style="color: ${cHeading.hex};">
              ${currentLang === "en" ? (PALETTE_DESCRIPTIONS_EN[activePreviewPalette.id] || activePreviewPalette.nameEn) + " This composition is calibrated for empirical surface contrast testing." : activePreviewPalette.description + " این ترکیب با هدف ارزیابی تجربی کنتراست سطوح محاسبه شده است."}
            </p>
          </div>

          <div class="flex flex-wrap gap-3 items-center pt-2">
            <button 
              onclick="copyColorHex('${cPrimary.hex}', '${currentLang === "en" ? cPrimary.nameEn : cPrimary.nameFa}')" 
              class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition hover:scale-105 active:scale-95" 
              style="background-color: ${cPrimary.hex}; color: ${primaryTextCol};"
            >
              ${currentLang === "en" ? "Copy Primary Action (" + cPrimary.hex + ")" : "کپی اکشن اصلی (" + cPrimary.hex + ")"}
            </button>
            <button 
              onclick="smartShuffleStudioRoles()" 
              class="px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm border transition hover:opacity-80" 
              style="border-color: ${cSecondary.hex}; color: ${cHeading.hex};"
            >
              ${currentLang === "en" ? "Shuffle Roles" : "شافل نقش‌ها"}
            </button>
            <div class="px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 border" style="background-color: ${cAccent.hex}20; border-color: ${cAccent.hex}60; color: ${cHeading.hex};">
              <i class="fa-solid fa-gem"></i>
              <span>${currentLang === "en" ? cAccent.nameEn : cAccent.nameFa}</span>
            </div>
          </div>
        `;
      } else if (activeStudioTemplate === 'hud') {
        mockupCard.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-3 py-1 rounded-full border" style="background-color: ${cAccent.hex}; color: ${badgeTextCol}; border-color: ${cSecondary.hex};">
                ${currentLang === "en" ? "Color Telemetry Dashboard" : "داشبورد تلمتری رنگ"}
              </span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded border ${badgeInfo.badgeClass}">
                ${badgeInfo.text}
              </span>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-4">
              <div class="p-3 rounded-xl border" style="background-color: ${cSecondary.hex}25; border-color: ${cSecondary.hex}60;">
                <div class="text-[10px] opacity-75" style="color: ${cHeading.hex};">${currentLang === "en" ? "Background Luminance" : "لومینانس زمینه"}</div>
                <div class="text-lg font-mono font-bold" style="color: ${cHeading.hex};">${getLuminance(cBg.hex).toFixed(3)}</div>
              </div>
              <div class="p-3 rounded-xl border" style="background-color: ${cSecondary.hex}25; border-color: ${cSecondary.hex}60;">
                <div class="text-[10px] opacity-75" style="color: ${cHeading.hex};">${currentLang === "en" ? "Text Contrast Ratio" : "نسبت کنتراست متن"}</div>
                <div class="text-lg font-mono font-bold" style="color: ${cHeading.hex};">${ratio.toFixed(2)}:1</div>
              </div>
            </div>

            <h5 class="text-sm font-bold mb-2" style="color: ${cHeading.hex};">${currentLang === "en" ? "Surface & Text Contrast Evaluation" : "ارزیابی کنتراست رنگ متن و زمینه"}</h5>
            <p class="text-xs opacity-90 leading-relaxed mb-4" style="color: ${cHeading.hex};">
              ${currentLang === "en" ? "Reported ratios are calculated for selected foreground and background tokens. Font sizes, weights, and APCA readability require independent verification." : "نسبت نشان‌داده‌شده برای رنگ متن و زمینهٔ انتخابی محاسبه می‌شود. اندازهٔ متن، فونت و سایر الزامات دسترسی‌پذیری به ارزیابی جداگانه نیاز دارند."}
            </p>
          </div>

          <div class="flex items-center gap-3">
            <button class="px-4 py-2 rounded-xl text-xs font-bold shadow-md" style="background-color: ${cPrimary.hex}; color: ${primaryTextCol};">
              ${currentLang === "en" ? "Export Report" : "خروجی گزارش"}
            </button>
            <button onclick="openContrastMatrixForActive()" class="px-3.5 py-2 rounded-xl text-xs border" style="border-color: ${cSecondary.hex}; color: ${cHeading.hex};">
              ${currentLang === "en" ? "Full Matrix" : "ماتریس کامل"}
            </button>
          </div>
        `;
      } else if (activeStudioTemplate === 'hero') {
        mockupCard.innerHTML = `
          <div class="py-2">
            <span class="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-md mb-3 inline-block" style="background-color: ${cAccent.hex}; color: ${badgeTextCol};">
              HERO CTA SECTION
            </span>
            <h3 class="text-2xl sm:text-3xl font-black mb-3 leading-tight" style="color: ${cHeading.hex};">
              ${currentLang === "en" ? "Timeless Visual Identity Through Heritage Colors" : "هویت بصری بی‌بدیل با شکوه رنگ‌های پارسی"}
            </h3>
            <p class="text-xs sm:text-sm leading-relaxed mb-6 opacity-90 max-w-xl" style="color: ${cHeading.hex};">
              ${currentLang === "en" ? `Harmonic synthesis of ${cPrimary.nameEn} and ${cSecondary.nameEn} in the UI architecture delivers distinction, cultural prestige, and modern luxury.` : `ترکیب هارمونیک ${cPrimary.nameFa} و ${cSecondary.nameFa} در ساختار رابط کاربری، حسی از تمایز، اصالت فرهنگی و معماری لوکس مدرن خلق می‌کند.`}
            </p>
            <div class="flex flex-wrap gap-3">
              <button class="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition hover:scale-105" style="background-color: ${cPrimary.hex}; color: ${primaryTextCol};">
                ${currentLang === "en" ? "Launch Experience" : "شروع تجربه کاربری"}
              </button>
              <button class="px-4 py-2.5 rounded-xl text-xs font-medium border" style="border-color: ${cSecondary.hex}; color: ${cHeading.hex};">
                ${currentLang === "en" ? "Inspect Specs" : "مشاهده مشخصات"}
              </button>
            </div>
          </div>
        `;
      } else if (activeStudioTemplate === 'form') {
        mockupCard.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold" style="color: ${cHeading.hex};">${currentLang === "en" ? "Smart Input & Authentication Form" : "فرم ورودی و احراز هویت هوشمند"}</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded border ${badgeInfo.badgeClass}">${badgeInfo.text}</span>
            </div>
            
            <div class="space-y-3 mb-5">
              <div>
                <label class="block text-[11px] mb-1 font-medium" style="color: ${cHeading.hex};">${currentLang === "en" ? "Project Title" : "نام و نشان پروژه"}</label>
                <div class="p-2.5 rounded-xl border text-xs" style="background-color: ${cBg.hex}; border-color: ${cSecondary.hex}; color: ${cHeading.hex};">
                  ${currentLang === "en" ? "Safavid Brand Identity Project" : "پروژه طراحی برندینگ صفوی"}
                </div>
              </div>
              <div>
                <label class="block text-[11px] mb-1 font-medium" style="color: ${cHeading.hex};">${currentLang === "en" ? "Strategic Role Selection" : "انتخاب نقش استراتژیک"}</label>
                <div class="p-2.5 rounded-xl border text-xs flex justify-between items-center" style="background-color: ${cBg.hex}; border-color: ${cSecondary.hex}; color: ${cHeading.hex};">
                  <span>${currentLang === "en" ? cPrimary.nameEn : cPrimary.nameFa} (${cPrimary.hex})</span>
                  <i class="fa-solid fa-chevron-down text-[10px]"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-end gap-2">
            <button class="px-4 py-2 rounded-xl text-xs border" style="border-color: ${cSecondary.hex}; color: ${cHeading.hex};">${currentLang === "en" ? "Cancel" : "انصراف"}</button>
            <button class="px-5 py-2 rounded-xl text-xs font-bold shadow-md" style="background-color: ${cPrimary.hex}; color: ${primaryTextCol};">${currentLang === "en" ? "Save Changes" : "ثبت تغییرات"}</button>
          </div>
        `;
      }

      // Update 60-30-10 Proportion Bar Colors
      document.getElementById('prop-dominant').style.backgroundColor = cBg.hex;
      document.getElementById('prop-secondary').style.backgroundColor = cSecondary.hex;
      document.getElementById('prop-accent').style.backgroundColor = cPrimary.hex;

      // Update Swatches Bar
      const swatchesBar = document.getElementById('mockupSwatchesBar');
      swatchesBar.innerHTML = c.map((col, idx) => {
        const isSelectedPrimary = idx === r.primary;
        const colName = isEn ? col.nameEn : col.nameFa;
        return `
          <div 
            onclick="setStudioPrimaryColorIndex(${idx})" 
            class="text-center p-2 rounded-xl border cursor-pointer transition hover:scale-105 ${
              isSelectedPrimary ? 'border-amber-400 bg-amber-400/10 ring-1 ring-amber-400' : 'border-slate-800 bg-slate-950'
            }"
            title="${isEn ? 'Click to select as primary CTA button color' : 'برای انتخاب به عنوان رنگ دکمه اصلی کلیک کنید'}"
          >
            <div class="h-6 w-full rounded-lg mb-1.5 shadow-sm relative" style="background-color: ${col.hex};">
              ${isSelectedPrimary ? '<span class="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold drop-shadow"><i class="fa-solid fa-check"></i></span>' : ''}
            </div>
            <div class="text-[10px] text-slate-300 truncate font-medium">${colName}</div>
            <div class="text-[9px] font-mono text-slate-500">${col.hex}</div>
          </div>
        `;
      }).join('');

      // Update Active Role Breakdown Pills
      const roleTagsContainer = document.getElementById('activeRoleTags');
      const bgName = isEn ? cBg.nameEn : cBg.nameFa;
      const priName = isEn ? cPrimary.nameEn : cPrimary.nameFa;
      const headName = isEn ? cHeading.nameEn : cHeading.nameFa;
      roleTagsContainer.innerHTML = `
        <div class="p-1.5 rounded bg-slate-900 border border-slate-800"><span class="text-slate-500">${isEn ? 'Surface:' : 'پس‌زمینه:'}</span> <span class="text-amber-300">${bgName}</span></div>
        <div class="p-1.5 rounded bg-slate-900 border border-slate-800"><span class="text-slate-500">${isEn ? 'Primary CTA:' : 'اکشن اصلی:'}</span> <span class="text-cyan-300">${priName}</span></div>
        <div class="p-1.5 rounded bg-slate-900 border border-slate-800"><span class="text-slate-500">${isEn ? 'Heading:' : 'عنوان متن:'}</span> <span class="text-emerald-300">${headName}</span></div>
      `;
    }

    function setStudioPrimaryColorIndex(idx) {
      studioRoleMapping.primary = idx;
      playHarmonicTone(6);
      renderStudioMockup();
      updateThreeJsPalette(activePreviewPalette);
    }

    function applyVisionFilter(filterMode) {
      const mockup = document.getElementById('mockupCard');
      mockup.classList.remove('filter-protanopia', 'filter-deuteranopia', 'filter-tritanopia', 'filter-achromatopsia');
      if (filterMode !== 'normal') {
        mockup.classList.add(`filter-${filterMode}`);
        showToast("فیلتر بینایی اعمال شد", `شبیه‌سازی دید ${filterMode} فعال گردید.`);
      } else {
        showToast("دید عادی", "حالت نمایش به دید استاندارد بازگشت.");
      }
      playHarmonicTone(3);
    }

    async function copyCurrentShuffleCSS() { try {
      if (!activePreviewPalette) return;
      const c = activePreviewPalette.colors;
      const r = studioRoleMapping;
      const css = `/* Neu-Persian Design Tokens - ${activePreviewPalette.nameEn} */\n` +
                  `:root {\n` +
                  `  --persian-surface: ${c[r.bg].hex}; /* ${c[r.bg].nameFa} */\n` +
                  `  --persian-heading: ${c[r.heading].hex}; /* ${c[r.heading].nameFa} */\n` +
                  `  --persian-primary-cta: ${c[r.primary].hex}; /* ${c[r.primary].nameFa} */\n` +
                  `  --persian-secondary: ${c[r.secondary].hex}; /* ${c[r.secondary].nameFa} */\n` +
                  `  --persian-accent: ${c[r.accent].hex}; /* ${c[r.accent].nameFa} */\n` +
                  `  --persian-wcag-ratio: '${getContrastRatio(c[r.bg].hex, c[r.heading].hex).toFixed(2)}:1';\n` +
                  `}`;
      await copyTextToClipboard(css);
      playHarmonicTone(8);
      showToast("متغیرهای CSS تم کپی شدند!", "کدهای دیزاین توکن اختصاصی در کلیپ‌بورد ذخیره شدند.");
    } catch(error) { /* Clipboard helper already explains recovery. */ } }

    // 6x6 Contrast Matrix Modal Management
    
    // ==========================================
    // SCIENTIFIC INSPECTOR MODAL CONTROLLERS
    // ==========================================
    function openScientificModal(paletteId) {
      const palette = PERSIAN_PALETTES.find(p => p.id === paletteId);
      if (!palette) return;

      activeScientificPalette = palette;
      activeScientificColorIdx = 0;

      const isEn = currentLang === 'en';
      document.getElementById('scientificModalTitle').textContent = isEn
        ? `Color Science Dossier & Tonal Palette: ${palette.nameEn}`
        : `دیدبان علمی و پالت تنال: ${palette.nameFa} (${palette.nameEn})`;
      
      // Render color selector pills
      const pillsContainer = document.getElementById('sciColorPills');
      pillsContainer.innerHTML = palette.colors.map((c, idx) => `
        <button 
          onclick="selectScientificColorIndex(${idx})" 
          class="px-3 py-1.5 rounded-xl text-xs font-mono font-medium border flex items-center gap-2 transition apple-spring-fast ${idx === activeScientificColorIdx ? 'ring-2 ring-white border-white' : 'border-slate-800'}"
          style="background-color: ${c.hex}; color: ${getOptimalTextColor(c.hex)};"
        >
          <span class="w-2 h-2 rounded-full ${idx === activeScientificColorIdx ? 'bg-white' : 'bg-black/40'}"></span>
          <span>${isEn ? c.nameEn : c.nameFa} (${c.hex})</span>
        </button>
      `).join('');

      // Render Tonal Scales
      renderScientificTonalScales();
      
      // Update Surface Tint dynamically
      updateDynamicSurfaceTint(palette.colors[0].hex);

      // Show Modal
      const modal = document.getElementById('scientificModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      playHarmonicTone(4);

      // If active tab is radar or harmony, draw them
      if (currentScientificTab === 'radar') {
        drawOklabRadar();
      } else if (currentScientificTab === 'harmony') {
        drawHarmonyWheel();
      } else if (currentScientificTab === 'tokens') {
        renderDualSemanticTokens();
      }
    }

    function openScientificModalForActive() {
      openScientificModal(activePreviewPalette ? activePreviewPalette.id : PERSIAN_PALETTES[0].id);
    }

    function closeScientificModal() {
      const modal = document.getElementById('scientificModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      if (radarAnimFrame) {
        cancelAnimationFrame(radarAnimFrame);
        radarAnimFrame = null;
      }
      playHarmonicTone(1);
    }

    function selectScientificColorIndex(idx) {
      activeScientificColorIdx = idx;
      // Re-render color pills
      const pillsContainer = document.getElementById('sciColorPills');
      const palette = activeScientificPalette;
      const isEn = currentLang === 'en';
      pillsContainer.innerHTML = palette.colors.map((c, i) => `
        <button 
          onclick="selectScientificColorIndex(${i})" 
          class="px-3 py-1.5 rounded-xl text-xs font-mono font-medium border flex items-center gap-2 transition apple-spring-fast ${i === activeScientificColorIdx ? 'ring-2 ring-white border-white scale-105' : 'border-slate-800 opacity-75'}"
          style="background-color: ${c.hex}; color: ${getOptimalTextColor(c.hex)};"
        >
          <span class="w-2 h-2 rounded-full ${i === activeScientificColorIdx ? 'bg-white' : 'bg-black/40'}"></span>
          <span>${isEn ? c.nameEn : c.nameFa} (${c.hex})</span>
        </button>
      `).join('');

      renderScientificTonalScales();
      updateDynamicSurfaceTint(palette.colors[idx].hex);
      playHarmonicTone(idx + 1);
    }

    function switchScientificTab(tab) {
      currentScientificTab = tab;
      const tabs = ['tonal', 'radar', 'harmony', 'tokens'];
      tabs.forEach(t => {
        const btn = document.getElementById(`scitab-${t}`);
        const panel = document.getElementById(`scipanel-${t}`);
        if (t === tab) {
          btn.className = "px-4 py-2.5 rounded-t-xl font-bold flex items-center gap-2 border-b-2 border-amber-400 text-amber-300 bg-white/5 transition";
          panel.classList.remove('hidden');
        } else {
          btn.className = "px-4 py-2.5 rounded-t-xl font-medium flex items-center gap-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition";
          panel.classList.add('hidden');
        }
      });

      if (tab === 'radar') {
        drawOklabRadar();
      } else if (tab === 'harmony') {
        drawHarmonyWheel();
      } else if (tab === 'tokens') {
        renderDualSemanticTokens();
      }
      playHarmonicTone(3);
    }

    function renderScientificTonalScales() {
      if (!activeScientificPalette) return;
      const keyColor = activeScientificPalette.colors[activeScientificColorIdx];
      const tones = generateM3Tones(keyColor.hex);
      const isEn = currentLang === 'en';
      const cName = isEn ? keyColor.nameEn : keyColor.nameFa;

      const container = document.getElementById('m3TonesContainer');
      container.innerHTML = tones.map(t => {
        const optText = getOptimalTextColor(t.hex);
        const titleText = isEn ? `Click to copy Tone ${t.tone} (${t.hex})` : `کلیک برای کپی Tone ${t.tone} (${t.hex})`;
        return `
          <div 
            onclick="copyColorHex('${t.hex}', '${cName} Tone ${t.tone}')"
            class="rounded-xl p-2.5 flex flex-col justify-between h-24 border border-white/10 shadow-sm cursor-pointer group transition hover:scale-105 active:scale-95 apple-spring-fast"
            style="background-color: ${t.hex}; color: ${optText};"
            title="${titleText}"
          >
            <div class="flex items-center justify-between text-[10px] font-bold">
              <span>T-${t.tone}</span>
              <span class="opacity-0 group-hover:opacity-100 transition"><i class="fa-regular fa-copy"></i></span>
            </div>
            <div class="text-center font-mono font-bold text-[10px] tracking-tight">
              ${t.hex}
            </div>
            <div class="text-[9px] opacity-80 text-center font-sans">
              L: ${t.L}%
            </div>
          </div>
        `;
      }).join('');
    }

    async function copyAllTones(format) { try {
      if (!activeScientificPalette) return;
      const keyColor = activeScientificPalette.colors[activeScientificColorIdx];
      const tones = generateM3Tones(keyColor.hex);

      let text = "";
      if (format === 'json') {
        const obj = {
          palette: activeScientificPalette.nameEn,
          color: keyColor.nameEn,
          keyHex: keyColor.hex,
          m3Tones: {}
        };
        tones.forEach(t => obj.m3Tones[`tone_${t.tone}`] = t.hex);
        text = JSON.stringify(obj, null, 2);
      } else {
        const isEn = currentLang === 'en';
        text = `/* Material 3 ${isEn ? 'Light' : 'روشن'} Tones for ${isEn ? keyColor.nameEn : keyColor.nameFa} (${keyColor.hex}) */
:root {
`;
        tones.forEach(t => {
          text += `  --md-sys-color-${activeScientificPalette.id}-${activeScientificColorIdx + 1}-tone-${t.tone}: ${t.hex};
`;
        });
        text += `}`;
      }

      await copyTextToClipboard(text);
      playHarmonicTone(7);
      const isEn = currentLang === 'en';
      showToast(
        isEn ? "13 Tonal Steps Copied!" : "۱۳ پله تنال کپی شد!",
        isEn ? `${format.toUpperCase()} tokens saved to clipboard.` : `کدهای ${format.toUpperCase()} در کلیپ‌بورد ذخیره شدند.`
      );
    } catch(error) { /* Clipboard helper already explains recovery. */ } }

    // HTML5 Canvas: Oklab Chromaticity & Gamut Radar Scope
    function drawOklabRadar() {
      const canvas = document.getElementById('oklabRadarCanvas');
      if (!canvas || !activeScientificPalette) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const maxRadius = w * 0.42;

      function renderFrame() {
        ctx.clearRect(0, 0, w, h);

        // Background circles
        ctx.fillStyle = '#060913';
        ctx.fillRect(0, 0, w, h);

        // Concentric Chroma Rings
        const rings = [0.2, 0.4, 0.6, 0.8, 1.0];
        rings.forEach(rFrac => {
          ctx.beginPath();
          ctx.arc(cx, cy, maxRadius * rFrac, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1;
          ctx.setLineDash([2, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        });

        // Axes (a and b in Oklab)
        ctx.beginPath();
        ctx.moveTo(cx - maxRadius, cy);
        ctx.lineTo(cx + maxRadius, cy);
        ctx.moveTo(cx, cy - maxRadius);
        ctx.lineTo(cx, cy + maxRadius);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Axis Labels
        const isEn = currentLang === 'en';
        ctx.fillStyle = 'rgba(6, 182, 212, 0.7)';
        ctx.font = '9px monospace';
        ctx.fillText(isEn ? '+a (Red)' : '+a (سرخ)', cx + maxRadius - 38, cy - 6);
        ctx.fillText(isEn ? '-a (Green)' : '-a (سبز)', cx - maxRadius + 6, cy - 6);
        ctx.fillText(isEn ? '+b (Yellow)' : '+b (زرد)', cx + 6, cy - maxRadius + 14);
        ctx.fillText(isEn ? '-b (Blue)' : '-b (آبی)', cx + 6, cy + maxRadius - 6);

        // Rotating Radar Sweep Line
        radarAngle += 0.02;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(radarAngle);
        const grad = ctx.createLinearGradient(0, 0, maxRadius, 0);
        grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        grad.addColorStop(1, 'rgba(6, 182, 212, 0.35)');
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, maxRadius, 0, 0.3);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();

        // Plot Palette Colors as Nodes
        const nodes = activeScientificPalette.colors.map(c => {
          const rgb = hexToRgb(c.hex);
          const lab = rgbToOklab(rgb.r, rgb.g, rgb.b);
          // Scale a and b to canvas coordinates (a, b roughly in [-0.25, 0.25])
          const scale = maxRadius / 0.28;
          const px = cx + lab.a * scale;
          const py = cy - lab.b * scale; // invert y for visual harmony (+b is up)
          return { ...c, px, py, lab };
        });

        // Draw Constellation Polygon between colors
        ctx.beginPath();
        nodes.forEach((n, idx) => {
          if (idx === 0) ctx.moveTo(n.px, n.py);
          else ctx.lineTo(n.px, n.py);
        });
        ctx.closePath();
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = 'rgba(212, 175, 55, 0.06)';
        ctx.fill();

        // Draw Nodes
        nodes.forEach((n, idx) => {
          // Glow
          ctx.beginPath();
          ctx.arc(n.px, n.py, 8, 0, Math.PI * 2);
          ctx.fillStyle = `${n.hex}40`;
          ctx.fill();

          // Circle
          ctx.beginPath();
          ctx.arc(n.px, n.py, 5, 0, Math.PI * 2);
          ctx.fillStyle = n.hex;
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 1.5;
          ctx.fill();
          ctx.stroke();

          // Text label
          ctx.fillStyle = '#FFFFFF';
          ctx.font = isEn ? '10px sans-serif' : '10px Vazirmatn, sans-serif';
          ctx.fillText(`${idx + 1}. ${isEn ? n.nameEn : n.nameFa}`, n.px + 8, n.py - 4);
        });
      }

      function loop() {
        renderFrame();
        if(!reducedMotion.matches&&!document.hidden) radarAnimFrame=requestAnimationFrame(loop);
      }

      if (radarAnimFrame) cancelAnimationFrame(radarAnimFrame);
      loop();

      // Render Delta E Perceptual Distance Table
      const deltaTable = document.getElementById('deltaETable');
      const colors = activeScientificPalette.colors;
      const isEn = currentLang === 'en';
      let dHtml = "";
      for (let i = 0; i < colors.length; i++) {
        const nextIdx = (i + 1) % colors.length;
        const c1 = colors[i];
        const c2 = colors[nextIdx];
        const dE = calculateDeltaEOk(c1.hex, c2.hex);
        
        let rating = "";
        let barCol = "";
        if (dE >= 0.25) {
          rating = isEn ? "Exceptional Distinction" : "کنتراست و تفکیک فوق‌العاده";
          barCol = "bg-emerald-400";
        } else if (dE >= 0.15) {
          rating = isEn ? "High Perceptual Contrast" : "تمایز ادراکی بالا";
          barCol = "bg-cyan-400";
        } else if (dE >= 0.08) {
          rating = isEn ? "Analogous Harmony" : "هارمونی هم‌خانواده";
          barCol = "bg-amber-400";
        } else {
          rating = isEn ? "Subtle Nuance" : "تغییر پیوسته و لطیف";
          barCol = "bg-rose-400";
        }

        dHtml += `
          <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-full border border-white/20" style="background-color: ${c1.hex};"></span>
              <span class="text-slate-300 font-medium">${isEn ? c1.nameEn : c1.nameFa}</span>
              <i class="fa-solid fa-arrows-left-right text-[10px] text-slate-500"></i>
              <span class="w-3.5 h-3.5 rounded-full border border-white/20" style="background-color: ${c2.hex};"></span>
              <span class="text-slate-300 font-medium">${isEn ? c2.nameEn : c2.nameFa}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-cyan-300 font-bold">ΔE: ${dE.toFixed(3)}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">${rating}</span>
            </div>
          </div>
        `;
      }
      deltaTable.innerHTML = dHtml;
    }

    // HTML5 Canvas: 360-degree Color Harmony Wheel
    function drawHarmonyWheel() {
      const canvas = document.getElementById('harmonyWheelCanvas');
      if (!canvas || !activeScientificPalette) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const r = w * 0.4;
      const innerR = r * 0.72;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#060913';
      ctx.fillRect(0, 0, w, h);

      // Draw 360 Rainbow Ring
      for (let angle = 0; angle < 360; angle += 1) {
        const rad1 = (angle - 0.5) * Math.PI / 180;
        const rad2 = (angle + 0.5) * Math.PI / 180;
        ctx.beginPath();
        ctx.arc(cx, cy, r, rad1, rad2);
        ctx.arc(cx, cy, innerR, rad2, rad1, true);
        ctx.closePath();
        ctx.fillStyle = `hsl(${angle}, 90%, 55%)`;
        ctx.fill();
      }

      // Draw Inner Hub
      ctx.beginPath();
      ctx.arc(cx, cy, innerR - 4, 0, Math.PI * 2);
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.fill();
      ctx.stroke();

      // Plot palette colors on the hue wheel
      const colors = activeScientificPalette.colors;
      const points = colors.map(c => {
        const hue = getOklabHue(c.hex);
        const rad = hue * Math.PI / 180;
        const midR = (r + innerR) / 2;
        const px = cx + Math.cos(rad) * midR;
        const py = cy + Math.sin(rad) * midR;
        return { ...c, hue, px, py };
      });

      // Draw connecting chord lines inside hub
      ctx.beginPath();
      points.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.px, p.py);
        else ctx.lineTo(p.px, p.py);
      });
      ctx.closePath();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw markers
      points.forEach((p, idx) => {
        ctx.beginPath();
        ctx.arc(p.px, p.py, 6, 0, Math.PI * 2);
        ctx.fillStyle = p.hex;
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
      });

      // Analysis of Harmony
      const container = document.getElementById('harmonyAnalysisContainer');
      let minSpan = 360;
      let maxSpan = 0;
      const hues = points.map(p => p.hue).sort((a, b) => a - b);
      const span = hues[hues.length - 1] - hues[0];

      const isEn = currentLang === 'en';
      let harmonyType = isEn ? "Complex Multi-Hue Chord" : "ترکیب غنی و پردامنه (Complex Multi-Hue Chord)";
      if (span < 60) harmonyType = isEn ? "Analogous Palette" : "هارمونی مشابه (Analogous Palette)";
      else if (span >= 160 && span <= 200) harmonyType = isEn ? "Complementary Contrast" : "هارمونی متضاد مکمل (Complementary Contrast)";
      else if (span >= 110 && span <= 140) harmonyType = isEn ? "Triadic Chords" : "هارمونی سه‌گانه زرین (Triadic Chords)";

      const geoTitle = isEn ? `Color Geometry: ${harmonyType}` : `تشخیص هندسه رنگ: ${harmonyType}`;
      const geoDesc = isEn
        ? `This palette spans ${Math.round(span)}° of the 360° chromatic circle, balancing optical vibrancy with historical resonance.`
        : `گستره فام این پالت ${Math.round(span)} درجه از دایره رنگی ۳۶۰ درجه را پوشش می‌دهد که تعادلی بی‌نظیر بین پویایی بصری و اصالت سنتی فراهم می‌سازد.`;

      container.innerHTML = `
        <div class="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
          <div class="font-bold text-amber-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i>
            <span>${geoTitle}</span>
          </div>
          <p class="text-slate-400 font-light leading-relaxed">
            ${geoDesc}
          </p>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          ${points.map((p, i) => `
            <div class="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${p.hex};"></span>
                <span class="text-slate-200">${isEn ? p.nameEn : p.nameFa}</span>
              </div>
              <span class="font-mono text-amber-400 text-[11px]">${Math.round(p.hue)}°</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Dual Semantic Tokens Renderer (Google M3 vs Apple HIG)
    function renderDualSemanticTokens() {
 if(!activeScientificPalette) return;
 const scheme=PersianCore.generateM3DynamicScheme(activeScientificPalette.colors[activeScientificColorIdx].hex);
 const rows=(roles)=>Object.entries(roles).map(([name,hex])=>'<div class="p-2 rounded-lg bg-slate-950 flex justify-between"><span>'+name+'</span><span dir="ltr">'+hex+' <span style="display:inline-block;width:12px;height:12px;background:'+hex+'"></span></span></div>').join('');
 document.getElementById('googleM3TokensList').innerHTML=rows(scheme.light);
 document.getElementById('appleHIGTokensList').innerHTML=rows(scheme.dark);
}

    function openContrastMatrix(paletteId) {
      const palette = PERSIAN_PALETTES.find(p => p.id === paletteId);
      if (!palette) return;
      activePreviewPalette = palette;
      openContrastMatrixForActive();
    }

    function openContrastMatrixForActive() {
      if (!activePreviewPalette) return;
      const palette = activePreviewPalette;
      const isEnMat = currentLang === 'en';
      document.getElementById('matrixModalTitle').textContent = isEnMat ? `6×6 Contrast Matrix: ${palette.nameEn}` : `ماتریس کنتراست ۶×۶: ${palette.nameFa}`;
      
      const c = palette.colors;
      const table = document.getElementById('contrastMatrixTable');

      let tableHtml = `
        <thead>
          <tr>
            <th class="p-2 border border-slate-800 bg-slate-900 text-slate-400 font-mono text-[10px]">${isEnMat ? 'Background \\ Text' : 'پس‌زمینه \\ متن'}</th>
            ${c.map(col => `
              <th class="p-2 border border-slate-800 bg-slate-900">
                <div class="w-4 h-4 mx-auto rounded-full mb-1 shadow-sm border border-white/20" style="background-color: ${col.hex};"></div>
                <div class="text-[10px] text-slate-300 font-medium truncate max-w-[70px]">${isEnMat ? col.nameEn : col.nameFa}</div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
      `;

      c.forEach((bgCol, rowIdx) => {
        tableHtml += `
          <tr>
            <td class="p-2 border border-slate-800 bg-slate-900 text-right">
              <div class="flex items-center gap-1.5">
                <div class="w-3.5 h-3.5 rounded-full shadow-sm border border-white/20 flex-shrink-0" style="background-color: ${bgCol.hex};"></div>
                <span class="text-[10px] text-slate-300 font-medium truncate max-w-[80px]">${isEnMat ? bgCol.nameEn : bgCol.nameFa}</span>
              </div>
            </td>
        `;

        c.forEach((txtCol, colIdx) => {
          if (rowIdx === colIdx) {
            tableHtml += `
              <td class="p-2 border border-slate-800 bg-slate-950 text-slate-600 font-mono text-[10px]">
                ${isEnMat ? "1.0:1 (Identity)" : "۱.۰:۱ (همسان)"}
              </td>
            `;
          } else {
            const ratio = getContrastRatio(bgCol.hex, txtCol.hex);
            const badge = getWCAGBadgeInfo(ratio);
            tableHtml += `
              <td 
                onclick="applyMatrixPair(${rowIdx}, ${colIdx})"
                class="p-2 border border-slate-800 hover:scale-105 cursor-pointer transition-transform" 
                style="background-color: ${bgCol.hex};"
                title="${isEnMat ? "Click to apply pair to live preview" : "کلیک برای اعمال این جفت روی پیش‌نمایش"}"
              >
                <div class="text-[11px] font-bold font-mono" style="color: ${txtCol.hex};">
                  ${ratio.toFixed(1)}:1
                </div>
                <div class="text-[8px] font-mono px-1 rounded mt-0.5 inline-block ${badge.badgeClass}">
                  ${badge.label}
                </div>
              </td>
            `;
          }
        });

        tableHtml += `</tr>`;
      });

      tableHtml += `</tbody>`;
      table.innerHTML = tableHtml;

      const modal = document.getElementById('matrixModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      playHarmonicTone(4);
    }

    function applyMatrixPair(bgIdx, textIdx) {
      studioRoleMapping.bg = bgIdx;
      studioRoleMapping.heading = textIdx;
      studioRoleMapping.body = textIdx;
      closeMatrixModal();
      renderStudioMockup();
      updateThreeJsPalette(activePreviewPalette);
      showToast(currentLang === "en" ? "Matrix Pair Applied" : "جفت‌رنگ ماتریس اعمال شد", currentLang === "en" ? "Selected color pair loaded into studio." : "رنگ‌های انتخاب شده در استودیو بارگذاری شدند.");
      playHarmonicTone(7);
    }

    function closeMatrixModal() {
      const modal = document.getElementById('matrixModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    // Modern Gradients Studio Modal Management
    function openGradientModal(paletteId) {
      const palette = PERSIAN_PALETTES.find(p => p.id === paletteId);
      if (!palette) return;

      const isEnGrad = currentLang === 'en';
      document.getElementById('gradientModalTitle').textContent = isEnGrad ? `Modern Gradients: ${palette.nameEn}` : `استودیوی گرادیان‌های: ${palette.nameFa}`;
      const c = palette.colors;
      const gradientsList = document.getElementById('gradientsList');

      const presets = [
        {
          name: isEnGrad ? "Persian Azure Horizon (Linear Ambient)" : "افق نیلگون پارسی (Linear Ambient)",
          css: `linear-gradient(135deg, ${c[0].hex} 0%, ${c[1].hex} 50%, ${c[3].hex} 100%)`,
        },
        {
          name: isEnGrad ? "Solar Toranj Glow (Radial Glow)" : "ترنج خورشیدی (Radial Glow)",
          css: `radial-gradient(circle at 30% 30%, ${c[3].hex}, ${c[1].hex} 45%, ${c[5].hex} 90%)`,
        },
        {
          name: isEnGrad ? "Safavid Velvet Mesh (Mesh Gradient)" : "مش مخملی صفوی (Mesh Gradient)",
          css: `linear-gradient(225deg, ${c[2].hex} 0%, ${c[4].hex} 30%, ${c[0].hex} 70%, ${c[5].hex} 100%)`,
        },
        {
          name: isEnGrad ? "High-Contrast Desert Sunset (Duotone Sunset)" : "غروب کویری با کنتراست بالا (Duotone Sunset)",
          css: `linear-gradient(90deg, ${c[1].hex} 0%, ${c[2].hex} 50%, ${c[4].hex} 100%)`,
        }
      ];

      gradientsList.innerHTML = presets.map(preset => `
        <div class="rounded-xl border border-slate-800 bg-slate-900 p-3 flex flex-col justify-between">
          <div class="h-28 w-full rounded-lg mb-3 shadow-md border border-white/10" style="background: ${preset.css};"></div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-200">${preset.name}</span>
            <button 
              onclick="copyGradientCSS('${preset.css.replace(/'/g, "\\'")}')" 
              class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs flex items-center gap-1 transition"
            >
              <i class="fa-regular fa-copy"></i>
              <span>${isEnGrad ? "Copy CSS" : "کپی CSS"}</span>
            </button>
          </div>
          <div class="text-[10px] font-mono text-slate-400 p-1.5 rounded bg-black/50 truncate" dir="ltr">${preset.css}</div>
        </div>
      `).join('');

      const modal = document.getElementById('gradientModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      playHarmonicTone(4);
    }

    async function copyGradientCSS(css) { try {
      const code = `background: ${css};`;
      await copyTextToClipboard(code);
      playHarmonicTone(8);
      showToast(currentLang === "en" ? "Gradient CSS Copied!" : "گرادیان کپی شد!", code);
    } catch(error) { /* Clipboard helper already explains recovery. */ } }

    function closeGradientModal() {
      const modal = document.getElementById('gradientModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    // Export Modal Management
    function openExportAllModal() {
      activePaletteForExport = null;
      const isEn = currentLang === 'en';
      document.getElementById('exportModalTitle').textContent = isEn ? 'Full Repository Export (12 Palettes • 72 Colors)' : 'خروجی کامل مخزن (۱۲ پالت • ۷۲ رنگ)';
      updateExportCodeView();
      showExportModal();
    }

    function showExportModal() {
      const modal = document.getElementById('exportModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeExportModal() {
      const modal = document.getElementById('exportModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function switchExportTab(tab) {
      currentExportTab = tab;
      ['css', 'tailwind', 'json', 'scss', 'tokens', 'flutter', 'm3', 'apple', 'tailwind4'].forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (btn) {
          if (t === tab) {
            btn.className = "px-3.5 py-2 border-b-2 border-amber-400 text-amber-300 font-medium";
          } else {
            btn.className = "px-3.5 py-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200";
          }
        }
      });
      updateExportCodeView();
      playHarmonicTone(1);
    }

    function updateExportCodeView() {
 const p=activePaletteForExport?[activePaletteForExport]:PERSIAN_PALETTES;
 const formats={
 tokens:()=>JSON.stringify(PersianCore.exportW3CTokens(p),null,2),
 tailwind:()=> 'export default '+JSON.stringify(PersianCore.exportTailwindTheme(p),null,2),
 tailwind4:()=>PersianCore.exportTailwindV4CSS(p),
 m3:()=>PersianCore.exportMaterialKotlin(p),
 apple:()=>PersianCore.exportSwiftUI(p),
 json:()=>JSON.stringify(p,null,2),
 css:()=>':root {\n'+p.flatMap(p=>p.colors.map((c,i)=>'  --persian-'+p.id+'-'+(i+1)+': '+c.hex+';')).join('\n')+'\n}',
 scss:()=>p.flatMap(p=>p.colors.map((c,i)=>'$persian-'+p.id+'-'+(i+1)+': '+c.hex+';')).join('\n'),
 flutter:()=> "import 'package:flutter/material.dart';\n\nclass PersianColors {\n"+p.flatMap(p=>p.colors.map((c,i)=>'  static const Color '+p.id.replace(/-/g,'_')+'_'+(i+1)+' = Color(0xFF'+c.hex.slice(1)+');')).join('\n')+'\n}'
 };
 document.getElementById('exportCodeBlock').textContent=formats[currentExportTab]();
}

    async function copyExportCode() { try {
      const block = document.getElementById('exportCodeBlock');
      await copyTextToClipboard(block.textContent);
      playHarmonicTone(7);
      showToast("کدهای مخزن کپی شدند!", "کدها با موفقیت در کلیپ‌بورد ذخیره شدند.");
    } catch(error) { /* Clipboard helper already explains recovery. */ } }

    function downloadExportFile() {
 const extensions={m3:'kt',apple:'swift',tailwind4:'css',tokens:'json',tailwind:'js',flutter:'dart'};
 const blob=new Blob([document.getElementById('exportCodeBlock').textContent],{type:'text/plain;charset=utf-8'});
 const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
 a.download='persian-palettes.'+(extensions[currentExportTab]||currentExportTab);
 document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

    // Three.js 3D WebGL Showcase Implementation
    function initThreeJsShowcase() {
      const container = document.getElementById('threeJsCanvasContainer');
      const canvas = document.getElementById('threeCanvas');

      if (!container || !canvas || typeof THREE === 'undefined') return;

      const width = container.clientWidth || 300;
      const height = container.clientHeight || 240;

      threeScene = new THREE.Scene();
      threeCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      threeCamera.position.z = 4.2;

      threeRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      threeRenderer.setSize(width, height);
      threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Lighting Setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      threeScene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
      dirLight1.position.set(5, 5, 5);
      threeScene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
      dirLight2.position.set(-5, -5, -2);
      threeScene.add(dirLight2);

      createThreeGeometry(currentGeometryType);
      createThreeAstrolabeRings();
      createThreeStardustParticles();

      // Mouse Drag & Touch Orbit Handlers
      container.addEventListener('mousedown', (e) => {
        isDragging3D = true;
        prevMousePos = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener('mouseup', () => isDragging3D = false);
      window.addEventListener('mousemove', (e) => {
        if (!isDragging3D || !threeMesh) return;
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        threeMesh.rotation.y += deltaX * 0.01;
        threeMesh.rotation.x += deltaY * 0.01;
        threeRings.forEach(r => {
          r.rotation.y += deltaX * 0.007;
          r.rotation.x += deltaY * 0.007;
        });
        prevMousePos = { x: e.clientX, y: e.clientY };
      });

      container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          isDragging3D = true;
          prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      });
      window.addEventListener('touchend', () => isDragging3D = false);
      window.addEventListener('touchmove', (e) => {
        if (!isDragging3D || !threeMesh || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - prevMousePos.x;
        const deltaY = e.touches[0].clientY - prevMousePos.y;
        threeMesh.rotation.y += deltaX * 0.01;
        threeMesh.rotation.x += deltaY * 0.01;
        threeRings.forEach(r => {
          r.rotation.y += deltaX * 0.007;
          r.rotation.x += deltaY * 0.007;
        });
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      });

      function animateThree() {
        threeAnimationFrame=requestAnimationFrame(animateThree);
        if(document.hidden) return;
        if (threeAutoRotate && !reducedMotion.matches && !isDragging3D && threeMesh) {
          threeMesh.rotation.y += 0.006;
          threeMesh.rotation.x += 0.003;
          if (threeRings[0]) threeRings[0].rotation.y -= 0.004;
          if (threeRings[1]) threeRings[1].rotation.x += 0.005;
          if (threeParticles) threeParticles.rotation.y += 0.001;
        }
        threeRenderer.render(threeScene, threeCamera);
      }
      animateThree();
    }

    function createThreeGeometry(type) {
      if (threeMesh) {threeScene.remove(threeMesh);threeMesh.geometry.dispose();threeMesh.material.dispose();}
      let geom;
      if (type === 'dodecahedron') {
        geom = new THREE.DodecahedronGeometry(1.2, 1);
      } else if (type === 'octahedron') {
        geom = new THREE.OctahedronGeometry(1.3, 0);
      } else if (type === 'icosahedron') {
        geom = new THREE.IcosahedronGeometry(1.25, 2);
      } else if (type === 'torusKnot') {
        geom = new THREE.TorusKnotGeometry(0.8, 0.28, 64, 16);
      }

      const primaryColor = activePreviewPalette ? activePreviewPalette.colors[studioRoleMapping.primary].hex : '#00A896';
      
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(primaryColor),
        metalness: 0.2,
        roughness: 0.12,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        transparent: true,
        opacity: 0.92,
        wireframe: false
      });

      threeMesh = new THREE.Mesh(geom, mat);
      threeScene.add(threeMesh);
    }

    function createThreeAstrolabeRings() {
      threeRings.forEach(r => threeScene.remove(r));
      threeRings = [];

      const goldColor = activePreviewPalette ? activePreviewPalette.colors[3].hex : '#D4AF37';

      const ringGeom1 = new THREE.TorusGeometry(1.65, 0.02, 16, 100);
      const ringMat1 = new THREE.MeshStandardMaterial({ color: new THREE.Color(goldColor), metalness: 0.8, roughness: 0.2 });
      const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
      ring1.rotation.x = Math.PI / 4;
      threeScene.add(ring1);
      threeRings.push(ring1);

      const ringGeom2 = new THREE.TorusGeometry(1.85, 0.015, 16, 100);
      const ringMat2 = new THREE.MeshStandardMaterial({ color: new THREE.Color(goldColor), metalness: 0.9, roughness: 0.25 });
      const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
      ring2.rotation.y = Math.PI / 3;
      threeScene.add(ring2);
      threeRings.push(ring2);
    }

    function createThreeStardustParticles() {
      const particleCount = 200;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 8;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 8;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: 0xffe082,
        size: 0.05,
        transparent: true,
        opacity: 0.75
      });

      threeParticles = new THREE.Points(geometry, material);
      threeScene.add(threeParticles);
    }

    function toggleThreeAutoRotate() {
      threeAutoRotate = !threeAutoRotate;
      const btn = document.getElementById('threeRotateBtn');
      btn.innerHTML = threeAutoRotate ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
      playHarmonicTone(2);
    }

    function toggleThreeWireframe() {
      if (!threeMesh) return;
      threeMesh.material.wireframe = !threeMesh.material.wireframe;
      playHarmonicTone(3);
    }

    function changeThreeGeometry(type) {
      currentGeometryType = type;
      createThreeGeometry(type);
      playHarmonicTone(4);
    }

    function resizeThreeCanvas() {
      const container = document.getElementById('threeJsCanvasContainer');
      if (!container || !threeRenderer || !threeCamera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width && height) {
        threeCamera.aspect = width / height;
        threeCamera.updateProjectionMatrix();
        threeRenderer.setSize(width, height);
      }
    }

    function updateThreeJsPalette(palette) {
      if (!threeMesh || !palette) return;
      const primaryHex = palette.colors[studioRoleMapping.primary].hex;
      const secondaryHex = palette.colors[studioRoleMapping.secondary].hex;
      threeMesh.material.color.set(primaryHex);
      threeRings.forEach(r => r.material.color.set(secondaryHex));
    }
  
  // ==========================================
  // Package and digital mixer controls
  // ==========================================
  function openNpmModal() {
    const modal = document.getElementById('npmModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  function closeNpmModal() {
    const modal = document.getElementById('npmModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  async function copyNpmInstallCmd() { try {
    await copyTextToClipboard('npm install ./release/persian-palette-core-3.0.0.tgz').then(() => {
      const btn = document.getElementById('btnCopyNpmCmd');
      if (btn) {
        const oldText = btn.textContent;
        btn.textContent = currentLang === 'en' ? 'Copied!' : 'کپی شد!';
        btn.classList.add('bg-emerald-500/30', 'text-emerald-300');
        setTimeout(() => {
          btn.textContent = oldText;
          btn.classList.remove('bg-emerald-500/30', 'text-emerald-300');
        }, 1800);
      }
    });
  } catch(error) { /* Clipboard helper already explains recovery. */ } }

  async function copyNpmCodeSnippet() { try {
    const codeEl = document.getElementById('npmCodeSnippet');
    const code = codeEl ? codeEl.textContent : '';

    await copyTextToClipboard(code).then(() => {
      const btn = document.getElementById('btnCopyNpmCode');
      if (btn) {
        const oldText = btn.textContent;
        btn.textContent = currentLang === 'en' ? 'Copied!' : 'کپی شد!';
        setTimeout(() => { btn.textContent = oldText; }, 1800);
      }
    });
  } catch(error) { /* Clipboard helper already explains recovery. */ } }

  // Quick Mixer Modal Logic
  function initQuickMixerDropdowns() {
    const sel1 = document.getElementById('quickMixColor1');
    const sel2 = document.getElementById('quickMixColor2');
    if (!sel1 || !sel2) return;

    const isEn = currentLang === 'en';
    let optionsHtml = '';
    PERSIAN_PALETTES.forEach(p => {
      p.colors.forEach(c => {
        const cName = isEn ? c.nameEn : c.nameFa;
        const pName = isEn ? p.nameEn : p.nameFa;
        optionsHtml += `<option value="${c.hex}">${cName} (${c.hex}) - ${pName}</option>`;
      });
    });

    sel1.innerHTML = optionsHtml;
    sel2.innerHTML = optionsHtml;

    // Default values
    sel1.value = '#120A8F'; // Ultramarine
    sel2.value = '#F4C430'; // Saffron
    updateQuickMixer();
  }

  function openMixerModal() {
    const modal = document.getElementById('mixerModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (!document.getElementById('quickMixColor1').options.length) {
        initQuickMixerDropdowns();
      } else {
        updateQuickMixer();
      }
    }
  }

  function closeMixerModal() {
    const modal = document.getElementById('mixerModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  function updateQuickMixer() {
 const one=document.getElementById('quickMixColor1'),two=document.getElementById('quickMixColor2');
 if(!one?.value||!two?.value) return;
 const ratio=Number(document.getElementById('quickMixRatio').value)/100;
 const mixed=PersianCore.mixColors(one.value,two.value,ratio);
 document.getElementById('quickMixHex1').textContent=one.value;
 document.getElementById('quickMixHex2').textContent=two.value;
 document.getElementById('quickMixRatioLabel').textContent=Math.round((1-ratio)*100)+'% / '+Math.round(ratio*100)+'%';
 document.getElementById('quickMixResultSwatch').style.backgroundColor=mixed.hex;
 document.getElementById('quickMixResultHex').textContent=mixed.hex;
 document.getElementById('quickMixResultOklab').textContent='Oklab: L '+mixed.oklab.L.toFixed(3)+' | a '+mixed.oklab.a.toFixed(3)+' | b '+mixed.oklab.b.toFixed(3);
}

  async function copyQuickMixedHex() { try {
    const hex = document.getElementById('quickMixResultHex').textContent;
    await copyTextToClipboard(hex).then(() => {
      showToast(currentLang === 'en' ? `Blended color HEX ${hex} copied.` : `کد رنگ ترکیبی ${hex} کپی شد.`);
    });
  } catch(error) { /* Clipboard helper already explains recovery. */ } }

  function openDeepEvidenceForQuickMix() {
    closeMixerModal();
    const hex1 = document.getElementById('quickMixColor1').value;
    // Find palette and index
    for (const p of PERSIAN_PALETTES) {
      const idx = p.colors.findIndex(c => c.hex.toLowerCase() === hex1.toLowerCase());
      if (idx !== -1) {
        openEvidenceDashboard(p.id, idx);
        return;
      }
    }
    openEvidenceDashboard('isfahan-tiles', 0);
  }

  // Support user's exact function names
  window.openEvidenceModal = function(pId, cIdx) {
    openEvidenceDashboard(pId, cIdx);
  };
  window.closeEvidenceModal = function() {
    closeEvidenceDashboard();
  };
