import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteData } from "@/data/siteData";

export function About() {
  return (
    <section id="about">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="section-kicker">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Academic profile and research focus
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              {siteData.brand.bioSketch}
            </p>

            <div className="mt-8 space-y-3">
              {siteData.info.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4"
                >
                  <span className="text-sm font-medium text-slate-500">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-right text-sm font-medium text-slate-950 underline decoration-slate-300 underline-offset-4"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-right text-sm font-medium text-slate-950">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="rounded-[2rem] border-slate-200/80 bg-white/80 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Key notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {siteData.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-slate-950 p-5 text-white"
                    >
                      <p className="text-3xl font-semibold">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-300">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-slate-200/80 bg-white/80 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Research areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {siteData.researchAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-slate-800"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
