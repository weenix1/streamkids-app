import JumboCard from './JumboCard';
import Page from './Page';
import Title from './Title';
import Text from './Text';
import LayoutPanel from './LayoutPanel';
import I18nS from '../Services/I18nService';
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

function LandingPage() {
  const { t } = I18nS;
  return (
    <Page>
      <JumboCard />
      <LayoutPanel>
        <Box flexJustifyContent='center' flexAlignItems='center' flexDirection='column' className='gap-1 mb-6'>
          <Title variant="h3">{t('landing_offer_title')}</Title>
          <Text color='gray'>{t('landing_offer_subtitle')}</Text>
        </Box>
        {/*  <div className="flex justify-items-center flex-col items-center gap-1 mb-6">
          <Title variant="h3">{t('landing_offer_title')}</Title>
          <Text color='gray'>{t('landing_offer_subtitle')}</Text>
        </div> */}
        <Box flexJustifyContent='center' flexWrap='nowrap' className="-mx-2">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-6">
            <Box className="h-full">
              <PlainCard
                icon={curatedContentIcon}
                title={t('what_we_offer_card1_title')}
                description={t('what_we_offer_card1_subtitle')}
              />
            </Box>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-6 mt-5 sm:mt-0">
            <Box className="h-full">
              <PlainCard
                icon={parentalControlIcon}
                title={t('what_we_offer_card2_title')}
                description={t('what_we_offer_card2_subtitle')}
              />
            </Box>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-6 mt-5 lg:mt-0 md:mr-auto">
            <Box className="h-full">
              <PlainCard
                icon={easyToUseIcon}
                title={t('what_we_offer_card3_title')}
                description={t('what_we_offer_card3_subtitle')}
              />
            </Box>
          </div>
        </Box>
        <Box flexAlignItems='center' flexJustifyContent='around' className="my-32">
          <div className="w-full sm:w-1/2">
            <img className="max-w-full" src={groupIcon} alt="" />
          </div>
          <div className="w-full sm:w-4/12">
            <Box flexDirection='column' flexAlignItems='start' textAlign='left'>
              <Title variant="h3" className="m-0">
                {t('what_we_offer_sign_up_title')}
              </Title>
              <div className="mt-4">
                <Text color='gray' >
                  {t('what_we_offer_sign_up_subtitle')}
                </Text>
              </div>
              <CustomButton
              // backgroundColor="[#D9F3FF]"
              //color="primary"
              // className="px-5 rounded border-0 mt-4"
              // style={{ backgroundColor: "#D9F3FF" }}
              >
                {t('what_we_offer_sign_up_button')}
              </CustomButton>
            </Box>
          </div>
        </Box>
      </LayoutPanel>
      <LayoutPanel fullWidth bgColor='light-blue'>
        <Title variant="h2" className="text-center mb-8">
          {t('program_list_title')}
        </Title>
        <Box flexGrow='grow' className="gap-4 -ml-24 mb-12">
          <PlainCard icon={sliderImg1} plain />
          <PlainCard icon={sliderImg2} plain />
          <PlainCard icon={sliderImg3} plain />
          <PlainCard icon={sliderImg4} plain />
        </Box>
        <Box flexGrow='grow' className="gap-4 -mr-24">
          <PlainCard icon={sliderImg4} plain />
          <PlainCard icon={sliderImg2} plain />
          <PlainCard icon={sliderImg3} plain />
          <PlainCard icon={sliderImg1} plain />
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
          <img src={laptopIcon} alt="" />
          <img src={smartTvIcon} alt="" />
          <img src={tabletIcon} alt="" />
          <img src={phoneIcon} alt="" />
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
