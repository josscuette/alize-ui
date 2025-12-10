'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { MaterialSymbol } from '@/components/material-symbol';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import type { TokenGroup, ColorToken } from '../../types';

// ============================================================================
// Color Utilities
// ============================================================================

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  
  if (!rgb1 || !rgb2) return 1;
  
  const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

function rgbToHex(rgb: string): string {
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
    const rgbaMatch = rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)$/);
    if (rgbaMatch) {
      const [, r, g, b] = rgbaMatch;
      return `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`.toUpperCase();
    }
    return rgb;
  }
  const [, r, g, b] = match;
  return `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`.toUpperCase();
}

// ============================================================================
// Primitive Color Palettes (Solstice)
// ============================================================================

interface PaletteShade {
  shade: string;
  cssVariable: string;
  hex: string;
}

interface ColorPalette {
  name: string;
  shades: PaletteShade[];
}

const solsticePalettes: ColorPalette[] = [
  {
    name: 'Glacier',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-glacier-50)', hex: '#F7F9FA' },
      { shade: '100', cssVariable: 'var(--color-solstice-glacier-100)', hex: '#EFF3F4' },
      { shade: '200', cssVariable: 'var(--color-solstice-glacier-200)', hex: '#DCE2E5' },
      { shade: '300', cssVariable: 'var(--color-solstice-glacier-300)', hex: '#CAD1D5' },
      { shade: '400', cssVariable: 'var(--color-solstice-glacier-400)', hex: '#919DA2' },
      { shade: '500', cssVariable: 'var(--color-solstice-glacier-500)', hex: '#5D7078' },
      { shade: '600', cssVariable: 'var(--color-solstice-glacier-600)', hex: '#3C535C' },
      { shade: '700', cssVariable: 'var(--color-solstice-glacier-700)', hex: '#2B424A' },
      { shade: '800', cssVariable: 'var(--color-solstice-glacier-800)', hex: '#172A33' },
      { shade: '900', cssVariable: 'var(--color-solstice-glacier-900)', hex: '#0E1D23' },
      { shade: '950', cssVariable: 'var(--color-solstice-glacier-950)', hex: '#080F13' },
    ],
  },
  {
    name: 'Bahama',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-bahama-50)', hex: '#E7F4F9' },
      { shade: '100', cssVariable: 'var(--color-solstice-bahama-100)', hex: '#BDE2EF' },
      { shade: '200', cssVariable: 'var(--color-solstice-bahama-200)', hex: '#93CFE4' },
      { shade: '300', cssVariable: 'var(--color-solstice-bahama-300)', hex: '#67BBD7' },
      { shade: '400', cssVariable: 'var(--color-solstice-bahama-400)', hex: '#3BA5CA' },
      { shade: '500', cssVariable: 'var(--color-solstice-bahama-500)', hex: '#258FB5' },
      { shade: '600', cssVariable: 'var(--color-solstice-bahama-600)', hex: '#16799B' },
      { shade: '700', cssVariable: 'var(--color-solstice-bahama-700)', hex: '#0A6484' },
      { shade: '800', cssVariable: 'var(--color-solstice-bahama-800)', hex: '#004F6B' },
      { shade: '900', cssVariable: 'var(--color-solstice-bahama-900)', hex: '#003C51' },
      { shade: '950', cssVariable: 'var(--color-solstice-bahama-950)', hex: '#002A38' },
    ],
  },
  {
    name: 'Ocean',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-ocean-50)', hex: '#E7F5F9' },
      { shade: '100', cssVariable: 'var(--color-solstice-ocean-100)', hex: '#BCE2EE' },
      { shade: '200', cssVariable: 'var(--color-solstice-ocean-200)', hex: '#9ECDDC' },
      { shade: '300', cssVariable: 'var(--color-solstice-ocean-300)', hex: '#85B8C8' },
      { shade: '400', cssVariable: 'var(--color-solstice-ocean-400)', hex: '#6EA2B3' },
      { shade: '500', cssVariable: 'var(--color-solstice-ocean-500)', hex: '#568C9F' },
      { shade: '600', cssVariable: 'var(--color-solstice-ocean-600)', hex: '#3E778B' },
      { shade: '700', cssVariable: 'var(--color-solstice-ocean-700)', hex: '#296479' },
      { shade: '800', cssVariable: 'var(--color-solstice-ocean-800)', hex: '#124F65' },
      { shade: '900', cssVariable: 'var(--color-solstice-ocean-900)', hex: '#023B51' },
      { shade: '950', cssVariable: 'var(--color-solstice-ocean-950)', hex: '#012938' },
    ],
  },
  {
    name: 'Crimson',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-crimson-50)', hex: '#FEF6F8' },
      { shade: '100', cssVariable: 'var(--color-solstice-crimson-100)', hex: '#FDEFF3' },
      { shade: '200', cssVariable: 'var(--color-solstice-crimson-200)', hex: '#FAD8E1' },
      { shade: '300', cssVariable: 'var(--color-solstice-crimson-300)', hex: '#F8C3D1' },
      { shade: '400', cssVariable: 'var(--color-solstice-crimson-400)', hex: '#E47A95' },
      { shade: '500', cssVariable: 'var(--color-solstice-crimson-500)', hex: '#C03C5E' },
      { shade: '600', cssVariable: 'var(--color-solstice-crimson-600)', hex: '#922842' },
      { shade: '700', cssVariable: 'var(--color-solstice-crimson-700)', hex: '#751B31' },
      { shade: '800', cssVariable: 'var(--color-solstice-crimson-800)', hex: '#510C1C' },
      { shade: '900', cssVariable: 'var(--color-solstice-crimson-900)', hex: '#3A0713' },
      { shade: '950', cssVariable: 'var(--color-solstice-crimson-950)', hex: '#22040B' },
    ],
  },
  {
    name: 'Salem',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-salem-50)', hex: '#ECFDF5' },
      { shade: '100', cssVariable: 'var(--color-solstice-salem-100)', hex: '#D9FBEA' },
      { shade: '200', cssVariable: 'var(--color-solstice-salem-200)', hex: '#95F4C5' },
      { shade: '300', cssVariable: 'var(--color-solstice-salem-300)', hex: '#3FEC96' },
      { shade: '400', cssVariable: 'var(--color-solstice-salem-400)', hex: '#12B168' },
      { shade: '500', cssVariable: 'var(--color-solstice-salem-500)', hex: '#067D4C' },
      { shade: '600', cssVariable: 'var(--color-solstice-salem-600)', hex: '#065C3C' },
      { shade: '700', cssVariable: 'var(--color-solstice-salem-700)', hex: '#054732' },
      { shade: '800', cssVariable: 'var(--color-solstice-salem-800)', hex: '#052E25' },
      { shade: '900', cssVariable: 'var(--color-solstice-salem-900)', hex: '#041F1C' },
      { shade: '950', cssVariable: 'var(--color-solstice-salem-950)', hex: '#02100F' },
    ],
  },
  {
    name: 'Orange',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-orange-50)', hex: '#FFF8F4' },
      { shade: '100', cssVariable: 'var(--color-solstice-orange-100)', hex: '#FFEFE6' },
      { shade: '200', cssVariable: 'var(--color-solstice-orange-200)', hex: '#FFDBC7' },
      { shade: '300', cssVariable: 'var(--color-solstice-orange-300)', hex: '#FFC4A3' },
      { shade: '400', cssVariable: 'var(--color-solstice-orange-400)', hex: '#E77F45' },
      { shade: '500', cssVariable: 'var(--color-solstice-orange-500)', hex: '#BE4501' },
      { shade: '600', cssVariable: 'var(--color-solstice-orange-600)', hex: '#8D3301' },
      { shade: '700', cssVariable: 'var(--color-solstice-orange-700)', hex: '#6D2800' },
      { shade: '800', cssVariable: 'var(--color-solstice-orange-800)', hex: '#481A00' },
      { shade: '900', cssVariable: 'var(--color-solstice-orange-900)', hex: '#311200' },
      { shade: '950', cssVariable: 'var(--color-solstice-orange-950)', hex: '#1A0A00' },
    ],
  },
  {
    name: 'Amber',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-amber-50)', hex: '#FFF9E5' },
      { shade: '100', cssVariable: 'var(--color-solstice-amber-100)', hex: '#FFF3CC' },
      { shade: '200', cssVariable: 'var(--color-solstice-amber-200)', hex: '#FFDF7B' },
      { shade: '300', cssVariable: 'var(--color-solstice-amber-300)', hex: '#FFCA21' },
      { shade: '400', cssVariable: 'var(--color-solstice-amber-400)', hex: '#C59304' },
      { shade: '500', cssVariable: 'var(--color-solstice-amber-500)', hex: '#8E6601' },
      { shade: '600', cssVariable: 'var(--color-solstice-amber-600)', hex: '#684B01' },
      { shade: '700', cssVariable: 'var(--color-solstice-amber-700)', hex: '#513A00' },
      { shade: '800', cssVariable: 'var(--color-solstice-amber-800)', hex: '#342600' },
      { shade: '900', cssVariable: 'var(--color-solstice-amber-900)', hex: '#231A00' },
      { shade: '950', cssVariable: 'var(--color-solstice-amber-950)', hex: '#120D00' },
    ],
  },
  {
    name: 'Royal',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-royal-50)', hex: '#F7F8FE' },
      { shade: '100', cssVariable: 'var(--color-solstice-royal-100)', hex: '#EEF2FD' },
      { shade: '200', cssVariable: 'var(--color-solstice-royal-200)', hex: '#D9E1FA' },
      { shade: '300', cssVariable: 'var(--color-solstice-royal-300)', hex: '#C3D0F8' },
      { shade: '400', cssVariable: 'var(--color-solstice-royal-400)', hex: '#7C97EE' },
      { shade: '500', cssVariable: 'var(--color-solstice-royal-500)', hex: '#4366D1' },
      { shade: '600', cssVariable: 'var(--color-solstice-royal-600)', hex: '#2F4A9F' },
      { shade: '700', cssVariable: 'var(--color-solstice-royal-700)', hex: '#22397F' },
      { shade: '800', cssVariable: 'var(--color-solstice-royal-800)', hex: '#132459' },
      { shade: '900', cssVariable: 'var(--color-solstice-royal-900)', hex: '#0C183F' },
      { shade: '950', cssVariable: 'var(--color-solstice-royal-950)', hex: '#060D21' },
    ],
  },
  {
    name: 'Violet',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-violet-50)', hex: '#FCF6FE' },
      { shade: '100', cssVariable: 'var(--color-solstice-violet-100)', hex: '#FAEFFE' },
      { shade: '200', cssVariable: 'var(--color-solstice-violet-200)', hex: '#F2D9FC' },
      { shade: '300', cssVariable: 'var(--color-solstice-violet-300)', hex: '#EBC2FA' },
      { shade: '400', cssVariable: 'var(--color-solstice-violet-400)', hex: '#CE78EC' },
      { shade: '500', cssVariable: 'var(--color-solstice-violet-500)', hex: '#A638CB' },
      { shade: '600', cssVariable: 'var(--color-solstice-violet-600)', hex: '#7D259A' },
      { shade: '700', cssVariable: 'var(--color-solstice-violet-700)', hex: '#63187C' },
      { shade: '800', cssVariable: 'var(--color-solstice-violet-800)', hex: '#440957' },
      { shade: '900', cssVariable: 'var(--color-solstice-violet-900)', hex: '#30053E' },
      { shade: '950', cssVariable: 'var(--color-solstice-violet-950)', hex: '#1C0324' },
    ],
  },
  {
    name: 'Magenta',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-magenta-50)', hex: '#FEF8FD' },
      { shade: '100', cssVariable: 'var(--color-solstice-magenta-100)', hex: '#FEEEFA' },
      { shade: '200', cssVariable: 'var(--color-solstice-magenta-200)', hex: '#FCD6F2' },
      { shade: '300', cssVariable: 'var(--color-solstice-magenta-300)', hex: '#FABFEB' },
      { shade: '400', cssVariable: 'var(--color-solstice-magenta-400)', hex: '#E670C8' },
      { shade: '500', cssVariable: 'var(--color-solstice-magenta-500)', hex: '#C02B9A' },
      { shade: '600', cssVariable: 'var(--color-solstice-magenta-600)', hex: '#911A74' },
      { shade: '700', cssVariable: 'var(--color-solstice-magenta-700)', hex: '#740F5B' },
      { shade: '800', cssVariable: 'var(--color-solstice-magenta-800)', hex: '#50033D' },
      { shade: '900', cssVariable: 'var(--color-solstice-magenta-900)', hex: '#3A002C' },
      { shade: '950', cssVariable: 'var(--color-solstice-magenta-950)', hex: '#23001B' },
    ],
  },
  {
    name: 'Forest',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-forest-50)', hex: '#F6F9F6' },
      { shade: '100', cssVariable: 'var(--color-solstice-forest-100)', hex: '#EDF4ED' },
      { shade: '200', cssVariable: 'var(--color-solstice-forest-200)', hex: '#D6E6D7' },
      { shade: '300', cssVariable: 'var(--color-solstice-forest-300)', hex: '#BED7BF' },
      { shade: '400', cssVariable: 'var(--color-solstice-forest-400)', hex: '#7DA57E' },
      { shade: '500', cssVariable: 'var(--color-solstice-forest-500)', hex: '#4C774C' },
      { shade: '600', cssVariable: 'var(--color-solstice-forest-600)', hex: '#375837' },
      { shade: '700', cssVariable: 'var(--color-solstice-forest-700)', hex: '#2A442A' },
      { shade: '800', cssVariable: 'var(--color-solstice-forest-800)', hex: '#1B2C1B' },
      { shade: '900', cssVariable: 'var(--color-solstice-forest-900)', hex: '#121D12' },
      { shade: '950', cssVariable: 'var(--color-solstice-forest-950)', hex: '#090F09' },
    ],
  },
  {
    name: 'Science',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-science-50)', hex: '#F3F9FF' },
      { shade: '100', cssVariable: 'var(--color-solstice-science-100)', hex: '#E8F4FF' },
      { shade: '200', cssVariable: 'var(--color-solstice-science-200)', hex: '#CBE5FF' },
      { shade: '300', cssVariable: 'var(--color-solstice-science-300)', hex: '#ABD5FF' },
      { shade: '400', cssVariable: 'var(--color-solstice-science-400)', hex: '#589FE6' },
      { shade: '500', cssVariable: 'var(--color-solstice-science-500)', hex: '#1E6EBF' },
      { shade: '600', cssVariable: 'var(--color-solstice-science-600)', hex: '#125190' },
      { shade: '700', cssVariable: 'var(--color-solstice-science-700)', hex: '#0B3F73' },
      { shade: '800', cssVariable: 'var(--color-solstice-science-800)', hex: '#022850' },
      { shade: '900', cssVariable: 'var(--color-solstice-science-900)', hex: '#001B38' },
      { shade: '950', cssVariable: 'var(--color-solstice-science-950)', hex: '#000F1F' },
    ],
  },
  {
    name: 'Sand',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-sand-50)', hex: '#FBF8F4' },
      { shade: '100', cssVariable: 'var(--color-solstice-sand-100)', hex: '#F9F2EC' },
      { shade: '200', cssVariable: 'var(--color-solstice-sand-200)', hex: '#F0DFD1' },
      { shade: '300', cssVariable: 'var(--color-solstice-sand-300)', hex: '#E5CDB8' },
      { shade: '400', cssVariable: 'var(--color-solstice-sand-400)', hex: '#AA9888' },
      { shade: '500', cssVariable: 'var(--color-solstice-sand-500)', hex: '#776B60' },
      { shade: '600', cssVariable: 'var(--color-solstice-sand-600)', hex: '#584E47' },
      { shade: '700', cssVariable: 'var(--color-solstice-sand-700)', hex: '#433D36' },
      { shade: '800', cssVariable: 'var(--color-solstice-sand-800)', hex: '#2C2723' },
      { shade: '900', cssVariable: 'var(--color-solstice-sand-900)', hex: '#1D1A18' },
      { shade: '950', cssVariable: 'var(--color-solstice-sand-950)', hex: '#0F0D0C' },
    ],
  },
  {
    name: 'Lavender',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-lavender-50)', hex: '#FAF7FA' },
      { shade: '100', cssVariable: 'var(--color-solstice-lavender-100)', hex: '#F6F0F5' },
      { shade: '200', cssVariable: 'var(--color-solstice-lavender-200)', hex: '#EADDE9' },
      { shade: '300', cssVariable: 'var(--color-solstice-lavender-300)', hex: '#DFCBDE' },
      { shade: '400', cssVariable: 'var(--color-solstice-lavender-400)', hex: '#B68EB5' },
      { shade: '500', cssVariable: 'var(--color-solstice-lavender-500)', hex: '#8C5D8B' },
      { shade: '600', cssVariable: 'var(--color-solstice-lavender-600)', hex: '#674467' },
      { shade: '700', cssVariable: 'var(--color-solstice-lavender-700)', hex: '#513450' },
      { shade: '800', cssVariable: 'var(--color-solstice-lavender-800)', hex: '#352135' },
      { shade: '900', cssVariable: 'var(--color-solstice-lavender-900)', hex: '#241624' },
      { shade: '950', cssVariable: 'var(--color-solstice-lavender-950)', hex: '#130B12' },
    ],
  },
  {
    name: 'Clay',
    shades: [
      { shade: '50', cssVariable: 'var(--color-solstice-clay-50)', hex: '#FBF7F8' },
      { shade: '100', cssVariable: 'var(--color-solstice-clay-100)', hex: '#F8F2F2' },
      { shade: '200', cssVariable: 'var(--color-solstice-clay-200)', hex: '#ECDEDF' },
      { shade: '300', cssVariable: 'var(--color-solstice-clay-300)', hex: '#E2CCCE' },
      { shade: '400', cssVariable: 'var(--color-solstice-clay-400)', hex: '#C08E91' },
      { shade: '500', cssVariable: 'var(--color-solstice-clay-500)', hex: '#995C5F' },
      { shade: '600', cssVariable: 'var(--color-solstice-clay-600)', hex: '#754144' },
      { shade: '700', cssVariable: 'var(--color-solstice-clay-700)', hex: '#5E3133' },
      { shade: '800', cssVariable: 'var(--color-solstice-clay-800)', hex: '#421C1F' },
      { shade: '900', cssVariable: 'var(--color-solstice-clay-900)', hex: '#2E1314' },
      { shade: '950', cssVariable: 'var(--color-solstice-clay-950)', hex: '#180A0B' },
    ],
  },
];

