import { Layout } from '@/components/Layout';
import { ResumeContext } from '@/contexts/ResumeContext';
import { fetchResume } from '@/utils/resumeFetcher';
import React, { useContext, useEffect } from 'react';

export const Resume: React.FC = () => {
  const { setResumeJson, resume } = useContext(ResumeContext);

  useEffect(() => {
    fetchResume(setResumeJson);
  }, []);

  return <Layout isLoading={typeof resume === 'undefined'} resumeData={resume} />;
};
