import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";

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
const images = [
    <img  src="https://picsum.photos/800/300/?random" alt="1" style={{height: '8em'}} />,
    <img  src="https://picsum.photos/800/303/?random" alt="6" style={{height: '8em'}} />  ,
    <img  src="https://picsum.photos/800/301/?random" alt="2" style={{height: '8em'}} />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" style={{height: '8em'}} />  , 
    <img  src="https://picsum.photos/800/303/?random" alt="4" style={{height: '8em'}} />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" style={{height: '8em'}} />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" style={{height: '8em'}} />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" style={{height: '8em'}} />  , 
    <img  src="https://picsum.photos/800/303/?random" alt="4" style={{height: '8em'}} />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" style={{height: '8em'}} /> 
];

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
      {images.map((image) => {
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
