"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-24 flex justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">
              Appointment Requested!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Thank you for booking with us. We will contact you shortly to
              confirm your appointment time.
            </p>
            <Button onClick={() => setSubmitted(false)}>Book Another</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-24 flex justify-center">
      <Card className="w-full max-w-lg shadow-lg border-t-4 border-t-primary">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Book an Appointment
          </CardTitle>
          <CardDescription className="text-center">
            Fill out the form below and we'll get back to you to confirm.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" required placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Required</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Checkup</SelectItem>
                  <SelectItem value="rct">
                    Root Canal Treatment (RCT)
                  </SelectItem>
                  <SelectItem value="implants">Dental Implants</SelectItem>
                  <SelectItem value="braces">Braces & Aligners</SelectItem>
                  <SelectItem value="crowns">
                    Dental Crowns & Bridges
                  </SelectItem>
                  <SelectItem value="kids">Kids Dentistry</SelectItem>
                  <SelectItem value="whitening">Teeth Whitening</SelectItem>
                  <SelectItem value="surgery">Wisdom Teeth Removal</SelectItem>
                  <SelectItem value="cosmetic">Smile Makeover</SelectItem>
                  <SelectItem value="gums">Gum Treatment</SelectItem>
                  <SelectItem value="ulcers">Mouth Ulcers</SelectItem>
                  <SelectItem value="rehab">
                    Full Mouth Rehabilitation
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message / Additional Details</Label>
              <Textarea
                id="message"
                placeholder="Any specific concerns?"
                className="resize-none"
              />
            </div>
            <Button type="submit" className="w-full size-lg text-lg">
              Request Appointment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
