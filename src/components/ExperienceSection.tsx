
import React from "react";
import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  location: string;
  positions: Array<{
    title: string;
    period: string;
    responsibilities: string[];
  }>;
  website?: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      company: "Rutgers University",
      location: "New Brunswick, NJ",
      positions: [
        {
          title: "Lecturer - Introduction to Data Science",
          period: "Jan. 2025 - May. 2025",
          responsibilities: [
            "Mentored 50+ undergraduate students by designing Python-based projects, encompassing data wrangling, exploratory analysis, and predictive modeling."
          ]
        }
      ],
      website: "https://www.rutgers.edu/"
    },
    {
      company: "Cogent Infotech",
      location: "Pittsburgh, PA",
      positions: [
        {
          title: "Data Science Intern",
          period: "Jan. 2024 - May. 2024",
          responsibilities: [
            "Engineered features from transaction and engagement data to build a customer churn prediction model using Python, improving retention strategies by 20%.",
            "Designed a medical chatbot PoC with LangChain & Gemini, leveraging RAG (retrieval-augmented generation) to reduce response time by 10% and improve accuracy."
          ]
        }
      ],
      website: "https://www.cogentinfo.com/"
    },
    {
      company: "Capgemini",
      location: "Bangalore, KA",
      positions: [
        {
          title: "Senior Analyst",
          period: "Sep. 2022 - Jul. 2023",
          responsibilities: [
            "Developed an ML pipeline for Mercedes-Benz, optimizing test case prioritization, reducing validation time by 60% across 1,000+ system tests, and accelerating deployment.",
            "Benchmarked object detection models on automotive datasets, improving detection accuracy by 8% and guiding research on model selection for future implementations."
          ]
        },
        {
          title: "Analyst",
          period: "Jan. 2022 - Sep. 2022",
          responsibilities: [
            "Built and optimized large-scale data pipelines using PySpark, Airflow, and SQL, ensuring efficient batch and streaming data processing for Mercedes-Benz.",
            "Analyzed customer sentiment on Mercedes-Benz carline series using NLP, delivering actionable insights for 250+ business and product leaders across Germany & India."
          ]
        },
        {
          title: "Analyst (Java Developer & Systems Engineer)",
          period: "Mar. 2021 - Dec. 2021",
          responsibilities: [
            "Automated system architecture modeling using Java, improving workflow efficiency by 85% and achieving 95% user optimization in enterprise design processes.",
            "Created structured data ontologies using SysML for Mercedes-Benz architecture, streamlining system design processes and enhancing stakeholder collaboration."
          ]
        }
      ],
      website: "https://www.capgemini.com/"
    },
    {
      company: "Itronix Solutions",
      location: "Chandigarh, India",
      positions: [
        {
          title: "Data Science Intern",
          period: "Jan. 2020 - Jul. 2020",
          responsibilities: [
            "Developed predictive models for COVID-19 spread, leveraging Linear Regression and Kernel SVM, achieving 87% accuracy to support government health strategies."
          ]
        }
      ],
      website: "https://www.itronixsolutions.com/courses/"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="section-title flex items-center gap-2">
          <Briefcase size={24} className="text-data-blue" />
          Work Experience
        </h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="mb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="font-bold text-xl text-data-navy">{exp.company}</h3>
                  <span className="text-sm text-data-gray">{exp.location}</span>
                </div>
                {exp.website && (
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-data-blue hover:underline"
                  >
                    Visit Company Website
                  </a>
                )}
              </div>

              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="mb-4 last:mb-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="font-semibold text-lg text-data-navy">{position.title}</h4>
                    <span className="text-sm italic text-data-blue">{position.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-data-gray space-y-2 pl-4">
                    {position.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
