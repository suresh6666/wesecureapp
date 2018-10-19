import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import FontAwesome from "react-fontawesome";
import { withRouter, Link } from 'react-router-dom';
import fetchData from "./ajax";

export default class Signin extends Component {
	constructor(props) {
    super(props);
       this.state = {
	      isOpen1: false,
        data:[],
	    };
	}
    render(){
        return(
            <div>
                <div className = "page-left">

                </div>
                    <div className = "page-right">
                    <div className = "form-section">
                            <div className = "logo">
                                    <a href="#">strobes</a>
                                </div>
                                <span className = "meta-title">Sign up to continue</span> 

                                <form action="">

                                <div className = "row">
                                    <div className = "col-md-6">
                                        <input type="text" className = "form-control" placeholder="First Name"/>
                                    </div>
                                    <div className = "col-md-6">
                                            <input type="text" className = "form-control" placeholder="Last Name"/>
                                        </div>
                                </div>
                                <div className = "row">
                                        <div className = "col-md-12">
                                            <input type="text" className = "form-control" placeholder="Email Address"/>
                                        </div>
                                    </div>
                                <div className = "row">
                                        <div className = "col-md-12">
                                            <input type="password" className = "form-control" placeholder="Password"/>
                                        </div>
                                    </div>

                                    <div className = "row">
                                            <div className = "col-md-12">
                                                <input type="text" className = "form-control" placeholder="Organization"/>
                                            </div>
                                        </div>

                                        <div className = "row">
                                                <div className = "col-md-12">
                                                    <input type="text" className = "form-control" placeholder="Designation"/>
                                                </div>
                                            </div>
                                            <div className = "row">
                                                <div className = "col-md-12 m-b-25">
                                                        By clicking “Sign up” I agree that I have read and 
                                                        accepted the <a href="" className = "text-blue">Terms of Use</a> and <a href="" className = "text-blue">Privacy Policy</a> 
                                                        
                                                </div>
                                            </div>

                    <div className = "row">
                        <div className = "col-md-12 m-b-25">
                                <button className = "btn btn-primary btn-rounded" type="submit">Sign in</button>
                        </div>
                        
                    </div>

                    <div className = "row">
                        <div className = "col-md-12 ">
                                Already have an Strobes ID?  <a href="index.html" className = "text-blue">Sign In</a>
                        </div>
                    </div>



                                </form>
                        </div>
                    </div>
            </div>
        )
    }
}
