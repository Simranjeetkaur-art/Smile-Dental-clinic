import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
    title: string
    description: string
    icon: LucideIcon
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-sm bg-white overflow-hidden">
            <div className="h-1 w-full bg-slate-100 group-hover:bg-primary transition-colors" />
            <CardHeader className="pb-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors text-primary">
                    <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base text-slate-500 leading-relaxed">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}
