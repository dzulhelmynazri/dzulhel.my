import Image from "next/image";
import React from "react";

import type { Education } from "../../types/educations";
import { EducationPositionItem } from "./education-position-item";

export function EducationsItem({ education }: { education: Education }) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {education.institutionLogo ? (
            <Image
              src={education.institutionLogo}
              alt={education.institutionName}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="text-lg leading-snug font-medium">
          {education.institutionName}
        </h3>

        {education.isCurrentInstitution && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Institution</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {education.positions.map((position) => (
          <EducationPositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}
