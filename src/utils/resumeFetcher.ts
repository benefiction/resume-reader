import type { ResumeJson } from '@/@types/resume';
import { customLog } from '@/utils/logger';

const userBaseUrl = 'https://gist.githubusercontent.com/benefiction';
const defaultResumePath =
    '/97a0966005508793dc91a4988d886fb2/raw/2957a482f83b63c9d4748933479658bbe3fb7a99/resume_reduced.json';

const resumeUrl = `${userBaseUrl}${defaultResumePath}`;

export const fetchResume = async (
    onSuccess: (resumeJson: ResumeJson) => void,
    onFailure: (error: string) => void = (error: string) =>
        customLog('fallback onFailure', error)
) => {
    try {
        const response = await fetch(resumeUrl);

        if (response.status !== 200)
            throw new Error(`Unexpected Status Code:${response.status}`);

        const json = await response.json();
        onSuccess(json);
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : 'Oops, something went wrong during resume fetching';

        onFailure(errorMessage);
    }
};