// Map to look up primitive source from hex
const hexToPrimitive: Record<string, string> = {};
solsticePalettes.forEach(palette => {
  palette.shades.forEach(shade => {
    hexToPrimitive[shade.hex.toUpperCase()] = `${palette.name} ${shade.shade}`;
  });
});

// ============================================================================
// Copy Button Component
// ============================================================================

interface CopyButtonProps {
  text: string;
  children: ReactNode;
  className?: string;
}

function CopyButton({ text, children, className }: CopyButtonProps): ReactNode {
  const [copied, setCopied] = useState(false);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "group inline-flex items-center gap-1.5 hover:text-[var(--semantic-text-interaction-default)] transition-colors",
        className
      )}
      title={`Copy: ${text}`}
    >
      {children}
      <MaterialSymbol 
        name={copied ? "check" : "content_copy"} 
        size={12} 
        weight={300} 
        className={cn(
          "transition-opacity",
          copied ? "opacity-100 text-[var(--semantic-text-rag-success-default)]" : "opacity-0 group-hover:opacity-100 text-[var(--semantic-icon-subdued)]"
        )}
      />
    </button>
  );
}

// ============================================================================
// Primitives Table
// ============================================================================

interface PrimitivesTableProps {
  backgroundHex: string;
}

function PrimitivesTable({ backgroundHex }: PrimitivesTableProps): ReactNode {
  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        The Solstice color palette provides the raw color values. Click any value to copy.
      </p>

      {solsticePalettes.map((palette) => (
        <div key={palette.name} className="space-y-2">
          <h4 className="text-sm font-medium">{palette.name}</h4>
          <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left p-3 font-medium w-16">Color</th>
                  <th className="text-left p-3 font-medium w-20">Shade</th>
                  <th className="text-left p-3 font-medium">Hex</th>
                  <th className="text-left p-3 font-medium w-24">Contrast</th>
                </tr>
              </thead>
              <tbody>
                {palette.shades.map((shade) => {
                  const contrast = getContrastRatio(shade.hex, backgroundHex);
                  return (
                    <tr key={shade.shade} className="border-b last:border-0 hover:bg-[var(--semantic-surface-overlays-level1)]">
                      <td className="p-3">
                        <div 
                          className="w-10 h-10 rounded border border-[var(--semantic-stroke-subdued)]"
                          style={{ backgroundColor: shade.hex }}
                        />
                      </td>
                      <td className="p-3 font-medium">{shade.shade}</td>
                      <td className="p-3">
                        <CopyButton text={shade.hex}>
                          <code className="font-mono text-xs">{shade.hex}</code>
                        </CopyButton>
                      </td>
                      <td className="p-3 text-muted-foreground text-xs">{contrast.toFixed(2)}:1</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// Semantic Table
// ============================================================================

interface SemanticTableProps {
  tokenGroups: TokenGroup<ColorToken>[];
  backgroundHex: string;
  resolvedColors: Record<string, string>;
}

function SemanticTable({ tokenGroups, backgroundHex, resolvedColors }: SemanticTableProps): ReactNode {
  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        Semantic tokens provide meaning-based colors that adapt to light/dark themes. Click any value to copy.
      </p>

      {tokenGroups.map((group) => (
        <div key={group.name} className="space-y-2">
          <div>
            <h4 className="text-sm font-medium">{group.name}</h4>
            {group.description && (
              <p className="text-xs text-muted-foreground">{group.description}</p>
            )}
          </div>
          <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left p-3 font-medium w-16">Color</th>
                  <th className="text-left p-3 font-medium">Token</th>
                  <th className="text-left p-3 font-medium">Hex</th>
                  <th className="text-left p-3 font-medium w-24">Contrast</th>
                  <th className="text-left p-3 font-medium">Source</th>
                </tr>
              </thead>
              <tbody>
                {group.tokens.map((token) => {
                  const resolvedHex = resolvedColors[token.cssVariable] || '#000000';
                  const contrast = getContrastRatio(resolvedHex, backgroundHex);
                  const primitiveSource = hexToPrimitive[resolvedHex.toUpperCase()];
                  const displayName = token.name.split('.').pop() || token.name;

                  return (
                    <tr key={token.name} className="border-b last:border-0 hover:bg-[var(--semantic-surface-overlays-level1)]">
                      <td className="p-3">
                        <div 
                          className="w-10 h-10 rounded border border-[var(--semantic-stroke-subdued)]"
                          style={{ backgroundColor: token.cssVariable }}
                        />
                      </td>
                      <td className="p-3">
                        <CopyButton text={token.cssVariable}>
                          <code className="font-mono text-xs">{displayName}</code>
                        </CopyButton>
                      </td>
                      <td className="p-3">
                        <CopyButton text={resolvedHex}>
                          <code className="font-mono text-xs">{resolvedHex}</code>
                        </CopyButton>
                      </td>
                      <td className="p-3 text-muted-foreground text-xs">{contrast.toFixed(2)}:1</td>
                      <td className="p-3">
                        {primitiveSource ? (
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-4 h-4 rounded shrink-0 border border-[var(--semantic-stroke-subdued)]"
                              style={{ backgroundColor: resolvedHex }}
                            />
                            <span className="text-xs text-muted-foreground">{primitiveSource}</span>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// Main Color Preview Component
// ============================================================================

interface ColorTokenGroupsProps {
  tokenGroups: TokenGroup<ColorToken>[];
}

export function ColorTokenGroups({ tokenGroups }: ColorTokenGroupsProps): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const [backgroundHex, setBackgroundHex] = useState('#FFFFFF');
  const [resolvedColors, setResolvedColors] = useState<Record<string, string>>({});

  useEffect(() => {
    const resolveColors = (): void => {
      if (!containerRef.current) return;

      // Get background color
      const tempEl = document.createElement('div');
      tempEl.style.backgroundColor = `var(--semantic-surface-default, var(--background))`;
      document.body.appendChild(tempEl);
      const resolvedBg = getComputedStyle(tempEl).backgroundColor;
      document.body.removeChild(tempEl);
      
      if (resolvedBg && resolvedBg !== 'rgba(0, 0, 0, 0)') {
        setBackgroundHex(rgbToHex(resolvedBg));
      }

      // Resolve all semantic token colors
      const colors: Record<string, string> = {};
      tokenGroups.forEach(group => {
        group.tokens.forEach(token => {
          const tempDiv = document.createElement('div');
          tempDiv.style.backgroundColor = token.cssVariable;
          document.body.appendChild(tempDiv);
          const resolved = getComputedStyle(tempDiv).backgroundColor;
          document.body.removeChild(tempDiv);
          
          if (resolved && resolved !== 'rgba(0, 0, 0, 0)') {
            colors[token.cssVariable] = rgbToHex(resolved);
          }
        });
      });
      setResolvedColors(colors);
    };

    resolveColors();

    // Re-resolve on theme change
    const observer = new MutationObserver(resolveColors);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class', 'data-theme'] 
    });

    return () => observer.disconnect();
  }, [tokenGroups]);

  return (
    <div ref={containerRef}>
      <Tabs defaultValue="primitives" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="primitives">Primitives</TabsTrigger>
          <TabsTrigger value="semantic">Semantic</TabsTrigger>
        </TabsList>
        
        <TabsContent value="primitives">
          <PrimitivesTable backgroundHex={backgroundHex} />
        </TabsContent>
        
        <TabsContent value="semantic">
          <SemanticTable 
            tokenGroups={tokenGroups} 
            backgroundHex={backgroundHex}
            resolvedColors={resolvedColors}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
