import DoubleViewPanel from "./BaseUi/DoubleViewPanel";
import SignUpIcon from '../assets/icons/signup.svg'
import Box from "./BaseUi/Box";
import Text from "./BaseUi/Text";
import Title from "./BaseUi/Title";
import CustomButton from "./BaseUi/CustomButton";
import Otp from "./BaseUi/Otp";
import RoutingS from "../Services/RoutingS";



const EnterOtp = () => {
  const navToChildProfile = RoutingS.useNavChildProfile();
  return (
    <DoubleViewPanel leftContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="gap-20 w-full">
        <img src={SignUpIcon} alt="Get Started Panda" />
        <Text color="white" bold>The fun way to engage your child while learning</Text>
      </Box>
    } rightContent={
      <Box flexDirection="column" flexAlignItems="start" flexJustifyContent="center" className="gap-20 w-full">
        <Title color="light_gray">Hi Parent, put in the code sent the phone number associated with this account.</Title>
        <Box flexDirection="column" textAlign="start" flexAlignItems="start" flexJustifyContent="start" className="gap-6">
          <Text color="light_gray" bold>Enter OTP</Text>
          <Text color="light_gray">A 6 digit OTP was sent to 09012345678, kindly enter the code below to reset password.</Text>
          <Otp islabel bgColor="white_text" />

        </Box>
        <Box flexDirection="column" className="gap-6">
          <CustomButton
            bgColor='blue'
            width="xl"
            borderR="md"
            onClick={navToChildProfile}
          >
            <Text color='white' bold>Enter OTP</Text>
          </CustomButton>
        </Box>
      </Box>
    } />
  )
}

export default EnterOtp;