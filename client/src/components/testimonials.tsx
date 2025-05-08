import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#f9f5ff]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">Client Reviews</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why our clients choose us for their most precious photographic moments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute -top-4 -right-4 h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                <Quote className="h-5 w-5 text-white" />
              </div>
              
              <div className="text-primary mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "fill-primary" : "fill-primary/20"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 rounded-xl p-8 mt-16 text-center">
          <h3 className="text-xl font-medium mb-4">Ready to experience our service?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and create timeless memories with Focus Studio & Photography
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
          >
            Book Your Session Today
          </a>
        </div>
      </div>
    </section>
  );
}
