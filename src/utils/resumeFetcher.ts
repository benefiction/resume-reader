import type { ResumeJson } from '@/@types/resume';
import { getConfigValue } from '@/utils/getConfig';
import { getUrlParam } from '@/utils/getUrlParam';
import { customLog } from '@/utils/logger';
import { t } from '@/utils/translate';

const userBaseUrl = getConfigValue('RESUME_BASE_URL');
const resumePath = getUrlParam('resumePath') || getConfigValue('RESUME_DEFAULT_PATH');

const resumeUrl = `${userBaseUrl}${resumePath}`;

export const fetchResume = async (
  onSuccess: (resumeJson: ResumeJson) => void,
  onFailure: (error: string) => void = (error: string) =>
    customLog(t('ERROR_FETCH_RESPONSE_FALLBACK'), error)
) => {
  try {
    const response = await fetch(resumeUrl);

    if (response.status !== 200)
      throw new Error(`${t('ERROR_FETCH_RESPONSE_STATUS')}${response.status}`);

    const json = await response.json();
    onSuccess(json);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : t('ERROR_FETCH_RESPONSE_MESSAGE');

    onFailure(errorMessage);
  }
};
