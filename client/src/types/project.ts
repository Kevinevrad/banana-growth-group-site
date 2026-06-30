export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;

  title: string;

  client: string;

  sector: string;

  description: string;

  image: string;

  tags: string[];

  metrics: ProjectMetric[];
}
