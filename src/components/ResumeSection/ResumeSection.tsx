import { ResumeSectionHeader } from '@/components/ResumeSectionHeader';
import React from 'react';
import style from './ResumeSection.module.css';
import type { ResumeSectionProps } from './ResumeSection.types';

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  children,
  title,
}) => {
  return (
    <section className={style.sections}>
      <ResumeSectionHeader title={title} />
      {children}
    </section>
  );
};
