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
export default class Settings extends Component {
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
        <header>
            <div className = "row">
                <div className = "col-md-1 logo">
                    <a href="#">strobes</a>
                </div>
                <div className = "col-md-10 search-box">
                    <input type="text" className = "form-control" placeholder="Search for Assets, Bugs, Assignees etc."/>
                </div>
                <div className = "col-md-1 p-0 user-prof dropdown">
                    <a href="#" className = "user-link" id="userprofile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src="/src/images/user.png"/> Eshwar
                        <i className = "fa fa-angle-down"></i>
                    </a>


                    <ul className = "dropdown-menu" aria-labelledby="userprofile">
                        <li>
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <a href="#">Setting</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>

                    </ul>

                </div>
            </div>
    </header>
    <div className = "sb-header">
        <div className = "bug-info b-r-1">
            <img src="/src/images/goibibo-logo.png"/>
            <h1>Goibibo
                <small>Created by Akhil Reni 25 days ago</small>
            </h1>
        </div>


        <div className = "bug-info p-l-45">
            <img src="/src/images/grade.png"/>
            <h1 className = "grade">
                <span className = "green">A</span> Grade
                <small>Security Health Index</small>
            </h1>
        </div>
        <div className = "bug-info p-l-45">
            <img src="/src/images/line-graph.png"/>

        </div>
    </div>

    <ul className = "menu-section">

        <li>
            <a href="#">Insights</a>
        </li>
        <li>
            <a href="#">Activity</a>
        </li>
        <li>
            <a href="#">Bugs</a>
        </li>
        <li>
            <a href="#">Tags</a>
        </li>
        <li className = "active">
            <a href="#">Team</a>
        </li>
        <li>
            <a href="#">Settings</a>
        </li>
    </ul>

    <ul className = "menu-section menu-top-fixed">
        <li className = "logo">
            <a href="#">strobes</a>

        </li>
        <li className = "com-heding">
            <img src="/src/images/goibibo-logo.png"/>
            <h1>Goibibo</h1>
        </li>
        <li>
            <a href="#">Insights</a>
        </li>
        <li>
            <a href="#">Activity</a>
        </li>
        <li>
            <a href="#">Bugs</a>
        </li>
        <li>
            <a href="#">Tags</a>
        </li>
        <li className = "active">
            <a href="#">Team</a>
        </li>
        <li>
            <a href="#">Settings</a>
        </li>

        <li className = "pull-right user-prof dropdown">
            <a href="#" className = "user-link dropdown-toggle" id="userprofile2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <img src="/src/images/user.png"/> Eshwar
                <i className = "fa fa-angle-down"></i>
            </a>


            <ul className = "dropdown-menu" aria-labelledby="userprofile2">
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Setting</a>
                </li>
                <li>
                    <a href="#">Logout</a>
                </li>

            </ul>


        </li>
        <li className = "pull-right search-box search">

            <input type="text" className = "form-control" placeholder="Search for Assets, Bugs, Assignees etc."/>
            <a className = "search-click">
                <img src="/src/images/search.png"/>
                <svg width="15px" height="15px" viewBox="0 0 14 15">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                        <g id="Assign-Users" transform="translate(-823.000000, -515.000000)" stroke="#D8D8D8" stroke-width="2">
                            <g id="Group-2" transform="translate(829.727922, 522.727922) rotate(-315.000000) translate(-829.727922, -522.727922) translate(820.727922, 513.727922)">
                                <path d="M0,8.18439849 L17.0984186,8.18439849 L0,8.18439849 Z" id="Line-2"></path>
                                <path d="M-0.173683847,8.04920932 L16.9247348,8.04920932 L-0.173683847,8.04920932 Z" id="Line-2" transform="translate(8.375525, 8.549209) rotate(-270.000000) translate(-8.375525, -8.549209) "></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </li>
    </ul>



    <section className = "main-section">


            <div className = "edit-asset-section p-25 b-b-1">
        <div className = "row">
            <div className = "col-md-2">
                <h1 className = "heading m-b-30">
                        Edit Asset
                </h1>
                </div>
                <div className = "col-md-2 text-right">

