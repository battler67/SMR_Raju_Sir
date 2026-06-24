import { siteData } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70">
      <div className="section-shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">
            {siteData.brand.name}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {siteData.brand.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <span>{siteData.contact.room}</span>
          <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
          <a href={`tel:${siteData.contact.tel}`}>{siteData.contact.phone}</a>
        </div>
      </div>
    </footer>
  );
}
