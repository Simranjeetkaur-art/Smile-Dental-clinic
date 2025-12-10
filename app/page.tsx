import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ServiceCard"
import { Testimonials } from "@/components/Testimonials"
import { Stethoscope, Smile, Clock, ShieldCheck, Sparkles, UserRound, MapPin, TriangleAlert, CircleDashed, Blinds, Droplets, Baby, CalendarCheck } from "lucide-react"
import { HeroSection } from "@/components/HeroSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Stats / Trust Bar */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-primary-foreground/80 font-medium">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">50k+</h3>
              <p className="text-primary-foreground/80 font-medium">Happy Smiles</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">20+</h3>
              <p className="text-primary-foreground/80 font-medium">Specialists</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">5</h3>
              <p className="text-primary-foreground/80 font-medium">Clinics</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help You Today? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-slate-900 mb-12">
            How can we <span className="text-primary">help you</span> today?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Tooth Pain", icon: TriangleAlert },
              { label: "Missing Teeth", icon: CircleDashed },
              { label: "Crooked Teeth", icon: Blinds },
              { label: "Bleeding Gums", icon: Droplets },
              { label: "Kids Dental", icon: Baby },
              { label: "Routine Checkup", icon: CalendarCheck },
            ].map((item, i) => (
              <Link href="/book" key={i} className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Treatments</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Comprehensive Dental Solutions
            </h2>
            <p className="max-w-[700px] text-slate-500 md:text-lg">
              From routine checkups to complex surgeries, we cover all your dental needs under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Using ServiceCard components here as before... assuming they are imported */}
            <ServiceCard
              title="Root Canal Treatment"
              description="Painless single-sitting root canal treatment by specialists."
              icon={Stethoscope}
            />
            <ServiceCard
              title="Dental Implants"
              description="Permanent solution for missing teeth with lifetime warranty."
              icon={ShieldCheck}
            />
            <ServiceCard
              title="Braces & Aligners"
              description="Invisible aligners and ceramic braces for the perfect smile."
              icon={Smile}
            />
            <ServiceCard
              title="Teeth Whitening"
              description="Get a sparkling white smile in just 45 minutes."
              icon={Sparkles}
            />
            <ServiceCard
              title="Kids Dentistry"
              description="Specialized pediatric dental care in a fun environment."
              icon={UserRound}
            />
            <ServiceCard
              title="Crowns & Bridges"
              description="Metal-free Zirconia crowns for natural looking teeth."
              icon={MapPin}
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              <Link href="/services">View All Treatments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Trust Smile Dental (Redesigned) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 mb-6">
              Why Trust <span className="text-primary">Smile Dental?</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              We are committed to providing transparency, safety, and quality in every smile we treat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Clinical Excellence", desc: "Our team comprises MDS specialists from top institutes ensuring the best care.", icon: Stethoscope },
              { title: "100% Sterilization", desc: "We follow stringent 4-step sterilization protocols for patient safety.", icon: ShieldCheck },
              { title: "Transparent Pricing", desc: "No hidden charges. We provide written estimates before any treatment.", icon: Clock }, // Using Clock as a placeholder for 'Transparency' concept if specialized icon not avail
              { title: "Advanced Technology", desc: "Equipped with OPG, Intraoral cameras, and Laser dentistry equipment.", icon: Sparkles }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Patient Stories</h2>
          <Testimonials />
        </div>
      </section>

      {/* CTA / Booking Strip */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Ready to visit us?</h2>
              <p className="text-primary-foreground/80 text-lg">Book your appointment online and get a call back within 15 minutes.</p>
            </div>
            <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full bg-white text-primary hover:bg-slate-100 shadow-xl min-w-[200px]">
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
