import { getProfileIcon } from '@/utils/profileIcoMatcher';

//  there is an actual issue that prevents mocking multiple files that are affected by the moduleNameMapper,
//  (https://github.com/facebook/jest/issues/10458) therefore it is required to have multiple test files

jest.mock('@/assets/profile_strava.svg', () => 'profile_strava.svg');

describe('getProfileIcon', () => {
    it('returns the right value for strava', () => {
        const urlPath = getProfileIcon('strava');
        expect(urlPath).toBe('profile_strava.svg');
    });
});
