import * as core from '$SCRATCH/work/packages/core/dist/index.js';
const c = { id:'c', hex:'#112233', nameFa:'x', nameEn:'X', roleFa:'r', roleEn:'r', meaningFa:'m', evidence:{} };
const p = (id) => ({ id, category:'art', nameFa:'p', nameEn:'P', descriptionFa:'', culturalContextFa:'', imageUrl:'', colors:[c] });
process.stdout.write(core.exportMaterialKotlin([p('1st-palette'), p('fun'), p('a-b'), p('aB')]));
