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
import Box from './Box';

const GetStarted = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navToParent = RoutingS.useNavToParent();
  const navToNotAparent = RoutingS.useNavToNotAParent();
  return (
    <Page bgColor="blue-dark">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <LayoutPanel>
          <div className="flex justify-center flex-col items-center gap-4 ">
            <img src={panda} className="w-96" alt="Get Started Panda" />
            <Title color="white">WELCOME TO KIDS STREAM</Title>
            {!isOpen && (
              <CustomButton
                onClick={() => setIsOpen(true)}
                bgColor='yellow'
                borderColor='gray'
              >
                <Text color='black'>LET’S GET STARTED</Text>
              </CustomButton>
            )}
            {isOpen && (
              <Box flexJustifyContent='between' flexAlignItems='center' className="gap-72">
                <CustomButton
                  onClick={navToNotAparent}
                  bgColor='yellow'
                  borderColor='gray'
                >
                  <Text color='black'>I'M A CHILD</Text>
                </CustomButton>
                <CustomButton
                  onClick={navToParent}
                  bgColor='yellow'
                  borderColor='gray'
                >
                  <Text color='black'>I’M A PARENT</Text>
                </CustomButton>
              </Box>
            )}
          </div>
        </LayoutPanel>
      </IllustratedLayoutPanel>
    </Page>
  );
};

export default GetStarted;
