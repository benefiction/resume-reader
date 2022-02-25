import { render } from '@testing-library/react';
import React from 'react';
import { SectionSummary } from '../';

const mockSummary = 'some random text';

describe('<SectionSummary>', () => {
    it('renders the component with summary', () => {
        const { getByText } = render(<SectionSummary summary={mockSummary} />);

        const summary = getByText(mockSummary);
        expect(summary).toBeInTheDocument();
    });
});
