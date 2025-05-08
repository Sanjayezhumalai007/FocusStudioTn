import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, RectangleEllipsis, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [mapLoaded, setMapLoaded] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: z.infer<typeof contactFormSchema>) => {
      // For Vercel deployment, we're simulating a successful form submission
      // In a real-world scenario, you would connect this to a serverless function
      // or use a form service like Formspree, EmailJS, etc.
      console.log("Form submission values:", values);
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    contactMutation.mutate(values);
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4 text-black">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ready to book your session? Contact us today.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interest *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding Photography</SelectItem>
                            <SelectItem value="portrait">Portrait Photography</SelectItem>
                            <SelectItem value="event">Event Photography</SelectItem>
                            <SelectItem value="product">Product Photography</SelectItem>
                            <SelectItem value="maternity">Maternity Photography</SelectItem>
                            <SelectItem value="baby">Baby Photography</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-6">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about what you're looking for..." 
                            className="min-h-[120px]" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-md mb-8 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.5154680333366!2d78.9603!3d11.3385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa6f7faef3c2d7%3A0xb14f63efbe0c0d3!2sKallakurichi%2C%20Tamil%20Nadu%20606202!5e0!3m2!1sen!2sin!4v1689956230941!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                className={mapLoaded ? "opacity-100" : "opacity-0"}
              ></iframe>
              
              {!mapLoaded && (
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Map loading...</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Mandavali - Kavarai Street Sankarapuram, Kallakurichi, Tamil Nadu 606202
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-black">Call Us</h3>
                </div>
                <p className="text-muted-foreground">+91 97159 13325</p>
                <p className="text-muted-foreground">Monday-Saturday, 9AM-6PM</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <RectangleEllipsis className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-black">Email Us</h3>
                </div>
                <p className="text-muted-foreground">info@focusstudio.com</p>
                <p className="text-muted-foreground">We'll respond within 24 hours</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-black">Visit Us</h3>
                </div>
                <p className="text-muted-foreground">Mandavali - Kavarai Street</p>
                <p className="text-muted-foreground">Sankarapuram, Kallakurichi</p>
                <p className="text-muted-foreground">Tamil Nadu 606202</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-black">Working Hours</h3>
                </div>
                <p className="text-muted-foreground">Monday-Friday: 9AM-6PM</p>
                <p className="text-muted-foreground">Saturday: 10AM-4PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
