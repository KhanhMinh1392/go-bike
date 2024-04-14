import { TLanguage } from '@/types/common';
import 'server-only';

const dictionaries = {
  en: () => import('./_dictionaries/en.json').then((module) => module.default),
  vi: () => import('./_dictionaries/vi.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: TLanguage) => dictionaries[locale]();
