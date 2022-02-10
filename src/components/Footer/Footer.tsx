import GithubIcon from '@assets/icons/profile_github.svg';
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div>
            <a href='https://github.com/benefiction/resume-reader'>
                <img src={GithubIcon} />
                This page is deployed with github actions source can be found
                here
            </a>
        </div>
    );
};
