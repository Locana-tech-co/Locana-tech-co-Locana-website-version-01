import React from 'react';
import { Services } from '../components/Services';
import { Integration } from '../components/Integration';
import { Process } from '../components/Process';

export function ServicesPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <Services />
      <Integration />
      <Process />
    </main>
  );
}
