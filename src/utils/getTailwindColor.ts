import type { Config } from 'tailwindcss';
import tailwindConfig from '../../tailwind.config';

// Extract color configuration from tailwindConfig
const colors: any = (tailwindConfig as Config).theme?.extend?.colors || {};

// Utility function to get the hex code of a color
export function getTailwindColor(color: string, shade?: string): string | undefined {
  if (!color) return undefined;

  const colorConfig = colors[color];

  if (!colorConfig) return undefined;

  // If shade is specified, return the specific shade, otherwise return the main color
  if (shade) {
    return typeof colorConfig === 'object' ? colorConfig[shade] : undefined;
  }
  return typeof colorConfig === 'string' ? colorConfig : colorConfig?.main;
}
