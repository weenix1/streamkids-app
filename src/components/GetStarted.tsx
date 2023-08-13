import Page from './Page';
import IllustratedLayoutPanel from './IllustratedLayoutPanel';
import BackgroundFrameIcon from '../assets/icons/Frame.svg';
import panda from '../assets/icons/panda.svg';
import LayoutPanel from './LayoutPanel';
import Text from './Text';
import Title from './Title';
import CustomButton from './CustomButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Page bgColor="bg-color_blue">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <LayoutPanel>
          <div className="flex justify-center flex-col items-center gap-4 ">
            <img src={panda} className="w-96" alt="Get Started Panda" />
            <Title color="white">WELCOME TO KIDS STREAM</Title>
            {!isOpen && (
              <CustomButton
                onClick={() => setIsOpen(true)}
                color="color_yellow"
                backgroundColor="color_yellow"
                borderColor="black"
              >
                <Text variant="basic">LET’S GET STARTED</Text>
              </CustomButton>
            )}
            {isOpen && (
              <div className="flex w-2/4 justify-between items-center">
                <CustomButton
                  onClick={() => navigate('/notaparent')}
                  color="color_yellow"
                  backgroundColor="color_yellow"
                  borderColor="black"
                >
                  <Text variant="basic">I'M A CHILD</Text>
                </CustomButton>
                <CustomButton
                  onClick={() => navigate('/onboarding')}
                  color="color_yellow"
                  backgroundColor="color_yellow"
                  borderColor="black"
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
