import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";
import Simple from "./slider/simple";
import WithScrollbar from "./slider/scollbar";
import Section from "./slider/section";

const multiCards = ({ deviceType }) => {
  return (
    <Fragment>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
     
    </Fragment>
  );
};

export default multiCards;