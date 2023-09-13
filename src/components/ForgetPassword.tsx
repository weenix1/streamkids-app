import DoubleViewPanel from "./BaseUi/DoubleViewPanel";
import SignUpIcon from '../assets/icons/signup.svg'
import Box from "./BaseUi/Box";
import Text from "./BaseUi/Text";
import Title from "./BaseUi/Title";
import InputField from "./BaseUi/InputField";
import CustomButton from "./BaseUi/CustomButton";


const ForgetPassword = () => {
  return (

    <DoubleViewPanel leftContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="gap-20 w-full">
        <img src={SignUpIcon} alt="Get Started Panda" />
        <Text color="white" bold>The fun way to engage your child while learning</Text>
      </Box>
    } rightContent={
      <Box flexDirection="column" flexAlignItems="start" className="gap-20 w-full">
        <Title color="light_gray"> Forgot Password?</Title>
        <Text color="light_gray"> Don’t worry it happens, Please enter the phone number or email address associated to this account</Text>
        <Box flexDirection="column" textAlign="start" className="gap-6">
          <InputField label="Email or Phone number" type="email" width="lg"></InputField>
        </Box>
        <Box flexAlignItems="end" flexJustifyContent="end" className="pl-12 gap-6">
          <CustomButton
            bgColor='blue'
            width="xl"
            borderR="md"
          >
            <Text color='white' bold>Submit</Text>
          </CustomButton>
        </Box>
      </Box>
    } />
  )
}

export default ForgetPassword;