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
import { Clock, Mail, MapPin, Phone, Send, CalendarIcon, CheckCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setFormSubmitted(true);
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
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#f9f5ff]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">Get in Touch</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl font-bold mb-4">
            Book Your <span className="text-primary">Session</span> Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let us know your photography needs and we'll help create beautiful memories that last a lifetime
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Find Us
              </h3>
              
              <div className="h-[320px] rounded-lg overflow-hidden mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.5154680333366!2d78.9603!3d11.3385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa6f7faef3c2d7%3A0xb14f63efbe0c0d3!2sKallakurichi%2C%20Tamil%20Nadu%20606202!5e0!3m2!1sen!2sin!4v1689956230941!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoaded(true)}
                  className={mapLoaded ? "opacity-100" : "opacity-0"}
                ></iframe>
                
                {!mapLoaded && (
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Map loading...</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Our Studio</h4>
                    <p className="text-muted-foreground">
                      Mandavali - Kavarai Street Sankarapuram, Kallakurichi, Tamil Nadu 606202
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">+91 97159 13325</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">info@focusstudio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Working Hours</h4>
                    <p className="text-muted-foreground">Monday-Friday: 9AM-6PM</p>
                    <p className="text-muted-foreground">Saturday: 10AM-4PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              {formSubmitted ? (
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-8">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                  <Button 
                    className="rounded-lg bg-primary text-white"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    Book a Session
                  </h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="rounded-lg" />
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
                                <Input placeholder="john@example.com" {...field} className="rounded-lg" />
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
                                <Input placeholder="1234567890" {...field} className="rounded-lg" />
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
                                  <SelectTrigger className="rounded-lg">
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
                                <Input type="date" {...field} className="rounded-lg" />
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
                                  className="min-h-[120px] rounded-lg" 
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
                        className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" /> Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
