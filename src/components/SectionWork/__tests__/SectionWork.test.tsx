import { jestMockedComponent } from '@/mocks/jestMockComponent';
import { mockResumeJsonMax } from '@/mocks/resumeJsonMax';
import { render } from '@testing-library/react';
import React from 'react';
import { SectionWork } from '..';

const { work } = mockResumeJsonMax;

const TimelineString = 'This is the the timeline Component';
const mockTimelineComponent = jestMockedComponent(TimelineString);

jest.mock('@/components/Timeline', () => {
  return {
    Timeline: (props: any) => mockTimelineComponent(props),
  };
});

describe('<SectionWork />', () => {
  it('should render', () => {
    const { queryByText } = render(<SectionWork timelineEntrys={work} />);
    const timelineComponent = queryByText(TimelineString);
    expect(timelineComponent).toBeInTheDocument();
    expect(mockTimelineComponent).toBeCalledWith({
      timelineEntrys: work,
    });
  });
});
