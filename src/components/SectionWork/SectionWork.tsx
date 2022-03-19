import { ResumeSection } from '@/components/ResumeSection';
import { Timeline } from '@/components/Timeline';
import React from 'react';
import type { SectionWorkProps } from './SectionWork.types';

export const SectionWork: React.FC<SectionWorkProps> = ({ timelineEntrys }) => {
    return (
        <ResumeSection title={'Work'}>
            <Timeline timelineEntrys={timelineEntrys} />
        </ResumeSection>
    );
};
