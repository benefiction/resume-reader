import type { ResumeJson } from '@/@types/resume';
import { getConfigValue } from '@/utils/getConfig';
import { getUrlParam } from '@/utils/getUrlParam';
import { customLog } from '@/utils/logger';

const userBaseUrl = getConfigValue('RESUME_BASE_URL');
const resumePath = getUrlParam('resumePath') || getConfigValue('RESUME_DEFAULT_PATH');

const resumeUrl = `${userBaseUrl}${resumePath}`;

export const fetchResume = async (
    onSuccess: (resumeJson: ResumeJson) => void,
    onFailure: (error: string) => void = (error: string) => customLog('fallback onFailure', error)
) => {
    try {
        const response = await fetch(resumeUrl);

        if (response.status !== 200) throw new Error(`Unexpected Status Code:${response.status}`);

        const json = await response.json();
        onSuccess(json);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Oops, something went wrong during resume fetching';

        onFailure(errorMessage);
    }
};
