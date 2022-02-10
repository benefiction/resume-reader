import { render } from '@testing-library/react';
import * as React from 'react';
import { Footer } from '../';

const mockTitle = 'some icon';
const mockSrc = 'some.url/path/icon.svg';

describe('<Footer>', () => {
    it('renders the component', () => {
        const { getByText } = render(<Footer />);

        const link = getByText(
            'This page is deployed with github actions source can be found here'
        );
        expect(link).toBeTruthy();
    });
});
