import GithubIcon from '@assets/icons/profile_github.svg';
import { t } from '@utils/translate';
import React from 'react';

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
