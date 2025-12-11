import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Smile<span className="text-primary">Dental</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Smile Dental is the largest dental chain in Chandigarh, offering
              world-class dental care with a team of specialists and advanced
              technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Find a Clinic
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="hover:text-primary transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Popular Treatments
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Root Canal Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Braces & Aligners
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Kids Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Smile Makeover
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  SCO 123, Sector 43, <br />
                  Chandigarh, India 160043
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@smiledental.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Smile Dental Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
