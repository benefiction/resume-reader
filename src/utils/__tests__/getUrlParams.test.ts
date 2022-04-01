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

const testSamples: { queryString: string; result: string | undefined }[] = [
  {
    queryString: '',
    result: undefined,
  },
  {
    queryString: '?keyToTest&mock=mock1',
    result: undefined,
  },
  {
    queryString: '?keyToTest=2%sdfsfsf&mock=mock1',
    result: undefined,
  },
  {
    queryString: '?keyToTest=1&mock=mock1',
    result: '1',
  },
];

describe('getUrlParams', () => {
  testSamples.forEach(({ queryString, result }) => {
    it(`should return '${result}' with '${result}' as url param`, async () => {
      setMockLocationSearch(queryString);
      const urlParam = getUrlParam('keyToTest');
      expect(urlParam).toBe(result);
    });
  });
});
