/**
 * Spectral Reflectance Distribution Model (380nm - 700nm)
 * Models physical reflectance curves of historical minerals and natural organic dyes
 */
export interface SpectralDataPoint {
    wavelengthNm: number;
    reflectance: number;
}
/**
 * Generate simulated spectral reflectance curve for a given peak wavelength and FWHM
 */
export declare function generateSpectralCurve(peakWavelengthNm: number, fwhmNm?: number, minReflectance?: number, maxReflectance?: number): SpectralDataPoint[];
//# sourceMappingURL=spectral.d.ts.map