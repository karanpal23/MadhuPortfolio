import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Expertise } from "@/components/expertise";
import { Process } from "@/components/process";
import { Work } from "@/components/work";
import { Studio } from "@/components/studio";
import { Testimonials } from "@/components/testimonials";
import { Marquee } from "@/components/marquee";
import { Journal } from "@/components/journal";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <Services />
      <Expertise />
      <Process />
      <Work />
      <Studio />
      <Testimonials />
      <Marquee />
      <Journal />
      <Contact />
    </>
  );
}
