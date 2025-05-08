import { Button } from "@/components/ui/button";
import { Camera, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-[#f9f5ff] to-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-primary font-medium text-sm">Professional Photography Studio</span>
            </div>
            <h1 className="heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              I'm <span className="text-primary">Photo</span> Studio
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Professional photography services for weddings, portraits, events, and more in Kallakurichi. 
              We create timeless memories that last for generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Professional equipment</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Experienced photographers</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Quick delivery times</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Satisfaction guaranteed</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 shadow-md shadow-primary/20"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8 py-6"
                asChild
              >
                <a href="#contact">Book a Session</a>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg" 
                alt="Professional portrait photography session" 
                className="rounded-xl shadow-xl w-full h-auto object-cover border-8 border-white z-10"
              />
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg hidden md:flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Camera className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">10+ Years</p>
                <p className="text-muted-foreground text-sm">of experience</p>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-primary font-bold">₹</span>
                </div>
                <p className="font-medium">Starting at <span className="text-primary font-semibold">₹1,500</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
