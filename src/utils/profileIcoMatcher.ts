import gitLogo from '@/assets/profile_github.svg';
import linkedinLogo from '@/assets/profile_linkedin.svg';
import stravaLogo from '@/assets/profile_strava.svg';

export const getProfileIcon: any | null = (iconIdentifier: 'github' | 'linkedin' | 'strava' | '' | string) => {
  switch (iconIdentifier.toLocaleLowerCase()) {
    case 'github':
      return gitLogo;
    case 'linkedin':
      return linkedinLogo;
    case 'strava':
      return stravaLogo;
    default:
      return null;
  }
};
