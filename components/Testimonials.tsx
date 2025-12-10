import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Amit Sharma",
        text: "Best dental experience I've ever had. The staff is incredibly friendly and professional.",
        rating: 5,
    },
    {
        name: "Priya Singh",
        text: "Dr. Verma is amazing! My root canal was completely painless. Highly recommend.",
        rating: 5,
    },
    {
        name: "Rahul Gupta",
        text: "State of the art clinic with modern equipment. Very clean and hygienic.",
        rating: 5,
    },
    {
        name: "Sneha Patel",
        text: "I got my braces here and the results are fantastic. Thank you Smile Dental!",
        rating: 5,
    },
    {
        name: "Vikram Malhotra",
        text: "Excellent service and affordable prices. The best dental clinic in Chandigarh.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-5xl mx-auto"
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="h-full">
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full min-h-[200px]">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.text}&quot;</p>
                                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
