import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";
import Simple from "./slider/simple";
import WithScrollbar from "./slider/scollbar";
import Section from "./slider/section";
import '../css/multiCards.css'


const multiCards = ({ deviceType }) => {
  return (
    <div  className='multi-cards'> 
      <h3 className='multi-cards-header'>Latest Arrivals</h3> 
      <Fragment>
      <h4 class="ui horizontal divider header">
      <i class="shopping cart icon"></i>
        Low Waist
      </h4>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
      <h4 class="ui horizontal divider header">
        <i class="shopping cart icon"></i>
        High Waist
      </h4>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
      <h4 class="ui horizontal divider header">
        <i class="shopping cart icon"></i>
        Shorts
      </h4>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
     
    </Fragment>
    </div>
 
  );
};

export default multiCards;