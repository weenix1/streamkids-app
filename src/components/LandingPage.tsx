import JumboCard from "./JumboCard";
import Page from "./Page";
import Title from "./Title";
import Text from "./Text";
import LayoutPanel from "./LayoutPanel";

const LandingPage = () => {
  return (
    <Page>
      <JumboCard />
      <LayoutPanel>
        <Title variant="h2">Hello World</Title>
        <Text variant="normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate.
        </Text>
      </LayoutPanel>
    </Page>
  );
}

export default LandingPage