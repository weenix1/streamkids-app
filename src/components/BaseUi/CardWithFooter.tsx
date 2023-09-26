import {
  Card,
  CardHeader,
  CardFooter,
} from "@material-tailwind/react";
import Text from "./Text";
import MoreIcon from "../../assets/icons/more_vert.svg";
import { ConfigPosition } from "../../types";
import Box from "./Box";
import ChipPill from "./ChipPill";

interface CardWithFooterProps {
  duration?: string;
  title?: string;
  iconPosition: ConfigPosition;
}

const CardWithFooter = ({ duration, title, iconPosition }: CardWithFooterProps) => {

  const alignmentStyles = {
    start: {
      icon: 'absolute top-1/2 left-2 transform -translate-y-1/2',
      text: 'absolute top-1/2 left-2 transform -translate-y-1/2',
    },
    center: {
      icon: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      text: 'absolute top-1/2 left-2 transform -translate-y-1/2',
    },
    end: {
      icon: 'absolute top-1/2 right-2 transform -translate-y-1/2',
      text: 'absolute top-1/2 left-2 transform -translate-y-1/2',
    },
    top: {
      icon: 'absolute top-2 left-2 transform -translate-y-1/2',
      text: 'absolute top-6 left-2 transform -translate-y-1/2 ',
    },
    right: {
      icon: 'absolute top-6 right-2 transform -translate-y-1/2',
      text: 'absolute top-6 right-2 transform -translate-y-1/2',
    },
    bottom: {
      icon: 'absolute bottom-2 left-2 transform -translate-y-1/2',
      text: 'absolute bottom-1/2 left-2 transform -translate-y-1/2',
    },
    left: {
      icon: 'absolute top-1/2 left-2 transform -translate-y-1/2',
      text: 'absolute top-1/2 left-2 transform -translate-y-1/2',
    },
  };


  const selectedStyle = alignmentStyles[iconPosition] || alignmentStyles.end; // default to 'left' if no valid alignment provided

  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
        {/* <div className="absolute bg-stream_white rounded-full top-2 left-2 w-32 h-8 p-4 flex justify-center items-center">
          <Text color="light_gray" bold>
            {duration}
          </Text>
        </div> */}
        <Box className={`${selectedStyle.text}`}>
          <ChipPill value={duration} bgColor="white" textColor="black" borderColor="white" />

        </Box>
      </CardHeader>
      <CardFooter className="flex items-center justify-between py-2">
        <Text color="black"> {title} </Text>
        <img src={MoreIcon} alt="more icon" />
      </CardFooter>
    </Card>
  );
}

export default CardWithFooter;
