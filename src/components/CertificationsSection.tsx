
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Medal, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
  credentialId?: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      name: "Cypher Fundamentals",
      issuer: "Neo4j",
      year: "2024",
      link: "https://graphacademy.neo4j.com/c/2f822a77-375d-477e-8c80-7ba1e5d8fb3b/"
    },
    {
      name: "Neo4j Fundamentals",
      issuer: "Neo4j",
      year: "2024"
    },
    {
      name: "Using MongoDB with Python",
      issuer: "MongoDB",
      year: "2024",
      link: "https://learn.mongodb.com/c/Z-4v1ODrQPu0vySvszexCA"
    },
    {
      name: "Microsoft Certified Azure Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      credentialId: "I1152741"
    },
    {
      name: "Agile Software Development",
      issuer: "University of Minnesota, Coursera",
      year: "2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/3MFFK9CS53KD"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="section-title flex items-center gap-2">
          <Medal size={24} className="text-data-blue" />
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-t-4 border-t-data-blue animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-data-navy mb-1">{cert.name}</h3>
                <p className="text-sm text-data-gray">{cert.issuer}</p>
                <p className="text-xs text-data-blue mt-2">{cert.year}</p>
                {cert.credentialId && (
                  <p className="text-xs text-data-gray mt-1">Credential ID: {cert.credentialId}</p>
                )}
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-data-blue hover:underline mt-2"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
