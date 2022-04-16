import { t } from '@/utils/translate';
import { render } from '@testing-library/react';
import React from 'react';
import { Footer } from '../';
import { version } from '../../../../package.json';

describe('<Footer>', () => {
  it('should render the component', () => {
    const { getByRole } = render(<Footer />);
    const link = getByRole('link');
    expect(link).toHaveTextContent(t('FOOTER_REPO_NOTICE').trim());
  });

  it('should contain the current version', () => {
    const { getByText } = render(<Footer />);
    const link = getByText(`v${version}`);
    expect(link).toBeInTheDocument();
  });
});
