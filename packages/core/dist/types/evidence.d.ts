/** Heritage annotations retain their uncertainty; numeric color metrics are derived from sRGB. */
export interface ChemicalEvidence {
    historicalPigmentFa: string;
    chemicalName: string;
    formula?: string;
    casNumber?: string;
    molarMass?: string;
}
export interface GeoSpatialEvidence {
    locationFa: string;
    latitude: number;
    longitude: number;
    elevationMeters: number;
    unescoSiteId?: string;
}
export interface PhysicsEvidence {
    dominantWavelengthNm?: number;
    chromaOklab: number;
    spectralReflectancePeak: string;
    cieLab: {
        L: number;
        a: number;
        b: number;
    };
}
export interface MineralogicalEvidence {
    mineralName: string;
    mineralNameFa: string;
    chemicalFormula?: string;
    crystalSystem: string;
    traditionalExtraction: string;
    historicalManuscriptRef?: string;
    casNumber?: string;
}
export interface SpectralEvidence {
    peakWavelengthNm: number;
    dominantWavelengthNm?: number;
    reflectanceRange: [number, number];
    fwhmNm: number;
}
export interface LegacyGeoSpatial {
    originSite: string;
    originSiteFa: string;
    unescoHeritageRef: string;
    coordinates: {
        lat: number;
        lng: number;
        altitudeMeters?: number;
    };
}
export interface ColorScienceEvidence {
    oklab: {
        L: number;
        a: number;
        b: number;
    };
    srgb: {
        r: number;
        g: number;
        b: number;
    };
    apca: {
        contrastOnWhite: number;
        contrastOnBlack: number;
        recommendedWeight: string;
    };
}
export interface EvidenceConflict {
    field: string;
    selected: unknown;
    alternative: unknown;
    resolution: 'unresolved';
}
export interface EvidenceProvenance {
    source: 'legacy-v2.1.0';
    heritageStatus: 'unverified' | 'verified';
    geographyStatus: 'unverified' | 'conflicting';
    spectralStatus: 'illustrative' | 'measured';
    colorMetricsStatus: 'computed';
    methods: string[];
    references: {
        label: string;
        url: string;
        scope: 'method';
    }[];
    historicalReference: {
        citation?: string;
        verification: 'not-verified';
    };
    conflicts: EvidenceConflict[];
}
export interface LegacyColorEvidence {
    historicalContextFa: string;
    artMovement: string;
    chemical: ChemicalEvidence;
    geo: GeoSpatialEvidence;
    physics: PhysicsEvidence;
    mineralogical: MineralogicalEvidence;
    geoSpatial: LegacyGeoSpatial;
    spectral: SpectralEvidence;
    colorScience: ColorScienceEvidence;
}
export interface ColorEvidence extends LegacyColorEvidence {
    provenance: EvidenceProvenance;
}
//# sourceMappingURL=evidence.d.ts.map