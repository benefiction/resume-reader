import { render } from '@testing-library/react';
import React from 'react';
import { SvgImg } from '../';

const mockTitle = 'some icon';
const mockSrc = 'some.url/path/icon.svg';

describe('<SvgImg>', () => {
  it('renders the child/conntent', () => {
    const { getByTitle, container } = render(<SvgImg title={mockTitle} src={mockSrc} />);

    const source = container.getElementsByTagName('source')[0];
    expect(source).toHaveAttribute('srcSet', mockSrc);
    const img = getByTitle(mockTitle);
    expect(img).toBeInTheDocument();
  });
});
