import { render } from '@testing-library/react';
import React from 'react';
import { ResumeSectionHeader } from '../';

const headlineString = 'Mock Headline';
const mockTranslateFn: (arg: string) => string = jest.fn().mockImplementation(() => headlineString);

jest.mock('@/utils/translate', () => {
  return {
    t: (arg: string) => mockTranslateFn(arg),
  };
});

describe('<ResumeSectionHeader>', () => {
  it('should render the title given from the translation', () => {
    const { getByText } = render(<ResumeSectionHeader title={'Test'} />);
    expect(mockTranslateFn).toBeCalledWith('SECTION_HEADER_TEST');

    const headline = getByText(headlineString);
    expect(headline).toBeInTheDocument();
  });
});
