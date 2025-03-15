
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-brand-blue to-brand-blue/90 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-2 bg-white/10 rounded-full mb-6 animate-pulse">
          <Zap className="h-6 w-6 text-brand-teal" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Stop Drowning in Technical Debt
        </h2>
        
        <p className="text-lg md:text-xl text-brand-light/80 mb-8 max-w-2xl mx-auto">
          Limited spots available for our beta program. Join now and get 6 months free when we launch.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-brand-teal mb-2">400+</div>
            <p className="text-sm text-brand-light/70">Active Users</p>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-brand-teal mb-2">60%</div>
            <p className="text-sm text-brand-light/70">Debt Reduction</p>
          </div>
          
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-brand-teal mb-2">3x</div>
            <p className="text-sm text-brand-light/70">Developer Productivity</p>
          </div>
        </div>
        
        <div className="mt-12">
          <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-6 text-lg flex items-center gap-2">
            <span>Claim Your Spot Now</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
          
          <p className="text-sm text-brand-light/60 mt-4">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
