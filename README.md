# zepolclem.dev

Portfolio personnel de Clément Lopez, développeur web full-stack.

Live: **[zepolclem.dev](https://zepolclem.dev)**

## Stack

- [Astro 6](https://astro.build) — static-first
- [React 19](https://react.dev) — hydratation sélective sur la home
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Vercel](https://vercel.com) — déploiement statique

Forké depuis [Starfolio](https://github.com/webrating/starfolio) (template) puis dépouillé : adapter Cloudflare retiré, blog supprimé, contenu remplacé.

## Configuration

Tout le contenu vit dans deux fichiers :

| Fichier | Contenu |
| --- | --- |
| `src/data/resume.tsx` | Nom, bio, expériences, formation, skills, contacts |
| `src/data/config.ts` | URL du site, SEO, thème (light/dark), taille de police |

Pour ajouter un skill avec icône : voir `src/components/ui/svgs/` (composants SVG inline depuis [iconify](https://icon-sets.iconify.design)).

## Développement local

```bash
pnpm install
pnpm dev      # serveur dev sur http://localhost:4321
pnpm build    # build statique vers dist/
pnpm preview  # preview du build
```

Node ≥ 22.12.

## Déploiement

Push sur `master` → Vercel build auto (config dans `vercel.json` : security headers + cache assets).

## License

MIT (template d'origine).
