import { BrandContextMenu } from "@/components/brand-context-menu";
import { AnimatedPromptLeft } from "@/components/keycap/animated-prompt-left";
import { AnimatedPromptRight } from "@/components/keycap/animated-prompt-right";
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
        <div className="relative">
          <div className="md: absolute bottom-[-80px] left-[-30px] z-10 rotate-27 md:bottom-[-88px] md:left-[-45px]">
            <AnimatedPromptLeft />
          </div>
          <div className="absolute right-[-36px] bottom-[-79px] z-10 rotate-[-28deg] md:right-[-35px] md:bottom-[-90px]">
            <AnimatedPromptRight />
          </div>
          <div className="mt-[-50px] flex size-40 sm:mt-[-80px]">
            <DNKeycap />
          </div>
        </div>
      </div>
    </BrandContextMenu>
  );
}
