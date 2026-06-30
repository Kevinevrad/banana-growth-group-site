import type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "project-1",

    slug: "transformation-digitale-pme",

    title: "Transformation digitale d'une PME",

    client: "Entreprise confidentielle",

    sector: "Industrie",

    description:
      "Refonte de la stratégie commerciale et digitale permettant d'accélérer durablement la croissance.",

    image: "/images/projects/project-01.webp",

    tags: ["Growth", "CRM", "Transformation"],

    metrics: [
      {
        label: "Croissance",
        value: "+38%",
      },
      {
        label: "Leads",
        value: "+62%",
      },
      {
        label: "Conversion",
        value: "+27%",
      },
    ],
  },

  {
    id: "project-2",

    slug: "strategie-commerciale",

    title: "Structuration commerciale B2B",

    client: "Entreprise confidentielle",

    sector: "Services",

    description:
      "Définition d'une nouvelle stratégie commerciale avec mise en place d'indicateurs de performance.",

    image: "/images/projects/project-02.webp",

    tags: ["Sales", "B2B", "Growth"],

    metrics: [
      {
        label: "Pipeline",
        value: "+54%",
      },
      {
        label: "RDV",
        value: "+43%",
      },
      {
        label: "CA",
        value: "+31%",
      },
    ],
  },
];
