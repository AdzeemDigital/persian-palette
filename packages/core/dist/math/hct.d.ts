export interface HCTColor {
    hue: number;
    chroma: number;
    tone: number;
}
export declare const M3_ROLES: readonly ['primary', 'onPrimary', 'primaryContainer', 'onPrimaryContainer', 'secondary', 'onSecondary', 'secondaryContainer', 'onSecondaryContainer', 'tertiary', 'onTertiary', 'tertiaryContainer', 'onTertiaryContainer', 'error', 'onError', 'errorContainer', 'onErrorContainer', 'background', 'onBackground', 'surface', 'onSurface', 'surfaceVariant', 'onSurfaceVariant', 'outline', 'outlineVariant'];
export type M3PaletteRoles = Record<typeof M3_ROLES[number], string>;
export interface M3ColorScheme {
    seedHex: string;
    hct: HCTColor;
    light: M3PaletteRoles;
    dark: M3PaletteRoles;
    tonalScale: Record<number, string>;
    method: 'material-color-utilities@0.3.0/tonal-spot/2021';
}
export declare function hexToLab(hex: string): {
    L: number;
    a: number;
    b: number;
};
export declare function hexToHct(hex: string): HCTColor;
export declare function hctToHex(hue: number, chroma: number, tone: number): string;
export declare function generateTonalPalette(sourceHex: string, tones?: number[]): Record<number, string>;
export declare function generateM3DynamicScheme(sourceHex: string): M3ColorScheme;
//# sourceMappingURL=hct.d.ts.map