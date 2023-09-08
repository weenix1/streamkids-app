
import IllustratedLayoutPanel from './BaseUi/IllustratedLayoutPanel';
import Page from './Page';
import CustomButton from './BaseUi/CustomButton';
import BubbleText from '../assets/icons/bubbleText2.svg';
import Text from './BaseUi/Text';
import BackgroundFrameIcon from '../assets/icons/Frame.svg';
import SmallPanda from '../assets/icons/smallPanda.svg';
import RoutingS from '../Services/RoutingS';

const ParentOption = () => {
  const navToRegistration = RoutingS.useNavToRegistration();
  return (
    <Page bgColor="blue-dark">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <div className="flex justify-center flex-col items-center px-14 h-screen ">
          <img src={SmallPanda} className=" w-[32rem] ms-96" alt="Get Started Panda" />
          <div className=" flex flex-col gap-6 items-center">
            <img src={BubbleText} className="w-96 " alt="text" />
            <div className="flex flex-col items-center justify-center">
              <CustomButton
                onClick={navToRegistration}
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
