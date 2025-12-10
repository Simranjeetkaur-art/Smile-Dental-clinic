"use client"

import * as React from "react"
import { MessageCircle, X, Calendar, Info, Send, User, Bot, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

type Message = {
    role: 'bot' | 'user'
    content: string
    options?: { label: string, action: () => void }[]
}

const initialMessages: Message[] = [
    {
        role: 'bot',
        content: "Hello! 👋 I'm your virtual dental assistant. How can I help you today?",
        options: [
            { label: "I have tooth pain 🦷", action: () => { } }, // Actions bound in component
            { label: "Want a better smile ✨", action: () => { } },
            { label: "Book Checkup 📅", action: () => { } },
            { label: "For my child 👶", action: () => { } }
        ]
    }
]

export function DentalAssistantWidget() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [messages, setMessages] = React.useState<Message[]>(initialMessages)
    const [activeTab, setActiveTab] = React.useState("chat")
    const [inputValue, setInputValue] = React.useState("")
    const scrollRef = React.useRef<HTMLDivElement>(null)

    const toggleOpen = () => setIsOpen(!isOpen)

    // Auto-scroll to bottom of chat
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isOpen])

    const addMessage = (role: 'bot' | 'user', content: string, options?: { label: string, action: () => void }[]) => {
        setMessages(prev => [...prev, { role, content, options }])
    }

    const handleOptionClick = (label: string, flowType: string) => {
        // Add user selection
        addMessage('user', label)

        // Bot typing simulation (timeout)
        setTimeout(() => {
            if (flowType === 'pain') {
                addMessage('bot', "I'm sorry to hear that. Could you describe the pain?", [
                    { label: "Sensitive to Hot/Cold", action: () => handleOptionClick("Sensitivity", "sensitivity") },
                    { label: "Constant Ache", action: () => handleOptionClick("Constant Ache", "ache") },
                    { label: "Swelling / Bleeding", action: () => handleOptionClick("Swelling", "gum_issue") }
                ])
            } else if (flowType === 'smile') {
                addMessage('bot', "Great! We specialize in smile makeovers. What are you looking for?", [
                    { label: "Whiter Teeth", action: () => handleOptionClick("Teeth Whitening", "whitening") },
                    { label: "Straighten Teeth", action: () => handleOptionClick("Braces/Aligners", "ortho") },
                    { label: "Fix Broken Tooth", action: () => handleOptionClick("Crowns/Veneers", "cosmetic") }
                ])
            } else if (flowType === 'kids') {
                addMessage('bot', "We love treating kids! Is this for a routine checkup or a specific issue?", [
                    { label: "Routine Checkup", action: () => handleOptionClick("Kids Checkup", "book_direct") },
                    { label: "Tooth Decay/Pain", action: () => handleOptionClick("Kids Pain", "book_direct") }
                ])
            } else if (flowType === 'ache' || flowType === 'sensitivity') {
                addMessage('bot', "This might indicate a cavity or infection. I recommend seeing a doctor soon. Would you like to book now?", [
                    { label: "Book Appointment", action: () => setActiveTab("book") },
                    { label: "Ask another question", action: () => resetChat() }
                ])
            } else if (flowType === 'gum_issue') {
                addMessage('bot', "Bleeding or swelling often points to gum disease. Our laser treatments can help!", [
                    { label: "Book Appointment", action: () => setActiveTab("book") },
                    { label: "Back to Menu", action: () => resetChat() }
                ])
            } else if (flowType === 'whitening' || flowType === 'ortho' || flowType === 'cosmetic') {
                addMessage('bot', "We have excellent specialists for that. Let's get you a consultation.", [
                    { label: "Book Consultation", action: () => setActiveTab("book") },
                    { label: "Back to Menu", action: () => resetChat() }
                ])
            } else if (flowType === 'book_direct') {
                setActiveTab("book")
            }
        }, 600)
    }

    const knowledgeBase = [
        {
            keywords: ["root canal", "rct", "pain", "cavity", "infected"],
            answer: "We offer painless, single-sitting Root Canal Treatments (RCT) performed by our endodontists to save infected teeth.",
            flow: "book"
        },
        {
            keywords: ["implant", "missing", "tooth loss", "permanent"],
            answer: "Our dental implants come with a lifetime warranty and are a permanent, natural-looking solution for missing teeth.",
            flow: "book"
        },
        {
            keywords: ["braces", "aligner", "crooked", "straight", "invisalign"],
            answer: "We provide invisible aligners (Invisalign) and ceramic braces for all ages to help you get that perfect smile.",
            flow: "book"
        },
        {
            keywords: ["kid", "child", "baby", "pediatric"],
            answer: "We have specialized pediatric dentists to ensure a fun and fear-free experience for your little ones.",
            flow: "book"
        },
        {
            keywords: ["whitening", "yellow", "bright", "clean"],
            answer: "Our advanced laser teeth whitening can brighten your smile in just 45 minutes.",
            flow: "book"
        },
        {
            keywords: ["cost", "price", "expensive", "charge"],
            answer: "We believe in transparent pricing. While exact costs depend on the treatment, we provide written estimates before starting any procedure.",
            flow: "chat"
        },
        {
            keywords: ["location", "address", "where", "sector", "chandigarh"],
            answer: "We are located at SCO 123, Sector 43, Chandigarh. We are the #1 Dental Chain in the city!",
            flow: "contact"
        },
        {
            keywords: ["time", "hour", "open", "close", "sunday"],
            answer: "We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sundays from 10:00 AM to 2:00 PM.",
            flow: "book"
        }
    ]

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!inputValue.trim()) return

        const userText = inputValue.toLowerCase()
        addMessage('user', inputValue)
        setInputValue("")

        setTimeout(() => {
            // Simple keyword matching
            const match = knowledgeBase.find(kb => kb.keywords.some(k => userText.includes(k)))

            if (match) {
                const options = match.flow === 'book'
                    ? [{ label: "Book Appointment", action: () => setActiveTab("book") }]
                    : match.flow === 'contact'
                        ? [{ label: "Get Directions", action: () => window.open("https://maps.google.com/?q=SCO 123, Sector 43, Chandigarh", "_blank") }]
                        : [{ label: "Book Consultation", action: () => setActiveTab("book") }]

                addMessage('bot', match.answer, options)
            } else {
                addMessage('bot', "Thank you for your message. For specific medical queries, it's best to consult our doctors directly. How would you like to proceed?", [
                    { label: "Book Appointment", action: () => setActiveTab("book") },
                    { label: "Call Clinic", action: () => window.location.href = "tel:+911234567890" }
                ])
            }
        }, 1000)
    }

    const resetChat = () => {
        setMessages(initialMessages)
        // Re-bind initial actions since they are closures
        setMessages([{
            role: 'bot',
            content: "Hello! 👋 I'm your virtual dental assistant. How can I help you today?",
            options: [
                { label: "I have tooth pain 🦷", action: () => handleOptionClick("I have tooth pain", 'pain') },
                { label: "Want a better smile ✨", action: () => handleOptionClick("Want a better smile", 'smile') },
                { label: "Book Checkup 📅", action: () => handleOptionClick("Book Checkup", 'book_direct') },
                { label: "For my child 👶", action: () => handleOptionClick("For my child", 'kids') }
            ]
        }])
    }

    // Initialize actions on first load
    React.useEffect(() => {
        resetChat()
    }, [])

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Chat Widget Window */}
            {isOpen && (
                <Card className="w-[380px] h-[600px] flex flex-col shadow-2xl border-primary/20 animate-in slide-in-from-bottom-10 fade-in zoom-in-95 duration-300">
                    <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-4 flex flex-row items-center justify-between space-y-0 shrink-0">
                        <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Bot className="h-5 w-5" />
                                Smile Assistant
                            </CardTitle>
                            <CardDescription className="text-primary-foreground/80 text-xs mt-1">
                                Online | Replies instantly
                            </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary/80" onClick={toggleOpen}>
                            <X className="h-5 w-5" />
                        </Button>
                    </CardHeader>

                    <CardContent className="p-0 flex-1 overflow-hidden flex flex-col">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1 flex flex-col min-h-0">
                            <TabsList className="w-full grid grid-cols-2 rounded-none bg-slate-50 p-0 h-12 shrink-0 border-b">
                                <TabsTrigger value="chat" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full text-slate-600">
                                    <MessageCircle className="h-4 w-4 mr-2" /> Chat
                                </TabsTrigger>
                                <TabsTrigger value="book" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full text-slate-600">
                                    <Calendar className="h-4 w-4 mr-2" /> Book Visit
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="chat" className="flex-1 flex flex-col min-h-0 data-[state=inactive]:hidden">
                                <ScrollArea className="flex-1 p-4">
                                    <div className="space-y-4 pb-4" ref={scrollRef}>
                                        {messages.map((msg, idx) => (
                                            <div key={idx} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                                <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'bot'
                                                    ? 'bg-slate-100 text-slate-800 rounded-tl-none'
                                                    : 'bg-primary text-white rounded-tr-none'
                                                    }`}>
                                                    {msg.content}
                                                </div>
                                            </div>
                                        ))}
                                        {/* Display options for the *last* message only if it's from bot */}
                                        {messages[messages.length - 1]?.role === 'bot' && messages[messages.length - 1]?.options && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {messages[messages.length - 1].options?.map((opt, i) => (
                                                    <Button
                                                        key={i}
                                                        variant="outline"
                                                        size="sm"
                                                        className="rounded-full text-xs border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors"
                                                        onClick={opt.action}
                                                    >
                                                        {opt.label}
                                                    </Button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </ScrollArea>
                                <div className="p-3 bg-slate-50 border-t shrink-0">
                                    <form onSubmit={handleSendMessage} className="flex gap-2">
                                        <Input
                                            placeholder="Type your query..."
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            className="bg-white"
                                        />
                                        <Button type="submit" size="icon" className="shrink-0">
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </form>
                                </div>
                            </TabsContent>

                            <TabsContent value="book" className="flex-1 flex flex-col min-h-0 data-[state=inactive]:hidden">
                                <ScrollArea className="h-full p-4">
                                    <form className="space-y-4 pb-4" onSubmit={(e) => e.preventDefault()}>
                                        <div className="space-y-2">
                                            <Label htmlFor="w-name">Full Name</Label>
                                            <Input id="w-name" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="w-phone">Phone Number</Label>
                                            <Input id="w-phone" placeholder="+91 98765 43210" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="w-service">Service Required</Label>
                                            <Select>
                                                <SelectTrigger id="w-service">
                                                    <SelectValue placeholder="Select a service" />
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
                                            <Label htmlFor="w-date">Preferred Date</Label>
                                            <Input id="w-date" type="date" className="block w-full" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="w-details">Message</Label>
                                            <Textarea
                                                id="w-details"
                                                placeholder="Any specific symptoms or requests?"
                                                className="resize-none h-20"
                                            />
                                        </div>

                                        <div className="flex items-center space-x-2 py-2">
                                            <Checkbox id="terms" />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                                            >
                                                This is an emergency
                                            </label>
                                        </div>

                                        <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
                                            Request Appointment
                                        </Button>
                                        <div className="bg-blue-50 p-3 rounded-lg flex gap-2 items-start mt-4">
                                            <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                                            <p className="text-xs text-blue-700">
                                                We usually confirm appointments within 15 minutes during working hours.
                                            </p>
                                        </div>
                                    </form>
                                </ScrollArea>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            )}

            {/* Floating Toggle Button */}
            <Button
                onClick={toggleOpen}
                size="lg"
                className={`h-14 w-14 rounded-full shadow-xl transition-all duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'scale-100 opacity-100'} bg-primary hover:bg-primary/90 text-white`}
            >
                <MessageCircle className="h-7 w-7" />
            </Button>
            <Button
                onClick={toggleOpen}
                size="lg"
                className={`h-14 w-14 rounded-full shadow-xl transition-all duration-300 ${!isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'scale-100 opacity-100'} bg-slate-800 hover:bg-slate-700 text-white`}
            >
                <X className="h-6 w-6" />
            </Button>
        </div>
    )
}
