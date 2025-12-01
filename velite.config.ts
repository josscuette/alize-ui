import { defineConfig, s } from 'velite';

export default defineConfig({
  collections: {
    components: {
      name: 'Component',
      pattern: 'components/**/*.md',
      schema: s.object({
        title: s.string(),
        description: s.string(),
        category: s.enum(['atoms', 'molecules', 'organisms', 'dataviz']),
        component: s.string(), // Nom du composant (ex: 'Button')
        importPath: s.string(), // Chemin d'import (ex: '@/components/ui/button')
        props: s.array(
          s.object({
            name: s.string(),
            type: s.string(),
            default: s.string().optional(),
            required: s.boolean().optional(),
            description: s.string().optional(),
          })
        ).optional(),
        examples: s.array(
          s.object({
            title: s.string(),
            description: s.string().optional(),
            code: s.string(),
            preview: s.string().optional(), // Code pour le preview si différent
          })
        ).optional(),
        variants: s.array(
          s.object({
            name: s.string(),
            description: s.string().optional(),
            code: s.string(),
          })
        ).optional(),
        sizes: s.array(
          s.object({
            name: s.string(),
            description: s.string().optional(),
            code: s.string(),
          })
        ).optional(),
        states: s.array(
          s.object({
            name: s.string(),
            description: s.string().optional(),
            code: s.string(),
          })
        ).optional(),
        bestPractices: s.array(s.string()).optional(),
        do: s.array(s.string()).optional(),
        dont: s.array(s.string()).optional(),
        accessibility: s.string().optional(),
      }),
    },
  },
});

