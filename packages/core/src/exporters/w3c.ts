import { ALL_PALETTES_LIST } from '../tokens/palettes.js';
import { hexToRgb, rgbToHex } from '../math/oklab.js';
import { VERSION, DTCG_VERSION } from '../version.js';
import type { PersianPaletteDefinition, PersianColorDefinition } from '../types/palette.js';
import type { DTCGColorToken, DTCGColorValue, DTCGDesignTokensDocument, DTCGTokenGroup } from '../types/token.js';

export const CANONICAL_TOKEN_KEYS: Readonly<Record<string, string>> = Object.freeze({
  'isfahan-tiles-c1': 'ultramarine-lapis',
  'isfahan-tiles-c2': 'persian-turquoise',
  'isfahan-tiles-c3': 'persian-green',
  'isfahan-tiles-c4': 'arabesque-gold',
  'isfahan-tiles-c5': 'alabaster-glaze',
  'isfahan-tiles-c6': 'midnight-muqarnas',
  'achaemenid-majesty-c1': 'persian-red',
  'achaemenid-majesty-c2': 'old-gold',
  'achaemenid-majesty-c3': 'persepolis-deep-navy',
  'achaemenid-majesty-c4': 'ancient-royal-jade',
  'achaemenid-majesty-c5': 'apadana-alabaster',
  'achaemenid-majesty-c6': 'tacara-basalt-black',
  'behzad-miniature-c1': 'cinnabar-vermilion',
  'behzad-miniature-c2': 'malachite-green',
  'behzad-miniature-c3': 'night-sky-miniature-navy',
  'behzad-miniature-c4': 'persian-plum',
  'behzad-miniature-c5': 'illuminated-leaf-gold',
  'behzad-miniature-c6': 'samarkand-silk-paper',
  'nomadic-rugs-c1': 'madder-root-red',
  'nomadic-rugs-c2': 'persian-crimson-lacquer',
  'nomadic-rugs-c3': 'persian-orange',
  'nomadic-rugs-c4': 'peacock-forest-green',
  'nomadic-rugs-c5': 'raw-wool-cream',
  'nomadic-rugs-c6': 'walnut-husk-brown',
  'minakari-craft-c1': 'persian-blue',
  'minakari-craft-c2': 'deep-persian-green',
  'minakari-craft-c3': 'gilded-brass-yellow',
  'minakari-craft-c4': 'pearl-turquoise-glaze',
  'minakari-craft-c5': 'porcelain-enamel-white',
  'minakari-craft-c6': 'kiln-shadow-navy',
  'toranj-illumination-c1': 'timurid-crimson-carmine',
  'toranj-illumination-c2': 'indigo-shamseh-navy',
  'toranj-illumination-c3': 'goldenrod-gold',
  'toranj-illumination-c4': 'malachite-resin-green',
  'toranj-illumination-c5': 'parchment-vellum-white',
  'toranj-illumination-c6': 'india-ink-black',
  'persian-gulf-pearls-c1': 'medium-persian-blue',
  'persian-gulf-pearls-c2': 'qeshm-turquoise-shore',
  'persian-gulf-pearls-c3': 'hormuz-red-ochre',
  'persian-gulf-pearls-c4': 'persian-gulf-pearl',
  'persian-gulf-pearls-c5': 'sun-warmed-coastal-sand',
  'persian-gulf-pearls-c6': 'abyssal-persian-deep-blue',
  'gardens-of-shiraz-c1': 'persian-rose',
  'gardens-of-shiraz-c2': 'ghasrodasht-ruby-pomegranate',
  'gardens-of-shiraz-c3': 'cypress-green',
  'gardens-of-shiraz-c4': 'orange-blossom-yellow',
  'gardens-of-shiraz-c5': 'shirazi-jasmine-white',
  'gardens-of-shiraz-c6': 'deep-eram-garden-shade',
  'khorasan-gems-c1': 'turquoise',
  'khorasan-gems-c2': 'persian-ruby',
  'khorasan-gems-c3': 'emerald-green',
  'khorasan-gems-c4': 'amber-gold',
  'khorasan-gems-c5': 'silver-pearl-luster',
  'khorasan-gems-c6': 'flint-basalt-dark',
  'hyrcanian-forests-c1': 'ancient-hyrcanian-fern',
  'hyrcanian-forests-c2': 'moist-rock-moss',
  'hyrcanian-forests-c3': 'beech-leaf-fresh-sprout',
  'hyrcanian-forests-c4': 'caspian-oak-wood',
  'hyrcanian-forests-c5': 'damavand-glacier-white',
  'hyrcanian-forests-c6': 'deep-forest-shadow',
  'yazd-saffron-desert-c1': 'saffron-yellow',
  'yazd-saffron-desert-c2': 'adobe-terracotta',
  'yazd-saffron-desert-c3': 'rig-e-jenn-red-agate',
  'yazd-saffron-desert-c4': 'lut-golden-sand-dune',
  'yazd-saffron-desert-c5': 'sun-baked-adobe-shadow',
  'yazd-saffron-desert-c6': 'senjed-windcatcher-timber',
  'bazaar-spices-c1': 'turmeric-gold',
  'bazaar-spices-c2': 'ancient-cinnamon-brown',
  'bazaar-spices-c3': 'paprika-pepper-crimson',
  'bazaar-spices-c4': 'pistachio-green',
  'bazaar-spices-c5': 'ancient-saffron-pastry-cream',
  'bazaar-spices-c6': 'nigella-seed-black-cardamom'
});

export const colorTokenKey = (color: PersianColorDefinition): string =>
  color.tokenKey ?? CANONICAL_TOKEN_KEYS[color.id] ?? color.nameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function toDTCGColorValue(hex: string): DTCGColorValue {
  const rgb = hexToRgb(hex);
  return { colorSpace: 'srgb', components: [rgb.r/255, rgb.g/255, rgb.b/255], alpha: 1, hex: rgbToHex(rgb).toLowerCase() };
}
export function toDTCGToken(color: PersianColorDefinition): DTCGColorToken {
  return { $type: 'color', $value: toDTCGColorValue(color.hex),
    $description: color.nameFa + ' — ' + color.roleFa,
    $extensions: { 'org.persian-palette': { id: color.id, nameFa: color.nameFa, nameEn: color.nameEn, evidence: color.evidence } } };
}
export function exportW3CTokens(palettes: PersianPaletteDefinition[] = ALL_PALETTES_LIST): DTCGDesignTokensDocument {
  const persian: DTCGTokenGroup = { $description: 'Persian-inspired sRGB colors; heritage annotations are not laboratory authentication.' };
  for (const palette of palettes) {
    const group: DTCGTokenGroup = { $description: palette.nameFa + ' (' + palette.nameEn + ')' };
    for (const color of palette.colors) {
      const key = colorTokenKey(color);
      if (Object.hasOwn(group, key)) throw new Error('Duplicate token key: ' + key);
      group[key] = toDTCGToken(color);
    }
    persian[palette.id] = group;
  }
  return { $description: 'Persian Palette Vault design tokens',
    $extensions: { 'org.persian-palette': { version: VERSION, dtcgVersion: DTCG_VERSION } }, persian };
}
/** Explicit legacy format for Tokens Studio consumers that require hex values. */
export function exportTokensStudio(palettes: PersianPaletteDefinition[] = ALL_PALETTES_LIST) {
  return Object.fromEntries(palettes.map(p => [p.id, Object.fromEntries(p.colors.map(c => [
    colorTokenKey(c), { value: c.hex, type: 'color', description: c.nameFa }
  ]))]));
}
