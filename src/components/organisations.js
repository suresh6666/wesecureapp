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

export default class Organisations extends Component {
	constructor(props) {
    super(props);
       this.state = {
	      isOpen1: false,
        data:[],
	    };
	}
    render(){
        return(
            <div className="team-page">
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


    <section className = "main-section p-25">

        <div className = "row">
            <div className = "col-md-8">
                <h1 className = "heading m-b-30">
                    Teams
                </h1>
            </div>
            <div className = "col-md-4 text-right">
                <a href="#" className = "btn btn-primary btn-rounded"  data-toggle="modal" data-target="#addteam">Add
                    <span className = "btn-icon">
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
                    </span>
                </a>
            </div>
        </div>


        <div className = "team-section">
            <div className = "team-list cursor-pointer" data-toggle="modal" data-target="#team">
                <img src="/src/images/avtar.png" className = "team-img"/>
                <div className = "col-md-4">

                    <h5>Asset Team
                        <small>Created 25 days ago</small>
                    </h5>
                </div>
                <div className = "col-md-4 text-center">

                    <div className = "actions-section">
                        <div className = "assignee-section">
                            <div className = "img-blck">
                                <img src="/src/images/pic-1.png" data-toggle="tooltip" data-placement="top" title="User 1"/>
                            </div>
                            <div className = "img-blck">
                                <img src="/src/images/pic-2.png" data-toggle="tooltip" data-placement="top" title="User 2"/>
                            </div>

                            <a href="#" className = "btn-plus">
                                <span data-toggle="tooltip" data-placement="top" title="Add Assignee">7</span>
                            </a>
                        </div>
                    </div>

                </div>
                <div className = "col-md-3">
                    <a href="#" className = "btn btn-outline btn-rounded">Invite</a>



                </div>
                <div className = "col-md-1 btn-mer text-right">

                    <a href="#" className = "dt-menu" id="crt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="14px"
                            height="14px">
                            <g>
                                <g>
                                    <g>
                                        <circle cx="256" cy="256" r="64" fill="#005ffe" />
                                        <circle cx="256" cy="448" r="64" fill="#005ffe" />
                                        <circle cx="256" cy="64" r="64" fill="#005ffe" />
                                    </g>
                                </g>
                            </g>
                        </svg>

                    </a>
                    <ul className = "dropdown-menu p-0" aria-labelledby="crt">
                        <li>
                            <a href="#">Edit Team</a>
                        </li>
                        <li>
                            <a href="#">Delete Team</a>
                        </li>


                    </ul>

                </div>
            </div>



            <div className = "team-list cursor-pointer" data-toggle="modal" data-target="#team">
                <img src="/src/images/avtar.png" className = "team-img"/>
                <div className = "col-md-4">

                    <h5>WeSecureApp
                        <small>Created 25 days ago</small>
                    </h5>
                </div>
                <div className = "col-md-4 text-center">

                    <div className = "actions-section">
                        <div className = "assignee-section">
                            <div className = "img-blck">
                                <img src="/src/images/pic-1.png" data-toggle="tooltip" data-placement="top" title="User 1"/>
                            </div>
                            <div className = "img-blck">
                                <img src="/src/images/pic-2.png" data-toggle="tooltip" data-placement="top" title="User 2"/>
                            </div>

                            <a href="#" className = "btn-plus">
                                <span data-toggle="tooltip" data-placement="top" title="Add Assignee">7</span>
                            </a>
                        </div>
                    </div>

                </div>
                <div className = "col-md-3">
                    <a href="#" className = "btn btn-outline btn-rounded">Invite</a>



                </div>
                <div className = "col-md-1 btn-mer text-right">

                    <a href="#" className = "dt-menu" id="crt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"  width="14px"
                            height="14px">
                            <g>
                                <g>
                                    <g>
                                        <circle cx="256" cy="256" r="64" fill="#005ffe" />
                                        <circle cx="256" cy="448" r="64" fill="#005ffe" />
                                        <circle cx="256" cy="64" r="64" fill="#005ffe" />
                                    </g>
                                </g>
                            </g>
                        </svg>

                    </a>
                    <ul className = "dropdown-menu p-0" aria-labelledby="crt">
                        <li>
                            <a href="#">Edit Team</a>
                        </li>
                        <li>
                            <a href="#">Delete Team</a>
                        </li>


                    </ul>

                </div>
            </div>





            <div className = "team-list cursor-pointer" data-toggle="modal" data-target="#team">
                <img src="/src/images/avtar.png" className = "team-img"/>
                <div className = "col-md-4">

                    <h5>Offensive Security
                        <small>Created 25 days ago</small>
                    </h5>
                </div>
                <div className = "col-md-4 text-center">

                    <div className = "actions-section">
                        <div className = "assignee-section">
                            <div className = "img-blck">
                                <img src="/src/images/pic-1.png" data-toggle="tooltip" data-placement="top" title="User 1"/>
                            </div>
                            <div className = "img-blck">
                                <img src="/src/images/pic-2.png" data-toggle="tooltip" data-placement="top" title="User 2"/>
                            </div>

                            <a href="#" className = "btn-plus">
                                <span data-toggle="tooltip" data-placement="top" title="Add Assignee">7</span>
                            </a>
                        </div>
                    </div>

                </div>
                <div className = "col-md-3">


                </div>
                <div className = "col-md-1 btn-mer text-right">

                    <a href="#" className = "dt-menu" id="crt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"  width="14px"
                            height="14px">
                            <g>
                                <g>
                                    <g>
                                        <circle cx="256" cy="256" r="64" fill="#005ffe" />
                                        <circle cx="256" cy="448" r="64" fill="#005ffe" />
                                        <circle cx="256" cy="64" r="64" fill="#005ffe" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <ul className = "dropdown-menu p-0" aria-labelledby="crt">
                        <li>
                            <a href="#">Edit Team</a>
                        </li>
                        <li>
                            <a href="#">Delete Team</a>
                        </li>


                    </ul>

                </div>
            </div>


        </div>

    </section>



    <div className = "modal fade" id="team" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className = "modal-dialog modal-lg" role="document">
            <div className = "modal-content team-modal">
                <div className = "modal-header">
                    <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className = "team-info">
                        <img src="/src/images/goibibo-logo.png"/>
                        <h1>Goibibo
                            <small>Created by Akhil Reni 25 days ago</small>
                        </h1>
                    </div>
                </div>
                <div className = "modal-body ">



                   {/* <!-- Nav tabs -->*/}
                    <ul className = "nav nav-tabs nav-justified" role="tablist">
                        <li role="presentation" className = "active">
                            <a href="#members" aria-controls="members" role="tab" data-toggle="tab">Members <span className = "badge">4</span></a>
                        </li>
                        <li role="presentation">
                            <a href="#invite" aria-controls="invite" role="tab" data-toggle="tab">Invite</a>
                        </li>
                    </ul>

                   {/* <!-- Tab panes -->*/}
                    <div className = "tab-content">
                        <div role="tabpanel" className = "tab-pane active" id="members">

                            

                            <div className = "grids-group-popup">
                                


                                    <div className = "row">

                                            
                                    
                                        <div className = "col-md-12">
                                                <div className = "add-textbox">
                                                        <input type="text" value="" placeholder="Search" className = "form-control"/>
                                    
                                                        <a href="#">
                                    
                                    
                                                            
                                    
                                    
                                    
                                                            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="12px" height="12px">
                                                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" fill="#005ffe"></path>
                                                                    </svg>
                                                        </a>
                                    
                                                    </div>
                                    
                                        </div>
                                        
                                    </div>



                                    <div className = "row m-t-30">
                                            <div className = "col-md-11">
                                                <h1 className = "heading-2">All Asset Members</h1>
                                            </div>
                                        <div className = "col-md-1">
                                                <span className = "sort-text">
                                                        <a href="#" id="sort" className = "grid-click">
                                                                <i className = "fa fa-th" aria-hidden="true"></i>
                                                                <i className = "fa fa-th-list" aria-hidden="true"></i>
                                                        </a>
                                                        
                                                    </span>
                                        </div>
                                    </div>



                                    <ul className = "grids-list grids-popup-list">
                                            <li><div className = "label-box">
                                                <img src="/src/images/icon-1.png" className = "img-22"/>
                                                <h2>
                                                        Goibibo.com
                                                        <small>Created by Akhil  |   9 hr ago</small>
                                                </h2>
                                                <a href="#" className = "grid-close" data-toggle="tooltip" data-placement="top" title="Remove">
                                                        <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 174.239 174.239" width="15px" height="15px">
                                                                <g>
                                                                    <path d="M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z" fill="#727c83"></path>
                                                                    <path d="M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0   s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188   c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188   c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z" fill="#727c83"></path>
                                                                </g>
                
                                                            </svg>
                                                </a>  
                                            <select className = "form-control grid-change-select">
                                                <option>Member</option>
                                                <option>Admin</option>
                                            </select>
                                            
                                        </div>
                                        
                                               
                                            </li>
                                            <li><div className = "label-box">
                                                    <img src="/src/images/icon-1.png" className = "img-22"/>
                                                    <h2>
                                                            Goibibo.com
                                                            <small>Created by Akhil  |   9 hr ago</small>
                                                    </h2>
                                                    <a href="#" className = "grid-close" data-toggle="tooltip" data-placement="top" title="Remove">
                                                            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 174.239 174.239" width="15px" height="15px">
                                                                    <g>
                                                                        <path d="M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z" fill="#727c83"></path>
                                                                        <path d="M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0   s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188   c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188   c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z" fill="#727c83"></path>
                                                                    </g>
                    
                                                                </svg>
                                                    </a>  
                                                <select className = "form-control grid-change-select">
                                                    <option>Member</option>
                                                    <option>Admin</option>
                                                </select>
                                                
                                            </div>
                                            
                                                   
                                                </li>
                                                <li><div className = "label-box">
                                                        <img src="/src/images/icon-1.png" className = "img-22"/>
                                                        <h2>
                                                                Goibibo.com
                                                                <small>Created by Akhil  |   9 hr ago</small>
                                                        </h2>
                                                        <a href="#" className = "grid-close" data-toggle="tooltip" data-placement="top" title="Remove">
                                                                <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 174.239 174.239" width="15px" height="15px">
                                                                        <g>
                                                                            <path d="M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z" fill="#727c83"></path>
                                                                            <path d="M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0   s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188   c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188   c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z" fill="#727c83"></path>
                                                                        </g>
                        
                                                                    </svg>
                                                        </a>  
                                                    <select className = "form-control grid-change-select">
                                                        <option>Member</option>
                                                        <option>Admin</option>
                                                    </select>
                                                    
                                                </div>
                                                
                                                       
                                                    </li>
                                                    
                                            
                                            
                                        </ul>



                            </div>





                            
                        </div>



                        <div role="tabpanel" className = "tab-pane" id="invite">









                                <div className = "grids-group-popup invite-form">
                                
                                        
    
                                                
                                        
                                                
                                                    
                                            

                                        <div className = "row ">
                                                <div className = "col-md-2 form-inline" style={{paddingRight:"0"}}>
                                                        <div className = "form-group">
                                                                <h1 className = "heading-2">Select Role</h1>
                                                                
                                                    </div>
                                                
                                        </div>
                                            <div className = "col-md-10" style={{paddingLeft:"0"}}>
                                                    <div className = "add-textbox">
                                                            <select className = "form-control select-role">
                                                                    <option>Select</option>
                                                                    <option>Admin</option>
                                                                    <option>Member</option>
                                                                </select>
                                                          
                                                            <input type="text" value="" placeholder="Search for organization members or invite by email" className = "form-control asset-invite-searchbox"/>
                                        
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
                                       
                                        </div>
                                        <div className = "row">
                                        <div className = "col-md-10 col-md-offset-2" style={{paddingLeft:"0"}}>
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
                                        </div>
    </div>
    
                                        <div className = "row m-t-30">
                                                <div className = "col-md-11">
                                                    <h1 className = "heading-2">Select Invite</h1>
                                                </div>
                                            <div className = "col-md-1">
                                                    <span className = "sort-text">
                                                            <a href="#" id="sort" className = "grid-click">
                                                                    <i className = "fa fa-th" aria-hidden="true"></i>
                                                                    <i className = "fa fa-th-list" aria-hidden="true"></i>
                                                            </a>
                                                            
                                                        </span>
                                            </div>
                                        </div>
    
    
    
                                        <ul className = "grids-list grids-popup-list">
                                                <li><label className = "label-box" for="ab">
                                                    <img src="/src/images/icon-1.png" className = "img-22"/>
                                                    <h4>admin@admin.com</h4>
                                                
                                                </label>
                                                    <div className = "checkbox">
                                                            <label className = "label">
                                                                    <input type="checkbox" id="ab" name="severities"/>
                                                                    <span className = "checkmark"></span>
                                                                </label>
                                                    </div>
                                                </li>

                                                <li><label className = "label-box" for="abc">
                                                        <img src="/src/images/icon-1.png" className = "img-22"/>
                                                        <h4>admin@admin.com</h4>
                                                    
                                                    
                                                    
                                                    </label>
                                                        <div className = "checkbox">
                                                                <label className = "label">
                                                                        <input type="checkbox" id="abc" name="severities"/>
                                                                        <span className = "checkmark"></span>
                                                                    </label>
                                                        </div>
                                                    </li>
                                                    <li><label className = "label-box" for="c">
                                                            <img src="/src/images/icon-1.png" className = "img-22"/>
                                                            <h4>admin@admin.com</h4>
                                                        </label>
                                                            <div className = "checkbox">
                                                                    <label className = "label">
                                                                            <input type="checkbox" id="c" name="severities"/>
                                                                            <span className = "checkmark"></span>
                                                                        </label>
                                                            </div>
                                                        </li>

                                                        <li><label className = "label-box" for="d">
                                                                <img src="/src/images/icon-1.png" className = "img-22"/>
                                                                <h4>admin@admin.com</h4>
                                                            
                                                            </label>
                                                                <div className = "checkbox">
                                                                        <label className = "label">
                                                                                <input type="checkbox" id="d" name="severities"/>
                                                                                <span className = "checkmark"></span>
                                                                            </label>
                                                                </div>
                                                            </li>
                                                
                                            </ul>
    
    
    
                                </div>




                                <div className = "modal-footer">
                                        <button type="button" className = "btn btn-primary" data-dismiss="modal">Submit</button>
                                    </div>


                            

                        </div>






                    </div>







                </div>

            </div>
        </div>
    </div>

     {/*Add Team Modal Start -->*/}
    <div className = "modal fade" id="addteam" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className = "modal-dialog" role="document">
                <div className = "modal-content">
                    <div className = "modal-header">
                        <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className = "modal-title" id="myModalLabel">Add Team</h4>
                    </div>
                    <div className = "modal-body">
                        <div className = "asgin-textbox-section" style={{paddingTop:"25px",paddingBottom:"25px"}}>



<div className = "row">
    <div className = "col-md-12 text-center">
        <figure className = "add-team-profile">
                <img src="/src/images/avtar.png" className = "team-img"/>
                <figcaption>
                        <svg id="Capa_1" x="0px" y="0px"
                        width="12px" height="12px" viewBox="0 0 528.899 528.899">
                   <g>
                       <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
                           c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
                           C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                           L27.473,390.597L0.3,512.69z"/>
                   </g>
                   
                   </svg>
                    <input type="file"/>
                    
                </figcaption>
        </figure>
            
    </div>
</div>



                                <input type="text" value="" placeholder="Team Name" className = "form-control m-b-20"/>

                            <div className = "add-textbox">
                                <input type="text" value="" placeholder="Invite Users" className = "form-control"/>
    
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
    
                        </div>
    
                        <div className = "asgin-list-section">
                            <ul className = "assgin-users-list">
                                <li>
                                    <img src="/src/images/au-1.png"/>
                                    <h4>
                                        Jason Bishop
                                        <small>9 hr ago</small>
                                    </h4>
                                    <a href="#">
    
                                            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 174.239 174.239" width="15px" height="15px">
                                                    <g>
                                                        <path d="M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z" fill="#727c83"></path>
                                                        <path d="M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0   s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188   c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188   c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z" fill="#727c83"></path>
                                                    </g>
    
                                                </svg>
                                    </a>
                                </li>
                                <li>
                                    <img src="/src/images/au-2.png"/>
                                    <h4>
                                        Jason Bishop
                                        <small>9 hr ago</small>
                                    </h4>
                                    <a href="#">
                                            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 174.239 174.239" width="15px" height="15px">
                                                    <g>
                                                        <path d="M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z" fill="#727c83"></path>
                                                        <path d="M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0   s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188   c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188   c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z" fill="#727c83"></path>
                                                    </g>
    
                                                </svg>
                                    </a>
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
        {/*<!-- Add Team Modal End -->*/}


            </div>
        )
    }
}
