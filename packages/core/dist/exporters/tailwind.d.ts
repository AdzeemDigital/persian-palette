import type { PersianPaletteDefinition } from '../types/palette.js';
export declare function exportTailwindTheme(palettes?: PersianPaletteDefinition[]): {
    theme: {
        extend: {
            colors: {
                persian: Record<string, Record<string, string>>;
            };
        };
    };
};
export declare function exportTailwindV4CSS(palettes?: PersianPaletteDefinition[]): string;
//# sourceMappingURL=tailwind.d.ts.map