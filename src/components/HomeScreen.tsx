import CircleBox from "./BaseUi/CircleBox";
import LayoutPanel from "./BaseUi/LayoutPanel";

const HomeScreen = () => {

  return (
    <LayoutPanel>
      <CircleBox width="sm" height="lg" bgColor="light_pink" iconPosition="center" text="VIDEOS" />
    </LayoutPanel>
  );
}

export default HomeScreen;