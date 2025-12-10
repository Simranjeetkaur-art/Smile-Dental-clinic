"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Stethoscope, Smile, Sparkles, UserRound, Syringe, Activity,
    Drill, Gem, HeartPulse, ShieldCheck, ArrowRight
} from "lucide-react"
import { useState } from "react"

const treatments = [
    {
        title: "Root Canal Treatment",
        description: "Painless, single-sitting RCTs to save infected teeth.",
        icon: Activity,
        category: "Endodontics"
    },
    {
        title: "Dental Implants",
        description: "Permanent, natural-looking solution for missing teeth.",
        icon: Drill,
        category: "Prosthodontics"
    },
    {
        title: "Braces & Aligners",
        description: "Invisible aligners (Invisalign) & braces for all ages.",
        icon: Smile,
        category: "Orthodontics"
    },
    {
        title: "Dental Crowns",
        description: "Zirconia & Ceramic crowns to restore damaged teeth.",
        icon: Gem,
        category: "Prosthodontics"
    },
    {
        title: "Bridges",
        description: "Fixed solution to replace missing teeth.",
        icon: ShieldCheck,
        category: "Prosthodontics"
    },
    {
        title: "Kids Dentistry",
        description: "Specialized preventive care for healthy smiles in children.",
        icon: UserRound,
        category: "Pedodontics"
    },
    {
        title: "Teeth Whitening",
        description: "Brighten your smile in just 45 minutes.",
        icon: Sparkles,
        category: "Cosmetic Dentistry"
    },
    {
        title: "Wisdom Teeth",
        description: "Painless extraction of impacted wisdom teeth.",
        icon: Syringe,
        category: "Oral Surgery"
    },
    {
        title: "Smile Makeover",
        description: "Customized aesthetic treatments for your perfect smile.",
        icon: Sparkles,
        category: "Cosmetic Dentistry"
    },
    {
        title: "Gum Treatment",
        description: "Laser treatment for healthy, pink gums.",
        icon: HeartPulse,
        category: "Periodontics"
    },
    {
        title: "Mouth Ulcers",
        description: "Diagnosis & treatment for painful lesions.",
        icon: Stethoscope,
        category: "Oral Medicine"
    },
    {
        title: "Full Mouth Rehabilitation",
        description: "Restoring functionality and aesthetics of the entire mouth.",
        icon: ShieldCheck,
        category: "Prosthodontics"
    }
]

const categories = ["All Treatments", "Cosmetic Dentistry", "Endodontics", "Orthodontics", "Pedodontics", "Prosthodontics", "Oral Surgery", "Periodontics", "Oral Medicine"]

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState("All Treatments")

    const filteredTreatments = activeCategory === "All Treatments"
        ? treatments
        : treatments.filter(t => t.category === activeCategory)

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Clove-style Hero Section */}
            <section className="bg-white border-b">
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                Clinical Excellence
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Specialized <span className="text-primary">Dental Treatments</span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Experience world-class dental care with our team of super-specialists. From routine checkups to complex surgical procedures, we ensure the highest standards of hygiene and patient safety.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Button className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-base">
                                    Book an Appointment
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1600170311833-c2cfbcd65532?q=80&w=1000&auto=format&fit=crop"
                                alt="Advanced Dental Equipment"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatments Grid with Filter styling */}
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Categories */}
                    <div className="w-full md:w-64 flex-shrink-0 space-y-2 hidden md:block">
                        <h3 className="font-bold text-slate-900 mb-4 px-2 text-lg">Specialties</h3>
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2">Need Help?</h4>
                            <p className="text-sm text-blue-700 mb-4">Not sure which treatment you need?</p>
                            <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">
                                Contact Support →
                            </Link>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTreatments.map((item, index) => (
                                <div key={index} className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full animate-in fade-in zoom-in-95 duration-300">
                                    <div className="mb-4 h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                                        {item.description}
                                    </p>
                                    <Link
                                        href={`/book?treatment=${encodeURIComponent(item.title)}`}
                                        className="inline-flex items-center text-sm font-bold text-primary hover:tracking-wide transition-all mt-auto"
                                    >
                                        Book Now <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {filteredTreatments.length === 0 && (
                            <div className="text-center py-20 text-slate-500">
                                No treatments found in this category.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Banner */}
            <section className="bg-slate-900 py-16 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Smile with Confidence</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                        Join thousands of happy patients who trust Smile Dental for their oral healthcare needs.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
                            <Link href="/book">Schedule Visit</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 rounded-full px-8 h-12 bg-transparent">
                            <Link href="/contact">Locate Clinic</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
