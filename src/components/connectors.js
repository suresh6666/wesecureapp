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

export default class Connectors extends Component {
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
        <section className = "main-section p-25">

        <div className = "row">
            <div className = "col-md-8">
                <h1 className = "heading m-b-30">
                        Connectors
                </h1>
            </div>
            <div className = "col-md-4 text-right">
            
            </div>
        </div>
        <div className = "connecter-section">
                <div className = "connecter-list">
                  <a href="" data-toggle="modal" data-target="#connect"><img src="/src/images/Archani-Importer.png"/>
                  <span>Archani Importer</span>
                  </a>
                  <div className = "status-connecter"><span className = "dot green-dot dot-top"></span> Connected</div>
                </div>
                <div className = "connecter-list">
                  <a href="" data-toggle="modal" data-target="#connect"><img src="/src/Images/burp-suite-exporter.png"/>
                  <span>Burp Suite Importer</span>
                  </a>
                  <div className = "status-connecter"><span className = "dot red-dot dot-top"></span> Not Connect</div>
                </div>
                <div className = "connecter-list">
                  <a href="" data-toggle="modal" data-target="#connect"><img src="/src/images/W3af-Importer.png"/>
                  <span>W3af<br/>Importer</span>
                  </a>
                  <div className = "status-connecter"><span className = "dot green-dot dot-top"></span> Connected</div>
                </div>
                <div className = "connecter-list">
                        <a href="" data-toggle="modal" data-target="#export"><img src="/src/images/Strobes-Report-Exporter.png"/>
                        <span>Strobes Report Exporter</span>
                        </a>
                        <div className = "status-connecter"><span className = "dot green-dot dot-top"></span> Connected</div>
                </div>
                <div className = "connecter-list add">
                  <a href="" data-toggle="modal" data-target="#add">
                  <div className = "ad-bl"><div>
                        <div className = "btn-icon">
                                <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
                                    <g id="v2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                        <g id="2Teya-dashboard-Copy" transform="translate(-396.000000, -95.000000)" stroke="#FFFFFF" stroke-width="2">
                                            <g id="Group" transform="translate(397.000000, 96.000000)">
                                                <path d="M4,0 L4,8" id="Line-2"></path>
                                                <path d="M8,4 L0,4" id="Line-2-Copy"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                Add Custom Connecters
            </div></div>
                
                  </a>
                </div>

            </div>
    </section>



        <div className = "modal fade" id="connect" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className = "modal-dialog" role="document">
                <div className = "modal-content team-modal" style={{paddingTop:"0"}}>
                    <div className = "modal-header">
                        <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className = "modal-title" id="myModalLabel">Archani Report Importer</h4>
                        <div>Import bugs from your Archani Scanner Report.</div>
                        
                        <br/>
                        <span><strong>Author: </strong>strobes.co</span>
                        <span className = "connector-version">Public Release ~0.7 Build</span>
                        


                    </div>
                    <div className = "modal-body ">
                            
    
    <div className = "connecter-popup-section">
    
        
    
    <h5>Usage</h5>
    <p>Upload the <code>.xml</code> file below.</p>    
    
    
    <div className = "row m-b-30">
            <div className = "col-md-12">
                    <input type="file" name="file-7[]" id="file-7" className = "inputfile inputfile-6" data-multiple-caption="{count} files selected" multiple />
                    <label for="file-7"><span>Upload the .xml</span> <strong><svg  width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Upload File</strong></label>
                
            </div>
        </div>
        

<div className = "row">
        <div className = "col-md-6">
                <h5 className = "m-0">Bug List </h5>

        </div>
    <div className = "col-md-6 text-right">
            <a href="#" className = "text-blue">Select All</a>
    </div>
</div>


        <ul className = "list-widget conct-lis">
                <li><label>
                    <div className = "row">
                            <div className = "col-md-12 connecter-bug-list">
                                    <span className = "dot red-dot dot-top"></span>
                                    <h2>Cross site scripting</h2>
                                
                                <div className = "checkbox">
                                        <label className = "label">
                                            <input type="checkbox" id="commited" name="severities"/>
                                            <span className = "checkmark"></span>
                                        </label>
                                    </div>
                    </div></div></label>
                </li>
                <li><label>
                        <div className = "row">
                                <div className = "col-md-12 connecter-bug-list">
                                        <span className = "dot red-dot dot-top"></span>
                                        <h2>Cross site scripting</h2>
                                    
                                    <div className = "checkbox">
                                            <label className = "label">
                                                <input type="checkbox" id="commited" name="severities"/>
                                                <span className = "checkmark"></span>
                                            </label>
                                        </div>
                        </div></div></label>
                    </li>
                
                    <li><label>
                            <div className = "row">
                                    <div className = "col-md-12 connecter-bug-list">
                                            <span className = "dot red-dot dot-top"></span>
                                            <h2>Cross site scripting</h2>
                                        
