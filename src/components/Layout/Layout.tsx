import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SectionContact } from '@/components/SectionContact';
import { SectionLanguages } from '@/components/SectionLanguages';
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
    const { basics } = resumeData;

    return (
        <div className={style.layout}>
            <header className={style.header}>
                {basics && <Header basics={basics} />}
            </header>
            <main className={style.main}>
                {basics?.summary && <SectionSummary summary={basics.summary} />}
            </main>
            <aside className={style.aside}>
                {basics && <SectionContact basics={basics} />}
                {resumeData.languages && (
                    <SectionLanguages languages={resumeData.languages} />
                )}
            </aside>

            <footer className={style.footer}>
                <Footer />
            </footer>
        </div>
    );
};
