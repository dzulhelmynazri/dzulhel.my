import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        className="h-28 w-full text-border"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 260 180"
      >
        <path
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          d="M23.8669 164.902V141.862H0.570938V69.9261H23.8669V46.6301H93.7549V0.294067H119.611V141.862H96.0589V164.902H23.8669ZM26.4269 139.302H93.4989V72.2301H26.4269V139.302ZM145.571 164.902V46.6301H241.059V69.9261H264.611V164.902H238.499V72.2301H171.427V164.902H145.571Z"
        />
      </svg>

      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404</h1>

      <Button variant="default" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
