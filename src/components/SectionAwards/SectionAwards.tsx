import { ResumeSection } from '@/components/ResumeSection';
import React from 'react';
import style from './SectionAwards.module.css';
import type { SectionAwardsProps } from './SectionAwards.types';

export const SectionAwards: React.FC<SectionAwardsProps> = ({ awards }) => {
    return (
        <ResumeSection title={'Awards'}>
            <ul>
                {awards.map((award) => {
                    return (
                        <li key={`${award.title}${award.date}`}>
                            <h4 className={style.title}>{award.title}</h4>
                            <p className={style.summary}>{award.summary}</p>
                            <span className={style.awarder}>
                                {award.awarder}
                            </span>
                            <time dateTime={award.date} className={style.date}>
                                {award.date}
                            </time>
                        </li>
                    );
                })}
            </ul>
        </ResumeSection>
    );
};
