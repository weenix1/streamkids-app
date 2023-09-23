import CircleStory from "./CircleStory";
import LayoutPanel from "./BaseUi/LayoutPanel";
import MovieCardStory from "./MovieCardStory";

const StoryBook = () => {
  return (
    <LayoutPanel>
      <CircleStory />
      <MovieCardStory />
    </LayoutPanel>
  );
}

export default StoryBook;
