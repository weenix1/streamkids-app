import CircleStory from "./CircleStory";
import LayoutPanel from "./BaseUi/LayoutPanel";
import PlayCardStory from "./PlayCardStory";
import ProgressStepperStory from "./ProgressStepperStory";

const StoryBook = () => {
  return (
    <LayoutPanel>
      <CircleStory />
      <PlayCardStory />
      <ProgressStepperStory />
    </LayoutPanel>
  );
}

export default StoryBook;
