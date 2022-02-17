import { t } from '@/utils/translate';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Footer } from '../';

const mockTitle = 'some icon';
const mockSrc = 'some.url/path/icon.svg';

describe('<Footer>', () => {
    it('renders the component', () => {
        const { getByText } = render(<Footer />);

        const link = getByText(t('FOOTER_REPO_NOTICE'));
        expect(link).toBeInTheDocument();
    });
});
