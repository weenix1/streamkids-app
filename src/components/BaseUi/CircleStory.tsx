import { Case } from "./Case"
import { CaseGroup } from "./CaseGroup"
import CircleBox from "./CircleBox"

const CircleStory = () => {
  return (
    <CaseGroup title="Text for circle">
      <Case title="Circle">
        <CircleBox width="sm" height="lg" bgColor="light_pink" iconPosition="center" text="VIDEOS" />
      </Case>
    </CaseGroup>
  )
}

export default CircleStory