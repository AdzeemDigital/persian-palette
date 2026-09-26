import type { ColorEvidence, LegacyColorEvidence } from './evidence.js';
export interface PersianColorDefinition {
  id: string; hex: string; nameFa: string; nameEn: string; roleFa: string; roleEn: string;
  meaningFa: string; role?: string; meaning?: string; evidence: ColorEvidence;
  tokenKey?: string;
}
export type PersianCategory = 'architecture' | 'history' | 'art' | 'arts' | 'craft' | 'textiles' | 'nature';
export interface PersianPaletteDefinition {
  id: string; category: PersianCategory; nameFa: string; nameEn: string; descriptionFa: string;
  culturalContextFa: string; unescoRefFa?: string; description?: string; culturalContext?: string;
  unescoRef?: string; imageUrl: string; colors: PersianColorDefinition[];
}
export type RawPaletteDefinition = Omit<PersianPaletteDefinition, 'colors'> & {
  colors: (Omit<PersianColorDefinition, 'evidence'> & { evidence: LegacyColorEvidence })[];
};
