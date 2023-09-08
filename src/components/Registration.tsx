import DoubleViewPanel from "./BaseUi/DoubleViewPanel";
import SignUpIcon from '../assets/icons/signup.svg'
import Box from "./BaseUi/Box";
import Text from "./BaseUi/Text";


const Registration = () => {
  return (
    <DoubleViewPanel leftContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="h-full gap-20">
        <img src={SignUpIcon} alt="Get Started Panda" />
        <Text color="white">The fun way to engage your child while learning</Text>
      </Box>
    } rightContent={
      <Box flexDirection="column" flexAlignItems="center" flexJustifyContent="center" className="h-full gap-20">
        <h1 className="text-4xl font-bold">Registration</h1>
        <p className="text-xl">Register to create your account</p>
      </Box>

    } />
  )
}

export default Registration;