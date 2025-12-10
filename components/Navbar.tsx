"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Phone, Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="w-full flex flex-col z-50 sticky top-0 shadow-md">
            {/* Top Bar - Clove Style */}
            <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm hidden md:block">
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2">
                            <Phone className="h-3 w-3 md:h-4 md:w-4" /> +91 123 456 7890
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-3 w-3 md:h-4 md:w-4" /> Mon-Sat: 9am - 8pm
                        </span>
                    </div>
                    <div className="flex gap-4 font-medium">
                        <Link href="/contact" className="hover:underline flex items-center gap-1">
                            <MapPin className="h-3 w-3 md:h-4 md:w-4" /> Sector 43, Chandigarh
                        </Link>
                        <Link href="/book" className="hover:underline flex items-center gap-1">
                            <Calendar className="h-3 w-3 md:h-4 md:w-4" /> Book Appointment
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="w-full bg-white border-b">
                <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            {/* Logo with Tooth Icon */}
                            <div className="bg-primary/10 p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-primary"
                                >
                                    <path d="M12 2C7.03 2 3 6.03 3 11c0 1.33.33 2.58.91 3.69L2 22l7.31-1.91C10.42 20.67 11.67 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
                                    <path d="M10 11h4" />
                                    <path d="M12 9v4" />
                                </svg>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl font-bold text-slate-800 tracking-tight">
                                    Smile<span className="text-primary">Dental</span>
                                </span>
                                <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">
                                    Advanced Dental Care
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/" className={navigationMenuTriggerStyle()}>
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/about" className={navigationMenuTriggerStyle()}>
                                            About Us
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/services" className={navigationMenuTriggerStyle()}>
                                            Treatments
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/contact" className={navigationMenuTriggerStyle()}>
                                            Contact
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-md rounded-full px-6 h-10 font-semibold">
                            <Link href="/book">
                                Book Appointment
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <div className="flex flex-col gap-6 pt-10">
                                    <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary border-b pb-2">
                                        Home
                                    </Link>
                                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary border-b pb-2">
                                        About Us
                                    </Link>
                                    <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary border-b pb-2">
                                        Treatments
                                    </Link>
                                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary border-b pb-2">
                                        Contact
                                    </Link>
                                    <Link href="/book" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
                                            Book Appointment
                                        </Button>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </div>
    )
}
