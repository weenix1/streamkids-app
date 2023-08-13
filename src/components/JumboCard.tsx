import React from 'react';
import Header from './Header';
import I18nS from '../Services/I18nService';
import Title from './Title';
import Text from './Text';
import CustomButton from './CustomButton';
import headerPic from '../assets/images/header-bg.png';

function JumboCard() {
  const { t } = I18nS;

  return (
    <div
      className=" bg-cover bg-center "
      style={{
        backgroundImage: `url(${headerPic})`,
        height: '49.5625rem',
      }}
    >
      <Header />
      <div className="flex flex-col justify-items-center items-center pt-36  ">
        <div className="h-44 w-2/6 flex items-center justify-items-center flex-col">
          <Title
            variant="h1"
            //color="whiteTitle"
          >
            {t('landing_title')}
          </Title>
          <Text className="font-normal basic">{t('landing_subtitle')} </Text>
          <div className="pt-4 md:pt-14">
            <CustomButton onClick={() => console.log('Button clicked')} dataTestId="custom-button-test">
              {t('landing_button')}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JumboCard;
