import { getConfigValue } from '../getConfig';
const RESUME_BASE_URL = 'https://some-url.com';

jest.mock('../../app_config.json', () => ({
  RESUME_BASE_URL,
}));

describe('getConfig', () => {
  it('should return value for config key', () => {
    expect(getConfigValue('RESUME_BASE_URL')).toBe(RESUME_BASE_URL);
  });
});
