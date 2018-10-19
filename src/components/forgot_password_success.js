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

export default class Forgot_Password_Success extends Component {
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
                <div class="page-left">
                </div>
                <div class="page-right">
                    <div class="form-section">
                        <div class="logo">
                            <a href="#">strobes</a>
                        </div>
                        <h1 class="heading">Check your email</h1>
                        If <strong>eshwar@wesecureapp.com</strong> is associated with an <strong>Strobes ID</strong>, you should receive an email containing instructions on how to create a new password.
                            <h1 class="heading-2 m-t-30 m-b-5">Didn't receive the email?</h1>
                            Check spam or bulk folders for a message coming from account-noreply@strobes.co
                        <div class="row">
                            <div class="col-md-12 m-t-30">
                                <a href="index.html" class="text-blue">Return to Signin</a>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        )
    }
}
