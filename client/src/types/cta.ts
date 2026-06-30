export interface CTAContent {
  title: string;
  description: string;

  primaryAction: {
    label: string;
    href: string;
  };

  secondaryAction: {
    label: string;
    href: string;
  };
}
