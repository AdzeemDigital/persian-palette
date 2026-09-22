import type { ColorEvidence } from './evidence.js';
export type SemVerVersion = `${number}.${number}.${number}`;
export interface DTCGColorValue {
  colorSpace: 'srgb'; components: [number, number, number]; alpha: 1; hex: string;
}
export interface DTCGColorToken {
  $type: 'color'; $value: DTCGColorValue; $description?: string;
  $extensions?: Record<string, unknown>;
}
export interface PersianColorToken extends DTCGColorToken {
  id: string; hex: string; nameFa: string; nameEn: string; evidence: ColorEvidence;
}
export interface PersianPaletteTokenGroup {
  version: SemVerVersion; id: string; nameFa: string; nameEn: string;
  category: 'architecture' | 'history' | 'arts' | 'textiles' | 'nature';
  tokens: Record<string, PersianColorToken>; $description?: string;
}
export interface DTCGTokenGroup {
  $description?: string;
  [key: string]: DTCGColorToken | DTCGTokenGroup | string | undefined;
}
export interface DTCGDesignTokensDocument {
  $description: string;
  $extensions: { 'org.persian-palette': { version: SemVerVersion; dtcgVersion: string } };
  persian: DTCGTokenGroup;
}
