import Header from './Header';
import I18nS from '../Services/I18nService';
import Title from './Title';
import Text from './Text';
import CustomButton from './CustomButton';
import headerPic from '../assets/images/header-bg.png';
import RoutingS from '../Services/RoutingS';
import Box from './Box';

function JumboCard() {
  const { t } = I18nS;
  const navToGetStarted = RoutingS.useNavToGetStarted();

  return (
    <div
      className="bg-cover bg-center "
      style={{
        backgroundImage: `url(${headerPic})`,
        height: '49.5625rem',
      }}
    >
      <Header />
      <Box flexDirection='column' flexJustifyContent='center' flexAlignItems='center' className="pt-36">
        <Box flexAlignItems='center' flexJustifyContent='center' flexDirection='column' className="h-44 w-2/6">
          <Title
            variant="h1"
            color='white'
          >
            {t('landing_title')}
          </Title>
          <Text color='white' bold>{t('landing_subtitle')} </Text>
          <div className="pt-4 md:pt-14">
            <CustomButton bgColor='blue' color='white' height='xs' width='xl' onClick={navToGetStarted} dataTestId="custom-button-test">
              {t('landing_button')}
            </CustomButton>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default JumboCard;
