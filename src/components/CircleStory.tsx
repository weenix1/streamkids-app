import { Case } from "./BaseUi/Case"
import { CaseGroup } from "./BaseUi/CaseGroup"
import CircleBox from "./BaseUi/CircleBox"

const CircleStory = () => {
  return (
    <CaseGroup title="Text for circle">
      {
        (['VIDEOS', 'LIVE TV', 'FAVORITE', 'CATEGORY']).map((item, index) => (
          <Case title={item} key={index}>
            <CircleBox width="sm" height="lg" bgColor="light_pink" iconPosition="center" text={item} />
          </Case>
        ))
      }
    </CaseGroup>
  )
}

export default CircleStory