                                        <div className = "checkbox">
                                                <label className = "label">
                                                    <input type="checkbox" id="commited" name="severities"/>
                                                    <span className = "checkmark"></span>
                                                </label>
                                            </div>
                            </div></div></label>
                        </li>
                        <li><label>
                                <div className = "row">
                                        <div className = "col-md-12 connecter-bug-list">
                                                <span className = "dot red-dot dot-top"></span>
                                                <h2>Cross site scripting</h2>
                                            
                                            <div className = "checkbox">
                                                    <label className = "label">
                                                        <input type="checkbox" id="commited" name="severities"/>
                                                        <span className = "checkmark"></span>
                                                    </label>
                                                </div>
                                </div></div></label>
                            </li>
                  
                    </ul>
                    </div>
                    </div>
    
                    <div className = "modal-footer">
                        <button type="button" className = "btn btn-primary" data-dismiss="modal">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>




        <div className = "modal fade" id="export" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className = "modal-dialog" role="document">
                <div className = "modal-content team-modal" style={{paddingTop:"0"}}>
                    <div className = "modal-header">
                        <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className = "modal-title" id="myModalLabel">Strobes Report Exporter</h4>
                    </div>
                    <div className = "modal-body ">
                            
    
    <div className = "connecter-popup-section">
    
        
    
    <h5>About this connect </h5>
    <p>Import bugs from your Archani Scanner Report. Upload the <code>.xml</code> file below.</p>
    
    <div className = "row m-b-20">
            <div className = "col-md-12">
                    <h6>Select report</h6>
                  <select className = "form-control">
                      <option>S</option>
                  </select>
            </div>
        </div>
        




        
<div className = "row m-b-20">
    <div className = "col-md-6">
        <h6>Form Date</h6>
        <input type="text" className = "form-control datepicker" placeholder="Form"/>
    </div>
    <div className = "col-md-6">
            <h6>To Date</h6>
        <input type="text" className = "form-control datepicker" placeholder="To"/></div>
</div>


<div className = "row m-b-20">
    <div className = "col-md-6">
            <h6>By Severity</h6>
            <div className = "row">
                    <div className = "col-md-6 checkbox">
                        <label className = "label">
                            <input type="checkbox" id="commited" name="severities"/>
                            <span className = "checkmark"></span>
                        </label>
                        <label for="commited">Critical</label>
                    </div>
                    </div>
                    <div className = "row">
                    <div className = "col-md-12 checkbox">
                        <label className = "label">
                            <input type="checkbox" id="hiegh" name="severities"/>
                            <span className = "checkmark"></span>
                        </label>
                        <label for="hiegh">High</label>
                    </div>
                </div>


                <div className = "row">
                        <div className = "col-md-12 checkbox">
                            <label className = "label">
                                <input type="checkbox" id="se-completd" name="severities"/>
                                <span className = "checkmark"></span>
                            </label>
                            <label for="se-completd">Medium</label>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-md-12 checkbox">
                            <label className = "label">
                                <input type="checkbox" id="low" name="severities"/>
                                <span className = "checkmark"></span>
                            </label>
                            <label for="low">Low</label>
                        </div>
                    </div>
                    <div className = "row">
                            <div className = "col-md-12 checkbox">
                                <label className = "label">
                                    <input type="checkbox" id="se-info" name="severities"/>
                                    <span className = "checkmark"></span>
                                </label>
                                <label for="se-info">Info</label>
                            </div>
                            
                        </div>


    </div>
    <div className = "col-md-6">

            <h6>By State</h6>
            <div className = "row">
                <div className = "col-md-12 checkbox">
                    <label className = "label">
                        <input type="checkbox" id="new" name="state"/>
                        <span className = "checkmark"></span>
                    </label>
                    <label for="new">New</label>
                </div>
            </div>
            <div className = "row">
                <div className = "col-md-12 checkbox">
                    <label className = "label">
                        <input type="checkbox" id="s-active" name="state"/>
                        <span className = "checkmark"></span>
                    </label>
                    <label for="s-active">Active</label>
                </div>
            </div>
            <div className = "row">
                <div className = "col-md-12 checkbox">
                    <label className = "label">
                        <input type="checkbox" id="completd" name="state"/>
                        <span className = "checkmark"></span>
                    </label>
                    <label for="completd">Commited</label>
                </div>
            </div>
            <div className = "row">
                <div className = "col-md-12 checkbox">
                    <label className = "label">
                        <input type="checkbox" id="resolved" name="state"/>
                        <span className = "checkmark"></span>
                    </label>
                    <label for="resolved">Resolved</label>
                </div>
            </div>
            <div className = "row">
                    <div className = "col-md-12 checkbox">
                        <label className = "label">
                            <input type="checkbox" id="Duplicate" name="state"/>
                            <span className = "checkmark"></span>
                        </label>
                        <label for="Duplicate">Duplicate</label>
                    </div>
                </div>
                <div className = "row">
                        <div className = "col-md-12 checkbox">
                            <label className = "label">
                                <input type="checkbox" id="Not-Applicable" name="state"/>
                                <span className = "checkmark"></span>
                            </label>
                            <label for="Not-Applicable">Not Applicable</label>
                        </div>
                    </div>

    </div>
</div>

        
<h6>Assigned To</h6>
<input type="text" value="" placeholder="Assigned To" className = "form-control m-b-10"/>
<ul className = "assgin-search-list">

