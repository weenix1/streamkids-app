import DoubleViewPanel from "./BaseUi/DoubleViewPanel";
import SignUpIcon from '../assets/icons/signup.svg'
import Box from "./BaseUi/Box";
import Text from "./BaseUi/Text";
import Title from "./BaseUi/Title";
import InputField from "./BaseUi/InputField";
import EyeIcon from '../assets/icons/EyeIcon'
import CustomButton from "./BaseUi/CustomButton";


const Registration = () => {
  return (

    <DoubleViewPanel leftContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="gap-20 w-full">
        <img src={SignUpIcon} alt="Get Started Panda" />
        <Text color="white" bold>The fun way to engage your child while learning</Text>
      </Box>
    } rightContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="gap-20 w-full">
        <Title color="black">Hello Parent, please put in your details to sign up</Title>
        <Box flexDirection="column" textAlign="start" className="gap-6">
          <InputField label="Name" type="text" value="" width="lg"></InputField>
          <InputField label="Email" type="email" width="lg"></InputField>
          <InputField label="Phone number" type="tel" width="lg"></InputField>
          <InputField label="Password" type="password" icon={<EyeIcon />} iconPosition="end" width="lg"></InputField>
        </Box>
        <Box flexDirection="column" className="gap-6">
          <CustomButton
            bgColor='blue'
            width="xl"
            borderR="md"
          >
            <Text color='white' bold>SIGN UP</Text>
          </CustomButton>
          <Text color='black' bold>Already have an account?{' '}
            <a
              className="text-stream_primary"
              href="#"
            >
              Please login
            </a>
          </Text>
        </Box>
      </Box>
    } />
  )
}

export default Registration;