                        <a href="#" className = "more-action" id="crt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                More Actions <i className = "fa fa-caret-down" aria-hidden="true"></i>
                            
    
                        </a>
                        <ul className = "dropdown-menu p-0" aria-labelledby="crt">
                            <li>
                                <a href="#"data-toggle="modal" data-target="#delete">Leave Asset</a>
                            </li>
                            <li>
                                <a href="#">Delete Asset</a>
                            </li>
                            <li>
                                <a href="#">Transfer Ownership</a>
                            </li>
    
                            <li>
                                <a href="#">Dissable Asset</a>
                            </li>
    
    
                        </ul>
    
                    
            </div>
            
        </div>
    
        
    <div className = "edit-img-section">



            <figure className = "add-team-profile" style={{marginBottom:"0"}}>
                    <img src="/src/images/avtar.png" className = "team-img"/>
                    <figcaption>
                        <svg id="Capa_1" x="0px" y="0px" width="12px" height="12px" viewBox="0 0 528.899 528.899">
                            <g>
                                <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
           c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
           C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
           L27.473,390.597L0.3,512.69z"></path>
                            </g>

                        </svg>
                        <input type="file"/>

                    </figcaption>
                </figure>
    </div>

    <div className = "edit-asset-from-section">
        <input className = "form-control" placeholder="Edit Asset Name"/><br className = "clearfix"/>
        <button className = "btn btn-primary btn-rounded m-t-20" type="submit">Save</button>
    </div>
    
    
    
    </div>


<div className = "email-alert-section  p-25 b-b-1">
        <div className = "row">
                <div className = "col-md-12">
                    <h1 className = "heading m-b-30">
                            Email Alerts
                    </h1>
                </div>
                
            </div>

            
                    
                    <div className = "row">
                            <div className = "col-md-6 checkbox">
                                <label className = "label">
                                    <input type="checkbox" id="commited" name="severities"/>
                                    <span className = "checkmark"></span>
                                </label>
                                <label for="commited">Daily insights</label>
                            </div>
                            </div>
                            <div className = "row">
                            <div className = "col-md-12 checkbox">
                                <label className = "label">
                                    <input type="checkbox" id="hiegh" name="severities"/>
                                    <span className = "checkmark"></span>
                                </label>
                                <label for="hiegh">New bug submissions</label>
                            </div>
                        </div>
        
        
                        <div className = "row">
                                <div className = "col-md-12 checkbox">
                                    <label className = "label">
                                        <input type="checkbox" id="se-completd" name="severities"/>
                                        <span className = "checkmark"></span>
                                    </label>
                                    <label for="se-completd">On Status Change</label>
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-md-12 checkbox">
                                    <label className = "label">
                                        <input type="checkbox" id="low" name="severities"/>
                                        <span className = "checkmark"></span>
                                    </label>
                                    <label for="low">When a bug gets assigned to you</label>
                                </div>
                            </div>
                            <div className = "row">
                                    <div className = "col-md-12 checkbox">
                                        <label className = "label">
                                            <input type="checkbox" id="se-info" name="severities"/>
                                            <span className = "checkmark"></span>
                                        </label>
                                        <label for="se-info">Comments made on bugs</label>
                                    </div>
                                    
                                </div>
        
        
           
                            </div>

<div className = "tags-section p-25">

            <div className = "row">
                    <div className = "col-md-12">
                        <h1 className = "heading m-b-30">
                                Tags
                        </h1>
                    </div>
                    
                </div>
                <div className = "tag-list-section">


                        <ul className = "tag-users-list2">
                            <li>
                                tag1
                                <a href="#">x</a>
                            </li>
                            <li>
                                tag1
                                <a href="#">x</a>
                            </li>
                            <li>
                                tag1
                                <a href="#">x</a>
                            </li>
                            <li>
                                tag1
                                <a href="#">x</a>
                            </li>
                        </ul>
                        <a href="#" className = "btn-plus" data-toggle="modal" data-target="#tags">
                            <span data-toggle="tooltip" data-placement="top" title="" data-original-title="Add Tags">+</span>
                        </a>



                       
                    </div>
                </div>
    </section>


{/*<!-- Delete Modal Start -->*/}
<div className = "modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className = "modal-dialog" role="document">
            <div className = "modal-content">
                <div className = "modal-header">
                    <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className = "modal-title" id="myModalLabel">Leave Asset</h4>
                </div>
                <div className = "modal-body">
                    <div className = "asgin-textbox-section" style={{paddingTop:"25px",paddingBottom:"25px", borderBottom:"none"}}>



                        
<p className = "text-center">
        Deleting your organization and its data is irreversible. Enter your organization's name (<code>Goibibo</code>) below to confirm you want to permanently delete it:
</p>


