export declare function calculateAPCA(txtHex: string, bgHex: string): number;
/** Reference Barlow lookup. Values >= 400 are special codes, not ordinary font sizes. */
export declare function getApcaFontSizes(lc: number): Record<number, number>;
export interface APCAConformance {
    lcScore: number;
    rating: 'Fail' | 'Lc 45 (Large/Bold)' | 'Lc 60 (Sub-head)' | 'Lc 75 (Content Text)' | 'Lc 90 (Fluent Body Text)';
    minFontSizePx: {
        fontNormal400: number;
        fontBold700: number;
    };
    passedFluentBody: boolean;
    method: 'apca-w3@0.1.9';
}
export declare function evaluateAPCA(txtHex: string, bgHex: string): APCAConformance;
//# sourceMappingURL=apca.d.ts.map