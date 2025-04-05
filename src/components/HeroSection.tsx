
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-data-light-gray via-white to-data-light-gray">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-data-navy mb-4">
            Harshith Oberoi
          </h1>
          <h2 className="text-xl md:text-2xl text-data-blue mb-6">
            Data Scientist
          </h2>
          <p className="text-lg text-data-gray max-w-2xl mb-6">
            New Brunswick, NJ • oberoiharshith@gmail.com
          </p>
          
          <div className="max-w-2xl mb-8 text-center">
            <h3 className="text-xl font-semibold text-data-navy mb-3">About Me</h3>
            <p className="text-data-gray leading-relaxed">
              I'm a passionate data professional who thrives on turning messy information into strategic insights that drive high-impact decisions. With hands-on expertise in predictive modeling, large-scale data engineering, and business analytics, I excel at translating raw datasets into clear, actionable strategies. Whether I'm building machine learning pipelines, optimizing data flows with Hadoop and Spark, or presenting findings that resonate with stakeholders, I bring an unwavering enthusiasm for uncovering the stories hidden in numbers. Ultimately, my goal is to help organizations gain a competitive edge by converting complexity into clarity—ensuring that every project journey is as rewarding as the results themselves.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button className="gap-2 bg-data-blue hover:bg-data-navy">
                <Mail size={18} />
                Contact Me
              </Button>
            </a>
            <a href="https://github.com/oberoiharshith" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github size={18} />
                GitHub
              </Button>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Youtube size={18} />
                YouTube
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/harshith-oberoi-95548a18a/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
