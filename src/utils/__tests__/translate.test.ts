import { t } from '../translate';
const mockedText = 'some translation text';

jest.mock(
    '@assets/translations-en_GB.json',
    () => ({
        NEW_TRANSLATION: 'mocked text',
    }),
    { virtual: true }
);

describe('t from translation', () => {
    it('returns the right value for the key', () => {
        expect(t('NEW_TRANSLATION')).toBe('mocked text');
    });
});
