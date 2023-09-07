import JumboCard from './JumboCard';
import Page from './Page';
import Title from './Title';
import Text from './Text';
import LayoutPanel from './LayoutPanel';
import I18nS, { TranslationKey } from '../Services/I18nService';
import curatedContentIcon from '../assets/icons/curated-content.svg';
import parentalControlIcon from '../assets/icons/parental-control.svg';
import easyToUseIcon from '../assets/icons/easy-to-use.svg';
import PlainCard from './PlainCard';
import groupIcon from '../assets/icons/perfectPlaceGroupIcon.svg';
import CustomButton from './CustomButton';
import sliderImg1 from '../assets/icons/sliderImg1.svg';
import sliderImg2 from '../assets/icons/sliderImg2.svg';
import sliderImg3 from '../assets/icons/sliderImg3.svg';
import sliderImg4 from '../assets/icons/sliderImg4.svg';
import laptopIcon from '../assets/icons/laptop.svg';
import smartTvIcon from '../assets/icons/smartTv.svg';
import tabletIcon from '../assets/icons/tablet.svg';
import phoneIcon from '../assets/icons/phone.svg';
import monthlysec from '../assets/icons/monthlysec.svg';
import familyImg from '../assets/icons/family.svg';
import Footer from './Footer';
import Box from './Box';


const curatedIcons: Record<string, string> = {
  'curated-content': curatedContentIcon,
  'parental-control': parentalControlIcon,
  'easy-to-use': easyToUseIcon,
};
type sliderType = {
  icon: string;
}

const SliderIcons: sliderType[] = [
  {
    icon: 'sliderImg1',
  },
  {
    icon: 'sliderImg2',
  },
  {
    icon: 'sliderImg3',
  },
  {
    icon: 'sliderImg4',
  },
];

const platformIcons: Record<string, string> = {
  'laptop': laptopIcon,
  'smartTv': smartTvIcon,
  'tablet': tabletIcon,
  'phone': phoneIcon,
};

const platformIconsArray: string[] = [
  'laptop',
  'smartTv',
  'tablet',
  'phone',
];

const sliderIcons: Record<string, string> = {
  'sliderImg1': sliderImg1,
  'sliderImg2': sliderImg2,
  'sliderImg3': sliderImg3,
  'sliderImg4': sliderImg4,
};

type offerType = {
  title: TranslationKey;
  subtitle: TranslationKey;
  icon: string;
};

const offer: offerType[] = [
  {
    title: 'what_we_offer_card1_title',
    subtitle: 'what_we_offer_card1_subtitle',
    icon: 'curated-content',
  },
  {
    title: 'what_we_offer_card2_title',
    subtitle: 'what_we_offer_card2_subtitle',
    icon: 'parental-control',
  },
  {
    title: 'what_we_offer_card3_title',
    subtitle: 'what_we_offer_card3_subtitle',
    icon: 'easy-to-use',
  },
];

function LandingPage() {
  const { t } = I18nS;

  return (
    <Page>
      <JumboCard />
      <LayoutPanel>
        <Box flexJustifyContent='center' flexAlignItems='center' flexDirection='column' className='gap-6 pb-20'>
          <Title variant="h3">{t('landing_offer_title')}</Title>
          <Text color='gray'>{t('landing_offer_subtitle')}</Text>
        </Box>
        <Box flexJustifyContent='center' flexWrap='wrap' className="-mx-2 ">
          {offer.map((item) => (
            <Box key={item.title} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-6 mx-auto">
              <Box className="h-full">
                <PlainCard
                  icon={curatedIcons[item.icon]}
                  title={t(item.title)}
                  description={t(item.subtitle)}
                />
              </Box>
            </Box>
          ))}
        </Box>
        <Box flexDirection='column' flexAlignItems='center' flexJustifyContent='around' className="my-32 sm:flex-col md:flex-row">
          <Box className='w-2/3'>
            <img className="max-w-full" src={groupIcon} alt="" />
          </Box>
          <Box flexDirection='column' flexAlignItems='start' textAlign='left' className='w-2/3 gap-6'>
            <Title variant="h3" className="m-0">
              {t('what_we_offer_sign_up_title')}
            </Title>
            <Box className="mt-4">
              <Text color='gray' >
                {t('what_we_offer_sign_up_subtitle')}
              </Text>
            </Box>
            <CustomButton
              bgColor='blue'
            >
              {t('what_we_offer_sign_up_button')}
            </CustomButton>
          </Box>

        </Box>
      </LayoutPanel>
      <LayoutPanel fullWidth bgColor='light-blue'>
        <Title variant="h2" className="text-center mb-8">
          {t('program_list_title')}
        </Title>
        <Box flexGrow='grow' className="gap-4 -ml-24 mb-12">
          {SliderIcons.map((item) => (
            <PlainCard key={item.icon} icon={sliderIcons[item.icon]} plain />
          ))}
        </Box>
        <Box flexGrow='grow' className="gap-4 -mr-24">
          {SliderIcons.map((item) => (
            <PlainCard key={item.icon} icon={sliderIcons[item.icon]} plain />
          )).reverse()}
        </Box>
      </LayoutPanel>
      <LayoutPanel>
        <Title variant="h2" className="text-center mb-4">
          {t('platform_title')}
        </Title>
        <Box flexJustifyContent='center' className="mb-12">
          <Text color='black' >
            {t('platform_subtitle')}
          </Text>
        </Box>
        <Box flexAlignItems='center' flexWrap='wrap' flexJustifyContent='between'>
          {platformIconsArray.map((item) => (
            <Box key={item} className="w-1/2 md:w-1/4 lg:w-1/6">
              <img src={platformIcons[item]} alt="" className="w-full img-fluid" />
            </Box>
          ))}
        </Box>
      </LayoutPanel>
      <LayoutPanel fullWidth bgColor='light-blue'>
        <Box flexDirection='column' flexAlignItems='center' className="px-28">
          <Title variant="h2" className="text-center mb-4">
            {t('payment_plan_title')}
          </Title>
          <Text color='black'>
            {t('payment_plan_subtitle')}
          </Text>
          <Box flexDirection='column' flexJustifyContent='between' flexAlignItems='center' className="md:flex-row  mb-5">
            <Box textAlign='center' flexDirection='column' className="w-1/2 gap-4">
              <Title variant="h4">{t('payment_plan_monthly_title')}</Title>
              <Text color='black'>
                {t('payment_plan_monthly_subtitle')}
              </Text>
            </Box>
            <Box>
              <img src={monthlysec} alt="" className="w-full img-fluid" />
            </Box>
          </Box>
          <Box flexDirection='column-reverse' flexJustifyContent='between' flexAlignItems='center' className="md:flex-row mt-12">
            <Box>
              <img src={familyImg} alt="" className="w-full img-fluid" />
            </Box>
            <Box textAlign='center' flexDirection='column' className="w-1/2 gap-4">
              <Title variant="h4">{t('payment_plan_yearly_title')}</Title>
              <Text color='black' >
                {t('payment_plan_yearly_subtitle')}
              </Text>

            </Box>
          </Box>
        </Box>
      </LayoutPanel>
      <Footer />
    </Page>
  );
}

export default LandingPage;
