import React, {Component} from 'react';
import {Carousel} from '3d-react-carousal';
import '../css/whatsapp.css';
import slides from './images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Whatsapp extends Component {

        constructor(props) {
          super(props)
        }
        
        render() {
        
          return (
            <div class="whatsapp-icon" style={{position:'sticky'}}>
                <a href="https://wa.me/+917276435142">
                <i class="inverted green whatsapp huge icon"></i>

                </a>

            </div>

          );
        }
      }
export default Whatsapp;
    
