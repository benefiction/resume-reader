import { ResumeSection } from '@/components/ResumeSection';
import React from 'react';
import style from './SectionLanguages.module.css';
import type { SectionLanguagesProps } from './SectionLanguages.types';

export const SectionLanguages: React.FC<SectionLanguagesProps> = ({ languages }) => {
  return (
    <ResumeSection title={'languages'}>
      <ul className={style.language_list}>
        {languages.map((language) => (
          <li key={language.language} className={style.language_item}>
            <strong className={style.language}>{language.language} </strong>:{' '}
            <span className={style.fluency}>{language.fluency}</span>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
};
