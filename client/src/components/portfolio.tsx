import { useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolioItems, PortfolioCategory } from "@/lib/data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | "all">("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4 text-black">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Browse through our collection of professional photography work.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={activeFilter === "all" ? "default" : "secondary"}
              className={`rounded-full ${
                activeFilter === "all" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </Button>
            <Button
              variant={activeFilter === "wedding" ? "default" : "secondary"}
              className={`rounded-full ${
                activeFilter === "wedding" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setActiveFilter("wedding")}
            >
              Wedding
            </Button>
            <Button
              variant={activeFilter === "portrait" ? "default" : "secondary"}
              className={`rounded-full ${
                activeFilter === "portrait" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setActiveFilter("portrait")}
            >
              Portrait
            </Button>
            <Button
              variant={activeFilter === "event" ? "default" : "secondary"}
              className={`rounded-full ${
                activeFilter === "event" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setActiveFilter("event")}
            >
              Event
            </Button>
            <Button
              variant={activeFilter === "product" ? "default" : "secondary"}
              className={`rounded-full ${
                activeFilter === "product" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setActiveFilter("product")}
            >
              Product
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="image-card rounded-lg overflow-hidden shadow-md group">
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-medium text-black">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
          >
            View More Work
          </Button>
        </div>
      </div>
    </section>
  );
}
