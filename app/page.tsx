import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Referenties from "@/components/Referenties";
import Footer from "@/components/Footer";
import Usp from "@/components/Usp";

export default function Home() {
  return (
    <main>
        <div className="bg-zinc-50">
          <AuroraBackground>
            <TracingBeam>
                <Hero />
                <Card />
                <Usp />
                <Approach />
                <Referenties />
                <Experience />
                <Footer />
            </TracingBeam>
          </AuroraBackground>
        </div>
    </main>
  );
}
