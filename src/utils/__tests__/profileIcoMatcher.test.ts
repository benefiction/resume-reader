import { getProfileIcon } from '@/utils/profileIcoMatcher';

//  there is an actual issue that prevents mocking multiple files that are affected by the moduleNameMapper,
//  (https://github.com/facebook/jest/issues/10458) therefore it is required to have multiple test files

jest.mock('@/assets/profile_github.svg', () => 'profile_github.svg');

describe('getProfileIcon', () => {
  it('returns the right value for github', () => {
    const urlPath = getProfileIcon('github');
    expect(urlPath).toBe('profile_github.svg');
  });

  it('returns the right value for an unknowen icon', () => {
    const urlPath = getProfileIcon('random String');
    expect(urlPath).toBe(null);
  });
});
