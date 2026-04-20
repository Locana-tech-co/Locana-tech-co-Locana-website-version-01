import React from 'react';
import { Team } from '../components/Team';
import { Careers } from '../components/Careers';

export function Company() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <Team />
      <Careers />
    </main>
  );
}
