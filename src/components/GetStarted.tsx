import Page from './Page';
import IllustratedLayoutPanel from './IllustratedLayoutPanel';
import BackgroundFrameIcon from '../assets/icons/Frame.svg';
import panda from '../assets/icons/panda.svg';
import LayoutPanel from './LayoutPanel';
import Text from './Text';
import Title from './Title';
import CustomButton from './CustomButton';
import { useState } from 'react';
import RoutingS from '../Services/RoutingS';

const GetStarted = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navToGetStarted = RoutingS.useNavToGetStarted();
  const navToOnboarding = RoutingS.useNavToOnBoarding();
  return (
    <Page bgColor="dark_gray">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <LayoutPanel>
          <div className="flex justify-center flex-col items-center gap-4 ">
            <img src={panda} className="w-96" alt="Get Started Panda" />
            <Title color="white">WELCOME TO KIDS STREAM</Title>
            {!isOpen && (
              <CustomButton
                onClick={() => setIsOpen(true)}
                bgColor='warning'
                borderColor="disabled"
              >
                <Text variant="basic">LET’S GET STARTED</Text>
              </CustomButton>
            )}
            {isOpen && (
              <div className="flex w-2/4 justify-between items-center">
                <CustomButton
                  onClick={navToGetStarted}
                  bgColor='warning'
                  borderColor="disabled"
                >
                  <Text variant="basic">I'M A CHILD</Text>
                </CustomButton>
                <CustomButton
                  onClick={navToOnboarding}
                  bgColor='warning'
                  borderColor="disabled"
                >
                  <Text variant="basic">I’M A PARENT</Text>
                </CustomButton>
              </div>
            )}
          </div>
        </LayoutPanel>
      </IllustratedLayoutPanel>
    </Page>
  );
};

export default GetStarted;
