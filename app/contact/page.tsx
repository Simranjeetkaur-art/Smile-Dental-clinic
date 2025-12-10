"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setSuccess(true)
                setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "" })
            } else {
                alert("Something went wrong. Please try again.")
            }
        } catch (error) {
            console.error(error)
            alert("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, service: value })
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
            <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Get in Touch</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-muted-foreground">SCO 123, Sector 43, Chandigarh, India</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-muted-foreground">+91 123 456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Mail className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-muted-foreground">info@smiledental.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Clock className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Hours</h3>
                                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                                    <p className="text-muted-foreground">Sun: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Map Embed */}
                    <div className="h-[300px] bg-slate-100 rounded-xl overflow-hidden border shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.376678765432!2d76.7588!3d30.7088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec0fc55555555%3A0x5555555555555555!2sSector%2043%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="service">Service Required</Label>
                                    <Select onValueChange={handleSelectChange} value={formData.service}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="general">General Checkup</SelectItem>
                                            <SelectItem value="rct">Root Canal Treatment (RCT)</SelectItem>
                                            <SelectItem value="implants">Dental Implants</SelectItem>
                                            <SelectItem value="braces">Braces & Aligners</SelectItem>
                                            <SelectItem value="crowns">Dental Crowns & Bridges</SelectItem>
                                            <SelectItem value="kids">Kids Dentistry</SelectItem>
                                            <SelectItem value="whitening">Teeth Whitening</SelectItem>
                                            <SelectItem value="surgery">Wisdom Teeth Removal</SelectItem>
                                            <SelectItem value="cosmetic">Smile Makeover</SelectItem>
                                            <SelectItem value="gums">Gum Treatment</SelectItem>
                                            <SelectItem value="ulcers">Mouth Ulcers</SelectItem>
                                            <SelectItem value="rehab">Full Mouth Rehabilitation</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="date">Pref. Visit Date</Label>
                                    <Input
                                        id="date"
                                        name="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can we help you?"
                                    className="min-h-[120px]"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                            {success && (
                                <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
