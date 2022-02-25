import { ResumeSection } from '@/components/ResumeSection';
import React from 'react';
import style from './SectionSummary.module.css';
import type { SectionSummaryProps } from './SectionSummary.types';

export const SectionSummary: React.FC<SectionSummaryProps> = ({ summary }) => {
    return (
        <ResumeSection title={'Summary'}>
            <span className={style.detail}>{summary}</span>
        </ResumeSection>
    );
};
