import {
  Card,
  CardHeader,
  CardFooter,
} from "@material-tailwind/react";
import Text from "./Text";
import MoreIcon from "../../assets/icons/more_vert.svg";

interface MovieCardProps {
  duration?: string;
  title?: string;
}

const MovieCard = ({ duration, title }: MovieCardProps) => {

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
        <div className="absolute bg-stream_white rounded-full top-2 left-2 w-32 h-8 p-4 flex justify-center items-center">
          <Text color="light_gray" bold>
            {duration}
          </Text>
        </div>
      </CardHeader>
      <CardFooter className="flex items-center justify-between py-2">
        <Text color="black" > {title} </Text>
        <img src={MoreIcon} alt="more icon" />
      </CardFooter>
    </Card>
  );
}

export default MovieCard;
