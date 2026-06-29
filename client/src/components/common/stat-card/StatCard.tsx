// src/components/common/stat-card/StatCard.tsx

import { cn } from "@/lib/utils";
import { AnimatedCounter } from "../animated-counter";
import type { StatCardProps } from "./stat-card.types";

export function StatCard({
  title,
  description,
  icon: Icon,
  counter,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm",
        "transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md",
        "dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
    >
      {/* Conteneur Icône + Titre */}
      <div className="flex items-center gap-4">
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-100 dark:bg-amber-950/50 dark:text-amber-400">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        )}
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {title}
        </p>
      </div>

      {/* Valeur Numérique Principale */}
      <div className="mt-2">
        <AnimatedCounter
          {...counter}
          className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
        />
      </div>

      {/* Description optionnelle */}
      {description && (
        <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
          {description}
        </p>
      )}

      {/* Effet visuel premium de bordure discrète au survol */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-transparent transition-colors duration-300 group-hover:border-amber-500/10" />
    </div>
  );
}
