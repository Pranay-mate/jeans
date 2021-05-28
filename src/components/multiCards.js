import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";
import Simple from "./slider/simple";
import WithScrollbar from "./slider/scollbar";
import Section from "./slider/section";
import '../css/multiCards.css'

const multiCards = ({ deviceType }) => {
  return (
    <Fragment className='multi-cards'>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
     
    </Fragment>
  );
};

export default multiCards;