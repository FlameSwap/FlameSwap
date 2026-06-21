import { Container } from "@/components/container";
import { Heading, Subheading } from "@/components/heading";
import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-red-500/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <Heading className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">About the Founder</Heading>
            <Subheading className="text-xl text-zinc-400">
              The vision behind FlameSwap
            </Subheading>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-3xl blur-2xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
                  <img
                    src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22992/images/1780199792312-Screenshot_2026-05-31_085054.png"
                    alt="Maan Ajay Sharma - Founder of FlameSwap"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-3xl" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-orange-500 uppercase border border-orange-500/30 rounded-full bg-orange-500/5">
                    Meet the Founder
                  </div>
                  <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                    Maan Ajay Sharma
                  </h2>
                  <p className="text-orange-500 text-lg font-medium">Founder & Creator, FlameSwap</p>
                  <p className="text-zinc-400 mt-2">Class 9 Student · Manav Rachna International School, Sector 14, Faridabad</p>
                </div>

                <div className="h-px bg-gradient-to-r from-orange-500/50 via-zinc-700 to-transparent" />

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-400">The Vision</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    I started FlameSwap with a simple yet powerful vision: to solve the growing problem of 
                    <span className="text-orange-400 font-semibold"> clothing waste</span>.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Every year, millions of clothes end up in landfills. Many of these clothes are still in 
                    great condition but are simply outgrown or no longer needed. At our school, students 
                    constantly outgrow their clothes while still wanting to express their style.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    FlameSwap creates a community where students can trade clothes without money - giving 
                    new life to garments that would otherwise go to waste. It is about sustainability, 
                    community, and making fashion accessible to everyone.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700">
                  <p className="text-xl font-medium text-[#f5f5f5] italic">
                    "Together, we can reduce waste, save money, and build a more sustainable future - 
                    one swap at a time."
                  </p>
                </div>

                <div className="flex items-center gap-4 text-zinc-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Manav Rachna International School, Sector 14, Faridabad, Haryana, India</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-t border-zinc-800/50">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reduce Waste</h3>
                <p className="text-zinc-400 text-sm">Minimize clothing ending up in landfills by giving garments a second life</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Build Community</h3>
                <p className="text-zinc-400 text-sm">Connect students through a shared platform for sustainable fashion</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Save Money</h3>
                <p className="text-zinc-400 text-sm">Make fashion accessible without financial barriers through free exchanges</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800/50">
        <Container>
          <div className="text-center text-zinc-500">
            <p className="text-sm">
              {siteConfig.name} - {siteConfig.tagline}
            </p>
            <p className="text-xs mt-2">
              Exclusively for Manav Rachna International School, Sector 14, Faridabad
            </p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
