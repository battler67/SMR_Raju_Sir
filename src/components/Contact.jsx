import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteData } from "@/data/siteData";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="section-kicker">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Contact details
            </h2>
            <p className="mt-3 text-slate-700">
              Reach out for workshops, teaching support, academic discussions,
              or collaborations.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/85 p-4">
                <MapPin className="mt-0.5 size-5 text-sky-700" />
                <div>
                  <p className="text-sm font-medium text-slate-500">Room</p>
                  <p className="text-sm font-semibold text-slate-950">
                    {siteData.contact.room}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/85 p-4">
                <Phone className="mt-0.5 size-5 text-sky-700" />
                <div>
                  <p className="text-sm font-medium text-slate-500">Phone</p>
                  <a
                    href={`tel:${siteData.contact.tel}`}
                    className="text-sm font-semibold text-slate-950"
                  >
                    {siteData.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/85 p-4">
                <Mail className="mt-0.5 size-5 text-sky-700" />
                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-sm font-semibold text-slate-950"
                  >
                    {siteData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="rounded-[2rem] border-slate-200/80 bg-slate-950 text-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Collaboration and profile link
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-sm leading-6 text-slate-300">
                Use the faculty profile link below for official details and
                additional academic context.
              </p>
              <Button asChild className="rounded-full px-5">
                <a
                  href={siteData.contact.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open faculty profile <ArrowUpRight />
                </a>
              </Button>

              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm font-medium text-slate-300">Email</p>
                <p className="mt-1 text-base font-semibold text-white">
                  {siteData.contact.email}
                </p>
                <p className="mt-4 text-sm font-medium text-slate-300">Phone</p>
                <p className="mt-1 text-base font-semibold text-white">
                  {siteData.contact.phone}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
