import { MockComponent } from '@/mocks/MockComponent';
import { MockResumeJsonMax } from '@/mocks/resumeJsonMax';
import { t } from '@/utils/translate';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Layout } from '../';

const mockFooterComponent = jest.fn(() => (
    <MockComponent contentString={'Mock Footer'} />
));

const headerSearchString = 'Mock Header';
const mockHeaderComponent = jest
    .fn()
    .mockImplementation(() => (
        <MockComponent contentString={headerSearchString} />
    ));

jest.mock('@/components/Footer', () => {
    return {
        Footer: () => mockFooterComponent(),
    };
});

jest.mock('@/components/Header', () => {
    return {
        Header: (props: any) => mockHeaderComponent(props),
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
        const mockProps = { basics: MockResumeJsonMax.basics };
        const { queryByText } = render(<Layout resumeData={mockProps} />);
        const headerComponent = queryByText(headerSearchString);
        expect(headerComponent).toBeInTheDocument();
        expect(mockHeaderComponent).toBeCalledWith(mockProps);
    });
});
