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

export default class Forgot_Password extends Component {
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
                        <h1 className = "heading">Forgot Password</h1>
                        Enter your <strong>Strobes ID</strong>  to help us identify you.

                        <form action="">
                            <div className = "row">
                                <div className = "col-md-12">
                                    <input type="text" className = "form-control" placeholder="Email Address"/>
                                </div>
                            </div>
                            <div className = "row">
                                 <div className = "col-md-12 m-b-25">
                                    <button className = "btn btn-primary btn-rounded" type="submit">Submit</button>
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-md-12 ">
                                    <a href="index.html" className = "text-blue">Return to Signin</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
