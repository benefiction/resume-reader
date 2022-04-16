import { Resume } from '@/containers/Resume';
import { ResumeProvider } from '@/contexts/ResumeContext';
import React from 'react';

export const App = () => {
  return (
    <ResumeProvider>
      <Resume />
    </ResumeProvider>
  );
};
