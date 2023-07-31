import JumboCard from "./JumboCard";
import Page from "./Page";
import Title from "./Title";
import React from "react";
import Text from "./Text";
import LayoutPanel from "./LayoutPanel";
import I18nS from "../Services/I18nService";
import PlainCard from "./PlainCard";


const LandingPage = () => {
  const { t } = I18nS;
  return (
    <Page>
      <JumboCard />
      <LayoutPanel>
        <div className="flex justify-items-center flex-col items-center gap-1">
          <Title variant="h2">{t('landing_offer_title')}</Title>
          <Text variant="normal">
            {t('landing_offer_subtitle')}
          </Text>
        </div>
        <div>


        </div>

      </LayoutPanel>
      <LayoutPanel>
        <PlainCard />

      </LayoutPanel>
    </Page>
  );
}

export default LandingPage