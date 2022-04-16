import type { TranslationKeyType } from '@/utils/translate';
import { t } from '@/utils/translate';
import React from 'react';
import style from './ResumeSectionHeader.module.css';
import type { ResumeSectionHeaderProps } from './ResumeSectionHeader.types';

export const ResumeSectionHeader: React.FC<ResumeSectionHeaderProps> = ({ title }) => {
  const translatedTitle = t(`SECTION_HEADER_${title.toUpperCase()}` as TranslationKeyType);
  return <h2 className={style.h2}>{translatedTitle}</h2>;
};
