import { ResumeJson } from '@/@types/resume';
import { ResumeProvider } from '@/contexts/ResumeContext';
import { MockComponent } from '@/mocks/MockComponent';
import { MockResumeJsonMin } from '@/mocks/resumeJsonMin';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Resume } from '../Resume';

const layoutSearchString = 'Mock Layout';
const mockLayoutComponent: React.FC = jest
    .fn()
    .mockImplementation(() => (
        <MockComponent contentString={layoutSearchString} />
    ));

const mockFetchFn = jest.fn((callback: (arg0: ResumeJson) => void) =>
    callback(MockResumeJsonMin)
);

jest.mock('@/components/Layout', () => {
    return {
        Layout: (props: any) => mockLayoutComponent(props),
    };
});

jest.mock('@/utils/resumeFetcher', () => {
    return {
        fetchResume: (callback) => mockFetchFn(callback),
    };
});

describe('ResumeProvider', () => {
    it('should call the layout initially with the right loading state', async () => {
        const { getByText } = render(
            <ResumeProvider>
                <Resume />
            </ResumeProvider>
        );
        expect(getByText(layoutSearchString)).toBeInTheDocument();

        expect(mockLayoutComponent).toHaveBeenNthCalledWith(1, {
            isLoading: true,
            resumeData: undefined,
        });
    });

    it('should call the layout with result and updated loading state after fetch', async () => {
        const { getByText } = render(
            <ResumeProvider>
                <Resume />
            </ResumeProvider>
        );
        expect(getByText(layoutSearchString)).toBeInTheDocument();
        expect(mockFetchFn).toHaveBeenCalledTimes(1);
        expect(mockLayoutComponent).toHaveBeenNthCalledWith(2, {
            isLoading: false,
            resumeData: MockResumeJsonMin,
        });
    });
});
