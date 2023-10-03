import LayoutPanel from "./BaseUi/LayoutPanel";
import PlayCard from "./BaseUi/PlayCard";
import { CaseGroup } from "./BaseUi/CaseGroup";
import { Case } from "./BaseUi/Case";
import MovieCard from "./BaseUi/MovieCard";
import LoveIcon from "../assets/icons/LoveIcon";
import EyeIcon from "../assets/icons/EyeIcon";
import Eye from "../assets/icons/eye.svg";
import PlayIcon from "../assets/icons/PlayIcon";
import PauseIcon from "../assets/icons/PauseIcon";
import SkipIcon from "../assets/icons/SkipIcon";
import NextIcon from "../assets/icons/NextIcon";

const PlayCardStory = () => {

  return (
    <LayoutPanel>
      <CaseGroup title='text position with footer'>
        <Case title='Top'>
          <PlayCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='top' />
        </Case>
        <Case title='Bottom'>
          <PlayCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='bottom' />
        </Case>
        <Case title='Left'>
          <PlayCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='left' />
        </Case>
        <Case title='Right'>
          <PlayCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='right' />
        </Case>
        <Case title='Center'>
          <PlayCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='center' />
        </Case>
        <Case title='Start'>
          <PlayCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='start' />
        </Case>
        <Case title='End'>
          <PlayCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='end' />
        </Case>
      </CaseGroup>
      <CaseGroup title='text position without footer'>
        <Case title='Top'>
          <PlayCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='top' />
        </Case>
        <Case title='Bottom'>
          <PlayCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='bottom' />
        </Case>
        <Case title='Left'>
          <PlayCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='left' />
        </Case>
        <Case title='Right'>
          <PlayCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='right' />
        </Case>
        <Case title='Center'>
          <PlayCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='center' />
        </Case>
        <Case title='Start'>
          <PlayCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='start' />
        </Case>
        <Case title='End'>
          <PlayCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='end' />
        </Case>
      </CaseGroup>

      <CaseGroup title="Card playing">
        <Case title="Playing">
          <PlayCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='top' isPlaying isFooter />
        </Case>
      </CaseGroup>

      <CaseGroup title="movie card ">
        <Case title="Playing">
          <MovieCard width="sm" height="sm" title='Add to favorite' iconPosition="right" />
        </Case>
        <Case title="Icon">
          <LoveIcon />
        </Case>
        <Case title="Icon">

          <PlayIcon />

        </Case>
        <Case title="Icon">

          <PauseIcon />

        </Case>

        <Case title="Icon">

          <SkipIcon />

        </Case>
        <Case title="Icon">
          <NextIcon backgroundColor="blue-dark" />
        </Case>
        <Case title="Icon">
          <EyeIcon />

        </Case>
      </CaseGroup>
    </LayoutPanel>
  )

}

export default PlayCardStory;