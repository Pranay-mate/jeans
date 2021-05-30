import React, {Component} from 'react';
import {Carousel} from '3d-react-carousal';
import '../css/footer.css';
import slides from './images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {

        constructor(props) {
          super(props)
        }
        
        render() {
        
          return (
            <div class="ui equal width center aligned padded grid footer" style={{height:'auto', backgroundColor:'#202020', color:'#878787'}}>
                <div class="three column row">
                    <div class="four wide column company-logo" style={{margin: 'auto'}}>Denimo</div>
                    <div class="eight wide column footer-copyright">
                        <i class="copyright icon"></i>
                        2021, All Rights Reserved by Pranay Mate
                    </div>
                    <div class="four wide column footer-icons" >
                        <a  href="https://pranay-mate.github.io/portfolio/">
                            <i class="user circle large link icon" ></i>
                        </a>
                        <a  href="https://www.linkedin.com/in/pranay-mate-arvind/">
                            <i class="linkedin large link icon"></i>
                        </a>
                        <a  href="https://www.instagram.com/pranay_mate/">
                            <i class="instagram large icon"></i>
                        </a>
                        <a  href="mailto:matepranay11@gmail.com">
                          <i class="envelope large icon"></i>
                        </a>
                    </div>
                </div>
            </div>

          );
        }
      }
export default Footer;
    
