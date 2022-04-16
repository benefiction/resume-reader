import type { ResumeJson } from '@/@types/resume';
import React, { useMemo, useState } from 'react';
import { ResumeContext } from './ResumeContext';
import type { IResumeContext, TypeSetResumeJson } from './ResumeContext.types';

export const ResumeProvider: React.FC = ({ children }) => {
  const [resume, setResume] = useState<ResumeJson | undefined>(undefined);

  const setResumeJson: TypeSetResumeJson = (resumeJson) => setResume(resumeJson);

  const providerValue: IResumeContext = useMemo(() => {
    return {
      setResumeJson,
      resume,
    };
  }, [resume]);

  return <ResumeContext.Provider value={providerValue}>{children}</ResumeContext.Provider>;
};
