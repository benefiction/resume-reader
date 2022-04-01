import { ResumeJson } from '@/@types/resume';
import { jestMockedComponent } from '@/mocks/jestMockComponent';
import { mockResumeJsonMax } from '@/mocks/resumeJsonMax';
import { t } from '@/utils/translate';
import { render } from '@testing-library/react';
import React from 'react';
import { Layout } from '../';

const headerSearchString = 'Mock Header';
const mockHeaderComponent = jestMockedComponent(headerSearchString);

const summarySectionString = 'Mock SectionSummary Text';
const mockSectionSummaryComponent = jestMockedComponent(summarySectionString);

const workSectionSearchString = 'Mock SectionSearch Text';
const mockSectionWorkComponent = jestMockedComponent(workSectionSearchString);

const awardSectionSearchString = 'Mock SectionAward Text';
const mockSectionAwardComponent = jestMockedComponent(awardSectionSearchString);

const contactSectionString = 'Mock SectionContact Text';
const mockSectionContactComponent = jestMockedComponent(contactSectionString);

const sectionLanguagesSearchString = 'Mock SectionLanguages Text';
const mockSectionLanguagesComponent = jestMockedComponent(sectionLanguagesSearchString);

const mockFooterComponent = jestMockedComponent('Mock Footer');

jest.mock('@/components/Header', () => {
  return {
    Header: (props: any) => mockHeaderComponent(props),
  };
});

jest.mock('@/components/SectionSummary', () => {
  return {
    SectionSummary: (props: any) => mockSectionSummaryComponent(props),
  };
});

jest.mock('@/components/SectionWork', () => {
  return {
    SectionWork: (props: any) => mockSectionWorkComponent(props),
  };
});

jest.mock('@/components/SectionContact', () => {
  return {
    SectionContact: (props: any) => mockSectionContactComponent(props),
  };
});

jest.mock('@/components/SectionLanguages', () => {
  return {
    SectionLanguages: (props: any) => mockSectionLanguagesComponent(props),
  };
});

jest.mock('@/components/SectionAwards', () => {
  return {
    SectionAwards: (props: any) => mockSectionAwardComponent(props),
  };
});

jest.mock('@/components/Footer', () => {
  return {
    Footer: () => mockFooterComponent(),
  };
});

const { basics, work, awards } = mockResumeJsonMax;

describe('<Layout>', () => {
  it('renders the loader instead of the resume layout in case of no resume data', () => {
    const { getByText } = render(<Layout />);
    const loadingHint = getByText(t('LOADING_TEXT'));
    expect(loadingHint).toBeInTheDocument();
    expect(mockFooterComponent).toBeCalledTimes(0);
  });

  it('renders the resume layout instead of loader in case of resume data', () => {
    const { queryByText } = render(<Layout resumeData={{}} />);
    const loadingHint = queryByText(t('LOADING_TEXT'));
    expect(loadingHint).not.toBeInTheDocument();
    expect(mockFooterComponent).toBeCalledTimes(1);
  });

  it('renders the summary and contact within the layout', () => {
    const summaryProp = 'some summary';
    const mockProps: ResumeJson = {
      basics: {
        ...basics,
        summary: summaryProp,
        email: 'github@benefiction.dev',
      },
    };

    const { queryByText } = render(<Layout resumeData={mockProps} />);
    const sectionSummaryComponent = queryByText(headerSearchString);
    expect(sectionSummaryComponent).toBeInTheDocument();
    expect(mockSectionSummaryComponent).toBeCalledWith({
      summary: summaryProp,
    });

    const sectionContactComponent = queryByText(contactSectionString);
    expect(sectionContactComponent).toBeInTheDocument();
    expect(mockSectionContactComponent).toBeCalledWith({
      basics: mockProps.basics,
    });
  });

  it('renders the work section within the layout', () => {
    const mockProps: ResumeJson = {
      basics: {
        name: '',
      },
      work,
    };

    const { queryByText } = render(<Layout resumeData={mockProps} />);
    const sectionWorkComponent = queryByText(workSectionSearchString);
    expect(sectionWorkComponent).toBeInTheDocument();
    expect(mockSectionWorkComponent).toBeCalledWith({
      timelineEntrys: work,
    });
  });

  it('renders the award section within the layout', () => {
    const mockProps: ResumeJson = {
      basics,
      awards,
    };

    const { queryByText } = render(<Layout resumeData={mockProps} />);
    const sectionAwardComponent = queryByText(awardSectionSearchString);
    expect(sectionAwardComponent).toBeInTheDocument();
    expect(mockSectionAwardComponent).toBeCalledWith({
      awards: awards,
    });
  });

  it('renders the languages section within the layout', () => {
    const mockProps: ResumeJson = {
      basics,
      languages: [{ language: 'lang1', fluency: 'fluent' }],
    };
    const { queryByText } = render(<Layout resumeData={mockProps} />);
    const sectionLanguagesComponent = queryByText(sectionLanguagesSearchString);
    expect(sectionLanguagesComponent).toBeInTheDocument();
    expect(mockSectionLanguagesComponent).toBeCalledWith({
      languages: mockProps.languages,
    });
  });

  it('renders the header within the layout', () => {
    const mockProps: ResumeJson = { basics: basics };
    const { queryByText } = render(<Layout resumeData={mockProps} />);
    const headerComponent = queryByText(headerSearchString);
    expect(headerComponent).toBeInTheDocument();
    expect(mockHeaderComponent).toBeCalledWith(mockProps);
  });
});
