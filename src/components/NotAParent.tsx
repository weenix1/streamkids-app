import BackgroundFrameIcon from '../assets/icons/Frame.svg';
import CustomButton from './BaseUi/CustomButton';
import SmallPanda from '../assets/icons/smallPanda.svg';
import Page from './Page';
import IllustratedLayoutPanel from './BaseUi/IllustratedLayoutPanel';
import Text from './BaseUi/Text';
import BubbleText from '../assets/icons/bubbleText1.svg';
import RoutingS from '../Services/RoutingS';
import Box from './BaseUi/Box';

const NotAParent = () => {
  const navToGetStarted = RoutingS.useNavToGetStarted();
  return (
    <Page bgColor="blue-dark">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <Box flexDirection='column' flexJustifyContent='center' flexAlignItems='center' className="px-14 h-screen">
          <img src={SmallPanda} className=" w-[32rem] ms-96" alt="Get Started Panda" />
          <Box flexDirection='column' flexJustifyContent='center' flexAlignItems='center' className="gap-6">
            <img src={BubbleText} className="w-96 " alt="text" />
            <CustomButton
              onClick={navToGetStarted}
              color="black"
              bgColor='yellow'
            >
              <Text color='black' bold>Back</Text>
            </CustomButton>
          </Box>
        </Box>
      </IllustratedLayoutPanel>
    </Page>
  );
};

export default NotAParent;
