"use client";
import React from 'react';
import { Cloud, Terminal, Shield, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: "Cloud & Orchestration",
    icon: <Cloud className="text-cyan-400" />,
    skills: ["AWS (EKS, TGW, Route53)", "Kubernetes (Kudos)", "Docker", "PCF", "Helm"]
  },
  {
    title: "Infrastructure as Code",
    icon: <Terminal className="text-purple-400" />,
    skills: ["Terraform (Advanced)", "CloudFormation", "YAML", "Bash", "Python"]
  },
  {
    title: "Observability & Security",
    icon: <BarChart3 className="text-green-400" />,
    skills: ["New Relic", "Splunk", "Prometheus", "ELK Stack", "Microsoft Entra ID"]
  },
  {
    title: "CI/CD & IAM",
    icon: <Shield className="text-red-400" />,
    skills: ["GitLab CI", "Jenkins", "Bamboo", "SonarQube", "Artifactory"]
  }
];

const Skills = () => {
  return (
    <section className="bg-[#030014] py-20 px-10 md:px-24">
      <h2 className="text-4xl font-bold text-white mb-12 text-center md:text-left">
        Core <span className="text-purple-500">Technical Expertise</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
            <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
            <ul className="space-y-2">
              {cat.skills.map((skill, j) => (
                <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;