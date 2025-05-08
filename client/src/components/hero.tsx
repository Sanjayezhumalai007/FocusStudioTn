import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black">
              Capture Your <span className="text-primary">Best</span> Moments
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Professional photography services for weddings, portraits, events, and more. 
              We create timeless memories that last for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6"
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
            <img 
              src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg" 
              alt="Professional portrait photography session" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-black">10+ Years</p>
                  <p className="text-muted-foreground text-sm">of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
