import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import slides from '../images';

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
                <span class="date">Joined in 2013</span>
                </div>
                <div class="description">
                Kristy is
                </div>
            </div>
            <div class="extra content">
                <a>
                <i class="user icon"></i>
                22 Friends
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
