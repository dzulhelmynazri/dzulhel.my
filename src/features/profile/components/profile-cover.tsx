import { BrandContextMenu } from "@/components/brand-context-menu";
// import { DzulhelmyMark } from "@/components/dzulhelmy-mark";
// import { AnimatedPrompt } from "@/components/keycap/animated-prompt";
import { DNKeycap } from "@/components/keycap/dn-keycap";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        <div className="mt-[-50px] flex size-40 sm:mt-[-80px]">
          <DNKeycap />
        </div>
      </div>
    </BrandContextMenu>
  );
}
