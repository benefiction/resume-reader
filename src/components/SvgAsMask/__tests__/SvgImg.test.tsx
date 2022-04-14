import { render } from '@testing-library/react';
import React from 'react';
import { SvgAsMask } from '../';

const mockTitle = 'some icon';
const mockSrc = 'some.url/path/icon.svg';

describe('<SvgAsMask>', () => {
  it('renders the component with props', () => {
    const { getByText } = render(<SvgAsMask title={mockTitle} src={mockSrc} />);

    const maskedShape = getByText(mockTitle);
    expect(maskedShape).toBeInTheDocument();
    expect(maskedShape).toHaveAttribute('style', `--maskUrl: url(${mockSrc});`);
  });
});
