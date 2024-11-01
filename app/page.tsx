import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Wifi, Coffee, Utensils, Wind, Mail, Phone, ChevronDown, FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transform scale-110">
          <Image
            src="/hero-image.jpeg"
            alt="Luxury Desert Chalet"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
            Welcome to <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-transparent bg-clip-text">the LemonTree</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Discover luxury in the heart of the desert— an experience like no other
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full shadow-lg transition-all duration-300"
          >
            <Link href="/book" className="text-white no-underline font-semibold">
              Book Your Stay
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-center mb-12">
            Experience the Magic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-primary animate-float" />
              <h3 className="text-2xl font-semibold mb-2">Flexible Booking</h3>
              <p className="text-sm text-muted-foreground">
                Easy booking process with flexible dates to suit your schedule. Free cancellation up to 48 hours before check-in.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </div>
            <div className="text-center p-6 rounded-lg bg-card transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary animate-float" />
              <h3 className="text-2xl font-semibold mb-2">Prime Location</h3>
              <p className="text-sm text-muted-foreground">
                Situated in a pristine desert location with breathtaking views. Just 30 minutes from major attractions and perfect for stargazing.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </div>
            <div className="text-center p-6 rounded-lg bg-card transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <Wifi className="w-16 h-16 mx-auto mb-4 text-primary animate-float" />
              <h3 className="text-2xl font-semibold mb-2">Modern Services</h3>
              <p className="text-sm text-muted-foreground">
                High-speed WiFi, smart home features, and luxury amenities while maintaining authentic desert charm and tranquility.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Wifi className="w-8 h-8 text-primary" />
              <span className="text-base font-medium">Free Wi-Fi</span>
            </div>
            <div className="flex items-center space-x-4">
              <Coffee className="w-6 h-6 text-primary" />
              <span>Coffee Maker</span>
            </div>
            <div className="flex items-center space-x-4">
              <Utensils className="w-6 h-6 text-primary" />
              <span>Full Kitchen</span>
            </div>
            <div className="flex items-center space-x-4">
              <Wind className="w-6 h-6 text-primary" />
              <span>AC & Heating</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-cover bg-center relative" style={{ backgroundImage: 'url(/cta-background.jpg)' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Desert Adventure?
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Book your stay now and experience the perfect blend of luxury and desert tranquility
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full shadow-lg transition-all duration-300"
          >
            <Link href="/book" className="text-white no-underline font-semibold">
              Check Availability
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Email</span>
              <a href="mailto:Lemon@tree.kw" className="text-sm text-muted-foreground hover:text-primary">
                Lemon@tree.kw
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Phone</span>
              <a href="tel:+96598999281" className="text-sm text-muted-foreground hover:text-primary">
                +965 98999281
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Location</span>
              <span className="text-sm text-muted-foreground">Subiya, Kuwait</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-4 mb-8">
        <a href="#" className="text-muted-foreground hover:text-primary">
          <FacebookIcon />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary">
          <InstagramIcon />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}