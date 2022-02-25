import { MockResumeJsonMin } from '@/mocks/resumeJsonMin';
import { fetchResume } from '@/utils/resumeFetcher';

const mockCustomLog = jest.fn();

jest.mock('@/utils/logger', () => {
    return {
        customLog: (...params: any) => mockCustomLog(...params),
    };
});

const setMockFetch = (responseCode) => {
    globalThis.fetch = jest.fn(
        () =>
            Promise.resolve({
                status: responseCode,
                json: () => Promise.resolve(MockResumeJsonMin),
            }) as any
    );
};

const onSuccess = jest.fn();
const onFailure = jest.fn();

describe('fetchResume', () => {
    it('should call onSucess with the response in case of sucess', async () => {
        setMockFetch(200);
        const resume = await fetchResume(onSuccess, onFailure);
        expect(onSuccess).toHaveBeenCalledWith(MockResumeJsonMin);
    });

    it('should call on onFailure in status code case of unexpected status code', async () => {
        setMockFetch(418);
        const resume = await fetchResume(onSuccess, onFailure);
        expect(onFailure).toHaveBeenCalledWith('Unexpected Status Code:418');
    });

    it('should use customLog in case the onFailure callback is missing', async () => {
        setMockFetch(418);
        const resume = await fetchResume(onSuccess);
        expect(mockCustomLog).toHaveBeenCalledWith(
            'fallback onFailure',
            'Unexpected Status Code:418'
        );
    });

    it('should call on onFailure with default error msg in case of missing error', async () => {
        globalThis.fetch = jest
            .fn()
            .mockImplementationOnce(() => Promise.reject());
        const resume = await fetchResume(onSuccess, onFailure);
        expect(onFailure).toHaveBeenCalledWith(
            'Oops, something went wrong during resume fetching'
        );
    });

    it('should call on onFailure with  error msg in case of error is provided', async () => {
        globalThis.fetch = jest
            .fn()
            .mockImplementationOnce(() =>
                Promise.reject(
                    new Error('SORRY - could not connect to your resume')
                )
            );
        const resume = await fetchResume(onSuccess, onFailure);
        expect(onFailure).toHaveBeenCalledWith(
            'SORRY - could not connect to your resume'
        );
    });
});
