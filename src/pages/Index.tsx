import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeatureCard } from '@/components/FeatureCard';

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <HeroSection />
        <div className="absolute bottom-0 right-0 z-10 max-md:relative max-md:flex max-md:justify-center max-md:mt-10">
          <FeatureCard />
        </div>
      </div>
    </main>
  );
};

export default Index;
