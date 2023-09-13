
import Box from "./BaseUi/Box";
import InputField from "./BaseUi/InputField";
import LayoutPanel from "./BaseUi/LayoutPanel";


const Otp = () => {
  return (
    <LayoutPanel>
      <Box className="gap-40">
        <InputField type="text" width="xs"></InputField>
        <InputField type="text" width="xs"></InputField>
        <InputField type="text" width="xs"></InputField>
        <InputField type="text" width="xs"></InputField>
        <InputField type="text" width="xs"></InputField>
      </Box>
    </LayoutPanel>

  )
}

export default Otp;