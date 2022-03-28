import { getUrlParam } from '@/utils/getUrlParam';

Object.defineProperty(window, 'location', {
    value: {
        assign: jest.fn(),
    },
    writable: true,
});

const setMockLocationSearch = (searchQuery) => {
    globalThis.window.location.search = searchQuery;
};

describe('getUrlParams', () => {
    it('should return undefined without any url param', async () => {
        setMockLocationSearch('');
        const urlParam = getUrlParam('paramKey');
        expect(urlParam).toBe(undefined);
    });

    it('should return undefined for params without value', async () => {
        setMockLocationSearch('?paramKey0&paramKey1=1&paramKey2=2');
        const urlParam = getUrlParam('paramKey0');
        expect(urlParam).toBe(undefined);
    });

    it('should return undefined for invalid params', async () => {
        setMockLocationSearch('?paramKey0=2%sdfsfsf');
        const urlParam = getUrlParam('paramKey1');
        expect(urlParam).toBe(undefined);
    });

    it('should return the value for params that have value', async () => {
        setMockLocationSearch('?paramKey0&paramKey1=1&paramKey2=2');
        const urlParam = getUrlParam('paramKey1');
        expect(urlParam).toBe('1');
    });
});
