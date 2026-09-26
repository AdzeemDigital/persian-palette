/**
 * Spectral Reflectance Distribution Model (380nm - 700nm)
 *
 * NOTE: Gaussian spectral curves generated here are illustrative mathematical
 * simulations for UI rendering, not physical laboratory measurements.
 */

export interface SpectralDataPoint {
  wavelengthNm: number;
  reflectance: number; // 0.0 to 1.0
}

/**
 * Generate simulated spectral reflectance curve for a given peak wavelength and FWHM
 */
export function generateSpectralCurve(
  peakWavelengthNm: number,
  fwhmNm: number = 65,
  minReflectance: number = 0.05,
  maxReflectance: number = 0.90
): SpectralDataPoint[] {
  if (![peakWavelengthNm, fwhmNm, minReflectance, maxReflectance].every(Number.isFinite) ||
      peakWavelengthNm < 380 || peakWavelengthNm > 700 || fwhmNm <= 0 ||
      minReflectance < 0 || maxReflectance > 1 || minReflectance > maxReflectance) {
    throw new RangeError('Expected a visible peak (380–700 nm), positive FWHM and ordered reflectance bounds in [0, 1]');
  }
  const points: SpectralDataPoint[] = [];
  const sigma = fwhmNm / (2 * Math.sqrt(2 * Math.log(2)));

  for (let lambda = 380; lambda <= 700; lambda += 5) {
    // Gaussian distribution centered at peak
    const dist = (lambda - peakWavelengthNm) / sigma;
    const gaussian = Math.exp(-0.5 * dist * dist);
    
    // Broad secondary reflection for complex minerals (e.g. red hematite also reflecting in violet/IR)
    let secondary = 0.0;
    if (peakWavelengthNm > 600) {
      // Long-pass edge filter behavior of ochre / cinnabar
      secondary = lambda > peakWavelengthNm ? 0.45 * (1 - Math.exp(-(lambda - peakWavelengthNm) / 40)) : 0.0;
    }

    const value = minReflectance + (maxReflectance - minReflectance) * Math.min(1.0, gaussian + secondary);
    points.push({
      wavelengthNm: lambda,
      reflectance: Number(Math.max(0.0, Math.min(1.0, value)).toFixed(4)),
    });
  }

  return points;
}
