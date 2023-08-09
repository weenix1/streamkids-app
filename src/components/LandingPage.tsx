import React from 'react';
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

function LandingPage() {
  const { t } = I18nS;
  return (
    <Page>
      <JumboCard />
      <LayoutPanel>
        <div className="flex justify-items-center flex-col items-center gap-1 mb-6">
          <Title variant="h3">{t('landing_offer_title')}</Title>
          <Text variant="normal">{t('landing_offer_subtitle')}</Text>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-6">
            <div className="flex h-full">
              <PlainCard
                icon={curatedContentIcon}
                title={t('what_we_offer_card1_title')}
                description={t('what_we_offer_card1_subtitle')}
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-6 mt-5 sm:mt-0">
            <div className="flex h-full">
              <PlainCard
                icon={parentalControlIcon}
                title={t('what_we_offer_card2_title')}
                description={t('what_we_offer_card2_subtitle')}
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-6 mt-5 lg:mt-0 md:mr-auto">
            <div className="flex h-full">
              <PlainCard
                icon={easyToUseIcon}
                title={t('what_we_offer_card3_title')}
                description={t('what_we_offer_card3_subtitle')}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around my-32">
          <div className="w-full sm:w-1/2">
            <img className="max-w-full" src={groupIcon} alt="" />
          </div>
          <div className="w-full sm:w-4/12">
            <div className="flex flex-col items-start text-left">
              <Title variant="h3" className="m-0">
                {t('what_we_offer_sign_up_title')}
              </Title>
              <Text variant="normal" className="mt-4">
                {t('what_we_offer_sign_up_subtitle')}
              </Text>
              <CustomButton
                // backgroundColor="[#D9F3FF]"
                color="primary"
                // className="px-5 rounded border-0 mt-4"
                // style={{ backgroundColor: "#D9F3FF" }}
              >
                {t('what_we_offer_sign_up_button')}
              </CustomButton>
            </div>
          </div>
        </div>
      </LayoutPanel>
      <LayoutPanel fullWidth background="bg_color">
        <Title variant="h2" className="text-center mb-8">
          {t('program_list_title')}
        </Title>
        <div className="flex gap-4 -ml-24 flex-grow mb-12">
          <PlainCard icon={sliderImg1} plain />
          <PlainCard icon={sliderImg2} plain />
          <PlainCard icon={sliderImg3} plain />
          <PlainCard icon={sliderImg4} plain />
        </div>
        <div className="flex gap-4 -mr-24 flex-grow ">
          <PlainCard icon={sliderImg4} plain />
          <PlainCard icon={sliderImg2} plain />
          <PlainCard icon={sliderImg3} plain />
          <PlainCard icon={sliderImg1} plain />
        </div>
      </LayoutPanel>
      <LayoutPanel>
        <Title variant="h2" className="text-center mb-4">
          {t('platform_title')}
        </Title>
        <Text variant="title" className="text-center text-xl mb-12">
          {t('platform_subtitle')}
        </Text>
        <div>
          <div className="flex items-center flex-wrap justify-between">
            <img src={laptopIcon} alt="" />
            <img src={smartTvIcon} alt="" />
            <img src={tabletIcon} alt="" />
            <img src={phoneIcon} alt="" />
          </div>
        </div>
      </LayoutPanel>
      <LayoutPanel fullWidth background="bg_color">
        <div className="px-28">
          <Title variant="h2" className="text-center mb-4">
            {t('payment_plan_title')}
          </Title>
          <Text variant="title" className="text-center text-xl mb-12">
            {t('payment_plan_subtitle')}
          </Text>
          <div className="flex flex-col md:flex-row justify-between items-center mb-5">
            <div className="text-center w-1/2">
              <Title variant="h4">{t('payment_plan_monthly_title')}</Title>
              <Text variant="title" className="text-xl mb-12">
                {t('payment_plan_monthly_subtitle')}
              </Text>
            </div>
            <div>
              <img src={monthlysec} alt="" className="w-full img-fluid" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-12">
            <div>
              <img src={familyImg} alt="" className="w-full img-fluid" />
            </div>
            <div className="w-1/2 text-center">
              <Title variant="h4">{t('payment_plan_yearly_title')}</Title>
              <Text variant="title" className="text-xl mb-12">
                {t('payment_plan_yearly_subtitle')}
              </Text>
            </div>
          </div>
        </div>
      </LayoutPanel>
      <Footer />
    </Page>
  );
}

export default LandingPage;
