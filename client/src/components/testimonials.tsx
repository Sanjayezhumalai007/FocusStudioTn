import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4 text-black">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            What our clients say about their experience with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md relative">
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
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-black">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
