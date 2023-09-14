import BackgroundFrameIcon from '../assets/icons/Frame.svg';
import CustomButton from './BaseUi/CustomButton';
import ChildPanda from '../assets/icons/childsetup-panda.svg';
import ArrowDropDown from '../assets/icons/arrow_drop_down.svg';
import Page from './Page';
import IllustratedLayoutPanel from './BaseUi/IllustratedLayoutPanel';
import Text from './BaseUi/Text';
import Box from './BaseUi/Box';
import InputField from './BaseUi/InputField';

const ChildProfileSetUp = () => {
  return (
    <Page bgColor="blue-dark">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <Box flexJustifyContent='between' flexAlignItems='center' className="px-14 h-screen">
          <img src={ChildPanda} alt="Get Started Panda" />
          <Box flexDirection='column' flexJustifyContent='center' flexAlignItems='center' className="gap-6">
            <Box flexDirection='column' flexAlignItems='center' flexJustifyContent='center' className='w-39 h-72 shrink-0 rounded-md border border-dashed border-stream_secondary gap-4'>
              <InputField bgColor='white' color='white' label="Child’s Name" width="md" />
              <InputField bgColor='white' color='white' label="Child’s age" width="md" icon={<img src={ArrowDropDown} alt="Get Started Panda" />} iconPosition='end' />
            </Box>
            <Box flexDirection="column" className="gap-6">
              <CustomButton
                bgColor='yellow'
                width="xl"
                borderR="md"
              >
                <Text color='black' bold>Save</Text>
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </IllustratedLayoutPanel>
    </Page>
  );
};

export default ChildProfileSetUp;
