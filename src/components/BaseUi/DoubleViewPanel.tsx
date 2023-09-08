import Box from "./Box"
import LayoutPanel from "./LayoutPanel"
import Page from "../Page"

interface DoubleViewPanelProps {
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
}



const DoubleViewPanel = ({ leftContent, rightContent }: DoubleViewPanelProps) => {
  return (
    <Page>
      <Box flexJustifyContent="center" flexDirection="column" className="md:flex-row h-screen">
        <Box flexBasis="auto" className="bg-stream_color_blue">
          <LayoutPanel>
            {leftContent}
          </LayoutPanel>
        </Box>
        <Box flexBasis="auto">
          <LayoutPanel>
            {rightContent}
          </LayoutPanel>
        </Box>
      </Box>
    </Page>
  )
}


export default DoubleViewPanel