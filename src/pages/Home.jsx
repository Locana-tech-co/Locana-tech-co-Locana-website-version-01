import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Services } from '../components/Services';
import { CaseStudies } from '../components/CaseStudies';
import { Integration } from '../components/Integration';
import { Process } from '../components/Process';

export function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <CaseStudies />
      <Integration />
      <Process />
    </main>
  );
}
