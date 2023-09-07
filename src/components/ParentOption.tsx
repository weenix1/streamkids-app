
import IllustratedLayoutPanel from './IllustratedLayoutPanel';
import Page from './Page';
import CustomButton from './CustomButton';
import BubbleText from '../assets/icons/bubbleText2.svg';
import Text from './Text';
import BackgroundFrameIcon from '../assets/icons/Frame2.svg';
import SmallPanda from '../assets/icons/smallPanda.svg';
import RoutingS from '../Services/RoutingS';

const ParentOption = () => {
  const navToGetStarted = RoutingS.useNavToGetStarted();
  return (
    <Page bgColor="blue-dark">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <div className="flex justify-center flex-col items-center px-14 ">
          <img src={SmallPanda} className=" w-[32rem] ms-96" alt="Get Started Panda" />
          <div className=" flex flex-col gap-6 items-center">
            <img src={BubbleText} className="w-96 " alt="text" />
            <div className="flex flex-col items-center justify-center">
              <CustomButton
                onClick={navToGetStarted}
                color="light-blue"
                bgColor='yellow'
              >
                <Text color='black' bold>SIGN UP</Text>
              </CustomButton>
              <Text color='white'>
                Already have an account?{' '}
                <a
                  className="
                text-blue-500 
                "
                  href="#"
                >
                  Please ligin
                </a>
              </Text>
            </div>
          </div>
        </div>
      </IllustratedLayoutPanel>
    </Page>
  );
};
export default ParentOption;
