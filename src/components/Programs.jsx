import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteData } from "@/data/siteData";
import { Check } from "lucide-react";

export function Programs() {
  return (
    <section id="programs">
      <div className="section-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Offerings</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Structured learning tracks for different levels
          </h2>
          {/* <p className="mt-3 text-slate-700">
            The program list below is data-driven, so you can update the
            learning focus without touching the layout.
          </p> */}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {siteData.offerings.map((program) => (
            <Card
              key={program.title}
              className="rounded-[2rem] border-slate-200/80 bg-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-sky-100 text-sky-700">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-slate-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
