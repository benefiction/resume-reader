import { render } from '@testing-library/react';
import { t } from '@utils/translate';
import * as React from 'react';
import { Layout } from '../';

const mockFooter: React.FC = jest
    .fn()
    .mockImplementation(() => <div>Mock Footer</div>);

jest.mock('@components/Footer', () => {
    return {
        Footer: () => mockFooter({}),
    };
});

describe('<Layout>', () => {
    it('renders the loader instead of the resume layout in case of no resume data', () => {
        const { getByText } = render(<Layout />);
        const loadingHint = getByText(t('LOADING_TEXT'));
        expect(loadingHint).toBeInTheDocument();
        expect(mockFooter).toBeCalledTimes(0);
    });

    it('renders the resume layout instead of loader in case of resume data', () => {
        const { queryByText } = render(<Layout resumeData={{}} />);
        const loadingHint = queryByText(t('LOADING_TEXT'));
        expect(loadingHint).not.toBeInTheDocument();
        expect(mockFooter).toBeCalledTimes(1);
    });
});
