# I AM TIKIH

Site vitrine de **Tikih Ranjisoa** — Content Creator, Travel & Lifestyle,
basé à Antananarivo (Madagascar).
Inspiration de mise en page : anoraktravel.com.

Les textes proviennent du média-kit `Infos Tikih Mediakit.pdf`.
**Exclus volontairement** : NIF / STAT / RCS et les statistiques Facebook.

## Structure

```
Tikih/
├── frontend/     Angular 21 (fait)
└── backend/      Node.js (à venir)
```

## Lancer le front

```bash
cd frontend
npm install
npm start          # http://localhost:4200
npm run build      # build de production → dist/frontend
```

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| **Tous les textes** (bio, key topics, chiffres, partenaires, contact…) | `frontend/src/app/core/data/site-content.ts` |
| Couleurs, typographies, échelles de taille | `frontend/src/styles/_tokens.scss` |
| Images servies par le site | `frontend/public/assets/img/` |
| Pages | `frontend/src/app/pages/{home,references,contact,not-found}` |
| Header / footer / marquee / lecteur YouTube | `frontend/src/app/components/` |
| Vidéos mises en avant | `VIDEOS` dans `site-content.ts` (l'id est la partie après `watch?v=`) |
| Logos partenaires | `frontend/public/assets/img/partners/` + `PARTNER_GROUPS` dans `site-content.ts` |
| Routes | `frontend/src/app/app.routes.ts` |

## Pages

- `/` — hero, bandeau défilant, à propos, key topics, **films (YouTube)**,
  communauté (+160K), statistiques 2026 (Instagram + TikTok), références,
  matériel, feed Instagram, CTA
- `/references` — deux rubans de logos défilants, partenaire principal 2026,
  puis les trois familles de partenaires en grilles de logos (48 au total)
- `/contact` — formulaire + e-mail, WhatsApp, localisation
- `**` — 404

## Direction artistique

Palette « océan Indien ».

| Token | Valeur | Rôle |
|---|---|---|
| `--abyss` | `#04222E` | grand fond |
| `--ink` | `#0A3444` | bleu profond — texte et fonds sombres |
| `--ocean` | `#14607A` | bleu médian |
| `--aqua` | `#19C8C1` | lagon — accent principal |
| `--spray` | `#7FD8D3` | écume turquoise |
| `--coral` | `#FF6F52` | corail |
| `--sunset` | `#FFB066` | heure dorée |
| `--cream` | `#F6EFE4` | sable |
| `--cream-deep` | `#EDE0CC` | sable mouillé |
| `--paper` | `#FCFAF6` | écume claire |

Les transparences passent par les canaux RVB (`--ink-rgb`, `--cream-rgb`…) :
changer une couleur dans `_tokens.scss` met tout le site à jour, voiles et
dégradés compris.

| | |
|---|---|
| Titres | Sofia Sans Extra Condensed, 800, majuscules |
| Corps | Sora, 300 |

## Images

Versions web générées depuis `frontend/src/assets/` (fichiers d'origine) :

| Fichier servi | Source |
|---|---|
| `hero.jpg` | `DJI_20250910070504_0686_D.JPG` (drone) |
| `about.jpg` | `IMG_5964 Copy 2.JPG` (portrait) |
| `topics/1.jpg`, `topics/3.jpg`, `topics/2.jpg` | triptyque « Key topics » (9:16), affiché dans cet ordre — sources : `1.JPG`, `3.png`, `2.JPG` |
| `community.jpg` | `dji_fly_…141548_0573…photo.JPG` (non utilisé pour l'instant) |
| `gear.jpg` / `gear-2.jpg` | extraites de la page 8 du média-kit |
| `gallery/01–03.jpg` | `IMG_0901`, `IMG_9680`, `IMG_9254` |
| `partners/*.png` | 48 logos extraits de `Infos Tikih Mediakit (1).pdf` |

Pour remplacer une image : déposer le fichier au même nom dans
`frontend/public/assets/img/`. Tant qu'un fichier manque, un dégradé lagon
s'affiche à la place (aucune image cassée).

> Les fichiers d'origine (~1,9 Go de photos et vidéos) sont dans
> `frontend/src/assets/`. Ils ne sont **pas** inclus dans le build, mais mieux
> vaut les sortir de `src/` à terme (par ex. `Tikih/medias-sources/`) pour
> alléger le dossier de l'application.

## Reste à faire (back Node)

- `POST /api/contact` → `frontend/src/app/pages/contact/contact.ts` (`submit`)
- `POST /api/newsletter` → `frontend/src/app/components/footer/footer.ts` (`subscribe`)

Les deux formulaires fonctionnent déjà côté interface (validation + accusé de
réception) ; il ne reste qu'à remplacer le corps de ces deux méthodes par un
appel `HttpClient`.
