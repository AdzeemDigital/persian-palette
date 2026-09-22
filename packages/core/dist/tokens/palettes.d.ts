import type { PersianPaletteDefinition } from '../types/palette.js';
import type { EvidenceConflict } from '../types/evidence.js';
/** Canonical, frozen palette data. Raw historical claims remain unverified. */
export declare const ALL_PALETTES_LIST: PersianPaletteDefinition[];
export declare const PERSIAN_PALETTES: Record<string, PersianPaletteDefinition>;
export declare function getDataQualityReport(): {
    palettes: number;
    colors: number;
    unverifiedHeritageColors: number;
    measuredSpectra: number;
    coordinateConflicts: number;
    conflicts: {
        id: string;
        conflicts: EvidenceConflict[];
    }[];
};
//# sourceMappingURL=palettes.d.ts.map