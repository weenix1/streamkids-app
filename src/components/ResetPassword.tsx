import DoubleViewPanel from "./BaseUi/DoubleViewPanel";
import SignUpIcon from '../assets/icons/signup.svg'
import Box from "./BaseUi/Box";
import Text from "./BaseUi/Text";
import Title from "./BaseUi/Title";
import InputField from "./BaseUi/InputField";
import EyeIcon from '../assets/icons/EyeIcon'
import CustomButton from "./BaseUi/CustomButton";


const ResetPassword = () => {
  return (

    <DoubleViewPanel leftContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="gap-20 w-full">
        <img src={SignUpIcon} alt="Get Started Panda" />
        <Text color="white" bold>The fun way to engage your child while learning</Text>
      </Box>
    } rightContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="gap-20 w-full">
        <Title color="light_gray">Reset Password</Title>
        <Box flexDirection="column" textAlign="start" className="gap-6">
          <InputField label="New Password" type="password" icon={<EyeIcon />} iconPosition="end" width="lg"></InputField>
          <InputField label="Confirm Password" type="password" icon={<EyeIcon />} iconPosition="end" width="lg"></InputField>
        </Box>
        <Box flexDirection="column" className="gap-6">
          <CustomButton
            bgColor='blue'
            width="xl"
            borderR="md"
          >
            <Text color='white' bold>Sign In</Text>
          </CustomButton>
        </Box>
      </Box>
    } />
  )
}

export default ResetPassword;