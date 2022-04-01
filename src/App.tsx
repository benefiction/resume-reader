import { Resume } from '@/containers/Resume';
import { ResumeProvider } from '@/contexts/ResumeContext';
import React from 'react';
interface AppProps {}

export const App = ({}: AppProps) => {
  return (
    <ResumeProvider>
      <Resume />
    </ResumeProvider>
  );
};
