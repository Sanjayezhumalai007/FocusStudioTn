import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="pt-20 pb-8">
      {/* Pre-footer CTA Section */}
      <div className="container mx-auto mb-16">
        <div className="bg-[#f9f5ff] rounded-2xl p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-48 h-48 bg-primary/10 rounded-full -mr-16 -mb-16"></div>
          <div className="absolute left-0 top-0 w-32 h-32 bg-primary/10 rounded-full -ml-10 -mt-10"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="heading text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-primary">Capture</span> Your Special Moments?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Whether it's a wedding, family portrait, or special event, we're here to create beautiful memories that last a lifetime.
            </p>
            <Button 
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 shadow-lg shadow-primary/20"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Book Your Session Today <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-[#1c1033] text-white pt-16 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <Camera className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  Focus<span className="text-primary">Studio</span>
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional photography services for all your special moments and memories. Creating timeless images since 2012.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 border-l-2 border-primary pl-3">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Portfolio
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 border-l-2 border-primary pl-3">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Wedding Photography
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Portrait Photography
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Event Photography
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Product Photography
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Maternity Photography
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <span className="h-1 w-4 bg-primary/40 mr-2"></span> Baby Photography
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 border-l-2 border-primary pl-3">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-300">
                    Mandavali - Kavarai Street Sankarapuram, Kallakurichi, Tamil Nadu 606202
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-300">+91 97159 13325</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-300">info@focusstudio.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Focus Studio and Photography. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
