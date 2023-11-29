import Benefit from "@/components/benefits/Benefit";
import CallToAction from "@/components/calltoaction/CallToAction";
import Cities from "@/components/cities/Cities";
import Downloadapps from "@/components/download/Downloadapps";
import Hero from "@/components/hero/hero";
import Whyus from "@/components/whyus/Whyus";

export default function Home() {
  return (
    <main>
      <Hero />
      <Whyus />
      <Benefit />
      <Cities />
      <Downloadapps />
      <CallToAction />
    </main>
  );
}
