import { jestMockedComponent } from '@/mocks/jestMockComponent';
import { MockResumeJsonMax } from '@/mocks/resumeJsonMax';
import { t } from '@/utils/translate';
import { render } from '@testing-library/react';
import React from 'react';
import { Layout } from '../';

const headerSearchString = 'Mock Header';
const mockHeaderComponent = jestMockedComponent(headerSearchString);

const summarySectionString = 'Mock Summary Section Text';
const mockSectionSummaryComponent = jestMockedComponent(summarySectionString);

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

jest.mock('@/components/Footer', () => {
    return {
        Footer: () => mockFooterComponent(),
    };
});

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

    it('renders the resume layout header within the layout', () => {
        const summaryProp = 'some summary';
        const mockProps = {
            basics: { ...MockResumeJsonMax.basics, summary: summaryProp },
        };
        const { queryByText } = render(<Layout resumeData={mockProps} />);
        const sectionSummaryComponent = queryByText(headerSearchString);
        expect(sectionSummaryComponent).toBeInTheDocument();
        expect(mockSectionSummaryComponent).toBeCalledWith({
            summary: summaryProp,
        });
    });

    it('renders the resume layout header within the layout', () => {
        const mockProps = { basics: MockResumeJsonMax.basics };
        const { queryByText } = render(<Layout resumeData={mockProps} />);
        const headerComponent = queryByText(headerSearchString);
        expect(headerComponent).toBeInTheDocument();
        expect(mockHeaderComponent).toBeCalledWith(mockProps);
    });
});
