
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";

interface Project {
  title: string;
  period: string;
  description: string[];
  github: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Lang2Query: Text-to-SQL Converter",
      period: "Sep. 2024 - Dec. 2024",
      description: [
        "Fine-tuned Mistral-7B with LoRA and RAG techniques for Text-to-SQL conversion, improving ROUGE-1 score by 77% and achieving robust schema-aware SQL generation."
      ],
      github: "https://github.com/oberoiharshith/Lang2Query"
    },
    {
      title: "SignalSense: Ensemble Machine Learning for Predictive Trading",
      period: "Sep. 2024 - Dec. 2024",
      description: [
        "Designed an XGBoost ensemble model for price prediction across 29 instruments, optimizing trading strategies with advanced indicators, backtesting, and robust risk management."
      ],
      github: "https://github.com/oberoiharshith/SignalSense"
    },
    {
      title: "Socioeconomic Dynamics of Crime Reporting",
      period: "Oct. 2023 - Dec. 2023",
      description: [
        "Analyzed National Crime Victimization data, revealing its socioeconomic implications by focusing on pivotal factors including income and age, ultimately achieving an adjusted R² of 0.63."
      ],
      github: "https://github.com/oberoiharshith/Socioeconomic-Dynamics-of-Crime-Reporting-"
    },
    {
      title: "OptiGrade: Predictive Analytics for Student Performance",
      period: "June. 2023 - July. 2023",
      description: [
        "Implemented a predictive model on AWS, utilizing Docker for containerization, incorporated advanced machine learning models and harmonized predictive analytics with AWS CodePipeline, achieving an R² of 88.57%."
      ],
      github: "https://github.com/oberoiharshith/E2E-ML-Project"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-data-light-gray">
      <div className="container px-4 md:px-6">
        <h2 className="section-title flex items-center gap-2">
          <FileText size={24} className="text-data-blue" />
          Data Science Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-data-navy">{project.title}</CardTitle>
                <p className="text-sm text-data-blue italic">{project.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-data-gray space-y-2">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-sm">{desc}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={16} />
                    View on GitHub
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
