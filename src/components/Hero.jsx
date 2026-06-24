import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";
import { ArrowRight, BookOpenText, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="pt-8">
      <div className="section-shell">
        <div className="glass-panel grid gap-10 rounded-[2rem] p-6 md:grid-cols-[1.05fr_0.95fr] md:p-10">
          <div className="flex flex-col justify-center">
            <div className="section-kicker flex items-center gap-2">
              <Sparkles className="size-4" />
              SMR Learning Studio
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              {siteData.brand.professorName}
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-600">
              {siteData.brand.designation}
              <span className="mx-2 text-slate-400">•</span>
              {siteData.brand.department}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              {siteData.brand.bioSketch}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6">
                <a href="#programs">
                  Explore offerings <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href="#contact">
                  <BookOpenText />
                  Contact details
                </a>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {siteData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm"
                >
                  <p className="text-3xl font-semibold text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-200/60 via-white to-blue-100/50 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 shadow-2xl shadow-slate-950/15">
              <img
                src={siteData.brand.image}
                alt="Prof. U S N Raju"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl ">
              {/* <p className="text-sm font-semibold text-slate-950">
                {siteData.brand.tagline}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Teaching quantum, image processing, and core CS with clarity and
                structure.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
