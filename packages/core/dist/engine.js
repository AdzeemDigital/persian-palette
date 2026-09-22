import { ALL_PALETTES_LIST, PERSIAN_PALETTES } from './tokens/palettes.js';
import { colorTokenKey, toDTCGToken } from './exporters/w3c.js';
import { VERSION } from './version.js';
/** Normalize Persian/Arabic letter variants, marks, spacing and English case. */
export function normalizeColorName(value) {
    return value.normalize('NFKC').toLowerCase().replace(/ي/g, 'ی').replace(/ك/g, 'ک')
        .replace(/[\u064B-\u065F\u0670\u0640]/g, '').replace(/[^\p{L}\p{N}]/gu, '');
}
function token(color) {
    return { ...toDTCGToken(color), id: color.id, hex: color.hex, nameFa: color.nameFa, nameEn: color.nameEn, evidence: color.evidence };
}
export class PersianEngine {
    static getColor(paletteId, name) {
        if (typeof paletteId !== 'string' || !Object.hasOwn(PERSIAN_PALETTES, paletteId))
            throw new RangeError('Unknown palette: ' + paletteId);
        if (typeof name !== 'string' || !normalizeColorName(name))
            throw new TypeError('Color query must not be empty');
        const palette = PERSIAN_PALETTES[paletteId], key = normalizeColorName(name);
        const exact = palette.colors.filter(c => [c.id, c.nameEn, colorTokenKey(c), c.nameFa, c.nameFa.replace(/\([^)]*\)/g, '')]
            .some(n => normalizeColorName(n) === key));
        const candidates = exact.length ? exact : palette.colors.filter(c => [c.nameEn, c.nameFa].some(n => normalizeColorName(n).includes(key)));
        if (candidates.length === 0)
            throw new RangeError('Unknown color: ' + name + ' in ' + paletteId);
        if (candidates.length > 1)
            throw new RangeError('Ambiguous color: ' + name + '; use a color ID');
        return token(candidates[0]);
    }
    static getToken(paletteId, name) { return this.getColor(paletteId, name); }
    static getPalette(paletteId) {
        if (!Object.hasOwn(PERSIAN_PALETTES, paletteId))
            return undefined;
        const p = PERSIAN_PALETTES[paletteId];
        const category = p.category === 'art' || p.category === 'craft' ? 'arts' : p.category;
        return { version: VERSION, id: p.id, nameFa: p.nameFa, nameEn: p.nameEn, category,
            tokens: Object.fromEntries(p.colors.map(c => [colorTokenKey(c), token(c)])), $description: p.descriptionFa };
    }
    static getAllPalettes() {
        return Object.fromEntries(ALL_PALETTES_LIST.map(p => [p.id, this.getPalette(p.id)]));
    }
    static getAllColors() { return ALL_PALETTES_LIST.flatMap(p => p.colors.map(token)); }
}
