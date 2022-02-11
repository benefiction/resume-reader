import GithubIcon from '@assets/icons/profile_github.svg';
import React from 'react';
import { t } from '../../utils/translate.ts';

export const Footer: React.FC = () => {
    return (
        <div>
            <a href='https://github.com/benefiction/resume-reader'>
                <img src={GithubIcon} />
                {t('FOOTER_REPO_NOTICE')}
            </a>
        </div>
    );
};
