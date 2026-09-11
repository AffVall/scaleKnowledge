// Catalogue lengths and coordinates are metres; devicePixelRatio never scales geometry.
export const CSS_PX_PER_CM = 96 / 2.54;
export const EARTH_DIAMETER = 12_742_016.8;
export const MOON_DIAMETER = 3_474_800;
export const SUN_DIAMETER = 1_391_400_000;
export const MOON_DISTANCE = 384_400_000;
export const AU = 149_597_870_700;
export const LIGHT_SPEED = 299_792_458;
export const LIGHT_YEAR = LIGHT_SPEED * 365.25 * 86400;
export const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
export const modelCm = (metres, referenceMetres, referenceCm) => metres / referenceMetres * referenceCm;
export const pixelsPerMetre = (referenceMetres, referenceCm, pxPerCm = CSS_PX_PER_CM) => referenceCm * pxPerCm / referenceMetres;
export const px = (metres, referenceMetres, referenceCm, pxPerCm = CSS_PX_PER_CM) => metres * pixelsPerMetre(referenceMetres, referenceCm, pxPerCm);
export const number = (n, digits = 2) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: digits }).format(n);
export function length(metres, digits = 2) {
  const a = Math.abs(metres);
  const unit = a >= LIGHT_YEAR ? [LIGHT_YEAR, 'anos-luz'] : a >= 1000 ? [1000, 'km'] : a >= 1 ? [1, 'm'] : a >= .01 ? [.01, 'cm'] : a >= .001 ? [.001, 'mm'] : a >= 1e-6 ? [1e-6, 'µm'] : a >= 1e-9 ? [1e-9, 'nm'] : a >= 1e-12 ? [1e-12, 'pm'] : [1e-15, 'fm'];
  return a === 0 ? '0 m' : `${number(metres / unit[0], digits)} ${unit[1]}`;
}
export function niceStep(minimum) {
  const power = 10 ** Math.floor(Math.log10(minimum));
  return [1, 2, 5, 10].map(n => n * power).find(n => n >= minimum) ?? power * 10;
}
export const angularDiameter = (diameter, distance) => 2 * Math.asin(diameter / (2 * distance)) * 180 / Math.PI;
export function classifyEclipse(sunAngle, moonAngle, separation) {
  const a = sunAngle / 2, b = moonAngle / 2, tolerance = 1e-10;
  if (separation > a + b + tolerance) return 'Sem eclipse';
  if (Math.abs(separation - (a + b)) <= tolerance || Math.abs(separation - Math.abs(a - b)) <= tolerance) return 'Contato entre os discos';
  if (b > a && separation < b - a) return 'Eclipse total';
  if (a > b && separation < a - b) return 'Eclipse anular';
  return 'Eclipse parcial';
}
