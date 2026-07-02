import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;

  title: string;

  description?: string;

  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
      )}
    >
      {eyebrow && (
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-brand-yellow-700
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          mt-4
          text-4xl
          font-bold
          tracking-tight
          text-brand-dark
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-[1.6rem]
            leading-8
            text-slate-600
          "
        >
          {description}
        </p>
      )}
    </header>
  );
}
