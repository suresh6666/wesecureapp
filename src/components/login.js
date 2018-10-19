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

export default class Login extends Component {
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
                        <span className = "meta-title">For your protection, please provide your identity.</span> 
                        <form action="">
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
                                <div className = "col-md-4 m-b-25">
                                    <button className = "btn btn-primary btn-rounded" type="submit">Sign in</button>
                                </div>
                                <div className = "col-md-8 text-right m-b-25">
                                    <a href="forgot-password.html" className = "text-blue forgot-pass">Forgot Password?</a>
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-md-12 ">
                                    Not a member yet? <a href="signin.html" className = "text-blue">Get an Strobes ID</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
