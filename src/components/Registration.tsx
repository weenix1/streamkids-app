import DoubleViewPanel from "./BaseUi/DoubleViewPanel";
import SignUpIcon from '../assets/icons/signup.svg'
import Box from "./BaseUi/Box";
import Text from "./BaseUi/Text";
import Title from "./BaseUi/Title";
import InputField from "./BaseUi/InputField";


const Registration = () => {
  return (
    <DoubleViewPanel leftContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="h-full gap-20">
        <img src={SignUpIcon} alt="Get Started Panda" />
        <Text color="white" bold>The fun way to engage your child while learning</Text>
      </Box>
    } rightContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" textAlign="center" className="h-full gap-20">
        <Title color="black">Hello Parent, please put in your details to sign up</Title>
        <Box flexDirection="column" textAlign="start" className="gap-6">
          <InputField label="Name" width="lg"></InputField>
          <InputField label="Email" width="lg"></InputField>
          <InputField label="Phone number" width="lg"></InputField>
          <InputField label="Password" width="lg"></InputField>
        </Box>
      </Box>

    } />
  )
}

export default Registration;