/* eslint-disable camelcase */
const EN: Record<TranslationKey, string> = {
  landing_title: 'The Safe Streaming Platform for your child',
  landing_subtitle:
          "Shows handpicked by professional, content for every age bracket and for the family. Totally safe",
  landing_button: 'Sign here', 
  landing_offer_title: 'What kid stream have to offer',
  landing_offer_subtitle: 'We offer shows that are safe for kids of various age groups.',     
  
};
const DE: Record<TranslationKey, string> = {
  landing_title: 'Die sichere Streaming Plattform für Ihr Kind',
  landing_subtitle: 'Von Fachleuten handverlesene Sendungen, Inhalte für jede Altersgruppe und für die ganze Familie. Völlig sicher',
  landing_button: 'Hier anmelden',
  landing_offer_title: 'Was kid stream zu bieten hat',
  landing_offer_subtitle: 'Wir bieten Sendungen, die für Kinder verschiedener Altersgruppen sicher sind.',
  
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
  | 'landing_button'
  | 'landing_offer_title'
  | 'landing_offer_subtitle'
  
const I18nS = {
  t,
  tWithParams,
};
export default I18nS;
