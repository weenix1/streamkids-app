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
      <Box className="h-screen">
        <Box flexJustifyContent="center" flexDirection="column" className="grid grid-cols-1 md:grid-cols-2">
          <Box flexBasis="auto" className="bg-stream_color_blue ">
            <LayoutPanel>
              {leftContent}
            </LayoutPanel>
          </Box>
          <Box flexBasis="auto" className="shrink-1">
            <LayoutPanel>
              {rightContent}
            </LayoutPanel>
          </Box>
        </Box>
      </Box>
    </Page>
  )
}


export default DoubleViewPanel