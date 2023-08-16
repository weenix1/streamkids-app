import Page from "./Page"

interface DoubleViewPanelProps {
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
}



const DoubleViewPanel = ({ leftContent, rightContent }: DoubleViewPanelProps) => {
  return (
    <div className="flex md:flex-row justify-center w-screen h-screen flex-col">
      <div className="flex-auto bg-stream_color_blue">
        {leftContent}
      </div>
      <div className="flex-auto">
        {rightContent}
      </div>

    </div>
  )
}


export default DoubleViewPanel