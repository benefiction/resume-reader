import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SectionSummary } from '@/components/SectionSummary';
import { t } from '@/utils/translate';
import React from 'react';
import style from './Layout.module.css';
import type { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({
    isLoading = true,
    resumeData,
}) => {
    if (isLoading && !resumeData) {
        return <div>{t('LOADING_TEXT')}</div>;
    }

    return (
        <div className={style.layout}>
            <header className={style.header}>
                {resumeData?.basics && <Header basics={resumeData.basics} />}
            </header>
            <main className={style.main}>
                {resumeData?.basics?.summary && (
                    <SectionSummary summary={resumeData.basics.summary} />
                )}
            </main>
            <aside className={style.aside}>aside</aside>

            <footer className={style.footer}>
                <Footer />
            </footer>
        </div>
    );
};
