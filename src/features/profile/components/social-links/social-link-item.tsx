import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import type { SocialLink } from "@/features/profile/types/social-links";
import { cn } from "@/lib/utils";

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  const isComponent = typeof icon === "function";
  const IconComponent = isComponent ? icon : null;

  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="relative size-12 shrink-0">
        {isComponent && IconComponent ? (
          <IconComponent className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-lg" />
        ) : (
          <Image
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
            src={icon as unknown as string}
            alt={title}
            width={40}
            height={40}
            quality={100}
            unoptimized
          />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
