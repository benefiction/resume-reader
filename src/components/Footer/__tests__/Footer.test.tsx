import { t } from '@/utils/translate';
import { render } from '@testing-library/react';
import React from 'react';
import { Footer } from '../';

describe('<Footer>', () => {
  it('renders the component', () => {
    const { getByText } = render(<Footer />);

    const link = getByText(t('FOOTER_REPO_NOTICE'));
    expect(link).toBeInTheDocument();
  });
});
