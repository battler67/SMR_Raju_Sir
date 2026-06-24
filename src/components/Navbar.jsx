import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { siteData } from "@/data/siteData";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell flex items-center justify-between p-4 h-4 m-4 ">
        <a href="#hero" className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/20">
            SMR
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">
              {siteData.brand.name}
            </p>
            <p className="text-xs text-slate-600">Prof. U S N Raju</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1 rounded-full border border-white/70 bg-white/70 px-2 py-1 shadow-sm backdrop-blur">
              {siteData.navigation.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <a href={item.href} className="rounded-full px-4 py-2">
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild className="ml-2 rounded-full px-5">
            <a href="#contact">Connect</a>
          </Button>
        </div>

        <Button
          variant="outline"
          className="rounded-full bg-white/80 px-4 lg:hidden"
          asChild
        >
          <a href="#contact" aria-label="Go to contact section">
            Contact
          </a>
        </Button>
      </div>
    </header>
  );
}
