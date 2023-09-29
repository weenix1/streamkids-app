import LayoutPanel from "./BaseUi/LayoutPanel";
import MovieCard from "./BaseUi/MovieCard";
import { CaseGroup } from "./BaseUi/CaseGroup";
import { Case } from "./BaseUi/Case";

const MovieCardStory = () => {

  return (
    <LayoutPanel>
      <CaseGroup title='text position with footer'>
        <Case title='Top'>
          <MovieCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='top' />
        </Case>
        <Case title='Bottom'>
          <MovieCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='bottom' />
        </Case>
        <Case title='Left'>
          <MovieCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='left' />
        </Case>
        <Case title='Right'>
          <MovieCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='right' />
        </Case>
        <Case title='Center'>
          <MovieCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='center' />
        </Case>
        <Case title='Start'>
          <MovieCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='start' />
        </Case>
        <Case title='End'>
          <MovieCard width="sm" height="md" title='Power rangers' duration="1h 20min" isFooter iconPosition='end' />
        </Case>
      </CaseGroup>
      <CaseGroup title='text position without footer'>
        <Case title='Top'>
          <MovieCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='top' />
        </Case>
        <Case title='Bottom'>
          <MovieCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='bottom' />
        </Case>
        <Case title='Left'>
          <MovieCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='left' />
        </Case>
        <Case title='Right'>
          <MovieCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='right' />
        </Case>
        <Case title='Center'>
          <MovieCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='center' />
        </Case>
        <Case title='Start'>
          <MovieCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='start' />
        </Case>
        <Case title='End'>
          <MovieCard width="sm" height="sm" title='Power rangers' duration="1h 20min" iconPosition='end' />
        </Case>
      </CaseGroup>
    </LayoutPanel>
  )

}

export default MovieCardStory;