'use client';

import { useParams, notFound } from 'next/navigation';
import { FoundationTemplate } from '../components/foundation-template';
import { getFoundationBySlug } from '../data/foundations';
import { ColorTokenGroups } from '../components/previews/color-preview';
import type { TokenGroup, FoundationToken, ColorToken } from '../types';

// ============================================================================
// Topic-specific renderers
// ============================================================================

/**
 * Render function registry for different foundation types
 * Each foundation can have its own visualization style
 */
const tokenGroupRenderers: Record<string, (tokenGroups: TokenGroup<FoundationToken>[]) => React.ReactNode> = {
  color: (tokenGroups) => (
    <ColorTokenGroups tokenGroups={tokenGroups as TokenGroup<ColorToken>[]} />
  ),
  // Add more renderers here as new foundations are created:
  // typography: (tokenGroups) => <TypographyTokenGroups tokenGroups={tokenGroups} />,
  // spacing: (tokenGroups) => <SpacingTokenGroups tokenGroups={tokenGroups} />,
  // radius: (tokenGroups) => <RadiusTokenGroups tokenGroups={tokenGroups} />,
  // shadow: (tokenGroups) => <ShadowTokenGroups tokenGroups={tokenGroups} />,
  // animation: (tokenGroups) => <AnimationTokenGroups tokenGroups={tokenGroups} />,
  // states: (tokenGroups) => <StatesTokenGroups tokenGroups={tokenGroups} />,
};


// ============================================================================
// Default renderer for foundations without custom visualization
// ============================================================================

function DefaultTokenGroups({ tokenGroups }: { tokenGroups: TokenGroup<FoundationToken>[] }): React.ReactNode {
  return (
    <div className="space-y-6">
      {tokenGroups.map((group) => (
        <div key={group.name} className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium mb-2">{group.name}</h3>
          {group.description && (
            <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
          )}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 text-xs font-semibold">Token</th>
                  <th className="text-left p-2 text-xs font-semibold">CSS Variable</th>
                  <th className="text-left p-2 text-xs font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {group.tokens.map((token) => (
                  <tr key={token.name} className="border-b">
                    <td className="p-2">
                      <code className="text-xs bg-muted px-1 rounded">{token.name}</code>
                    </td>
                    <td className="p-2">
                      <code className="text-xs text-muted-foreground">{token.cssVariable}</code>
                    </td>
                    <td className="p-2 text-xs text-muted-foreground">
                      {token.description || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// Page Component
// ============================================================================

export default function FoundationTopicPage(): React.ReactNode {
  const params = useParams();
  const topic = params.topic as string;

  // Get foundation data
  const foundation = getFoundationBySlug(topic);

  if (!foundation) {
    notFound();
  }

  // Get the appropriate renderer for this foundation type
  const renderTokenGroups = tokenGroupRenderers[topic] || ((tokenGroups: TokenGroup<FoundationToken>[]) => (
    <DefaultTokenGroups tokenGroups={tokenGroups} />
  ));

  return (
    <FoundationTemplate
      foundation={foundation}
      renderTokenGroups={renderTokenGroups}
    />
  );
}

