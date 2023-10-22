import instaIcon from '../assets/icons/instagramIcon.svg';
import twitterIcon from '../assets/icons/twitterIcon.svg';
import linkedInIcon from '../assets/icons/linkedInIcon.svg';
import addressIcon from '../assets/icons/addressIcon.svg';
import emailIcon from '../assets/icons/emailIcon.svg';
import smallPhoneIcon from '../assets/icons/smallPhoneIcon.svg';
import backToTopIcon from '../assets/icons/backToTopIcon.svg';
import I18nS from '../Services/I18nService';
import LayoutPanel from './BaseUi/LayoutPanel';
import Title from './BaseUi/Title';
import Text from './BaseUi/Text';

function Footer() {
  const { t } = I18nS;

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <div className="p-5 relative bg-stream_dark_gray text-white">
      <div
        className="absolute hidden md:flex w-[150px] items-center text-white bottom-5 right-1 gap-4 cursor-pointer"
        onClick={scrollToTop}
      >
        <Text color='white'>Back to top</Text>
        <span className="border rounded-full p-3">
          <img src={backToTopIcon} alt="Back To Top" />
        </span>
      </div>
      <div
        className="absolute flex pr-2 md:hidden justify-end items-center bottom-5 right-1 gap-4 cursor-pointer text-white"
        onClick={scrollToTop}
      >
        <span className="border rounded-full p-3">
          <img src={backToTopIcon} alt="Back To Top" />
        </span>
      </div>
      <LayoutPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2 md:col-span-1 text-left">
            <Title className="pb-3" variant="h4" color="white">
              {t('footer_title')}
            </Title>
            <Text color='white'>{t('footer_subtitle')}</Text>
            <div className="flex gap-9 mt-2">
              <span>
                <img src={linkedInIcon} alt="LinkedIn Icon" />
              </span>
              <span>
                <img src={instaIcon} alt="Instagram Icon" />
              </span>
              <span>
                <img src={twitterIcon} alt="Twitter Icon" />
              </span>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 mt-5 lg:mt-0">
            <ul className="list-none text-left gap-4 flex flex-col">
              <li>{t('footer_links_privacy')}</li>
              <li>{t('footer_links_terms_of_use')}</li>
              <li>{t('footer_links_cookie_preference')}</li>
              <li>{t('footer_links_corporate_information')}</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 mt-5 lg:mt-0">
            <ul className="list-none gap-4 text-left flex flex-col">
              <li>
                <span>{t('footer_contact_us_title')}</span>
              </li>
              <li className="flex items-start">
                <img src={addressIcon} alt="Address Icon" className="mr-4 mt-1" />
                <span>
                  <address className="mb-0">{t('footer_contact_us_address')}</address>
                </span>
              </li>
              <li className="flex items-start">
                <img src={emailIcon} alt="Email Icon" className="mr-4 mt-1" />
                <span>
                  <a className="text-white" href={`mailto:${t('footer_contact_us_email')}`}>
                    {t('footer_contact_us_email')}
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <img src={smallPhoneIcon} alt="Phone Icon" className="mr-4 mt-1" />
                <span>
                  <a className="text-white" href={`tel:${t('footer_contact_us_phone')}`}>
                    {t('footer_contact_us_phone')}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </LayoutPanel>
      <p className="text-center  mb-0">{t('footer_all_rights')}</p>
    </div>
  );
}

export default Footer;
