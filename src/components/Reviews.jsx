import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteData } from "@/data/siteData";

const reviewTrack = [...siteData.reviews, ...siteData.reviews];

export function Reviews() {
  return (
    <section id="reviews">
      <div className="section-shell">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Reviews</p>
          {/* <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Dummy reviews with marquee motion
          </h2> */}
          {/* <p className="mt-3 text-slate-700">
            The reviews repeat in a continuous strip so the section feels more
            alive without needing a heavy carousel.
          </p> */}
        </div>

        <div className="space-y-5">
          <div className="marquee">
            <div className="marquee-track">
              {reviewTrack.map((review, index) => (
                <Card
                  key={`${review.name}-${index}`}
                  className="w-[320px] shrink-0 rounded-[1.75rem] border-slate-200/80 bg-white/85 shadow-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-700">
                      {review.quote}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="marquee">
            <div className="marquee-track reverse">
              {reviewTrack.map((review, index) => (
                <Card
                  key={`reverse-${review.name}-${index}`}
                  className="w-[320px] shrink-0 rounded-[1.75rem] border-slate-200/80 bg-slate-950 text-white shadow-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      {review.name}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      {review.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-200">
                      {review.quote}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
