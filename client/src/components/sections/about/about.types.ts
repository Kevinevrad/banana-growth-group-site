export interface AboutSectionProps {
  eyebrow: string;

  title: string;

  description: string;

  values: Array<{
    title: string;
    // icon: Array<ReactNode>;
    description: string;
  }>;
}
