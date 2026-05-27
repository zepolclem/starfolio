import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Astro } from "@/components/ui/svgs/astro";
import { Symfony } from "@/components/ui/svgs/symfony";
import { Vuejs } from "@/components/ui/svgs/vuejs";
import { Php } from "@/components/ui/svgs/php";
import { Wordpress } from "@/components/ui/svgs/wordpress";
import { Prestashop } from "@/components/ui/svgs/prestashop";
import { Cakephp } from "@/components/ui/svgs/cakephp";
import { ApiPlatform } from "@/components/ui/svgs/apiPlatform";

export const DATA = {
  name: "Clément Lopez",
  initials: "CL",
  url: "https://zepolclem.dev",
  location: "Bayonne, FR",
  locationLink: "https://www.google.com/maps/place/Bayonne",
  description:
    "Développeur web full-stack en formation IA. Back-end Symfony / API Platform, fronts Vue.js et React. E-commerce, outils internes et sites sur mesure.",
  summary:
    "Développeur web depuis 2015, basé au Pays Basque. Je conçois et maintiens des applications web full-stack — back-ends Symfony / API Platform, fronts Vue.js / React / Next.js, e-commerce PrestaShop. Plus de 8 ans d'expérience entre [agence, start-up](/#work) et [auto-entreprise](/#work). Actuellement [en formation Développeur IA chez Alyra](/#education).",
  avatarUrl: "/photos/picofme.jpeg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "À propos" },
    work: {
      order: 2,
      enabled: true,
      heading: "Expérience",
      presentLabel: "Aujourd'hui",
    },
    education: { order: 3, enabled: true, heading: "Formation" },
    skills: { order: 4, enabled: true, heading: "Compétences" },
    projects: { order: 5, enabled: true, heading: "Projets" },
    contact: {
      order: 6,
      enabled: true,
      label: "Contact",
      heading: "Me contacter",
      text: "Une question, un projet ? Envoyez-moi un email ou un message sur LinkedIn — je réponds dès que possible.",
    },
  },
  skills: [
    { name: "PHP", icon: Php },
    { name: "Symfony", icon: Symfony },
    { name: "API Platform", icon: ApiPlatform },
    { name: "Vue.js", icon: Vuejs },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Astro", icon: Astro },
    { name: "PrestaShop", icon: Prestashop },
    { name: "WordPress", icon: Wordpress },
    { name: "CakePHP", icon: Cakephp },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [{ href: "/", icon: House, label: "Accueil" }],
  contact: {
    email: "lopez.clmnt@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zepolclem",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lopezclmnt",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:lopez.clmnt@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mcfly Info Concept",
      href: "",
      badges: ["Auto-entrepreneur"],
      location: "France",
      title: "Développeur",
      start: "Septembre 2017",
      end: undefined,
      description:
        "En parallèle de mon activité salariée, j'accompagne TPE et indépendants dans la conception, le développement et la maintenance de leurs solutions numériques. Sites vitrines sur mesure orientés performance, accessibilité et SEO. Full-stack Symfony, Astro.build et WordPress selon le besoin. Maintenance informatique : diagnostic, réparation PC/Mac, installation et sécurisation.",
    },
    {
      company: "Actuelburo",
      href: "",
      badges: [],
      location: "Narrosse, Nouvelle-Aquitaine",
      title: "Lead Développeur",
      start: "Mars 2024",
      end: "Septembre 2025",
      description:
        "Intégré au pôle Génie Logiciel. Reprise technique de l'activité e-commerce et maintenance évolutive de projets web marketing. Refonte et sécurisation de l'infrastructure PrestaShop / Symfony. Maintenance et évolutions de plusieurs sites WordPress, PrestaShop et CakePHP. Développement de nouvelles interfaces Vue.js (front + liaison API). Introduction de bonnes pratiques de versioning et d'environnement local.",
    },
    {
      company: "Urbanease",
      href: "",
      badges: [],
      location: "Bayonne, Nouvelle-Aquitaine",
      title: "Lead Développeur web back-end",
      start: "Juillet 2021",
      end: "Septembre 2023",
      description:
        "Start-up dans la prospection immobilière. Responsable du back-end de 3 applis web et de toute la chaîne DevOps, en forte autonomie. Modernisation et refactoring d'un legacy Symfony / API Platform. Conception et déploiement d'APIs RESTful robustes consommées par le front React / Next.js. Environnements Docker pour dev et staging, GitHub Actions, optimisation cache et requêtes PostgreSQL. Stack : PHP (Symfony, API Platform), Docker, PostgreSQL, GitHub Actions, React.js, Next.js, Linux, Nginx.",
    },
    {
      company: "Wild Code School",
      href: "https://www.wildcodeschool.com",
      badges: [],
      location: "Anglet, Nouvelle-Aquitaine",
      title: "Formateur Symfony",
      start: "Février 2021",
      end: "Mai 2021",
      description:
        "Formateur sur le parcours Développeur PHP / Symfony. Pédagogie hybride par projets, accompagnement d'élèves en reconversion professionnelle Tech.",
    },
    {
      company: "CTI Santé",
      href: "https://www.ctisante.com",
      badges: [],
      location: "Soorts-Hossegor, Aquitaine",
      title: "Développeur",
      start: "Octobre 2019",
      end: "Décembre 2020",
      description:
        "Développement front-end React.js + Redux.js. Maintenance back-end d'un framework PHP maison + base PostgreSQL. Support technique logiciel N2.",
    },
    {
      company: "KN'Design",
      href: "",
      badges: [],
      location: "Bordeaux, Aquitaine",
      title: "Développeur web",
      start: "Février 2017",
      end: "Mars 2017",
      description:
        "Maintenance et ajout de fonctionnalités sur des sites WordPress et PHP / MySQL.",
    },
    {
      company: "HackSchooling France",
      href: "",
      badges: [],
      location: "Soorts, Nouvelle-Aquitaine",
      title: "Développeur",
      start: "Mai 2016",
      end: "Juin 2016",
      description:
        "Intégration du back-office d'un site WordPress dans une application iOS.",
    },
  ],
  education: [
    {
      school: "Alyra",
      href: "https://alyra.fr",
      degree: "Formation Développeur IA (en cours)",
      start: "2026",
      end: "Présent",
    },
    {
      school: "Wild Code School",
      href: "https://www.wildcodeschool.com",
      degree: "Développeur PHP / Symfony 4",
      start: "2019",
      end: "2019",
    },
    {
      school: "Lycée Gustave Eiffel",
      href: "",
      degree: "BTS Services Informatiques aux Organisations",
      start: "2015",
      end: "2017",
    },
    {
      school: "Lycée St Joseph Hasparren",
      href: "",
      degree: "Baccalauréat Scientifique — spécialité Sciences Physiques",
      start: "2013",
      end: "2014",
    },
  ],
  projects: [
    {
      name: "govroumvroum.fr",
      links: [{ label: "Site", url: "https://govroumvroum.fr" }],
      description:
        "Application web gratuite de suivi d'entretien voiture : carnet d'entretien numérique, centralisation des factures garage, rappels vidange et contrôle technique.",
      tech: ["Astro", "TypeScript"],
      category: "Website",
      featured: true,
    },
    {
      name: "samatheo.fr",
      links: [{ label: "Site", url: "https://samatheo.fr" }],
      description:
        "Site vitrine d'un prestataire de sorties pêche et balades en bateau à Saint-Jean-de-Luz. Réservation, descriptifs des sorties (pêche sportive, coucher de soleil, observation des cétacés), bilingue FR/EN.",
      tech: ["Astro", "Directus", "TypeScript"],
      category: "Website",
      group: "sorties-en-mer",
    },
    {
      name: "cappecheloisirs.com",
      links: [{ label: "Site", url: "https://cappecheloisirs.com" }],
      description:
        "Site vitrine de Cap Pêche Loisirs : sorties pêche en mer et balades nature depuis Capbreton et Hossegor. Catalogue des prestations + tunnel de contact.",
      tech: ["Astro", "Directus"],
      category: "Website",
      group: "sorties-en-mer",
    },
    {
      name: "seixo-immobilier.fr",
      links: [{ label: "Site", url: "https://seixo-immobilier.fr" }],
      description:
        "Agence immobilière (Landes / Pays Basque) — annonces, estimations, contenu blog. Personnalisation du thème, formulaires de contact et fiches biens.",
      tech: ["WordPress", "PHP"],
      category: "Website",
    },
    {
      name: "prima-pizza-capbreton.fr",
      links: [{ label: "Site", url: "https://prima-pizza-capbreton.fr" }],
      description:
        "Pizzeria artisanale (Capbreton/Hossegor) — carte, prises de commande à emporter / livraison, intégration Google Maps.",
      tech: ["Astro", "HTML", "CSS"],
      category: "Website",
    },
    {
      name: "izpoledance.fr",
      links: [{ label: "Site", url: "https://izpoledance.fr" }],
      description:
        "Studio de pole dance — cours, événements (EVJF), formations instructeurs. Site vitrine + plannings.",
      tech: ["WordPress", "PHP"],
      category: "Website",
      muted: true,
    },
  ],
} as const;
