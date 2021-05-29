import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import slides from '../images';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30
  }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {slides.map((image) => {
        return (
          <div>
            
            <div class="ui card">
            <div class="image" >
            {image}
            </div>
            <div class="content">
                <div class="meta">
                <span class="date">Size: 28 30 31 </span>
                </div>
                <div class="description">
                Size: 28 30 31
                </div>
                
            </div>
            <div class="extra content">
                <a>
                <i class="fas fa-rupee-sign"></i>
                <span style={{textDecoration: 'line-through'}}>
                <FontAwesomeIcon icon={faRupeeSign} size = '1x' />
                &nbsp;700 </span>&nbsp;
                <span style={{backgroundColor: '#fff2ac'}}> 
                <FontAwesomeIcon icon={faRupeeSign} size = '1x' />
                &nbsp;300</span>
                </a>
            </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Simple;
