  
import React,{Component} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/navbar.css";
import { Link } from "react-scroll";


class MenuBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
  return (
    <div className="main_banner sticky-top">

                <Navbar dark expand="md" className="navbar  navbar-dark transparent-nav nav-js col-sm-12">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><Link className="navbar-brand ml-4" href="/" activeClass="active"
                        to="home-caurosal"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}>
                          Denimo
                        </Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='ml-auto'>

                            <NavItem>
                            <Link
                            className="nav-item nav-link"
                              activeClass="active"
                              to="home-caurosal"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >Home</Link>
                            </NavItem>

                            <NavItem>
                            <Link
                            className="nav-item nav-link"
                              activeClass="active"
                              to="multi-cards"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >Features</Link>
                            </NavItem>

                            <NavItem>
                            <Link
                            className="nav-item nav-link"
                              activeClass="active"
                              to="reviews-section"
                              spy={true}
                              smooth={true}
                              offset={-60}
                              duration={500}
                            >Reviews</Link>
                            </NavItem>

                            <NavItem>
                            <Link
                            className="nav-item nav-link"
                              activeClass="active"
                              to="Projects"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >About Us</Link>
                            </NavItem>

                            <NavItem>
                            <Link
                            className="nav-item nav-link"
                              activeClass="active"
                              to="footer"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >Contact Us</Link>
                            </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>


    </div>
  );
}
}

export default MenuBar;