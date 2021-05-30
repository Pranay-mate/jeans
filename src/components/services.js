import React, {Component} from 'react';
import {Carousel} from '3d-react-carousal';
import '../css/services.css';
import slides from './images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faTruck, faHandshake } from '@fortawesome/free-solid-svg-icons'

class Services extends Component {

        constructor(props) {
          super(props)
        }
        
        render() {
        
          return (
            <div className="services-page" >
              <div class="ui equal width center aligned padded grid internally celled">
                <div class="row">
                    <div class="ui items column">
                        <div class="item">
                            <div class="image">
                                <FontAwesomeIcon icon={faHandshake} size = '4x' />
                            </div>
                            <div class=" content">
                                <div class="description">
                                    <span>100% ORIGINAL guarantee </span>
                                </div>
                                <div class="extra">
                                for all products at Denimo.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui items column">
                        <div class="item">
                            <div class="image">
                               <FontAwesomeIcon icon={faExchangeAlt} size = '4x' />
                            </div>
                            <div class=" content">
                                <div class="description">
                                    <span>Return within 15days</span>
                                </div>
                                <div class="extra">
                                of receiving your order
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui items column">
                        <div class="item">
                            <div class="image">
                                <FontAwesomeIcon icon={faTruck} size = '4x' />
                            </div>
                            <div class=" content">
                                <div class="description">
                                    <span>Get free delivery</span>
                                </div>
                                <div class="extra">
                                for every order above Rs. 1799
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          );
        }
      }
export default Services;