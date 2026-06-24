import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteData } from "@/data/siteData";

export function Team() {
  return (
    <section id="team">
      <div className="section-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Team</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            People behind the learning experience
          </h2>
          {/* <p className="mt-3 text-slate-700">
            This can grow into a real team page later, but the current layout is
            already structured around data objects.
          </p> */}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteData.team.map((member) => (
            <Card
              key={member.name}
              className="rounded-[2rem] border-slate-200/80 bg-white/80 shadow-sm"
            >
              <CardHeader>
                <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-700">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