        <li>
            <a href="#">
                <img src="/src/images/au-1.png"/>
                <h4>
                    Jason Bishop

                </h4>
            </a>
            <a href="#">x</a>
        </li>
        <li>
            <a href="#">
                <img src="/src/images/au-1.png"/>
                <h4>
                    Jason Bishop

                </h4>
            </a>
            <a href="#">x</a>
        </li>
    </ul>

    




<h6 className = "m-t-20">Tag</h6>

<input type="text" value="tag," data-role="tagsinput" className = "form-control"/>
<div className = "row m-b-20 m-t-20">
        <div className = "col-md-12">
                <h6>Report By</h6>
              
                <label className = "report-label-box">
                        <img src="/src/images/icon-1.png" className = "img-22"/>
                        <h4>admin@admin.com</h4>
                        <div className = "checkbox">
                                <label className = "label">
                                    <input type="checkbox" name="state"/>
                                    <span className = "checkmark"></span>
                                </label>
                            </div>
                    </label>
                    <label className = "report-label-box">
                            <img src="/src/images/icon-1.png" className = "img-22"/>
                            <h4>admin@admin.com</h4>
                            <div className = "checkbox">
                                    <label className = "label">
                                        <input type="checkbox" name="state"/>
                                        <span className = "checkmark"></span>
                                    </label>
                                </div>
                        </label>
        </div>
    </div>
                    </div>
                    </div>
    
                    <div className = "modal-footer">
                        <button type="button" className = "btn btn-primary" data-dismiss="modal">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>




        <div className = "modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className = "modal-dialog" role="document">
            <div className = "modal-content team-modal" style={{paddingTop:"0"}}>
                <div className = "modal-header">
                    <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className = "modal-title" id="myModalLabel">Connectors</h4>
                </div>
                <div className = "modal-body ">
                        

<div className = "connecter-popup-section">

    
<h1>Sampale Text</h1>
<h2>Sampale Text</h2>
<h3>Sampale Text</h3>
<h4>Sampale Text</h4>
<h5>Sampale Text</h5>
<h6>Sampale Text</h6>


<input type="text" className = "form-control m-t-12"/>
    <h4 className = "m-t-12">Check Box</h4>
    <div className = "row m-t-12">
            <div className = "col-md-4 checkbox">
                <label className = "label">
                    <input type="checkbox" id="commited" name="severities"/>
                    <span className = "checkmark"></span>
                </label>
                <label for="commited">Critical</label>
            </div>
            
            <div className = "col-md-4 checkbox">
                <label className = "label">
                    <input type="checkbox" id="hiegh" name="severities"/>
                    <span className = "checkmark"></span>
                </label>
                <label for="hiegh">High</label>
            </div>
        
                <div className = "col-md-4 checkbox">
                    <label className = "label">
                        <input type="checkbox" id="se-completd" name="severities"/>
                        <span className = "checkmark"></span>
                    </label>
                    <label for="se-completd">Medium</label>
                </div>
            </div>
            <div className = "row">
                <div className = "col-md-4 checkbox">
                    <label className = "label">
                        <input type="checkbox" id="low" name="severities"/>
                        <span className = "checkmark"></span>
                    </label>
                    <label for="low">Low</label>
                </div>
            
                    <div className = "col-md-4 checkbox">
                        <label className = "label">
                            <input type="checkbox" id="se-info" name="severities"/>
                            <span className = "checkmark"></span>
                        </label>
                        <label for="se-info">Info</label>
                    </div>
                    
                </div>
<div className = "row m-t-12">
    <div className = "col-md-4">
        <div className = "radio-section radio-btn-text">
            <label className = "label">
                <input type="radio" id="" name="severities"/>
                <span className = "radio-mark"></span> Radio1
            </label>
        </div>
    </div>
    <div className = "col-md-4">
        <div className = "radio-section radio-btn-text">
            <label className = "label">
                <input type="radio" id="" name="severities"/>
                <span className = "radio-mark"></span> Radio2
            </label>
        </div>
    </div>
    <div className = "col-md-4">
        <div className = "radio-section radio-btn-text">
            <label className = "label">
                <input type="radio" id="" name="severities"/>
                <span className = "radio-mark"></span> Radio3
            </label>
        </div>
    </div>
</div>
<select className = "form-control m-t-12">
    <option>Abcd</option>
    <option>Abcd</option>
    <option>Abcd</option>
    <option>Abcd</option>
</select>
<p className = "m-t-12">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<a href="#">Link</a>

<button type="button" className = "btn btn-primary btn-rounded">Button 1</button>
                    <button type="button" className = "btn btn-primary btn-rounded">Button 2</button>
                    <button type="button" className = "btn btn-primary btn-rounded">Button 3</button>
                    <button type="button" className = "btn btn-primary btn-rounded">Button 4</button>
                </div>
                </div>

                <div className = "modal-footer">
                    <button type="button" className = "btn btn-primary" data-dismiss="modal">Submit</button>
                </div>
                
            </div>
        </div>
    </div>

       
            </div>
            )
    }
}