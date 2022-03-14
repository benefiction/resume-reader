import { getProfileIcon } from '@/utils/profileIcoMatcher';

//  there is an actual issue that prevents mocking multiple files that are affected by the moduleNameMapper,
//  (https://github.com/facebook/jest/issues/10458) therefore it is required to have multiple test files

jest.mock('@/assetsprofile_linkedin.svg', () => 'profile_linkedin.svg');

describe('getProfileIcon', () => {
    it('returns the right value for linkedin', () => {
        const urlPath = getProfileIcon('linkedin');
        expect(urlPath).toBe('profile_linkedin.svg');
    });
});
