
import React, { useState } from "react";
import { Github, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create form submission URL using formsubmit.co service
      const formURL = "https://formsubmit.co/oberoiharshith@gmail.com";
      
      // Send form data
      const response = await fetch(formURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `New Contact from Portfolio: ${data.name}`
        })
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-data-navy to-data-blue text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
          <p className="mb-8">
            I'm always open to discussing data science projects, job opportunities, or research collaborations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a 
              href="mailto:oberoiharshith@gmail.com"
              className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Send email to oberoiharshith@gmail.com"
            >
              <Mail className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium">Email</span>
              <span className="text-xs opacity-75">oberoiharshith@gmail.com</span>
            </a>
            
            <a 
              href="https://github.com/oberoiharshith"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Github className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium">GitHub</span>
              <span className="text-xs opacity-75">View My Projects</span>
            </a>
          </div>
        </div>
        
        <div className="max-w-md mx-auto bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Let's Have a Chat</h3>
          
          {isSubmitted ? (
            <div className="text-center p-4 bg-green-500/20 rounded-lg">
              <p>Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input 
                  id="name"
                  type="text"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="your.email@example.com"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea 
                  id="message"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                  placeholder="How can I help you?"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-white text-data-blue hover:bg-white/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
