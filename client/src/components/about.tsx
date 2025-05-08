import { MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4 text-black">
            About <span className="text-primary">Focus Studio</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Discover our passion for capturing life's precious moments with creativity and precision.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3800507/pexels-photo-3800507.jpeg" 
                alt="Professional photography studio interior" 
                className="rounded-lg shadow-md col-span-2 w-full h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg" 
                alt="Photographer working with camera" 
                className="rounded-lg shadow-md h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb" 
                alt="Professional photography equipment" 
                className="rounded-lg shadow-md h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="heading text-2xl font-semibold mb-4 text-black">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Focus Studio and Photography has been capturing life's most precious moments since 2012. 
              Based in Kallakurichi, Tamil Nadu, we specialize in wedding photography, portrait sessions, 
              and event coverage that tell your unique story.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of skilled photographers combines technical expertise with artistic vision to 
              create stunning images that you'll cherish for generations to come.
            </p>
            
            <div className="relative pl-6 mb-8 border-l-2 border-primary italic text-muted-foreground">
              <span className="text-8xl text-primary/20 font-serif absolute -top-4 -left-2">"</span>
              <p>Never reject anyone in your life, because good people give us happiness & bad people give us experience. Both are essential in life🤗</p>
              <p className="mt-2 font-medium text-primary">- Focus Studio</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-medium text-black">Address</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Mandavali - Kavarai Street Sankarapuram, Kallakurichi, Tamil Nadu 606202
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <h4 className="font-medium text-black">Phone</h4>
                </div>
                <p className="text-muted-foreground text-sm">097159 13325</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
