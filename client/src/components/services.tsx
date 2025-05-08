import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4 text-black">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of photography services to meet your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading text-xl font-semibold mb-2 text-black">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="mb-4 flex gap-2 flex-wrap">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-primary/10 text-primary border-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-black">
                      Starting at <span className="text-primary text-lg">₹{service.price}</span>
                    </p>
                    <a 
                      href="#contact" 
                      className="text-primary hover:underline flex items-center gap-1 transition-colors"
                    >
                      Book Now <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
