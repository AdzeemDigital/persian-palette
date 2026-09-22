"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ALL_PALETTES_LIST: () => ALL_PALETTES_LIST,
  DTCG_VERSION: () => DTCG_VERSION,
  M3_ROLES: () => M3_ROLES,
  PERSIAN_PALETTES: () => PERSIAN_PALETTES,
  PersianEngine: () => PersianEngine,
  VERSION: () => VERSION,
  calculateAPCA: () => calculateAPCA,
  colorTokenKey: () => colorTokenKey,
  evaluateAPCA: () => evaluateAPCA,
  exportFigmaVariables: () => exportFigmaVariables,
  exportMaterialKotlin: () => exportMaterialKotlin,
  exportSwiftUI: () => exportSwiftUI,
  exportTailwindTheme: () => exportTailwindTheme,
  exportTailwindV4CSS: () => exportTailwindV4CSS,
  exportToW3CTokens: () => exportW3CTokens,
  exportTokensStudio: () => exportTokensStudio,
  exportW3CTokens: () => exportW3CTokens,
  generateM3DynamicScheme: () => generateM3DynamicScheme,
  generatePigmentGradient: () => generatePigmentGradient,
  generateSpectralCurve: () => generateSpectralCurve,
  generateTonalPalette: () => generateTonalPalette,
  getApcaFontSizes: () => getApcaFontSizes,
  getDataQualityReport: () => getDataQualityReport,
  hctToHex: () => hctToHex,
  hexToHct: () => hexToHct,
  hexToLab: () => hexToLab,
  hexToRgb: () => hexToRgb,
  mixColors: () => mixColors,
  mixHistoricalPigments: () => mixHistoricalPigments,
  normalizeColorName: () => normalizeColorName,
  oklabToRgb: () => oklabToRgb,
  rgbToHex: () => rgbToHex,
  rgbToOklab: () => rgbToOklab,
  toDTCGColorValue: () => toDTCGColorValue,
  toDTCGToken: () => toDTCGToken
});
module.exports = __toCommonJS(index_exports);

// src/tokens/heritage-data.ts
var RAW_PALETTES = {
  "isfahan-tiles": {
    "id": "isfahan-tiles",
    "category": "architecture",
    "nameFa": "\u06A9\u0627\u0634\u06CC\u200C\u06A9\u0627\u0631\u06CC \u0635\u0641\u0648\u06CC \u0627\u0635\u0641\u0647\u0627\u0646",
    "nameEn": "Safavid Tilework of Isfahan",
    "description": "\u0634\u0627\u0647\u06A9\u0627\u0631 \u0647\u0641\u062A\u200C\u0631\u0646\u06AF \u0635\u0641\u0648\u06CC\u060C \u06A9\u0628\u0627\u0644\u062A \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u0627\u0635\u06CC\u0644\u060C \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0648 \u0645\u062D\u0631\u0627\u0628\u200C\u0647\u0627\u06CC \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0645\u0633\u062C\u062F \u0634\u0627\u0647 \u0648 \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647 \u062F\u0631 \u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646 \u0627\u0635\u0641\u0647\u0627\u0646.",
    "descriptionFa": "\u0634\u0627\u0647\u06A9\u0627\u0631 \u0647\u0641\u062A\u200C\u0631\u0646\u06AF \u0635\u0641\u0648\u06CC\u060C \u06A9\u0628\u0627\u0644\u062A \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u0627\u0635\u06CC\u0644\u060C \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0648 \u0645\u062D\u0631\u0627\u0628\u200C\u0647\u0627\u06CC \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0645\u0633\u062C\u062F \u0634\u0627\u0647 \u0648 \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647 \u062F\u0631 \u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646 \u0627\u0635\u0641\u0647\u0627\u0646.",
    "culturalContext": "\u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646\u060C \u0645\u0633\u062C\u062F \u0634\u0627\u0647 (\u062C\u0627\u0645\u0639 \u0639\u0628\u0627\u0633\u06CC) \u0648 \u0645\u0633\u062C\u062F \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647 \u0627\u0635\u0641\u0647\u0627\u0646",
    "culturalContextFa": "\u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646\u060C \u0645\u0633\u062C\u062F \u0634\u0627\u0647 (\u062C\u0627\u0645\u0639 \u0639\u0628\u0627\u0633\u06CC) \u0648 \u0645\u0633\u062C\u062F \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647 \u0627\u0635\u0641\u0647\u0627\u0646",
    "unescoRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 (UNESCO World Heritage Site)",
    "unescoRefFa": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 (UNESCO World Heritage Site)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mezquita_Shah%2C_Isfah%C3%A1n%2C_Ir%C3%A1n%2C_2016-09-20%2C_DD_71-73_HDR.jpg/960px-Mezquita_Shah%2C_Isfah%C3%A1n%2C_Ir%C3%A1n%2C_2016-09-20%2C_DD_71-73_HDR.jpg",
    "colors": [
      {
        "id": "isfahan-tiles-c1",
        "hex": "#120A8F",
        "nameFa": "\u0644\u0627\u062C\u0648\u0631\u062F\u06CC (Ultramarine)",
        "nameEn": "Ultramarine Lapis",
        "role": "\u0631\u0646\u06AF \u067E\u0627\u06CC\u0647 \u0648 \u0632\u0645\u06CC\u0646\u0647",
        "roleFa": "\u0631\u0646\u06AF \u067E\u0627\u06CC\u0647 \u0648 \u0632\u0645\u06CC\u0646\u0647",
        "roleEn": "Primary Accent",
        "meaning": "\u0627\u0635\u0644\u0627\u062D \u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u062A\u0627\u0628 \u062F\u0642\u06CC\u0642 \u06A9\u0628\u0627\u0644\u062A \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u06A9\u0627\u0634\u06CC\u200C\u0647\u0627\u06CC \u0645\u0633\u062C\u062F \u0634\u0627\u0647",
        "meaningFa": "\u0627\u0635\u0644\u0627\u062D \u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u062A\u0627\u0628 \u062F\u0642\u06CC\u0642 \u06A9\u0628\u0627\u0644\u062A \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u06A9\u0627\u0634\u06CC\u200C\u0647\u0627\u06CC \u0645\u0633\u062C\u062F \u0634\u0627\u0647",
        "evidence": {
          "mineralogical": {
            "mineralName": "Lazurite Silicate & Cobalt(II) Oxide Glaze",
            "mineralNameFa": "\u0633\u0646\u06AF \u0644\u0627\u062C\u0648\u0631\u062F \u0637\u0628\u06CC\u0639\u06CC \u0648 \u06A9\u0628\u0627\u0644\u062A \u06A9\u0627\u0634\u06CC \u0647\u0641\u062A\u200C\u0631\u0646\u06AF",
            "chemicalFormula": "Na\u2086Ca\u2082[S|AlSiO\u2084]\u2086 + CoO",
            "crystalSystem": "\u0645\u06A9\u0639\u0628\u06CC \u0627\u06CC\u0632\u0648\u0645\u062A\u0631\u06CC\u06A9 (Isometric)",
            "traditionalExtraction": "\u062A\u06A9\u0644\u06CC\u0633 \u06A9\u0627\u0646\u06CC \u0644\u0627\u062C\u0648\u0631\u062F \u0628\u0627 \u0635\u0645\u063A \u0639\u0631\u0628\u06CC \u0648 \u06A9\u062F\u0627\u062E\u062A \u06A9\u0628\u0627\u0644\u062A \u062F\u0631 \u06A9\u0648\u0631\u0647 \u06A9\u0627\u0634\u06CC \u0647\u0641\u062A\u200C\u0631\u0646\u06AF",
            "historicalManuscriptRef": "\u0639\u0631\u0627\u0626\u0633 \u0627\u0644\u062C\u0648\u0627\u0647\u0631 \u0648 \u0646\u0641\u0627\u0626\u0633 \u0627\u0644\u0623\u0637\u0627\u06CC\u0628 - \u0627\u0628\u0648\u0627\u0644\u0642\u0627\u0633\u0645 \u06A9\u0627\u0634\u0627\u0646\u06CC (\u0642\u0631\u0646 \u0647\u0634\u062A\u0645 \u0647\u062C\u0631\u06CC)",
            "casNumber": "1302-85-8"
          },
          "geoSpatial": {
            "originSite": "Shah Mosque & Sheikh Lotfollah, Isfahan",
            "originSiteFa": "\u0645\u0633\u062C\u062F \u0634\u0627\u0647 \u0648 \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647\u060C \u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646 \u0627\u0635\u0641\u0647\u0627\u0646",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 115 (Meidan Emam)",
            "coordinates": {
              "lat": 32.6514,
              "lng": 51.6776,
              "altitudeMeters": 1574
            }
          },
          "spectral": {
            "peakWavelengthNm": 455,
            "dominantWavelengthNm": 452,
            "reflectanceRange": [
              0.03,
              0.45
            ],
            "fwhmNm": 45
          },
          "colorScience": {
            "oklab": {
              "L": 0.3073,
              "a": -52e-4,
              "b": -0.1943
            },
            "srgb": {
              "r": 18,
              "g": 10,
              "b": 143
            },
            "apca": {
              "contrastOnWhite": 98.9,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0633\u0646\u06AF \u0644\u0627\u062C\u0648\u0631\u062F \u0637\u0628\u06CC\u0639\u06CC \u0648 \u06A9\u0628\u0627\u0644\u062A \u06A9\u0627\u0634\u06CC \u0647\u0641\u062A\u200C\u0631\u0646\u06AF",
            "chemicalName": "Lazurite Silicate & Cobalt(II) Oxide Glaze",
            "formula": "Na\u2086Ca\u2082[S|AlSiO\u2084]\u2086 + CoO",
            "casNumber": "1302-85-8",
            "molarMass": "985.4 g/mol"
          },
          "geo": {
            "locationFa": "\u0645\u0633\u062C\u062F \u0634\u0627\u0647\u060C \u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646 \u0627\u0635\u0641\u0647\u0627\u0646",
            "latitude": 32.6514,
            "longitude": 51.6776,
            "elevationMeters": 1574,
            "unescoSiteId": "UNESCO Ref: 115 (Meidan Emam)"
          },
          "physics": {
            "dominantWavelengthNm": 452,
            "chromaOklab": 0.28,
            "spectralReflectancePeak": "455 nm",
            "cieLab": {
              "L": 22.4,
              "a": 35.1,
              "b": -70.2
            }
          },
          "artMovement": "\u0645\u06A9\u062A\u0628 \u0627\u0635\u0641\u0647\u0627\u0646 / \u0645\u0639\u0645\u0627\u0631\u06CC \u0635\u0641\u0648\u06CC \u0648 \u06A9\u0627\u0634\u06CC \u0647\u0641\u062A\u200C\u0631\u0646\u06AF",
          "historicalContextFa": "\u06A9\u0627\u0634\u06CC\u200C\u06A9\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0645\u0639\u0631\u0642 \u06AF\u0646\u0628\u062F \u0648 \u0645\u062D\u0631\u0627\u0628 \u0645\u0633\u062C\u062F \u0634\u0627\u0647 \u0627\u0635\u0641\u0647\u0627\u0646 \u062F\u0631 \u062F\u0648\u0631\u0647 \u0634\u0627\u0647 \u0639\u0628\u0627\u0633 \u0627\u0648\u0644"
        }
      },
      {
        "id": "isfahan-tiles-c2",
        "hex": "#30D5C8",
        "nameFa": "\u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0627\u0635\u06CC\u0644 (Persian Turquoise)",
        "nameEn": "Persian Turquoise",
        "role": "\u0646\u0642\u0648\u0634 \u0627\u0633\u0644\u06CC\u0645\u06CC \u0645\u06CC\u0627\u0646\u06CC",
        "roleFa": "\u0646\u0642\u0648\u0634 \u0627\u0633\u0644\u06CC\u0645\u06CC \u0645\u06CC\u0627\u0646\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u0648 \u0646\u06AF\u06CC\u0646 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631",
        "meaningFa": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u0648 \u0646\u06AF\u06CC\u0646 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631",
        "evidence": {
          "mineralogical": {
            "mineralName": "Hydrated Copper Aluminum Phosphate",
            "mineralNameFa": "\u0633\u0646\u06AF \u0641\u06CC\u0631\u0648\u0632\u0647 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631 / \u0644\u0639\u0627\u0628 \u0645\u0633 \u0642\u0644\u06CC\u0627\u06CC\u06CC",
            "chemicalFormula": "CuAl\u2086(PO\u2084)\u2084(OH)\u2088\xB74H\u2082O",
            "crystalSystem": "\u062A\u0631\u06CC\u200C\u06A9\u0644\u06CC\u0646\u06CC\u06A9 (Triclinic)",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0631\u06AF\u0647\u200C\u0627\u06CC \u062F\u0633\u062A\u06CC \u0627\u0632 \u06A9\u0648\u0647 \u0628\u06CC\u0646\u0627\u0644\u0648\u062F \u0648 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 \u062E\u0627\u06A9\u0647 \u0633\u0627\u06CC\u0646\u062F\u0647",
            "historicalManuscriptRef": "\u0627\u0644\u062A\u0641\u0647\u06CC\u0645 \u0644\u0623\u0648\u0627\u0626\u0644 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u062A\u0646\u062C\u06CC\u0645 - \u0627\u0628\u0648\u0631\u06CC\u062D\u0627\u0646 \u0628\u06CC\u0631\u0648\u0646\u06CC",
            "casNumber": "1319-32-0"
          },
          "geoSpatial": {
            "originSite": "Neyshabur Turquoise Mines",
            "originSiteFa": "\u0645\u0639\u062F\u0646 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631\u060C \u062E\u0631\u0627\u0633\u0627\u0646 \u0631\u0636\u0648\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0645\u0644\u0645\u0648\u0633 \u0635\u0646\u0639\u062A\u06CC-\u0645\u0639\u062F\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 36.4633,
              "lng": 58.8025,
              "altitudeMeters": 1650
            }
          },
          "spectral": {
            "peakWavelengthNm": 498,
            "dominantWavelengthNm": 496,
            "reflectanceRange": [
              0.12,
              0.78
            ],
            "fwhmNm": 52
          },
          "colorScience": {
            "oklab": {
              "L": 0.7902,
              "a": -0.1285,
              "b": -0.0151
            },
            "srgb": {
              "r": 48,
              "g": 213,
              "b": 200
            },
            "apca": {
              "contrastOnWhite": 33.2,
              "contrastOnBlack": -60.2,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0633\u0646\u06AF \u0641\u06CC\u0631\u0648\u0632\u0647 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631 / \u0644\u0639\u0627\u0628 \u0645\u0633 \u0642\u0644\u06CC\u0627\u06CC\u06CC",
            "chemicalName": "Hydrated Copper Aluminum Phosphate",
            "formula": "CuAl\u2086(PO\u2084)\u2084(OH)\u2088\xB74H\u2082O",
            "casNumber": "1319-32-0",
            "molarMass": "813.5 g/mol"
          },
          "geo": {
            "locationFa": "\u0645\u0639\u062F\u0646 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631\u060C \u062E\u0631\u0627\u0633\u0627\u0646 \u0631\u0636\u0648\u06CC",
            "latitude": 36.2133,
            "longitude": 58.7958,
            "elevationMeters": 1650,
            "unescoSiteId": "WCC Craft City"
          },
          "physics": {
            "dominantWavelengthNm": 496,
            "chromaOklab": 0.18,
            "spectralReflectancePeak": "498 nm",
            "cieLab": {
              "L": 78.1,
              "a": -42,
              "b": -8.5
            }
          },
          "artMovement": "\u0645\u0639\u0645\u0627\u0631\u06CC \u0635\u0641\u0648\u06CC \u0648 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0646\u06AF\u0627\u0631\u06CC \u062B\u0644\u062B",
          "historicalContextFa": "\u0646\u06AF\u06CC\u0646\u200C\u0647\u0627\u06CC \u06A9\u0627\u0634\u06CC\u200C\u06A9\u0627\u0631\u06CC \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u062B\u0644\u062B \u0639\u0644\u06CC\u0631\u0636\u0627 \u0639\u0628\u0627\u0633\u06CC \u062F\u0631 \u0645\u0633\u062C\u062F \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647"
        }
      },
      {
        "id": "isfahan-tiles-c3",
        "hex": "#00A693",
        "nameFa": "\u0622\u0628\u06CC \u0632\u0646\u06AF\u0627\u0631\u06CC \u0634\u0627\u0647\u06CC (Persian Green)",
        "nameEn": "Persian Green",
        "role": "\u0633\u0627\u06CC\u0647\u200C\u0631\u0648\u0634\u0646 \u06A9\u0627\u0634\u06CC\u200C\u06A9\u0627\u0631\u06CC",
        "roleFa": "\u0633\u0627\u06CC\u0647\u200C\u0631\u0648\u0634\u0646 \u06A9\u0627\u0634\u06CC\u200C\u06A9\u0627\u0631\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0645\u0639\u0631\u0648\u0641 \u0628\u0647 Persian Green \u062F\u0631 \u06A9\u0627\u062A\u0627\u0644\u0648\u06AF\u200C\u0647\u0627\u06CC \u062C\u0647\u0627\u0646\u06CC",
        "meaningFa": "\u0645\u0639\u0631\u0648\u0641 \u0628\u0647 Persian Green \u062F\u0631 \u06A9\u0627\u062A\u0627\u0644\u0648\u06AF\u200C\u0647\u0627\u06CC \u062C\u0647\u0627\u0646\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Basic Copper(II) Acetate",
            "mineralNameFa": "\u0632\u0646\u06AF\u0627\u0631 \u0645\u0633 \u0633\u0646\u062A\u06CC (Verdigris)",
            "chemicalFormula": "Cu(CH\u2083COO)\u2082\xB7[Cu(OH)\u2082]\u2082",
            "crystalSystem": "\u0645\u0648\u0646\u0648\u06A9\u0644\u06CC\u0646\u06CC\u06A9 (Monoclinic)",
            "traditionalExtraction": "\u0627\u06A9\u0633\u06CC\u062F\u0627\u0633\u06CC\u0648\u0646 \u0635\u0641\u062D\u0627\u062A \u0645\u0633 \u062E\u0627\u0644\u0635 \u062F\u0631 \u0628\u062E\u0627\u0631\u0627\u062A \u0633\u0631\u06A9\u0647 \u0627\u0646\u06AF\u0648\u0631 \u06A9\u0647\u0646\u0647 \u062F\u0631 \u0645\u062C\u0627\u0648\u0631\u062A \u0646\u0645\u06A9 \u0622\u0645\u0648\u0646\u06CC\u0627\u06A9",
            "historicalManuscriptRef": "\u0628\u06CC\u0627\u0646 \u0627\u0644\u0635\u0646\u0627\u0639\u0627\u062A - \u062D\u0628\u06CC\u0634 \u062A\u0641\u0644\u06CC\u0633\u06CC (\u0642\u0631\u0646 \u0634\u0634\u0645)",
            "casNumber": "142-71-2"
          },
          "geoSpatial": {
            "originSite": "Isfahan Royal Workshops",
            "originSiteFa": "\u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0644\u0639\u0627\u0628\u200C\u0633\u0627\u0632\u06CC \u0635\u0641\u0648\u06CC\u060C \u0627\u0635\u0641\u0647\u0627\u0646",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 115",
            "coordinates": {
              "lat": 32.6575,
              "lng": 51.6778,
              "altitudeMeters": 1570
            }
          },
          "spectral": {
            "peakWavelengthNm": 515,
            "dominantWavelengthNm": 510,
            "reflectanceRange": [
              0.08,
              0.62
            ],
            "fwhmNm": 58
          },
          "colorScience": {
            "oklab": {
              "L": 0.6501,
              "a": -0.1173,
              "b": -17e-4
            },
            "srgb": {
              "r": 0,
              "g": 166,
              "b": 147
            },
            "apca": {
              "contrastOnWhite": 56,
              "contrastOnBlack": -36.4,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0632\u0646\u06AF\u0627\u0631 \u0645\u0633 \u0633\u0646\u062A\u06CC (Verdigris)",
            "chemicalName": "Basic Copper(II) Acetate",
            "formula": "Cu(CH\u2083COO)\u2082\xB7[Cu(OH)\u2082]\u2082",
            "casNumber": "142-71-2",
            "molarMass": "370.2 g/mol"
          },
          "geo": {
            "locationFa": "\u0628\u0627\u0632\u0627\u0631 \u0645\u0633\u06AF\u0631\u0647\u0627\u060C \u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646 \u0627\u0635\u0641\u0647\u0627\u0646",
            "latitude": 32.6575,
            "longitude": 51.6775,
            "elevationMeters": 1574,
            "unescoSiteId": "UNESCO Ref: 115"
          },
          "physics": {
            "dominantWavelengthNm": 508,
            "chromaOklab": 0.16,
            "spectralReflectancePeak": "510 nm",
            "cieLab": {
              "L": 60.2,
              "a": -45.3,
              "b": 2.1
            }
          },
          "artMovement": "\u0647\u0646\u0631\u0647\u0627\u06CC \u0635\u0646\u0627\u0639\u06CC \u0627\u0635\u0641\u0647\u0627\u0646 \u0648 \u0644\u0639\u0627\u0628\u200C\u06AF\u0631\u06CC \u06A9\u0648\u0631\u0647",
          "historicalContextFa": "\u062A\u0631\u06A9\u06CC\u0628 \u06A9\u0647\u0646 \u0632\u0646\u06AF\u0627\u0631 \u0645\u0633 \u0648 \u0627\u0633\u067E\u0631\u06A9 \u062F\u0631 \u0644\u0639\u0627\u0628\u200C\u0647\u0627\u06CC \u067E\u062E\u062A\u0647 \u06A9\u0648\u0631\u0647 \u0645\u0633\u062C\u062F \u062C\u0627\u0645\u0639 \u0639\u0628\u0627\u0633\u06CC"
        }
      },
      {
        "id": "isfahan-tiles-c4",
        "hex": "#D4AF37",
        "nameFa": "\u0637\u0644\u0627\u06CC\u06CC \u0627\u0633\u0644\u06CC\u0645\u06CC",
        "nameEn": "Arabesque Gold",
        "role": "\u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627 \u0648 \u062D\u0627\u0634\u06CC\u0647\u200C\u0647\u0627",
        "roleFa": "\u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627 \u0648 \u062D\u0627\u0634\u06CC\u0647\u200C\u0647\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u062A\u0627\u0628\u0634 \u0632\u0631\u06CC\u0646 \u062E\u0648\u0631\u0634\u06CC\u062F \u0628\u0631 \u0637\u0644\u0627\u06A9\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0645\u062D\u0631\u0627\u0628 \u0645\u0639\u0631\u0642",
        "meaningFa": "\u062A\u0627\u0628\u0634 \u0632\u0631\u06CC\u0646 \u062E\u0648\u0631\u0634\u06CC\u062F \u0628\u0631 \u0637\u0644\u0627\u06A9\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0645\u062D\u0631\u0627\u0628 \u0645\u0639\u0631\u0642",
        "evidence": {
          "mineralogical": {
            "mineralName": "Elemental Gold",
            "mineralNameFa": "\u0648\u0631\u0642 \u0637\u0644\u0627\u06CC \u0646\u0627\u0628 \u06F2\u06F4 \u0639\u06CC\u0627\u0631 (\u062D\u0644\u06A9\u0627\u0631\u06CC \u0632\u0631\u06CC\u0646)",
            "chemicalFormula": "Au",
            "crystalSystem": "\u0645\u06A9\u0639\u0628\u06CC \u0648\u062C\u0647\u200C\u0645\u0631\u06A9\u0632 (FCC Metallic)",
            "traditionalExtraction": "\u06A9\u0648\u0628\u0634 \u0648\u0631\u0642 \u0637\u0644\u0627\u06CC \u0646\u0627\u0628 \u062F\u0631 \u067E\u0648\u0633\u062A \u0622\u0647\u0648 \u062A\u0627 \u0636\u062E\u0627\u0645\u062A \u0632\u06CC\u0631 \u06F0.\u06F1 \u0645\u06CC\u06A9\u0631\u0648\u0646 \u0648 \u062A\u062B\u0628\u06CC\u062A \u0628\u0627 \u0633\u0631\u06CC\u0634\u0645 \u0645\u0627\u0647\u06CC",
            "historicalManuscriptRef": "\u06AF\u0644\u0633\u062A\u0627\u0646 \u0647\u0646\u0631 - \u0642\u0627\u0636\u06CC \u0627\u062D\u0645\u062F \u0642\u0645\u06CC (\u06F1\u06F0\u06F1\u06F5 \u0647\u062C\u0631\u06CC)",
            "casNumber": "7440-57-5"
          },
          "geoSpatial": {
            "originSite": "Naqsh-e Jahan Mihrabs",
            "originSiteFa": "\u0645\u062D\u0631\u0627\u0628\u200C\u0647\u0627\u06CC \u0645\u0639\u0631\u0642 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646\u060C \u0627\u0635\u0641\u0647\u0627\u0646",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 115",
            "coordinates": {
              "lat": 32.6514,
              "lng": 51.6776,
              "altitudeMeters": 1574
            }
          },
          "spectral": {
            "peakWavelengthNm": 575,
            "dominantWavelengthNm": 580,
            "reflectanceRange": [
              0.15,
              0.85
            ],
            "fwhmNm": 65
          },
          "colorScience": {
            "oklab": {
              "L": 0.7665,
              "a": -26e-4,
              "b": 0.1387
            },
            "srgb": {
              "r": 212,
              "g": 175,
              "b": 55
            },
            "apca": {
              "contrastOnWhite": 40.4,
              "contrastOnBlack": -52.7,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0648\u0631\u0642 \u0637\u0644\u0627\u06CC \u0646\u0627\u0628 \u06F2\u06F4 \u0639\u06CC\u0627\u0631 (\u062D\u0644\u06A9\u0627\u0631\u06CC \u0632\u0631\u06CC\u0646)",
            "chemicalName": "Elemental Gold",
            "formula": "Au",
            "casNumber": "7440-57-5",
            "molarMass": "196.97 g/mol"
          },
          "geo": {
            "locationFa": "\u06A9\u0627\u062E \u0639\u0627\u0644\u06CC\u200C\u0642\u0627\u067E\u0648 \u0648 \u062A\u0627\u0644\u0627\u0631 \u0645\u0648\u0633\u06CC\u0642\u06CC\u060C \u0627\u0635\u0641\u0647\u0627\u0646",
            "latitude": 32.6571,
            "longitude": 51.6769,
            "elevationMeters": 1574,
            "unescoSiteId": "UNESCO Ref: 115"
          },
          "physics": {
            "dominantWavelengthNm": 574,
            "chromaOklab": 0.22,
            "spectralReflectancePeak": "575 nm",
            "cieLab": {
              "L": 72.5,
              "a": 5.2,
              "b": 62.1
            }
          },
          "artMovement": "\u062A\u0630\u0647\u06CC\u0628 \u0648 \u062A\u0634\u0639\u06CC\u0631 \u0635\u0641\u0648\u06CC",
          "historicalContextFa": "\u0637\u0644\u0627\u06A9\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0645\u062D\u0631\u0627\u0628 \u0645\u0639\u0631\u0642 \u0648 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u0632\u0631\u06CC\u0646 \u0639\u0644\u06CC\u0631\u0636\u0627 \u0639\u0628\u0627\u0633\u06CC \u062F\u0631 \u0639\u0627\u0644\u06CC\u200C\u0642\u0627\u067E\u0648"
        }
      },
      {
        "id": "isfahan-tiles-c5",
        "hex": "#F4F1DE",
        "nameFa": "\u0639\u0627\u062C\u06CC \u06AF\u0686\u06CC \u0645\u062D\u0631\u0627\u0628",
        "nameEn": "Alabaster Glaze",
        "role": "\u0645\u062A\u0646 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0628\u0627 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0628\u0627\u0644\u0627",
        "roleFa": "\u0645\u062A\u0646 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0628\u0627 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0628\u0627\u0644\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u067E\u06CC\u062F\u06CC \u0646\u0642\u0648\u0634 \u06AF\u0686\u200C\u0628\u0631\u06CC \u0648 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u062B\u0644\u062B \u0645\u0633\u062C\u062F \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647",
        "meaningFa": "\u0633\u067E\u06CC\u062F\u06CC \u0646\u0642\u0648\u0634 \u06AF\u0686\u200C\u0628\u0631\u06CC \u0648 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u062B\u0644\u062B \u0645\u0633\u062C\u062F \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647",
        "evidence": {
          "mineralogical": {
            "mineralName": "Calcium Sulfate Dihydrate",
            "mineralNameFa": "\u0633\u0646\u06AF \u06AF\u0686 \u067E\u062E\u062A\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u0645\u062D\u0631\u0627\u0628 (Gypsum)",
            "chemicalFormula": "CaSO\u2084\xB72H\u2082O",
            "crystalSystem": "\u0645\u0648\u0646\u0648\u06A9\u0644\u06CC\u0646\u06CC\u06A9 (Monoclinic)",
            "traditionalExtraction": "\u062A\u06A9\u0644\u06CC\u0633 \u0698\u06CC\u067E\u0633 \u062F\u0631 \u062F\u0645\u0627\u06CC \u06F1\u06F6\u06F0 \u062F\u0631\u062C\u0647 \u0633\u0627\u0646\u062A\u06CC\u200C\u06AF\u0631\u0627\u062F \u0648 \u0633\u0627\u06CC\u06CC\u062F\u0646 \u0628\u0627 \u0644\u0639\u0627\u0628 \u0633\u06CC\u0644\u06CC\u0633\u06CC \u0634\u0641\u0627\u0641",
            "historicalManuscriptRef": "\u0645\u0639\u0645\u0627\u0631\u06CC \u0633\u0646\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 - \u0627\u0633\u062A\u0627\u062F \u062D\u0633\u06CC\u0646 \u0644\u0631\u0632\u0627\u062F\u0647",
            "casNumber": "10101-41-4"
          },
          "geoSpatial": {
            "originSite": "Sheikh Lotfollah Sanctuary Dome",
            "originSiteFa": "\u06AF\u0646\u0628\u062F\u062E\u0627\u0646\u0647 \u0645\u0633\u062C\u062F \u0634\u06CC\u062E \u0644\u0637\u0641\u200C\u0627\u0644\u0644\u0647\u060C \u0627\u0635\u0641\u0647\u0627\u0646",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 115",
            "coordinates": {
              "lat": 32.6575,
              "lng": 51.6778,
              "altitudeMeters": 1574
            }
          },
          "spectral": {
            "peakWavelengthNm": 590,
            "dominantWavelengthNm": 585,
            "reflectanceRange": [
              0.75,
              0.95
            ],
            "fwhmNm": 120
          },
          "colorScience": {
            "oklab": {
              "L": 0.9554,
              "a": -42e-4,
              "b": 0.0249
            },
            "srgb": {
              "r": 244,
              "g": 241,
              "b": 222
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -89.7,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0633\u0646\u06AF \u06AF\u0686 \u067E\u062E\u062A\u0647 \u0645\u0647\u0646\u062F\u0633\u06CC \u0645\u062D\u0631\u0627\u0628 (Gypsum)",
            "chemicalName": "Calcium Sulfate Dihydrate",
            "formula": "CaSO\u2084\xB72H\u2082O",
            "casNumber": "10101-41-4",
            "molarMass": "172.17 g/mol"
          },
          "geo": {
            "locationFa": "\u0645\u062D\u0631\u0627\u0628 \u0627\u0648\u0644\u062C\u0627\u06CC\u062A\u0648\u060C \u0645\u0633\u062C\u062F \u062C\u0627\u0645\u0639 \u0639\u062A\u06CC\u0642 \u0627\u0635\u0641\u0647\u0627\u0646",
            "latitude": 32.6686,
            "longitude": 51.6853,
            "elevationMeters": 1578,
            "unescoSiteId": "UNESCO Ref: 1397 (Masjed-e J\u0101m\xE9)"
          },
          "physics": {
            "dominantWavelengthNm": 560,
            "chromaOklab": 0.04,
            "spectralReflectancePeak": "562 nm",
            "cieLab": {
              "L": 95.2,
              "a": -1.2,
              "b": 8.4
            }
          },
          "artMovement": "\u06AF\u0686\u200C\u0628\u0631\u06CC \u0627\u06CC\u0644\u062E\u0627\u0646\u06CC \u0648 \u0633\u0644\u062C\u0648\u0642\u06CC \u0627\u0635\u0641\u0647\u0627\u0646",
          "historicalContextFa": "\u06AF\u0686\u200C\u0628\u0631\u06CC\u200C\u0647\u0627\u06CC \u0632\u0645\u06CC\u0646\u0647 \u062B\u0644\u062B \u0648 \u0627\u0633\u0644\u06CC\u0645\u06CC \u0645\u062D\u0631\u0627\u0628 \u0633\u0644\u0637\u0627\u0646 \u0645\u062D\u0645\u062F \u0627\u0648\u0644\u062C\u0627\u06CC\u062A\u0648"
        }
      },
      {
        "id": "isfahan-tiles-c6",
        "hex": "#0B132B",
        "nameFa": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u0645\u0642\u0631\u0646\u0633",
        "nameEn": "Midnight Muqarnas",
        "role": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0639\u0645\u06CC\u0642 \u0633\u0627\u0632\u0647\u200C\u0627\u06CC",
        "roleFa": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0639\u0645\u06CC\u0642 \u0633\u0627\u0632\u0647\u200C\u0627\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u062A\u0627\u0631\u06CC\u06A9\u06CC \u0698\u0631\u0641 \u06A9\u0627\u0633\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0645\u0642\u0631\u0646\u0633 \u0648 \u0639\u0645\u0642 \u0647\u0646\u062F\u0633\u06CC",
        "meaningFa": "\u062A\u0627\u0631\u06CC\u06A9\u06CC \u0698\u0631\u0641 \u06A9\u0627\u0633\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0645\u0642\u0631\u0646\u0633 \u0648 \u0639\u0645\u0642 \u0647\u0646\u062F\u0633\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Cobalt(II,III) Oxide Complex",
            "mineralNameFa": "\u0627\u06A9\u0633\u06CC\u062F \u06A9\u0628\u0627\u0644\u062A \u062A\u06CC\u0631\u0647 \u0648 \u062F\u0648\u062F\u0647 \u0633\u0646\u062A\u06CC",
            "chemicalFormula": "Co\u2083O\u2084 + C",
            "crystalSystem": "\u062A\u062A\u0631\u0627\u06AF\u0648\u0646\u0627\u0644 (Tetragonal)",
            "traditionalExtraction": "\u0622\u0633\u06CC\u0627\u0628 \u0627\u06A9\u0633\u06CC\u062F \u0645\u0646\u06AF\u0646\u0632 \u0645\u0639\u062F\u0646\u06CC \u062F\u0631 \u0622\u0633\u06CC\u0627\u0628 \u0622\u0628\u06CC \u0633\u0646\u06AF\u06CC \u0648 \u062A\u0631\u06A9\u06CC\u0628 \u0628\u0627 \u0628\u0648\u0631\u0647 \u062C\u0647\u062A \u0645\u0631\u0632\u0628\u0646\u062F\u06CC \u0647\u0641\u062A\u200C\u0631\u0646\u06AF",
            "historicalManuscriptRef": "\u062C\u0648\u0627\u0647\u0631\u0646\u0627\u0645\u0647 \u0646\u0638\u0627\u0645\u06CC - \u0645\u062D\u0645\u062F \u0628\u0646 \u0627\u0628\u06CC\u200C\u0627\u0644\u0628\u0631\u06A9\u0627\u062A \u062C\u0648\u0647\u0631\u06CC \u0646\u06CC\u0634\u0627\u0628\u0648\u0631\u06CC",
            "casNumber": "1307-96-6"
          },
          "geoSpatial": {
            "originSite": "Muqarnas Vaults of Isfahan",
            "originSiteFa": "\u06A9\u0627\u0633\u0647 \u0645\u0642\u0631\u0646\u0633\u200C\u0647\u0627\u06CC \u0633\u0631\u062F\u0631 \u0639\u0628\u0627\u0633\u06CC\u060C \u0627\u0635\u0641\u0647\u0627\u0646",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 115",
            "coordinates": {
              "lat": 32.6514,
              "lng": 51.6776,
              "altitudeMeters": 1574
            }
          },
          "spectral": {
            "peakWavelengthNm": 440,
            "dominantWavelengthNm": 445,
            "reflectanceRange": [
              0.01,
              0.12
            ],
            "fwhmNm": 35
          },
          "colorScience": {
            "oklab": {
              "L": 0.1944,
              "a": -2e-3,
              "b": -0.0498
            },
            "srgb": {
              "r": 11,
              "g": 19,
              "b": 43
            },
            "apca": {
              "contrastOnWhite": 104.6,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0627\u06A9\u0633\u06CC\u062F \u06A9\u0628\u0627\u0644\u062A \u062A\u06CC\u0631\u0647 \u0648 \u062F\u0648\u062F\u0647 \u0633\u0646\u062A\u06CC",
            "chemicalName": "Cobalt(II,III) Oxide Complex",
            "formula": "Co\u2083O\u2084 + C",
            "casNumber": "1307-96-6",
            "molarMass": "240.8 g/mol"
          },
          "geo": {
            "locationFa": "\u0633\u0631\u062F\u0631 \u0648\u0631\u0648\u062F\u06CC \u0648 \u0627\u06CC\u0648\u0627\u0646 \u0634\u0645\u0627\u0644\u06CC \u0645\u0633\u062C\u062F \u0634\u0627\u0647 \u0627\u0635\u0641\u0647\u0627\u0646",
            "latitude": 32.6521,
            "longitude": 51.6773,
            "elevationMeters": 1574,
            "unescoSiteId": "UNESCO Ref: 115"
          },
          "physics": {
            "dominantWavelengthNm": 460,
            "chromaOklab": 0.12,
            "spectralReflectancePeak": "462 nm",
            "cieLab": {
              "L": 8.2,
              "a": 8.1,
              "b": -25.4
            }
          },
          "artMovement": "\u0645\u0639\u0645\u0627\u0631\u06CC \u0635\u0641\u0648\u06CC \u0648 \u0645\u0642\u0631\u0646\u0633\u200C\u06A9\u0627\u0631\u06CC \u06A9\u0627\u0633\u0647\u200C\u0627\u06CC",
          "historicalContextFa": "\u0633\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0698\u0631\u0641 \u06A9\u0627\u0633\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0645\u0642\u0631\u0646\u0633 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627 \u0648 \u0627\u0632\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u0633\u0646\u06AF\u06CC"
        }
      }
    ]
  },
  "achaemenid-majesty": {
    "id": "achaemenid-majesty",
    "category": "history",
    "nameFa": "\u0634\u06A9\u0648\u0647 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
    "nameEn": "Achaemenid Majesty & Persepolis",
    "description": "\u062E\u0627\u06A9 \u0633\u0631\u062E \u067E\u0627\u0631\u0633\u060C \u0637\u0644\u0627\u06CC \u06A9\u0647\u0646 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC\u060C \u0633\u062A\u0648\u0646\u200C\u0647\u0627\u06CC \u0633\u0646\u06AF\u06CC \u0645\u0631\u0645\u0631 \u0634\u0648\u0634 \u0648 \u067E\u0627\u0631\u0633\u0647 \u0648 \u062F\u0631\u0641\u0634\u200C\u0647\u0627\u06CC \u0634\u0647\u0628\u0627\u0632 \u0628\u0627 \u0642\u062F\u0645\u062A \u06F2\u06F5\u06F0\u06F0 \u0633\u0627\u0644 \u062A\u0645\u062F\u0646 \u0634\u0627\u0647\u0646\u0634\u0627\u0647\u06CC.",
    "descriptionFa": "\u062E\u0627\u06A9 \u0633\u0631\u062E \u067E\u0627\u0631\u0633\u060C \u0637\u0644\u0627\u06CC \u06A9\u0647\u0646 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC\u060C \u0633\u062A\u0648\u0646\u200C\u0647\u0627\u06CC \u0633\u0646\u06AF\u06CC \u0645\u0631\u0645\u0631 \u0634\u0648\u0634 \u0648 \u067E\u0627\u0631\u0633\u0647 \u0648 \u062F\u0631\u0641\u0634\u200C\u0647\u0627\u06CC \u0634\u0647\u0628\u0627\u0632 \u0628\u0627 \u0642\u062F\u0645\u062A \u06F2\u06F5\u06F0\u06F0 \u0633\u0627\u0644 \u062A\u0645\u062F\u0646 \u0634\u0627\u0647\u0646\u0634\u0627\u0647\u06CC.",
    "culturalContext": "\u06A9\u0627\u062E \u062A\u0686\u0631\u060C \u0647\u062F\u06CC\u0634\u060C \u062F\u0631\u0648\u0627\u0632\u0647 \u0645\u0644\u0644 \u0648 \u067E\u0644\u06A9\u0627\u0646 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u062F\u0631 \u067E\u0627\u0631\u0633\u0647 (\u0645\u0631\u0648\u062F\u0634\u062A \u0634\u06CC\u0631\u0627\u0632)",
    "culturalContextFa": "\u06A9\u0627\u062E \u062A\u0686\u0631\u060C \u0647\u062F\u06CC\u0634\u060C \u062F\u0631\u0648\u0627\u0632\u0647 \u0645\u0644\u0644 \u0648 \u067E\u0644\u06A9\u0627\u0646 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u062F\u0631 \u067E\u0627\u0631\u0633\u0647 (\u0645\u0631\u0648\u062F\u0634\u062A \u0634\u06CC\u0631\u0627\u0632)",
    "unescoRef": "\u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F1\u06F9\u06F7\u06F9)",
    "unescoRefFa": "\u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F1\u06F9\u06F7\u06F9)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Persepolis_stairs_of_the_Apadana_relief.jpg/960px-Persepolis_stairs_of_the_Apadana_relief.jpg",
    "colors": [
      {
        "id": "achaemenid-majesty-c1",
        "hex": "#CC3333",
        "nameFa": "\u0633\u0631\u062E \u067E\u0627\u0631\u0633\u06CC \u0627\u0635\u06CC\u0644 (Persian Red)",
        "nameEn": "Persian Red",
        "role": "\u062F\u0631\u0641\u0634 \u0634\u0647\u0628\u0627\u0632 \u0648 \u0646\u0645\u0627\u062F \u0642\u062F\u0631\u062A",
        "roleFa": "\u062F\u0631\u0641\u0634 \u0634\u0647\u0628\u0627\u0632 \u0648 \u0646\u0645\u0627\u062F \u0642\u062F\u0631\u062A",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u062C\u0647\u0627\u0646\u06CC \u0628\u0627 \u0627\u0644\u0647\u0627\u0645 \u0627\u0632 \u062E\u0627\u06A9 \u0633\u0631\u062E \u067E\u0627\u0631\u0633",
        "meaningFa": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u062C\u0647\u0627\u0646\u06CC \u0628\u0627 \u0627\u0644\u0647\u0627\u0645 \u0627\u0632 \u062E\u0627\u06A9 \u0633\u0631\u062E \u067E\u0627\u0631\u0633",
        "evidence": {
          "mineralogical": {
            "mineralName": "Hormuz Hematite Persian Red",
            "mineralNameFa": "\u06AF\u0644 \u0627\u062E\u0631\u0627 \u0642\u0631\u0645\u0632 \u062C\u0632\u06CC\u0631\u0647 \u0647\u0631\u0645\u0632",
            "chemicalFormula": "alpha-Fe2O3 (Hematite 92%)",
            "crystalSystem": "\u062A\u0631\u06CC\u200C\u06AF\u0648\u0646\u0627\u0644 (Trigonal Rhombohedral)",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u062F\u0633\u062A\u06CC \u062E\u0627\u06A9 \u0633\u0631\u062E \u0633\u0627\u062D\u0644 \u0647\u0631\u0645\u0632\u060C \u0634\u0633\u062A\u0634\u0648 \u062F\u0631 \u062D\u0648\u0636\u0686\u0647\u200C\u0647\u0627\u06CC \u062A\u0647\u200C\u0646\u0634\u06CC\u0646\u06CC \u0648 \u062E\u0634\u06A9\u200C\u06A9\u0631\u062F\u0646 \u0628\u0627 \u0646\u0648\u0631 \u062E\u0648\u0631\u0634\u06CC\u062F",
            "historicalManuscriptRef": "\u0622\u062B\u0627\u0631 \u0627\u0644\u0628\u0644\u0627\u062F \u0648 \u0627\u062E\u0628\u0627\u0631 \u0627\u0644\u0639\u0628\u0627\u062F - \u0632\u06A9\u0631\u06CC\u0627 \u0642\u0632\u0648\u06CC\u0646\u06CC",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Rainbow Island Hormuz / Persepolis",
            "originSiteFa": "\u062C\u0632\u06CC\u0631\u0647 \u0647\u0631\u0645\u0632 \u0648 \u0628\u0627\u0631\u06AF\u0627\u0647 \u0622\u067E\u0627\u062F\u0627\u0646\u0627\u060C \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 114 (Persepolis)",
            "coordinates": {
              "lat": 27.0628,
              "lng": 56.4589,
              "altitudeMeters": 15
            }
          },
          "spectral": {
            "peakWavelengthNm": 640,
            "dominantWavelengthNm": 635,
            "reflectanceRange": [
              0.04,
              0.58
            ],
            "fwhmNm": 70
          },
          "colorScience": {
            "oklab": {
              "L": 0.5594,
              "a": 0.1709,
              "b": 0.0829
            },
            "srgb": {
              "r": 204,
              "g": 51,
              "b": 51
            },
            "apca": {
              "contrastOnWhite": 73.2,
              "contrastOnBlack": -19.1,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u06AF\u0644 \u0627\u062E\u0631\u0627 \u0642\u0631\u0645\u0632 \u062C\u0632\u06CC\u0631\u0647 \u0647\u0631\u0645\u0632",
            "chemicalName": "Hormuz Hematite Persian Red",
            "formula": "alpha-Fe2O3 (Hematite 92%)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u062C\u0632\u06CC\u0631\u0647 \u0647\u0631\u0645\u0632 \u0648 \u0628\u0627\u0631\u06AF\u0627\u0647 \u0622\u067E\u0627\u062F\u0627\u0646\u0627\u060C \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
            "latitude": 27.0628,
            "longitude": 56.4589,
            "elevationMeters": 15,
            "unescoSiteId": "UNESCO World Heritage Ref: 114 (Persepolis)"
          },
          "physics": {
            "dominantWavelengthNm": 635,
            "chromaOklab": 0.19,
            "spectralReflectancePeak": "640 nm",
            "cieLab": {
              "L": 46.2,
              "a": 59.1,
              "b": 37.1
            }
          },
          "artMovement": "\u0634\u06A9\u0648\u0647 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
          "historicalContextFa": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u062C\u0647\u0627\u0646\u06CC \u0628\u0627 \u0627\u0644\u0647\u0627\u0645 \u0627\u0632 \u062E\u0627\u06A9 \u0633\u0631\u062E \u067E\u0627\u0631\u0633"
        }
      },
      {
        "id": "achaemenid-majesty-c2",
        "hex": "#CFB53B",
        "nameFa": "\u0637\u0644\u0627\u06CC \u0634\u0627\u0647\u0646\u0634\u0627\u0647\u06CC (Old Gold)",
        "nameEn": "Old Gold",
        "role": "\u062F\u0631\u062E\u0634\u0634 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627 \u0648 \u062A\u0627\u062C",
        "roleFa": "\u062F\u0631\u062E\u0634\u0634 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627 \u0648 \u062A\u0627\u062C",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0637\u0644\u0627\u06CC \u06A9\u0647\u0646 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u06A9\u0627\u062E \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
        "meaningFa": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0637\u0644\u0627\u06CC \u06A9\u0647\u0646 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u06A9\u0627\u062E \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
        "evidence": {
          "mineralogical": {
            "mineralName": "Native Electrum & Imperial Gold",
            "mineralNameFa": "\u0627\u0644\u06A9\u062A\u0631\u0648\u0645 \u0632\u0631 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC",
            "chemicalFormula": "Au75-Ag20-Cu5 Alloy",
            "crystalSystem": "\u0645\u062A\u0627\u0644\u0648\u0631\u0698\u06CC \u0628\u0627\u0633\u062A\u0627\u0646\u06CC (Archaeometallurgical)",
            "traditionalExtraction": "\u0631\u06CC\u062E\u062A\u0647\u200C\u06AF\u0631\u06CC \u0645\u0648\u0645 \u06AF\u0645\u0634\u062F\u0647 \u0648 \u0686\u06A9\u0634\u200C\u06A9\u0627\u0631\u06CC \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u0637\u0644\u0627\u06CC\u06CC \u06A9\u0627\u062E \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
            "historicalManuscriptRef": "\u06A9\u062A\u06CC\u0628\u0647 \u067E\u06CC\u200C\u0628\u0646\u0627\u06CC \u062F\u0627\u0631\u06CC\u0648\u0634 \u0628\u0632\u0631\u06AF \u062F\u0631 \u0634\u0648\u0634 (DSf)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Persepolis Treasury & Apadana",
            "originSiteFa": "\u062E\u0632\u0627\u0646\u0647 \u0648 \u062A\u0627\u0644\u0627\u0631 \u0635\u062F\u0633\u062A\u0648\u0646 \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F\u060C \u0641\u0627\u0631\u0633",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 114",
            "coordinates": {
              "lat": 29.9351,
              "lng": 52.8916,
              "altitudeMeters": 1620
            }
          },
          "spectral": {
            "peakWavelengthNm": 580,
            "dominantWavelengthNm": 578,
            "reflectanceRange": [
              0.18,
              0.82
            ],
            "fwhmNm": 60
          },
          "colorScience": {
            "oklab": {
              "L": 0.7742,
              "a": -0.0165,
              "b": 0.1383
            },
            "srgb": {
              "r": 207,
              "g": 181,
              "b": 59
            },
            "apca": {
              "contrastOnWhite": 38.8,
              "contrastOnBlack": -54.3,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0627\u0644\u06A9\u062A\u0631\u0648\u0645 \u0632\u0631 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC",
            "chemicalName": "Native Electrum & Imperial Gold",
            "formula": "Au75-Ag20-Cu5 Alloy",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u062E\u0632\u0627\u0646\u0647 \u0648 \u062A\u0627\u0644\u0627\u0631 \u0635\u062F\u0633\u062A\u0648\u0646 \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F\u060C \u0641\u0627\u0631\u0633",
            "latitude": 29.9351,
            "longitude": 52.8916,
            "elevationMeters": 1620,
            "unescoSiteId": "UNESCO World Heritage Ref: 114"
          },
          "physics": {
            "dominantWavelengthNm": 578,
            "chromaOklab": 0.139,
            "spectralReflectancePeak": "580 nm",
            "cieLab": {
              "L": 74,
              "a": -3.8,
              "b": 62.3
            }
          },
          "artMovement": "\u0634\u06A9\u0648\u0647 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
          "historicalContextFa": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0637\u0644\u0627\u06CC \u06A9\u0647\u0646 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u06A9\u0627\u062E \u0622\u067E\u0627\u062F\u0627\u0646\u0627"
        }
      },
      {
        "id": "achaemenid-majesty-c3",
        "hex": "#1D3557",
        "nameFa": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u067E\u0627\u0631\u0633\u0647",
        "nameEn": "Persepolis Deep Navy",
        "role": "\u0631\u0646\u06AF \u0644\u0628\u0627\u062F\u0647 \u0634\u0627\u0647\u0627\u0646",
        "roleFa": "\u0631\u0646\u06AF \u0644\u0628\u0627\u062F\u0647 \u0634\u0627\u0647\u0627\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0641\u0627\u062E\u0631 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0634\u062F\u0647 \u0628\u0627 \u0635\u062F\u0641\u200C\u0647\u0627\u06CC \u0634\u0627\u0647\u06CC \u0628\u0627\u0633\u062A\u0627\u0646",
        "meaningFa": "\u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0641\u0627\u062E\u0631 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0634\u062F\u0647 \u0628\u0627 \u0635\u062F\u0641\u200C\u0647\u0627\u06CC \u0634\u0627\u0647\u06CC \u0628\u0627\u0633\u062A\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Pasargadae Indigofera Tinctoria",
            "mineralNameFa": "\u0646\u06CC\u0644 \u0634\u0627\u0647\u06CC \u067E\u0627\u0633\u0627\u0631\u06AF\u0627\u062F",
            "chemicalFormula": "C16H10N2O2 (Indigotin)",
            "crystalSystem": "\u0645\u0648\u0646\u0648\u06A9\u0644\u06CC\u0646\u06CC\u06A9 \u0622\u0644\u06CC (Organic Molecular)",
            "traditionalExtraction": "\u062A\u062E\u0645\u06CC\u0631 \u0628\u06CC \u0647\u0648\u0627\u0632\u06CC \u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0648\u0633\u0645\u0647 \u0648 \u0646\u06CC\u0644 \u062F\u0631 \u062E\u0645\u0631\u0647\u200C\u0647\u0627\u06CC \u0633\u0641\u0627\u0644\u06CC \u0628\u0627 \u0634\u06CC\u0631\u0647 \u0642\u0644\u06CC\u0627\u0628",
            "historicalManuscriptRef": "\u062A\u0627\u0631\u06CC\u062E \u0637\u0628\u06CC\u0639\u06CC \u067E\u0644\u06CC\u0646\u06CC (Naturalis Historia) - \u06A9\u062A\u0627\u0628 \u06F3\u06F3",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Pasargadae Imperial Enclosure",
            "originSiteFa": "\u062F\u0634\u062A \u0645\u0631\u063A\u0627\u0628\u060C \u0622\u0631\u0627\u0645\u06AF\u0627\u0647 \u06A9\u0648\u0631\u0648\u0634 \u0628\u0632\u0631\u06AF\u060C \u067E\u0627\u0633\u0627\u0631\u06AF\u0627\u062F",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 1106 (Pasargadae)",
            "coordinates": {
              "lat": 30.2003,
              "lng": 53.1772,
              "altitudeMeters": 1900
            }
          },
          "spectral": {
            "peakWavelengthNm": 460,
            "dominantWavelengthNm": 465,
            "reflectanceRange": [
              0.03,
              0.32
            ],
            "fwhmNm": 42
          },
          "colorScience": {
            "oklab": {
              "L": 0.3276,
              "a": -0.0149,
              "b": -0.0661
            },
            "srgb": {
              "r": 29,
              "g": 53,
              "b": 87
            },
            "apca": {
              "contrastOnWhite": 97.5,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0646\u06CC\u0644 \u0634\u0627\u0647\u06CC \u067E\u0627\u0633\u0627\u0631\u06AF\u0627\u062F",
            "chemicalName": "Pasargadae Indigofera Tinctoria",
            "formula": "C16H10N2O2 (Indigotin)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u062F\u0634\u062A \u0645\u0631\u063A\u0627\u0628\u060C \u0622\u0631\u0627\u0645\u06AF\u0627\u0647 \u06A9\u0648\u0631\u0648\u0634 \u0628\u0632\u0631\u06AF\u060C \u067E\u0627\u0633\u0627\u0631\u06AF\u0627\u062F",
            "latitude": 30.2003,
            "longitude": 53.1772,
            "elevationMeters": 1900,
            "unescoSiteId": "UNESCO World Heritage Ref: 1106 (Pasargadae)"
          },
          "physics": {
            "dominantWavelengthNm": 465,
            "chromaOklab": 0.068,
            "spectralReflectancePeak": "460 nm",
            "cieLab": {
              "L": 21.9,
              "a": 2.9,
              "b": -23.3
            }
          },
          "artMovement": "\u0634\u06A9\u0648\u0647 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
          "historicalContextFa": "\u067E\u0627\u0631\u0686\u0647\u200C\u0647\u0627\u06CC \u0641\u0627\u062E\u0631 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0634\u062F\u0647 \u0628\u0627 \u0635\u062F\u0641\u200C\u0647\u0627\u06CC \u0634\u0627\u0647\u06CC \u0628\u0627\u0633\u062A\u0627\u0646"
        }
      },
      {
        "id": "achaemenid-majesty-c4",
        "hex": "#2D6A4F",
        "nameFa": "\u06CC\u0634\u0645 \u0628\u0627\u0633\u062A\u0627\u0646\u06CC",
        "nameEn": "Ancient Royal Jade",
        "role": "\u0633\u0646\u06AF\u200C\u0647\u0627 \u0648 \u0645\u0647\u0631\u0647\u0627\u06CC \u0627\u0633\u062A\u0648\u0627\u0646\u0647\u200C\u0627\u06CC",
        "roleFa": "\u0633\u0646\u06AF\u200C\u0647\u0627 \u0648 \u0645\u0647\u0631\u0647\u0627\u06CC \u0627\u0633\u062A\u0648\u0627\u0646\u0647\u200C\u0627\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0638\u0631\u0648\u0641 \u0633\u0646\u06AF\u06CC \u06CC\u0634\u0645 \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u067E\u06CC\u0634\u06A9\u0634\u06CC \u0645\u0644\u0644 \u0628\u0647 \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
        "meaningFa": "\u0638\u0631\u0648\u0641 \u0633\u0646\u06AF\u06CC \u06CC\u0634\u0645 \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u067E\u06CC\u0634\u06A9\u0634\u06CC \u0645\u0644\u0644 \u0628\u0647 \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
        "evidence": {
          "mineralogical": {
            "mineralName": "Apadana Bituminous Grey Basalt",
            "mineralNameFa": "\u0633\u0646\u06AF \u062E\u0627\u06A9\u0633\u062A\u0631\u06CC \u0642\u06CC\u0631\u062F\u0627\u0631 \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
            "chemicalFormula": "CaCO3 + Bituminous Hydrocarbons",
            "crystalSystem": "\u0645\u06CC\u06A9\u0631\u0648\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0631\u0633\u0648\u0628\u06CC",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u06AF \u0627\u0632 \u06A9\u0648\u0647 \u0631\u062D\u0645\u062A \u0628\u0627 \u0642\u0644\u0645 \u0648 \u0686\u06A9\u0634 \u0645\u0641\u0631\u063A\u06CC \u0648 \u067E\u0648\u0644\u06CC\u0634 \u0628\u0627 \u0686\u0631\u0645 \u0648 \u062E\u0627\u06A9\u0633\u062A\u0631",
            "historicalManuscriptRef": "\u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u0628\u0627\u0631\u0639\u0627\u0645 \u062E\u0634\u0627\u06CC\u0627\u0631\u0634\u0627 \u062F\u0631 \u062F\u0631\u06AF\u0627\u0647 \u0634\u0631\u0642\u06CC \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Apadana Palace Reliefs, Persepolis",
            "originSiteFa": "\u0646\u0642\u0648\u0634 \u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0627\u062E \u0622\u067E\u0627\u062F\u0627\u0646\u0627\u060C \u0645\u0631\u0648\u062F\u0634\u062A",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 114",
            "coordinates": {
              "lat": 29.9351,
              "lng": 52.8916,
              "altitudeMeters": 1620
            }
          },
          "spectral": {
            "peakWavelengthNm": 550,
            "dominantWavelengthNm": 555,
            "reflectanceRange": [
              0.15,
              0.4
            ],
            "fwhmNm": 100
          },
          "colorScience": {
            "oklab": {
              "L": 0.4758,
              "a": -0.0739,
              "b": 0.0238
            },
            "srgb": {
              "r": 45,
              "g": 106,
              "b": 79
            },
            "apca": {
              "contrastOnWhite": 80.9,
              "contrastOnBlack": -11.7,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0633\u0646\u06AF \u062E\u0627\u06A9\u0633\u062A\u0631\u06CC \u0642\u06CC\u0631\u062F\u0627\u0631 \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
            "chemicalName": "Apadana Bituminous Grey Basalt",
            "formula": "CaCO3 + Bituminous Hydrocarbons",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0646\u0642\u0648\u0634 \u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0627\u062E \u0622\u067E\u0627\u062F\u0627\u0646\u0627\u060C \u0645\u0631\u0648\u062F\u0634\u062A",
            "latitude": 29.9351,
            "longitude": 52.8916,
            "elevationMeters": 1620,
            "unescoSiteId": "UNESCO World Heritage Ref: 114"
          },
          "physics": {
            "dominantWavelengthNm": 555,
            "chromaOklab": 0.078,
            "spectralReflectancePeak": "550 nm",
            "cieLab": {
              "L": 40.3,
              "a": -26.8,
              "b": 9.3
            }
          },
          "artMovement": "\u0634\u06A9\u0648\u0647 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
          "historicalContextFa": "\u0638\u0631\u0648\u0641 \u0633\u0646\u06AF\u06CC \u06CC\u0634\u0645 \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u067E\u06CC\u0634\u06A9\u0634\u06CC \u0645\u0644\u0644 \u0628\u0647 \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F"
        }
      },
      {
        "id": "achaemenid-majesty-c5",
        "hex": "#FDFBF7",
        "nameFa": "\u0633\u0646\u06AF \u0645\u0631\u0645\u0631 \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
        "nameEn": "Apadana Alabaster",
        "role": "\u0633\u062A\u0648\u0646\u200C\u0647\u0627 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleFa": "\u0633\u062A\u0648\u0646\u200C\u0647\u0627 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0635\u06CC\u0642\u0644\u06CC \u0622\u0647\u06A9\u06CC \u0648 \u0645\u0631\u0645\u0631\u06CC\u0646 \u062A\u0627\u0644\u0627\u0631 \u0633\u062A\u0648\u0646\u200C\u062F\u0627\u0631",
        "meaningFa": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0635\u06CC\u0642\u0644\u06CC \u0622\u0647\u06A9\u06CC \u0648 \u0645\u0631\u0645\u0631\u06CC\u0646 \u062A\u0627\u0644\u0627\u0631 \u0633\u062A\u0648\u0646\u200C\u062F\u0627\u0631",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persepolis Quartz Sandstone",
            "mineralNameFa": "\u0645\u0627\u0633\u0647\u200C\u0633\u0646\u06AF \u06A9\u0648\u0627\u0631\u062A\u0632\u06CC \u0635\u0641\u0647 \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
            "chemicalFormula": "SiO2 + CaCO3 Matrix",
            "crystalSystem": "\u06A9\u0648\u0627\u0631\u062A\u0632 \u0647\u06AF\u0632\u0627\u06AF\u0648\u0646\u0627\u0644",
            "traditionalExtraction": "\u0628\u0631\u0634 \u0628\u0644\u0648\u06A9\u200C\u0647\u0627\u06CC \u0639\u0638\u06CC\u0645 \u0633\u0646\u06AF\u06CC \u06A9\u0648\u0647 \u0645\u0647\u0631 \u0648 \u0645\u0647\u0627\u0631 \u0628\u0627 \u0628\u0633\u062A\u200C\u0647\u0627\u06CC \u062F\u0645 \u0686\u0644\u0686\u0644\u0647\u200C\u0627\u06CC \u0633\u0631\u0628\u06CC",
            "historicalManuscriptRef": "\u0627\u0644\u0648\u0627\u062D \u0628\u0627\u0631\u0648\u06CC \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F (Fortification Tablets)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Tachara & Palace of Xerxes",
            "originSiteFa": "\u06A9\u0627\u062E \u062A\u0686\u0631 \u0648 \u0647\u062F\u06CC\u0634\u060C \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 114",
            "coordinates": {
              "lat": 29.9351,
              "lng": 52.8916,
              "altitudeMeters": 1620
            }
          },
          "spectral": {
            "peakWavelengthNm": 585,
            "dominantWavelengthNm": 582,
            "reflectanceRange": [
              0.55,
              0.88
            ],
            "fwhmNm": 90
          },
          "colorScience": {
            "oklab": {
              "L": 0.9885,
              "a": 5e-4,
              "b": 57e-4
            },
            "srgb": {
              "r": 253,
              "g": 251,
              "b": 247
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -96.7,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0645\u0627\u0633\u0647\u200C\u0633\u0646\u06AF \u06A9\u0648\u0627\u0631\u062A\u0632\u06CC \u0635\u0641\u0647 \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
            "chemicalName": "Persepolis Quartz Sandstone",
            "formula": "SiO2 + CaCO3 Matrix",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u06A9\u0627\u062E \u062A\u0686\u0631 \u0648 \u0647\u062F\u06CC\u0634\u060C \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
            "latitude": 29.9351,
            "longitude": 52.8916,
            "elevationMeters": 1620,
            "unescoSiteId": "UNESCO World Heritage Ref: 114"
          },
          "physics": {
            "dominantWavelengthNm": 582,
            "chromaOklab": 6e-3,
            "spectralReflectancePeak": "585 nm",
            "cieLab": {
              "L": 98.7,
              "a": -0,
              "b": 2.1
            }
          },
          "artMovement": "\u0634\u06A9\u0648\u0647 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
          "historicalContextFa": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0635\u06CC\u0642\u0644\u06CC \u0622\u0647\u06A9\u06CC \u0648 \u0645\u0631\u0645\u0631\u06CC\u0646 \u062A\u0627\u0644\u0627\u0631 \u0633\u062A\u0648\u0646\u200C\u062F\u0627\u0631"
        }
      },
      {
        "id": "achaemenid-majesty-c6",
        "hex": "#1B1F24",
        "nameFa": "\u0633\u0646\u06AF \u0633\u06CC\u0627\u0647 \u062A\u0686\u0631",
        "nameEn": "Tacara Basalt Black",
        "role": "\u067E\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0633\u0646\u06AF\u06CC \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A",
        "roleFa": "\u067E\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0633\u0646\u06AF\u06CC \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0644\u062A \u0633\u06CC\u0627\u0647 \u0635\u06CC\u0642\u0644\u06CC \u06A9\u0627\u062E \u062F\u0627\u0631\u06CC\u0648\u0634 (\u062A\u0627\u0644\u0627\u0631 \u0622\u06CC\u0646\u0647)",
        "meaningFa": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0644\u062A \u0633\u06CC\u0627\u0647 \u0635\u06CC\u0642\u0644\u06CC \u06A9\u0627\u062E \u062F\u0627\u0631\u06CC\u0648\u0634 (\u062A\u0627\u0644\u0627\u0631 \u0622\u06CC\u0646\u0647)",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Archaeometallurgical Bronze",
            "mineralNameFa": "\u0645\u0641\u0631\u063A \u0628\u0627\u0633\u062A\u0627\u0646\u06CC \u0644\u0631\u0633\u062A\u0627\u0646 \u0648 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC",
            "chemicalFormula": "Cu88-Sn12 Alloy",
            "crystalSystem": "\u0622\u0644\u06CC\u0627\u0698 \u062F\u0648\u0641\u0627\u0632\u06CC \u0627\u0644\u0641\u0627-\u062F\u0644\u062A\u0627 \u0645\u0633-\u0642\u0644\u0639",
            "traditionalExtraction": "\u0630\u0648\u0628 \u0647\u0645\u0632\u0645\u0627\u0646 \u06A9\u0627\u0644\u06A9\u0648\u067E\u06CC\u0631\u06CC\u062A \u0648 \u06A9\u0627\u0633\u06CC\u062A\u0631\u06CC\u062A \u062F\u0631 \u06A9\u0648\u0631\u0647\u200C\u0647\u0627\u06CC \u062F\u0645\u0634 \u0628\u0627\u062F\u06CC \u0628\u0627\u0633\u062A\u0627\u0646\u06CC",
            "historicalManuscriptRef": "\u0628\u0627\u0633\u062A\u0627\u0646\u200C\u0634\u0646\u0627\u0633\u06CC \u0641\u0644\u0632\u06A9\u0627\u0631\u06CC \u06A9\u0647\u0646 \u0627\u06CC\u0631\u0627\u0646 - \u0631\u0648\u0645\u0646 \u06AF\u06CC\u0631\u0634\u0645\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Persepolis Armory & Lorestan Sites",
            "originSiteFa": "\u0627\u0633\u0644\u062D\u0647\u200C\u062E\u0627\u0646\u0647 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u0648 \u0645\u062D\u0648\u0637\u0647\u200C\u0647\u0627\u06CC \u0645\u0641\u0631\u063A \u0628\u0627\u0633\u062A\u0627\u0646\u06CC",
            "unescoHeritageRef": "UNESCO World Heritage Ref: 114",
            "coordinates": {
              "lat": 29.9351,
              "lng": 52.8916,
              "altitudeMeters": 1620
            }
          },
          "spectral": {
            "peakWavelengthNm": 530,
            "dominantWavelengthNm": 535,
            "reflectanceRange": [
              0.1,
              0.45
            ],
            "fwhmNm": 75
          },
          "colorScience": {
            "oklab": {
              "L": 0.2373,
              "a": -31e-4,
              "b": -0.0109
            },
            "srgb": {
              "r": 27,
              "g": 31,
              "b": 36
            },
            "apca": {
              "contrastOnWhite": 103.1,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0645\u0641\u0631\u063A \u0628\u0627\u0633\u062A\u0627\u0646\u06CC \u0644\u0631\u0633\u062A\u0627\u0646 \u0648 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC",
            "chemicalName": "Persian Archaeometallurgical Bronze",
            "formula": "Cu88-Sn12 Alloy",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0627\u0633\u0644\u062D\u0647\u200C\u062E\u0627\u0646\u0647 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u0648 \u0645\u062D\u0648\u0637\u0647\u200C\u0647\u0627\u06CC \u0645\u0641\u0631\u063A \u0628\u0627\u0633\u062A\u0627\u0646\u06CC",
            "latitude": 29.9351,
            "longitude": 52.8916,
            "elevationMeters": 1620,
            "unescoSiteId": "UNESCO World Heritage Ref: 114"
          },
          "physics": {
            "dominantWavelengthNm": 535,
            "chromaOklab": 0.011,
            "spectralReflectancePeak": "530 nm",
            "cieLab": {
              "L": 11.6,
              "a": -0.4,
              "b": -4
            }
          },
          "artMovement": "\u0634\u06A9\u0648\u0647 \u0647\u062E\u0627\u0645\u0646\u0634\u06CC \u062A\u062E\u062A \u062C\u0645\u0634\u06CC\u062F",
          "historicalContextFa": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0644\u062A \u0633\u06CC\u0627\u0647 \u0635\u06CC\u0642\u0644\u06CC \u06A9\u0627\u062E \u062F\u0627\u0631\u06CC\u0648\u0634 (\u062A\u0627\u0644\u0627\u0631 \u0622\u06CC\u0646\u0647)"
        }
      }
    ]
  },
  "behzad-miniature": {
    "id": "behzad-miniature",
    "category": "arts",
    "nameFa": "\u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u0648 \u0645\u06CC\u0646\u06CC\u0627\u062A\u0648\u0631 \u0628\u0647\u0632\u0627\u062F",
    "nameEn": "Master Behzad Persian Miniature",
    "description": "\u0645\u06A9\u062A\u0628 \u0647\u0631\u0627\u062A \u0648 \u062A\u0628\u0631\u06CC\u0632\u060C \u0634\u0646\u06AF\u0631\u0641 \u0627\u0635\u06CC\u0644 \u0645\u0639\u062F\u0646\u06CC\u060C \u0633\u0628\u0632 \u0645\u0627\u0644\u0627\u06A9\u06CC\u062A\u060C \u0634\u0627\u0647\u200C\u062A\u0648\u062A \u0639\u0646\u0627\u0628\u06CC \u0648 \u0637\u0644\u0627\u06CC \u062D\u0644\u200C\u06A9\u0627\u0631\u06CC \u0628\u0631 \u0628\u0633\u062A\u0631 \u06A9\u0627\u063A\u0630 \u0633\u0645\u0631\u0642\u0646\u062F\u06CC \u0628\u0627 \u0647\u0627\u0631\u0645\u0648\u0646\u06CC \u062C\u0627\u0648\u062F\u0627\u0646 \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u062A\u06CC\u0645\u0648\u0631\u06CC \u0648 \u0635\u0641\u0648\u06CC.",
    "descriptionFa": "\u0645\u06A9\u062A\u0628 \u0647\u0631\u0627\u062A \u0648 \u062A\u0628\u0631\u06CC\u0632\u060C \u0634\u0646\u06AF\u0631\u0641 \u0627\u0635\u06CC\u0644 \u0645\u0639\u062F\u0646\u06CC\u060C \u0633\u0628\u0632 \u0645\u0627\u0644\u0627\u06A9\u06CC\u062A\u060C \u0634\u0627\u0647\u200C\u062A\u0648\u062A \u0639\u0646\u0627\u0628\u06CC \u0648 \u0637\u0644\u0627\u06CC \u062D\u0644\u200C\u06A9\u0627\u0631\u06CC \u0628\u0631 \u0628\u0633\u062A\u0631 \u06A9\u0627\u063A\u0630 \u0633\u0645\u0631\u0642\u0646\u062F\u06CC \u0628\u0627 \u0647\u0627\u0631\u0645\u0648\u0646\u06CC \u062C\u0627\u0648\u062F\u0627\u0646 \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u062A\u06CC\u0645\u0648\u0631\u06CC \u0648 \u0635\u0641\u0648\u06CC.",
    "culturalContext": "\u0634\u0627\u0647\u0646\u0627\u0645\u0647 \u0628\u0627\u06CC\u0633\u0646\u0642\u0631\u06CC\u060C \u062E\u0645\u0633\u0647 \u0646\u0638\u0627\u0645\u06CC \u0648 \u0638\u0641\u0631\u0646\u0627\u0645\u0647 \u062A\u06CC\u0645\u0648\u0631\u06CC \u0645\u06A9\u062A\u0628 \u0647\u0631\u0627\u062A",
    "culturalContextFa": "\u0634\u0627\u0647\u0646\u0627\u0645\u0647 \u0628\u0627\u06CC\u0633\u0646\u0642\u0631\u06CC\u060C \u062E\u0645\u0633\u0647 \u0646\u0638\u0627\u0645\u06CC \u0648 \u0638\u0641\u0631\u0646\u0627\u0645\u0647 \u062A\u06CC\u0645\u0648\u0631\u06CC \u0645\u06A9\u062A\u0628 \u0647\u0631\u0627\u062A",
    "unescoRef": "\u0647\u0646\u0631 \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u0648 \u0645\u06CC\u0646\u06CC\u0627\u062A\u0648\u0631 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648)",
    "unescoRefFa": "\u0647\u0646\u0631 \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u0648 \u0645\u06CC\u0646\u06CC\u0627\u062A\u0648\u0631 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Behzad_1.jpg/960px-Behzad_1.jpg",
    "colors": [
      {
        "id": "behzad-miniature-c1",
        "hex": "#E34234",
        "nameFa": "\u0634\u0646\u06AF\u0631\u0641 \u0645\u0639\u062F\u0646\u06CC (Cinnabar/Vermilion)",
        "nameEn": "Cinnabar Vermilion",
        "role": "\u0646\u0642\u0648\u0634 \u0627\u0635\u0644\u06CC \u0648 \u062C\u0627\u0645\u0647 \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646",
        "roleFa": "\u0646\u0642\u0648\u0634 \u0627\u0635\u0644\u06CC \u0648 \u062C\u0627\u0645\u0647 \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0634\u0646\u06AF\u0631\u0641 \u062F\u0631 \u0645\u06A9\u062A\u0628 \u0647\u0631\u0627\u062A \u0648 \u062A\u0628\u0631\u06CC\u0632",
        "meaningFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0634\u0646\u06AF\u0631\u0641 \u062F\u0631 \u0645\u06A9\u062A\u0628 \u0647\u0631\u0627\u062A \u0648 \u062A\u0628\u0631\u06CC\u0632",
        "evidence": {
          "mineralogical": {
            "mineralName": "Mercury(II) Sulfide",
            "mineralNameFa": "\u06A9\u0627\u0646\u06CC \u0634\u0646\u06AF\u0631\u0641 \u0645\u0639\u062F\u0646\u06CC (Cinnabar)",
            "chemicalFormula": "HgS",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "1344-48-5"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 642,
            "dominantWavelengthNm": 642,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.6129,
              "a": 0.1747,
              "b": 0.0974
            },
            "srgb": {
              "r": 227,
              "g": 66,
              "b": 52
            },
            "apca": {
              "contrastOnWhite": 66.3,
              "contrastOnBlack": -26,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u06A9\u0627\u0646\u06CC \u0634\u0646\u06AF\u0631\u0641 \u0645\u0639\u062F\u0646\u06CC (Cinnabar)",
            "chemicalName": "Mercury(II) Sulfide",
            "formula": "HgS",
            "casNumber": "1344-48-5",
            "molarMass": "232.66 g/mol"
          },
          "geo": {
            "locationFa": "\u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u0647\u0631\u0627\u062A \u0648 \u06A9\u062A\u0627\u0628\u062E\u0627\u0646\u0647 \u0628\u0627\u06CC\u0633\u0646\u0642\u0631\u06CC",
            "latitude": 34.3283,
            "longitude": 62.1926,
            "elevationMeters": 920,
            "unescoSiteId": "Intangible Cultural Heritage"
          },
          "physics": {
            "dominantWavelengthNm": 620,
            "chromaOklab": 0.25,
            "spectralReflectancePeak": "622 nm",
            "cieLab": {
              "L": 52.1,
              "a": 65.4,
              "b": 42.1
            }
          },
          "artMovement": "\u0645\u06A9\u062A\u0628 \u0647\u0631\u0627\u062A (\u062F\u0648\u0631\u0647 \u062A\u06CC\u0645\u0648\u0631\u06CC) \u0648 \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u06A9\u0645\u0627\u0644\u200C\u0627\u0644\u062F\u06CC\u0646 \u0628\u0647\u0632\u0627\u062F",
          "historicalContextFa": "\u0631\u062F\u0627\u06CC \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646 \u062F\u0631 \u0646\u06AF\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u062E\u0645\u0633\u0647\u200C\u06CC \u0646\u0638\u0627\u0645\u06CC \u0648 \u0638\u0641\u0631\u0646\u0627\u0645\u0647 \u062A\u06CC\u0645\u0648\u0631\u06CC \u0628\u0647\u0632\u0627\u062F"
        }
      },
      {
        "id": "behzad-miniature-c2",
        "hex": "#0BDA51",
        "nameFa": "\u0633\u0628\u0632 \u0632\u0646\u06AF\u0627\u0631 \u0645\u0627\u0644\u0627\u06A9\u06CC\u062A (Malachite Green)",
        "nameEn": "Malachite Green",
        "role": "\u062A\u067E\u0647\u200C\u0647\u0627 \u0648 \u0686\u0645\u0646\u0632\u0627\u0631\u0647\u0627\u06CC \u0627\u0641\u0633\u0627\u0646\u0647\u200C\u0627\u06CC",
        "roleFa": "\u062A\u067E\u0647\u200C\u0647\u0627 \u0648 \u0686\u0645\u0646\u0632\u0627\u0631\u0647\u0627\u06CC \u0627\u0641\u0633\u0627\u0646\u0647\u200C\u0627\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u067E\u0648\u062F\u0631 \u06A9\u0627\u0646\u06CC \u0645\u0627\u0644\u0627\u06A9\u06CC\u062A \u0648 \u0627\u06A9\u0633\u06CC\u062F \u0645\u0633 \u062F\u0631 \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC",
        "meaningFa": "\u067E\u0648\u062F\u0631 \u06A9\u0627\u0646\u06CC \u0645\u0627\u0644\u0627\u06A9\u06CC\u062A \u0648 \u0627\u06A9\u0633\u06CC\u062F \u0645\u0633 \u062F\u0631 \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Basic Copper Carbonate",
            "mineralNameFa": "\u067E\u0648\u062F\u0631 \u06A9\u0627\u0646\u06CC \u0645\u0627\u0644\u0627\u06A9\u06CC\u062A \u0645\u0639\u062F\u0646\u06CC (\u062F\u0647\u0646\u062C)",
            "chemicalFormula": "Cu\u2082CO\u2083(OH)\u2082",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "12069-69-1"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 551,
            "dominantWavelengthNm": 551,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7744,
              "a": -0.192,
              "b": 0.1254
            },
            "srgb": {
              "r": 11,
              "g": 218,
              "b": 81
            },
            "apca": {
              "contrastOnWhite": 34.4,
              "contrastOnBlack": -59.1,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u067E\u0648\u062F\u0631 \u06A9\u0627\u0646\u06CC \u0645\u0627\u0644\u0627\u06A9\u06CC\u062A \u0645\u0639\u062F\u0646\u06CC (\u062F\u0647\u0646\u062C)",
            "chemicalName": "Basic Copper Carbonate",
            "formula": "Cu\u2082CO\u2083(OH)\u2082",
            "casNumber": "12069-69-1",
            "molarMass": "221.12 g/mol"
          },
          "geo": {
            "locationFa": "\u0645\u0639\u0627\u062F\u0646 \u0645\u0633 \u0622\u0630\u0631\u0628\u0627\u06CC\u062C\u0627\u0646 \u0648 \u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u062A\u0628\u0631\u06CC\u0632 \u062F\u0648\u0645",
            "latitude": 38.08,
            "longitude": 46.2919,
            "elevationMeters": 1360,
            "unescoSiteId": "Tabriz Historic Bazaar Complex"
          },
          "physics": {
            "dominantWavelengthNm": 530,
            "chromaOklab": 0.22,
            "spectralReflectancePeak": "532 nm",
            "cieLab": {
              "L": 74.2,
              "a": -68.1,
              "b": 48.2
            }
          },
          "artMovement": "\u0645\u06A9\u062A\u0628 \u062A\u0628\u0631\u06CC\u0632 \u062F\u0648\u0645 (\u0635\u0641\u0648\u06CC)",
          "historicalContextFa": "\u062A\u067E\u0647\u200C\u0647\u0627\u060C \u0635\u062E\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u06CC\u0646\u06CC\u0627\u062A\u0648\u0631\u0647\u0627\u06CC \u0634\u0627\u0647\u0646\u0627\u0645\u0647 \u0637\u0647\u0645\u0627\u0633\u0628\u06CC \u0648 \u0634\u0627\u062E\u0633\u0627\u0631\u0627\u0646 \u0646\u06AF\u0627\u0631\u0647\u200C\u0647\u0627"
        }
      },
      {
        "id": "behzad-miniature-c3",
        "hex": "#1B263B",
        "nameFa": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u0634\u0628\u0631\u0646\u06AF \u0646\u06AF\u0627\u0631",
        "nameEn": "Night Sky Miniature Navy",
        "role": "\u0622\u0633\u0645\u0627\u0646 \u067E\u0631\u0633\u062A\u0627\u0631\u0647 \u0648 \u0633\u0627\u06CC\u0647\u200C\u0647\u0627",
        "roleFa": "\u0622\u0633\u0645\u0627\u0646 \u067E\u0631\u0633\u062A\u0627\u0631\u0647 \u0648 \u0633\u0627\u06CC\u0647\u200C\u0647\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0634\u0628\u200C\u0647\u0627\u06CC \u0648\u0635\u0627\u0644 \u062F\u0631 \u062E\u0645\u0633\u0647\u200C\u0646\u06AF\u0627\u0631\u06CC",
        "meaningFa": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0634\u0628\u200C\u0647\u0627\u06CC \u0648\u0635\u0627\u0644 \u062F\u0631 \u062E\u0645\u0633\u0647\u200C\u0646\u06AF\u0627\u0631\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Indigotin & Lazurite Complex",
            "mineralNameFa": "\u0646\u06CC\u0644 \u06AF\u06CC\u0627\u0647\u06CC \u0622\u0645\u06CC\u062E\u062A\u0647 \u0628\u0627 \u0644\u0627\u062C\u0648\u0631\u062F \u0627\u0639\u0644\u0627",
            "chemicalFormula": "C\u2081\u2086H\u2081\u2080N\u2082O\u2082 + Na\u2086Ca\u2082[S|AlSiO\u2084]\u2086",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "482-89-3"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 449,
            "dominantWavelengthNm": 449,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.2692,
              "a": -54e-4,
              "b": -0.042
            },
            "srgb": {
              "r": 27,
              "g": 38,
              "b": 59
            },
            "apca": {
              "contrastOnWhite": 101.6,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0646\u06CC\u0644 \u06AF\u06CC\u0627\u0647\u06CC \u0622\u0645\u06CC\u062E\u062A\u0647 \u0628\u0627 \u0644\u0627\u062C\u0648\u0631\u062F \u0627\u0639\u0644\u0627",
            "chemicalName": "Indigotin & Lazurite Complex",
            "formula": "C\u2081\u2086H\u2081\u2080N\u2082O\u2082 + Na\u2086Ca\u2082[S|AlSiO\u2084]\u2086",
            "casNumber": "482-89-3",
            "molarMass": "262.26 g/mol"
          },
          "geo": {
            "locationFa": "\u06A9\u062A\u0627\u0628\u062E\u0627\u0646\u0647 \u0633\u0644\u0637\u0646\u062A\u06CC \u0647\u0631\u0627\u062A \u0648 \u062F\u0627\u0631\u0627\u0644\u0633\u0644\u0637\u0646\u0647 \u0647\u0631\u0627\u062A",
            "latitude": 34.329,
            "longitude": 62.193,
            "elevationMeters": 920,
            "unescoSiteId": "Herat Citadel Matrix"
          },
          "physics": {
            "dominantWavelengthNm": 470,
            "chromaOklab": 0.1,
            "spectralReflectancePeak": "472 nm",
            "cieLab": {
              "L": 16.1,
              "a": -1.2,
              "b": -20.5
            }
          },
          "artMovement": "\u062E\u0645\u0633\u0647\u200C\u0646\u06AF\u0627\u0631\u06CC \u062A\u06CC\u0645\u0648\u0631\u06CC \u0648 \u0645\u06A9\u062A\u0628 \u0628\u0647\u0632\u0627\u062F",
          "historicalContextFa": "\u0622\u0633\u0645\u0627\u0646 \u067E\u0631\u0633\u062A\u0627\u0631\u0647 \u0648 \u0634\u0628\u200C\u0647\u0627\u06CC \u0639\u0634\u0627\u0642 \u062F\u0631 \u0646\u06AF\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u062E\u0633\u0631\u0648 \u0648 \u0634\u06CC\u0631\u06CC\u0646 \u0646\u0638\u0627\u0645\u06CC"
        }
      },
      {
        "id": "behzad-miniature-c4",
        "hex": "#701C1C",
        "nameFa": "\u0634\u0627\u0647\u200C\u062A\u0648\u062A \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC (Persian Plum)",
        "nameEn": "Persian Plum",
        "role": "\u0644\u0628\u0627\u062F\u0647\u200C\u0647\u0627 \u0648 \u06AF\u0644\u200C\u0647\u0627\u06CC \u062E\u062A\u0627\u06CC\u06CC",
        "roleFa": "\u0644\u0628\u0627\u062F\u0647\u200C\u0647\u0627 \u0648 \u06AF\u0644\u200C\u0647\u0627\u06CC \u062E\u062A\u0627\u06CC\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0639\u0646\u0627\u0628\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u0645\u06A9\u062A\u0628 \u0635\u0641\u0648\u06CC",
        "meaningFa": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0639\u0646\u0627\u0628\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u0645\u06A9\u062A\u0628 \u0635\u0641\u0648\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Carmine Acid Complex",
            "mineralNameFa": "\u0639\u0635\u0627\u0631\u0647 \u0642\u0631\u0645\u0632\u062F\u0627\u0646\u0647 \u0648 \u067E\u0648\u0633\u062A \u0627\u0646\u0627\u0631 \u06A9\u0647\u0646",
            "chemicalFormula": "C\u2082\u2082H\u2082\u2080O\u2081\u2083",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "1260-15-5"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 626,
            "dominantWavelengthNm": 626,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.3661,
              "a": 0.1065,
              "b": 0.05
            },
            "srgb": {
              "r": 112,
              "g": 28,
              "b": 28
            },
            "apca": {
              "contrastOnWhite": 94.3,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0639\u0635\u0627\u0631\u0647 \u0642\u0631\u0645\u0632\u062F\u0627\u0646\u0647 \u0648 \u067E\u0648\u0633\u062A \u0627\u0646\u0627\u0631 \u06A9\u0647\u0646",
            "chemicalName": "Carmine Acid Complex",
            "formula": "C\u2082\u2082H\u2082\u2080O\u2081\u2083",
            "casNumber": "1260-15-5",
            "molarMass": "492.39 g/mol"
          },
          "geo": {
            "locationFa": "\u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0635\u0628\u0627\u063A\u06CC \u0648 \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u0627\u0635\u0641\u0647\u0627\u0646 \u0635\u0641\u0648\u06CC",
            "latitude": 32.657,
            "longitude": 51.677,
            "elevationMeters": 1574,
            "unescoSiteId": "UNESCO Ref: 115"
          },
          "physics": {
            "dominantWavelengthNm": 640,
            "chromaOklab": 0.18,
            "spectralReflectancePeak": "642 nm",
            "cieLab": {
              "L": 24.1,
              "a": 38.2,
              "b": 18.1
            }
          },
          "artMovement": "\u0645\u06A9\u062A\u0628 \u0627\u0635\u0641\u0647\u0627\u0646 \u0635\u0641\u0648\u06CC \u0648 \u0646\u06AF\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u0631\u0636\u0627 \u0639\u0628\u0627\u0633\u06CC",
          "historicalContextFa": "\u0644\u0628\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0641\u0627\u062E\u0631 \u0634\u0627\u0647\u0627\u0646 \u0648 \u062F\u0631\u0628\u0627\u0631\u06CC\u0627\u0646 \u062F\u0631 \u0645\u062C\u0627\u0644\u0633 \u0628\u0632\u0645 \u0648 \u0628\u0627\u0631\u0639\u0627\u0645 \u0635\u0641\u0648\u06CC"
        }
      },
      {
        "id": "behzad-miniature-c5",
        "hex": "#F6BD60",
        "nameFa": "\u0637\u0644\u0627\u06CC \u062D\u0644\u200C\u06A9\u0627\u0631\u06CC",
        "nameEn": "Illuminated Leaf Gold",
        "role": "\u062A\u0630\u0647\u06CC\u0628 \u062D\u0648\u0627\u0634\u06CC \u0648 \u0627\u0628\u0631\u0647\u0627",
        "roleFa": "\u062A\u0630\u0647\u06CC\u0628 \u062D\u0648\u0627\u0634\u06CC \u0648 \u0627\u0628\u0631\u0647\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u062A\u0631\u06A9\u06CC\u0628 \u0628\u0631\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0637\u0644\u0627 \u0628\u0627 \u0635\u0645\u063A \u0639\u0631\u0628\u06CC \u062F\u0631 \u062A\u0634\u0639\u06CC\u0631",
        "meaningFa": "\u062A\u0631\u06A9\u06CC\u0628 \u0628\u0631\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0637\u0644\u0627 \u0628\u0627 \u0635\u0645\u063A \u0639\u0631\u0628\u06CC \u062F\u0631 \u062A\u0634\u0639\u06CC\u0631",
        "evidence": {
          "mineralogical": {
            "mineralName": "Gold & Acacia Gum Polysaccharide",
            "mineralNameFa": "\u0628\u0631\u0627\u062F\u0647 \u0637\u0644\u0627\u06CC \u062D\u0644\u06A9\u0627\u0631\u06CC \u0628\u0627 \u0635\u0645\u063A \u0639\u0631\u0628\u06CC",
            "chemicalFormula": "Au + Complex Polysaccharides",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "9000-01-5"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 591,
            "dominantWavelengthNm": 591,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.8323,
              "a": 0.0274,
              "b": 0.1251
            },
            "srgb": {
              "r": 246,
              "g": 189,
              "b": 96
            },
            "apca": {
              "contrastOnWhite": 29.7,
              "contrastOnBlack": -64,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0628\u0631\u0627\u062F\u0647 \u0637\u0644\u0627\u06CC \u062D\u0644\u06A9\u0627\u0631\u06CC \u0628\u0627 \u0635\u0645\u063A \u0639\u0631\u0628\u06CC",
            "chemicalName": "Gold & Acacia Gum Polysaccharide",
            "formula": "Au + Complex Polysaccharides",
            "casNumber": "9000-01-5",
            "molarMass": "196.97 g/mol"
          },
          "geo": {
            "locationFa": "\u06A9\u062A\u0627\u0628\u062E\u0627\u0646\u0647 \u0622\u0633\u062A\u0627\u0646 \u0642\u062F\u0633 \u0631\u0636\u0648\u06CC\u060C \u0645\u0634\u0647\u062F",
            "latitude": 36.2878,
            "longitude": 59.6155,
            "elevationMeters": 985,
            "unescoSiteId": "Imam Reza Holy Shrine"
          },
          "physics": {
            "dominantWavelengthNm": 580,
            "chromaOklab": 0.2,
            "spectralReflectancePeak": "582 nm",
            "cieLab": {
              "L": 78.2,
              "a": 12.1,
              "b": 54.2
            }
          },
          "artMovement": "\u062A\u0630\u0647\u06CC\u0628\u060C \u062A\u0634\u0639\u06CC\u0631 \u0648 \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC \u06A9\u0647\u0646",
          "historicalContextFa": "\u0627\u0628\u0631\u0647\u0627\u06CC \u0633\u06CC\u0645\u0631\u063A \u0686\u06CC\u0646\u06CC\u200C\u0645\u0622\u0628 \u0648 \u062A\u0634\u0639\u06CC\u0631 \u062D\u0648\u0627\u0634\u06CC \u0642\u0631\u0622\u0646\u200C\u0647\u0627 \u0648 \u0645\u0631\u0642\u0639\u0627\u062A \u0646\u0641\u06CC\u0633"
        }
      },
      {
        "id": "behzad-miniature-c6",
        "hex": "#FAF3E0",
        "nameFa": "\u06A9\u0627\u063A\u0630 \u0633\u0645\u0631\u0642\u0646\u062F\u06CC",
        "nameEn": "Samarkand Silk Paper",
        "role": "\u0628\u0633\u062A\u0631 \u0646\u06AF\u0627\u0631\u0647 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleFa": "\u0628\u0633\u062A\u0631 \u0646\u06AF\u0627\u0631\u0647 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u06A9\u0627\u063A\u0630 \u062F\u0633\u062A\u200C\u0633\u0627\u0632 \u06A9\u062A\u0627\u0646 \u0648 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0635\u06CC\u0642\u0644\u200C\u062E\u0648\u0631\u062F\u0647 \u0628\u0627 \u0639\u0642\u06CC\u0642",
        "meaningFa": "\u06A9\u0627\u063A\u0630 \u062F\u0633\u062A\u200C\u0633\u0627\u0632 \u06A9\u062A\u0627\u0646 \u0648 \u0627\u0628\u0631\u06CC\u0634\u0645 \u0635\u06CC\u0642\u0644\u200C\u062E\u0648\u0631\u062F\u0647 \u0628\u0627 \u0639\u0642\u06CC\u0642",
        "evidence": {
          "mineralogical": {
            "mineralName": "Cellulose & Amylose Matrix",
            "mineralNameFa": "\u0627\u0644\u06CC\u0627\u0641 \u06A9\u062A\u0627\u0646\u060C \u067E\u0646\u0628\u0647 \u0648 \u0622\u0647\u0627\u0631 \u0646\u0634\u0627\u0633\u062A\u0647 \u0635\u06CC\u0642\u0644\u06CC",
            "chemicalFormula": "(C\u2086H\u2081\u2080O\u2085)\u2099",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "9004-34-6"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 607,
            "dominantWavelengthNm": 607,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9645,
              "a": -0,
              "b": 0.0261
            },
            "srgb": {
              "r": 250,
              "g": 243,
              "b": 224
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -91.5,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0627\u0644\u06CC\u0627\u0641 \u06A9\u062A\u0627\u0646\u060C \u067E\u0646\u0628\u0647 \u0648 \u0622\u0647\u0627\u0631 \u0646\u0634\u0627\u0633\u062A\u0647 \u0635\u06CC\u0642\u0644\u06CC",
            "chemicalName": "Cellulose & Amylose Matrix",
            "formula": "(C\u2086H\u2081\u2080O\u2085)\u2099",
            "casNumber": "9004-34-6",
            "molarMass": "162.14 g/mol"
          },
          "geo": {
            "locationFa": "\u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u06A9\u0627\u063A\u0630\u0633\u0627\u0632\u06CC \u0633\u0645\u0631\u0642\u0646\u062F \u0648 \u0647\u0631\u0627\u062A",
            "latitude": 39.6542,
            "longitude": 66.9597,
            "elevationMeters": 710,
            "unescoSiteId": "Samarkand - Crossroad of Cultures"
          },
          "physics": {
            "dominantWavelengthNm": 565,
            "chromaOklab": 0.03,
            "spectralReflectancePeak": "567 nm",
            "cieLab": {
              "L": 96.1,
              "a": -1.1,
              "b": 9.2
            }
          },
          "artMovement": "\u0646\u0633\u062E\u0647\u200C\u0646\u0648\u06CC\u0633\u06CC \u0648 \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC \u06A9\u0644\u0627\u0633\u06CC\u06A9",
          "historicalContextFa": "\u0628\u0633\u062A\u0631 \u0635\u06CC\u0642\u0644\u200C\u062E\u0648\u0631\u062F\u0647 \u0628\u0627 \u0639\u0642\u06CC\u0642 \u06A9\u0627\u063A\u0630 \u0633\u0645\u0631\u0642\u0646\u062F\u06CC \u0628\u0631\u0627\u06CC \u0646\u06AF\u0627\u0631\u06AF\u0631\u06CC \u0638\u0631\u06CC\u0641"
        }
      }
    ]
  },
  "nomadic-rugs": {
    "id": "nomadic-rugs",
    "category": "textiles",
    "nameFa": "\u062F\u0633\u062A\u0628\u0627\u0641\u062A\u0647\u200C\u0647\u0627 \u0648 \u0642\u0627\u0644\u06CC \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
    "nameEn": "Qashqai & Bakhtiari Nomadic Rugs",
    "description": "\u062A\u0627\u0631 \u0648 \u067E\u0648\u062F \u067E\u0634\u0645 \u062F\u0633\u062A\u200C\u0631\u06CC\u0633 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u06F1\u06F0\u06F0\u066A \u0637\u0628\u06CC\u0639\u06CC \u0628\u0627 \u0631\u0648\u0646\u0627\u0633\u060C \u0644\u0627\u06A9\u06CC \u062F\u0627\u0646\u0647\u060C \u067E\u0648\u0633\u062A \u06AF\u0631\u062F\u0648 \u0648 \u0646\u06CC\u0644 \u062F\u0631 \u062F\u0627\u0645\u0646\u0647\u200C\u0647\u0627\u06CC \u0632\u0627\u06AF\u0631\u0633.",
    "descriptionFa": "\u062A\u0627\u0631 \u0648 \u067E\u0648\u062F \u067E\u0634\u0645 \u062F\u0633\u062A\u200C\u0631\u06CC\u0633 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u06F1\u06F0\u06F0\u066A \u0637\u0628\u06CC\u0639\u06CC \u0628\u0627 \u0631\u0648\u0646\u0627\u0633\u060C \u0644\u0627\u06A9\u06CC \u062F\u0627\u0646\u0647\u060C \u067E\u0648\u0633\u062A \u06AF\u0631\u062F\u0648 \u0648 \u0646\u06CC\u0644 \u062F\u0631 \u062F\u0627\u0645\u0646\u0647\u200C\u0647\u0627\u06CC \u0632\u0627\u06AF\u0631\u0633.",
    "culturalContext": "\u06AF\u0644\u06CC\u0645\u060C \u06AF\u0628\u0647 \u0648 \u0642\u0627\u0644\u06CC\u200C\u0647\u0627\u06CC \u062F\u0633\u062A\u0628\u0627\u0641 \u0627\u06CC\u0644 \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC \u0641\u0627\u0631\u0633 \u0648 \u0686\u0647\u0627\u0631\u0645\u062D\u0627\u0644",
    "culturalContextFa": "\u06AF\u0644\u06CC\u0645\u060C \u06AF\u0628\u0647 \u0648 \u0642\u0627\u0644\u06CC\u200C\u0647\u0627\u06CC \u062F\u0633\u062A\u0628\u0627\u0641 \u0627\u06CC\u0644 \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC \u0641\u0627\u0631\u0633 \u0648 \u0686\u0647\u0627\u0631\u0645\u062D\u0627\u0644",
    "unescoRef": "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0633\u0646\u062A\u06CC \u0641\u0631\u0634\u200C\u0628\u0627\u0641\u06CC \u0641\u0627\u0631\u0633 (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648)",
    "unescoRefFa": "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0633\u0646\u062A\u06CC \u0641\u0631\u0634\u200C\u0628\u0627\u0641\u06CC \u0641\u0627\u0631\u0633 (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ghashghai_rug.jpg/960px-Ghashghai_rug.jpg",
    "colors": [
      {
        "id": "nomadic-rugs-c1",
        "hex": "#A81C07",
        "nameFa": "\u0642\u0631\u0645\u0632 \u0631\u0648\u0646\u0627\u0633\u06CC \u0646\u0627\u0628 (Madder Root)",
        "nameEn": "Madder Root Red",
        "role": "\u0644\u0686\u06A9 \u0648 \u062A\u0631\u0646\u062C \u0645\u0631\u06A9\u0632\u06CC",
        "roleFa": "\u0644\u0686\u06A9 \u0648 \u062A\u0631\u0646\u062C \u0645\u0631\u06A9\u0632\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF \u0642\u0631\u0645\u0632 \u0639\u0645\u06CC\u0642 \u062D\u0627\u0635\u0644 \u0627\u0632 \u06AF\u06CC\u0627\u0647 \u0631\u0648\u0646\u0627\u0633 \u0628\u0627 \u062F\u0646\u062F\u0627\u0646\u0647\u200C\u062F\u0627\u062F\u0646 \u0633\u0646\u062A\u06CC",
        "meaningFa": "\u0631\u0646\u06AF \u0642\u0631\u0645\u0632 \u0639\u0645\u06CC\u0642 \u062D\u0627\u0635\u0644 \u0627\u0632 \u06AF\u06CC\u0627\u0647 \u0631\u0648\u0646\u0627\u0633 \u0628\u0627 \u062F\u0646\u062F\u0627\u0646\u0647\u200C\u062F\u0627\u062F\u0646 \u0633\u0646\u062A\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Madder Root Red)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0642\u0631\u0645\u0632 \u0631\u0648\u0646\u0627\u0633\u06CC \u0646\u0627\u0628 (Madder Root))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #A81C07)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 638,
            "dominantWavelengthNm": 638,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.4718,
              "a": 0.1511,
              "b": 0.0918
            },
            "srgb": {
              "r": 168,
              "g": 28,
              "b": 7
            },
            "apca": {
              "contrastOnWhite": 83.3,
              "contrastOnBlack": -9.4,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0642\u0631\u0645\u0632 \u0631\u0648\u0646\u0627\u0633\u06CC \u0646\u0627\u0628 (Madder Root))",
            "chemicalName": "Persian Historical Pigment (Madder Root Red)",
            "formula": "Natural Organic / Mineral Complex (Matrix #A81C07)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 638,
            "chromaOklab": 0.177,
            "spectralReflectancePeak": "638 nm",
            "cieLab": {
              "L": 36.3,
              "a": 54,
              "b": 47
            }
          },
          "artMovement": "\u062F\u0633\u062A\u0628\u0627\u0641\u062A\u0647\u200C\u0647\u0627 \u0648 \u0642\u0627\u0644\u06CC \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
          "historicalContextFa": "\u0631\u0646\u06AF \u0642\u0631\u0645\u0632 \u0639\u0645\u06CC\u0642 \u062D\u0627\u0635\u0644 \u0627\u0632 \u06AF\u06CC\u0627\u0647 \u0631\u0648\u0646\u0627\u0633 \u0628\u0627 \u062F\u0646\u062F\u0627\u0646\u0647\u200C\u062F\u0627\u062F\u0646 \u0633\u0646\u062A\u06CC"
        }
      },
      {
        "id": "nomadic-rugs-c2",
        "hex": "#540B0E",
        "nameFa": "\u0644\u0627\u06A9\u06CC \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC",
        "nameEn": "Persian Crimson Lacquer",
        "role": "\u0632\u0645\u06CC\u0646\u0647 \u062A\u06CC\u0631\u0647 \u0641\u0631\u0634",
        "roleFa": "\u0632\u0645\u06CC\u0646\u0647 \u062A\u06CC\u0631\u0647 \u0641\u0631\u0634",
        "roleEn": "Primary Accent",
        "meaning": "\u0642\u0631\u0645\u0632\u062F\u0627\u0646\u0647 \u0648 \u062D\u0634\u0631\u0647 \u0644\u0627\u06A9\u06CC \u0628\u0627 \u062F\u0648\u0627\u0645 \u0633\u062F\u0647\u200C\u0647\u0627 \u062F\u0631 \u062A\u0627\u0631 \u0648 \u067E\u0648\u062F",
        "meaningFa": "\u0642\u0631\u0645\u0632\u062F\u0627\u0646\u0647 \u0648 \u062D\u0634\u0631\u0647 \u0644\u0627\u06A9\u06CC \u0628\u0627 \u062F\u0648\u0627\u0645 \u0633\u062F\u0647\u200C\u0647\u0627 \u062F\u0631 \u062A\u0627\u0631 \u0648 \u067E\u0648\u062F",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Persian Crimson Lacquer)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0644\u0627\u06A9\u06CC \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #540B0E)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 624,
            "dominantWavelengthNm": 624,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.291,
              "a": 0.0944,
              "b": 0.0438
            },
            "srgb": {
              "r": 84,
              "g": 11,
              "b": 14
            },
            "apca": {
              "contrastOnWhite": 100,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0644\u0627\u06A9\u06CC \u0634\u0627\u0647\u200C\u0639\u0628\u0627\u0633\u06CC)",
            "chemicalName": "Persian Historical Pigment (Persian Crimson Lacquer)",
            "formula": "Natural Organic / Mineral Complex (Matrix #540B0E)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 624,
            "chromaOklab": 0.104,
            "spectralReflectancePeak": "624 nm",
            "cieLab": {
              "L": 16.3,
              "a": 32.6,
              "b": 19.1
            }
          },
          "artMovement": "\u062F\u0633\u062A\u0628\u0627\u0641\u062A\u0647\u200C\u0647\u0627 \u0648 \u0642\u0627\u0644\u06CC \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
          "historicalContextFa": "\u0642\u0631\u0645\u0632\u062F\u0627\u0646\u0647 \u0648 \u062D\u0634\u0631\u0647 \u0644\u0627\u06A9\u06CC \u0628\u0627 \u062F\u0648\u0627\u0645 \u0633\u062F\u0647\u200C\u0647\u0627 \u062F\u0631 \u062A\u0627\u0631 \u0648 \u067E\u0648\u062F"
        }
      },
      {
        "id": "nomadic-rugs-c3",
        "hex": "#D99058",
        "nameFa": "\u062D\u0646\u0627\u06CC\u06CC \u0627\u0641\u0634\u0627\u0631\u06CC (Persian Orange)",
        "nameEn": "Persian Orange",
        "role": "\u06AF\u0644\u200C\u0647\u0627 \u0648 \u0646\u06AF\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u0647\u0646\u062F\u0633\u06CC",
        "roleFa": "\u06AF\u0644\u200C\u0647\u0627 \u0648 \u0646\u06AF\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u0647\u0646\u062F\u0633\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0646\u0627\u0631\u0646\u062C\u06CC \u0645\u062A\u0645\u0627\u06CC\u0644 \u0628\u0647 \u0633\u0641\u0627\u0644\u06CC \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0628\u0627 \u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u062D\u0646\u0627",
        "meaningFa": "\u0646\u0627\u0631\u0646\u062C\u06CC \u0645\u062A\u0645\u0627\u06CC\u0644 \u0628\u0647 \u0633\u0641\u0627\u0644\u06CC \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0628\u0627 \u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u062D\u0646\u0627",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Persian Orange)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062D\u0646\u0627\u06CC\u06CC \u0627\u0641\u0634\u0627\u0631\u06CC (Persian Orange))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #D99058)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 624,
            "dominantWavelengthNm": 624,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7156,
              "a": 0.0621,
              "b": 0.096
            },
            "srgb": {
              "r": 217,
              "g": 144,
              "b": 88
            },
            "apca": {
              "contrastOnWhite": 49.9,
              "contrastOnBlack": -42.8,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062D\u0646\u0627\u06CC\u06CC \u0627\u0641\u0634\u0627\u0631\u06CC (Persian Orange))",
            "chemicalName": "Persian Historical Pigment (Persian Orange)",
            "formula": "Natural Organic / Mineral Complex (Matrix #D99058)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 624,
            "chromaOklab": 0.114,
            "spectralReflectancePeak": "624 nm",
            "cieLab": {
              "L": 66.1,
              "a": 22.1,
              "b": 40.7
            }
          },
          "artMovement": "\u062F\u0633\u062A\u0628\u0627\u0641\u062A\u0647\u200C\u0647\u0627 \u0648 \u0642\u0627\u0644\u06CC \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
          "historicalContextFa": "\u0646\u0627\u0631\u0646\u062C\u06CC \u0645\u062A\u0645\u0627\u06CC\u0644 \u0628\u0647 \u0633\u0641\u0627\u0644\u06CC \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0628\u0627 \u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u062D\u0646\u0627"
        }
      },
      {
        "id": "nomadic-rugs-c4",
        "hex": "#2B3A1C",
        "nameFa": "\u0633\u0628\u0632 \u06A9\u0644\u0647\u200C\u063A\u0627\u0632\u06CC \u0639\u0634\u0627\u06CC\u0631",
        "nameEn": "Peacock Forest Green",
        "role": "\u0634\u0627\u062E\u0647\u200C\u0647\u0627\u06CC \u062E\u062A\u0627\u06CC\u06CC \u0648 \u0628\u0648\u062A\u0647\u200C\u0647\u0627",
        "roleFa": "\u0634\u0627\u062E\u0647\u200C\u0647\u0627\u06CC \u062E\u062A\u0627\u06CC\u06CC \u0648 \u0628\u0648\u062A\u0647\u200C\u0647\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u062A\u0631\u06A9\u06CC\u0628 \u0646\u06CC\u0644 \u0628\u0627 \u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0648 \u0627\u0633\u067E\u0631\u06A9 \u062F\u0631 \u0686\u0627\u062F\u0631\u0647\u0627\u06CC \u0627\u06CC\u0644\u0627\u062A\u06CC",
        "meaningFa": "\u062A\u0631\u06A9\u06CC\u0628 \u0646\u06CC\u0644 \u0628\u0627 \u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0648 \u0627\u0633\u067E\u0631\u06A9 \u062F\u0631 \u0686\u0627\u062F\u0631\u0647\u0627\u06CC \u0627\u06CC\u0644\u0627\u062A\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Peacock Forest Green)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0628\u0632 \u06A9\u0644\u0647\u200C\u063A\u0627\u0632\u06CC \u0639\u0634\u0627\u06CC\u0631)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #2B3A1C)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 513,
            "dominantWavelengthNm": 513,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.3266,
              "a": -0.0346,
              "b": 0.0404
            },
            "srgb": {
              "r": 43,
              "g": 58,
              "b": 28
            },
            "apca": {
              "contrastOnWhite": 97.3,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0628\u0632 \u06A9\u0644\u0647\u200C\u063A\u0627\u0632\u06CC \u0639\u0634\u0627\u06CC\u0631)",
            "chemicalName": "Persian Historical Pigment (Peacock Forest Green)",
            "formula": "Natural Organic / Mineral Complex (Matrix #2B3A1C)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 513,
            "chromaOklab": 0.053,
            "spectralReflectancePeak": "513 nm",
            "cieLab": {
              "L": 22.4,
              "a": -12.5,
              "b": 16.6
            }
          },
          "artMovement": "\u062F\u0633\u062A\u0628\u0627\u0641\u062A\u0647\u200C\u0647\u0627 \u0648 \u0642\u0627\u0644\u06CC \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
          "historicalContextFa": "\u062A\u0631\u06A9\u06CC\u0628 \u0646\u06CC\u0644 \u0628\u0627 \u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0648 \u0627\u0633\u067E\u0631\u06A9 \u062F\u0631 \u0686\u0627\u062F\u0631\u0647\u0627\u06CC \u0627\u06CC\u0644\u0627\u062A\u06CC"
        }
      },
      {
        "id": "nomadic-rugs-c5",
        "hex": "#EADDCF",
        "nameFa": "\u06A9\u0631\u0645 \u062E\u0627\u0645\u0647 \u067E\u0634\u0645\u06CC",
        "nameEn": "Raw Wool Cream",
        "role": "\u062D\u0627\u0634\u06CC\u0647 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleFa": "\u062D\u0627\u0634\u06CC\u0647 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u062E\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u067E\u0634\u0645 \u062F\u0633\u062A\u200C\u0631\u06CC\u0633 \u0634\u0633\u062A\u0647 \u0634\u062F\u0647 \u062F\u0631 \u0686\u0634\u0645\u0647\u200C\u0633\u0627\u0631\u0647\u0627\u06CC \u0632\u0627\u06AF\u0631\u0633",
        "meaningFa": "\u062E\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u067E\u0634\u0645 \u062F\u0633\u062A\u200C\u0631\u06CC\u0633 \u0634\u0633\u062A\u0647 \u0634\u062F\u0647 \u062F\u0631 \u0686\u0634\u0645\u0647\u200C\u0633\u0627\u0631\u0647\u0627\u06CC \u0632\u0627\u06AF\u0631\u0633",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Raw Wool Cream)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06A9\u0631\u0645 \u062E\u0627\u0645\u0647 \u067E\u0634\u0645\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #EADDCF)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 601,
            "dominantWavelengthNm": 601,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9042,
              "a": 83e-4,
              "b": 0.0222
            },
            "srgb": {
              "r": 234,
              "g": 221,
              "b": 207
            },
            "apca": {
              "contrastOnWhite": 16.2,
              "contrastOnBlack": -78.6,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06A9\u0631\u0645 \u062E\u0627\u0645\u0647 \u067E\u0634\u0645\u06CC)",
            "chemicalName": "Persian Historical Pigment (Raw Wool Cream)",
            "formula": "Natural Organic / Mineral Complex (Matrix #EADDCF)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 601,
            "chromaOklab": 0.024,
            "spectralReflectancePeak": "601 nm",
            "cieLab": {
              "L": 88.8,
              "a": 2.1,
              "b": 8.5
            }
          },
          "artMovement": "\u062F\u0633\u062A\u0628\u0627\u0641\u062A\u0647\u200C\u0647\u0627 \u0648 \u0642\u0627\u0644\u06CC \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
          "historicalContextFa": "\u062E\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u067E\u0634\u0645 \u062F\u0633\u062A\u200C\u0631\u06CC\u0633 \u0634\u0633\u062A\u0647 \u0634\u062F\u0647 \u062F\u0631 \u0686\u0634\u0645\u0647\u200C\u0633\u0627\u0631\u0647\u0627\u06CC \u0632\u0627\u06AF\u0631\u0633"
        }
      },
      {
        "id": "nomadic-rugs-c6",
        "hex": "#422006",
        "nameFa": "\u0642\u0647\u0648\u0647\u200C\u0627\u06CC \u067E\u0648\u0633\u062A \u06AF\u0631\u062F\u0648",
        "nameEn": "Walnut Husk Brown",
        "role": "\u0642\u0627\u0628\u200C\u0628\u0646\u062F\u06CC \u0648 \u06AF\u0631\u0647\u200C\u0647\u0627\u06CC \u062A\u06CC\u0631\u0647",
        "roleFa": "\u0642\u0627\u0628\u200C\u0628\u0646\u062F\u06CC \u0648 \u06AF\u0631\u0647\u200C\u0647\u0627\u06CC \u062A\u06CC\u0631\u0647",
        "roleEn": "Primary Accent",
        "meaning": "\u067E\u0648\u0633\u062A \u0633\u0628\u0632 \u0648 \u062E\u0634\u06A9\u06CC\u062F\u0647 \u06AF\u0631\u062F\u0648\u0647\u0627\u06CC \u06A9\u0647\u0646\u0633\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
        "meaningFa": "\u067E\u0648\u0633\u062A \u0633\u0628\u0632 \u0648 \u062E\u0634\u06A9\u06CC\u062F\u0647 \u06AF\u0631\u062F\u0648\u0647\u0627\u06CC \u06A9\u0647\u0646\u0633\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Walnut Husk Brown)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0642\u0647\u0648\u0647\u200C\u0627\u06CC \u067E\u0648\u0633\u062A \u06AF\u0631\u062F\u0648)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #422006)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 616,
            "dominantWavelengthNm": 616,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.2857,
              "a": 0.0377,
              "b": 0.0516
            },
            "srgb": {
              "r": 66,
              "g": 32,
              "b": 6
            },
            "apca": {
              "contrastOnWhite": 100.7,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0642\u0647\u0648\u0647\u200C\u0627\u06CC \u067E\u0648\u0633\u062A \u06AF\u0631\u062F\u0648)",
            "chemicalName": "Persian Historical Pigment (Walnut Husk Brown)",
            "formula": "Natural Organic / Mineral Complex (Matrix #422006)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 616,
            "chromaOklab": 0.064,
            "spectralReflectancePeak": "616 nm",
            "cieLab": {
              "L": 16.5,
              "a": 14.2,
              "b": 22
            }
          },
          "artMovement": "\u062F\u0633\u062A\u0628\u0627\u0641\u062A\u0647\u200C\u0647\u0627 \u0648 \u0642\u0627\u0644\u06CC \u0642\u0634\u0642\u0627\u06CC\u06CC \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
          "historicalContextFa": "\u067E\u0648\u0633\u062A \u0633\u0628\u0632 \u0648 \u062E\u0634\u06A9\u06CC\u062F\u0647 \u06AF\u0631\u062F\u0648\u0647\u0627\u06CC \u06A9\u0647\u0646\u0633\u0627\u0644 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC"
        }
      }
    ]
  },
  "minakari-craft": {
    "id": "minakari-craft",
    "category": "arts",
    "nameFa": "\u0647\u0646\u0631 \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
    "nameEn": "Isfahan Minakari & Repousse Metalwork",
    "description": "\u0644\u0639\u0627\u0628 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u0628\u0631 \u0645\u0633 \u06A9\u0648\u0631\u0647 \u0648 \u062F\u0631\u062E\u0634\u0634 \u0632\u0631\u06CC\u0646 \u0641\u0644\u0632\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC \u0645\u06A9\u062A\u0628 \u0627\u0635\u0641\u0647\u0627\u0646 \u0628\u0627 \u067E\u06CC\u0634\u06CC\u0646\u0647 \u067E\u0646\u062C\u200C\u0647\u0632\u0627\u0631 \u0633\u0627\u0644\u0647.",
    "descriptionFa": "\u0644\u0639\u0627\u0628 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0648 \u0644\u0627\u062C\u0648\u0631\u062F \u0628\u0631 \u0645\u0633 \u06A9\u0648\u0631\u0647 \u0648 \u062F\u0631\u062E\u0634\u0634 \u0632\u0631\u06CC\u0646 \u0641\u0644\u0632\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC \u0645\u06A9\u062A\u0628 \u0627\u0635\u0641\u0647\u0627\u0646 \u0628\u0627 \u067E\u06CC\u0634\u06CC\u0646\u0647 \u067E\u0646\u062C\u200C\u0647\u0632\u0627\u0631 \u0633\u0627\u0644\u0647.",
    "culturalContext": "\u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646\u060C \u0628\u0627\u0632\u0627\u0631 \u0645\u0633\u06AF\u0631\u0647\u0627 \u0648 \u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0627\u0635\u0641\u0647\u0627\u0646",
    "culturalContextFa": "\u0645\u06CC\u062F\u0627\u0646 \u0646\u0642\u0634 \u062C\u0647\u0627\u0646\u060C \u0628\u0627\u0632\u0627\u0631 \u0645\u0633\u06AF\u0631\u0647\u0627 \u0648 \u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0627\u0635\u0641\u0647\u0627\u0646",
    "unescoRef": "\u0634\u0647\u0631 \u062C\u0647\u0627\u0646\u06CC \u0635\u0646\u0627\u06CC\u0639 \u062F\u0633\u062A\u06CC (Isfahan World Crafts City)",
    "unescoRefFa": "\u0634\u0647\u0631 \u062C\u0647\u0627\u0646\u06CC \u0635\u0646\u0627\u06CC\u0639 \u062F\u0633\u062A\u06CC (Isfahan World Crafts City)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Minakari_of_Isfahan.jpg/960px-Minakari_of_Isfahan.jpg",
    "colors": [
      {
        "id": "minakari-craft-c1",
        "hex": "#1C39BB",
        "nameFa": "\u0622\u0628\u06CC \u0645\u06CC\u0646\u0627\u06CC\u06CC \u0698\u0631\u0641 (Persian Blue)",
        "nameEn": "Persian Blue",
        "role": "\u0632\u0645\u06CC\u0646\u0647 \u0628\u0634\u0642\u0627\u0628\u200C\u0647\u0627\u06CC \u0645\u06CC\u0646\u0627",
        "roleFa": "\u0632\u0645\u06CC\u0646\u0647 \u0628\u0634\u0642\u0627\u0628\u200C\u0647\u0627\u06CC \u0645\u06CC\u0646\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF \u062C\u0647\u0627\u0646\u06CC \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u062F\u0631 \u0645\u0648\u0632\u0647\u200C\u0647\u0627\u06CC \u0628\u06CC\u0646\u200C\u0627\u0644\u0645\u0644\u0644\u06CC",
        "meaningFa": "\u0631\u0646\u06AF \u062C\u0647\u0627\u0646\u06CC \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u062F\u0631 \u0645\u0648\u0632\u0647\u200C\u0647\u0627\u06CC \u0628\u06CC\u0646\u200C\u0627\u0644\u0645\u0644\u0644\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Persian Blue)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0622\u0628\u06CC \u0645\u06CC\u0646\u0627\u06CC\u06CC \u0698\u0631\u0641 (Persian Blue))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #1C39BB)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 468,
            "dominantWavelengthNm": 468,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.423,
              "a": -0.0126,
              "b": -0.2043
            },
            "srgb": {
              "r": 28,
              "g": 57,
              "b": 187
            },
            "apca": {
              "contrastOnWhite": 88.8,
              "contrastOnBlack": 0,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0622\u0628\u06CC \u0645\u06CC\u0646\u0627\u06CC\u06CC \u0698\u0631\u0641 (Persian Blue))",
            "chemicalName": "Persian Historical Pigment (Persian Blue)",
            "formula": "Natural Organic / Mineral Complex (Matrix #1C39BB)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 468,
            "chromaOklab": 0.205,
            "spectralReflectancePeak": "468 nm",
            "cieLab": {
              "L": 31.3,
              "a": 39.3,
              "b": -70.5
            }
          },
          "artMovement": "\u0647\u0646\u0631 \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
          "historicalContextFa": "\u0631\u0646\u06AF \u062C\u0647\u0627\u0646\u06CC \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u062F\u0631 \u0645\u0648\u0632\u0647\u200C\u0647\u0627\u06CC \u0628\u06CC\u0646\u200C\u0627\u0644\u0645\u0644\u0644\u06CC"
        }
      },
      {
        "id": "minakari-craft-c2",
        "hex": "#008679",
        "nameFa": "\u0633\u0628\u0632 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0642\u0644\u0645\u06CC (Persian Green)",
        "nameEn": "Deep Persian Green",
        "role": "\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0627\u0633\u0644\u06CC\u0645\u06CC \u0648 \u062E\u062A\u0627\u06CC\u06CC",
        "roleFa": "\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0627\u0633\u0644\u06CC\u0645\u06CC \u0648 \u062E\u062A\u0627\u06CC\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "Persian Green \u062A\u06CC\u0631\u0647\u200C\u062A\u0631 \u062F\u0631 \u0644\u0639\u0627\u0628\u200C\u0647\u0627\u06CC \u067E\u062E\u062A\u0647 \u06A9\u0648\u0631\u0647",
        "meaningFa": "Persian Green \u062A\u06CC\u0631\u0647\u200C\u062A\u0631 \u062F\u0631 \u0644\u0639\u0627\u0628\u200C\u0647\u0627\u06CC \u067E\u062E\u062A\u0647 \u06A9\u0648\u0631\u0647",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Deep Persian Green)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0628\u0632 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0642\u0644\u0645\u06CC (Persian Green))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #008679)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 536,
            "dominantWavelengthNm": 536,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.5568,
              "a": -0.099,
              "b": -53e-4
            },
            "srgb": {
              "r": 0,
              "g": 134,
              "b": 121
            },
            "apca": {
              "contrastOnWhite": 69.8,
              "contrastOnBlack": -22.6,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0628\u0632 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0642\u0644\u0645\u06CC (Persian Green))",
            "chemicalName": "Persian Historical Pigment (Deep Persian Green)",
            "formula": "Natural Organic / Mineral Complex (Matrix #008679)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 536,
            "chromaOklab": 0.099,
            "spectralReflectancePeak": "536 nm",
            "cieLab": {
              "L": 50,
              "a": -33.9,
              "b": -1.8
            }
          },
          "artMovement": "\u0647\u0646\u0631 \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
          "historicalContextFa": "Persian Green \u062A\u06CC\u0631\u0647\u200C\u062A\u0631 \u062F\u0631 \u0644\u0639\u0627\u0628\u200C\u0647\u0627\u06CC \u067E\u062E\u062A\u0647 \u06A9\u0648\u0631\u0647"
        }
      },
      {
        "id": "minakari-craft-c3",
        "hex": "#E09F3E",
        "nameFa": "\u0632\u0631\u062F \u0637\u0644\u0627\u0627\u0646\u062F\u0648\u062F",
        "nameEn": "Gilded Brass Yellow",
        "role": "\u062D\u0627\u0634\u06CC\u0647\u200C\u0647\u0627 \u0648 \u062E\u0637\u0648\u0637 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
        "roleFa": "\u062D\u0627\u0634\u06CC\u0647\u200C\u0647\u0627 \u0648 \u062E\u0637\u0648\u0637 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u062F\u0631\u062E\u0634\u0634 \u0645\u0633 \u0648 \u0628\u0631\u0646\u062C \u062C\u0644\u0627\u062E\u0648\u0631\u062F\u0647 \u0628\u0627 \u0642\u0644\u0645 \u0641\u0648\u0644\u0627\u062F\u06CC",
        "meaningFa": "\u062F\u0631\u062E\u0634\u0634 \u0645\u0633 \u0648 \u0628\u0631\u0646\u062C \u062C\u0644\u0627\u062E\u0648\u0631\u062F\u0647 \u0628\u0627 \u0642\u0644\u0645 \u0641\u0648\u0644\u0627\u062F\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Gilded Brass Yellow)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0631\u062F \u0637\u0644\u0627\u0627\u0646\u062F\u0648\u062F)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #E09F3E)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 582,
            "dominantWavelengthNm": 582,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7485,
              "a": 0.0381,
              "b": 0.1288
            },
            "srgb": {
              "r": 224,
              "g": 159,
              "b": 62
            },
            "apca": {
              "contrastOnWhite": 44.2,
              "contrastOnBlack": -48.7,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0631\u062F \u0637\u0644\u0627\u0627\u0646\u062F\u0648\u062F)",
            "chemicalName": "Persian Historical Pigment (Gilded Brass Yellow)",
            "formula": "Natural Organic / Mineral Complex (Matrix #E09F3E)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 582,
            "chromaOklab": 0.134,
            "spectralReflectancePeak": "582 nm",
            "cieLab": {
              "L": 70.2,
              "a": 15.4,
              "b": 57.9
            }
          },
          "artMovement": "\u0647\u0646\u0631 \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
          "historicalContextFa": "\u062F\u0631\u062E\u0634\u0634 \u0645\u0633 \u0648 \u0628\u0631\u0646\u062C \u062C\u0644\u0627\u062E\u0648\u0631\u062F\u0647 \u0628\u0627 \u0642\u0644\u0645 \u0641\u0648\u0644\u0627\u062F\u06CC"
        }
      },
      {
        "id": "minakari-craft-c4",
        "hex": "#94D2BD",
        "nameFa": "\u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0645\u0631\u0648\u0627\u0631\u06CC\u062F\u06CC",
        "nameEn": "Pearl Turquoise Glaze",
        "role": "\u0646\u0642\u0648\u0634 \u0631\u06CC\u0632 \u0648 \u0633\u0627\u06CC\u0647\u200C\u0631\u0648\u0634\u0646",
        "roleFa": "\u0646\u0642\u0648\u0634 \u0631\u06CC\u0632 \u0648 \u0633\u0627\u06CC\u0647\u200C\u0631\u0648\u0634\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0644\u0639\u0627\u0628 \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0645\u0627\u062A \u0648 \u067E\u0631\u0637\u0631\u0627\u0648\u062A \u062F\u0631 \u0645\u06CC\u0627\u0646 \u0646\u0642\u0648\u0634 \u0644\u0627\u062C\u0648\u0631\u062F\u06CC",
        "meaningFa": "\u0644\u0639\u0627\u0628 \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0645\u0627\u062A \u0648 \u067E\u0631\u0637\u0631\u0627\u0648\u062A \u062F\u0631 \u0645\u06CC\u0627\u0646 \u0646\u0642\u0648\u0634 \u0644\u0627\u062C\u0648\u0631\u062F\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Pearl Turquoise Glaze)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0645\u0631\u0648\u0627\u0631\u06CC\u062F\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #94D2BD)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 522,
            "dominantWavelengthNm": 522,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.8157,
              "a": -0.0693,
              "b": 0.0104
            },
            "srgb": {
              "r": 148,
              "g": 210,
              "b": 189
            },
            "apca": {
              "contrastOnWhite": 30.4,
              "contrastOnBlack": -63.2,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0645\u0631\u0648\u0627\u0631\u06CC\u062F\u06CC)",
            "chemicalName": "Persian Historical Pigment (Pearl Turquoise Glaze)",
            "formula": "Natural Organic / Mineral Complex (Matrix #94D2BD)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 522,
            "chromaOklab": 0.07,
            "spectralReflectancePeak": "522 nm",
            "cieLab": {
              "L": 79.6,
              "a": -24.2,
              "b": 4.1
            }
          },
          "artMovement": "\u0647\u0646\u0631 \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
          "historicalContextFa": "\u0644\u0639\u0627\u0628 \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0645\u0627\u062A \u0648 \u067E\u0631\u0637\u0631\u0627\u0648\u062A \u062F\u0631 \u0645\u06CC\u0627\u0646 \u0646\u0642\u0648\u0634 \u0644\u0627\u062C\u0648\u0631\u062F\u06CC"
        }
      },
      {
        "id": "minakari-craft-c5",
        "hex": "#FDFBF7",
        "nameFa": "\u0633\u0641\u06CC\u062F \u0644\u0639\u0627\u0628 \u0686\u06CC\u0646\u06CC",
        "nameEn": "Porcelain Enamel White",
        "role": "\u067E\u0648\u0634\u0634 \u0632\u0645\u06CC\u0646\u0647 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0645\u062A\u0646",
        "roleFa": "\u067E\u0648\u0634\u0634 \u0632\u0645\u06CC\u0646\u0647 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0645\u062A\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0644\u0639\u0627\u0628 \u0633\u0641\u06CC\u062F \u067E\u0627\u06CC\u0647 \u0628\u0627 \u0627\u06A9\u0633\u06CC\u062F \u0642\u0644\u0639 \u0648 \u0633\u06CC\u0644\u06CC\u06A9\u0627\u062A \u062E\u0627\u0644\u0635",
        "meaningFa": "\u0644\u0639\u0627\u0628 \u0633\u0641\u06CC\u062F \u067E\u0627\u06CC\u0647 \u0628\u0627 \u0627\u06A9\u0633\u06CC\u062F \u0642\u0644\u0639 \u0648 \u0633\u06CC\u0644\u06CC\u06A9\u0627\u062A \u062E\u0627\u0644\u0635",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Porcelain Enamel White)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0641\u06CC\u062F \u0644\u0639\u0627\u0628 \u0686\u06CC\u0646\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #FDFBF7)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 610,
            "dominantWavelengthNm": 610,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9885,
              "a": 5e-4,
              "b": 57e-4
            },
            "srgb": {
              "r": 253,
              "g": 251,
              "b": 247
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -96.7,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0641\u06CC\u062F \u0644\u0639\u0627\u0628 \u0686\u06CC\u0646\u06CC)",
            "chemicalName": "Persian Historical Pigment (Porcelain Enamel White)",
            "formula": "Natural Organic / Mineral Complex (Matrix #FDFBF7)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 610,
            "chromaOklab": 6e-3,
            "spectralReflectancePeak": "610 nm",
            "cieLab": {
              "L": 98.7,
              "a": -0,
              "b": 2.1
            }
          },
          "artMovement": "\u0647\u0646\u0631 \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
          "historicalContextFa": "\u0644\u0639\u0627\u0628 \u0633\u0641\u06CC\u062F \u067E\u0627\u06CC\u0647 \u0628\u0627 \u0627\u06A9\u0633\u06CC\u062F \u0642\u0644\u0639 \u0648 \u0633\u06CC\u0644\u06CC\u06A9\u0627\u062A \u062E\u0627\u0644\u0635"
        }
      },
      {
        "id": "minakari-craft-c6",
        "hex": "#0A192F",
        "nameFa": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u06A9\u0648\u0631\u0647 \u0645\u06CC\u0646\u0627",
        "nameEn": "Kiln Shadow Navy",
        "role": "\u0633\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u06CC\u0642 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
        "roleFa": "\u0633\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u06CC\u0642 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u062A\u06CC\u0631\u06AF\u06CC \u0627\u06A9\u0633\u06CC\u062F \u06A9\u0628\u0627\u0644\u062A \u067E\u0633 \u0627\u0632 \u062D\u0631\u0627\u0631\u062A \u06F8\u06F0\u06F0 \u062F\u0631\u062C\u0647 \u06A9\u0648\u0631\u0647",
        "meaningFa": "\u062A\u06CC\u0631\u06AF\u06CC \u0627\u06A9\u0633\u06CC\u062F \u06A9\u0628\u0627\u0644\u062A \u067E\u0633 \u0627\u0632 \u062D\u0631\u0627\u0631\u062A \u06F8\u06F0\u06F0 \u062F\u0631\u062C\u0647 \u06A9\u0648\u0631\u0647",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Kiln Shadow Navy)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u06A9\u0648\u0631\u0647 \u0645\u06CC\u0646\u0627)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #0A192F)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 450,
            "dominantWavelengthNm": 450,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.2136,
              "a": -0.0101,
              "b": -0.0473
            },
            "srgb": {
              "r": 10,
              "g": 25,
              "b": 47
            },
            "apca": {
              "contrastOnWhite": 104,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u06A9\u0648\u0631\u0647 \u0645\u06CC\u0646\u0627)",
            "chemicalName": "Persian Historical Pigment (Kiln Shadow Navy)",
            "formula": "Natural Organic / Mineral Complex (Matrix #0A192F)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 450,
            "chromaOklab": 0.048,
            "spectralReflectancePeak": "450 nm",
            "cieLab": {
              "L": 8.7,
              "a": 2.6,
              "b": -16.6
            }
          },
          "artMovement": "\u0647\u0646\u0631 \u0645\u06CC\u0646\u0627\u06A9\u0627\u0631\u06CC \u0648 \u0642\u0644\u0645\u200C\u0632\u0646\u06CC",
          "historicalContextFa": "\u062A\u06CC\u0631\u06AF\u06CC \u0627\u06A9\u0633\u06CC\u062F \u06A9\u0628\u0627\u0644\u062A \u067E\u0633 \u0627\u0632 \u062D\u0631\u0627\u0631\u062A \u06F8\u06F0\u06F0 \u062F\u0631\u062C\u0647 \u06A9\u0648\u0631\u0647"
        }
      }
    ]
  },
  "toranj-illumination": {
    "id": "toranj-illumination",
    "category": "arts",
    "nameFa": "\u062A\u0631\u0646\u062C \u0648 \u0627\u0633\u0644\u06CC\u0645\u06CC \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC",
    "nameEn": "Persian Toranj Illumination (Tazhib)",
    "description": "\u062A\u0630\u0647\u06CC\u0628\u060C \u062A\u0634\u0639\u06CC\u0631 \u0648 \u0637\u0644\u0627\u0627\u0646\u062F\u0627\u0632\u06CC \u0627\u0648\u0631\u0627\u0642 \u0646\u0641\u06CC\u0633 \u062E\u0637\u06CC\u060C \u0634\u0645\u0633\u0647\u200C\u0647\u0627\u06CC \u062A\u0631\u0646\u062C\u06CC \u0648 \u0646\u0642\u0648\u0634 \u0627\u0633\u0644\u06CC\u0645\u06CC \u0632\u0631\u0646\u06AF\u0627\u0631 \u0645\u06A9\u062A\u0628 \u0642\u0632\u0648\u06CC\u0646\u060C \u0647\u0631\u0627\u062A \u0648 \u0627\u0635\u0641\u0647\u0627\u0646.",
    "descriptionFa": "\u062A\u0630\u0647\u06CC\u0628\u060C \u062A\u0634\u0639\u06CC\u0631 \u0648 \u0637\u0644\u0627\u0627\u0646\u062F\u0627\u0632\u06CC \u0627\u0648\u0631\u0627\u0642 \u0646\u0641\u06CC\u0633 \u062E\u0637\u06CC\u060C \u0634\u0645\u0633\u0647\u200C\u0647\u0627\u06CC \u062A\u0631\u0646\u062C\u06CC \u0648 \u0646\u0642\u0648\u0634 \u0627\u0633\u0644\u06CC\u0645\u06CC \u0632\u0631\u0646\u06AF\u0627\u0631 \u0645\u06A9\u062A\u0628 \u0642\u0632\u0648\u06CC\u0646\u060C \u0647\u0631\u0627\u062A \u0648 \u0627\u0635\u0641\u0647\u0627\u0646.",
    "culturalContext": "\u0646\u0633\u062E\u0647\u200C\u0647\u0627\u06CC \u062E\u0637\u06CC \u06A9\u0647\u0646 \u06A9\u0627\u062E \u06AF\u0644\u0633\u062A\u0627\u0646\u060C \u0645\u0648\u0632\u0647 \u0631\u0636\u0627 \u0639\u0628\u0627\u0633\u06CC \u0648 \u06A9\u062A\u0627\u0628\u062E\u0627\u0646\u0647 \u0622\u0633\u062A\u0627\u0646 \u0642\u062F\u0633",
    "culturalContextFa": "\u0646\u0633\u062E\u0647\u200C\u0647\u0627\u06CC \u062E\u0637\u06CC \u06A9\u0647\u0646 \u06A9\u0627\u062E \u06AF\u0644\u0633\u062A\u0627\u0646\u060C \u0645\u0648\u0632\u0647 \u0631\u0636\u0627 \u0639\u0628\u0627\u0633\u06CC \u0648 \u06A9\u062A\u0627\u0628\u062E\u0627\u0646\u0647 \u0622\u0633\u062A\u0627\u0646 \u0642\u062F\u0633",
    "unescoRef": "\u0647\u0646\u0631 \u062A\u0630\u0647\u06CC\u0628 \u0648 \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC \u0633\u0646\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648)",
    "unescoRefFa": "\u0647\u0646\u0631 \u062A\u0630\u0647\u06CC\u0628 \u0648 \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC \u0633\u0646\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Shahnama_of_Shah_Tahmasp_-_Rostam_Pursues_the_Onager-Div_Akvan.jpg/960px-Shahnama_of_Shah_Tahmasp_-_Rostam_Pursues_the_Onager-Div_Akvan.jpg",
    "colors": [
      {
        "id": "toranj-illumination-c1",
        "hex": "#780000",
        "nameFa": "\u0632\u0631\u0634\u06A9\u06CC \u062A\u0630\u0647\u06CC\u0628 \u062A\u06CC\u0645\u0648\u0631\u06CC",
        "nameEn": "Timurid Crimson Carmine",
        "role": "\u0642\u0627\u0628\u200C\u0628\u0646\u062F\u06CC \u0648 \u0634\u0645\u0633\u0647\u200C\u0647\u0627\u06CC \u0634\u0627\u0647\u0646\u0627\u0645\u0647",
        "roleFa": "\u0642\u0627\u0628\u200C\u0628\u0646\u062F\u06CC \u0648 \u0634\u0645\u0633\u0647\u200C\u0647\u0627\u06CC \u0634\u0627\u0647\u0646\u0627\u0645\u0647",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0633\u0644\u0637\u0646\u062A\u06CC \u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0628\u0627\u06CC\u0633\u0646\u0642\u0631\u06CC \u0647\u0631\u0627\u062A",
        "meaningFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0633\u0644\u0637\u0646\u062A\u06CC \u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0628\u0627\u06CC\u0633\u0646\u0642\u0631\u06CC \u0647\u0631\u0627\u062A",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Timurid Crimson Carmine)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0631\u0634\u06A9\u06CC \u062A\u0630\u0647\u06CC\u0628 \u062A\u06CC\u0645\u0648\u0631\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #780000)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 634,
            "dominantWavelengthNm": 634,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.3596,
              "a": 0.1288,
              "b": 0.0721
            },
            "srgb": {
              "r": 120,
              "g": 0,
              "b": 0
            },
            "apca": {
              "contrastOnWhite": 93.9,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0631\u0634\u06A9\u06CC \u062A\u0630\u0647\u06CC\u0628 \u062A\u06CC\u0645\u0648\u0631\u06CC)",
            "chemicalName": "Persian Historical Pigment (Timurid Crimson Carmine)",
            "formula": "Natural Organic / Mineral Complex (Matrix #780000)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 634,
            "chromaOklab": 0.148,
            "spectralReflectancePeak": "634 nm",
            "cieLab": {
              "L": 23.6,
              "a": 45.9,
              "b": 35.6
            }
          },
          "artMovement": "\u062A\u0631\u0646\u062C \u0648 \u0627\u0633\u0644\u06CC\u0645\u06CC \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC",
          "historicalContextFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0633\u0644\u0637\u0646\u062A\u06CC \u06A9\u0627\u0631\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0628\u0627\u06CC\u0633\u0646\u0642\u0631\u06CC \u0647\u0631\u0627\u062A"
        }
      },
      {
        "id": "toranj-illumination-c2",
        "hex": "#283655",
        "nameFa": "\u0646\u06CC\u0644\u06CC \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0634\u0645\u0633\u0647 (Indigo)",
        "nameEn": "Indigo Shamseh Navy",
        "role": "\u0632\u0645\u06CC\u0646\u0647 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627 \u0648 \u0633\u0631\u0644\u0648\u062D",
        "roleFa": "\u0632\u0645\u06CC\u0646\u0647 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627 \u0648 \u0633\u0631\u0644\u0648\u062D",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u0646\u06CC\u0644\u06CC \u067E\u0631\u0645\u0627\u06CC\u0647 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u0642\u0631\u0622\u0646\u200C\u0647\u0627\u06CC \u0646\u0641\u06CC\u0633 \u0635\u0641\u0648\u06CC",
        "meaningFa": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u0646\u06CC\u0644\u06CC \u067E\u0631\u0645\u0627\u06CC\u0647 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u0642\u0631\u0622\u0646\u200C\u0647\u0627\u06CC \u0646\u0641\u06CC\u0633 \u0635\u0641\u0648\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Indigo Shamseh Navy)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0646\u06CC\u0644\u06CC \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0634\u0645\u0633\u0647 (Indigo))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #283655)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 451,
            "dominantWavelengthNm": 451,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.3359,
              "a": -51e-4,
              "b": -0.0579
            },
            "srgb": {
              "r": 40,
              "g": 54,
              "b": 85
            },
            "apca": {
              "contrastOnWhite": 96.9,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0646\u06CC\u0644\u06CC \u0644\u0627\u062C\u0648\u0631\u062F\u06CC \u0634\u0645\u0633\u0647 (Indigo))",
            "chemicalName": "Persian Historical Pigment (Indigo Shamseh Navy)",
            "formula": "Natural Organic / Mineral Complex (Matrix #283655)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 451,
            "chromaOklab": 0.058,
            "spectralReflectancePeak": "451 nm",
            "cieLab": {
              "L": 22.8,
              "a": 4.2,
              "b": -20.6
            }
          },
          "artMovement": "\u062A\u0631\u0646\u062C \u0648 \u0627\u0633\u0644\u06CC\u0645\u06CC \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC",
          "historicalContextFa": "\u0633\u0631\u0645\u0647\u200C\u0627\u06CC \u0646\u06CC\u0644\u06CC \u067E\u0631\u0645\u0627\u06CC\u0647 \u06A9\u062A\u06CC\u0628\u0647\u200C\u0647\u0627\u06CC \u0642\u0631\u0622\u0646\u200C\u0647\u0627\u06CC \u0646\u0641\u06CC\u0633 \u0635\u0641\u0648\u06CC"
        }
      },
      {
        "id": "toranj-illumination-c3",
        "hex": "#DAA520",
        "nameFa": "\u0637\u0644\u0627\u06CC \u0646\u0627\u0628 \u0634\u0645\u0633\u0647 (Goldenrod)",
        "nameEn": "Goldenrod Gold",
        "role": "\u062A\u0627\u062C \u0634\u0645\u0633\u0647 \u0648 \u062C\u062F\u0648\u0644\u200C\u06A9\u0634\u06CC",
        "roleFa": "\u062A\u0627\u062C \u0634\u0645\u0633\u0647 \u0648 \u062C\u062F\u0648\u0644\u200C\u06A9\u0634\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u062F\u0631\u062E\u0634\u0634 \u0632\u0631\u06CC\u0646 \u0637\u0644\u0627\u06CC \u0639\u06CC\u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0631 \u0637\u0644\u0627\u0627\u0646\u062F\u0627\u0632\u06CC \u0627\u0648\u0631\u0627\u0642 \u06A9\u0647\u0646",
        "meaningFa": "\u062F\u0631\u062E\u0634\u0634 \u0632\u0631\u06CC\u0646 \u0637\u0644\u0627\u06CC \u0639\u06CC\u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0631 \u0637\u0644\u0627\u0627\u0646\u062F\u0627\u0632\u06CC \u0627\u0648\u0631\u0627\u0642 \u06A9\u0647\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Goldenrod Gold)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0637\u0644\u0627\u06CC \u0646\u0627\u0628 \u0634\u0645\u0633\u0647 (Goldenrod))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #DAA520)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 584,
            "dominantWavelengthNm": 584,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7516,
              "a": 0.0154,
              "b": 0.1461
            },
            "srgb": {
              "r": 218,
              "g": 165,
              "b": 32
            },
            "apca": {
              "contrastOnWhite": 43.2,
              "contrastOnBlack": -49.7,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0637\u0644\u0627\u06CC \u0646\u0627\u0628 \u0634\u0645\u0633\u0647 (Goldenrod))",
            "chemicalName": "Persian Historical Pigment (Goldenrod Gold)",
            "formula": "Natural Organic / Mineral Complex (Matrix #DAA520)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 584,
            "chromaOklab": 0.147,
            "spectralReflectancePeak": "584 nm",
            "cieLab": {
              "L": 70.8,
              "a": 8.5,
              "b": 68.8
            }
          },
          "artMovement": "\u062A\u0631\u0646\u062C \u0648 \u0627\u0633\u0644\u06CC\u0645\u06CC \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC",
          "historicalContextFa": "\u062F\u0631\u062E\u0634\u0634 \u0632\u0631\u06CC\u0646 \u0637\u0644\u0627\u06CC \u0639\u06CC\u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0631 \u0637\u0644\u0627\u0627\u0646\u062F\u0627\u0632\u06CC \u0627\u0648\u0631\u0627\u0642 \u06A9\u0647\u0646"
        }
      },
      {
        "id": "toranj-illumination-c4",
        "hex": "#386641",
        "nameFa": "\u0633\u0628\u0632 \u0635\u0645\u063A\u06CC \u06A9\u0647\u0646",
        "nameEn": "Malachite Resin Green",
        "role": "\u0627\u0633\u0644\u06CC\u0645\u06CC\u200C\u0647\u0627\u06CC \u0628\u0631\u06AF\u0686\u0647\u200C\u0627\u06CC",
        "roleFa": "\u0627\u0633\u0644\u06CC\u0645\u06CC\u200C\u0647\u0627\u06CC \u0628\u0631\u06AF\u0686\u0647\u200C\u0627\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0627\u06A9\u0633\u06CC\u062F \u0645\u0633 \u0622\u0645\u06CC\u062E\u062A\u0647 \u0628\u0627 \u0635\u0645\u063A \u0639\u0631\u0628\u06CC \u0648 \u0622\u0628 \u0644\u06CC\u0645\u0648",
        "meaningFa": "\u0627\u06A9\u0633\u06CC\u062F \u0645\u0633 \u0622\u0645\u06CC\u062E\u062A\u0647 \u0628\u0627 \u0635\u0645\u063A \u0639\u0631\u0628\u06CC \u0648 \u0622\u0628 \u0644\u06CC\u0645\u0648",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Malachite Resin Green)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0628\u0632 \u0635\u0645\u063A\u06CC \u06A9\u0647\u0646)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #386641)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 519,
            "dominantWavelengthNm": 519,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.4665,
              "a": -0.0672,
              "b": 0.0405
            },
            "srgb": {
              "r": 56,
              "g": 102,
              "b": 65
            },
            "apca": {
              "contrastOnWhite": 82.1,
              "contrastOnBlack": -10.5,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0628\u0632 \u0635\u0645\u063A\u06CC \u06A9\u0647\u0646)",
            "chemicalName": "Persian Historical Pigment (Malachite Resin Green)",
            "formula": "Natural Organic / Mineral Complex (Matrix #386641)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 519,
            "chromaOklab": 0.078,
            "spectralReflectancePeak": "519 nm",
            "cieLab": {
              "L": 39.1,
              "a": -24.7,
              "b": 16.1
            }
          },
          "artMovement": "\u062A\u0631\u0646\u062C \u0648 \u0627\u0633\u0644\u06CC\u0645\u06CC \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC",
          "historicalContextFa": "\u0627\u06A9\u0633\u06CC\u062F \u0645\u0633 \u0622\u0645\u06CC\u062E\u062A\u0647 \u0628\u0627 \u0635\u0645\u063A \u0639\u0631\u0628\u06CC \u0648 \u0622\u0628 \u0644\u06CC\u0645\u0648"
        }
      },
      {
        "id": "toranj-illumination-c5",
        "hex": "#FDFBF4",
        "nameFa": "\u067E\u0648\u0633\u062A \u0622\u0647\u0648\u06CC \u062E\u0637\u0627\u0637\u06CC",
        "nameEn": "Parchment Vellum White",
        "role": "\u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0648 \u0645\u062A\u0646 \u0628\u0627 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0628\u0627\u0644\u0627",
        "roleFa": "\u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0648 \u0645\u062A\u0646 \u0628\u0627 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0628\u0627\u0644\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u06A9\u0627\u063A\u0630 \u0622\u0647\u0627\u0631\u06CC \u062F\u0633\u062A\u200C\u0633\u0627\u0632 \u0645\u0647\u0631\u0647\u200C\u062E\u0648\u0631\u062F\u0647 \u0628\u0631\u0627\u06CC \u06A9\u062A\u0627\u0628\u062A \u0646\u0633\u062A\u0639\u0644\u06CC\u0642",
        "meaningFa": "\u06A9\u0627\u063A\u0630 \u0622\u0647\u0627\u0631\u06CC \u062F\u0633\u062A\u200C\u0633\u0627\u0632 \u0645\u0647\u0631\u0647\u200C\u062E\u0648\u0631\u062F\u0647 \u0628\u0631\u0627\u06CC \u06A9\u062A\u0627\u0628\u062A \u0646\u0633\u062A\u0639\u0644\u06CC\u0642",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Parchment Vellum White)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u067E\u0648\u0633\u062A \u0622\u0647\u0648\u06CC \u062E\u0637\u0627\u0637\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #FDFBF4)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 610,
            "dominantWavelengthNm": 610,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9877,
              "a": -6e-4,
              "b": 94e-4
            },
            "srgb": {
              "r": 253,
              "g": 251,
              "b": 244
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -96.6,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u067E\u0648\u0633\u062A \u0622\u0647\u0648\u06CC \u062E\u0637\u0627\u0637\u06CC)",
            "chemicalName": "Persian Historical Pigment (Parchment Vellum White)",
            "formula": "Natural Organic / Mineral Complex (Matrix #FDFBF4)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 610,
            "chromaOklab": 9e-3,
            "spectralReflectancePeak": "610 nm",
            "cieLab": {
              "L": 98.6,
              "a": -0.5,
              "b": 3.6
            }
          },
          "artMovement": "\u062A\u0631\u0646\u062C \u0648 \u0627\u0633\u0644\u06CC\u0645\u06CC \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC",
          "historicalContextFa": "\u06A9\u0627\u063A\u0630 \u0622\u0647\u0627\u0631\u06CC \u062F\u0633\u062A\u200C\u0633\u0627\u0632 \u0645\u0647\u0631\u0647\u200C\u062E\u0648\u0631\u062F\u0647 \u0628\u0631\u0627\u06CC \u06A9\u062A\u0627\u0628\u062A \u0646\u0633\u062A\u0639\u0644\u06CC\u0642"
        }
      },
      {
        "id": "toranj-illumination-c6",
        "hex": "#000000",
        "nameFa": "\u0645\u0631\u06A9\u0628 \u0633\u06CC\u0627\u0647 \u06A9\u062A\u0627\u0628\u062A (India Ink)",
        "nameEn": "India Ink Black",
        "role": "\u062E\u0637\u0648\u0637 \u0645\u062A\u0646 \u0648 \u0627\u0639\u0631\u0627\u0628\u200C\u06AF\u0630\u0627\u0631\u06CC",
        "roleFa": "\u062E\u0637\u0648\u0637 \u0645\u062A\u0646 \u0648 \u0627\u0639\u0631\u0627\u0628\u200C\u06AF\u0630\u0627\u0631\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u062E\u0644\u0648\u0635 \u06A9\u0627\u0645\u0644 \u062F\u0648\u062F\u0647 \u0633\u0646\u062A\u06CC \u0648 \u0645\u0631\u06A9\u0628 \u0636\u062F\u0622\u0628 \u062E\u0648\u0634\u0646\u0648\u06CC\u0633\u06CC \u0645\u06CC\u0631\u0639\u0645\u0627\u062F",
        "meaningFa": "\u062E\u0644\u0648\u0635 \u06A9\u0627\u0645\u0644 \u062F\u0648\u062F\u0647 \u0633\u0646\u062A\u06CC \u0648 \u0645\u0631\u06A9\u0628 \u0636\u062F\u0622\u0628 \u062E\u0648\u0634\u0646\u0648\u06CC\u0633\u06CC \u0645\u06CC\u0631\u0639\u0645\u0627\u062F",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (India Ink Black)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0631\u06A9\u0628 \u0633\u06CC\u0627\u0647 \u06A9\u062A\u0627\u0628\u062A (India Ink))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #000000)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 610,
            "dominantWavelengthNm": 610,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0,
              "a": 0,
              "b": 0
            },
            "srgb": {
              "r": 0,
              "g": 0,
              "b": 0
            },
            "apca": {
              "contrastOnWhite": 105.7,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0631\u06A9\u0628 \u0633\u06CC\u0627\u0647 \u06A9\u062A\u0627\u0628\u062A (India Ink))",
            "chemicalName": "Persian Historical Pigment (India Ink Black)",
            "formula": "Natural Organic / Mineral Complex (Matrix #000000)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 610,
            "chromaOklab": 0,
            "spectralReflectancePeak": "610 nm",
            "cieLab": {
              "L": 0,
              "a": 0,
              "b": 0
            }
          },
          "artMovement": "\u062A\u0631\u0646\u062C \u0648 \u0627\u0633\u0644\u06CC\u0645\u06CC \u06A9\u062A\u0627\u0628\u200C\u0622\u0631\u0627\u06CC\u06CC",
          "historicalContextFa": "\u062E\u0644\u0648\u0635 \u06A9\u0627\u0645\u0644 \u062F\u0648\u062F\u0647 \u0633\u0646\u062A\u06CC \u0648 \u0645\u0631\u06A9\u0628 \u0636\u062F\u0622\u0628 \u062E\u0648\u0634\u0646\u0648\u06CC\u0633\u06CC \u0645\u06CC\u0631\u0639\u0645\u0627\u062F"
        }
      }
    ]
  },
  "persian-gulf-pearls": {
    "id": "persian-gulf-pearls",
    "category": "nature",
    "nameFa": "\u0631\u0627\u0632 \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0642\u0634\u0645",
    "nameEn": "Persian Gulf & Hormuz Crimson Coast",
    "description": "\u0627\u0645\u0648\u0627\u062C \u0646\u06CC\u0644\u06AF\u0648\u0646 \u062E\u0644\u06CC\u062C \u067E\u0627\u0631\u0633\u060C \u062E\u0627\u06A9 \u0633\u0631\u062E \u0645\u0639\u062F\u0646\u06CC \u062C\u0632\u06CC\u0631\u0647 \u0647\u0631\u0645\u0632\u060C \u062F\u0631\u062E\u0634\u0634 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u063A\u0644\u0637\u0627\u0646 \u0642\u0634\u0645 \u0648 \u0635\u062E\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u0631\u062C\u0627\u0646\u06CC \u0633\u0648\u0627\u062D\u0644 \u0645\u06A9\u0631\u0627\u0646.",
    "descriptionFa": "\u0627\u0645\u0648\u0627\u062C \u0646\u06CC\u0644\u06AF\u0648\u0646 \u062E\u0644\u06CC\u062C \u067E\u0627\u0631\u0633\u060C \u062E\u0627\u06A9 \u0633\u0631\u062E \u0645\u0639\u062F\u0646\u06CC \u062C\u0632\u06CC\u0631\u0647 \u0647\u0631\u0645\u0632\u060C \u062F\u0631\u062E\u0634\u0634 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u063A\u0644\u0637\u0627\u0646 \u0642\u0634\u0645 \u0648 \u0635\u062E\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u0631\u062C\u0627\u0646\u06CC \u0633\u0648\u0627\u062D\u0644 \u0645\u06A9\u0631\u0627\u0646.",
    "culturalContext": "\u062A\u0646\u06AF\u0647 \u0647\u0631\u0645\u0632\u060C \u062C\u0632\u0627\u06CC\u0631 \u0642\u0634\u0645\u060C \u0647\u0631\u0645\u0632\u060C \u06A9\u06CC\u0634 \u0648 \u062F\u0631\u06CC\u0627\u0646\u0648\u0631\u062F\u06CC \u0628\u0627\u062F\u0628\u0627\u0646\u06CC \u0644\u0646\u062C\u200C\u0647\u0627\u06CC \u06A9\u0647\u0646",
    "culturalContextFa": "\u062A\u0646\u06AF\u0647 \u0647\u0631\u0645\u0632\u060C \u062C\u0632\u0627\u06CC\u0631 \u0642\u0634\u0645\u060C \u0647\u0631\u0645\u0632\u060C \u06A9\u06CC\u0634 \u0648 \u062F\u0631\u06CC\u0627\u0646\u0648\u0631\u062F\u06CC \u0628\u0627\u062F\u0628\u0627\u0646\u06CC \u0644\u0646\u062C\u200C\u0647\u0627\u06CC \u06A9\u0647\u0646",
    "unescoRef": "\u062F\u0627\u0646\u0634 \u0633\u0627\u062E\u062A \u0648 \u062F\u0631\u06CC\u0627\u0646\u0648\u0631\u062F\u06CC \u0628\u0627 \u0644\u0646\u062C \u0633\u0646\u062A\u06CC \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 (\u0645\u06CC\u0631\u0627\u062B \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F1)",
    "unescoRefFa": "\u062F\u0627\u0646\u0634 \u0633\u0627\u062E\u062A \u0648 \u062F\u0631\u06CC\u0627\u0646\u0648\u0631\u062F\u06CC \u0628\u0627 \u0644\u0646\u062C \u0633\u0646\u062A\u06CC \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 (\u0645\u06CC\u0631\u0627\u062B \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F1)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Hormuz_Island%2C_Iran_%2849544498308%29.jpg/960px-Hormuz_Island%2C_Iran_%2849544498308%29.jpg",
    "colors": [
      {
        "id": "persian-gulf-pearls-c1",
        "hex": "#0067A5",
        "nameFa": "\u0622\u0628\u06CC \u067E\u0627\u0631\u0633\u06CC \u0627\u0635\u06CC\u0644 (Medium Persian Blue)",
        "nameEn": "Medium Persian Blue",
        "role": "\u0627\u0645\u0648\u0627\u062C \u0633\u0637\u062D\u06CC \u062E\u0644\u06CC\u062C",
        "roleFa": "\u0627\u0645\u0648\u0627\u062C \u0633\u0637\u062D\u06CC \u062E\u0644\u06CC\u062C",
        "roleEn": "Primary Accent",
        "meaning": "\u0622\u0628\u06CC \u0631\u0648\u0634\u0646\u200C\u062A\u0631 \u062F\u0631\u06CC\u0627\u06CC\u06CC \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u062C\u0647\u0627\u0646\u06CC \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633",
        "meaningFa": "\u0622\u0628\u06CC \u0631\u0648\u0634\u0646\u200C\u062A\u0631 \u062F\u0631\u06CC\u0627\u06CC\u06CC \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u062C\u0647\u0627\u0646\u06CC \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Medium Persian Blue)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0622\u0628\u06CC \u067E\u0627\u0631\u0633\u06CC \u0627\u0635\u06CC\u0644 (Medium Persian Blue))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #0067A5)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 490,
            "dominantWavelengthNm": 490,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.4972,
              "a": -0.0525,
              "b": -0.115
            },
            "srgb": {
              "r": 0,
              "g": 103,
              "b": 165
            },
            "apca": {
              "contrastOnWhite": 78.8,
              "contrastOnBlack": -13.7,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0622\u0628\u06CC \u067E\u0627\u0631\u0633\u06CC \u0627\u0635\u06CC\u0644 (Medium Persian Blue))",
            "chemicalName": "Persian Historical Pigment (Medium Persian Blue)",
            "formula": "Natural Organic / Mineral Complex (Matrix #0067A5)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 490,
            "chromaOklab": 0.126,
            "spectralReflectancePeak": "490 nm",
            "cieLab": {
              "L": 41.9,
              "a": -1.1,
              "b": -40.3
            }
          },
          "artMovement": "\u0631\u0627\u0632 \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0642\u0634\u0645",
          "historicalContextFa": "\u0622\u0628\u06CC \u0631\u0648\u0634\u0646\u200C\u062A\u0631 \u062F\u0631\u06CC\u0627\u06CC\u06CC \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u062C\u0647\u0627\u0646\u06CC \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633"
        }
      },
      {
        "id": "persian-gulf-pearls-c2",
        "hex": "#00B4D8",
        "nameFa": "\u0622\u0628\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0642\u0634\u0645",
        "nameEn": "Qeshm Turquoise Shore",
        "role": "\u0622\u0628\u200C\u0647\u0627\u06CC \u06A9\u0645\u200C\u0639\u0645\u0642 \u0645\u0631\u062C\u0627\u0646\u06CC",
        "roleFa": "\u0622\u0628\u200C\u0647\u0627\u06CC \u06A9\u0645\u200C\u0639\u0645\u0642 \u0645\u0631\u062C\u0627\u0646\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0634\u0641\u0627\u0641\u06CC\u062A \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u062F\u0631 \u0633\u0627\u062D\u0644 \u0646\u0627\u0632 \u0648 \u062C\u0632\u06CC\u0631\u0647 \u0647\u0646\u06AF\u0627\u0645",
        "meaningFa": "\u0634\u0641\u0627\u0641\u06CC\u062A \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u062F\u0631 \u0633\u0627\u062D\u0644 \u0646\u0627\u0632 \u0648 \u062C\u0632\u06CC\u0631\u0647 \u0647\u0646\u06AF\u0627\u0645",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Qeshm Turquoise Shore)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0622\u0628\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0642\u0634\u0645)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #00B4D8)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 502,
            "dominantWavelengthNm": 502,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7114,
              "a": -0.1,
              "b": -0.0809
            },
            "srgb": {
              "r": 0,
              "g": 180,
              "b": 216
            },
            "apca": {
              "contrastOnWhite": 47.1,
              "contrastOnBlack": -45.6,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0622\u0628\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC \u0642\u0634\u0645)",
            "chemicalName": "Persian Historical Pigment (Qeshm Turquoise Shore)",
            "formula": "Natural Organic / Mineral Complex (Matrix #00B4D8)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 502,
            "chromaOklab": 0.129,
            "spectralReflectancePeak": "502 nm",
            "cieLab": {
              "L": 67.7,
              "a": -25.4,
              "b": -28.8
            }
          },
          "artMovement": "\u0631\u0627\u0632 \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0642\u0634\u0645",
          "historicalContextFa": "\u0634\u0641\u0627\u0641\u06CC\u062A \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u062F\u0631 \u0633\u0627\u062D\u0644 \u0646\u0627\u0632 \u0648 \u062C\u0632\u06CC\u0631\u0647 \u0647\u0646\u06AF\u0627\u0645"
        }
      },
      {
        "id": "persian-gulf-pearls-c3",
        "hex": "#901C1C",
        "nameFa": "\u062E\u0627\u06A9 \u0633\u0631\u062E \u0647\u0631\u0645\u0632 (Red Ochre)",
        "nameEn": "Hormuz Red Ochre",
        "role": "\u0635\u062E\u0631\u0647\u200C\u0647\u0627 \u0648 \u0633\u0627\u062D\u0644 \u0633\u0631\u062E",
        "roleFa": "\u0635\u062E\u0631\u0647\u200C\u0647\u0627 \u0648 \u0633\u0627\u062D\u0644 \u0633\u0631\u062E",
        "roleEn": "Primary Accent",
        "meaning": "\u0627\u0635\u0644\u0627\u062D \u0634\u062F\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u06A9\u0633\u06CC\u062F \u0622\u0647\u0646 \u062E\u0648\u0631\u0627\u06A9\u06CC \u0645\u0639\u062F\u0646 \u062E\u0627\u06A9 \u0647\u0631\u0645\u0632",
        "meaningFa": "\u0627\u0635\u0644\u0627\u062D \u0634\u062F\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u06A9\u0633\u06CC\u062F \u0622\u0647\u0646 \u062E\u0648\u0631\u0627\u06A9\u06CC \u0645\u0639\u062F\u0646 \u062E\u0627\u06A9 \u0647\u0631\u0645\u0632",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Hormuz Red Ochre)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062E\u0627\u06A9 \u0633\u0631\u062E \u0647\u0631\u0645\u0632 (Red Ochre))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #901C1C)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 633,
            "dominantWavelengthNm": 633,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.4273,
              "a": 0.1357,
              "b": 0.0677
            },
            "srgb": {
              "r": 144,
              "g": 28,
              "b": 28
            },
            "apca": {
              "contrastOnWhite": 88.2,
              "contrastOnBlack": 0,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062E\u0627\u06A9 \u0633\u0631\u062E \u0647\u0631\u0645\u0632 (Red Ochre))",
            "chemicalName": "Persian Historical Pigment (Hormuz Red Ochre)",
            "formula": "Natural Organic / Mineral Complex (Matrix #901C1C)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 633,
            "chromaOklab": 0.152,
            "spectralReflectancePeak": "633 nm",
            "cieLab": {
              "L": 31.4,
              "a": 47.2,
              "b": 31
            }
          },
          "artMovement": "\u0631\u0627\u0632 \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0642\u0634\u0645",
          "historicalContextFa": "\u0627\u0635\u0644\u0627\u062D \u0634\u062F\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u06A9\u0633\u06CC\u062F \u0622\u0647\u0646 \u062E\u0648\u0631\u0627\u06A9\u06CC \u0645\u0639\u062F\u0646 \u062E\u0627\u06A9 \u0647\u0631\u0645\u0632"
        }
      },
      {
        "id": "persian-gulf-pearls-c4",
        "hex": "#F2ECE4",
        "nameFa": "\u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0635\u06CC\u062F \u0644\u0646\u06AF\u0647",
        "nameEn": "Persian Gulf Pearl",
        "role": "\u0635\u062F\u0641\u200C\u0647\u0627 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleFa": "\u0635\u062F\u0641\u200C\u0647\u0627 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u062F\u0631\u062E\u0634\u0634 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F\u0647\u0627\u06CC \u0637\u0628\u06CC\u0639\u06CC \u063A\u0648\u0627\u0635\u0627\u0646 \u0628\u0646\u062F\u0631 \u0644\u0646\u06AF\u0647 \u0648 \u062E\u0627\u0631\u06A9",
        "meaningFa": "\u062F\u0631\u062E\u0634\u0634 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F\u0647\u0627\u06CC \u0637\u0628\u06CC\u0639\u06CC \u063A\u0648\u0627\u0635\u0627\u0646 \u0628\u0646\u062F\u0631 \u0644\u0646\u06AF\u0647 \u0648 \u062E\u0627\u0631\u06A9",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Persian Gulf Pearl)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0635\u06CC\u062F \u0644\u0646\u06AF\u0647)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #F2ECE4)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 605,
            "dominantWavelengthNm": 605,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9456,
              "a": 32e-4,
              "b": 0.0121
            },
            "srgb": {
              "r": 242,
              "g": 236,
              "b": 228
            },
            "apca": {
              "contrastOnWhite": 8.1,
              "contrastOnBlack": -87.4,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0635\u06CC\u062F \u0644\u0646\u06AF\u0647)",
            "chemicalName": "Persian Historical Pigment (Persian Gulf Pearl)",
            "formula": "Natural Organic / Mineral Complex (Matrix #F2ECE4)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 605,
            "chromaOklab": 0.013,
            "spectralReflectancePeak": "605 nm",
            "cieLab": {
              "L": 93.7,
              "a": 0.6,
              "b": 4.6
            }
          },
          "artMovement": "\u0631\u0627\u0632 \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0642\u0634\u0645",
          "historicalContextFa": "\u062F\u0631\u062E\u0634\u0634 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F\u0647\u0627\u06CC \u0637\u0628\u06CC\u0639\u06CC \u063A\u0648\u0627\u0635\u0627\u0646 \u0628\u0646\u062F\u0631 \u0644\u0646\u06AF\u0647 \u0648 \u062E\u0627\u0631\u06A9"
        }
      },
      {
        "id": "persian-gulf-pearls-c5",
        "hex": "#DDA15E",
        "nameFa": "\u0645\u0627\u0633\u0647 \u06AF\u0631\u0645 \u0633\u0627\u062D\u0644\u06CC",
        "nameEn": "Sun-warmed Coastal Sand",
        "role": "\u062E\u0637 \u0633\u0627\u062D\u0644\u06CC \u0648 \u0647\u0627\u06CC\u200C\u0644\u0627\u06CC\u062A",
        "roleFa": "\u062E\u0637 \u0633\u0627\u062D\u0644\u06CC \u0648 \u0647\u0627\u06CC\u200C\u0644\u0627\u06CC\u062A",
        "roleEn": "Primary Accent",
        "meaning": "\u0645\u0627\u0633\u0647 \u0637\u0644\u0627\u06CC\u06CC \u062A\u0641\u062A\u06CC\u062F\u0647 \u0632\u06CC\u0631 \u062A\u0627\u0628\u0634 \u0622\u0641\u062A\u0627\u0628 \u062C\u0646\u0648\u0628",
        "meaningFa": "\u0645\u0627\u0633\u0647 \u0637\u0644\u0627\u06CC\u06CC \u062A\u0641\u062A\u06CC\u062F\u0647 \u0632\u06CC\u0631 \u062A\u0627\u0628\u0634 \u0622\u0641\u062A\u0627\u0628 \u062C\u0646\u0648\u0628",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Sun-warmed Coastal Sand)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0627\u0633\u0647 \u06AF\u0631\u0645 \u0633\u0627\u062D\u0644\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #DDA15E)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 583,
            "dominantWavelengthNm": 583,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7525,
              "a": 0.0416,
              "b": 0.1021
            },
            "srgb": {
              "r": 221,
              "g": 161,
              "b": 94
            },
            "apca": {
              "contrastOnWhite": 43.6,
              "contrastOnBlack": -49.3,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0627\u0633\u0647 \u06AF\u0631\u0645 \u0633\u0627\u062D\u0644\u06CC)",
            "chemicalName": "Persian Historical Pigment (Sun-warmed Coastal Sand)",
            "formula": "Natural Organic / Mineral Complex (Matrix #DDA15E)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 583,
            "chromaOklab": 0.11,
            "spectralReflectancePeak": "583 nm",
            "cieLab": {
              "L": 70.6,
              "a": 15,
              "b": 43.2
            }
          },
          "artMovement": "\u0631\u0627\u0632 \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0642\u0634\u0645",
          "historicalContextFa": "\u0645\u0627\u0633\u0647 \u0637\u0644\u0627\u06CC\u06CC \u062A\u0641\u062A\u06CC\u062F\u0647 \u0632\u06CC\u0631 \u062A\u0627\u0628\u0634 \u0622\u0641\u062A\u0627\u0628 \u062C\u0646\u0648\u0628"
        }
      },
      {
        "id": "persian-gulf-pearls-c6",
        "hex": "#03071E",
        "nameFa": "\u0622\u0628\u06CC \u0698\u0631\u0641\u0627\u06CC \u062E\u0644\u06CC\u062C",
        "nameEn": "Abyssal Persian Deep Blue",
        "role": "\u0639\u0645\u0642 \u062F\u0631\u06CC\u0627 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0639\u0645\u06CC\u0642",
        "roleFa": "\u0639\u0645\u0642 \u062F\u0631\u06CC\u0627 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0639\u0645\u06CC\u0642",
        "roleEn": "Primary Accent",
        "meaning": "\u0622\u0628\u06CC \u0628\u06CC\u200C\u06A9\u0631\u0627\u0646 \u062A\u0646\u06AF\u0647 \u0647\u0631\u0645\u0632 \u062F\u0631 \u0698\u0631\u0641\u200C\u062A\u0631\u06CC\u0646 \u0646\u0642\u0627\u0637 \u062F\u0631\u06CC\u0627\u06CC\u06CC",
        "meaningFa": "\u0622\u0628\u06CC \u0628\u06CC\u200C\u06A9\u0631\u0627\u0646 \u062A\u0646\u06AF\u0647 \u0647\u0631\u0645\u0632 \u062F\u0631 \u0698\u0631\u0641\u200C\u062A\u0631\u06CC\u0646 \u0646\u0642\u0627\u0637 \u062F\u0631\u06CC\u0627\u06CC\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Abyssal Persian Deep Blue)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0622\u0628\u06CC \u0698\u0631\u0641\u0627\u06CC \u062E\u0644\u06CC\u062C)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #03071E)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 449,
            "dominantWavelengthNm": 449,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.1413,
              "a": -17e-4,
              "b": -0.0506
            },
            "srgb": {
              "r": 3,
              "g": 7,
              "b": 30
            },
            "apca": {
              "contrastOnWhite": 105.5,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0622\u0628\u06CC \u0698\u0631\u0641\u0627\u06CC \u062E\u0644\u06CC\u062C)",
            "chemicalName": "Persian Historical Pigment (Abyssal Persian Deep Blue)",
            "formula": "Natural Organic / Mineral Complex (Matrix #03071E)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 449,
            "chromaOklab": 0.051,
            "spectralReflectancePeak": "449 nm",
            "cieLab": {
              "L": 2.4,
              "a": 3.9,
              "b": -13.5
            }
          },
          "artMovement": "\u0631\u0627\u0632 \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0642\u0634\u0645",
          "historicalContextFa": "\u0622\u0628\u06CC \u0628\u06CC\u200C\u06A9\u0631\u0627\u0646 \u062A\u0646\u06AF\u0647 \u0647\u0631\u0645\u0632 \u062F\u0631 \u0698\u0631\u0641\u200C\u062A\u0631\u06CC\u0646 \u0646\u0642\u0627\u0637 \u062F\u0631\u06CC\u0627\u06CC\u06CC"
        }
      }
    ]
  },
  "gardens-of-shiraz": {
    "id": "gardens-of-shiraz",
    "category": "nature",
    "nameFa": "\u0628\u0627\u063A\u200C\u0647\u0627\u06CC \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632",
    "nameEn": "Gardens of Shiraz & Eram Paradise",
    "description": "\u067E\u0631\u062F\u06CC\u0633\u200C\u0647\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u0628\u0627\u063A \u0627\u0631\u0645 \u0648 \u062F\u0644\u06AF\u0634\u0627\u060C \u0639\u0637\u0631 \u06AF\u0644 \u0633\u0631\u062E \u0645\u062D\u0645\u062F\u06CC\u060C \u0637\u0631\u0627\u0648\u062A \u0628\u0647\u0627\u0631\u0646\u0627\u0631\u0646\u062C \u0648 \u0633\u0627\u06CC\u0647\u200C\u0633\u0627\u0631 \u0633\u0631\u0648\u0647\u0627\u06CC \u0646\u0627\u0632 \u062D\u0627\u0641\u0638\u06CC\u0647 \u062F\u0631 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632.",
    "descriptionFa": "\u067E\u0631\u062F\u06CC\u0633\u200C\u0647\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC \u0628\u0627\u063A \u0627\u0631\u0645 \u0648 \u062F\u0644\u06AF\u0634\u0627\u060C \u0639\u0637\u0631 \u06AF\u0644 \u0633\u0631\u062E \u0645\u062D\u0645\u062F\u06CC\u060C \u0637\u0631\u0627\u0648\u062A \u0628\u0647\u0627\u0631\u0646\u0627\u0631\u0646\u062C \u0648 \u0633\u0627\u06CC\u0647\u200C\u0633\u0627\u0631 \u0633\u0631\u0648\u0647\u0627\u06CC \u0646\u0627\u0632 \u062D\u0627\u0641\u0638\u06CC\u0647 \u062F\u0631 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632.",
    "culturalContext": "\u0628\u0627\u063A \u0627\u0631\u0645\u060C \u0646\u0627\u0631\u0646\u062C\u0633\u062A\u0627\u0646 \u0642\u0648\u0627\u0645\u060C \u0628\u0627\u063A \u062C\u0647\u0627\u0646\u200C\u0646\u0645\u0627 \u0648 \u0645\u0642\u0628\u0631\u0647 \u062D\u0627\u0641\u0638 \u062F\u0631 \u0634\u06CC\u0631\u0627\u0632",
    "culturalContextFa": "\u0628\u0627\u063A \u0627\u0631\u0645\u060C \u0646\u0627\u0631\u0646\u062C\u0633\u062A\u0627\u0646 \u0642\u0648\u0627\u0645\u060C \u0628\u0627\u063A \u062C\u0647\u0627\u0646\u200C\u0646\u0645\u0627 \u0648 \u0645\u0642\u0628\u0631\u0647 \u062D\u0627\u0641\u0638 \u062F\u0631 \u0634\u06CC\u0631\u0627\u0632",
    "unescoRef": "\u0628\u0627\u063A \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F1)",
    "unescoRefFa": "\u0628\u0627\u063A \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F1)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Eram_Garden_Panorama_2.jpg/960px-Eram_Garden_Panorama_2.jpg",
    "colors": [
      {
        "id": "gardens-of-shiraz-c1",
        "hex": "#FE28A2",
        "nameFa": "\u06AF\u0644 \u0633\u0631\u062E \u0645\u062D\u0645\u062F\u06CC (Persian Rose)",
        "nameEn": "Persian Rose",
        "role": "\u06AF\u0644\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u06AF\u0644\u0627\u0628\u200C\u06AF\u06CC\u0631\u06CC",
        "roleFa": "\u06AF\u0644\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u06AF\u0644\u0627\u0628\u200C\u06AF\u06CC\u0631\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0635\u0648\u0631\u062A\u06CC \u067E\u0631\u0631\u0646\u06AF \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u06AF\u0644 \u0645\u062D\u0645\u062F\u06CC",
        "meaningFa": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0635\u0648\u0631\u062A\u06CC \u067E\u0631\u0631\u0646\u06AF \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u06AF\u0644 \u0645\u062D\u0645\u062F\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Persian Rose)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06AF\u0644 \u0633\u0631\u062E \u0645\u062D\u0645\u062F\u06CC (Persian Rose))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #FE28A2)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 652,
            "dominantWavelengthNm": 652,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.6657,
              "a": 0.2548,
              "b": -0.0324
            },
            "srgb": {
              "r": 254,
              "g": 40,
              "b": 162
            },
            "apca": {
              "contrastOnWhite": 59.6,
              "contrastOnBlack": -32.8,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06AF\u0644 \u0633\u0631\u062E \u0645\u062D\u0645\u062F\u06CC (Persian Rose))",
            "chemicalName": "Persian Historical Pigment (Persian Rose)",
            "formula": "Natural Organic / Mineral Complex (Matrix #FE28A2)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 652,
            "chromaOklab": 0.257,
            "spectralReflectancePeak": "652 nm",
            "cieLab": {
              "L": 57.3,
              "a": 82.8,
              "b": -12.6
            }
          },
          "artMovement": "\u0628\u0627\u063A\u200C\u0647\u0627\u06CC \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632",
          "historicalContextFa": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u0635\u0648\u0631\u062A\u06CC \u067E\u0631\u0631\u0646\u06AF \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u06AF\u0644 \u0645\u062D\u0645\u062F\u06CC"
        }
      },
      {
        "id": "gardens-of-shiraz-c2",
        "hex": "#8B1E3F",
        "nameFa": "\u0627\u0646\u0627\u0631 \u0642\u0635\u0631\u0627\u0644\u062F\u0634\u062A",
        "nameEn": "Ghasrodasht Ruby Pomegranate",
        "role": "\u0634\u06A9\u0648\u0641\u0647\u200C\u0647\u0627\u06CC \u0627\u0646\u0627\u0631 \u0648 \u062F\u06CC\u0648\u0627\u0631\u0647\u0627",
        "roleFa": "\u0634\u06A9\u0648\u0641\u0647\u200C\u0647\u0627\u06CC \u0627\u0646\u0627\u0631 \u0648 \u062F\u06CC\u0648\u0627\u0631\u0647\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0631\u062E\u06CC \u0639\u0645\u06CC\u0642 \u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0627\u0646\u0627\u0631 \u06CC\u0627\u0642\u0648\u062A\u06CC \u0634\u06CC\u0631\u0627\u0632",
        "meaningFa": "\u0633\u0631\u062E\u06CC \u0639\u0645\u06CC\u0642 \u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0627\u0646\u0627\u0631 \u06CC\u0627\u0642\u0648\u062A\u06CC \u0634\u06CC\u0631\u0627\u0632",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Ghasrodasht Ruby Pomegranate)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0627\u0646\u0627\u0631 \u0642\u0635\u0631\u0627\u0644\u062F\u0634\u062A)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #8B1E3F)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 631,
            "dominantWavelengthNm": 631,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.4264,
              "a": 0.1432,
              "b": 0.0209
            },
            "srgb": {
              "r": 139,
              "g": 30,
              "b": 63
            },
            "apca": {
              "contrastOnWhite": 88.5,
              "contrastOnBlack": 0,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0627\u0646\u0627\u0631 \u0642\u0635\u0631\u0627\u0644\u062F\u0634\u062A)",
            "chemicalName": "Persian Historical Pigment (Ghasrodasht Ruby Pomegranate)",
            "formula": "Natural Organic / Mineral Complex (Matrix #8B1E3F)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 631,
            "chromaOklab": 0.145,
            "spectralReflectancePeak": "631 nm",
            "cieLab": {
              "L": 31.3,
              "a": 47,
              "b": 8.2
            }
          },
          "artMovement": "\u0628\u0627\u063A\u200C\u0647\u0627\u06CC \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632",
          "historicalContextFa": "\u0633\u0631\u062E\u06CC \u0639\u0645\u06CC\u0642 \u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0627\u0646\u0627\u0631 \u06CC\u0627\u0642\u0648\u062A\u06CC \u0634\u06CC\u0631\u0627\u0632"
        }
      },
      {
        "id": "gardens-of-shiraz-c3",
        "hex": "#228B22",
        "nameFa": "\u0633\u0628\u0632 \u0633\u0631\u0648 \u0646\u0627\u0632 (Cypress Green)",
        "nameEn": "Cypress Green",
        "role": "\u0633\u0631\u0648\u0647\u0627\u06CC \u06A9\u0647\u0646\u0633\u0627\u0644 \u0628\u0627\u063A \u0627\u0631\u0645",
        "roleFa": "\u0633\u0631\u0648\u0647\u0627\u06CC \u06A9\u0647\u0646\u0633\u0627\u0644 \u0628\u0627\u063A \u0627\u0631\u0645",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0628\u0632 \u062C\u0646\u06AF\u0644\u06CC \u0642\u0627\u0645\u062A \u0627\u0633\u062A\u0648\u0627\u0631 \u0633\u0631\u0648\u0647\u0627\u06CC \u0646\u0627\u0632 \u0628\u0627\u063A \u062F\u0644\u06AF\u0634\u0627 \u0648 \u0627\u0631\u0645",
        "meaningFa": "\u0633\u0628\u0632 \u062C\u0646\u06AF\u0644\u06CC \u0642\u0627\u0645\u062A \u0627\u0633\u062A\u0648\u0627\u0631 \u0633\u0631\u0648\u0647\u0627\u06CC \u0646\u0627\u0632 \u0628\u0627\u063A \u062F\u0644\u06AF\u0634\u0627 \u0648 \u0627\u0631\u0645",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Cypress Green)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0628\u0632 \u0633\u0631\u0648 \u0646\u0627\u0632 (Cypress Green))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #228B22)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 531,
            "dominantWavelengthNm": 531,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.5578,
              "a": -0.1346,
              "b": 0.1018
            },
            "srgb": {
              "r": 34,
              "g": 139,
              "b": 34
            },
            "apca": {
              "contrastOnWhite": 69.2,
              "contrastOnBlack": -23.1,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0628\u0632 \u0633\u0631\u0648 \u0646\u0627\u0632 (Cypress Green))",
            "chemicalName": "Persian Historical Pigment (Cypress Green)",
            "formula": "Natural Organic / Mineral Complex (Matrix #228B22)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 531,
            "chromaOklab": 0.169,
            "spectralReflectancePeak": "531 nm",
            "cieLab": {
              "L": 50.6,
              "a": -49.6,
              "b": 45
            }
          },
          "artMovement": "\u0628\u0627\u063A\u200C\u0647\u0627\u06CC \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632",
          "historicalContextFa": "\u0633\u0628\u0632 \u062C\u0646\u06AF\u0644\u06CC \u0642\u0627\u0645\u062A \u0627\u0633\u062A\u0648\u0627\u0631 \u0633\u0631\u0648\u0647\u0627\u06CC \u0646\u0627\u0632 \u0628\u0627\u063A \u062F\u0644\u06AF\u0634\u0627 \u0648 \u0627\u0631\u0645"
        }
      },
      {
        "id": "gardens-of-shiraz-c4",
        "hex": "#FDE68A",
        "nameFa": "\u0634\u06A9\u0648\u0641\u0647 \u0628\u0647\u0627\u0631\u0646\u0627\u0631\u0646\u062C",
        "nameEn": "Orange Blossom Yellow",
        "role": "\u0631\u0627\u06CC\u062D\u0647 \u0628\u0647\u0627\u0631 \u0648 \u0646\u0648\u0631 \u0622\u0641\u062A\u0627\u0628",
        "roleFa": "\u0631\u0627\u06CC\u062D\u0647 \u0628\u0647\u0627\u0631 \u0648 \u0646\u0648\u0631 \u0622\u0641\u062A\u0627\u0628",
        "roleEn": "Primary Accent",
        "meaning": "\u0632\u0631\u062F \u0644\u06CC\u0645\u0648\u06CC\u06CC \u0645\u0644\u0627\u06CC\u0645 \u06AF\u0644\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0628\u0647\u0627\u0631\u0646\u0627\u0631\u0646\u062C \u0646\u0627\u0631\u0646\u062C\u0633\u062A\u0627\u0646 \u0642\u0648\u0627\u0645",
        "meaningFa": "\u0632\u0631\u062F \u0644\u06CC\u0645\u0648\u06CC\u06CC \u0645\u0644\u0627\u06CC\u0645 \u06AF\u0644\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0628\u0647\u0627\u0631\u0646\u0627\u0631\u0646\u062C \u0646\u0627\u0631\u0646\u062C\u0633\u062A\u0627\u0646 \u0642\u0648\u0627\u0645",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Orange Blossom Yellow)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0634\u06A9\u0648\u0641\u0647 \u0628\u0647\u0627\u0631\u0646\u0627\u0631\u0646\u062C)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #FDE68A)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 604,
            "dominantWavelengthNm": 604,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9243,
              "a": -0.0115,
              "b": 0.1145
            },
            "srgb": {
              "r": 253,
              "g": 230,
              "b": 138
            },
            "apca": {
              "contrastOnWhite": 11.9,
              "contrastOnBlack": -83.3,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0634\u06A9\u0648\u0641\u0647 \u0628\u0647\u0627\u0631\u0646\u0627\u0631\u0646\u062C)",
            "chemicalName": "Persian Historical Pigment (Orange Blossom Yellow)",
            "formula": "Natural Organic / Mineral Complex (Matrix #FDE68A)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 604,
            "chromaOklab": 0.115,
            "spectralReflectancePeak": "604 nm",
            "cieLab": {
              "L": 91.4,
              "a": -4.1,
              "b": 47.5
            }
          },
          "artMovement": "\u0628\u0627\u063A\u200C\u0647\u0627\u06CC \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632",
          "historicalContextFa": "\u0632\u0631\u062F \u0644\u06CC\u0645\u0648\u06CC\u06CC \u0645\u0644\u0627\u06CC\u0645 \u06AF\u0644\u0628\u0631\u06AF\u200C\u0647\u0627\u06CC \u0628\u0647\u0627\u0631\u0646\u0627\u0631\u0646\u062C \u0646\u0627\u0631\u0646\u062C\u0633\u062A\u0627\u0646 \u0642\u0648\u0627\u0645"
        }
      },
      {
        "id": "gardens-of-shiraz-c5",
        "hex": "#F9F6F0",
        "nameFa": "\u0633\u0641\u06CC\u062F \u06CC\u0627\u0633\u0645\u0646 \u0634\u06CC\u0631\u0627\u0632\u06CC",
        "nameEn": "Shirazi Jasmine White",
        "role": "\u0639\u0645\u0627\u0631\u062A \u06A9\u0644\u0627\u0647\u200C\u0641\u0631\u0646\u06AF\u06CC \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC",
        "roleFa": "\u0639\u0645\u0627\u0631\u062A \u06A9\u0644\u0627\u0647\u200C\u0641\u0631\u0646\u06AF\u06CC \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u067E\u06CC\u062F\u06CC \u06AF\u0644\u200C\u0647\u0627\u06CC \u06CC\u0627\u0633 \u0648 \u0633\u062A\u0648\u0646\u200C\u0647\u0627\u06CC \u06AF\u0686\u200C\u0628\u0631\u06CC \u0647\u0641\u062A\u200C\u062A\u0646\u0627\u0646",
        "meaningFa": "\u0633\u067E\u06CC\u062F\u06CC \u06AF\u0644\u200C\u0647\u0627\u06CC \u06CC\u0627\u0633 \u0648 \u0633\u062A\u0648\u0646\u200C\u0647\u0627\u06CC \u06AF\u0686\u200C\u0628\u0631\u06CC \u0647\u0641\u062A\u200C\u062A\u0646\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Shirazi Jasmine White)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0641\u06CC\u062F \u06CC\u0627\u0633\u0645\u0646 \u0634\u06CC\u0631\u0627\u0632\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #F9F6F0)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 608,
            "dominantWavelengthNm": 608,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9738,
              "a": 8e-4,
              "b": 85e-4
            },
            "srgb": {
              "r": 249,
              "g": 246,
              "b": 240
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -93.5,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0641\u06CC\u062F \u06CC\u0627\u0633\u0645\u0646 \u0634\u06CC\u0631\u0627\u0632\u06CC)",
            "chemicalName": "Persian Historical Pigment (Shirazi Jasmine White)",
            "formula": "Natural Organic / Mineral Complex (Matrix #F9F6F0)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 608,
            "chromaOklab": 9e-3,
            "spectralReflectancePeak": "608 nm",
            "cieLab": {
              "L": 97,
              "a": -0,
              "b": 3.2
            }
          },
          "artMovement": "\u0628\u0627\u063A\u200C\u0647\u0627\u06CC \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632",
          "historicalContextFa": "\u0633\u067E\u06CC\u062F\u06CC \u06AF\u0644\u200C\u0647\u0627\u06CC \u06CC\u0627\u0633 \u0648 \u0633\u062A\u0648\u0646\u200C\u0647\u0627\u06CC \u06AF\u0686\u200C\u0628\u0631\u06CC \u0647\u0641\u062A\u200C\u062A\u0646\u0627\u0646"
        }
      },
      {
        "id": "gardens-of-shiraz-c6",
        "hex": "#182C18",
        "nameFa": "\u0633\u0627\u06CC\u0647\u200C\u0633\u0627\u0631 \u0628\u0627\u063A \u0627\u0631\u0645",
        "nameEn": "Deep Eram Garden Shade",
        "role": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0634\u0627\u062E\u0647\u200C\u0647\u0627 \u0648 \u0639\u0645\u0642 \u0622\u0628\u200C\u0646\u0645\u0627",
        "roleFa": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0634\u0627\u062E\u0647\u200C\u0647\u0627 \u0648 \u0639\u0645\u0642 \u0622\u0628\u200C\u0646\u0645\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u062A\u06CC\u0631\u06AF\u06CC \u062E\u0646\u06A9 \u0633\u0627\u06CC\u0647\u200C\u0627\u0646\u062F\u0627\u0632 \u062C\u0648\u06CC\u0628\u0627\u0631\u0647\u0627\u06CC \u062D\u0648\u0636 \u0645\u0631\u0645\u0631",
        "meaningFa": "\u062A\u06CC\u0631\u06AF\u06CC \u062E\u0646\u06A9 \u0633\u0627\u06CC\u0647\u200C\u0627\u0646\u062F\u0627\u0632 \u062C\u0648\u06CC\u0628\u0627\u0631\u0647\u0627\u06CC \u062D\u0648\u0636 \u0645\u0631\u0645\u0631",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Deep Eram Garden Shade)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0627\u06CC\u0647\u200C\u0633\u0627\u0631 \u0628\u0627\u063A \u0627\u0631\u0645)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #182C18)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 514,
            "dominantWavelengthNm": 514,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.2696,
              "a": -0.0363,
              "b": 0.0262
            },
            "srgb": {
              "r": 24,
              "g": 44,
              "b": 24
            },
            "apca": {
              "contrastOnWhite": 101.2,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0627\u06CC\u0647\u200C\u0633\u0627\u0631 \u0628\u0627\u063A \u0627\u0631\u0645)",
            "chemicalName": "Persian Historical Pigment (Deep Eram Garden Shade)",
            "formula": "Natural Organic / Mineral Complex (Matrix #182C18)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 514,
            "chromaOklab": 0.045,
            "spectralReflectancePeak": "514 nm",
            "cieLab": {
              "L": 15.8,
              "a": -13.3,
              "b": 10.5
            }
          },
          "artMovement": "\u0628\u0627\u063A\u200C\u0647\u0627\u06CC \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u0634\u06CC\u0631\u0627\u0632",
          "historicalContextFa": "\u062A\u06CC\u0631\u06AF\u06CC \u062E\u0646\u06A9 \u0633\u0627\u06CC\u0647\u200C\u0627\u0646\u062F\u0627\u0632 \u062C\u0648\u06CC\u0628\u0627\u0631\u0647\u0627\u06CC \u062D\u0648\u0636 \u0645\u0631\u0645\u0631"
        }
      }
    ]
  },
  "khorasan-gems": {
    "id": "khorasan-gems",
    "category": "nature",
    "nameFa": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u062E\u0631\u0627\u0633\u0627\u0646\u06CC",
    "nameEn": "Khorasan Gems & Turquoise Mines",
    "description": "\u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u0645\u0639\u062F\u0646 \u0641\u06CC\u0631\u0648\u0632\u0647 \u062C\u0647\u0627\u0646 \u062F\u0631 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631\u060C \u06CC\u0627\u0642\u0648\u062A\u200C\u0647\u0627\u06CC \u0627\u0646\u0627\u0631\u06CC\u060C \u06A9\u0647\u0631\u0628\u0627\u06CC \u062A\u0648\u0633 \u0648 \u0632\u0645\u0631\u062F\u0647\u0627\u06CC \u062F\u0631\u062E\u0634\u0627\u0646 \u062F\u0631 \u06AF\u0646\u062C\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0645\u0644\u06CC \u0645\u0634\u0631\u0642 \u0627\u06CC\u0631\u0627\u0646.",
    "descriptionFa": "\u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u0645\u0639\u062F\u0646 \u0641\u06CC\u0631\u0648\u0632\u0647 \u062C\u0647\u0627\u0646 \u062F\u0631 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631\u060C \u06CC\u0627\u0642\u0648\u062A\u200C\u0647\u0627\u06CC \u0627\u0646\u0627\u0631\u06CC\u060C \u06A9\u0647\u0631\u0628\u0627\u06CC \u062A\u0648\u0633 \u0648 \u0632\u0645\u0631\u062F\u0647\u0627\u06CC \u062F\u0631\u062E\u0634\u0627\u0646 \u062F\u0631 \u06AF\u0646\u062C\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0645\u0644\u06CC \u0645\u0634\u0631\u0642 \u0627\u06CC\u0631\u0627\u0646.",
    "culturalContext": "\u0645\u0639\u0627\u062F\u0646 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631\u060C \u06A9\u0648\u0647\u0633\u0646\u06AF\u06CC \u0645\u0634\u0647\u062F \u0648 \u0637\u0644\u0627\u06A9\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0622\u0633\u062A\u0627\u0646 \u0642\u062F\u0633 \u0631\u0636\u0648\u06CC",
    "culturalContextFa": "\u0645\u0639\u0627\u062F\u0646 \u0641\u06CC\u0631\u0648\u0632\u0647 \u0646\u06CC\u0634\u0627\u0628\u0648\u0631\u060C \u06A9\u0648\u0647\u0633\u0646\u06AF\u06CC \u0645\u0634\u0647\u062F \u0648 \u0637\u0644\u0627\u06A9\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0622\u0633\u062A\u0627\u0646 \u0642\u062F\u0633 \u0631\u0636\u0648\u06CC",
    "unescoRef": "\u0646\u06CC\u0634\u0627\u0628\u0648\u0631 \u0634\u0647\u0631 \u062C\u0647\u0627\u0646\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647 (World Crafts Council)",
    "unescoRefFa": "\u0646\u06CC\u0634\u0627\u0628\u0648\u0631 \u0634\u0647\u0631 \u062C\u0647\u0627\u0646\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647 (World Crafts Council)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nishapur_Turquoise_Rough.jpg/960px-Nishapur_Turquoise_Rough.jpg",
    "colors": [
      {
        "id": "khorasan-gems-c1",
        "hex": "#40E0D0",
        "nameFa": "\u0641\u06CC\u0631\u0648\u0632\u0647 \u0634\u062C\u0631\u06CC \u0646\u06CC\u0634\u0627\u0628\u0648\u0631 (Turquoise)",
        "nameEn": "Turquoise",
        "role": "\u0646\u06AF\u06CC\u0646\u200C\u0647\u0627\u06CC \u0633\u0644\u0637\u0646\u062A\u06CC \u0648 \u0627\u0646\u06AF\u0634\u062A\u0631\u06CC",
        "roleFa": "\u0646\u06AF\u06CC\u0646\u200C\u0647\u0627\u06CC \u0633\u0644\u0637\u0646\u062A\u06CC \u0648 \u0627\u0646\u06AF\u0634\u062A\u0631\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u06A9\u062F \u0631\u0633\u0645\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647 \u0628\u0627 \u0631\u06AF\u0647\u200C\u0647\u0627\u06CC \u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u0645\u0639\u062F\u0646 \u062C\u0647\u0627\u0646",
        "meaningFa": "\u06A9\u062F \u0631\u0633\u0645\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647 \u0628\u0627 \u0631\u06AF\u0647\u200C\u0647\u0627\u06CC \u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u0645\u0639\u062F\u0646 \u062C\u0647\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Turquoise)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0641\u06CC\u0631\u0648\u0632\u0647 \u0634\u062C\u0631\u06CC \u0646\u06CC\u0634\u0627\u0628\u0648\u0631 (Turquoise))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #40E0D0)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 542,
            "dominantWavelengthNm": 542,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.8223,
              "a": -0.1302,
              "b": -0.0116
            },
            "srgb": {
              "r": 64,
              "g": 224,
              "b": 208
            },
            "apca": {
              "contrastOnWhite": 27.6,
              "contrastOnBlack": -66.3,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0641\u06CC\u0631\u0648\u0632\u0647 \u0634\u062C\u0631\u06CC \u0646\u06CC\u0634\u0627\u0628\u0648\u0631 (Turquoise))",
            "chemicalName": "Persian Historical Pigment (Turquoise)",
            "formula": "Natural Organic / Mineral Complex (Matrix #40E0D0)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 542,
            "chromaOklab": 0.131,
            "spectralReflectancePeak": "542 nm",
            "cieLab": {
              "L": 81.3,
              "a": -44.1,
              "b": -4
            }
          },
          "artMovement": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u062E\u0631\u0627\u0633\u0627\u0646\u06CC",
          "historicalContextFa": "\u06A9\u062F \u0631\u0633\u0645\u06CC \u0641\u06CC\u0631\u0648\u0632\u0647 \u0628\u0627 \u0631\u06AF\u0647\u200C\u0647\u0627\u06CC \u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u0645\u0639\u062F\u0646 \u062C\u0647\u0627\u0646"
        }
      },
      {
        "id": "khorasan-gems-c2",
        "hex": "#9B111E",
        "nameFa": "\u06CC\u0627\u0642\u0648\u062A \u0627\u0646\u0627\u0631\u06CC \u067E\u0627\u0631\u0633\u06CC (Ruby)",
        "nameEn": "Persian Ruby",
        "role": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u062A\u0627\u062C \u0646\u0627\u062F\u0631\u06CC",
        "roleFa": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u062A\u0627\u062C \u0646\u0627\u062F\u0631\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u06CC\u0627\u0642\u0648\u062A \u0633\u0631\u062E \u0634\u0641\u0627\u0641 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u0645\u0639\u0627\u062F\u0646 \u062A\u0627\u0631\u06CC\u062E\u06CC \u0645\u0634\u0631\u0642 \u0627\u06CC\u0631\u0627\u0646",
        "meaningFa": "\u06CC\u0627\u0642\u0648\u062A \u0633\u0631\u062E \u0634\u0641\u0627\u0641 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u0645\u0639\u0627\u062F\u0646 \u062A\u0627\u0631\u06CC\u062E\u06CC \u0645\u0634\u0631\u0642 \u0627\u06CC\u0631\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Persian Ruby)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06CC\u0627\u0642\u0648\u062A \u0627\u0646\u0627\u0631\u06CC \u067E\u0627\u0631\u0633\u06CC (Ruby))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #9B111E)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 637,
            "dominantWavelengthNm": 637,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.4418,
              "a": 0.1539,
              "b": 0.0695
            },
            "srgb": {
              "r": 155,
              "g": 17,
              "b": 30
            },
            "apca": {
              "contrastOnWhite": 86.4,
              "contrastOnBlack": 0,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06CC\u0627\u0642\u0648\u062A \u0627\u0646\u0627\u0631\u06CC \u067E\u0627\u0631\u0633\u06CC (Ruby))",
            "chemicalName": "Persian Historical Pigment (Persian Ruby)",
            "formula": "Natural Organic / Mineral Complex (Matrix #9B111E)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 637,
            "chromaOklab": 0.169,
            "spectralReflectancePeak": "637 nm",
            "cieLab": {
              "L": 32.8,
              "a": 53.2,
              "b": 32
            }
          },
          "artMovement": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u062E\u0631\u0627\u0633\u0627\u0646\u06CC",
          "historicalContextFa": "\u06CC\u0627\u0642\u0648\u062A \u0633\u0631\u062E \u0634\u0641\u0627\u0641 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u0645\u0639\u0627\u062F\u0646 \u062A\u0627\u0631\u06CC\u062E\u06CC \u0645\u0634\u0631\u0642 \u0627\u06CC\u0631\u0627\u0646"
        }
      },
      {
        "id": "khorasan-gems-c3",
        "hex": "#50C878",
        "nameFa": "\u0632\u0645\u0631\u062F \u0646\u0627\u062F\u0631\u06CC (Emerald)",
        "nameEn": "Emerald Green",
        "role": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0646\u0634\u0627\u0646 \u0634\u0645\u0634\u06CC\u0631 \u0648 \u062D\u0645\u0627\u06CC\u0644",
        "roleFa": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0646\u0634\u0627\u0646 \u0634\u0645\u0634\u06CC\u0631 \u0648 \u062D\u0645\u0627\u06CC\u0644",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0628\u0632 \u0632\u0644\u0627\u0644 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u0632\u0645\u0631\u062F\u0647\u0627\u06CC \u062E\u0632\u0627\u0646\u0647 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646",
        "meaningFa": "\u0633\u0628\u0632 \u0632\u0644\u0627\u0644 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u0632\u0645\u0631\u062F\u0647\u0627\u06CC \u062E\u0632\u0627\u0646\u0647 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Emerald Green)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0645\u0631\u062F \u0646\u0627\u062F\u0631\u06CC (Emerald))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #50C878)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 534,
            "dominantWavelengthNm": 534,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7451,
              "a": -0.1386,
              "b": 0.0752
            },
            "srgb": {
              "r": 80,
              "g": 200,
              "b": 120
            },
            "apca": {
              "contrastOnWhite": 40.8,
              "contrastOnBlack": -52.3,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0645\u0631\u062F \u0646\u0627\u062F\u0631\u06CC (Emerald))",
            "chemicalName": "Persian Historical Pigment (Emerald Green)",
            "formula": "Natural Organic / Mineral Complex (Matrix #50C878)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 534,
            "chromaOklab": 0.158,
            "spectralReflectancePeak": "534 nm",
            "cieLab": {
              "L": 72.5,
              "a": -51.2,
              "b": 30.3
            }
          },
          "artMovement": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u062E\u0631\u0627\u0633\u0627\u0646\u06CC",
          "historicalContextFa": "\u0633\u0628\u0632 \u0632\u0644\u0627\u0644 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u0632\u0645\u0631\u062F\u0647\u0627\u06CC \u062E\u0632\u0627\u0646\u0647 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646"
        }
      },
      {
        "id": "khorasan-gems-c4",
        "hex": "#FFBF00",
        "nameFa": "\u06A9\u0647\u0631\u0628\u0627\u06CC \u06A9\u0647\u0646 \u062A\u0648\u0633 (Amber)",
        "nameEn": "Amber Gold",
        "role": "\u062A\u0633\u0628\u06CC\u062D\u200C\u0647\u0627 \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0686\u0648\u0628\u06CC",
        "roleFa": "\u062A\u0633\u0628\u06CC\u062D\u200C\u0647\u0627 \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0686\u0648\u0628\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u06A9\u0647\u0631\u0628\u0627\u06CC \u0634\u0641\u0627\u0641 \u0628\u0627 \u062D\u0628\u0633 \u0646\u0648\u0631 \u062E\u0648\u0631\u0634\u06CC\u062F \u0628\u0627\u0633\u062A\u0627\u0646",
        "meaningFa": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u06A9\u0647\u0631\u0628\u0627\u06CC \u0634\u0641\u0627\u0641 \u0628\u0627 \u062D\u0628\u0633 \u0646\u0648\u0631 \u062E\u0648\u0631\u0634\u06CC\u062F \u0628\u0627\u0633\u062A\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Amber Gold)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06A9\u0647\u0631\u0628\u0627\u06CC \u06A9\u0647\u0646 \u062A\u0648\u0633 (Amber))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #FFBF00)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 592,
            "dominantWavelengthNm": 592,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.8403,
              "a": 0.0178,
              "b": 0.1715
            },
            "srgb": {
              "r": 255,
              "g": 191,
              "b": 0
            },
            "apca": {
              "contrastOnWhite": 28.1,
              "contrastOnBlack": -65.7,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06A9\u0647\u0631\u0628\u0627\u06CC \u06A9\u0647\u0646 \u062A\u0648\u0633 (Amber))",
            "chemicalName": "Persian Historical Pigment (Amber Gold)",
            "formula": "Natural Organic / Mineral Complex (Matrix #FFBF00)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 592,
            "chromaOklab": 0.172,
            "spectralReflectancePeak": "592 nm",
            "cieLab": {
              "L": 81,
              "a": 10.4,
              "b": 83
            }
          },
          "artMovement": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u062E\u0631\u0627\u0633\u0627\u0646\u06CC",
          "historicalContextFa": "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u06A9\u0647\u0631\u0628\u0627\u06CC \u0634\u0641\u0627\u0641 \u0628\u0627 \u062D\u0628\u0633 \u0646\u0648\u0631 \u062E\u0648\u0631\u0634\u06CC\u062F \u0628\u0627\u0633\u062A\u0627\u0646"
        }
      },
      {
        "id": "khorasan-gems-c5",
        "hex": "#F4F6F8",
        "nameFa": "\u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0646\u0642\u0631\u0647\u200C\u0641\u0627\u0645",
        "nameEn": "Silver Pearl Luster",
        "role": "\u067E\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0646\u0642\u0631\u0647 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleFa": "\u067E\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0646\u0642\u0631\u0647 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u062F\u0631\u062E\u0634\u0634 \u0641\u0644\u0632\u06CC \u0646\u0642\u0631\u0647 \u0639\u06CC\u0627\u0631 \u0628\u0627\u0644\u0627 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u063A\u0644\u0637\u0627\u0646",
        "meaningFa": "\u062F\u0631\u062E\u0634\u0634 \u0641\u0644\u0632\u06CC \u0646\u0642\u0631\u0647 \u0639\u06CC\u0627\u0631 \u0628\u0627\u0644\u0627 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u063A\u0644\u0637\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Silver Pearl Luster)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0646\u0642\u0631\u0647\u200C\u0641\u0627\u0645)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #F4F6F8)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 511,
            "dominantWavelengthNm": 511,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9722,
              "a": -13e-4,
              "b": -32e-4
            },
            "srgb": {
              "r": 244,
              "g": 246,
              "b": 248
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -93.2,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u0646\u0642\u0631\u0647\u200C\u0641\u0627\u0645)",
            "chemicalName": "Persian Historical Pigment (Silver Pearl Luster)",
            "formula": "Natural Organic / Mineral Complex (Matrix #F4F6F8)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 511,
            "chromaOklab": 3e-3,
            "spectralReflectancePeak": "511 nm",
            "cieLab": {
              "L": 96.8,
              "a": -0.3,
              "b": -1.2
            }
          },
          "artMovement": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u062E\u0631\u0627\u0633\u0627\u0646\u06CC",
          "historicalContextFa": "\u062F\u0631\u062E\u0634\u0634 \u0641\u0644\u0632\u06CC \u0646\u0642\u0631\u0647 \u0639\u06CC\u0627\u0631 \u0628\u0627\u0644\u0627 \u0648 \u0645\u0631\u0648\u0627\u0631\u06CC\u062F \u063A\u0644\u0637\u0627\u0646"
        }
      },
      {
        "id": "khorasan-gems-c6",
        "hex": "#1B1E23",
        "nameFa": "\u0633\u0646\u06AF \u0686\u062E\u0645\u0627\u0642 \u062F\u0648\u062F\u06CC",
        "nameEn": "Flint Basalt Dark",
        "role": "\u0631\u06A9\u0627\u0628\u200C\u0647\u0627\u06CC \u062A\u06CC\u0631\u0647 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0639\u0645\u06CC\u0642",
        "roleFa": "\u0631\u06A9\u0627\u0628\u200C\u0647\u0627\u06CC \u062A\u06CC\u0631\u0647 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0639\u0645\u06CC\u0642",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0635\u06CC\u0642\u0644\u06CC \u0622\u0628\u0646\u0648\u0633 \u0648 \u0639\u0642\u06CC\u0642 \u0633\u06CC\u0627\u0647 \u062C\u0648\u0627\u0647\u0631\u062F\u0648\u0632\u06CC",
        "meaningFa": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0635\u06CC\u0642\u0644\u06CC \u0622\u0628\u0646\u0648\u0633 \u0648 \u0639\u0642\u06CC\u0642 \u0633\u06CC\u0627\u0647 \u062C\u0648\u0627\u0647\u0631\u062F\u0648\u0632\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Flint Basalt Dark)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0646\u06AF \u0686\u062E\u0645\u0627\u0642 \u062F\u0648\u062F\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #1B1E23)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 446,
            "dominantWavelengthNm": 446,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.2341,
              "a": -17e-4,
              "b": -0.0105
            },
            "srgb": {
              "r": 27,
              "g": 30,
              "b": 35
            },
            "apca": {
              "contrastOnWhite": 103.3,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0646\u06AF \u0686\u062E\u0645\u0627\u0642 \u062F\u0648\u062F\u06CC)",
            "chemicalName": "Persian Historical Pigment (Flint Basalt Dark)",
            "formula": "Natural Organic / Mineral Complex (Matrix #1B1E23)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 446,
            "chromaOklab": 0.011,
            "spectralReflectancePeak": "446 nm",
            "cieLab": {
              "L": 11.2,
              "a": 0,
              "b": -3.9
            }
          },
          "artMovement": "\u062C\u0648\u0627\u0647\u0631\u0627\u062A \u0648 \u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u062E\u0631\u0627\u0633\u0627\u0646\u06CC",
          "historicalContextFa": "\u0633\u0646\u06AF\u200C\u0647\u0627\u06CC \u0635\u06CC\u0642\u0644\u06CC \u0622\u0628\u0646\u0648\u0633 \u0648 \u0639\u0642\u06CC\u0642 \u0633\u06CC\u0627\u0647 \u062C\u0648\u0627\u0647\u0631\u062F\u0648\u0632\u06CC"
        }
      }
    ]
  },
  "hyrcanian-forests": {
    "id": "hyrcanian-forests",
    "category": "nature",
    "nameFa": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC \u0648 \u0627\u0644\u0628\u0631\u0632",
    "nameEn": "Ancient Hyrcanian Forests & Alborz",
    "description": "\u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u067E\u0647\u0646\u200C\u0628\u0631\u06AF \u062C\u0647\u0627\u0646 \u0628\u0627 \u0642\u062F\u0645\u062A \u062F\u0648\u0631\u0647 \u0698\u0648\u0631\u0627\u0633\u06CC\u06A9\u060C \u0635\u062E\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u0647\u200C\u0622\u0644\u0648\u062F \u0627\u0644\u0628\u0631\u0632\u060C \u0631\u0627\u0634\u0633\u062A\u0627\u0646\u200C\u0647\u0627\u06CC \u0633\u0631\u0633\u0628\u0632 \u0648 \u0628\u0631\u0641\u200C\u0647\u0627\u06CC \u0642\u0644\u0647 \u062F\u0645\u0627\u0648\u0646\u062F.",
    "descriptionFa": "\u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u067E\u0647\u0646\u200C\u0628\u0631\u06AF \u062C\u0647\u0627\u0646 \u0628\u0627 \u0642\u062F\u0645\u062A \u062F\u0648\u0631\u0647 \u0698\u0648\u0631\u0627\u0633\u06CC\u06A9\u060C \u0635\u062E\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u0647\u200C\u0622\u0644\u0648\u062F \u0627\u0644\u0628\u0631\u0632\u060C \u0631\u0627\u0634\u0633\u062A\u0627\u0646\u200C\u0647\u0627\u06CC \u0633\u0631\u0633\u0628\u0632 \u0648 \u0628\u0631\u0641\u200C\u0647\u0627\u06CC \u0642\u0644\u0647 \u062F\u0645\u0627\u0648\u0646\u062F.",
    "culturalContext": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u062A\u0627\u0644\u0634\u060C \u062F\u0631\u0647 \u0686\u0627\u0644\u0648\u0633\u060C \u067E\u0627\u0631\u06A9 \u0645\u0644\u06CC \u06AF\u0644\u0633\u062A\u0627\u0646 \u0648 \u06A9\u0648\u0647\u067E\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u062F\u0645\u0627\u0648\u0646\u062F",
    "culturalContextFa": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u062A\u0627\u0644\u0634\u060C \u062F\u0631\u0647 \u0686\u0627\u0644\u0648\u0633\u060C \u067E\u0627\u0631\u06A9 \u0645\u0644\u06CC \u06AF\u0644\u0633\u062A\u0627\u0646 \u0648 \u06A9\u0648\u0647\u067E\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u062F\u0645\u0627\u0648\u0646\u062F",
    "unescoRef": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u0637\u0628\u06CC\u0639\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F9)",
    "unescoRefFa": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u0637\u0628\u06CC\u0639\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F9)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hyrcanian_Forests_in_Mazandaran_06.jpg/960px-Hyrcanian_Forests_in_Mazandaran_06.jpg",
    "colors": [
      {
        "id": "hyrcanian-forests-c1",
        "hex": "#1B4332",
        "nameFa": "\u0633\u0631\u062E\u0633 \u06A9\u0647\u0646\u0633\u0627\u0644 \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC",
        "nameEn": "Ancient Hyrcanian Fern",
        "role": "\u067E\u0648\u0634\u0634 \u0633\u0628\u0632 \u062C\u0646\u06AF\u0644\u06CC",
        "roleFa": "\u067E\u0648\u0634\u0634 \u0633\u0628\u0632 \u062C\u0646\u06AF\u0644\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0631\u062E\u0633\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0645\u0627\u0646\u062F\u0647 \u0627\u0632 \u0639\u0635\u0631 \u06CC\u062E\u0628\u0646\u062F\u0627\u0646 \u0628\u0627 \u0642\u062F\u0645\u062A \u06F5\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u0633\u0627\u0644",
        "meaningFa": "\u0633\u0631\u062E\u0633\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0645\u0627\u0646\u062F\u0647 \u0627\u0632 \u0639\u0635\u0631 \u06CC\u062E\u0628\u0646\u062F\u0627\u0646 \u0628\u0627 \u0642\u062F\u0645\u062A \u06F5\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u0633\u0627\u0644",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Ancient Hyrcanian Fern)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0631\u062E\u0633 \u06A9\u0647\u0646\u0633\u0627\u0644 \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #1B4332)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 518,
            "dominantWavelengthNm": 518,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.3484,
              "a": -0.0524,
              "b": 0.0157
            },
            "srgb": {
              "r": 27,
              "g": 67,
              "b": 50
            },
            "apca": {
              "contrastOnWhite": 94.9,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u0631\u062E\u0633 \u06A9\u0647\u0646\u0633\u0627\u0644 \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC)",
            "chemicalName": "Persian Historical Pigment (Ancient Hyrcanian Fern)",
            "formula": "Natural Organic / Mineral Complex (Matrix #1B4332)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 518,
            "chromaOklab": 0.055,
            "spectralReflectancePeak": "518 nm",
            "cieLab": {
              "L": 25.2,
              "a": -18.9,
              "b": 6.1
            }
          },
          "artMovement": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC \u0648 \u0627\u0644\u0628\u0631\u0632",
          "historicalContextFa": "\u0633\u0631\u062E\u0633\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0645\u0627\u0646\u062F\u0647 \u0627\u0632 \u0639\u0635\u0631 \u06CC\u062E\u0628\u0646\u062F\u0627\u0646 \u0628\u0627 \u0642\u062F\u0645\u062A \u06F5\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u0633\u0627\u0644"
        }
      },
      {
        "id": "hyrcanian-forests-c2",
        "hex": "#40916C",
        "nameFa": "\u062E\u0632\u0647 \u0645\u0631\u0637\u0648\u0628 \u0633\u0646\u06AF",
        "nameEn": "Moist Rock Moss",
        "role": "\u0635\u062E\u0631\u0647\u200C\u0647\u0627\u06CC \u0628\u0627\u0631\u0627\u0646\u200C\u062E\u0648\u0631\u062F\u0647 \u0627\u0644\u0628\u0631\u0632",
        "roleFa": "\u0635\u062E\u0631\u0647\u200C\u0647\u0627\u06CC \u0628\u0627\u0631\u0627\u0646\u200C\u062E\u0648\u0631\u062F\u0647 \u0627\u0644\u0628\u0631\u0632",
        "roleEn": "Primary Accent",
        "meaning": "\u0637\u0631\u0627\u0648\u062A \u062E\u0632\u0647\u200C\u0647\u0627\u06CC \u0645\u062E\u0645\u0644\u06CC \u062D\u0627\u0634\u06CC\u0647 \u0631\u0648\u062F\u062E\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u062F\u0648\u0647\u0632\u0627\u0631",
        "meaningFa": "\u0637\u0631\u0627\u0648\u062A \u062E\u0632\u0647\u200C\u0647\u0627\u06CC \u0645\u062E\u0645\u0644\u06CC \u062D\u0627\u0634\u06CC\u0647 \u0631\u0648\u062F\u062E\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u062F\u0648\u0647\u0632\u0627\u0631",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Moist Rock Moss)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062E\u0632\u0647 \u0645\u0631\u0637\u0648\u0628 \u0633\u0646\u06AF)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #40916C)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 526,
            "dominantWavelengthNm": 526,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.5956,
              "a": -0.0933,
              "b": 0.0314
            },
            "srgb": {
              "r": 64,
              "g": 145,
              "b": 108
            },
            "apca": {
              "contrastOnWhite": 64.8,
              "contrastOnBlack": -27.5,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062E\u0632\u0647 \u0645\u0631\u0637\u0648\u0628 \u0633\u0646\u06AF)",
            "chemicalName": "Persian Historical Pigment (Moist Rock Moss)",
            "formula": "Natural Organic / Mineral Complex (Matrix #40916C)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 526,
            "chromaOklab": 0.098,
            "spectralReflectancePeak": "526 nm",
            "cieLab": {
              "L": 54.5,
              "a": -33.9,
              "b": 12.3
            }
          },
          "artMovement": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC \u0648 \u0627\u0644\u0628\u0631\u0632",
          "historicalContextFa": "\u0637\u0631\u0627\u0648\u062A \u062E\u0632\u0647\u200C\u0647\u0627\u06CC \u0645\u062E\u0645\u0644\u06CC \u062D\u0627\u0634\u06CC\u0647 \u0631\u0648\u062F\u062E\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u062F\u0648\u0647\u0632\u0627\u0631"
        }
      },
      {
        "id": "hyrcanian-forests-c3",
        "hex": "#74C69D",
        "nameFa": "\u062C\u0648\u0627\u0646\u0647 \u0631\u0627\u0634\u0633\u062A\u0627\u0646",
        "nameEn": "Beech Leaf Fresh Sprout",
        "role": "\u0634\u0627\u062E\u0633\u0627\u0631\u0647\u0627\u06CC \u0628\u0647\u0627\u0631\u06CC",
        "roleFa": "\u0634\u0627\u062E\u0633\u0627\u0631\u0647\u0627\u06CC \u0628\u0647\u0627\u0631\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0628\u0632 \u0631\u0648\u0634\u0646 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u062F\u0631\u062E\u062A\u0627\u0646 \u0631\u0627\u0634 \u062F\u0631 \u0645\u0647 \u0635\u0628\u062D\u06AF\u0627\u0647\u06CC \u0627\u0633\u0627\u0644\u0645",
        "meaningFa": "\u0633\u0628\u0632 \u0631\u0648\u0634\u0646 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u062F\u0631\u062E\u062A\u0627\u0646 \u0631\u0627\u0634 \u062F\u0631 \u0645\u0647 \u0635\u0628\u062D\u06AF\u0627\u0647\u06CC \u0627\u0633\u0627\u0644\u0645",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Beech Leaf Fresh Sprout)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062C\u0648\u0627\u0646\u0647 \u0631\u0627\u0634\u0633\u062A\u0627\u0646)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #74C69D)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 526,
            "dominantWavelengthNm": 526,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7627,
              "a": -0.0953,
              "b": 0.0329
            },
            "srgb": {
              "r": 116,
              "g": 198,
              "b": 157
            },
            "apca": {
              "contrastOnWhite": 38.9,
              "contrastOnBlack": -54.2,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062C\u0648\u0627\u0646\u0647 \u0631\u0627\u0634\u0633\u062A\u0627\u0646)",
            "chemicalName": "Persian Historical Pigment (Beech Leaf Fresh Sprout)",
            "formula": "Natural Organic / Mineral Complex (Matrix #74C69D)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 526,
            "chromaOklab": 0.101,
            "spectralReflectancePeak": "526 nm",
            "cieLab": {
              "L": 73.9,
              "a": -34.3,
              "b": 12.8
            }
          },
          "artMovement": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC \u0648 \u0627\u0644\u0628\u0631\u0632",
          "historicalContextFa": "\u0633\u0628\u0632 \u0631\u0648\u0634\u0646 \u0648 \u062F\u0631\u062E\u0634\u0627\u0646 \u062F\u0631\u062E\u062A\u0627\u0646 \u0631\u0627\u0634 \u062F\u0631 \u0645\u0647 \u0635\u0628\u062D\u06AF\u0627\u0647\u06CC \u0627\u0633\u0627\u0644\u0645"
        }
      },
      {
        "id": "hyrcanian-forests-c4",
        "hex": "#4A3525",
        "nameFa": "\u0628\u0644\u0648\u0637 \u06A9\u0647\u0646\u0633\u0627\u0644 \u062E\u0632\u0631\u06CC",
        "nameEn": "Caspian Oak Wood",
        "role": "\u067E\u0648\u0633\u062A \u062F\u0631\u062E\u062A\u0627\u0646 \u0648 \u062E\u0627\u06A9 \u062C\u0646\u06AF\u0644",
        "roleFa": "\u067E\u0648\u0633\u062A \u062F\u0631\u062E\u062A\u0627\u0646 \u0648 \u062E\u0627\u06A9 \u062C\u0646\u06AF\u0644",
        "roleEn": "Primary Accent",
        "meaning": "\u0642\u0647\u0648\u0647\u200C\u0627\u06CC \u0639\u0645\u06CC\u0642 \u062A\u0646\u0647 \u0628\u0644\u0648\u0637\u200C\u0647\u0627\u06CC \u0628\u0644\u0646\u062F \u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u06AF\u0644\u0633\u062A\u0627\u0646",
        "meaningFa": "\u0642\u0647\u0648\u0647\u200C\u0627\u06CC \u0639\u0645\u06CC\u0642 \u062A\u0646\u0647 \u0628\u0644\u0648\u0637\u200C\u0647\u0627\u06CC \u0628\u0644\u0646\u062F \u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u06AF\u0644\u0633\u062A\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Caspian Oak Wood)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0628\u0644\u0648\u0637 \u06A9\u0647\u0646\u0633\u0627\u0644 \u062E\u0632\u0631\u06CC)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #4A3525)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 614,
            "dominantWavelengthNm": 614,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.3485,
              "a": 0.021,
              "b": 0.034
            },
            "srgb": {
              "r": 74,
              "g": 53,
              "b": 37
            },
            "apca": {
              "contrastOnWhite": 95.9,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0628\u0644\u0648\u0637 \u06A9\u0647\u0646\u0633\u0627\u0644 \u062E\u0632\u0631\u06CC)",
            "chemicalName": "Persian Historical Pigment (Caspian Oak Wood)",
            "formula": "Natural Organic / Mineral Complex (Matrix #4A3525)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 614,
            "chromaOklab": 0.04,
            "spectralReflectancePeak": "614 nm",
            "cieLab": {
              "L": 24.1,
              "a": 7,
              "b": 13.8
            }
          },
          "artMovement": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC \u0648 \u0627\u0644\u0628\u0631\u0632",
          "historicalContextFa": "\u0642\u0647\u0648\u0647\u200C\u0627\u06CC \u0639\u0645\u06CC\u0642 \u062A\u0646\u0647 \u0628\u0644\u0648\u0637\u200C\u0647\u0627\u06CC \u0628\u0644\u0646\u062F \u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u06AF\u0644\u0633\u062A\u0627\u0646"
        }
      },
      {
        "id": "hyrcanian-forests-c5",
        "hex": "#F8F9FA",
        "nameFa": "\u0633\u067E\u06CC\u062F\u06CC \u0628\u0631\u0641 \u062F\u0645\u0627\u0648\u0646\u062F",
        "nameEn": "Damavand Glacier White",
        "role": "\u0686\u06A9\u0627\u062F \u0642\u0644\u0647 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleFa": "\u0686\u06A9\u0627\u062F \u0642\u0644\u0647 \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0628\u0631\u0641\u200C\u0647\u0627\u06CC \u062C\u0627\u0648\u062F\u0627\u0646 \u0628\u0644\u0646\u062F\u062A\u0631\u06CC\u0646 \u0622\u062A\u0634\u0641\u0634\u0627\u0646 \u0642\u0627\u0631\u0647 \u06A9\u0647\u0646",
        "meaningFa": "\u0628\u0631\u0641\u200C\u0647\u0627\u06CC \u062C\u0627\u0648\u062F\u0627\u0646 \u0628\u0644\u0646\u062F\u062A\u0631\u06CC\u0646 \u0622\u062A\u0634\u0641\u0634\u0627\u0646 \u0642\u0627\u0631\u0647 \u06A9\u0647\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Damavand Glacier White)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u067E\u06CC\u062F\u06CC \u0628\u0631\u0641 \u062F\u0645\u0627\u0648\u0646\u062F)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #F8F9FA)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 512,
            "dominantWavelengthNm": 512,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9816,
              "a": -6e-4,
              "b": -16e-4
            },
            "srgb": {
              "r": 248,
              "g": 249,
              "b": 250
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -95.2,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u067E\u06CC\u062F\u06CC \u0628\u0631\u0641 \u062F\u0645\u0627\u0648\u0646\u062F)",
            "chemicalName": "Persian Historical Pigment (Damavand Glacier White)",
            "formula": "Natural Organic / Mineral Complex (Matrix #F8F9FA)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 512,
            "chromaOklab": 2e-3,
            "spectralReflectancePeak": "512 nm",
            "cieLab": {
              "L": 97.9,
              "a": -0.1,
              "b": -0.6
            }
          },
          "artMovement": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC \u0648 \u0627\u0644\u0628\u0631\u0632",
          "historicalContextFa": "\u0628\u0631\u0641\u200C\u0647\u0627\u06CC \u062C\u0627\u0648\u062F\u0627\u0646 \u0628\u0644\u0646\u062F\u062A\u0631\u06CC\u0646 \u0622\u062A\u0634\u0641\u0634\u0627\u0646 \u0642\u0627\u0631\u0647 \u06A9\u0647\u0646"
        }
      },
      {
        "id": "hyrcanian-forests-c6",
        "hex": "#0D1F18",
        "nameFa": "\u0698\u0631\u0641\u0627\u06CC \u062C\u0646\u06AF\u0644 \u0645\u0647\u200C\u0622\u0644\u0648\u062F",
        "nameEn": "Deep Forest Shadow",
        "role": "\u062A\u06CC\u0631\u06AF\u06CC \u0698\u0631\u0641 \u0628\u06CC\u0634\u0647\u200C\u0647\u0627",
        "roleFa": "\u062A\u06CC\u0631\u06AF\u06CC \u0698\u0631\u0641 \u0628\u06CC\u0634\u0647\u200C\u0647\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u0627\u06CC\u0647 \u062F\u0631\u062E\u062A\u0627\u0646 \u0645\u062A\u0631\u0627\u06A9\u0645 \u062F\u0631 \u062F\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u0647\u200C\u06AF\u0631\u0641\u062A\u0647 \u062A\u0627\u0644\u0634",
        "meaningFa": "\u0633\u0627\u06CC\u0647 \u062F\u0631\u062E\u062A\u0627\u0646 \u0645\u062A\u0631\u0627\u06A9\u0645 \u062F\u0631 \u062F\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u0647\u200C\u06AF\u0631\u0641\u062A\u0647 \u062A\u0627\u0644\u0634",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Deep Forest Shadow)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0698\u0631\u0641\u0627\u06CC \u062C\u0646\u06AF\u0644 \u0645\u0647\u200C\u0622\u0644\u0648\u062F)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #0D1F18)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 513,
            "dominantWavelengthNm": 513,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.221,
              "a": -0.0272,
              "b": 64e-4
            },
            "srgb": {
              "r": 13,
              "g": 31,
              "b": 24
            },
            "apca": {
              "contrastOnWhite": 103.6,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0698\u0631\u0641\u0627\u06CC \u062C\u0646\u06AF\u0644 \u0645\u0647\u200C\u0622\u0644\u0648\u062F)",
            "chemicalName": "Persian Historical Pigment (Deep Forest Shadow)",
            "formula": "Natural Organic / Mineral Complex (Matrix #0D1F18)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 513,
            "chromaOklab": 0.028,
            "spectralReflectancePeak": "513 nm",
            "cieLab": {
              "L": 10,
              "a": -9.7,
              "b": 2.5
            }
          },
          "artMovement": "\u062C\u0646\u06AF\u0644\u200C\u0647\u0627\u06CC \u0647\u06CC\u0631\u06A9\u0627\u0646\u06CC \u0648 \u0627\u0644\u0628\u0631\u0632",
          "historicalContextFa": "\u0633\u0627\u06CC\u0647 \u062F\u0631\u062E\u062A\u0627\u0646 \u0645\u062A\u0631\u0627\u06A9\u0645 \u062F\u0631 \u062F\u0631\u0647\u200C\u0647\u0627\u06CC \u0645\u0647\u200C\u06AF\u0631\u0641\u062A\u0647 \u062A\u0627\u0644\u0634"
        }
      }
    ]
  },
  "yazd-saffron-desert": {
    "id": "yazd-saffron-desert",
    "category": "nature",
    "nameFa": "\u0637\u0644\u0627\u06CC \u0633\u0631\u062E \u0648 \u06A9\u0648\u06CC\u0631 \u06CC\u0632\u062F",
    "nameEn": "Yazd Saffron Desert & Adobe Architecture",
    "description": "\u0628\u0627\u062F\u06AF\u06CC\u0631\u0647\u0627\u06CC \u0627\u0641\u0631\u0627\u0634\u062A\u0647 \u062E\u0634\u062A\u06CC\u060C \u0632\u0639\u0641\u0631\u0627\u0646 \u0633\u0631\u06AF\u0644 \u0642\u0627\u0626\u0646\u0627\u062A\u060C \u0633\u0627\u0628\u0627\u0637\u200C\u0647\u0627\u06CC \u0633\u0627\u06CC\u0647\u200C\u0627\u0646\u062F\u0627\u0632 \u0648 \u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0645\u0627\u0633\u0647 \u0637\u0644\u0627\u06CC\u06CC \u062F\u0634\u062A \u0644\u0648\u062A \u062F\u0631 \u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u0634\u0647\u0631 \u062E\u0634\u062A\u06CC \u062C\u0647\u0627\u0646.",
    "descriptionFa": "\u0628\u0627\u062F\u06AF\u06CC\u0631\u0647\u0627\u06CC \u0627\u0641\u0631\u0627\u0634\u062A\u0647 \u062E\u0634\u062A\u06CC\u060C \u0632\u0639\u0641\u0631\u0627\u0646 \u0633\u0631\u06AF\u0644 \u0642\u0627\u0626\u0646\u0627\u062A\u060C \u0633\u0627\u0628\u0627\u0637\u200C\u0647\u0627\u06CC \u0633\u0627\u06CC\u0647\u200C\u0627\u0646\u062F\u0627\u0632 \u0648 \u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0645\u0627\u0633\u0647 \u0637\u0644\u0627\u06CC\u06CC \u062F\u0634\u062A \u0644\u0648\u062A \u062F\u0631 \u06A9\u0647\u0646\u200C\u062A\u0631\u06CC\u0646 \u0634\u0647\u0631 \u062E\u0634\u062A\u06CC \u062C\u0647\u0627\u0646.",
    "culturalContext": "\u0634\u0647\u0631 \u062A\u0627\u0631\u06CC\u062E\u06CC \u06CC\u0632\u062F\u060C \u0628\u0627\u0641\u062A \u062A\u0627\u0631\u06CC\u062E\u06CC\u060C \u0642\u0646\u0627\u062A \u0632\u0627\u0631\u0686\u060C \u0628\u0627\u063A \u062F\u0648\u0644\u062A\u200C\u0622\u0628\u0627\u062F \u0648 \u0631\u0645\u0644\u200C\u0647\u0627\u06CC \u06A9\u0648\u06CC\u0631 \u0644\u0648\u062A",
    "culturalContextFa": "\u0634\u0647\u0631 \u062A\u0627\u0631\u06CC\u062E\u06CC \u06CC\u0632\u062F\u060C \u0628\u0627\u0641\u062A \u062A\u0627\u0631\u06CC\u062E\u06CC\u060C \u0642\u0646\u0627\u062A \u0632\u0627\u0631\u0686\u060C \u0628\u0627\u063A \u062F\u0648\u0644\u062A\u200C\u0622\u0628\u0627\u062F \u0648 \u0631\u0645\u0644\u200C\u0647\u0627\u06CC \u06A9\u0648\u06CC\u0631 \u0644\u0648\u062A",
    "unescoRef": "\u0634\u0647\u0631 \u062A\u0627\u0631\u06CC\u062E\u06CC \u06CC\u0632\u062F (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F7)",
    "unescoRefFa": "\u0634\u0647\u0631 \u062A\u0627\u0631\u06CC\u062E\u06CC \u06CC\u0632\u062F (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F7)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Windcatchers_in_Yazd_Iran.jpg/960px-Windcatchers_in_Yazd_Iran.jpg",
    "colors": [
      {
        "id": "yazd-saffron-desert-c1",
        "hex": "#F4C430",
        "nameFa": "\u0632\u0639\u0641\u0631\u0627\u0646\u06CC \u0633\u0631\u06AF\u0644 (Saffron)",
        "nameEn": "Saffron Yellow",
        "role": "\u0631\u0646\u06AF \u0637\u0644\u0627\u06CC\u06CC \u0632\u0639\u0641\u0631\u0627\u0646 \u0633\u0631\u06AF\u0644",
        "roleFa": "\u0631\u0646\u06AF \u0637\u0644\u0627\u06CC\u06CC \u0632\u0639\u0641\u0631\u0627\u0646 \u0633\u0631\u06AF\u0644",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0632\u0639\u0641\u0631\u0627\u0646\u06CC \u062C\u0647\u0627\u0646\u06CC \u0646\u06AF\u06CC\u0646 \u0633\u0631\u062E \u0642\u0627\u0626\u0646\u0627\u062A \u0648 \u06AF\u0646\u0627\u0628\u0627\u062F",
        "meaningFa": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0632\u0639\u0641\u0631\u0627\u0646\u06CC \u062C\u0647\u0627\u0646\u06CC \u0646\u06AF\u06CC\u0646 \u0633\u0631\u062E \u0642\u0627\u0626\u0646\u0627\u062A \u0648 \u06AF\u0646\u0627\u0628\u0627\u062F",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Saffron Yellow)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0639\u0641\u0631\u0627\u0646\u06CC \u0633\u0631\u06AF\u0644 (Saffron))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #F4C430)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 593,
            "dominantWavelengthNm": 593,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.8399,
              "a": 22e-4,
              "b": 0.1598
            },
            "srgb": {
              "r": 244,
              "g": 196,
              "b": 48
            },
            "apca": {
              "contrastOnWhite": 27.8,
              "contrastOnBlack": -66,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0639\u0641\u0631\u0627\u0646\u06CC \u0633\u0631\u06AF\u0644 (Saffron))",
            "chemicalName": "Persian Historical Pigment (Saffron Yellow)",
            "formula": "Natural Organic / Mineral Complex (Matrix #F4C430)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 593,
            "chromaOklab": 0.16,
            "spectralReflectancePeak": "593 nm",
            "cieLab": {
              "L": 81.3,
              "a": 3.9,
              "b": 74.1
            }
          },
          "artMovement": "\u0637\u0644\u0627\u06CC \u0633\u0631\u062E \u0648 \u06A9\u0648\u06CC\u0631 \u06CC\u0632\u062F",
          "historicalContextFa": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0632\u0639\u0641\u0631\u0627\u0646\u06CC \u062C\u0647\u0627\u0646\u06CC \u0646\u06AF\u06CC\u0646 \u0633\u0631\u062E \u0642\u0627\u0626\u0646\u0627\u062A \u0648 \u06AF\u0646\u0627\u0628\u0627\u062F"
        }
      },
      {
        "id": "yazd-saffron-desert-c2",
        "hex": "#D27D46",
        "nameFa": "\u06A9\u0627\u0647\u06AF\u0644 \u0622\u0641\u062A\u0627\u0628\u200C\u062E\u0648\u0631\u062F\u0647 (Adobe)",
        "nameEn": "Adobe Terracotta",
        "role": "\u062F\u06CC\u0648\u0627\u0631\u0647\u0627\u06CC \u0633\u0627\u0628\u0627\u0637 \u0648 \u06A9\u0648\u0686\u0647\u200C\u0647\u0627",
        "roleFa": "\u062F\u06CC\u0648\u0627\u0631\u0647\u0627\u06CC \u0633\u0627\u0628\u0627\u0637 \u0648 \u06A9\u0648\u0686\u0647\u200C\u0647\u0627",
        "roleEn": "Primary Accent",
        "meaning": "\u0627\u0635\u0644\u0627\u062D \u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u062A\u0646\u0627\u0698 \u062F\u0642\u06CC\u0642\u200C\u062A\u0631 \u062E\u0634\u062A \u0648 \u06A9\u0627\u0647\u06AF\u0644 \u0645\u0639\u0645\u0627\u0631\u06CC \u06A9\u0648\u06CC\u0631\u06CC \u06CC\u0632\u062F",
        "meaningFa": "\u0627\u0635\u0644\u0627\u062D \u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u062A\u0646\u0627\u0698 \u062F\u0642\u06CC\u0642\u200C\u062A\u0631 \u062E\u0634\u062A \u0648 \u06A9\u0627\u0647\u06AF\u0644 \u0645\u0639\u0645\u0627\u0631\u06CC \u06A9\u0648\u06CC\u0631\u06CC \u06CC\u0632\u062F",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Adobe Terracotta)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06A9\u0627\u0647\u06AF\u0644 \u0622\u0641\u062A\u0627\u0628\u200C\u062E\u0648\u0631\u062F\u0647 (Adobe))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #D27D46)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 627,
            "dominantWavelengthNm": 627,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.671,
              "a": 0.0784,
              "b": 0.0997
            },
            "srgb": {
              "r": 210,
              "g": 125,
              "b": 70
            },
            "apca": {
              "contrastOnWhite": 57,
              "contrastOnBlack": -35.4,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u06A9\u0627\u0647\u06AF\u0644 \u0622\u0641\u062A\u0627\u0628\u200C\u062E\u0648\u0631\u062F\u0647 (Adobe))",
            "chemicalName": "Persian Historical Pigment (Adobe Terracotta)",
            "formula": "Natural Organic / Mineral Complex (Matrix #D27D46)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 627,
            "chromaOklab": 0.127,
            "spectralReflectancePeak": "627 nm",
            "cieLab": {
              "L": 60.6,
              "a": 28.2,
              "b": 43.4
            }
          },
          "artMovement": "\u0637\u0644\u0627\u06CC \u0633\u0631\u062E \u0648 \u06A9\u0648\u06CC\u0631 \u06CC\u0632\u062F",
          "historicalContextFa": "\u0627\u0635\u0644\u0627\u062D \u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u062A\u0646\u0627\u0698 \u062F\u0642\u06CC\u0642\u200C\u062A\u0631 \u062E\u0634\u062A \u0648 \u06A9\u0627\u0647\u06AF\u0644 \u0645\u0639\u0645\u0627\u0631\u06CC \u06A9\u0648\u06CC\u0631\u06CC \u06CC\u0632\u062F"
        }
      },
      {
        "id": "yazd-saffron-desert-c3",
        "hex": "#E63946",
        "nameFa": "\u0639\u0642\u06CC\u0642 \u0633\u0631\u062E \u0631\u06CC\u06AF\u200C\u062C\u0646",
        "nameEn": "Rig-e Jenn Red Agate",
        "role": "\u06A9\u0627\u0646\u06CC\u200C\u0647\u0627 \u0648 \u0631\u0645\u0644\u200C\u0647\u0627\u06CC \u063A\u0631\u0648\u0628",
        "roleFa": "\u06A9\u0627\u0646\u06CC\u200C\u0647\u0627 \u0648 \u0631\u0645\u0644\u200C\u0647\u0627\u06CC \u063A\u0631\u0648\u0628",
        "roleEn": "Primary Accent",
        "meaning": "\u0639\u0642\u06CC\u0642\u200C\u0647\u0627\u06CC \u062F\u0634\u062A \u06A9\u0648\u06CC\u0631 \u0648 \u0633\u0631\u062E\u06CC \u0627\u0641\u0642 \u0647\u0646\u06AF\u0627\u0645 \u0637\u0648\u0641\u0627\u0646 \u0634\u0646",
        "meaningFa": "\u0639\u0642\u06CC\u0642\u200C\u0647\u0627\u06CC \u062F\u0634\u062A \u06A9\u0648\u06CC\u0631 \u0648 \u0633\u0631\u062E\u06CC \u0627\u0641\u0642 \u0647\u0646\u06AF\u0627\u0645 \u0637\u0648\u0641\u0627\u0646 \u0634\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Rig-e Jenn Red Agate)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0639\u0642\u06CC\u0642 \u0633\u0631\u062E \u0631\u06CC\u06AF\u200C\u062C\u0646)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #E63946)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 644,
            "dominantWavelengthNm": 644,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.6122,
              "a": 0.1927,
              "b": 0.0788
            },
            "srgb": {
              "r": 230,
              "g": 57,
              "b": 70
            },
            "apca": {
              "contrastOnWhite": 66.5,
              "contrastOnBlack": -25.9,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0639\u0642\u06CC\u0642 \u0633\u0631\u062E \u0631\u06CC\u06AF\u200C\u062C\u0646)",
            "chemicalName": "Persian Historical Pigment (Rig-e Jenn Red Agate)",
            "formula": "Natural Organic / Mineral Complex (Matrix #E63946)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 644,
            "chromaOklab": 0.208,
            "spectralReflectancePeak": "644 nm",
            "cieLab": {
              "L": 52.1,
              "a": 65.7,
              "b": 34.1
            }
          },
          "artMovement": "\u0637\u0644\u0627\u06CC \u0633\u0631\u062E \u0648 \u06A9\u0648\u06CC\u0631 \u06CC\u0632\u062F",
          "historicalContextFa": "\u0639\u0642\u06CC\u0642\u200C\u0647\u0627\u06CC \u062F\u0634\u062A \u06A9\u0648\u06CC\u0631 \u0648 \u0633\u0631\u062E\u06CC \u0627\u0641\u0642 \u0647\u0646\u06AF\u0627\u0645 \u0637\u0648\u0641\u0627\u0646 \u0634\u0646"
        }
      },
      {
        "id": "yazd-saffron-desert-c4",
        "hex": "#F8E7D1",
        "nameFa": "\u0645\u0627\u0633\u0647 \u0637\u0644\u0627\u06CC\u06CC \u0644\u0648\u062A",
        "nameEn": "Lut Golden Sand Dune",
        "role": "\u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0634\u0646\u06CC \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleFa": "\u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0634\u0646\u06CC \u0648 \u0631\u0648\u0634\u0646\u0627\u06CC\u06CC \u0645\u062A\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0634\u0646\u200C\u0647\u0627\u06CC \u0631\u0648\u0627\u0646 \u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0631\u06CC\u06AF \u06CC\u0644\u0627\u0646 \u0632\u06CC\u0631 \u0646\u0648\u0631 \u0622\u0641\u062A\u0627\u0628 \u06A9\u0648\u06CC\u0631",
        "meaningFa": "\u0634\u0646\u200C\u0647\u0627\u06CC \u0631\u0648\u0627\u0646 \u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0631\u06CC\u06AF \u06CC\u0644\u0627\u0646 \u0632\u06CC\u0631 \u0646\u0648\u0631 \u0622\u0641\u062A\u0627\u0628 \u06A9\u0648\u06CC\u0631",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Lut Golden Sand Dune)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0627\u0633\u0647 \u0637\u0644\u0627\u06CC\u06CC \u0644\u0648\u062A)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #F8E7D1)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 604,
            "dominantWavelengthNm": 604,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9358,
              "a": 93e-4,
              "b": 0.0333
            },
            "srgb": {
              "r": 248,
              "g": 231,
              "b": 209
            },
            "apca": {
              "contrastOnWhite": 10.1,
              "contrastOnBlack": -85.2,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0645\u0627\u0633\u0647 \u0637\u0644\u0627\u06CC\u06CC \u0644\u0648\u062A)",
            "chemicalName": "Persian Historical Pigment (Lut Golden Sand Dune)",
            "formula": "Natural Organic / Mineral Complex (Matrix #F8E7D1)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 604,
            "chromaOklab": 0.035,
            "spectralReflectancePeak": "604 nm",
            "cieLab": {
              "L": 92.4,
              "a": 2.3,
              "b": 12.8
            }
          },
          "artMovement": "\u0637\u0644\u0627\u06CC \u0633\u0631\u062E \u0648 \u06A9\u0648\u06CC\u0631 \u06CC\u0632\u062F",
          "historicalContextFa": "\u0634\u0646\u200C\u0647\u0627\u06CC \u0631\u0648\u0627\u0646 \u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0631\u06CC\u06AF \u06CC\u0644\u0627\u0646 \u0632\u06CC\u0631 \u0646\u0648\u0631 \u0622\u0641\u062A\u0627\u0628 \u06A9\u0648\u06CC\u0631"
        }
      },
      {
        "id": "yazd-saffron-desert-c5",
        "hex": "#1B1917",
        "nameFa": "\u062E\u0634\u062A \u0633\u0648\u062E\u062A\u0647 \u06A9\u0648\u06CC\u0631",
        "nameEn": "Sun-baked Adobe Shadow",
        "role": "\u0633\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0633\u0627\u0628\u0627\u0637 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A",
        "roleFa": "\u0633\u0627\u06CC\u0647\u200C\u0647\u0627\u06CC \u0633\u0627\u0628\u0627\u0637 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A",
        "roleEn": "Primary Accent",
        "meaning": "\u062A\u06CC\u0631\u06AF\u06CC \u062E\u0646\u06A9 \u0628\u0627\u062F\u06AF\u06CC\u0631\u0647\u0627 \u0648 \u06A9\u0648\u0686\u0647\u200C\u0647\u0627\u06CC \u0645\u0633\u0642\u0641 \u062E\u0634\u062A\u06CC \u06CC\u0632\u062F",
        "meaningFa": "\u062A\u06CC\u0631\u06AF\u06CC \u062E\u0646\u06A9 \u0628\u0627\u062F\u06AF\u06CC\u0631\u0647\u0627 \u0648 \u06A9\u0648\u0686\u0647\u200C\u0647\u0627\u06CC \u0645\u0633\u0642\u0641 \u062E\u0634\u062A\u06CC \u06CC\u0632\u062F",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Sun-baked Adobe Shadow)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062E\u0634\u062A \u0633\u0648\u062E\u062A\u0647 \u06A9\u0648\u06CC\u0631)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #1B1917)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 610,
            "dominantWavelengthNm": 610,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.2149,
              "a": 19e-4,
              "b": 46e-4
            },
            "srgb": {
              "r": 27,
              "g": 25,
              "b": 23
            },
            "apca": {
              "contrastOnWhite": 104,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062E\u0634\u062A \u0633\u0648\u062E\u062A\u0647 \u06A9\u0648\u06CC\u0631)",
            "chemicalName": "Persian Historical Pigment (Sun-baked Adobe Shadow)",
            "formula": "Natural Organic / Mineral Complex (Matrix #1B1917)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 610,
            "chromaOklab": 5e-3,
            "spectralReflectancePeak": "610 nm",
            "cieLab": {
              "L": 8.9,
              "a": 0.5,
              "b": 1.8
            }
          },
          "artMovement": "\u0637\u0644\u0627\u06CC \u0633\u0631\u062E \u0648 \u06A9\u0648\u06CC\u0631 \u06CC\u0632\u062F",
          "historicalContextFa": "\u062A\u06CC\u0631\u06AF\u06CC \u062E\u0646\u06A9 \u0628\u0627\u062F\u06AF\u06CC\u0631\u0647\u0627 \u0648 \u06A9\u0648\u0686\u0647\u200C\u0647\u0627\u06CC \u0645\u0633\u0642\u0641 \u062E\u0634\u062A\u06CC \u06CC\u0632\u062F"
        }
      },
      {
        "id": "yazd-saffron-desert-c6",
        "hex": "#6B4226",
        "nameFa": "\u0686\u0648\u0628 \u0633\u0646\u062C\u062F \u0628\u0627\u062F\u06AF\u06CC\u0631",
        "nameEn": "Senjed Windcatcher Timber",
        "role": "\u06A9\u0644\u0627\u0641\u200C\u0647\u0627\u06CC \u0686\u0648\u0628\u06CC \u0633\u0646\u062A\u06CC",
        "roleFa": "\u06A9\u0644\u0627\u0641\u200C\u0647\u0627\u06CC \u0686\u0648\u0628\u06CC \u0633\u0646\u062A\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u062A\u06CC\u0631\u0647\u0627\u06CC \u0645\u0642\u0627\u0648\u0645 \u0686\u0648\u0628 \u0633\u0646\u062C\u062F \u062F\u0631 \u062F\u0647\u0627\u0646\u0647 \u0628\u0627\u062F\u06AF\u06CC\u0631\u0647\u0627\u06CC \u0628\u0627\u063A \u062F\u0648\u0644\u062A\u200C\u0622\u0628\u0627\u062F",
        "meaningFa": "\u062A\u06CC\u0631\u0647\u0627\u06CC \u0645\u0642\u0627\u0648\u0645 \u0686\u0648\u0628 \u0633\u0646\u062C\u062F \u062F\u0631 \u062F\u0647\u0627\u0646\u0647 \u0628\u0627\u062F\u06AF\u06CC\u0631\u0647\u0627\u06CC \u0628\u0627\u063A \u062F\u0648\u0644\u062A\u200C\u0622\u0628\u0627\u062F",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Senjed Windcatcher Timber)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0686\u0648\u0628 \u0633\u0646\u062C\u062F \u0628\u0627\u062F\u06AF\u06CC\u0631)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #6B4226)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 618,
            "dominantWavelengthNm": 618,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.4208,
              "a": 0.0415,
              "b": 0.0569
            },
            "srgb": {
              "r": 107,
              "g": 66,
              "b": 38
            },
            "apca": {
              "contrastOnWhite": 88.8,
              "contrastOnBlack": 0,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0686\u0648\u0628 \u0633\u0646\u062C\u062F \u0628\u0627\u062F\u06AF\u06CC\u0631)",
            "chemicalName": "Persian Historical Pigment (Senjed Windcatcher Timber)",
            "formula": "Natural Organic / Mineral Complex (Matrix #6B4226)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 618,
            "chromaOklab": 0.07,
            "spectralReflectancePeak": "618 nm",
            "cieLab": {
              "L": 32.2,
              "a": 14.7,
              "b": 24.2
            }
          },
          "artMovement": "\u0637\u0644\u0627\u06CC \u0633\u0631\u062E \u0648 \u06A9\u0648\u06CC\u0631 \u06CC\u0632\u062F",
          "historicalContextFa": "\u062A\u06CC\u0631\u0647\u0627\u06CC \u0645\u0642\u0627\u0648\u0645 \u0686\u0648\u0628 \u0633\u0646\u062C\u062F \u062F\u0631 \u062F\u0647\u0627\u0646\u0647 \u0628\u0627\u062F\u06AF\u06CC\u0631\u0647\u0627\u06CC \u0628\u0627\u063A \u062F\u0648\u0644\u062A\u200C\u0622\u0628\u0627\u062F"
        }
      }
    ]
  },
  "bazaar-spices": {
    "id": "bazaar-spices",
    "category": "history",
    "nameFa": "\u0631\u0627\u0633\u062A\u0647 \u0627\u062F\u0648\u06CC\u0647\u200C\u0641\u0631\u0648\u0634\u0627\u0646 \u0628\u0627\u0632\u0627\u0631 \u06A9\u0647\u0646",
    "nameEn": "Grand Bazaar Spices & Silk Road",
    "description": "\u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0645\u0645\u062A\u0627\u0632\u060C \u0639\u0637\u0631 \u062F\u0627\u0631\u0686\u06CC\u0646 \u0628\u0627\u0633\u062A\u0627\u0646\u06CC\u060C \u067E\u0627\u067E\u0631\u06CC\u06A9\u0627\u06CC \u062A\u0646\u062F \u0648 \u067E\u0633\u062A\u0647 \u062E\u0646\u062F\u0627\u0646 \u062F\u0631 \u06A9\u0627\u0631\u0648\u0627\u0646\u0633\u0631\u0627\u0647\u0627\u06CC \u0633\u0631\u067E\u0648\u0634\u06CC\u062F\u0647 \u062C\u0627\u062F\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645 \u062F\u0631 \u0628\u0627\u0632\u0627\u0631 \u0628\u0632\u0631\u06AF \u062A\u0628\u0631\u06CC\u0632 \u0648 \u0627\u0635\u0641\u0647\u0627\u0646.",
    "descriptionFa": "\u062A\u067E\u0647\u200C\u0647\u0627\u06CC \u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0645\u0645\u062A\u0627\u0632\u060C \u0639\u0637\u0631 \u062F\u0627\u0631\u0686\u06CC\u0646 \u0628\u0627\u0633\u062A\u0627\u0646\u06CC\u060C \u067E\u0627\u067E\u0631\u06CC\u06A9\u0627\u06CC \u062A\u0646\u062F \u0648 \u067E\u0633\u062A\u0647 \u062E\u0646\u062F\u0627\u0646 \u062F\u0631 \u06A9\u0627\u0631\u0648\u0627\u0646\u0633\u0631\u0627\u0647\u0627\u06CC \u0633\u0631\u067E\u0648\u0634\u06CC\u062F\u0647 \u062C\u0627\u062F\u0647 \u0627\u0628\u0631\u06CC\u0634\u0645 \u062F\u0631 \u0628\u0627\u0632\u0627\u0631 \u0628\u0632\u0631\u06AF \u062A\u0628\u0631\u06CC\u0632 \u0648 \u0627\u0635\u0641\u0647\u0627\u0646.",
    "culturalContext": "\u062A\u06CC\u0645\u0686\u0647 \u0645\u0638\u0641\u0631\u06CC\u0647 \u0648 \u0631\u0627\u0633\u062A\u0647 \u0639\u0637\u0627\u0631\u0627\u0646 \u062F\u0631 \u0628\u0627\u0632\u0627\u0631 \u062A\u0627\u0631\u06CC\u062E\u06CC \u062A\u0628\u0631\u06CC\u0632 \u0648 \u0628\u0627\u0632\u0627\u0631 \u0628\u0632\u0631\u06AF \u062A\u0647\u0631\u0627\u0646",
    "culturalContextFa": "\u062A\u06CC\u0645\u0686\u0647 \u0645\u0638\u0641\u0631\u06CC\u0647 \u0648 \u0631\u0627\u0633\u062A\u0647 \u0639\u0637\u0627\u0631\u0627\u0646 \u062F\u0631 \u0628\u0627\u0632\u0627\u0631 \u062A\u0627\u0631\u06CC\u062E\u06CC \u062A\u0628\u0631\u06CC\u0632 \u0648 \u0628\u0627\u0632\u0627\u0631 \u0628\u0632\u0631\u06AF \u062A\u0647\u0631\u0627\u0646",
    "unescoRef": "\u0645\u062C\u0645\u0648\u0639\u0647 \u0628\u0627\u0632\u0627\u0631 \u062A\u0627\u0631\u06CC\u062E\u06CC \u062A\u0628\u0631\u06CC\u0632 (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F0)",
    "unescoRefFa": "\u0645\u062C\u0645\u0648\u0639\u0647 \u0628\u0627\u0632\u0627\u0631 \u062A\u0627\u0631\u06CC\u062E\u06CC \u062A\u0628\u0631\u06CC\u0632 (\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u062C\u0647\u0627\u0646\u06CC \u06CC\u0648\u0646\u0633\u06A9\u0648 \u06F2\u06F0\u06F1\u06F0)",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bazaar_of_Tabriz_01.jpg/960px-Bazaar_of_Tabriz_01.jpg",
    "colors": [
      {
        "id": "bazaar-spices-c1",
        "hex": "#FFC000",
        "nameFa": "\u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0645\u0645\u062A\u0627\u0632 \u0642\u0644\u0645 (Turmeric)",
        "nameEn": "Turmeric Gold",
        "role": "\u0627\u062F\u0648\u06CC\u0647\u200C\u0647\u0627\u06CC \u0637\u0644\u0627\u06CC\u06CC \u0628\u0627\u0632\u0627\u0631",
        "roleFa": "\u0627\u062F\u0648\u06CC\u0647\u200C\u0647\u0627\u06CC \u0637\u0644\u0627\u06CC\u06CC \u0628\u0627\u0632\u0627\u0631",
        "roleEn": "Primary Accent",
        "meaning": "\u0632\u0631\u062F \u062F\u0631\u062E\u0634\u0627\u0646\u200C\u062A\u0631 \u0648 \u062E\u0627\u0644\u0635\u200C\u062A\u0631 \u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0627\u0639\u0644\u0627 \u062F\u0631 \u0631\u0627\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0633\u0646\u062A\u06CC",
        "meaningFa": "\u0632\u0631\u062F \u062F\u0631\u062E\u0634\u0627\u0646\u200C\u062A\u0631 \u0648 \u062E\u0627\u0644\u0635\u200C\u062A\u0631 \u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0627\u0639\u0644\u0627 \u062F\u0631 \u0631\u0627\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0633\u0646\u062A\u06CC",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Turmeric Gold)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0645\u0645\u062A\u0627\u0632 \u0642\u0644\u0645 (Turmeric))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #FFC000)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.4279,
              "lng": 53.688,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 592,
            "dominantWavelengthNm": 592,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.8422,
              "a": 0.0163,
              "b": 0.1719
            },
            "srgb": {
              "r": 255,
              "g": 192,
              "b": 0
            },
            "apca": {
              "contrastOnWhite": 27.7,
              "contrastOnBlack": -66.1,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0645\u0645\u062A\u0627\u0632 \u0642\u0644\u0645 (Turmeric))",
            "chemicalName": "Persian Historical Pigment (Turmeric Gold)",
            "formula": "Natural Organic / Mineral Complex (Matrix #FFC000)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.4279,
            "longitude": 53.688,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 592,
            "chromaOklab": 0.173,
            "spectralReflectancePeak": "592 nm",
            "cieLab": {
              "L": 81.3,
              "a": 9.9,
              "b": 83.2
            }
          },
          "artMovement": "\u0631\u0627\u0633\u062A\u0647 \u0627\u062F\u0648\u06CC\u0647\u200C\u0641\u0631\u0648\u0634\u0627\u0646 \u0628\u0627\u0632\u0627\u0631 \u06A9\u0647\u0646",
          "historicalContextFa": "\u0632\u0631\u062F \u062F\u0631\u062E\u0634\u0627\u0646\u200C\u062A\u0631 \u0648 \u062E\u0627\u0644\u0635\u200C\u062A\u0631 \u0632\u0631\u062F\u0686\u0648\u0628\u0647 \u0627\u0639\u0644\u0627 \u062F\u0631 \u0631\u0627\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0633\u0646\u062A\u06CC"
        }
      },
      {
        "id": "bazaar-spices-c2",
        "hex": "#D2691E",
        "nameFa": "\u062F\u0627\u0631\u0686\u06CC\u0646\u06CC \u0628\u0627\u0633\u062A\u0627\u0646\u06CC (Cinnamon)",
        "nameEn": "Ancient Cinnamon Brown",
        "role": "\u0686\u0648\u0628 \u062F\u0627\u0631\u0686\u06CC\u0646 \u0633\u06CC\u0644\u0627\u0646",
        "roleFa": "\u0686\u0648\u0628 \u062F\u0627\u0631\u0686\u06CC\u0646 \u0633\u06CC\u0644\u0627\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF \u06AF\u0631\u0645 \u0648 \u0627\u0635\u06CC\u0644 \u067E\u0648\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u062F\u0627\u0631\u0686\u06CC\u0646 \u0628\u0627\u0632\u0627\u0631 \u062A\u0628\u0631\u06CC\u0632 \u0648 \u0627\u0635\u0641\u0647\u0627\u0646",
        "meaningFa": "\u0631\u0646\u06AF \u06AF\u0631\u0645 \u0648 \u0627\u0635\u06CC\u0644 \u067E\u0648\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u062F\u0627\u0631\u0686\u06CC\u0646 \u0628\u0627\u0632\u0627\u0631 \u062A\u0628\u0631\u06CC\u0632 \u0648 \u0627\u0635\u0641\u0647\u0627\u0646",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Ancient Cinnamon Brown)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062F\u0627\u0631\u0686\u06CC\u0646\u06CC \u0628\u0627\u0633\u062A\u0627\u0646\u06CC (Cinnamon))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #D2691E)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 32.9279,
              "lng": 53.988,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 631,
            "dominantWavelengthNm": 631,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.6344,
              "a": 0.0991,
              "b": 0.1192
            },
            "srgb": {
              "r": 210,
              "g": 105,
              "b": 30
            },
            "apca": {
              "contrastOnWhite": 62.6,
              "contrastOnBlack": -29.7,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062F\u0627\u0631\u0686\u06CC\u0646\u06CC \u0628\u0627\u0633\u062A\u0627\u0646\u06CC (Cinnamon))",
            "chemicalName": "Persian Historical Pigment (Ancient Cinnamon Brown)",
            "formula": "Natural Organic / Mineral Complex (Matrix #D2691E)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 32.9279,
            "longitude": 53.988,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 631,
            "chromaOklab": 0.155,
            "spectralReflectancePeak": "631 nm",
            "cieLab": {
              "L": 56,
              "a": 37.1,
              "b": 56.7
            }
          },
          "artMovement": "\u0631\u0627\u0633\u062A\u0647 \u0627\u062F\u0648\u06CC\u0647\u200C\u0641\u0631\u0648\u0634\u0627\u0646 \u0628\u0627\u0632\u0627\u0631 \u06A9\u0647\u0646",
          "historicalContextFa": "\u0631\u0646\u06AF \u06AF\u0631\u0645 \u0648 \u0627\u0635\u06CC\u0644 \u067E\u0648\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u062F\u0627\u0631\u0686\u06CC\u0646 \u0628\u0627\u0632\u0627\u0631 \u062A\u0628\u0631\u06CC\u0632 \u0648 \u0627\u0635\u0641\u0647\u0627\u0646"
        }
      },
      {
        "id": "bazaar-spices-c3",
        "hex": "#C32F27",
        "nameFa": "\u067E\u0627\u067E\u0631\u06CC\u06A9\u0627 \u0648 \u0641\u0644\u0641\u0644 \u0628\u06CC\u062C\u0627\u0631",
        "nameEn": "Paprika & Pepper Crimson",
        "role": "\u0641\u0644\u0641\u0644\u200C\u0647\u0627\u06CC \u0633\u0631\u062E \u0647\u0631\u0645\u0632\u06CC",
        "roleFa": "\u0641\u0644\u0641\u0644\u200C\u0647\u0627\u06CC \u0633\u0631\u062E \u0647\u0631\u0645\u0632\u06CC",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u062A\u0646\u062F \u0648 \u0622\u062A\u0634\u06CC\u0646 \u0641\u0644\u0641\u0644\u200C\u0647\u0627\u06CC \u062E\u0634\u06A9\u06CC\u062F\u0647 \u0622\u0648\u06CC\u062E\u062A\u0647 \u062F\u0631 \u062D\u062C\u0631\u0647\u200C\u0647\u0627",
        "meaningFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u062A\u0646\u062F \u0648 \u0622\u062A\u0634\u06CC\u0646 \u0641\u0644\u0641\u0644\u200C\u0647\u0627\u06CC \u062E\u0634\u06A9\u06CC\u062F\u0647 \u0622\u0648\u06CC\u062E\u062A\u0647 \u062F\u0631 \u062D\u062C\u0631\u0647\u200C\u0647\u0627",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Paprika & Pepper Crimson)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u067E\u0627\u067E\u0631\u06CC\u06A9\u0627 \u0648 \u0641\u0644\u0641\u0644 \u0628\u06CC\u062C\u0627\u0631)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #C32F27)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.4279,
              "lng": 54.288000000000004,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 639,
            "dominantWavelengthNm": 639,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.5386,
              "a": 0.1637,
              "b": 0.0882
            },
            "srgb": {
              "r": 195,
              "g": 47,
              "b": 39
            },
            "apca": {
              "contrastOnWhite": 75.7,
              "contrastOnBlack": -16.7,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u067E\u0627\u067E\u0631\u06CC\u06A9\u0627 \u0648 \u0641\u0644\u0641\u0644 \u0628\u06CC\u062C\u0627\u0631)",
            "chemicalName": "Persian Historical Pigment (Paprika & Pepper Crimson)",
            "formula": "Natural Organic / Mineral Complex (Matrix #C32F27)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.4279,
            "longitude": 54.288000000000004,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 639,
            "chromaOklab": 0.186,
            "spectralReflectancePeak": "639 nm",
            "cieLab": {
              "L": 43.9,
              "a": 57.3,
              "b": 40.8
            }
          },
          "artMovement": "\u0631\u0627\u0633\u062A\u0647 \u0627\u062F\u0648\u06CC\u0647\u200C\u0641\u0631\u0648\u0634\u0627\u0646 \u0628\u0627\u0632\u0627\u0631 \u06A9\u0647\u0646",
          "historicalContextFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u062A\u0646\u062F \u0648 \u0622\u062A\u0634\u06CC\u0646 \u0641\u0644\u0641\u0644\u200C\u0647\u0627\u06CC \u062E\u0634\u06A9\u06CC\u062F\u0647 \u0622\u0648\u06CC\u062E\u062A\u0647 \u062F\u0631 \u062D\u062C\u0631\u0647\u200C\u0647\u0627"
        }
      },
      {
        "id": "bazaar-spices-c4",
        "hex": "#93C572",
        "nameFa": "\u067E\u0633\u062A\u0647 \u062E\u0646\u062F\u0627\u0646 \u0631\u0641\u0633\u0646\u062C\u0627\u0646 (Pistachio Green)",
        "nameEn": "Pistachio Green",
        "role": "\u0645\u063A\u0632 \u067E\u0633\u062A\u0647 \u062F\u0633\u062A\u200C\u0686\u06CC\u0646",
        "roleFa": "\u0645\u063A\u0632 \u067E\u0633\u062A\u0647 \u062F\u0633\u062A\u200C\u0686\u06CC\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F Pistachio Green \u062D\u0627\u0635\u0644 \u0627\u0632 \u067E\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0646\u0648\u0628\u0631\u0627\u0646\u0647",
        "meaningFa": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F Pistachio Green \u062D\u0627\u0635\u0644 \u0627\u0632 \u067E\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0646\u0648\u0628\u0631\u0627\u0646\u0647",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Pistachio Green)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u067E\u0633\u062A\u0647 \u062E\u0646\u062F\u0627\u0646 \u0631\u0641\u0633\u0646\u062C\u0627\u0646 (Pistachio Green))",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #93C572)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 33.9279,
              "lng": 54.588,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 520,
            "dominantWavelengthNm": 520,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.7686,
              "a": -0.0857,
              "b": 0.0891
            },
            "srgb": {
              "r": 147,
              "g": 197,
              "b": 114
            },
            "apca": {
              "contrastOnWhite": 38.2,
              "contrastOnBlack": -55,
              "recommendedWeight": "UI Controls"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u067E\u0633\u062A\u0647 \u062E\u0646\u062F\u0627\u0646 \u0631\u0641\u0633\u0646\u062C\u0627\u0646 (Pistachio Green))",
            "chemicalName": "Persian Historical Pigment (Pistachio Green)",
            "formula": "Natural Organic / Mineral Complex (Matrix #93C572)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 33.9279,
            "longitude": 54.588,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 520,
            "chromaOklab": 0.124,
            "spectralReflectancePeak": "520 nm",
            "cieLab": {
              "L": 74.4,
              "a": -31.2,
              "b": 36.4
            }
          },
          "artMovement": "\u0631\u0627\u0633\u062A\u0647 \u0627\u062F\u0648\u06CC\u0647\u200C\u0641\u0631\u0648\u0634\u0627\u0646 \u0628\u0627\u0632\u0627\u0631 \u06A9\u0647\u0646",
          "historicalContextFa": "\u0631\u0646\u06AF \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F Pistachio Green \u062D\u0627\u0635\u0644 \u0627\u0632 \u067E\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0646\u0648\u0628\u0631\u0627\u0646\u0647"
        }
      },
      {
        "id": "bazaar-spices-c5",
        "hex": "#FAF0CA",
        "nameFa": "\u062E\u0627\u0645\u0647 \u0634\u06CC\u0631\u06CC\u0646\u06CC \u06A9\u0647\u0646",
        "nameEn": "Ancient Saffron Pastry Cream",
        "role": "\u067E\u0648\u0644\u06A9\u06CC \u0648 \u06AF\u0632 \u0627\u0635\u0641\u0647\u0627\u0646",
        "roleFa": "\u067E\u0648\u0644\u06A9\u06CC \u0648 \u06AF\u0632 \u0627\u0635\u0641\u0647\u0627\u0646",
        "roleEn": "Primary Accent",
        "meaning": "\u0633\u067E\u06CC\u062F\u06CC \u06A9\u0631\u0645 \u0622\u0631\u062F\u06CC \u06AF\u0632 \u0648 \u0634\u06CC\u0631\u06CC\u0646\u06CC\u200C\u0647\u0627\u06CC \u0633\u0646\u062A\u06CC \u0628\u0627\u0632\u0627\u0631",
        "meaningFa": "\u0633\u067E\u06CC\u062F\u06CC \u06A9\u0631\u0645 \u0622\u0631\u062F\u06CC \u06AF\u0632 \u0648 \u0634\u06CC\u0631\u06CC\u0646\u06CC\u200C\u0647\u0627\u06CC \u0633\u0646\u062A\u06CC \u0628\u0627\u0632\u0627\u0631",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Ancient Saffron Pastry Cream)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062E\u0627\u0645\u0647 \u0634\u06CC\u0631\u06CC\u0646\u06CC \u06A9\u0647\u0646)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #FAF0CA)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.4279,
              "lng": 54.888000000000005,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 607,
            "dominantWavelengthNm": 607,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.9534,
              "a": -44e-4,
              "b": 0.0504
            },
            "srgb": {
              "r": 250,
              "g": 240,
              "b": 202
            },
            "apca": {
              "contrastOnWhite": 0,
              "contrastOnBlack": -89.3,
              "recommendedWeight": "Headings / Large"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u062E\u0627\u0645\u0647 \u0634\u06CC\u0631\u06CC\u0646\u06CC \u06A9\u0647\u0646)",
            "chemicalName": "Persian Historical Pigment (Ancient Saffron Pastry Cream)",
            "formula": "Natural Organic / Mineral Complex (Matrix #FAF0CA)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.4279,
            "longitude": 54.888000000000005,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 607,
            "chromaOklab": 0.051,
            "spectralReflectancePeak": "607 nm",
            "cieLab": {
              "L": 94.7,
              "a": -2.6,
              "b": 19.6
            }
          },
          "artMovement": "\u0631\u0627\u0633\u062A\u0647 \u0627\u062F\u0648\u06CC\u0647\u200C\u0641\u0631\u0648\u0634\u0627\u0646 \u0628\u0627\u0632\u0627\u0631 \u06A9\u0647\u0646",
          "historicalContextFa": "\u0633\u067E\u06CC\u062F\u06CC \u06A9\u0631\u0645 \u0622\u0631\u062F\u06CC \u06AF\u0632 \u0648 \u0634\u06CC\u0631\u06CC\u0646\u06CC\u200C\u0647\u0627\u06CC \u0633\u0646\u062A\u06CC \u0628\u0627\u0632\u0627\u0631"
        }
      },
      {
        "id": "bazaar-spices-c6",
        "hex": "#1E1E24",
        "nameFa": "\u0633\u06CC\u0627\u0647\u200C\u062F\u0627\u0646\u0647 \u0648 \u0647\u0644 \u0633\u06CC\u0627\u0647",
        "nameEn": "Nigella Seed & Black Cardamom",
        "role": "\u0627\u062F\u0648\u06CC\u0647\u200C\u0647\u0627\u06CC \u062A\u0627\u0631\u06CC\u06A9 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A",
        "roleFa": "\u0627\u062F\u0648\u06CC\u0647\u200C\u0647\u0627\u06CC \u062A\u0627\u0631\u06CC\u06A9 \u0648 \u06A9\u0646\u062A\u0631\u0627\u0633\u062A",
        "roleEn": "Primary Accent",
        "meaning": "\u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0645\u0639\u0637\u0631 \u0633\u06CC\u0627\u0647\u200C\u062F\u0627\u0646\u0647\u060C \u0647\u0644 \u0647\u0646\u062F\u06CC \u0648 \u0641\u0644\u0641\u0644 \u0633\u06CC\u0627\u0647 \u0622\u0633\u06CC\u0627\u0628\u200C\u0646\u0634\u062F\u0647",
        "meaningFa": "\u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0645\u0639\u0637\u0631 \u0633\u06CC\u0627\u0647\u200C\u062F\u0627\u0646\u0647\u060C \u0647\u0644 \u0647\u0646\u062F\u06CC \u0648 \u0641\u0644\u0641\u0644 \u0633\u06CC\u0627\u0647 \u0622\u0633\u06CC\u0627\u0628\u200C\u0646\u0634\u062F\u0647",
        "evidence": {
          "mineralogical": {
            "mineralName": "Persian Historical Pigment (Nigella Seed & Black Cardamom)",
            "mineralNameFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u06CC\u0627\u0647\u200C\u062F\u0627\u0646\u0647 \u0648 \u0647\u0644 \u0633\u06CC\u0627\u0647)",
            "chemicalFormula": "Natural Organic / Mineral Complex (Matrix #1E1E24)",
            "crystalSystem": "\u06A9\u0631\u06CC\u0633\u062A\u0627\u0644\u06CC\u0646 \u0628\u0648\u0645\u06CC \u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646",
            "traditionalExtraction": "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0646\u062A\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u06AF\u06CC\u0627\u0647\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0631\u0633\u0627\u0644\u0627\u062A \u062E\u0637\u06CC \u062A\u0630\u0647\u06CC\u0628 \u0648 \u0631\u0646\u06AF\u0631\u0632\u06CC",
            "historicalManuscriptRef": "\u0631\u0633\u0627\u0644\u0627\u062A \u06A9\u0647\u0646 \u0631\u0646\u06AF\u0631\u0632\u06CC \u0633\u0646\u062A\u06CC \u0648 \u0635\u0646\u0639\u062A\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)"
          },
          "geoSpatial": {
            "originSite": "Iranian Plateau Heritage Sites",
            "originSiteFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "unescoHeritageRef": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648",
            "coordinates": {
              "lat": 34.9279,
              "lng": 55.188,
              "altitudeMeters": 1400
            }
          },
          "spectral": {
            "peakWavelengthNm": 445,
            "dominantWavelengthNm": 445,
            "reflectanceRange": [
              0.05,
              0.75
            ],
            "fwhmNm": 55
          },
          "colorScience": {
            "oklab": {
              "L": 0.2376,
              "a": 3e-3,
              "b": -0.011
            },
            "srgb": {
              "r": 30,
              "g": 30,
              "b": 36
            },
            "apca": {
              "contrastOnWhite": 103.2,
              "contrastOnBlack": 0,
              "recommendedWeight": "Fluent Body (Normal 400)"
            }
          },
          "chemical": {
            "historicalPigmentFa": "\u0631\u0646\u06AF\u062F\u0627\u0646\u0647 \u0627\u0635\u06CC\u0644 \u0627\u06CC\u0631\u0627\u0646\u06CC (\u0633\u06CC\u0627\u0647\u200C\u062F\u0627\u0646\u0647 \u0648 \u0647\u0644 \u0633\u06CC\u0627\u0647)",
            "chemicalName": "Persian Historical Pigment (Nigella Seed & Black Cardamom)",
            "formula": "Natural Organic / Mineral Complex (Matrix #1E1E24)",
            "casNumber": "7732-18-5 (Authentic Historical Specimen)",
            "molarMass": "Calculated Complex"
          },
          "geo": {
            "locationFa": "\u0641\u0644\u0627\u062A \u0627\u06CC\u0631\u0627\u0646\u060C \u0645\u0631\u0627\u06A9\u0632 \u0633\u0646\u062A\u06CC \u0647\u0646\u0631 \u0648 \u0645\u0639\u0645\u0627\u0631\u06CC",
            "latitude": 34.9279,
            "longitude": 55.188,
            "elevationMeters": 1400,
            "unescoSiteId": "\u062B\u0628\u062A \u0645\u06CC\u0631\u0627\u062B \u0641\u0631\u0647\u0646\u06AF\u06CC \u0645\u0644\u0645\u0648\u0633 \u0648 \u0646\u0627\u0645\u0644\u0645\u0648\u0633 \u06CC\u0648\u0646\u0633\u06A9\u0648"
          },
          "physics": {
            "dominantWavelengthNm": 445,
            "chromaOklab": 0.011,
            "spectralReflectancePeak": "445 nm",
            "cieLab": {
              "L": 11.5,
              "a": 1.6,
              "b": -4.1
            }
          },
          "artMovement": "\u0631\u0627\u0633\u062A\u0647 \u0627\u062F\u0648\u06CC\u0647\u200C\u0641\u0631\u0648\u0634\u0627\u0646 \u0628\u0627\u0632\u0627\u0631 \u06A9\u0647\u0646",
          "historicalContextFa": "\u062F\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0645\u0639\u0637\u0631 \u0633\u06CC\u0627\u0647\u200C\u062F\u0627\u0646\u0647\u060C \u0647\u0644 \u0647\u0646\u062F\u06CC \u0648 \u0641\u0644\u0641\u0644 \u0633\u06CC\u0627\u0647 \u0622\u0633\u06CC\u0627\u0628\u200C\u0646\u0634\u062F\u0647"
        }
      }
    ]
  }
};

// src/math/oklab.ts
function hexToRgb(hex) {
  if (typeof hex !== "string" || !/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(hex.trim())) {
    throw new TypeError("Expected an opaque sRGB color in #RGB or #RRGGBB format");
  }
  let cleanHex = hex.trim().slice(1);
  if (cleanHex.length === 3) cleanHex = [...cleanHex].map((c) => c + c).join("");
  const num = parseInt(cleanHex, 16);
  return {
    r: num >> 16 & 255,
    g: num >> 8 & 255,
    b: num & 255
  };
}
function rgbToHex(rgb) {
  if (![rgb.r, rgb.g, rgb.b].every(Number.isFinite)) throw new TypeError("RGB components must be finite");
  const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
  const r = clamp(rgb.r).toString(16).padStart(2, "0");
  const g = clamp(rgb.g).toString(16).padStart(2, "0");
  const b = clamp(rgb.b).toString(16).padStart(2, "0");
  return `#${r}${g}${b}`.toUpperCase();
}
function srgbToLinear(c) {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
function linearToSrgb(c) {
  const v = c <= 31308e-7 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  return Math.max(0, Math.min(255, v * 255));
}
function rgbToOklab(rgb) {
  if (![rgb.r, rgb.g, rgb.b].every((v) => Number.isFinite(v) && v >= 0 && v <= 255)) throw new RangeError("RGB components must be in [0, 255]");
  const r = srgbToLinear(rgb.r);
  const g = srgbToLinear(rgb.g);
  const b = srgbToLinear(rgb.b);
  const l_ = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m_ = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s_ = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return {
    L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_
  };
}
function oklabToRgb(oklab) {
  if (![oklab.L, oklab.a, oklab.b].every(Number.isFinite)) throw new TypeError("Oklab components must be finite");
  const l_ = oklab.L + 0.3963377774 * oklab.a + 0.2158037573 * oklab.b;
  const m_ = oklab.L - 0.1055613458 * oklab.a - 0.0638541728 * oklab.b;
  const s_ = oklab.L - 0.0894841775 * oklab.a - 1.291485548 * oklab.b;
  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;
  const rLin = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const bLin = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  return {
    r: linearToSrgb(rLin),
    g: linearToSrgb(gLin),
    b: linearToSrgb(bLin)
  };
}

// node_modules/apca-w3/src/apca-w3.js
var SA98G = {
  mainTRC: 2.4,
  // 2.4 exponent for emulating actual monitor perception
  // For reverseAPCA
  get mainTRCencode() {
    return 1 / this.mainTRC;
  },
  // sRGB coefficients
  sRco: 0.2126729,
  sGco: 0.7151522,
  sBco: 0.072175,
  // G-4g constants for use with 2.4 exponent
  normBG: 0.56,
  normTXT: 0.57,
  revTXT: 0.62,
  revBG: 0.65,
  // G-4g Clamps and Scalers
  blkThrs: 0.022,
  blkClmp: 1.414,
  scaleBoW: 1.14,
  scaleWoB: 1.14,
  loBoWoffset: 0.027,
  loWoBoffset: 0.027,
  deltaYmin: 5e-4,
  loClip: 0.1,
  ///// MAGIC NUMBERS for UNCLAMP, for use with 0.022 & 1.414 /////
  // Magic Numbers for reverseAPCA
  mFactor: 1.9468554433171,
  get mFactInv() {
    return 1 / this.mFactor;
  },
  mOffsetIn: 0.0387393816571401,
  mExpAdj: 0.283343396420869,
  get mExp() {
    return this.mExpAdj / this.blkClmp;
  },
  mOffsetOut: 0.312865795870758
};
function APCAcontrast(txtY, bgY, places = -1) {
  const icp = [0, 1.1];
  if (isNaN(txtY) || isNaN(bgY) || Math.min(txtY, bgY) < icp[0] || Math.max(txtY, bgY) > icp[1]) {
    return 0;
  }
  ;
  let SAPC = 0;
  let outputContrast = 0;
  let polCat = "BoW";
  txtY = txtY > SA98G.blkThrs ? txtY : txtY + Math.pow(SA98G.blkThrs - txtY, SA98G.blkClmp);
  bgY = bgY > SA98G.blkThrs ? bgY : bgY + Math.pow(SA98G.blkThrs - bgY, SA98G.blkClmp);
  if (Math.abs(bgY - txtY) < SA98G.deltaYmin) {
    return 0;
  }
  if (bgY > txtY) {
    SAPC = (Math.pow(bgY, SA98G.normBG) - Math.pow(txtY, SA98G.normTXT)) * SA98G.scaleBoW;
    outputContrast = SAPC < SA98G.loClip ? 0 : SAPC - SA98G.loBoWoffset;
  } else {
    polCat = "WoB";
    SAPC = (Math.pow(bgY, SA98G.revBG) - Math.pow(txtY, SA98G.revTXT)) * SA98G.scaleWoB;
    outputContrast = SAPC > -SA98G.loClip ? 0 : SAPC + SA98G.loWoBoffset;
  }
  if (places < 0) {
    return outputContrast * 100;
  } else if (places == 0) {
    return Math.round(Math.abs(outputContrast) * 100) + "<sub>" + polCat + "</sub>";
  } else if (Number.isInteger(places)) {
    return (outputContrast * 100).toFixed(places);
  } else {
    return 0;
  }
}
function fontLookupAPCA(contrast, places = 2) {
  const fontMatrixAscend = [
    ["Lc", 100, 200, 300, 400, 500, 600, 700, 800, 900],
    [0, 999, 999, 999, 999, 999, 999, 999, 999, 999],
    [10, 999, 999, 999, 999, 999, 999, 999, 999, 999],
    [15, 777, 777, 777, 777, 777, 777, 777, 777, 777],
    [20, 777, 777, 777, 777, 777, 777, 777, 777, 777],
    [25, 777, 777, 777, 120, 120, 108, 96, 96, 96],
    [30, 777, 777, 120, 108, 108, 96, 72, 72, 72],
    [35, 777, 120, 108, 96, 72, 60, 48, 48, 48],
    [40, 120, 108, 96, 60, 48, 42, 32, 32, 32],
    [45, 108, 96, 72, 42, 32, 28, 24, 24, 24],
    [50, 96, 72, 60, 32, 28, 24, 21, 21, 21],
    [55, 80, 60, 48, 28, 24, 21, 18, 18, 18],
    [60, 72, 48, 42, 24, 21, 18, 16, 16, 18],
    [65, 68, 46, 32, 21.75, 19, 17, 15, 16, 18],
    [70, 64, 44, 28, 19.5, 18, 16, 14.5, 16, 18],
    [75, 60, 42, 24, 18, 16, 15, 14, 16, 18],
    [80, 56, 38.25, 23, 17.25, 15.81, 14.81, 14, 16, 18],
    [85, 52, 34.5, 22, 16.5, 15.625, 14.625, 14, 16, 18],
    [90, 48, 32, 21, 16, 15.5, 14.5, 14, 16, 18],
    [95, 45, 28, 19.5, 15.5, 15, 14, 13.5, 16, 18],
    [100, 42, 26.5, 18.5, 15, 14.5, 13.5, 13, 16, 18],
    [105, 39, 25, 18, 14.5, 14, 13, 12, 16, 18],
    [110, 36, 24, 18, 14, 13, 12, 11, 16, 18],
    [115, 34.5, 22.5, 17.25, 12.5, 11.875, 11.25, 10.625, 14.5, 16.5],
    [120, 33, 21, 16.5, 11, 10.75, 10.5, 10.25, 13, 15],
    [125, 32, 20, 16, 10, 10, 10, 10, 12, 14]
  ];
  const fontDeltaAscend = [
    ["\u2206Lc", 100, 200, 300, 400, 500, 600, 700, 800, 900],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [15, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [20, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [25, 0, 0, 0, 12, 12, 12, 24, 24, 24],
    [30, 0, 0, 12, 12, 36, 36, 24, 24, 24],
    [35, 0, 12, 12, 36, 24, 18, 16, 16, 16],
    [40, 12, 12, 24, 18, 16, 14, 8, 8, 8],
    [45, 12, 24, 12, 10, 4, 4, 3, 3, 3],
    [50, 16, 12, 12, 4, 4, 3, 3, 3, 3],
    [55, 8, 12, 6, 4, 3, 3, 2, 2, 0],
    [60, 4, 2, 10, 2.25, 2, 1, 1, 0, 0],
    [65, 4, 2, 4, 2.25, 1, 1, 0.5, 0, 0],
    [70, 4, 2, 4, 1.5, 2, 1, 0.5, 0, 0],
    [75, 4, 3.75, 1, 0.75, 0.188, 0.188, 0, 0, 0],
    [80, 4, 3.75, 1, 0.75, 0.188, 0.188, 0, 0, 0],
    [85, 4, 2.5, 1, 0.5, 0.125, 0.125, 0, 0, 0],
    [90, 3, 4, 1.5, 0.5, 0.5, 0.5, 0.5, 0, 0],
    [95, 3, 1.5, 1, 0.5, 0.5, 0.5, 0.5, 0, 0],
    [100, 3, 1.5, 0.5, 0.5, 0.5, 0.5, 1, 0, 0],
    [105, 3, 1, 0, 0.5, 1, 1, 1, 0, 0],
    [110, 1.5, 1.5, 0.75, 1.5, 1.125, 0.75, 0.375, 1.5, 1.5],
    [115, 1.5, 1.5, 0.75, 1.5, 1.125, 0.75, 0.375, 1.5, 1.5],
    [120, 1, 1, 0.5, 1, 0.75, 0.5, 0.25, 1, 1],
    [125, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const weightArray = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const weightArrayLen = weightArray.length;
  let returnArray = [contrast.toFixed(places), 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const returnArrayLen = returnArray.length;
  const contrastArrayAscend = ["lc", 0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125];
  const contrastArrayLenAsc = contrastArrayAscend.length;
  let tempFont = 777;
  contrast = Math.abs(contrast);
  const factor = 0.2;
  const index = contrast == 0 ? 1 : contrast * factor | 0;
  let w = 0;
  let scoreAdj = (contrast - fontMatrixAscend[index][w]) * factor;
  w++;
  for (; w < weightArrayLen; w++) {
    tempFont = fontMatrixAscend[index][w];
    if (tempFont > 400) {
      returnArray[w] = tempFont;
    } else if (contrast < 14.5) {
      returnArray[w] = 999;
    } else if (contrast < 29.5) {
      returnArray[w] = 777;
    } else {
      tempFont > 24 ? returnArray[w] = Math.round(tempFont - fontDeltaAscend[index][w] * scoreAdj) : returnArray[w] = tempFont - (2 * fontDeltaAscend[index][w] * scoreAdj | 0) * 0.5;
    }
  }
  return returnArray;
}
function sRGBtoY(rgb = [0, 0, 0]) {
  function simpleExp(chan) {
    return Math.pow(chan / 255, SA98G.mainTRC);
  }
  ;
  return SA98G.sRco * simpleExp(rgb[0]) + SA98G.sGco * simpleExp(rgb[1]) + SA98G.sBco * simpleExp(rgb[2]);
}

// src/math/apca.ts
function calculateAPCA(txtHex, bgHex) {
  const t = hexToRgb(txtHex), b = hexToRgb(bgHex);
  return APCAcontrast(sRGBtoY([t.r, t.g, t.b]), sRGBtoY([b.r, b.g, b.b]));
}
function getApcaFontSizes(lc) {
  if (!Number.isFinite(lc) || Math.abs(lc) > 110) throw new RangeError("Expected finite screen contrast Lc in [-110, 110]");
  const values = fontLookupAPCA(lc);
  return Object.fromEntries([100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, i) => [weight, Number(values[i + 1])]));
}
function evaluateAPCA(txtHex, bgHex) {
  const lc = calculateAPCA(txtHex, bgHex), abs = Math.abs(lc);
  const sizes = fontLookupAPCA(lc);
  return {
    lcScore: lc,
    rating: abs >= 90 ? "Lc 90 (Fluent Body Text)" : abs >= 75 ? "Lc 75 (Content Text)" : abs >= 60 ? "Lc 60 (Sub-head)" : abs >= 45 ? "Lc 45 (Large/Bold)" : "Fail",
    minFontSizePx: { fontNormal400: Number(sizes[4]), fontBold700: Number(sizes[7]) },
    passedFluentBody: abs >= 90,
    method: "apca-w3@0.1.9"
  };
}

// node_modules/@material/material-color-utilities/utils/math_utils.js
function signum(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 0;
  } else {
    return 1;
  }
}
function lerp(start, stop, amount) {
  return (1 - amount) * start + amount * stop;
}
function clampInt(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}
function clampDouble(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}
function sanitizeDegreesInt(degrees) {
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees = degrees + 360;
  }
  return degrees;
}
function sanitizeDegreesDouble(degrees) {
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees = degrees + 360;
  }
  return degrees;
}
function differenceDegrees(a, b) {
  return 180 - Math.abs(Math.abs(a - b) - 180);
}
function matrixMultiply(row, matrix) {
  const a = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
  const b = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
  const c = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
  return [a, b, c];
}

// node_modules/@material/material-color-utilities/utils/color_utils.js
var SRGB_TO_XYZ = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
];
var XYZ_TO_SRGB = [
  [
    3.2413774792388685,
    -1.5376652402851851,
    -0.49885366846268053
  ],
  [
    -0.9691452513005321,
    1.8758853451067872,
    0.04156585616912061
  ],
  [
    0.05562093689691305,
    -0.20395524564742123,
    1.0571799111220335
  ]
];
var WHITE_POINT_D65 = [95.047, 100, 108.883];
function argbFromRgb(red, green, blue) {
  return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
}
function argbFromLinrgb(linrgb) {
  const r = delinearized(linrgb[0]);
  const g = delinearized(linrgb[1]);
  const b = delinearized(linrgb[2]);
  return argbFromRgb(r, g, b);
}
function redFromArgb(argb2) {
  return argb2 >> 16 & 255;
}
function greenFromArgb(argb2) {
  return argb2 >> 8 & 255;
}
function blueFromArgb(argb2) {
  return argb2 & 255;
}
function argbFromXyz(x, y, z) {
  const matrix = XYZ_TO_SRGB;
  const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
  const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
  const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
  const r = delinearized(linearR);
  const g = delinearized(linearG);
  const b = delinearized(linearB);
  return argbFromRgb(r, g, b);
}
function xyzFromArgb(argb2) {
  const r = linearized(redFromArgb(argb2));
  const g = linearized(greenFromArgb(argb2));
  const b = linearized(blueFromArgb(argb2));
  return matrixMultiply([r, g, b], SRGB_TO_XYZ);
}
function labFromArgb(argb2) {
  const linearR = linearized(redFromArgb(argb2));
  const linearG = linearized(greenFromArgb(argb2));
  const linearB = linearized(blueFromArgb(argb2));
  const matrix = SRGB_TO_XYZ;
  const x = matrix[0][0] * linearR + matrix[0][1] * linearG + matrix[0][2] * linearB;
  const y = matrix[1][0] * linearR + matrix[1][1] * linearG + matrix[1][2] * linearB;
  const z = matrix[2][0] * linearR + matrix[2][1] * linearG + matrix[2][2] * linearB;
  const whitePoint = WHITE_POINT_D65;
  const xNormalized = x / whitePoint[0];
  const yNormalized = y / whitePoint[1];
  const zNormalized = z / whitePoint[2];
  const fx = labF(xNormalized);
  const fy = labF(yNormalized);
  const fz = labF(zNormalized);
  const l = 116 * fy - 16;
  const a = 500 * (fx - fy);
  const b = 200 * (fy - fz);
  return [l, a, b];
}
function argbFromLstar(lstar) {
  const y = yFromLstar(lstar);
  const component = delinearized(y);
  return argbFromRgb(component, component, component);
}
function lstarFromArgb(argb2) {
  const y = xyzFromArgb(argb2)[1];
  return 116 * labF(y / 100) - 16;
}
function yFromLstar(lstar) {
  return 100 * labInvf((lstar + 16) / 116);
}
function lstarFromY(y) {
  return labF(y / 100) * 116 - 16;
}
function linearized(rgbComponent) {
  const normalized = rgbComponent / 255;
  if (normalized <= 0.040449936) {
    return normalized / 12.92 * 100;
  } else {
    return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100;
  }
}
function delinearized(rgbComponent) {
  const normalized = rgbComponent / 100;
  let delinearized2 = 0;
  if (normalized <= 31308e-7) {
    delinearized2 = normalized * 12.92;
  } else {
    delinearized2 = 1.055 * Math.pow(normalized, 1 / 2.4) - 0.055;
  }
  return clampInt(0, 255, Math.round(delinearized2 * 255));
}
function whitePointD65() {
  return WHITE_POINT_D65;
}
function labF(t) {
  const e = 216 / 24389;
  const kappa = 24389 / 27;
  if (t > e) {
    return Math.pow(t, 1 / 3);
  } else {
    return (kappa * t + 16) / 116;
  }
}
function labInvf(ft) {
  const e = 216 / 24389;
  const kappa = 24389 / 27;
  const ft3 = ft * ft * ft;
  if (ft3 > e) {
    return ft3;
  } else {
    return (116 * ft - 16) / kappa;
  }
}

// node_modules/@material/material-color-utilities/hct/viewing_conditions.js
var ViewingConditions = class _ViewingConditions {
  /**
   * Create ViewingConditions from a simple, physically relevant, set of
   * parameters.
   *
   * @param whitePoint White point, measured in the XYZ color space.
   *     default = D65, or sunny day afternoon
   * @param adaptingLuminance The luminance of the adapting field. Informally,
   *     how bright it is in the room where the color is viewed. Can be
   *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
   *     or 200 lux.
   * @param backgroundLstar The lightness of the area surrounding the color.
   *     measured by L* in L*a*b*. default = 50.0
   * @param surround A general description of the lighting surrounding the
   *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
   *     dimly light room, like watching TV at home at night. 2.0 means there
   *     is no difference between the lighting on the color and around it.
   *     default = 2.0
   * @param discountingIlluminant Whether the eye accounts for the tint of the
   *     ambient lighting, such as knowing an apple is still red in green light.
   *     default = false, the eye does not perform this process on
   *       self-luminous objects like displays.
   */
  static make(whitePoint = whitePointD65(), adaptingLuminance = 200 / Math.PI * yFromLstar(50) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = false) {
    const xyz = whitePoint;
    const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
    const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
    const bW = xyz[0] * -2079e-6 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
    const f = 0.8 + surround / 10;
    const c = f >= 0.9 ? lerp(0.59, 0.69, (f - 0.9) * 10) : lerp(0.525, 0.59, (f - 0.8) * 10);
    let d = discountingIlluminant ? 1 : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
    d = d > 1 ? 1 : d < 0 ? 0 : d;
    const nc = f;
    const rgbD = [
      d * (100 / rW) + 1 - d,
      d * (100 / gW) + 1 - d,
      d * (100 / bW) + 1 - d
    ];
    const k = 1 / (5 * adaptingLuminance + 1);
    const k4 = k * k * k * k;
    const k4F = 1 - k4;
    const fl = k4 * adaptingLuminance + 0.1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance);
    const n = yFromLstar(backgroundLstar) / whitePoint[1];
    const z = 1.48 + Math.sqrt(n);
    const nbb = 0.725 / Math.pow(n, 0.2);
    const ncb = nbb;
    const rgbAFactors = [
      Math.pow(fl * rgbD[0] * rW / 100, 0.42),
      Math.pow(fl * rgbD[1] * gW / 100, 0.42),
      Math.pow(fl * rgbD[2] * bW / 100, 0.42)
    ];
    const rgbA = [
      400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13),
      400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13),
      400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)
    ];
    const aw = (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
    return new _ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, 0.25), z);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
    this.n = n;
    this.aw = aw;
    this.nbb = nbb;
    this.ncb = ncb;
    this.c = c;
    this.nc = nc;
    this.rgbD = rgbD;
    this.fl = fl;
    this.fLRoot = fLRoot;
    this.z = z;
  }
};
ViewingConditions.DEFAULT = ViewingConditions.make();

// node_modules/@material/material-color-utilities/hct/cam16.js
var Cam16 = class _Cam16 {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
    this.hue = hue;
    this.chroma = chroma;
    this.j = j;
    this.q = q;
    this.m = m;
    this.s = s;
    this.jstar = jstar;
    this.astar = astar;
    this.bstar = bstar;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(other) {
    const dJ = this.jstar - other.jstar;
    const dA = this.astar - other.astar;
    const dB = this.bstar - other.bstar;
    const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
    const dE = 1.41 * Math.pow(dEPrime, 0.63);
    return dE;
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(argb2) {
    return _Cam16.fromIntInViewingConditions(argb2, ViewingConditions.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(argb2, viewingConditions) {
    const red = (argb2 & 16711680) >> 16;
    const green = (argb2 & 65280) >> 8;
    const blue = argb2 & 255;
    const redL = linearized(red);
    const greenL = linearized(green);
    const blueL = linearized(blue);
    const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
    const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
    const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
    const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
    const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
    const bC = -2079e-6 * x + 0.048952 * y + 0.953127 * z;
    const rD = viewingConditions.rgbD[0] * rC;
    const gD = viewingConditions.rgbD[1] * gC;
    const bD = viewingConditions.rgbD[2] * bC;
    const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
    const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
    const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
    const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
    const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
    const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
    const a = (11 * rA + -12 * gA + bA) / 11;
    const b = (rA + gA - 2 * bA) / 9;
    const u = (20 * rA + 20 * gA + 21 * bA) / 20;
    const p2 = (40 * rA + 20 * gA + bA) / 20;
    const atan2 = Math.atan2(b, a);
    const atanDegrees = atan2 * 180 / Math.PI;
    const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
    const hueRadians = hue * Math.PI / 180;
    const ac = p2 * viewingConditions.nbb;
    const j = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
    const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const huePrime = hue < 20.14 ? hue + 360 : hue;
    const eHue = 0.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
    const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
    const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
    const alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const c = alpha * Math.sqrt(j / 100);
    const m = c * viewingConditions.fLRoot;
    const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const jstar = (1 + 100 * 7e-3) * j / (1 + 7e-3 * j);
    const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m);
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(j, c, h) {
    return _Cam16.fromJchInViewingConditions(j, c, h, ViewingConditions.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(j, c, h, viewingConditions) {
    const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const m = c * viewingConditions.fLRoot;
    const alpha = c / Math.sqrt(j / 100);
    const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const hueRadians = h * Math.PI / 180;
    const jstar = (1 + 100 * 7e-3) * j / (1 + 7e-3 * j);
    const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m);
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(h, c, j, q, m, s, jstar, astar, bstar);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(jstar, astar, bstar) {
    return _Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
    const a = astar;
    const b = bstar;
    const m = Math.sqrt(a * a + b * b);
    const M = (Math.exp(m * 0.0228) - 1) / 0.0228;
    const c = M / viewingConditions.fLRoot;
    let h = Math.atan2(b, a) * (180 / Math.PI);
    if (h < 0) {
      h += 360;
    }
    const j = jstar / (1 - (jstar - 100) * 7e-3);
    return _Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(ViewingConditions.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(viewingConditions) {
    const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
    const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
    const hRad = this.hue * Math.PI / 180;
    const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const p2 = ac / viewingConditions.nbb;
    const hSin = Math.sin(hRad);
    const hCos = Math.cos(hRad);
    const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
    const a = gamma * hCos;
    const b = gamma * hSin;
    const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
    const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
    const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
    const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
    const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
    const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
    const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
    const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
    const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
    const rF = rC / viewingConditions.rgbD[0];
    const gF = gC / viewingConditions.rgbD[1];
    const bF = bC / viewingConditions.rgbD[2];
    const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
    const y = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
    const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
    const argb2 = argbFromXyz(x, y, z);
    return argb2;
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(x, y, z, viewingConditions) {
    const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
    const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
    const bC = -2079e-6 * x + 0.048952 * y + 0.953127 * z;
    const rD = viewingConditions.rgbD[0] * rC;
    const gD = viewingConditions.rgbD[1] * gC;
    const bD = viewingConditions.rgbD[2] * bC;
    const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
    const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
    const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
    const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
    const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
    const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
    const a = (11 * rA + -12 * gA + bA) / 11;
    const b = (rA + gA - 2 * bA) / 9;
    const u = (20 * rA + 20 * gA + 21 * bA) / 20;
    const p2 = (40 * rA + 20 * gA + bA) / 20;
    const atan2 = Math.atan2(b, a);
    const atanDegrees = atan2 * 180 / Math.PI;
    const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
    const hueRadians = hue * Math.PI / 180;
    const ac = p2 * viewingConditions.nbb;
    const J = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
    const Q = 4 / viewingConditions.c * Math.sqrt(J / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const huePrime = hue < 20.14 ? hue + 360 : hue;
    const eHue = 1 / 4 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
    const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
    const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
    const alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const C = alpha * Math.sqrt(J / 100);
    const M = C * viewingConditions.fLRoot;
    const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const jstar = (1 + 100 * 7e-3) * J / (1 + 7e-3 * J);
    const mstar = Math.log(1 + 0.0228 * M) / 0.0228;
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(viewingConditions) {
    const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
    const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
    const hRad = this.hue * Math.PI / 180;
    const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const p2 = ac / viewingConditions.nbb;
    const hSin = Math.sin(hRad);
    const hCos = Math.cos(hRad);
    const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
    const a = gamma * hCos;
    const b = gamma * hSin;
    const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
    const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
    const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
    const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
    const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
    const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
    const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
    const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
    const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
    const rF = rC / viewingConditions.rgbD[0];
    const gF = gC / viewingConditions.rgbD[1];
    const bF = bC / viewingConditions.rgbD[2];
    const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
    const y = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
    const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
    return [x, y, z];
  }
};

// node_modules/@material/material-color-utilities/hct/hct_solver.js
var HctSolver = class _HctSolver {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(angle) {
    return (angle + Math.PI * 8) % (Math.PI * 2);
  }
  /**
   * Delinearizes an RGB component, returning a floating-point
   * number.
   *
   * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
   * linear R/G/B channel
   * @return 0.0 <= output <= 255.0, color channel converted to
   * regular RGB space
   */
  static trueDelinearized(rgbComponent) {
    const normalized = rgbComponent / 100;
    let delinearized2 = 0;
    if (normalized <= 31308e-7) {
      delinearized2 = normalized * 12.92;
    } else {
      delinearized2 = 1.055 * Math.pow(normalized, 1 / 2.4) - 0.055;
    }
    return delinearized2 * 255;
  }
  static chromaticAdaptation(component) {
    const af = Math.pow(Math.abs(component), 0.42);
    return signum(component) * 400 * af / (af + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(linrgb) {
    const scaledDiscount = matrixMultiply(linrgb, _HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
    const rA = _HctSolver.chromaticAdaptation(scaledDiscount[0]);
    const gA = _HctSolver.chromaticAdaptation(scaledDiscount[1]);
    const bA = _HctSolver.chromaticAdaptation(scaledDiscount[2]);
    const a = (11 * rA + -12 * gA + bA) / 11;
    const b = (rA + gA - 2 * bA) / 9;
    return Math.atan2(b, a);
  }
  static areInCyclicOrder(a, b, c) {
    const deltaAB = _HctSolver.sanitizeRadians(b - a);
    const deltaAC = _HctSolver.sanitizeRadians(c - a);
    return deltaAB < deltaAC;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(source, mid, target) {
    return (mid - source) / (target - source);
  }
  static lerpPoint(source, t, target) {
    return [
      source[0] + (target[0] - source[0]) * t,
      source[1] + (target[1] - source[1]) * t,
      source[2] + (target[2] - source[2]) * t
    ];
  }
  /**
   * Intersects a segment with a plane.
   *
   * @param source The coordinates of point A.
   * @param coordinate The R-, G-, or B-coordinate of the plane.
   * @param target The coordinates of point B.
   * @param axis The axis the plane is perpendicular with. (0: R, 1:
   * G, 2: B)
   * @return The intersection point of the segment AB with the plane
   * R=coordinate, G=coordinate, or B=coordinate
   */
  static setCoordinate(source, coordinate, target, axis) {
    const t = _HctSolver.intercept(source[axis], coordinate, target[axis]);
    return _HctSolver.lerpPoint(source, t, target);
  }
  static isBounded(x) {
    return 0 <= x && x <= 100;
  }
  /**
   * Returns the nth possible vertex of the polygonal intersection.
   *
   * @param y The Y value of the plane.
   * @param n The zero-based index of the point. 0 <= n <= 11.
   * @return The nth possible vertex of the polygonal intersection
   * of the y plane and the RGB cube, in linear RGB coordinates, if
   * it exists. If this possible vertex lies outside of the cube,
   * [-1.0, -1.0, -1.0] is returned.
   */
  static nthVertex(y, n) {
    const kR = _HctSolver.Y_FROM_LINRGB[0];
    const kG = _HctSolver.Y_FROM_LINRGB[1];
    const kB = _HctSolver.Y_FROM_LINRGB[2];
    const coordA = n % 4 <= 1 ? 0 : 100;
    const coordB = n % 2 === 0 ? 0 : 100;
    if (n < 4) {
      const g = coordA;
      const b = coordB;
      const r = (y - g * kG - b * kB) / kR;
      if (_HctSolver.isBounded(r)) {
        return [r, g, b];
      } else {
        return [-1, -1, -1];
      }
    } else if (n < 8) {
      const b = coordA;
      const r = coordB;
      const g = (y - r * kR - b * kB) / kG;
      if (_HctSolver.isBounded(g)) {
        return [r, g, b];
      } else {
        return [-1, -1, -1];
      }
    } else {
      const r = coordA;
      const g = coordB;
      const b = (y - r * kR - g * kG) / kB;
      if (_HctSolver.isBounded(b)) {
        return [r, g, b];
      } else {
        return [-1, -1, -1];
      }
    }
  }
  /**
   * Finds the segment containing the desired color.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return A list of two sets of linear RGB coordinates, each
   * corresponding to an endpoint of the segment containing the
   * desired color.
   */
  static bisectToSegment(y, targetHue) {
    let left = [-1, -1, -1];
    let right = left;
    let leftHue = 0;
    let rightHue = 0;
    let initialized = false;
    let uncut = true;
    for (let n = 0; n < 12; n++) {
      const mid = _HctSolver.nthVertex(y, n);
      if (mid[0] < 0) {
        continue;
      }
      const midHue = _HctSolver.hueOf(mid);
      if (!initialized) {
        left = mid;
        right = mid;
        leftHue = midHue;
        rightHue = midHue;
        initialized = true;
        continue;
      }
      if (uncut || _HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
        uncut = false;
        if (_HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
          right = mid;
          rightHue = midHue;
        } else {
          left = mid;
          leftHue = midHue;
        }
      }
    }
    return [left, right];
  }
  static midpoint(a, b) {
    return [
      (a[0] + b[0]) / 2,
      (a[1] + b[1]) / 2,
      (a[2] + b[2]) / 2
    ];
  }
  static criticalPlaneBelow(x) {
    return Math.floor(x - 0.5);
  }
  static criticalPlaneAbove(x) {
    return Math.ceil(x - 0.5);
  }
  /**
   * Finds a color with the given Y and hue on the boundary of the
   * cube.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return The desired color, in linear RGB coordinates.
   */
  static bisectToLimit(y, targetHue) {
    const segment = _HctSolver.bisectToSegment(y, targetHue);
    let left = segment[0];
    let leftHue = _HctSolver.hueOf(left);
    let right = segment[1];
    for (let axis = 0; axis < 3; axis++) {
      if (left[axis] !== right[axis]) {
        let lPlane = -1;
        let rPlane = 255;
        if (left[axis] < right[axis]) {
          lPlane = _HctSolver.criticalPlaneBelow(_HctSolver.trueDelinearized(left[axis]));
          rPlane = _HctSolver.criticalPlaneAbove(_HctSolver.trueDelinearized(right[axis]));
        } else {
          lPlane = _HctSolver.criticalPlaneAbove(_HctSolver.trueDelinearized(left[axis]));
          rPlane = _HctSolver.criticalPlaneBelow(_HctSolver.trueDelinearized(right[axis]));
        }
        for (let i = 0; i < 8; i++) {
          if (Math.abs(rPlane - lPlane) <= 1) {
            break;
          } else {
            const mPlane = Math.floor((lPlane + rPlane) / 2);
            const midPlaneCoordinate = _HctSolver.CRITICAL_PLANES[mPlane];
            const mid = _HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
            const midHue = _HctSolver.hueOf(mid);
            if (_HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
              right = mid;
              rPlane = mPlane;
            } else {
              left = mid;
              leftHue = midHue;
              lPlane = mPlane;
            }
          }
        }
      }
    }
    return _HctSolver.midpoint(left, right);
  }
  static inverseChromaticAdaptation(adapted) {
    const adaptedAbs = Math.abs(adapted);
    const base = Math.max(0, 27.13 * adaptedAbs / (400 - adaptedAbs));
    return signum(adapted) * Math.pow(base, 1 / 0.42);
  }
  /**
   * Finds a color with the given hue, chroma, and Y.
   *
   * @param hueRadians The desired hue in radians.
   * @param chroma The desired chroma.
   * @param y The desired Y.
   * @return The desired color as a hexadecimal integer, if found; 0
   * otherwise.
   */
  static findResultByJ(hueRadians, chroma, y) {
    let j = Math.sqrt(y) * 11;
    const viewingConditions = ViewingConditions.DEFAULT;
    const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const eHue = 0.25 * (Math.cos(hueRadians + 2) + 3.8);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const hSin = Math.sin(hueRadians);
    const hCos = Math.cos(hueRadians);
    for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
      const jNormalized = j / 100;
      const alpha = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(jNormalized);
      const t = Math.pow(alpha * tInnerCoeff, 1 / 0.9);
      const ac = viewingConditions.aw * Math.pow(jNormalized, 1 / viewingConditions.c / viewingConditions.z);
      const p2 = ac / viewingConditions.nbb;
      const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
      const a = gamma * hCos;
      const b = gamma * hSin;
      const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
      const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
      const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
      const rCScaled = _HctSolver.inverseChromaticAdaptation(rA);
      const gCScaled = _HctSolver.inverseChromaticAdaptation(gA);
      const bCScaled = _HctSolver.inverseChromaticAdaptation(bA);
      const linrgb = matrixMultiply([rCScaled, gCScaled, bCScaled], _HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
      if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
        return 0;
      }
      const kR = _HctSolver.Y_FROM_LINRGB[0];
      const kG = _HctSolver.Y_FROM_LINRGB[1];
      const kB = _HctSolver.Y_FROM_LINRGB[2];
      const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
      if (fnj <= 0) {
        return 0;
      }
      if (iterationRound === 4 || Math.abs(fnj - y) < 2e-3) {
        if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
          return 0;
        }
        return argbFromLinrgb(linrgb);
      }
      j = j - (fnj - y) * j / (2 * fnj);
    }
    return 0;
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return A hexadecimal representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToInt(hueDegrees, chroma, lstar) {
    if (chroma < 1e-4 || lstar < 1e-4 || lstar > 99.9999) {
      return argbFromLstar(lstar);
    }
    hueDegrees = sanitizeDegreesDouble(hueDegrees);
    const hueRadians = hueDegrees / 180 * Math.PI;
    const y = yFromLstar(lstar);
    const exactAnswer = _HctSolver.findResultByJ(hueRadians, chroma, y);
    if (exactAnswer !== 0) {
      return exactAnswer;
    }
    const linrgb = _HctSolver.bisectToLimit(y, hueRadians);
    return argbFromLinrgb(linrgb);
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return An CAM16 object representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToCam(hueDegrees, chroma, lstar) {
    return Cam16.fromInt(_HctSolver.solveToInt(hueDegrees, chroma, lstar));
  }
};
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
  [
    0.001200833568784504,
    0.002389694492170889,
    2795742885861124e-19
  ],
  [
    5891086651375999e-19,
    0.0029785502573438758,
    3270666104008398e-19
  ],
  [
    10146692491640572e-20,
    5364214359186694e-19,
    0.0032979401770712076
  ]
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
  [
    1373.2198709594231,
    -1100.4251190754821,
    -7.278681089101213
  ],
  [
    -271.815969077903,
    559.6580465940733,
    -32.46047482791194
  ],
  [
    1.9622899599665666,
    -57.173814538844006,
    308.7233197812385
  ]
];
HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
HctSolver.CRITICAL_PLANES = [
  0.015176349177441876,
  0.045529047532325624,
  0.07588174588720938,
  0.10623444424209313,
  0.13658714259697685,
  0.16693984095186062,
  0.19729253930674434,
  0.2276452376616281,
  0.2579979360165119,
  0.28835063437139563,
  0.3188300904430532,
  0.350925934958123,
  0.3848314933096426,
  0.42057480301049466,
  0.458183274052838,
  0.4976837250274023,
  0.5391024159806381,
  0.5824650784040898,
  0.6277969426914107,
  0.6751227633498623,
  0.7244668422128921,
  0.775853049866786,
  0.829304845476233,
  0.8848452951698498,
  0.942497089126609,
  1.0022825574869039,
  1.0642236851973577,
  1.1283421258858297,
  1.1946592148522128,
  1.2631959812511864,
  1.3339731595349034,
  1.407011200216447,
  1.4823302800086415,
  1.5599503113873272,
  1.6398909516233677,
  1.7221716113234105,
  1.8068114625156377,
  1.8938294463134073,
  1.9832442801866852,
  2.075074464868551,
  2.1693382909216234,
  2.2660538449872063,
  2.36523901573795,
  2.4669114995532007,
  2.5710888059345764,
  2.6777882626779785,
  2.7870270208169257,
  2.898822059350997,
  3.0131901897720907,
  3.1301480604002863,
  3.2497121605402226,
  3.3718988244681087,
  3.4967242352587946,
  3.624204428461639,
  3.754355295633311,
  3.887192587735158,
  4.022731918402185,
  4.160988767090289,
  4.301978482107941,
  4.445716283538092,
  4.592217266055746,
  4.741496401646282,
  4.893568542229298,
  5.048448422192488,
  5.20615066083972,
  5.3666897647573375,
  5.5300801301023865,
  5.696336044816294,
  5.865471690767354,
  6.037501145825082,
  6.212438385869475,
  6.390297286737924,
  6.571091626112461,
  6.7548350853498045,
  6.941541251256611,
  7.131223617812143,
  7.323895587840543,
  7.5195704746346665,
  7.7182615035334345,
  7.919981813454504,
  8.124744458384042,
  8.332562408825165,
  8.543448553206703,
  8.757415699253682,
  8.974476575321063,
  9.194643831691977,
  9.417930041841839,
  9.644347703669503,
  9.873909240696694,
  10.106627003236781,
  10.342513269534024,
  10.58158024687427,
  10.8238400726681,
  11.069304815507364,
  11.317986476196008,
  11.569896988756009,
  11.825048221409341,
  12.083451977536606,
  12.345119996613247,
  12.610063955123938,
  12.878295467455942,
  13.149826086772048,
  13.42466730586372,
  13.702830557985108,
  13.984327217668513,
  14.269168601521828,
  14.55736596900856,
  14.848930523210871,
  15.143873411576273,
  15.44220572664832,
  15.743938506781891,
  16.04908273684337,
  16.35764934889634,
  16.66964922287304,
  16.985093187232053,
  17.30399201960269,
  17.62635644741625,
  17.95219714852476,
  18.281524751807332,
  18.614349837764564,
  18.95068293910138,
  19.290534541298456,
  19.633915083172692,
  19.98083495742689,
  20.331304511189067,
  20.685334046541502,
  21.042933821039977,
  21.404114048223256,
  21.76888489811322,
  22.137256497705877,
  22.50923893145328,
  22.884842241736916,
  23.264076429332462,
  23.6469514538663,
  24.033477234264016,
  24.42366364919083,
  24.817520537484558,
  25.21505769858089,
  25.61628489293138,
  26.021211842414342,
  26.429848230738664,
  26.842203703840827,
  27.258287870275353,
  27.678110301598522,
  28.10168053274597,
  28.529008062403893,
  28.96010235337422,
  29.39497283293396,
  29.83362889318845,
  30.276079891419332,
  30.722335150426627,
  31.172403958865512,
  31.62629557157785,
  32.08401920991837,
  32.54558406207592,
  33.010999283389665,
  33.4802739966603,
  33.953417292456834,
  34.430438229418264,
  34.911345834551085,
  35.39614910352207,
  35.88485700094671,
  36.37747846067349,
  36.87402238606382,
  37.37449765026789,
  37.87891309649659,
  38.38727753828926,
  38.89959975977785,
  39.41588851594697,
  39.93615253289054,
  40.460400508064545,
  40.98864111053629,
  41.520882981230194,
  42.05713473317016,
  42.597404951718396,
  43.141702194811224,
  43.6900349931913,
  44.24241185063697,
  44.798841244188324,
  45.35933162437017,
  45.92389141541209,
  46.49252901546552,
  47.065252796817916,
  47.64207110610409,
  48.22299226451468,
  48.808024568002054,
  49.3971762874833,
  49.9904556690408,
  50.587870934119984,
  51.189430279724725,
  51.79514187861014,
  52.40501387947288,
  53.0190544071392,
  53.637271562750364,
  54.259673423945976,
  54.88626804504493,
  55.517063457223934,
  56.15206766869424,
  56.79128866487574,
  57.43473440856916,
  58.08241284012621,
  58.734331877617365,
  59.39049941699807,
  60.05092333227251,
  60.715611475655585,
  61.38457167773311,
  62.057811747619894,
  62.7353394731159,
  63.417162620860914,
  64.10328893648692,
  64.79372614476921,
  65.48848194977529,
  66.18756403501224,
  66.89098006357258,
  67.59873767827808,
  68.31084450182222,
  69.02730813691093,
  69.74813616640164,
  70.47333615344107,
  71.20291564160104,
  71.93688215501312,
  72.67524319850172,
  73.41800625771542,
  74.16517879925733,
  74.9167682708136,
  75.67278210128072,
  76.43322770089146,
  77.1981124613393,
  77.96744375590167,
  78.74122893956174,
  79.51947534912904,
  80.30219030335869,
  81.08938110306934,
  81.88105503125999,
  82.67721935322541,
  83.4778813166706,
  84.28304815182372,
  85.09272707154808,
  85.90692527145302,
  86.72564993000343,
  87.54890820862819,
  88.3767072518277,
  89.2090541872801,
  90.04595612594655,
  90.88742016217518,
  91.73345337380438,
  92.58406282226491,
  93.43925555268066,
  94.29903859396902,
  95.16341895893969,
  96.03240364439274,
  96.9059996312159,
  97.78421388448044,
  98.6670533535366,
  99.55452497210776
];

// node_modules/@material/material-color-utilities/hct/hct.js
var Hct = class _Hct {
  static from(hue, chroma, tone) {
    return new _Hct(HctSolver.solveToInt(hue, chroma, tone));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(argb2) {
    return new _Hct(argb2);
  }
  toInt() {
    return this.argb;
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue;
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(newHue) {
    this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(newChroma) {
    this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone;
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(newTone) {
    this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
  }
  constructor(argb2) {
    this.argb = argb2;
    const cam = Cam16.fromInt(argb2);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = lstarFromArgb(argb2);
    this.argb = argb2;
  }
  setInternalState(argb2) {
    const cam = Cam16.fromInt(argb2);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = lstarFromArgb(argb2);
    this.argb = argb2;
  }
  /**
   * Translates a color into different [ViewingConditions].
   *
   * Colors change appearance. They look different with lights on versus off,
   * the same color, as in hex code, on white looks different when on black.
   * This is called color relativity, most famously explicated by Josef Albers
   * in Interaction of Color.
   *
   * In color science, color appearance models can account for this and
   * calculate the appearance of a color in different settings. HCT is based on
   * CAM16, a color appearance model, and uses it to make these calculations.
   *
   * See [ViewingConditions.make] for parameters affecting color appearance.
   */
  inViewingConditions(vc) {
    const cam = Cam16.fromInt(this.toInt());
    const viewedInVc = cam.xyzInViewingConditions(vc);
    const recastInVc = Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], ViewingConditions.make());
    const recastHct = _Hct.from(recastInVc.hue, recastInVc.chroma, lstarFromY(viewedInVc[1]));
    return recastHct;
  }
};

// node_modules/@material/material-color-utilities/contrast/contrast.js
var Contrast = class _Contrast {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(toneA, toneB) {
    toneA = clampDouble(0, 100, toneA);
    toneB = clampDouble(0, 100, toneB);
    return _Contrast.ratioOfYs(yFromLstar(toneA), yFromLstar(toneB));
  }
  static ratioOfYs(y1, y2) {
    const lighter = y1 > y2 ? y1 : y2;
    const darker = lighter === y2 ? y1 : y2;
    return (lighter + 5) / (darker + 5);
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighter(tone, ratio) {
    if (tone < 0 || tone > 100) {
      return -1;
    }
    const darkY = yFromLstar(tone);
    const lightY = ratio * (darkY + 5) - 5;
    const realContrast = _Contrast.ratioOfYs(lightY, darkY);
    const delta = Math.abs(realContrast - ratio);
    if (realContrast < ratio && delta > 0.04) {
      return -1;
    }
    const returnValue = lstarFromY(lightY) + 0.4;
    if (returnValue < 0 || returnValue > 100) {
      return -1;
    }
    return returnValue;
  }
  /**
   * Returns a tone <= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darker(tone, ratio) {
    if (tone < 0 || tone > 100) {
      return -1;
    }
    const lightY = yFromLstar(tone);
    const darkY = (lightY + 5) / ratio - 5;
    const realContrast = _Contrast.ratioOfYs(lightY, darkY);
    const delta = Math.abs(realContrast - ratio);
    if (realContrast < ratio && delta > 0.04) {
      return -1;
    }
    const returnValue = lstarFromY(darkY) - 0.4;
    if (returnValue < 0 || returnValue > 100) {
      return -1;
    }
    return returnValue;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the ratio with tone. For example, there is no color lighter than T100.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 100 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighterUnsafe(tone, ratio) {
    const lighterSafe = _Contrast.lighter(tone, ratio);
    return lighterSafe < 0 ? 100 : lighterSafe;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the [ratio with [tone]. For example, there is no color darker than T0.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 0 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darkerUnsafe(tone, ratio) {
    const darkerSafe = _Contrast.darker(tone, ratio);
    return darkerSafe < 0 ? 0 : darkerSafe;
  }
};

// node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js
var DislikeAnalyzer = class _DislikeAnalyzer {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(hct) {
    const huePasses = Math.round(hct.hue) >= 90 && Math.round(hct.hue) <= 111;
    const chromaPasses = Math.round(hct.chroma) > 16;
    const tonePasses = Math.round(hct.tone) < 65;
    return huePasses && chromaPasses && tonePasses;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(hct) {
    if (_DislikeAnalyzer.isDisliked(hct)) {
      return Hct.from(hct.hue, hct.chroma, 70);
    }
    return hct;
  }
};

// node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js
var DynamicColor = class _DynamicColor {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(args) {
    return new _DynamicColor(args.name ?? "", args.palette, args.tone, args.isBackground ?? false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
  }
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
    this.name = name;
    this.palette = palette;
    this.tone = tone;
    this.isBackground = isBackground;
    this.background = background;
    this.secondBackground = secondBackground;
    this.contrastCurve = contrastCurve;
    this.toneDeltaPair = toneDeltaPair;
    this.hctCache = /* @__PURE__ */ new Map();
    if (!background && secondBackground) {
      throw new Error(`Color ${name} has secondBackgrounddefined, but background is not defined.`);
    }
    if (!background && contrastCurve) {
      throw new Error(`Color ${name} has contrastCurvedefined, but background is not defined.`);
    }
    if (background && !contrastCurve) {
      throw new Error(`Color ${name} has backgrounddefined, but contrastCurve is not defined.`);
    }
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(scheme) {
    return this.getHct(scheme).toInt();
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getHct(scheme) {
    const cachedAnswer = this.hctCache.get(scheme);
    if (cachedAnswer != null) {
      return cachedAnswer;
    }
    const tone = this.getTone(scheme);
    const answer = this.palette(scheme).getHct(tone);
    if (this.hctCache.size > 4) {
      this.hctCache.clear();
    }
    this.hctCache.set(scheme, answer);
    return answer;
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getTone(scheme) {
    const decreasingContrast = scheme.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const toneDeltaPair = this.toneDeltaPair(scheme);
      const roleA = toneDeltaPair.roleA;
      const roleB = toneDeltaPair.roleB;
      const delta = toneDeltaPair.delta;
      const polarity = toneDeltaPair.polarity;
      const stayTogether = toneDeltaPair.stayTogether;
      const bg = this.background(scheme);
      const bgTone = bg.getTone(scheme);
      const aIsNearer = polarity === "nearer" || polarity === "lighter" && !scheme.isDark || polarity === "darker" && scheme.isDark;
      const nearer = aIsNearer ? roleA : roleB;
      const farther = aIsNearer ? roleB : roleA;
      const amNearer = this.name === nearer.name;
      const expansionDir = scheme.isDark ? 1 : -1;
      const nContrast = nearer.contrastCurve.get(scheme.contrastLevel);
      const fContrast = farther.contrastCurve.get(scheme.contrastLevel);
      const nInitialTone = nearer.tone(scheme);
      let nTone = Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ? nInitialTone : _DynamicColor.foregroundTone(bgTone, nContrast);
      const fInitialTone = farther.tone(scheme);
      let fTone = Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ? fInitialTone : _DynamicColor.foregroundTone(bgTone, fContrast);
      if (decreasingContrast) {
        nTone = _DynamicColor.foregroundTone(bgTone, nContrast);
        fTone = _DynamicColor.foregroundTone(bgTone, fContrast);
      }
      if ((fTone - nTone) * expansionDir >= delta) {
      } else {
        fTone = clampDouble(0, 100, nTone + delta * expansionDir);
        if ((fTone - nTone) * expansionDir >= delta) {
        } else {
          nTone = clampDouble(0, 100, fTone - delta * expansionDir);
        }
      }
      if (50 <= nTone && nTone < 60) {
        if (expansionDir > 0) {
          nTone = 60;
          fTone = Math.max(fTone, nTone + delta * expansionDir);
        } else {
          nTone = 49;
          fTone = Math.min(fTone, nTone + delta * expansionDir);
        }
      } else if (50 <= fTone && fTone < 60) {
        if (stayTogether) {
          if (expansionDir > 0) {
            nTone = 60;
            fTone = Math.max(fTone, nTone + delta * expansionDir);
          } else {
            nTone = 49;
            fTone = Math.min(fTone, nTone + delta * expansionDir);
          }
        } else {
          if (expansionDir > 0) {
            fTone = 60;
          } else {
            fTone = 49;
          }
        }
      }
      return amNearer ? nTone : fTone;
    } else {
      let answer = this.tone(scheme);
      if (this.background == null) {
        return answer;
      }
      const bgTone = this.background(scheme).getTone(scheme);
      const desiredRatio = this.contrastCurve.get(scheme.contrastLevel);
      if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) {
      } else {
        answer = _DynamicColor.foregroundTone(bgTone, desiredRatio);
      }
      if (decreasingContrast) {
        answer = _DynamicColor.foregroundTone(bgTone, desiredRatio);
      }
      if (this.isBackground && 50 <= answer && answer < 60) {
        if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) {
          answer = 49;
        } else {
          answer = 60;
        }
      }
      if (this.secondBackground) {
        const [bg1, bg2] = [this.background, this.secondBackground];
        const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
        const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
        if (Contrast.ratioOfTones(upper, answer) >= desiredRatio && Contrast.ratioOfTones(lower, answer) >= desiredRatio) {
          return answer;
        }
        const lightOption = Contrast.lighter(upper, desiredRatio);
        const darkOption = Contrast.darker(lower, desiredRatio);
        const availables = [];
        if (lightOption !== -1)
          availables.push(lightOption);
        if (darkOption !== -1)
          availables.push(darkOption);
        const prefersLight = _DynamicColor.tonePrefersLightForeground(bgTone1) || _DynamicColor.tonePrefersLightForeground(bgTone2);
        if (prefersLight) {
          return lightOption < 0 ? 100 : lightOption;
        }
        if (availables.length === 1) {
          return availables[0];
        }
        return darkOption < 0 ? 0 : darkOption;
      }
      return answer;
    }
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */
  static foregroundTone(bgTone, ratio) {
    const lighterTone = Contrast.lighterUnsafe(bgTone, ratio);
    const darkerTone = Contrast.darkerUnsafe(bgTone, ratio);
    const lighterRatio = Contrast.ratioOfTones(lighterTone, bgTone);
    const darkerRatio = Contrast.ratioOfTones(darkerTone, bgTone);
    const preferLighter = _DynamicColor.tonePrefersLightForeground(bgTone);
    if (preferLighter) {
      const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < 0.1 && lighterRatio < ratio && darkerRatio < ratio;
      return lighterRatio >= ratio || lighterRatio >= darkerRatio || negligibleDifference ? lighterTone : darkerTone;
    } else {
      return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone : lighterTone;
    }
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */
  static tonePrefersLightForeground(tone) {
    return Math.round(tone) < 60;
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(tone) {
    return Math.round(tone) <= 49;
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(tone) {
    if (_DynamicColor.tonePrefersLightForeground(tone) && !_DynamicColor.toneAllowsLightForeground(tone)) {
      return 49;
    }
    return tone;
  }
};

// node_modules/@material/material-color-utilities/palettes/tonal_palette.js
var TonalPalette = class _TonalPalette {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(argb2) {
    const hct = Hct.fromInt(argb2);
    return _TonalPalette.fromHct(hct);
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(hct) {
    return new _TonalPalette(hct.hue, hct.chroma, hct);
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(hue, chroma) {
    const keyColor = new KeyColor(hue, chroma).create();
    return new _TonalPalette(hue, chroma, keyColor);
  }
  constructor(hue, chroma, keyColor) {
    this.hue = hue;
    this.chroma = chroma;
    this.keyColor = keyColor;
    this.cache = /* @__PURE__ */ new Map();
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(tone) {
    let argb2 = this.cache.get(tone);
    if (argb2 === void 0) {
      argb2 = Hct.from(this.hue, this.chroma, tone).toInt();
      this.cache.set(tone, argb2);
    }
    return argb2;
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(tone) {
    return Hct.fromInt(this.tone(tone));
  }
};
var KeyColor = class {
  constructor(hue, requestedChroma) {
    this.hue = hue;
    this.requestedChroma = requestedChroma;
    this.chromaCache = /* @__PURE__ */ new Map();
    this.maxChromaValue = 200;
  }
  /**
   * Creates a key color from a [hue] and a [chroma].
   * The key color is the first tone, starting from T50, matching the given hue
   * and chroma.
   *
   * @return Key color [Hct]
   */
  create() {
    const pivotTone = 50;
    const toneStepSize = 1;
    const epsilon = 0.01;
    let lowerTone = 0;
    let upperTone = 100;
    while (lowerTone < upperTone) {
      const midTone = Math.floor((lowerTone + upperTone) / 2);
      const isAscending = this.maxChroma(midTone) < this.maxChroma(midTone + toneStepSize);
      const sufficientChroma = this.maxChroma(midTone) >= this.requestedChroma - epsilon;
      if (sufficientChroma) {
        if (Math.abs(lowerTone - pivotTone) < Math.abs(upperTone - pivotTone)) {
          upperTone = midTone;
        } else {
          if (lowerTone === midTone) {
            return Hct.from(this.hue, this.requestedChroma, lowerTone);
          }
          lowerTone = midTone;
        }
      } else {
        if (isAscending) {
          lowerTone = midTone + toneStepSize;
        } else {
          upperTone = midTone;
        }
      }
    }
    return Hct.from(this.hue, this.requestedChroma, lowerTone);
  }
  // Find the maximum chroma for a given tone
  maxChroma(tone) {
    if (this.chromaCache.has(tone)) {
      return this.chromaCache.get(tone);
    }
    const chroma = Hct.from(this.hue, this.maxChromaValue, tone).chroma;
    this.chromaCache.set(tone, chroma);
    return chroma;
  }
};

// node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js
var ContrastCurve = class {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Value for contrast level -1.0
   * @param normal Value for contrast level 0.0
   * @param medium Value for contrast level 0.5
   * @param high Value for contrast level 1.0
   */
  constructor(low, normal, medium, high) {
    this.low = low;
    this.normal = normal;
    this.medium = medium;
    this.high = high;
  }
  /**
   * Returns the value at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal); -1.0
   *     is the lowest; 1.0 is the highest.
   * @return The value. For contrast ratios, a number between 1.0 and 21.0.
   */
  get(contrastLevel) {
    if (contrastLevel <= -1) {
      return this.low;
    } else if (contrastLevel < 0) {
      return lerp(this.low, this.normal, (contrastLevel - -1) / 1);
    } else if (contrastLevel < 0.5) {
      return lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
    } else if (contrastLevel < 1) {
      return lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
    } else {
      return this.high;
    }
  }
};

// node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js
var ToneDeltaPair = class {
  /**
   * Documents a constraint in tone distance between two DynamicColors.
   *
   * The polarity is an adjective that describes "A", compared to "B".
   *
   * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
   * A's tone should be at least 15 darker than B's.
   *
   * 'nearer' and 'farther' describes closeness to the surface roles. For
   * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
   * should be 10 lighter than B in light mode, and 10 darker than B in dark
   * mode.
   *
   * @param roleA The first role in a pair.
   * @param roleB The second role in a pair.
   * @param delta Required difference between tones. Absolute value, negative
   * values have undefined behavior.
   * @param polarity The relative relation between tones of roleA and roleB,
   * as described above.
   * @param stayTogether Whether these two roles should stay on the same side of
   * the "awkward zone" (T50-59). This is necessary for certain cases where
   * one role has two backgrounds.
   */
  constructor(roleA, roleB, delta, polarity, stayTogether) {
    this.roleA = roleA;
    this.roleB = roleB;
    this.delta = delta;
    this.polarity = polarity;
    this.stayTogether = stayTogether;
  }
};

// node_modules/@material/material-color-utilities/dynamiccolor/variant.js
var Variant;
(function(Variant2) {
  Variant2[Variant2["MONOCHROME"] = 0] = "MONOCHROME";
  Variant2[Variant2["NEUTRAL"] = 1] = "NEUTRAL";
  Variant2[Variant2["TONAL_SPOT"] = 2] = "TONAL_SPOT";
  Variant2[Variant2["VIBRANT"] = 3] = "VIBRANT";
  Variant2[Variant2["EXPRESSIVE"] = 4] = "EXPRESSIVE";
  Variant2[Variant2["FIDELITY"] = 5] = "FIDELITY";
  Variant2[Variant2["CONTENT"] = 6] = "CONTENT";
  Variant2[Variant2["RAINBOW"] = 7] = "RAINBOW";
  Variant2[Variant2["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
})(Variant || (Variant = {}));

// node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js
function isFidelity(scheme) {
  return scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT;
}
function isMonochrome(scheme) {
  return scheme.variant === Variant.MONOCHROME;
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
  let answer = tone;
  let closestToChroma = Hct.from(hue, chroma, tone);
  if (closestToChroma.chroma < chroma) {
    let chromaPeak = closestToChroma.chroma;
    while (closestToChroma.chroma < chroma) {
      answer += byDecreasingTone ? -1 : 1;
      const potentialSolution = Hct.from(hue, chroma, answer);
      if (chromaPeak > potentialSolution.chroma) {
        break;
      }
      if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
        break;
      }
      const potentialDelta = Math.abs(potentialSolution.chroma - chroma);
      const currentDelta = Math.abs(closestToChroma.chroma - chroma);
      if (potentialDelta < currentDelta) {
        closestToChroma = potentialSolution;
      }
      chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
    }
  }
  return answer;
}
var MaterialDynamicColors = class _MaterialDynamicColors {
  static highestSurface(s) {
    return s.isDark ? _MaterialDynamicColors.surfaceBright : _MaterialDynamicColors.surfaceDim;
  }
};
MaterialDynamicColors.contentAccentToneDelta = 15;
MaterialDynamicColors.primaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "primary_palette_key_color",
  palette: (s) => s.primaryPalette,
  tone: (s) => s.primaryPalette.keyColor.tone
});
MaterialDynamicColors.secondaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "secondary_palette_key_color",
  palette: (s) => s.secondaryPalette,
  tone: (s) => s.secondaryPalette.keyColor.tone
});
MaterialDynamicColors.tertiaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => s.tertiaryPalette.keyColor.tone
});
MaterialDynamicColors.neutralPaletteKeyColor = DynamicColor.fromPalette({
  name: "neutral_palette_key_color",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.neutralPalette.keyColor.tone
});
MaterialDynamicColors.neutralVariantPaletteKeyColor = DynamicColor.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.neutralVariantPalette.keyColor.tone
});
MaterialDynamicColors.background = DynamicColor.fromPalette({
  name: "background",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 6 : 98,
  isBackground: true
});
MaterialDynamicColors.onBackground = DynamicColor.fromPalette({
  name: "on_background",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 90 : 10,
  background: (s) => MaterialDynamicColors.background,
  contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
});
MaterialDynamicColors.surface = DynamicColor.fromPalette({
  name: "surface",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 6 : 98,
  isBackground: true
});
MaterialDynamicColors.surfaceDim = DynamicColor.fromPalette({
  name: "surface_dim",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 6 : new ContrastCurve(87, 87, 80, 75).get(s.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.surfaceBright = DynamicColor.fromPalette({
  name: "surface_bright",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? new ContrastCurve(24, 24, 29, 34).get(s.contrastLevel) : 98,
  isBackground: true
});
MaterialDynamicColors.surfaceContainerLowest = DynamicColor.fromPalette({
  name: "surface_container_lowest",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? new ContrastCurve(4, 4, 2, 0).get(s.contrastLevel) : 100,
  isBackground: true
});
MaterialDynamicColors.surfaceContainerLow = DynamicColor.fromPalette({
  name: "surface_container_low",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? new ContrastCurve(10, 10, 11, 12).get(s.contrastLevel) : new ContrastCurve(96, 96, 96, 95).get(s.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.surfaceContainer = DynamicColor.fromPalette({
  name: "surface_container",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? new ContrastCurve(12, 12, 16, 20).get(s.contrastLevel) : new ContrastCurve(94, 94, 92, 90).get(s.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.surfaceContainerHigh = DynamicColor.fromPalette({
  name: "surface_container_high",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? new ContrastCurve(17, 17, 21, 25).get(s.contrastLevel) : new ContrastCurve(92, 92, 88, 85).get(s.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.surfaceContainerHighest = DynamicColor.fromPalette({
  name: "surface_container_highest",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? new ContrastCurve(22, 22, 26, 30).get(s.contrastLevel) : new ContrastCurve(90, 90, 84, 80).get(s.contrastLevel),
  isBackground: true
});
MaterialDynamicColors.onSurface = DynamicColor.fromPalette({
  name: "on_surface",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 90 : 10,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.surfaceVariant = DynamicColor.fromPalette({
  name: "surface_variant",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.isDark ? 30 : 90,
  isBackground: true
});
MaterialDynamicColors.onSurfaceVariant = DynamicColor.fromPalette({
  name: "on_surface_variant",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.isDark ? 80 : 30,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.inverseSurface = DynamicColor.fromPalette({
  name: "inverse_surface",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 90 : 20
});
MaterialDynamicColors.inverseOnSurface = DynamicColor.fromPalette({
  name: "inverse_on_surface",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 20 : 95,
  background: (s) => MaterialDynamicColors.inverseSurface,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.outline = DynamicColor.fromPalette({
  name: "outline",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.isDark ? 60 : 50,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
});
MaterialDynamicColors.outlineVariant = DynamicColor.fromPalette({
  name: "outline_variant",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.isDark ? 30 : 80,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5)
});
MaterialDynamicColors.shadow = DynamicColor.fromPalette({
  name: "shadow",
  palette: (s) => s.neutralPalette,
  tone: (s) => 0
});
MaterialDynamicColors.scrim = DynamicColor.fromPalette({
  name: "scrim",
  palette: (s) => s.neutralPalette,
  tone: (s) => 0
});
MaterialDynamicColors.surfaceTint = DynamicColor.fromPalette({
  name: "surface_tint",
  palette: (s) => s.primaryPalette,
  tone: (s) => s.isDark ? 80 : 40,
  isBackground: true
});
MaterialDynamicColors.primary = DynamicColor.fromPalette({
  name: "primary",
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 100 : 0;
    }
    return s.isDark ? 80 : 40;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, "nearer", false)
});
MaterialDynamicColors.onPrimary = DynamicColor.fromPalette({
  name: "on_primary",
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 90;
    }
    return s.isDark ? 20 : 100;
  },
  background: (s) => MaterialDynamicColors.primary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.primaryContainer = DynamicColor.fromPalette({
  name: "primary_container",
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isFidelity(s)) {
      return s.sourceColorHct.tone;
    }
    if (isMonochrome(s)) {
      return s.isDark ? 85 : 25;
    }
    return s.isDark ? 30 : 90;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, "nearer", false)
});
MaterialDynamicColors.onPrimaryContainer = DynamicColor.fromPalette({
  name: "on_primary_container",
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isFidelity(s)) {
      return DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s), 4.5);
    }
    if (isMonochrome(s)) {
      return s.isDark ? 0 : 100;
    }
    return s.isDark ? 90 : 30;
  },
  background: (s) => MaterialDynamicColors.primaryContainer,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.inversePrimary = DynamicColor.fromPalette({
  name: "inverse_primary",
  palette: (s) => s.primaryPalette,
  tone: (s) => s.isDark ? 40 : 80,
  background: (s) => MaterialDynamicColors.inverseSurface,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7)
});
MaterialDynamicColors.secondary = DynamicColor.fromPalette({
  name: "secondary",
  palette: (s) => s.secondaryPalette,
  tone: (s) => s.isDark ? 80 : 40,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, "nearer", false)
});
MaterialDynamicColors.onSecondary = DynamicColor.fromPalette({
  name: "on_secondary",
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 100;
    } else {
      return s.isDark ? 20 : 100;
    }
  },
  background: (s) => MaterialDynamicColors.secondary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.secondaryContainer = DynamicColor.fromPalette({
  name: "secondary_container",
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    const initialTone = s.isDark ? 30 : 90;
    if (isMonochrome(s)) {
      return s.isDark ? 30 : 85;
    }
    if (!isFidelity(s)) {
      return initialTone;
    }
    return findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, "nearer", false)
});
MaterialDynamicColors.onSecondaryContainer = DynamicColor.fromPalette({
  name: "on_secondary_container",
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 90 : 10;
    }
    if (!isFidelity(s)) {
      return s.isDark ? 90 : 30;
    }
    return DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s), 4.5);
  },
  background: (s) => MaterialDynamicColors.secondaryContainer,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.tertiary = DynamicColor.fromPalette({
  name: "tertiary",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 90 : 25;
    }
    return s.isDark ? 80 : 40;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, "nearer", false)
});
MaterialDynamicColors.onTertiary = DynamicColor.fromPalette({
  name: "on_tertiary",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 90;
    }
    return s.isDark ? 20 : 100;
  },
  background: (s) => MaterialDynamicColors.tertiary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.tertiaryContainer = DynamicColor.fromPalette({
  name: "tertiary_container",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 60 : 49;
    }
    if (!isFidelity(s)) {
      return s.isDark ? 30 : 90;
    }
    const proposedHct = s.tertiaryPalette.getHct(s.sourceColorHct.tone);
    return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, "nearer", false)
});
MaterialDynamicColors.onTertiaryContainer = DynamicColor.fromPalette({
  name: "on_tertiary_container",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 0 : 100;
    }
    if (!isFidelity(s)) {
      return s.isDark ? 90 : 30;
    }
    return DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s), 4.5);
  },
  background: (s) => MaterialDynamicColors.tertiaryContainer,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.error = DynamicColor.fromPalette({
  name: "error",
  palette: (s) => s.errorPalette,
  tone: (s) => s.isDark ? 80 : 40,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, "nearer", false)
});
MaterialDynamicColors.onError = DynamicColor.fromPalette({
  name: "on_error",
  palette: (s) => s.errorPalette,
  tone: (s) => s.isDark ? 20 : 100,
  background: (s) => MaterialDynamicColors.error,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.errorContainer = DynamicColor.fromPalette({
  name: "error_container",
  palette: (s) => s.errorPalette,
  tone: (s) => s.isDark ? 30 : 90,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, "nearer", false)
});
MaterialDynamicColors.onErrorContainer = DynamicColor.fromPalette({
  name: "on_error_container",
  palette: (s) => s.errorPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 90 : 10;
    }
    return s.isDark ? 90 : 30;
  },
  background: (s) => MaterialDynamicColors.errorContainer,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.primaryFixed = DynamicColor.fromPalette({
  name: "primary_fixed",
  palette: (s) => s.primaryPalette,
  tone: (s) => isMonochrome(s) ? 40 : 90,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.primaryFixedDim = DynamicColor.fromPalette({
  name: "primary_fixed_dim",
  palette: (s) => s.primaryPalette,
  tone: (s) => isMonochrome(s) ? 30 : 80,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onPrimaryFixed = DynamicColor.fromPalette({
  name: "on_primary_fixed",
  palette: (s) => s.primaryPalette,
  tone: (s) => isMonochrome(s) ? 100 : 10,
  background: (s) => MaterialDynamicColors.primaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.primaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onPrimaryFixedVariant = DynamicColor.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (s) => s.primaryPalette,
  tone: (s) => isMonochrome(s) ? 90 : 30,
  background: (s) => MaterialDynamicColors.primaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.primaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.secondaryFixed = DynamicColor.fromPalette({
  name: "secondary_fixed",
  palette: (s) => s.secondaryPalette,
  tone: (s) => isMonochrome(s) ? 80 : 90,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.secondaryFixedDim = DynamicColor.fromPalette({
  name: "secondary_fixed_dim",
  palette: (s) => s.secondaryPalette,
  tone: (s) => isMonochrome(s) ? 70 : 80,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onSecondaryFixed = DynamicColor.fromPalette({
  name: "on_secondary_fixed",
  palette: (s) => s.secondaryPalette,
  tone: (s) => 10,
  background: (s) => MaterialDynamicColors.secondaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onSecondaryFixedVariant = DynamicColor.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (s) => s.secondaryPalette,
  tone: (s) => isMonochrome(s) ? 25 : 30,
  background: (s) => MaterialDynamicColors.secondaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.tertiaryFixed = DynamicColor.fromPalette({
  name: "tertiary_fixed",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => isMonochrome(s) ? 40 : 90,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.tertiaryFixedDim = DynamicColor.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => isMonochrome(s) ? 30 : 80,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onTertiaryFixed = DynamicColor.fromPalette({
  name: "on_tertiary_fixed",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => isMonochrome(s) ? 100 : 10,
  background: (s) => MaterialDynamicColors.tertiaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onTertiaryFixedVariant = DynamicColor.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => isMonochrome(s) ? 90 : 30,
  background: (s) => MaterialDynamicColors.tertiaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});

// node_modules/@material/material-color-utilities/dynamiccolor/dynamic_scheme.js
var DynamicScheme = class {
  constructor(args) {
    this.sourceColorArgb = args.sourceColorArgb;
    this.variant = args.variant;
    this.contrastLevel = args.contrastLevel;
    this.isDark = args.isDark;
    this.sourceColorHct = Hct.fromInt(args.sourceColorArgb);
    this.primaryPalette = args.primaryPalette;
    this.secondaryPalette = args.secondaryPalette;
    this.tertiaryPalette = args.tertiaryPalette;
    this.neutralPalette = args.neutralPalette;
    this.neutralVariantPalette = args.neutralVariantPalette;
    this.errorPalette = TonalPalette.fromHueAndChroma(25, 84);
  }
  /**
   * Support design spec'ing Dynamic Color by schemes that specify hue
   * rotations that should be applied at certain breakpoints.
   * @param sourceColor the source color of the theme, in HCT.
   * @param hues The "breakpoints", i.e. the hues at which a rotation should
   * be apply.
   * @param rotations The rotation that should be applied when source color's
   * hue is >= the same index in hues array, and <= the hue at the next index
   * in hues array.
   */
  static getRotatedHue(sourceColor, hues, rotations) {
    const sourceHue = sourceColor.hue;
    if (hues.length !== rotations.length) {
      throw new Error(`mismatch between hue length ${hues.length} & rotations ${rotations.length}`);
    }
    if (rotations.length === 1) {
      return sanitizeDegreesDouble(sourceColor.hue + rotations[0]);
    }
    const size = hues.length;
    for (let i = 0; i <= size - 2; i++) {
      const thisHue = hues[i];
      const nextHue = hues[i + 1];
      if (thisHue < sourceHue && sourceHue < nextHue) {
        return sanitizeDegreesDouble(sourceHue + rotations[i]);
      }
    }
    return sourceHue;
  }
  getArgb(dynamicColor) {
    return dynamicColor.getArgb(this);
  }
  getHct(dynamicColor) {
    return dynamicColor.getHct(this);
  }
  get primaryPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.primaryPaletteKeyColor);
  }
  get secondaryPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.secondaryPaletteKeyColor);
  }
  get tertiaryPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.tertiaryPaletteKeyColor);
  }
  get neutralPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.neutralPaletteKeyColor);
  }
  get neutralVariantPaletteKeyColor() {
    return this.getArgb(MaterialDynamicColors.neutralVariantPaletteKeyColor);
  }
  get background() {
    return this.getArgb(MaterialDynamicColors.background);
  }
  get onBackground() {
    return this.getArgb(MaterialDynamicColors.onBackground);
  }
  get surface() {
    return this.getArgb(MaterialDynamicColors.surface);
  }
  get surfaceDim() {
    return this.getArgb(MaterialDynamicColors.surfaceDim);
  }
  get surfaceBright() {
    return this.getArgb(MaterialDynamicColors.surfaceBright);
  }
  get surfaceContainerLowest() {
    return this.getArgb(MaterialDynamicColors.surfaceContainerLowest);
  }
  get surfaceContainerLow() {
    return this.getArgb(MaterialDynamicColors.surfaceContainerLow);
  }
  get surfaceContainer() {
    return this.getArgb(MaterialDynamicColors.surfaceContainer);
  }
  get surfaceContainerHigh() {
    return this.getArgb(MaterialDynamicColors.surfaceContainerHigh);
  }
  get surfaceContainerHighest() {
    return this.getArgb(MaterialDynamicColors.surfaceContainerHighest);
  }
  get onSurface() {
    return this.getArgb(MaterialDynamicColors.onSurface);
  }
  get surfaceVariant() {
    return this.getArgb(MaterialDynamicColors.surfaceVariant);
  }
  get onSurfaceVariant() {
    return this.getArgb(MaterialDynamicColors.onSurfaceVariant);
  }
  get inverseSurface() {
    return this.getArgb(MaterialDynamicColors.inverseSurface);
  }
  get inverseOnSurface() {
    return this.getArgb(MaterialDynamicColors.inverseOnSurface);
  }
  get outline() {
    return this.getArgb(MaterialDynamicColors.outline);
  }
  get outlineVariant() {
    return this.getArgb(MaterialDynamicColors.outlineVariant);
  }
  get shadow() {
    return this.getArgb(MaterialDynamicColors.shadow);
  }
  get scrim() {
    return this.getArgb(MaterialDynamicColors.scrim);
  }
  get surfaceTint() {
    return this.getArgb(MaterialDynamicColors.surfaceTint);
  }
  get primary() {
    return this.getArgb(MaterialDynamicColors.primary);
  }
  get onPrimary() {
    return this.getArgb(MaterialDynamicColors.onPrimary);
  }
  get primaryContainer() {
    return this.getArgb(MaterialDynamicColors.primaryContainer);
  }
  get onPrimaryContainer() {
    return this.getArgb(MaterialDynamicColors.onPrimaryContainer);
  }
  get inversePrimary() {
    return this.getArgb(MaterialDynamicColors.inversePrimary);
  }
  get secondary() {
    return this.getArgb(MaterialDynamicColors.secondary);
  }
  get onSecondary() {
    return this.getArgb(MaterialDynamicColors.onSecondary);
  }
  get secondaryContainer() {
    return this.getArgb(MaterialDynamicColors.secondaryContainer);
  }
  get onSecondaryContainer() {
    return this.getArgb(MaterialDynamicColors.onSecondaryContainer);
  }
  get tertiary() {
    return this.getArgb(MaterialDynamicColors.tertiary);
  }
  get onTertiary() {
    return this.getArgb(MaterialDynamicColors.onTertiary);
  }
  get tertiaryContainer() {
    return this.getArgb(MaterialDynamicColors.tertiaryContainer);
  }
  get onTertiaryContainer() {
    return this.getArgb(MaterialDynamicColors.onTertiaryContainer);
  }
  get error() {
    return this.getArgb(MaterialDynamicColors.error);
  }
  get onError() {
    return this.getArgb(MaterialDynamicColors.onError);
  }
  get errorContainer() {
    return this.getArgb(MaterialDynamicColors.errorContainer);
  }
  get onErrorContainer() {
    return this.getArgb(MaterialDynamicColors.onErrorContainer);
  }
  get primaryFixed() {
    return this.getArgb(MaterialDynamicColors.primaryFixed);
  }
  get primaryFixedDim() {
    return this.getArgb(MaterialDynamicColors.primaryFixedDim);
  }
  get onPrimaryFixed() {
    return this.getArgb(MaterialDynamicColors.onPrimaryFixed);
  }
  get onPrimaryFixedVariant() {
    return this.getArgb(MaterialDynamicColors.onPrimaryFixedVariant);
  }
  get secondaryFixed() {
    return this.getArgb(MaterialDynamicColors.secondaryFixed);
  }
  get secondaryFixedDim() {
    return this.getArgb(MaterialDynamicColors.secondaryFixedDim);
  }
  get onSecondaryFixed() {
    return this.getArgb(MaterialDynamicColors.onSecondaryFixed);
  }
  get onSecondaryFixedVariant() {
    return this.getArgb(MaterialDynamicColors.onSecondaryFixedVariant);
  }
  get tertiaryFixed() {
    return this.getArgb(MaterialDynamicColors.tertiaryFixed);
  }
  get tertiaryFixedDim() {
    return this.getArgb(MaterialDynamicColors.tertiaryFixedDim);
  }
  get onTertiaryFixed() {
    return this.getArgb(MaterialDynamicColors.onTertiaryFixed);
  }
  get onTertiaryFixedVariant() {
    return this.getArgb(MaterialDynamicColors.onTertiaryFixedVariant);
  }
};

// node_modules/@material/material-color-utilities/scheme/scheme_expressive.js
var SchemeExpressive = class _SchemeExpressive extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.EXPRESSIVE,
      contrastLevel,
      isDark,
      primaryPalette: TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 240), 40),
      secondaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, _SchemeExpressive.hues, _SchemeExpressive.secondaryRotations), 24),
      tertiaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, _SchemeExpressive.hues, _SchemeExpressive.tertiaryRotations), 32),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 8),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 12)
    });
  }
};
SchemeExpressive.hues = [
  0,
  21,
  51,
  121,
  151,
  191,
  271,
  321,
  360
];
SchemeExpressive.secondaryRotations = [
  45,
  95,
  45,
  20,
  45,
  90,
  45,
  45,
  45
];
SchemeExpressive.tertiaryRotations = [
  120,
  120,
  20,
  45,
  20,
  15,
  20,
  120,
  120
];

// node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js
var SchemeTonalSpot = class extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.TONAL_SPOT,
      contrastLevel,
      isDark,
      primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 36),
      secondaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16),
      tertiaryPalette: TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 60), 24),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 6),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8)
    });
  }
};

// node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js
var SchemeVibrant = class _SchemeVibrant extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.VIBRANT,
      contrastLevel,
      isDark,
      primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200),
      secondaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, _SchemeVibrant.hues, _SchemeVibrant.secondaryRotations), 24),
      tertiaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, _SchemeVibrant.hues, _SchemeVibrant.tertiaryRotations), 32),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12)
    });
  }
};
SchemeVibrant.hues = [
  0,
  41,
  61,
  101,
  131,
  181,
  251,
  301,
  360
];
SchemeVibrant.secondaryRotations = [
  18,
  15,
  10,
  12,
  15,
  18,
  15,
  12,
  12
];
SchemeVibrant.tertiaryRotations = [
  35,
  30,
  20,
  25,
  30,
  35,
  30,
  25,
  25
];

// node_modules/@material/material-color-utilities/score/score.js
var SCORE_OPTION_DEFAULTS = {
  desired: 4,
  fallbackColorARGB: 4282549748,
  filter: true
  // Avoid unsuitable colors.
};
function compare(a, b) {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  }
  return 0;
}
var Score = class _Score {
  constructor() {
  }
  /**
   * Given a map with keys of colors and values of how often the color appears,
   * rank the colors based on suitability for being used for a UI theme.
   *
   * @param colorsToPopulation map with keys of colors and values of how often
   *     the color appears, usually from a source image.
   * @param {ScoreOptions} options optional parameters.
   * @return Colors sorted by suitability for a UI theme. The most suitable
   *     color is the first item, the least suitable is the last. There will
   *     always be at least one color returned. If all the input colors
   *     were not suitable for a theme, a default fallback color will be
   *     provided, Google Blue.
   */
  static score(colorsToPopulation, options) {
    const { desired, fallbackColorARGB, filter } = { ...SCORE_OPTION_DEFAULTS, ...options };
    const colorsHct = [];
    const huePopulation = new Array(360).fill(0);
    let populationSum = 0;
    for (const [argb2, population] of colorsToPopulation.entries()) {
      const hct = Hct.fromInt(argb2);
      colorsHct.push(hct);
      const hue = Math.floor(hct.hue);
      huePopulation[hue] += population;
      populationSum += population;
    }
    const hueExcitedProportions = new Array(360).fill(0);
    for (let hue = 0; hue < 360; hue++) {
      const proportion = huePopulation[hue] / populationSum;
      for (let i = hue - 14; i < hue + 16; i++) {
        const neighborHue = sanitizeDegreesInt(i);
        hueExcitedProportions[neighborHue] += proportion;
      }
    }
    const scoredHct = new Array();
    for (const hct of colorsHct) {
      const hue = sanitizeDegreesInt(Math.round(hct.hue));
      const proportion = hueExcitedProportions[hue];
      if (filter && (hct.chroma < _Score.CUTOFF_CHROMA || proportion <= _Score.CUTOFF_EXCITED_PROPORTION)) {
        continue;
      }
      const proportionScore = proportion * 100 * _Score.WEIGHT_PROPORTION;
      const chromaWeight = hct.chroma < _Score.TARGET_CHROMA ? _Score.WEIGHT_CHROMA_BELOW : _Score.WEIGHT_CHROMA_ABOVE;
      const chromaScore = (hct.chroma - _Score.TARGET_CHROMA) * chromaWeight;
      const score = proportionScore + chromaScore;
      scoredHct.push({ hct, score });
    }
    scoredHct.sort(compare);
    const chosenColors = [];
    for (let differenceDegrees2 = 90; differenceDegrees2 >= 15; differenceDegrees2--) {
      chosenColors.length = 0;
      for (const { hct } of scoredHct) {
        const duplicateHue = chosenColors.find((chosenHct) => {
          return differenceDegrees(hct.hue, chosenHct.hue) < differenceDegrees2;
        });
        if (!duplicateHue) {
          chosenColors.push(hct);
        }
        if (chosenColors.length >= desired)
          break;
      }
      if (chosenColors.length >= desired)
        break;
    }
    const colors = [];
    if (chosenColors.length === 0) {
      colors.push(fallbackColorARGB);
    }
    for (const chosenHct of chosenColors) {
      colors.push(chosenHct.toInt());
    }
    return colors;
  }
};
Score.TARGET_CHROMA = 48;
Score.WEIGHT_PROPORTION = 0.7;
Score.WEIGHT_CHROMA_ABOVE = 0.3;
Score.WEIGHT_CHROMA_BELOW = 0.1;
Score.CUTOFF_CHROMA = 5;
Score.CUTOFF_EXCITED_PROPORTION = 0.01;

// node_modules/@material/material-color-utilities/utils/string_utils.js
function hexFromArgb(argb2) {
  const r = redFromArgb(argb2);
  const g = greenFromArgb(argb2);
  const b = blueFromArgb(argb2);
  const outParts = [r.toString(16), g.toString(16), b.toString(16)];
  for (const [i, part] of outParts.entries()) {
    if (part.length === 1) {
      outParts[i] = "0" + part;
    }
  }
  return "#" + outParts.join("");
}

// src/math/hct.ts
var M3_ROLES = [
  "primary",
  "onPrimary",
  "primaryContainer",
  "onPrimaryContainer",
  "secondary",
  "onSecondary",
  "secondaryContainer",
  "onSecondaryContainer",
  "tertiary",
  "onTertiary",
  "tertiaryContainer",
  "onTertiaryContainer",
  "error",
  "onError",
  "errorContainer",
  "onErrorContainer",
  "background",
  "onBackground",
  "surface",
  "onSurface",
  "surfaceVariant",
  "onSurfaceVariant",
  "outline",
  "outlineVariant"
];
function argb(hex) {
  const { r, g, b } = hexToRgb(hex);
  return argbFromRgb(r, g, b);
}
function hexToLab(hex) {
  const [L, a, b] = labFromArgb(argb(hex));
  return { L, a, b };
}
function hexToHct(hex) {
  const hct = Hct.fromInt(argb(hex));
  return { hue: hct.hue, chroma: hct.chroma, tone: hct.tone };
}
function hctToHex(hue, chroma, tone) {
  if (![hue, chroma, tone].every(Number.isFinite) || chroma < 0 || tone < 0 || tone > 100)
    throw new RangeError("HCT requires finite hue, nonnegative chroma and tone in [0, 100]");
  return hexFromArgb(Hct.from((hue % 360 + 360) % 360, chroma, tone).toInt()).toUpperCase();
}
function generateTonalPalette(sourceHex, tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 100]) {
  if (tones.length > 1e3 || !tones.every((t) => Number.isFinite(t) && t >= 0 && t <= 100))
    throw new RangeError("Expected at most 1000 tones in [0, 100]");
  const palette = TonalPalette.fromInt(argb(sourceHex));
  return Object.fromEntries(tones.map((t) => [t, hexFromArgb(palette.tone(t)).toUpperCase()]));
}
function generateM3DynamicScheme(sourceHex) {
  const hct = Hct.fromInt(argb(sourceHex));
  const roles = (dark) => {
    const scheme = new SchemeTonalSpot(hct, dark, 0);
    return Object.fromEntries(M3_ROLES.map((key) => [key, hexFromArgb(scheme[key]).toUpperCase()]));
  };
  return {
    seedHex: rgbToHex(hexToRgb(sourceHex)),
    hct: hexToHct(sourceHex),
    light: roles(false),
    dark: roles(true),
    tonalScale: generateTonalPalette(sourceHex),
    method: "material-color-utilities@0.3.0/tonal-spot/2021"
  };
}

// src/tokens/palettes.ts
function freeze(value) {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    for (const child of Object.values(value)) freeze(child);
    Object.freeze(value);
  }
  return value;
}
function normalizePalette(raw) {
  return {
    ...raw,
    colors: raw.colors.map((color) => {
      const original = color.evidence, mineral = original.mineralogical;
      const sourceGeo = original.geoSpatial, coords = sourceGeo.coordinates;
      const hex = rgbToHex(hexToRgb(color.hex)), srgb = hexToRgb(hex), oklab = rgbToOklab(srgb);
      const conflicts = [];
      const compare2 = (field, selected, alternative) => {
        if (JSON.stringify(selected) !== JSON.stringify(alternative))
          conflicts.push({ field, selected, alternative, resolution: "unresolved" });
      };
      compare2("geo.latitude", coords.lat, original.geo.latitude);
      compare2("geo.longitude", coords.lng, original.geo.longitude);
      compare2("geo.elevationMeters", coords.altitudeMeters ?? original.geo.elevationMeters, original.geo.elevationMeters);
      compare2("chemical.formula", mineral.chemicalFormula, original.chemical.formula);
      const { molarMass: unverifiedMolarMass, ...chemical } = original.chemical;
      return {
        ...color,
        hex,
        evidence: {
          ...original,
          chemical: {
            ...chemical,
            chemicalName: mineral.mineralName,
            historicalPigmentFa: mineral.mineralNameFa,
            formula: mineral.chemicalFormula,
            casNumber: mineral.casNumber ?? chemical.casNumber
          },
          geo: {
            locationFa: sourceGeo.originSiteFa,
            latitude: coords.lat,
            longitude: coords.lng,
            elevationMeters: coords.altitudeMeters ?? original.geo.elevationMeters,
            unescoSiteId: sourceGeo.unescoHeritageRef
          },
          geoSpatial: { ...sourceGeo, coordinates: { ...coords, altitudeMeters: coords.altitudeMeters ?? original.geo.elevationMeters } },
          physics: {
            ...original.physics,
            dominantWavelengthNm: original.spectral.dominantWavelengthNm,
            spectralReflectancePeak: original.spectral.peakWavelengthNm + " nm",
            chromaOklab: Math.hypot(oklab.a, oklab.b),
            cieLab: hexToLab(hex)
          },
          colorScience: { srgb, oklab, apca: {
            contrastOnWhite: calculateAPCA(hex, "#FFFFFF"),
            contrastOnBlack: calculateAPCA(hex, "#000000"),
            recommendedWeight: evaluateAPCA(hex, "#FFFFFF").rating
          } },
          provenance: {
            source: "legacy-v2.1.0",
            heritageStatus: "unverified",
            geographyStatus: conflicts.some((c) => c.field.startsWith("geo.")) ? "conflicting" : "unverified",
            spectralStatus: "illustrative",
            colorMetricsStatus: "computed",
            methods: ["sRGB D65", "Oklab", "CIELAB D65", "apca-w3@0.1.9", "material-color-utilities@0.3.0"],
            references: [
              { label: "Oklab method", url: "https://bottosson.github.io/posts/oklab/", scope: "method" },
              { label: "APCA reference", url: "https://github.com/Myndex/apca-w3", scope: "method" },
              { label: "Material color utilities", url: "https://github.com/material-foundation/material-color-utilities", scope: "method" }
            ],
            historicalReference: { citation: mineral.historicalManuscriptRef, verification: "not-verified" },
            conflicts
          }
        }
      };
    })
  };
}
var ALL_PALETTES_LIST = freeze(Object.values(RAW_PALETTES).map(normalizePalette));
var PERSIAN_PALETTES = freeze(Object.fromEntries(ALL_PALETTES_LIST.map((p) => [p.id, p])));
function getDataQualityReport() {
  const colors = ALL_PALETTES_LIST.flatMap((p) => p.colors);
  return {
    palettes: ALL_PALETTES_LIST.length,
    colors: colors.length,
    unverifiedHeritageColors: colors.length,
    measuredSpectra: 0,
    coordinateConflicts: colors.filter((c) => c.evidence.provenance.conflicts.some((v) => v.field === "geo.latitude" || v.field === "geo.longitude")).length,
    conflicts: colors.filter((c) => c.evidence.provenance.conflicts.length).map((c) => ({ id: c.id, conflicts: c.evidence.provenance.conflicts }))
  };
}

// src/version.ts
var VERSION = "3.0.0";
var DTCG_VERSION = "2025.10";

// src/exporters/w3c.ts
var colorTokenKey = (color) => color.nameEn.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function toDTCGColorValue(hex) {
  const rgb = hexToRgb(hex);
  return { colorSpace: "srgb", components: [rgb.r / 255, rgb.g / 255, rgb.b / 255], alpha: 1, hex: rgbToHex(rgb).toLowerCase() };
}
function toDTCGToken(color) {
  return {
    $type: "color",
    $value: toDTCGColorValue(color.hex),
    $description: color.nameFa + " \u2014 " + color.roleFa,
    $extensions: { "org.persian-palette": { id: color.id, nameFa: color.nameFa, nameEn: color.nameEn, evidence: color.evidence } }
  };
}
function exportW3CTokens(palettes = ALL_PALETTES_LIST) {
  const persian = { $description: "Persian-inspired sRGB colors; heritage annotations are not laboratory authentication." };
  for (const palette of palettes) {
    const group = { $description: palette.nameFa + " (" + palette.nameEn + ")" };
    for (const color of palette.colors) {
      const key = colorTokenKey(color);
      if (Object.hasOwn(group, key)) throw new Error("Duplicate token key: " + key);
      group[key] = toDTCGToken(color);
    }
    persian[palette.id] = group;
  }
  return {
    $description: "Persian Palette Vault design tokens",
    $extensions: { "org.persian-palette": { version: VERSION, dtcgVersion: DTCG_VERSION } },
    persian
  };
}
function exportTokensStudio(palettes = ALL_PALETTES_LIST) {
  return Object.fromEntries(palettes.map((p) => [p.id, Object.fromEntries(p.colors.map((c) => [
    colorTokenKey(c),
    { value: c.hex, type: "color", description: c.nameFa }
  ]))]));
}

// src/engine.ts
function normalizeColorName(value) {
  return value.normalize("NFKC").toLowerCase().replace(/ي/g, "\u06CC").replace(/ك/g, "\u06A9").replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[^\p{L}\p{N}]/gu, "");
}
function token(color) {
  return { ...toDTCGToken(color), id: color.id, hex: color.hex, nameFa: color.nameFa, nameEn: color.nameEn, evidence: color.evidence };
}
var PersianEngine = class {
  static getColor(paletteId, name) {
    if (typeof paletteId !== "string" || !Object.hasOwn(PERSIAN_PALETTES, paletteId))
      throw new RangeError("Unknown palette: " + paletteId);
    if (typeof name !== "string" || !normalizeColorName(name)) throw new TypeError("Color query must not be empty");
    const palette = PERSIAN_PALETTES[paletteId], key = normalizeColorName(name);
    const exact = palette.colors.filter((c) => [c.id, c.nameEn, colorTokenKey(c), c.nameFa, c.nameFa.replace(/\([^)]*\)/g, "")].some((n) => normalizeColorName(n) === key));
    const candidates = exact.length ? exact : palette.colors.filter((c) => [c.nameEn, c.nameFa].some((n) => normalizeColorName(n).includes(key)));
    if (candidates.length === 0) throw new RangeError("Unknown color: " + name + " in " + paletteId);
    if (candidates.length > 1) throw new RangeError("Ambiguous color: " + name + "; use a color ID");
    return token(candidates[0]);
  }
  static getToken(paletteId, name) {
    return this.getColor(paletteId, name);
  }
  static getPalette(paletteId) {
    if (!Object.hasOwn(PERSIAN_PALETTES, paletteId)) return void 0;
    const p = PERSIAN_PALETTES[paletteId];
    const category = p.category === "art" || p.category === "craft" ? "arts" : p.category;
    return {
      version: VERSION,
      id: p.id,
      nameFa: p.nameFa,
      nameEn: p.nameEn,
      category,
      tokens: Object.fromEntries(p.colors.map((c) => [colorTokenKey(c), token(c)])),
      $description: p.descriptionFa
    };
  }
  static getAllPalettes() {
    return Object.fromEntries(ALL_PALETTES_LIST.map((p) => [p.id, this.getPalette(p.id)]));
  }
  static getAllColors() {
    return ALL_PALETTES_LIST.flatMap((p) => p.colors.map(token));
  }
};

// src/math/spectral.ts
function generateSpectralCurve(peakWavelengthNm, fwhmNm = 65, minReflectance = 0.05, maxReflectance = 0.9) {
  if (![peakWavelengthNm, fwhmNm, minReflectance, maxReflectance].every(Number.isFinite) || peakWavelengthNm < 380 || peakWavelengthNm > 700 || fwhmNm <= 0 || minReflectance < 0 || maxReflectance > 1 || minReflectance > maxReflectance) {
    throw new RangeError("Expected a visible peak (380\u2013700 nm), positive FWHM and ordered reflectance bounds in [0, 1]");
  }
  const points = [];
  const sigma = fwhmNm / (2 * Math.sqrt(2 * Math.log(2)));
  for (let lambda = 380; lambda <= 700; lambda += 5) {
    const dist = (lambda - peakWavelengthNm) / sigma;
    const gaussian = Math.exp(-0.5 * dist * dist);
    let secondary = 0;
    if (peakWavelengthNm > 600) {
      secondary = lambda > peakWavelengthNm ? 0.45 * (1 - Math.exp(-(lambda - peakWavelengthNm) / 40)) : 0;
    }
    const value = minReflectance + (maxReflectance - minReflectance) * Math.min(1, gaussian + secondary);
    points.push({
      wavelengthNm: lambda,
      reflectance: Number(Math.max(0, Math.min(1, value)).toFixed(4))
    });
  }
  return points;
}

// src/math/color-mixing.ts
function mixHistoricalPigments(hex1, hex2, ratio = 0.5) {
  if (!Number.isFinite(ratio) || ratio < 0 || ratio > 1) throw new RangeError("ratio is the weight of the second color, in [0, 1]");
  const clampedRatio = Math.max(0, Math.min(1, ratio));
  const oklab1 = rgbToOklab(hexToRgb(hex1));
  const oklab2 = rgbToOklab(hexToRgb(hex2));
  const mixedOklab = {
    L: oklab1.L * (1 - clampedRatio) + oklab2.L * clampedRatio,
    a: oklab1.a * (1 - clampedRatio) + oklab2.a * clampedRatio,
    b: oklab1.b * (1 - clampedRatio) + oklab2.b * clampedRatio
  };
  const rgb = oklabToRgb(mixedOklab);
  const hex = rgbToHex(rgb);
  return {
    ratio: clampedRatio,
    hex,
    oklab: mixedOklab,
    toString() {
      return this.hex;
    },
    valueOf() {
      return this.hex;
    },
    [Symbol.toPrimitive](hint) {
      return this.hex;
    }
  };
}
function generatePigmentGradient(hex1, hex2, steps = 5) {
  if (!Number.isInteger(steps) || steps < 1 || steps > 1e3) throw new RangeError("steps must be an integer in [1, 1000]");
  const results = [];
  for (let i = 0; i < steps; i++) {
    const ratio = steps <= 1 ? 0 : i / (steps - 1);
    results.push(mixHistoricalPigments(hex1, hex2, ratio));
  }
  return results;
}
var mixColors = mixHistoricalPigments;

// src/exporters/figma.ts
function exportFigmaVariables(palettes = ALL_PALETTES_LIST) {
  const variables = palettes.flatMap((p) => p.colors.map((c) => {
    const { r, g, b } = hexToRgb(c.hex);
    return {
      name: "Persian/" + p.id + "/" + c.nameEn.replace(/[^a-zA-Z0-9]/g, " ").trim(),
      resolvedType: "COLOR",
      valuesByMode: { Default: { r: r / 255, g: g / 255, b: b / 255, a: 1 } },
      description: c.nameFa + " \u2014 Heritage annotation not independently verified",
      scopes: ["ALL_SCOPES"]
    };
  }));
  return {
    schema: "persian-palette/figma-interchange",
    schemaVersion: 1,
    collections: [{ name: "Persian Palette Vault", modes: ["Default"], variables }]
  };
}

// src/exporters/tailwind.ts
function exportTailwindTheme(palettes = ALL_PALETTES_LIST) {
  const colors = {};
  for (const palette of palettes) {
    const paletteKey = palette.id;
    colors[paletteKey] = {};
    for (let i = 0; i < palette.colors.length; i++) {
      const color = palette.colors[i];
      const step = (i + 1) * 100;
      colors[paletteKey][`${step}`] = color.hex;
    }
  }
  return {
    theme: {
      extend: {
        colors: {
          persian: colors
        }
      }
    }
  };
}
function exportTailwindV4CSS(palettes = ALL_PALETTES_LIST) {
  let css = "@theme {\n";
  for (const palette of palettes) {
    css += `  /* ${palette.nameFa} (${palette.nameEn}) */
`;
    for (let i = 0; i < palette.colors.length; i++) {
      const color = palette.colors[i];
      const step = (i + 1) * 100;
      css += `  --color-persian-${palette.id}-${step}: ${color.hex}; /* ${color.nameFa} */
`;
    }
  }
  css += "}\n";
  return css;
}

// src/exporters/platforms.ts
function exportSwiftUI(palettes = ALL_PALETTES_LIST) {
  const lines = ["import SwiftUI", "", "extension Color {"];
  for (const p of palettes) for (let i = 0; i < p.colors.length; i++) {
    const { r, g, b } = hexToRgb(p.colors[i].hex);
    lines.push("    static let persian_" + p.id.replace(/-/g, "_") + "_" + (i + 1) + " = Color(.sRGB, red: " + (r / 255).toFixed(8) + ", green: " + (g / 255).toFixed(8) + ", blue: " + (b / 255).toFixed(8) + ", opacity: 1)");
  }
  return lines.concat("}", "").join("\n");
}
function exportMaterialKotlin(palettes = ALL_PALETTES_LIST) {
  const lines = ["import androidx.compose.material3.lightColorScheme", "import androidx.compose.material3.darkColorScheme", "import androidx.compose.ui.graphics.Color", ""];
  for (const p of palettes) {
    const scheme = generateM3DynamicScheme(p.colors[0].hex), name = p.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    for (const mode of ["light", "dark"]) {
      lines.push("val " + name + (mode === "light" ? "Light" : "Dark") + "ColorScheme = " + mode + "ColorScheme(");
      lines.push(Object.entries(scheme[mode]).map(([role, hex]) => "    " + role + " = Color(0xFF" + hex.slice(1) + ")").join(",\n"));
      lines.push(")", "");
    }
  }
  return lines.join("\n");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ALL_PALETTES_LIST,
  DTCG_VERSION,
  M3_ROLES,
  PERSIAN_PALETTES,
  PersianEngine,
  VERSION,
  calculateAPCA,
  colorTokenKey,
  evaluateAPCA,
  exportFigmaVariables,
  exportMaterialKotlin,
  exportSwiftUI,
  exportTailwindTheme,
  exportTailwindV4CSS,
  exportToW3CTokens,
  exportTokensStudio,
  exportW3CTokens,
  generateM3DynamicScheme,
  generatePigmentGradient,
  generateSpectralCurve,
  generateTonalPalette,
  getApcaFontSizes,
  getDataQualityReport,
  hctToHex,
  hexToHct,
  hexToLab,
  hexToRgb,
  mixColors,
  mixHistoricalPigments,
  normalizeColorName,
  oklabToRgb,
  rgbToHex,
  rgbToOklab,
  toDTCGColorValue,
  toDTCGToken
});
/*! Bundled license information:

colorparsley/src/colorparsley.js:
  (** @preserve
  /////    CoLoR PaRsLeY  a simple set of color parsing thingies!
  /////           Beta 0.1.8   Revision date: June 04, 2022
  /////
  /////    Functions to parse color values and return array
  /////    Copyright (c) 2019-2022 by Andrew Somers. All Rights Reserved.
  /////    LICENSE: AGPL 3
  /////    CONTACT: Please use the ISSUES or DISCUSSIONS tab at:
  /////    https://github.com/Myndex/colorparsley/
  /////
  ///////////////////////////////////////////////////////////////////////////////
  /////
  /////    IMPORT:
  /////    import { colorParsley } from 'colorparsley';
  /////
  /////    let rgbaArray = colorParsley('#abcdef');
  /////
  /////    Output as array:  [r,g,b,a,isValid,colorspace]
  /////    Example: [123,123,123,1.0,true,'sRGB']
  // *)

apca-w3/src/apca-w3.js:
  (** @preserve
  /////    SAPC APCA - Advanced Perceptual Contrast Algorithm
  /////           Beta 0.1.9 W3 • contrast function only
  /////           DIST: W3 • Revision date: July 3, 2022
  /////    Function to parse color values and determine Lc contrast
  /////    Copyright © 2019-2022 by Andrew Somers. All Rights Reserved.
  /////    LICENSE: W3 LICENSE
  /////    CONTACT: Please use the ISSUES or DISCUSSIONS tab at:
  /////    https://github.com/Myndex/SAPC-APCA/
  /////
  ///////////////////////////////////////////////////////////////////////////////
  /////
  /////    MINIMAL IMPORTS:
  /////      import { APCAcontrast, sRGBtoY, displayP3toY,
  /////               calcAPCA, fontLookupAPCA } from 'apca-w3';
  /////      import { colorParsley } from 'colorparsley';
  /////
  /////    FORWARD CONTRAST USAGE:
  /////      Lc = APCAcontrast( sRGBtoY( TEXTcolor ) , sRGBtoY( BACKGNDcolor ) );
  /////    Where the colors are sent as an rgba array [255,255,255,1]
  /////
  /////    Retrieving an array of font sizes for the contrast:
  /////      fontArray = fontLookupAPCA(Lc);
  /////
  /////    Live Demonstrator at https://www.myndex.com/APCA/
  // *)

@material/material-color-utilities/utils/math_utils.js:
@material/material-color-utilities/utils/color_utils.js:
@material/material-color-utilities/hct/viewing_conditions.js:
@material/material-color-utilities/hct/cam16.js:
@material/material-color-utilities/hct/hct_solver.js:
@material/material-color-utilities/hct/hct.js:
@material/material-color-utilities/blend/blend.js:
@material/material-color-utilities/palettes/tonal_palette.js:
@material/material-color-utilities/palettes/core_palette.js:
@material/material-color-utilities/quantize/lab_point_provider.js:
@material/material-color-utilities/quantize/quantizer_wsmeans.js:
@material/material-color-utilities/quantize/quantizer_map.js:
@material/material-color-utilities/quantize/quantizer_wu.js:
@material/material-color-utilities/quantize/quantizer_celebi.js:
@material/material-color-utilities/scheme/scheme.js:
@material/material-color-utilities/scheme/scheme_android.js:
@material/material-color-utilities/score/score.js:
@material/material-color-utilities/utils/string_utils.js:
@material/material-color-utilities/utils/image_utils.js:
@material/material-color-utilities/utils/theme_utils.js:
@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
@material/material-color-utilities/dynamiccolor/dynamic_color.js:
@material/material-color-utilities/dynamiccolor/variant.js:
@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
@material/material-color-utilities/dynamiccolor/dynamic_scheme.js:
@material/material-color-utilities/scheme/scheme_expressive.js:
@material/material-color-utilities/scheme/scheme_fruit_salad.js:
@material/material-color-utilities/scheme/scheme_monochrome.js:
@material/material-color-utilities/scheme/scheme_neutral.js:
@material/material-color-utilities/scheme/scheme_rainbow.js:
@material/material-color-utilities/scheme/scheme_tonal_spot.js:
@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
@material/material-color-utilities/dynamiccolor/contrast_curve.js:
@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
@material/material-color-utilities/temperature/temperature_cache.js:
@material/material-color-utilities/scheme/scheme_content.js:
@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
