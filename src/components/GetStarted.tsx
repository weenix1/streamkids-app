import Page from "./Page";
import IllustratedLayoutPanel from "./IllustratedLayoutPanel";
import BackgroundFrameIcon from "../assets/icons/Frame.svg";
import panda from "../assets/icons/panda.svg";
import LayoutPanel from "./LayoutPanel";
import Text from "./Text";
import Title from "./Title";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  return (
    <Page bgColor="bg-color_blue">
      <IllustratedLayoutPanel iconPath={BackgroundFrameIcon}>
        <LayoutPanel>
          <div className="flex justify-center flex-col items-center gap-4 ">
            <img src={panda} className='w-96' alt="Get Started Panda" />
            <Title color="white">WELCOME TO KIDS STREAM</Title>
            <CustomButton color="color_yellow" backgroundColor="color_yellow" borderColor="black">
              <Text variant="basic">
                LET’S GET STARTED
              </Text>
            </CustomButton>
          </div>
        </LayoutPanel>
      </IllustratedLayoutPanel>
    </Page>

  );
}

export default GetStarted;