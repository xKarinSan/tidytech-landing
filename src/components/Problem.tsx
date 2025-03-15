
import React from 'react';
import { AlertTriangle, Clock, Banknote, Code2, BrainCircuit } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
      title: "Inconsistent Code",
      description: "Mixing naming conventions, code styles, and patterns leads to confusion and bugs."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Wasted Development Time",
      description: "Engineers spend up to 42% of their time dealing with technical debt rather than building new features."
    },
    {
      icon: <Banknote className="h-6 w-6 text-green-600" />,
      title: "Expensive Maintenance",
      description: "Poor code quality costs businesses up to 2.5x more in long-term maintenance costs."
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-purple-500" />,
      title: "AI-Generated Inconsistencies",
      description: "LLMs create code that doesn't follow your team's standards and practices."
    }
  ];

  return (
    <section id="problem" className="py-16 md:py-24 px-6 md:px-12 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Hidden Cost of Technical Debt</h2>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
            As codebases grow and teams use AI tools, technical debt accumulates silently, slowing down development and increasing costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-brand-light/70">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block p-4 bg-brand-teal/10 rounded-lg border border-brand-teal/30 mb-6">
            <Code2 className="h-10 w-10 text-brand-teal" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            CleanCode cuts technical debt by up to 60%
          </h3>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
            Our intelligent system analyzes your codebase, detects issues, and fixes them automatically—ensuring consistency across all code, even AI-generated ones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
