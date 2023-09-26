import LayoutPanel from "./BaseUi/LayoutPanel";
import CardWithFooter from "./BaseUi/CardWithFooter";

const MovieCardStory = () => {

  return (
    <LayoutPanel>
      <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='top' />
      <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='right' />
    </LayoutPanel>
  )

}

export default MovieCardStory;