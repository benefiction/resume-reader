import GithubIcon from '@/assets/profile_github.svg';
import { SvgAsMask } from '@/components/SvgAsMask';
import { t } from '@/utils/translate';
import React from 'react';
import { version } from '../../../package.json';
import style from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <a className={style.link} href="https://github.com/benefiction/resume-reader">
        {t('FOOTER_REPO_NOTICE')}
        <SvgAsMask src={GithubIcon} title={t('FOOTER_REPO_NOTICE')} styleClass={style.link_icon} />
      </a>
      <p className={style.version_hint}>v{version}</p>
    </div>
  );
};
