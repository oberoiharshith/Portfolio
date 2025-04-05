
import React from "react";
import { Code, Database, Server } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    programming: [
      "Python", "R", "Java"
    ],
    libraries: [
      "Pandas", "NumPy", "TensorFlow", "Keras", "OpenCV", "PyTorch", 
      "Scikit-learn", "PySpark", "NLTK"
    ],
    tools: [
      "Jupyter", "R Studio", "Tableau", "Power BI", "Hadoop", "MapReduce"
    ],
    databases: [
      "MySQL", "PostgreSQL", "MongoDB", "Neo4j"
    ],
    cloud: [
      "AWS", "Docker", "Git", "GitHub", "MLFlow", "BentoML", "DagShub"
    ]
  };

  return (
    <section id="skills" className="py-16 bg-data-light-gray">
      <div className="container px-4 md:px-6">
        <h2 className="section-title flex items-center gap-2">
          <Code size={24} className="text-data-blue" />
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-data-navy mb-4 flex items-center gap-2">
              <Code size={20} className="text-data-blue" />
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-data-navy mb-4 flex items-center gap-2">
              <Code size={20} className="text-data-blue" />
              Libraries & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.libraries.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-data-navy mb-4 flex items-center gap-2">
              <Server size={20} className="text-data-blue" />
              Data Science Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-data-navy mb-4 flex items-center gap-2">
              <Database size={20} className="text-data-blue" />
              Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-data-navy mb-4 flex items-center gap-2">
              <Server size={20} className="text-data-blue" />
              Cloud, DevOps & Dev Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.cloud.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
