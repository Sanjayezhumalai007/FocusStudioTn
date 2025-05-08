import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f9f5ff]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">Professional Services</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of professional photography services to capture your special moments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white border-0 px-3 py-1">
                    From ₹{service.price}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="heading text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5">{service.description}</p>
                
                <div className="space-y-2 mb-5">
                  {service.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{tag}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    Book This Service <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
