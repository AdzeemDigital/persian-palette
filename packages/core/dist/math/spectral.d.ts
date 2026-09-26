/**
 * Spectral Reflectance Distribution Model (380nm - 700nm)
 *
 * NOTE: Gaussian spectral curves generated here are illustrative mathematical
 * simulations for UI rendering, not physical laboratory measurements.
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