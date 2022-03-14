import { t } from '../translate';
const LOADING_TEXT = 'some translation text';

jest.mock(
    '@/assets/translations-en_GB.json',
    () => ({
        LOADING_TEXT,
    }),
    { virtual: true }
);

describe('t from translation', () => {
    it('returns the right value for the key', () => {
        expect(t('LOADING_TEXT')).toBe(LOADING_TEXT);
    });
});
