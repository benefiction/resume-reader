import GithubIcon from '@/assets/profile_github.svg';
import { t } from '@/utils/translate';
import React from 'react';
import { version } from '../../../package.json';
import style from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <a className={style.link} href="https://github.com/benefiction/resume-reader">
        {t('FOOTER_REPO_NOTICE')}
        <img className={style.link_icon} src={GithubIcon} />
      </a>
      <p className={style.version_hint}>v{version}</p>
    </div>
  );
};
