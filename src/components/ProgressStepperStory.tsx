import LayoutPanel from "./BaseUi/LayoutPanel";
import { CaseGroup } from "./BaseUi/CaseGroup";
import { Case } from "./BaseUi/Case";
import ProgressStepper from "./BaseUi/ProgressStepper";

const ProgressStepperStory = () => {

  return (
    <LayoutPanel>
      <CaseGroup title='text position with footer'>
        <Case title='Top'>
          <ProgressStepper size="sm" percentage={50} />
        </Case>
      </CaseGroup>

    </LayoutPanel>
  )

}

export default ProgressStepperStory;