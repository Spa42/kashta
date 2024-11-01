import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Wifi, Coffee, Utensils, Wind } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74"
          alt="Luxury Desert Chalet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lava Kashta
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Escape to our serene desert chalet for an unforgettable stay under the stars
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Book Your Stay</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Experience the Magic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
              <p className="text-muted-foreground">
                Easy booking process with flexible dates to suit your schedule
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-muted-foreground">
                Situated in a pristine desert location with breathtaking views
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card">
              <Wifi className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Modern Services</h3>
              <p className="text-muted-foreground">
                Full suite of modern services while maintaining desert charm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <Wifi className="w-6 h-6 text-primary" />
              <span>Free Wi-Fi</span>
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
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Desert Adventure?
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Book your stay now and experience the perfect blend of luxury and desert tranquility
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="hover:bg-secondary/90"
          >
            <Link href="/book">Check Availability</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}