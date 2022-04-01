import { render } from '@testing-library/react';
import React from 'react';
import { SectionLanguages } from '..';

const mockLangs = [
  { language: 'lang1', fluency: 'fluent' },
  { language: 'lang2', fluency: 'fluent' },
  { language: 'lang3', fluency: 'fluent' },
];

describe('<SectionLanguages />', () => {
  it('should render all languages', () => {
    const { getAllByText } = render(<SectionLanguages languages={mockLangs} />);
    expect(getAllByText('fluent')).toHaveLength(3);
  });
});
