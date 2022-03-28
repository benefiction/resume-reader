import { customLog } from '@/utils/logger';

export const getUrlParam = (paramKey: string): string | undefined => {
    const queryString = window.location.search;

    if (!queryString) {
        return undefined;
    }

    const urlParams = new URLSearchParams(queryString);
    const urlParam = urlParams.get(paramKey);

    try {
        return urlParam ? decodeURI(urlParam) : undefined;
    } catch (error) {
        customLog('URI decoding failed, returning undefined:', error);
        return undefined;
    }
};
