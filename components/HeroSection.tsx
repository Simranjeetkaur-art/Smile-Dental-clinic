"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, UserRound, ArrowRight } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const slides = [
    {
        badge: "#1 Dental Chain in Chandigarh",
        title: "World-Class Dental Care",
        highlight: "Near You",
        description: "Experience pain-free dentistry with our team of specialists. Advanced technology, strict sterilization, and a patient-first approach.",
        image: "/images/hero/slide1.jpg",
        ctaPrimary: "Book Appointment",
        ctaSecondary: "Locate Clinic"
    },
    {
        badge: "Advanced Implantology Center",
        title: "Permanent Solution for",
        highlight: "Missing Teeth",
        description: " reclaim your confidence with our lifetime warranty dental implants. Painless procedures designed for immediate loading.",
        image: "/images/hero/slide2.jpg",
        ctaPrimary: "Consult Implantologist",
        ctaSecondary: "View pricing"
    },
    {
        badge: "Pediatric Dentistry Experts",
        title: "Gentle Care for",
        highlight: "Little Smiles",
        description: "Making dental visits fun! Our specialized pediatric dentists ensure a fear-free experience for your children.",
        image: "/images/hero/slide3.jpg",
        ctaPrimary: "Book Kids Visit",
        ctaSecondary: "Meet the Team"
    },
    {
        badge: "Cosmetic Dentistry",
        title: "Design Your",
        highlight: "Perfect Smile",
        description: "From veneers to teeth whitening, we create smiles that light up the room. Digital smile design for predictable results.",
        image: "/images/hero/slide4.jpg",
        ctaPrimary: "Smile Makeover",
        ctaSecondary: "View Gallery"
    },
    {
        badge: "Advanced Technology",
        title: "State-of-the-Art",
        highlight: "Dental Clinic",
        description: "Experience the future of dentistry with 3D Scanners, Laser Dentistry, and Pain-free injection systems.",
        image: "/images/hero/slide5.jpg",
        ctaPrimary: "Take a Tour",
        ctaSecondary: "Our Technology"
    }
]

export function HeroSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <section className="relative py-12 md:py-24 bg-gradient-to-r from-slate-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary animate-in fade-in slide-in-from-left-4 duration-700">
                                            {slide.badge}
                                        </div>
                                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-slate-900 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                                            {slide.title} <br className="hidden md:inline" />
                                            <span className="text-primary">{slide.highlight}</span>
                                        </h1>
                                        <p className="max-w-[600px] text-slate-600 md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                                            {slide.description}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                                            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all bg-primary hover:bg-primary/90">
                                                <Link href="/book">{slide.ctaPrimary}</Link>
                                            </Button>
                                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-slate-50">
                                                <Link href={slide.ctaSecondary === "Locate Clinic" ? "/contact" : "/services"}>{slide.ctaSecondary}</Link>
                                            </Button>
                                        </div>
                                        {/* Consistent Trust Indicators */}
                                        <div className="flex items-center gap-6 pt-4 text-sm text-slate-500 font-medium animate-in fade-in opacity-0 fill-mode-forwards duration-700 delay-500">
                                            <div className="flex items-center gap-2">
                                                <ShieldCheck className="h-5 w-5 text-primary" />
                                                100% Sterilized
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <UserRound className="h-5 w-5 text-primary" />
                                                Expert Doctors
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hero Image */}
                                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none animate-in fade-in zoom-in-95 duration-1000">
                                        <div className="aspect-square overflow-hidden rounded-full bg-slate-100 border-8 border-white shadow-2xl relative z-10">
                                            <Image
                                                src={slide.image}
                                                alt="Dental clinic treatment"
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                        </div>
                                        {/* Decorative elements only on first render to avoid flicker or just keep static */}
                                        <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary/5 blur-3xl -z-10" />
                                        <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl -z-10" />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 h-12 w-12 border-2" />
                    <CarouselNext className="hidden md:flex -right-4 lg:-right-12 h-12 w-12 border-2" />
                </Carousel>
            </div>
        </section>
    )
}
