import { render } from '@testing-library/react';
import React from 'react';
import { ProfileList } from '..';

const mockProfiles = [
  {
    network: 'strava',
    username: 'string1',
    url: 'string1',
  },
  {
    network: 'linkedin',
    username: 'string2',
    url: 'string2',
  },
];

describe('<ProfileList />', () => {
  it('should renders the amount of profiles that is provided', () => {
    const { getAllByRole } = render(<ProfileList profiles={mockProfiles} />);

    const profiles = getAllByRole('listitem');
    expect(profiles.length).toBe(mockProfiles.length);
  });
});
