import Link from "next/link";
import { Tent } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Tent className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">Kashta</span>
            </div>
            <p className="text-sm text-foreground/80">
              Experience the magic of desert living in our luxurious chalet getaway.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-foreground/80 hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-foreground/80 hover:text-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-foreground/80 hover:text-foreground">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-foreground/80 hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-foreground/80 hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-sm text-foreground/80 hover:text-foreground">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-foreground/80">
                Email: Lemon@tree.kw
              </li>
              <li className="text-sm text-foreground/80">
                Phone: +965 98999821
              </li>
              <li className="text-sm text-foreground/80">
                Location: Subiya, Kuwait
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} Kashta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}