                        <input type="text" value="" placeholder="Asset Name" className = "form-control m-b-20"/>

                        


                        

                    </div>

                    
                </div>
                <div className = "modal-footer">
                        <button type="button" className = "btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="button" className = "btn btn-danger" data-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>
   {/*} <!-- Delete Modal End -->*/}





    <div className = "modal fade" id="tags" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className = "modal-dialog" role="document">
                <div className = "modal-content">
                    <div className = "modal-header">
                        <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className = "modal-title" id="myModalLabel">Tags</h4>
                    </div>
                    <div className = "modal-body">
                        <div className = "tag-textbox-section">
                            <div className = "add-textbox">
                                <input type="text" value="" placeholder="Add Tag" className = "form-control"/>
    
                                <a href="#">
    
    
                                    <svg width="12px" height="12px" viewBox="0 0 19 19">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                            <g id="Assign-Users" transform="translate(-841.000000, -401.000000)" stroke="#FFFFFF" stroke-width="2">
                                                <g id="Group-2" transform="translate(841.000000, 401.000000)">
                                                    <path d="M0,9 L18.8023308,9 L0,9 Z" id="Line-2"></path>
                                                    <path d="M-0.0211653974,9.0211654 L18.7811654,9.0211654 L-0.0211653974,9.0211654 Z" id="Line-2" transform="translate(9.380000, 9.401165) rotate(-270.000000) translate(-9.380000, -9.401165) "></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
    
                            </div>
                        </div>
    
                        <div className = "tag-list-section">
    
    
                            <ul className = "tag-users-list2">
                                <li>
                                    tag1
                                    <a href="#">x</a>
                                </li>
                                <li>
                                    tag1
                                    <a href="#">x</a>
                                </li>
                                <li>
                                    tag1
                                    <a href="#">x</a>
                                </li>
                                <li>
                                    tag1
                                    <a href="#">x</a>
                                </li>
                            </ul>
    
    
    
                            {/*} <ul className = "tag-users-list">
                                        <li>
                                            
                                            <h4>
                                                Tag1
                                            </h4>
                                            <a href="#">
            
                                                <svg width="14px" height="15px" viewBox="0 0 14 15">
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                                        <g id="Assign-Users" transform="translate(-823.000000, -515.000000)" stroke="#D8D8D8" stroke-width="2">
                                                            <g id="Group-2" transform="translate(829.727922, 522.727922) rotate(-315.000000) translate(-829.727922, -522.727922) translate(820.727922, 513.727922)">
                                                                <path d="M0,8.18439849 L17.0984186,8.18439849 L0,8.18439849 Z" id="Line-2"></path>
                                                                <path d="M-0.173683847,8.04920932 L16.9247348,8.04920932 L-0.173683847,8.04920932 Z" id="Line-2" transform="translate(8.375525, 8.549209) rotate(-270.000000) translate(-8.375525, -8.549209) "></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            
                                            <h4>
                                                    Tag2
                                            </h4>
                                            <a href="#">
                                                <svg width="14px" height="15px" viewBox="0 0 14 15">
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                                        <g id="Assign-Users" transform="translate(-823.000000, -515.000000)" stroke="#D8D8D8" stroke-width="2">
                                                            <g id="Group-2" transform="translate(829.727922, 522.727922) rotate(-315.000000) translate(-829.727922, -522.727922) translate(820.727922, 513.727922)">
                                                                <path d="M0,8.18439849 L17.0984186,8.18439849 L0,8.18439849 Z" id="Line-2"></path>
                                                                <path d="M-0.173683847,8.04920932 L16.9247348,8.04920932 L-0.173683847,8.04920932 Z" id="Line-2" transform="translate(8.375525, 8.549209) rotate(-270.000000) translate(-8.375525, -8.549209) "></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
            
                                    </ul> */}
                        </div>
                    </div>
                    <div className = "modal-footer">
                        <button type="button" className = "btn btn-primary" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
       {/* <!-- Tags Modal End -->*/}



        </div>
      )
  }
}