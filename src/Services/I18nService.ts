/* eslint-disable camelcase */
const EN: Record<TranslationKey, string> = {
  landing_title: 'The Safe Streaming Platform for your child',
  landing_subtitle:
          "Shows handpicked by professional, content for every age bracket and for the family. Totally safe",
  
};
const DE: Record<TranslationKey, string> = {
  landing_title: 'Die sichere Streaming-Plattform für Ihr Kind',
  landing_subtitle: 'Von Fachleuten handverlesene Sendungen, Inhalte für jede Altersgruppe und für die ganze Familie. Völlig sicher'
  
};
const translationsForLocale = (locale: 'en' | 'de') => {
  if (locale === 'de') {
    return DE;
  }
  return EN;
};
// Use this method only for testing purposes! never use it in production code.
export const fullTranslate = (key: TranslationKey): string => translationsForLocale('de')[key] || key;
const isTest: boolean = process.env.NODE_ENV === 'test';
const t = (key: TranslationKey): string => {
  if (isTest) {
    return key;
  }
  return fullTranslate(key);
};
const tWithParams = (key: TranslationKey, params: Record<string, string> = {}): string => {
  const template = t(key);
  return template
    ? Object.keys(params).reduce((result, attr) => result.replace(`{${attr}}`, params[attr]), template)
    : '';
};
type TranslationKey =
  | 'landing_title'
  | 'landing_subtitle'
  
const I18nS = {
  t,
  tWithParams,
};
export default I18nS;
