import { RAW_PALETTES } from './heritage-data.js';
import { hexToRgb, rgbToOklab, rgbToHex } from '../math/oklab.js';
import { calculateAPCA, evaluateAPCA } from '../math/apca.js';
import { hexToLab } from '../math/hct.js';
function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
        for (const child of Object.values(value))
            freeze(child);
        Object.freeze(value);
    }
    return value;
}
function normalizePalette(raw) {
    return {
        ...raw,
        colors: raw.colors.map(color => {
            const original = color.evidence, mineral = original.mineralogical;
            const sourceGeo = original.geoSpatial, coords = sourceGeo.coordinates;
            const hex = rgbToHex(hexToRgb(color.hex)), srgb = hexToRgb(hex), oklab = rgbToOklab(srgb);
            const conflicts = [];
            const compare = (field, selected, alternative) => {
                if (JSON.stringify(selected) !== JSON.stringify(alternative))
                    conflicts.push({ field, selected, alternative, resolution: 'unresolved' });
            };
            compare('geo.latitude', coords.lat, original.geo.latitude);
            compare('geo.longitude', coords.lng, original.geo.longitude);
            compare('geo.elevationMeters', coords.altitudeMeters ?? original.geo.elevationMeters, original.geo.elevationMeters);
            compare('chemical.formula', mineral.chemicalFormula, original.chemical.formula);
            const { molarMass: unverifiedMolarMass, ...chemical } = original.chemical;
            return {
                ...color, hex,
                evidence: {
                    ...original,
                    chemical: { ...chemical, chemicalName: mineral.mineralName, historicalPigmentFa: mineral.mineralNameFa,
                        formula: mineral.chemicalFormula, casNumber: mineral.casNumber ?? chemical.casNumber },
                    geo: { locationFa: sourceGeo.originSiteFa, latitude: coords.lat, longitude: coords.lng,
                        elevationMeters: coords.altitudeMeters ?? original.geo.elevationMeters, unescoSiteId: sourceGeo.unescoHeritageRef },
                    geoSpatial: { ...sourceGeo, coordinates: { ...coords, altitudeMeters: coords.altitudeMeters ?? original.geo.elevationMeters } },
                    physics: { ...original.physics, dominantWavelengthNm: original.spectral.dominantWavelengthNm,
                        spectralReflectancePeak: original.spectral.peakWavelengthNm + ' nm',
                        chromaOklab: Math.hypot(oklab.a, oklab.b), cieLab: hexToLab(hex) },
                    colorScience: { srgb, oklab, apca: {
                            contrastOnWhite: calculateAPCA(hex, '#FFFFFF'), contrastOnBlack: calculateAPCA(hex, '#000000'),
                            recommendedWeight: evaluateAPCA(hex, '#FFFFFF').rating,
                        } },
                    provenance: {
                        source: 'legacy-v2.1.0', heritageStatus: 'unverified',
                        geographyStatus: conflicts.some(c => c.field.startsWith('geo.')) ? 'conflicting' : 'unverified',
                        spectralStatus: 'illustrative', colorMetricsStatus: 'computed',
                        methods: ['sRGB D65', 'Oklab', 'CIELAB D65', 'apca-w3@0.1.9', 'material-color-utilities@0.3.0'],
                        references: [
                            { label: 'Oklab method', url: 'https://bottosson.github.io/posts/oklab/', scope: 'method' },
                            { label: 'APCA reference', url: 'https://github.com/Myndex/apca-w3', scope: 'method' },
                            { label: 'Material color utilities', url: 'https://github.com/material-foundation/material-color-utilities', scope: 'method' },
                        ],
                        historicalReference: { citation: mineral.historicalManuscriptRef, verification: 'not-verified' },
                        conflicts,
                    },
                },
            };
        }),
    };
}
/** Canonical, frozen palette data. Raw historical claims remain unverified. */
export const ALL_PALETTES_LIST = freeze(Object.values(RAW_PALETTES).map(normalizePalette));
export const PERSIAN_PALETTES = freeze(Object.fromEntries(ALL_PALETTES_LIST.map(p => [p.id, p])));
export function getDataQualityReport() {
    const colors = ALL_PALETTES_LIST.flatMap(p => p.colors);
    return { palettes: ALL_PALETTES_LIST.length, colors: colors.length,
        unverifiedHeritageColors: colors.length, measuredSpectra: 0,
        coordinateConflicts: colors.filter(c => c.evidence.provenance.conflicts.some(v => v.field === 'geo.latitude' || v.field === 'geo.longitude')).length,
        conflicts: colors.filter(c => c.evidence.provenance.conflicts.length).map(c => ({ id: c.id, conflicts: c.evidence.provenance.conflicts })) };
}
