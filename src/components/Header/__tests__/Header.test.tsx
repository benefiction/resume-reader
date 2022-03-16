import { mockResumeJsonMax } from '@/mocks/resumeJsonMax';
import { render } from '@testing-library/react';
import React from 'react';
import { Header } from '../';

const { basics } = mockResumeJsonMax;

describe('<Header>', () => {
    it('should render the name and lable', () => {
        const { getByText } = render(<Header basics={basics} />);

        const name = getByText(basics.name);
        expect(name).toBeInTheDocument();

        const label = getByText(basics.label);
        expect(label).toBeInTheDocument();
    });
});
