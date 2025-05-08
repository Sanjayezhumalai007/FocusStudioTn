import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { portfolioItems, PortfolioCategory } from "@/lib/data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | "all">("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">Our Work</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of professional photography work that showcases our expertise
          </p>
        </div>
        
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="ghost"
              className={`rounded-full px-6 ${
                activeFilter === "all" 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </Button>
            <Button
              variant="ghost"
              className={`rounded-full px-6 ${
                activeFilter === "wedding" 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setActiveFilter("wedding")}
            >
              Wedding
            </Button>
            <Button
              variant="ghost"
              className={`rounded-full px-6 ${
                activeFilter === "portrait" 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setActiveFilter("portrait")}
            >
              Portrait
            </Button>
            <Button
              variant="ghost"
              className={`rounded-full px-6 ${
                activeFilter === "event" 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setActiveFilter("event")}
            >
              Event
            </Button>
            <Button
              variant="ghost"
              className={`rounded-full px-6 ${
                activeFilter === "product" 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setActiveFilter("product")}
            >
              Product
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-square overflow-hidden bg-black">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                />
              </div>
              
              {/* Overlay content that appears on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 p-6">
                <Button variant="outline" className="rounded-full bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary mb-3">
                  <Eye className="mr-2 h-4 w-4" /> View Details
                </Button>
                <h3 className="font-medium text-white text-lg text-center">{item.title}</h3>
                <p className="text-white/80 text-sm text-center">{item.client}</p>
              </div>
              
              {/* Badge for category */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 px-8"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
