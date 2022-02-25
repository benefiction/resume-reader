import { MockResumeJsonMax } from '@/mocks/resumeJsonMax';
import { render } from '@testing-library/react';
import React from 'react';
import { Header } from '../';

const { basics } = MockResumeJsonMax;

describe('<Header>', () => {
    it('should render the name', () => {
        const { getByText } = render(<Header basics={basics} />);

        const name = getByText(basics.name);
        expect(name).toBeInTheDocument();
    });

    it('should render the lable', () => {
        const { getByText } = render(<Header basics={basics} />);

        const label = getByText(basics.label);
        expect(label).toBeInTheDocument();
    });
});
