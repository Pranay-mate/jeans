import React, {Component} from 'react';
import {Carousel} from '3d-react-carousal';
import '../css/homePageSlides.css';
import '../css/homePageSlides.scss';
import slides from './images';
class homePageSlides extends Component {

        constructor(props) {
          super(props)
        }
        
        render() {
        
          return (
            <div className="home-caurosal" >
              {/* <Carousel slides={slides} autoplay={true} interval={2000} arrows={true} arrowBorders={true} /> */}
              <Carousel slides={slides} arrows={true} arrowBorders={true} />
            </div>
          );
        }
      }
export default homePageSlides;