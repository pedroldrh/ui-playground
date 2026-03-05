import { LiquidMetalButton } from "@/components/ui/liquid-metal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-white p-8 dark:bg-black">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        UI Playground
      </h1>

      <section className="flex flex-col items-center gap-10">
        <h2 className="text-lg font-medium text-neutral-500">
          Liquid Metal Buttons
        </h2>

        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Small
            </span>
            <LiquidMetalButton size="sm">Get Started</LiquidMetalButton>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Medium
            </span>
            <LiquidMetalButton size="md">Explore More</LiquidMetalButton>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Large
            </span>
            <LiquidMetalButton size="lg">Launch Project</LiquidMetalButton>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              With Icon
            </span>
            <LiquidMetalButton size="md" icon={<span>⚡</span>}>
              Power Up
            </LiquidMetalButton>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Custom Colors
            </span>
            <LiquidMetalButton
              size="md"
              metalConfig={{ colorBack: "#1a1a2e", colorTint: "#e94560" }}
            >
              Premium
            </LiquidMetalButton>
          </div>
        </div>
      </section>
    </div>
  );
}
