import BlurFade from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Blocks,
  ExternalLink,
  Eye,
  Gauge,
  KeyRound,
  Mail,
  Phone,
  Scissors,
  Search,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const UTM_SOURCE = new URL(DATA.url).hostname;

function appendUtm(url: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set("utm_source", UTM_SOURCE);
    return u.toString();
  } catch {
    return url;
  }
}

const DIFFERENTIATORS = [
  {
    icon: Blocks,
    title: "100 % sur mesure",
    text: "Pas de template ni de thème générique bourré de plugins. Je pars de votre besoin réel. WordPress inclus quand c'est vraiment le bon choix.",
  },
  {
    icon: Gauge,
    title: "Rapide et optimisé",
    text: "Sites légers, notés au vert sur les Core Web Vitals. Meilleure expérience, meilleur référencement, plus de conversions.",
  },
  {
    icon: Search,
    title: "SEO dès le départ",
    text: "Analyse des mots-clés de votre activité et structure pensée pour Google avant même la première ligne de code.",
  },
  {
    icon: KeyRound,
    title: "Votre domaine à votre nom",
    text: "Le nom de domaine vous appartient : vous n'êtes jamais captif. Je gère l'hébergement, la sécurité et les sauvegardes — zéro souci technique pour vous.",
  },
  {
    icon: Scissors,
    title: "Juste ce qu'il faut",
    text: "Pas de fonctionnalités inutiles ni d'usine à gaz. Un site simple, efficace, sans maintenance lourde imposée.",
  },
  {
    icon: Eye,
    title: "Clair et transparent",
    text: "Devis détaillé, process lisible, un seul interlocuteur. Vous savez toujours ce que vous payez et pourquoi.",
  },
];

const ADDONS = [
  "Google Business Profile & avis",
  "Rédaction de contenu optimisé",
  "Multilingue",
  "Conformité RGPD, sans bandeau cookies lourd",
  "Accessibilité (RGAA)",
  "Réservation, prise de RDV, formulaires",
  "Reprise & refonte (avant / après)",
  "Maintenance à la demande",
];

export default function CreationSiteWeb() {
  return (
    <main className="min-h-dvh flex flex-col gap-20">
      {/* Hero */}
      <section id="hero" className="flex flex-col gap-6 pt-2">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground/70">
            Création de sites web · Sud Landes & Pays Basque
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl font-semibold tracking-tighter text-balance sm:text-5xl lg:text-6xl">
            Des sites modernes, optimisés, faits pour votre besoin.
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="max-w-[620px] text-lg text-muted-foreground text-pretty">
            Du sur mesure simple et efficace, pensé pour la performance et le
            référencement. Pas de solution imposée par défaut : la bonne
            technologie pour votre projet, et un site dont vous gardez la
            maîtrise.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Discutons de votre projet
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <p className="text-sm text-muted-foreground text-pretty">
              Chaque site est unique. Projets à partir de&nbsp;
              <span className="font-medium text-foreground">1 000&nbsp;€</span>,
              devis gratuit selon votre besoin.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="flex flex-col gap-6">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <h2 className="text-xl font-bold">Réalisations</h2>
        </BlurFade>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          {DATA.projects.map((project, index) => {
            const featured = "featured" in project && project.featured;
            const muted = "muted" in project && project.muted;
            return (
              <BlurFade
                key={project.name}
                delay={BLUR_FADE_DELAY + index * 0.05}
                inView
                className={cn(featured && "sm:col-span-2")}
              >
                <article
                  className={cn(
                    "flex h-full flex-col gap-2.5 rounded-xl border bg-background p-3 sm:p-4 transition",
                    featured
                      ? "border-primary/40 ring-2 ring-primary/30"
                      : "border-border ring-2 ring-border/20",
                    muted && "opacity-60 hover:opacity-100"
                  )}
                >
                  {"image" in project && project.image && (
                    <a
                      href={appendUtm(project.links[0].url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mx-3 -mt-3 sm:-mx-4 sm:-mt-4 mb-1 block overflow-hidden rounded-t-xl"
                    >
                      <img
                        src={project.image}
                        alt={`Capture du site ${project.name}`}
                        width={800}
                        height={420}
                        loading="lazy"
                        className="aspect-[1.9/1] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </a>
                  )}
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="min-w-0 flex flex-col gap-0.5">
                      <span className="font-mono text-sm font-semibold truncate">
                        {project.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={appendUtm(link.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-foreground transition hover:bg-muted/40 min-w-0"
                      >
                        <ExternalLink className="size-3 flex-none" aria-hidden />
                        <span className="truncate">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </article>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* Ma façon de faire */}
      <section id="methode" className="flex flex-col gap-6">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <h2 className="text-xl font-bold">Ma façon de faire</h2>
        </BlurFade>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item, index) => (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY + index * 0.05} inView>
              <div className="flex h-full flex-col gap-2 rounded-xl border border-border bg-background p-4 ring-2 ring-border/20">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 flex-none items-center justify-center rounded-lg border border-border bg-muted/40">
                    <item.icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="font-semibold leading-tight">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground text-pretty">
                  {item.text}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Ce que je peux faire en plus */}
      <section id="services" className="flex flex-col gap-6">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <h2 className="text-xl font-bold">Ce que je peux faire en plus</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <div className="flex flex-wrap gap-2">
            {ADDONS.map((addon) => (
              <span
                key={addon}
                className="rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground ring-2 ring-border/20"
              >
                {addon}
              </span>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Contact */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <div className="relative overflow-hidden rounded-xl border p-10">
            <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 overflow-hidden rounded-xl">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Discutons de votre projet
              </h2>
              <p className="mx-auto max-w-lg text-muted-foreground text-balance">
                Parlez-moi de votre activité et de vos besoins. Devis gratuit et
                sans engagement, réponse rapide.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${DATA.contact.tel}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium transition hover:bg-muted/40"
                >
                  <Phone className="size-4" aria-hidden />
                  {DATA.contact.telDisplay}
                </a>
                <a
                  href={DATA.contact.social.email.url}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium transition hover:bg-muted/40"
                >
                  <Mail className="size-4" aria-hidden />
                  {DATA.contact.email}
                </a>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Lien vers le portfolio perso */}
      <BlurFade delay={BLUR_FADE_DELAY} inView>
        <div className="flex justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            En savoir plus sur mon parcours
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </BlurFade>
    </main>
  );
}
