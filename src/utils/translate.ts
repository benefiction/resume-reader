import en_GB from '@/assets/translations-en_GB.json';

export type TranslationKeyType = keyof typeof en_GB;

export const t = (translationKey: TranslationKeyType) => {
  return en_GB[translationKey];
};
