import LayoutPanel from "./BaseUi/LayoutPanel";
import CardWithFooter from "./BaseUi/CardWithFooter";
import { CaseGroup } from "./BaseUi/CaseGroup";
import { Case } from "./BaseUi/Case";

const MovieCardStory = () => {

  return (
    <LayoutPanel>
      <CaseGroup title='text position'>
        <Case title='Top'>
          <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='top' />
        </Case>
        <Case title='Bottom'>
          <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='bottom' />
        </Case>
        <Case title='Left'>
          <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='left' />
        </Case>
        <Case title='Right'>
          <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='right' />
        </Case>
        <Case title='Center'>
          <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='center' />
        </Case>
        <Case title='Start'>
          <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='start' />
        </Case>
        <Case title='End'>
          <CardWithFooter title='Power rangers' duration="1h 20min" iconPosition='end' />
        </Case>
      </CaseGroup>
    </LayoutPanel>
  )

}

export default MovieCardStory;