import { customLog } from '@/utils/logger';
import { t } from './translate';

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
        customLog(t('ERROR_URI_DECODE'), error);
        return undefined;
    }
};
