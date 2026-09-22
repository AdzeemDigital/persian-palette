declare module 'apca-w3' {
  export function sRGBtoY(rgb: number[]): number;
  export function APCAcontrast(textY: number, backgroundY: number, places?: number): number;
  export function fontLookupAPCA(lc: number, places?: number): (number | string)[];
}
