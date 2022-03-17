import { mockResumeJsonMax } from '@/mocks/resumeJsonMax';
import { render } from '@testing-library/react';
import React from 'react';
import { SectionAwards } from '../';

describe('<SectionAwards />', () => {
    const { awards } = mockResumeJsonMax;
    it('should render all awards', () => {
        const { getAllByRole } = render(<SectionAwards awards={awards} />);
        expect(getAllByRole('listitem')).toHaveLength(awards.length);
    });

    it('should render all information regarding an award', () => {
        const mockAwards = [awards[0]];

        const { getByText } = render(<SectionAwards awards={mockAwards} />);

        const titleElm = getByText(mockAwards[0].title);
        const awarderElm = getByText(mockAwards[0].awarder);
        const dateElm = getByText(mockAwards[0].date);
        const summaryElm = getByText(mockAwards[0].summary);
        [titleElm, awarderElm, dateElm, summaryElm].forEach((element) => {
            expect(element).toBeInTheDocument();
        });
    });
});
