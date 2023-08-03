/* eslint-disable camelcase */
const EN: Record<TranslationKey, string> = {
  landing_title: 'The Safe Streaming Platform for your child',
  landing_subtitle:
          "Shows handpicked by professional, content for every age bracket and for the family. Totally safe",
  landing_button: 'Sign here', 
  landing_offer_title: 'What kid stream have to offer',
  landing_offer_subtitle: 'We offer shows that are safe for kids of various age groups.', 
  what_we_offer_title: 'What kid stream have to offer',  
  what_we_offer_subtitle: 'We offer shows that are safe for kids of various age groups. We also offer a wide variety of shows that are educational and fun for kids.',  
  what_we_offer_card1_title: 'Curated content',
  what_we_offer_card1_subtitle: "Our programs ranges from educational, animated and entertaining content. All carefully seleced",
  what_we_offer_card2_title: 'Parental Control',
  what_we_offer_card2_subtitle: "Kids stream have give maximum access to parent or guardian to cutomize content to kids preference.",
  what_we_offer_card3_title: "Easy to Use",
  what_we_offer_card3_subtitle: "Simple user inferface and ease of access.",
  what_we_offer_sign_up_title: "The perfect place for kids to learn in a fun way",
  what_we_offer_sign_up_subtitle: "The perfect place for family bonding and learning. The pioritize the wellbeing of every child.",
  what_we_offer_sign_up_button: "Sign up",
  program_list_title: "Some program showing on kid stream",
  platform_title: "Watch kid stream everywhere",
  platform_subtitle: "Find kid stream on your favourite devices.",
  payment_plan_title: "Kid stream comes with one month free plan",
  payment_plan_subtitle: "Fexible subcription of monthly or annually",
  payment_plan_monthly_title: "Pay for monthly subcription",
  payment_plan_monthly_subtitle: "Subscribe monthly to have access to all our amazing features without restriction",
  payment_plan_yearly_title: "Pay yearly subscription",
  payment_plan_yearly_subtitle: "Our yearly subcription option allow you to have access to all our amazing features, all year round",
  footer_title: "Kids Stream Services",
  footer_subtitle: "The safe streaming plaform for your kids",
  footer_links_privacy: "Privacy",
  footer_links_terms_of_use: "Terms Of Use",
  footer_links_cookie_preference: "Cookie Preference",
  footer_links_corporate_information: "Corporate Information",
  footer_contact_us_title: "Contact Us",
  footer_contact_us_address: "Address: 78 Orchard Heights - Germany",
  footer_contact_us_email: "Email: kidstream.org@gmail.com",
  footer_contact_us_phone: "Phone: +49 123456789",
  footer_all_rights: "All rights reserved. © 2022 Mobile Paradigm Germany.",
  footer_back_to_top: "Back to top",
  
};
const DE: Record<TranslationKey, string> = {
  landing_title: 'Die sichere Streaming Plattform für Ihr Kind',
  landing_subtitle: 'Von Fachleuten handverlesene Sendungen, Inhalte für jede Altersgruppe und für die ganze Familie. Völlig sicher',
  landing_button: 'Hier anmelden',
  landing_offer_title: 'Was kid stream zu bieten hat',
  landing_offer_subtitle: 'Wir bieten Sendungen, die für Kinder verschiedener Altersgruppen sicher sind.',
  what_we_offer_title: 'Was kid stream zu bieten hat',
  what_we_offer_subtitle: 'Wir bieten Sendungen, die für Kinder verschiedener Altersgruppen sicher sind. Wir bieten auch eine große Auswahl an Sendungen, die für Kinder lehrreich und unterhaltsam sind.',
  what_we_offer_card1_title: 'Kuratierte Inhalte',
  what_we_offer_card1_subtitle: 'Unsere Programme reichen von lehrreichen, animierten und unterhaltsamen Inhalten. Alle sorgfältig ausgewählt',
  what_we_offer_card2_title: 'Kindersicherung',
  what_we_offer_card2_subtitle: 'Kids stream haben Eltern oder Erziehungsberechtigten maximalen Zugriff, um Inhalte an die Vorlieben der Kinder anzupassen.',
  what_we_offer_card3_title: 'Einfach zu bedienen',
  what_we_offer_card3_subtitle: 'Einfache Benutzeroberfläche und einfacher Zugriff.',
  what_we_offer_sign_up_title: 'Der perfekte Ort für Kinder, um auf unterhaltsame Weise zu lernen',
  what_we_offer_sign_up_subtitle: 'Der perfekte Ort für Familienbindung und Lernen. Die Priorität liegt auf dem Wohlergehen jedes Kindes.',
  what_we_offer_sign_up_button: 'Anmelden',
  program_list_title: "Einige Programme, die auf kid stream gezeigt werden",
  platform_title: "Sehen Sie sich kid stream überall an",
  platform_subtitle: "Finden Sie kid stream auf Ihren Lieblingsgeräten.",
  payment_plan_title: "Kid stream kommt mit einem kostenlosen Monatsplan",
  payment_plan_subtitle: "Fexible Abonnement monatlich oder jährlich",
  payment_plan_monthly_title: "Zahlen Sie für das monatliche Abonnement",
  payment_plan_monthly_subtitle: "Abonnieren Sie monatlich, um ohne Einschränkungen auf alle unsere erstaunlichen Funktionen zugreifen zu können",
  payment_plan_yearly_title: "Jährliches Abonnement bezahlen",
  payment_plan_yearly_subtitle: "Unsere jährliche Abonnementoption ermöglicht es Ihnen, das ganze Jahr über auf alle unsere erstaunlichen Funktionen zuzugreifen",
  footer_title: "Kids Stream Services",
  footer_subtitle: "Die sichere Streaming Plattform für Ihr Kind",
  footer_links_privacy: "Privatsphäre",
  footer_links_terms_of_use: "Nutzungsbedingungen",
  footer_links_cookie_preference: "Cookie-Einstellung",
  footer_links_corporate_information: "Unternehmensinformationen",
  footer_contact_us_title: "Kontaktiere uns",
  footer_contact_us_address: "Adresse: 78 Orchard Heights - Deutschland",
  footer_contact_us_email: "Email: kidstream.org@gmail.com ",
  footer_contact_us_phone: "Telefon: +49 123456789",
  footer_all_rights: "Alle Rechte vorbehalten. © 2022 Mobile Paradigm Germany.",
  footer_back_to_top: "Zurück nach oben",


  
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
  | 'what_we_offer_title'
  | 'what_we_offer_subtitle'
  | "what_we_offer_card1_title"
  | "what_we_offer_card1_subtitle"
  | "what_we_offer_card2_title"
  | "what_we_offer_card2_subtitle"
  | "what_we_offer_card3_title"
  | "what_we_offer_card3_subtitle"
  | "what_we_offer_sign_up_title"
  | "what_we_offer_sign_up_subtitle"
  | "what_we_offer_sign_up_button"
  | "program_list_title"
  | "platform_title"
  | "platform_subtitle"
  | "payment_plan_title"
  | "payment_plan_subtitle"
  | "payment_plan_monthly_title"
  | "payment_plan_monthly_subtitle"
  | "payment_plan_yearly_title"
  | "payment_plan_yearly_subtitle"
  | "footer_title"
  | "footer_subtitle"
  | "footer_links_privacy"
  | "footer_links_terms_of_use"
  | "footer_links_cookie_preference"
  | "footer_links_corporate_information"
  | "footer_contact_us_title"
  | "footer_contact_us_address"
  | "footer_contact_us_email"
  | "footer_contact_us_phone"
  | "footer_all_rights"
  | "footer_back_to_top"
  
const I18nS = {
  t,
  tWithParams,
};
export default I18nS;
