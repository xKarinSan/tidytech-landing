
import React from 'react';
import { CheckCircle2, GitMerge, Sparkles, Shield, Bot, Zap, FileText, Brush } from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Code Detection",
      description: "Automatically identify AI-generated code that doesn't follow your team's standards",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Automatic Fixes",
      description: "Apply consistent naming, formatting, and structural patterns with a single click",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      icon: <Brush className="h-6 w-6" />,
      title: "Code Cleaning",
      description: "Remove redundancies, dead code, and optimize complex expressions automatically",
      color: "bg-blue-400/10 text-blue-400 border-blue-400/20"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Auto-Documentation",
      description: "Generate comprehensive documentation for functions, classes and APIs from your codebase",
      color: "bg-amber-400/10 text-amber-400 border-amber-400/20"
    },
    {
      icon: <GitMerge className="h-6 w-6" />,
      title: "CI/CD Integration",
      description: "Catch and fix inconsistencies before they make it into your codebase",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Tech Debt Scoring",
      description: "Get measurable insights on your codebase health and track improvements",
      color: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Checks",
      description: "Identify and fix security vulnerabilities in AI-generated code",
      color: "bg-red-500/10 text-red-500 border-red-500/20"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Detect and fix performance bottlenecks automatically",
      color: "bg-teal-500/10 text-teal-500 border-teal-500/20"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            Features That Eliminate Technical Debt
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            CleanCode provides everything you need to maintain code quality at scale, even when using AI coding assistants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={cn("p-3 rounded-lg inline-block mb-4 border", feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">{feature.title}</h3>
              <p className="text-brand-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
