
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code } from "lucide-react";
import CodeSnippet from './CodeSnippet';

const Hero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 bg-gradient-to-b from-white to-brand-light/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <div className="flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full w-fit">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Technical Debt Elimination</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight">
            Clean Up Your <span className="text-brand-teal">AI-Generated</span> Code Mess
          </h1>
          
          <p className="text-lg md:text-xl text-brand-gray max-w-lg">
            Automatically detect and fix inconsistent patterns, poor practices, and technical debt in your codebase—even in AI-generated code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white flex items-center gap-2">
              <span>Start Cleaning Your Code</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-brand-blue/20 text-brand-blue hover:bg-brand-blue/5">
              View Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-brand-gray/20 border-2 border-white flex items-center justify-center text-xs font-medium text-brand-blue">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-gray">
              <span className="font-semibold">400+</span> developers already using CleanCode
            </p>
          </div>
        </div>
        
        <div className="lg:ml-auto w-full max-w-xl">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-teal/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
            
            <CodeSnippet
              fileName="messyAICode.js"
              language="javascript"
              beforeCode={`// AI-generated mess
function getData(user_id, user_Name) {
  // This doesn't follow our naming standards
  let result = [];
  
  // Inconsistent promise handling
  fetch('/api/data')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // Poor error handling
      result = data.items;
    });
    
  // This will always return empty array!
  return result;
}`}
              afterCode={`// CleanCode optimized
async function getData(userId, userName) {
  // Follows team's naming conventions
  try {
    // Proper async/await pattern
    const response = await fetch('/api/data');
    const data = await response.json();
    
    // Proper error handling
    return data.items || [];
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
  }
}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
