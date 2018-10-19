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

export default class Create_Bug extends Component {
    constructor(props) {
        super(props);
           this.state = {
            isOpen1: false,
            data:[],
          };
    }
    render(){
        return(
            <div className="create-bug-page">
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
                    <li className = "active">
                        <a href="#">Bugs</a>
                    </li>
                    <li>
                        <a href="#">Tags</a>
                    </li>
                    <li>
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
            <li className = "active">
                <a href="#">Bugs</a>
            </li>
            <li>
                <a href="#">Tags</a>
            </li>
            <li>
                <a href="#">Team</a>
            </li>
            <li>
                <a href="#">Settings</a>
            </li>
    
            <li className = "pull-right user-prof dropdown">
                <a href="#" className = "user-link" id="userprofile2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
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

        <section className = "main-section bg-color">   
        <div className = "row">
        
            <div className = "col-md-8 col-md-offset-2">
        
         
        <div className = "inner-box">




                <div className = "row">
                        <div className = "col-md-10 col-md-offset-1">

            <div className = "row">
                <div className = "col-md-12">
                        <h1 className = "heading m-b-30">Create Bug</h1>
                </div>
            </div>




            <div className = "row cre-bug-row">
                <div className = "col-md-2 text-right">
                    <h6>Title</h6>
                </div>
                <div className = "col-md-10">
                    <input type="text" className = "form-control"/>
                </div>
            </div>

            <div className = "row cre-bug-row m-t-20">
                    <div className = "col-md-2 text-right">
                        <h6>Severity</h6>
                    </div>
                    <div className = "col-md-4">
                           
                                    <div className = "radio-section">
                                        <label className = "label">
                                            <input type="radio" id="" name="severities"/>
                                            <span className = "radio-mark red" data-toggle="tooltip" data-placement="top" title="" data-original-title="Critical"></span>
                                        </label>
                                        <label className = "label">
                                            <input type="radio" id="" name="severities" checked=""/>
                                            <span className = "radio-mark orange" data-toggle="tooltip" data-placement="top" title="" data-original-title="High"></span>
                                        </label>
                                        <label className = "label">
                                            <input type="radio" id="" name="severities"/>
                                            <span className = "radio-mark yellow" data-toggle="tooltip" data-placement="top" title="" data-original-title="Medium"></span>
                                        </label>
                                        <label className = "label">
                                            <input type="radio" id="" name="severities"/>
                                            <span className = "radio-mark green" data-toggle="tooltip" data-placement="top" title="" data-original-title="Low"></span>
                                        </label>
                                        <label className = "label">
                                            <input type="radio" id="" name="severities"/>
                                            <span className = "radio-mark voilet" data-toggle="tooltip" data-placement="top" title="" data-original-title="Info"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className = "col-md-2 text-right">
                                        <h6>Category</h6>
                                    </div>
                                    <div className = "col-md-4">
                                        <select className = "form-control">
                                            <option>A</option>
                                            <option>A</option>
                                        </select>
                                    </div>

            
                    
                </div>

                <div className = "row  m-t-20">
                        <div className = "col-md-2 text-right">
                            <h6>Description</h6>
                        </div>
                        <div className = "col-md-10">
                            <textarea className = "form-control"></textarea>
                        </div>
                    </div>



                    <div className = "row  cre-bug-row m-t-20">
                            <div className = "col-md-2 text-right">
                                <h6>Attachments</h6>
                            </div>
                            <div className = "col-md-10">
                                            <input type="file" name="file-7[]" id="file-7" className = "inputfile inputfile-6" data-multiple-caption="{count} files selected" multiple=""/>
                                            <label for="file-7"><span></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> Upload File</strong></label>
                                        
                            </div>
                        </div>

                        <div className = "row m-t-20">
                            <div className = "col-md-10 col-md-offset-2">
                                    <button className = "btn btn-primary btn-rounded" type="submit">Submit</button>
                            </div>
                        </div>

</div></div>




        </div>
        </div>
        </div>
       
        </section>




            </div>
        );
    }
}