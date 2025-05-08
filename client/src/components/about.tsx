import { MapPin, Phone, Calendar, Award, Camera, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#f9f5ff]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">About Us</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4">
            Discover Our <span className="text-primary">Studio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We capture life's precious moments with creativity and precision, creating memories that last a lifetime
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
              
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7">
                  <img 
                    src="https://images.pexels.com/photos/3800507/pexels-photo-3800507.jpeg" 
                    alt="Professional photography studio interior" 
                    className="rounded-lg shadow-lg w-full h-64 object-cover border-4 border-white"
                  />
                </div>
                <div className="col-span-5 flex flex-col gap-4">
                  <img 
                    src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg" 
                    alt="Photographer working with camera" 
                    className="rounded-lg shadow-lg h-32 object-cover border-4 border-white"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb" 
                    alt="Professional photography equipment" 
                    className="rounded-lg shadow-lg h-28 object-cover border-4 border-white"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Established in</p>
                    <p className="text-primary font-bold">2012</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-16">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-2xl mb-1">500+</h4>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-2xl mb-1">350+</h4>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-2xl mb-1">10+</h4>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="heading text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Focus Studio and Photography has been capturing life's most precious moments since 2012. 
              Based in Kallakurichi, Tamil Nadu, we specialize in wedding photography, portrait sessions, 
              and event coverage that tell your unique story.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of skilled photographers combines technical expertise with artistic vision to 
              create stunning images that you'll cherish for generations to come.
            </p>
            
            <div className="relative pl-6 mb-8 border-l-2 border-primary italic text-muted-foreground bg-primary/5 p-4 rounded-r-lg">
              <span className="text-8xl text-primary/20 font-serif absolute -top-4 -left-2">"</span>
              <p>Never reject anyone in your life, because good people give us happiness & bad people give us experience. Both are essential in life🤗</p>
              <p className="mt-2 font-medium text-primary">- Focus Studio</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Address</h4>
                  </div>
                  <p className="text-muted-foreground text-sm pl-12">
                    Mandavali - Kavarai Street Sankarapuram, Kallakurichi, Tamil Nadu 606202
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Phone</h4>
                  </div>
                  <p className="text-muted-foreground text-sm pl-12">097159 13325</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20"
              asChild
            >
              <a href="#contact">Book Your Session Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
