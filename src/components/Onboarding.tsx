import BackgroundFrameIcon from '../assets/icons/Frame2.svg';
import CustomButton from './CustomButton';
import SmallPanda from '../assets/icons/smallPanda.svg';
import Page from './Page';
import IllustratedLayoutPanel from './IllustratedLayoutPanel';
import Text from './Text';
import BubbleText from '../assets/icons/bubbleText1.svg';
import RoutingS from '../Services/RoutingS';

const Onboarding = () => {
  const navToGetStarted = RoutingS.useNavToGetStarted();
  return (
    <Page bgColor="blue-dark">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <div className="flex justify-center flex-col items-center px-14 ">
          <img src={SmallPanda} className=" w-[32rem] ms-96" alt="Get Started Panda" />
          <div className=" flex flex-col gap-6 items-center">
            <img src={BubbleText} className="w-96 " alt="text" />
            <CustomButton
              onClick={navToGetStarted}
              color="light-blue"
            >
              <Text variant='basic'>Back</Text>
            </CustomButton>
          </div>
        </div>
      </IllustratedLayoutPanel>
    </Page>
  );
};

export default Onboarding;
