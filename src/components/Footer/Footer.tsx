import GithubIcon from '@/assets/profile_github.svg';
import { t } from '@/utils/translate';
import React from 'react';
import style from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <a href="https://github.com/benefiction/resume-reader">
        <img className={style.link_icon} src={GithubIcon} />
        {t('FOOTER_REPO_NOTICE')}
      </a>
    </div>
  );
};
