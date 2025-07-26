import { Glass } from "@/ui/glass-effect";
import IndustriesWeServe from "./IndustriesWeServe";

function GlassDemo() {
  return (
    <div className="h-full w-full flex bg-black items-center justify-center p-4">
      <div className="relative w-[400px] h-[400px] rounded-xl overflow-hidden">
        <div className="w-full h-full overflow-auto">
          <IndustriesWeServe />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Glass>
            <span className="absolute inset-0 flex items-center justify-center text-white/80 font-medium">
              Scroll to see effect
            </span>
          </Glass>
        </div>
      </div>
    </div>
  )
}

export { GlassDemo }