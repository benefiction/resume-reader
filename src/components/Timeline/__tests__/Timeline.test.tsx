import { mockResumeJsonMax } from '@/mocks/resumeJsonMax';
import { render } from '@testing-library/react';
import React from 'react';
import { Timeline } from '../';

const { work } = mockResumeJsonMax;

describe('<Timeline>', () => {
    it('should render as many entrys as are passed', () => {
        const { getAllByRole } = render(<Timeline timelineEntrys={work} />);
        const items = getAllByRole('definition');
        expect(items).toHaveLength(work.length);
    });

    it('renders all propertys for the entries', () => {
        const { name, position, startDate, endDate, summary, highlights } =
            work[0];

        const { getByText } = render(<Timeline timelineEntrys={work} />);
        const nameEl = getByText(name);
        const positionEl = getByText(position);
        const startDateEl = getByText(startDate);
        const endDateEl = getByText(endDate);
        const summaryEl = getByText(summary);
        const highlightEl = getByText(highlights[0]);
        [
            nameEl,
            positionEl,
            startDateEl,
            endDateEl,
            summaryEl,
            highlightEl,
        ].forEach((element) => expect(element).toBeInTheDocument());
    });
});
