
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="section-title flex items-center gap-2">
          <Book size={24} className="text-data-blue" />
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-data-blue">
            <CardContent className="pt-6">
              <div className="mb-2">
                <h3 className="font-bold text-lg text-data-navy">
                  Master of Science in Data Science (Statistics)
                </h3>
                <p className="text-sm text-data-gray">
                  Rutgers University, New Brunswick, NJ
                </p>
              </div>
              <div className="flex justify-between text-sm text-data-gray">
                <span>Jan. 2025 - May. 2025</span>
                <span className="font-semibold">GPA: 3.85/4</span>
              </div>
              <a 
                href="https://www.rutgers.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 text-xs text-data-blue hover:underline inline-block"
              >
                Visit University Website
              </a>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-data-blue">
            <CardContent className="pt-6">
              <div className="mb-2">
                <h3 className="font-bold text-lg text-data-navy">
                  Bachelor of Technology in Information Technology
                </h3>
                <p className="text-sm text-data-gray">
                  Manipal University Jaipur, Jaipur, RJ
                </p>
              </div>
              <div className="text-sm text-data-gray">
                <span>Aug. 2016 - Jun. 2020</span>
              </div>
              <a 
                href="https://jaipur.manipal.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 text-xs text-data-blue hover:underline inline-block"
              >
                Visit University Website
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
