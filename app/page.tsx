import Hero from "@/components/Hero";
// import Bento from "@/components/Bento";
import Card from "@/components/Card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Referenties from "@/components/Referenties";

export default function Home() {
  return (
    <main>
        <div className="bg-zinc-50">
          <AuroraBackground>
            <TracingBeam>
                <Hero />
                <Card />
                <Approach />
                <Experience />
                <Referenties />
                {/* <Bento /> */}
            </TracingBeam>
          </AuroraBackground>
        </div>
    </main>
  );
}
