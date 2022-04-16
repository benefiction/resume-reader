import { ResumeContext } from '@/contexts/ResumeContext';
import { MockResumeJsonMin } from '@/mocks/resumeJsonMin';
import { render } from '@testing-library/react';
import React, { useContext, useEffect } from 'react';
import { ResumeProvider } from '../ResumeContext.provider';

const MockConsumerDefault: React.FC = () => {
  const { resume } = useContext(ResumeContext);
  return <div>{`${resume}`}</div>;
};

const MockConsumerWithUpdate: React.FC = () => {
  const { setResumeJson, resume } = useContext(ResumeContext);

  useEffect(() => {
    setResumeJson(MockResumeJsonMin);
  }, []);

  return <div>{`${JSON.stringify(resume)}`}</div>;
};

describe('ResumeProvider', () => {
  it('should render without undefined as default', () => {
    const { getByText } = render(
      <ResumeProvider>
        <MockConsumerDefault />
      </ResumeProvider>
    );
    expect(getByText('undefined')).toBeInTheDocument();
  });

  it('should render with new value after setResumeJson was called', async () => {
    const { findByText } = render(
      <ResumeProvider>
        <MockConsumerWithUpdate />
      </ResumeProvider>
    );

    const updatedResume = await findByText(JSON.stringify(MockResumeJsonMin));
    expect(updatedResume).toBeInTheDocument();
  });
});
