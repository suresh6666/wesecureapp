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

export default class App extends Component {
	constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.successData = this.successData.bind(this);
    this.errorData = this.errorData.bind(this);
    this.renderList = this.renderList.bind(this);
       this.state = {
	      isOpen1: false,
        data:[],
	    };
	}
	toggle() {
    this.setState({
      isOpen1: !this.state.isOpen1,
     
    });
  }
  successData(data){
  	this.setState({
      data:data.data
    })
  }
  errorData(error){
    console.log(error.message);
  }
  renderList(data){
    let list = [];
    for(let [key,value] of Object.entries(data)){
      list.push(
                <div className = "filter-list assetclick">
        <div className = "row">
          <div className = "col-md-12">
            <label className = "label">
              <input type="checkbox" name="filter"/>
              <span className = "checkmark"></span> </label>
            <span className = "icon">G</span> <span className = "title">{value.name} <small>Created by Akhil Reni 25 days ago</small></span> </div>
        </div>
      </div>
        )
    }
    return list;
  }
  componentDidMount(){
  	fetchData(this.successData,this.errorData);
  }

  render() {
    return (
      <div>

            <header>
        <div className = "container-fluid">
          <div className = "row">
            <div className = "col-sm-5 col-xs-4">
              <div className = "pull-left">
                <button type="button" className = "button-menu btm-menu waves-effect waves-light" style = {{height:"60px"}}>  
                	 <FontAwesome
                              style = {{color:"white"}}
                              name = "bars"     
                    />
                </button>
                <span className = "clearfix"></span> </div>
              <div className = "pull-left">
             <span style ={{marginLeft:"10px",fontSize:"16px",alignItems:"center"}}> <i className="fas fa-search"></i></span>

               <span> <input type="text" className = "serach-text" placeholder="Search"/></span>
                <div className = "search-box hidden">
                  <ul>
                    <li>
                      <div className = "row">
                        <div className = "col-md-10"><span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span> </div>
                        <div className = "col-md-2 text-right"><span className = "count">05</span></div>
                      </div>
                    </li>
                    <li>
                      <div className = "row">
                        <div className = "col-md-10"><span className = "icon">H</span> <span className = "title">wesecureapp <small>Created by Akhil Reni 2 months ago</small></span> </div>
                        <div className = "col-md-2 text-right"><span className = "count">04</span></div>
                      </div>
                    </li>
                    <li>
                      <div className = "row">
                        <div className = "col-md-10"><span className = "icon">L</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span> </div>
                        <div className = "col-md-2 text-right"><span className = "count">04</span></div>
                      </div>
                    </li>
                    <li className = "viewall-btn"> <a href="#">View All</a> </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className = "col-sm-2 col-xs-3 text-center"> <a className = "logo">TEYA</a> </div>

            <div className = "col-sm-5 col-xs-5">
              <ul className = "header-right">

                <li className = "user-dropdown"> <a href="profile.html"><img src="images/avatar.png"/><span className = "user-name">Welcome Goutham</span> </a> </li>

                <li> 
                <a href="#" className = "notification-btn" style = {{fontSize:"16px"}}> <i className="fas fa-bell"></i> </a>

                  <div className = "notifications-box">
                      <h2> Notifications <a href="#" className = "ntf-close">  </a> </h2>

                        <div className = "scrollbar2">
                      <ul>

                        <li>
                          <div className = "row">
                            <div className = "col-md-12"><img src="images/avatar2.png" className = "img-circle"/> <span className = "title">Goibibo.com <small>Raised by Akhil assigned to Satya &nbsp; | &nbsp; 2days ago</small></span> </div>
                          </div>
                        </li>

                        <li>
                          <div className = "row">
                            <div className = "col-md-12"><img src="images/avatar3.png" className = "img-circle"/> <span className = "title">HTTP Only cookie group section Group <small>Raised by Akhil assigned to Satya &nbsp; | &nbsp; 2days ago</small></span> </div>
                          </div>
                        </li>

                        <li>
                          <div className = "row">
                            <div className = "col-md-12"><img src="images/avatar4.png" className = "img-circle"/> <span className = "title">Cross site scripting <small>Bug Resolved by Akhil &nbsp; | &nbsp; 3days ago</small></span> </div>
                          </div>
                        </li>
                        
                      </ul>
                    </div>
                    </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </header>


            <nav className="sidebar">
          <ul>
            <li><a href="#" className="active" data-toggle="tooltip" data-placement="right" title="Dashboard"> work </a> </li>
            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Assets">work1 </a></li>
            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Settings"> work2 </a></li>
            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Help"> work3 </a></li>
            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Logout"> work4 </a></li>
            <li className="hidden"><a href="#"> work5 </a></li>
          </ul>
        </nav>
      



      <section className = "main-warp scrollbar">
        <div className = "row">
        <div className = "assets-section">
            <div className = "assets-fixed"></div>
      <div className = "assets-header">
        <h2 className = "title  pull-left">Asset</h2>
        
        <a href="#" className = "btn btn-default b-radius-100 btn-shadow pull-right m-l-5" data-toggle="modal" data-target="#myModal"><span style={{marginRight:"25px"}}>Create Group</span> <span className = "btn-icon">  </span></a>
        
        <a href="create-asset.html" className = "btn btn-default b-radius-100 btn-shadow pull-right"><span style={{marginRight:"25px"}}>Create</span> <span className = "btn-icon">  </span></a> </div>
      <div className = "clearfix"></div>
      <div className = "scrollbar">










          














        
      <div className = "filter-list-header">
            <div className = "row">
              <div className = "col-md-12">
                  <span className = "sm-title">Filter</span>
                  <select name="">
                      <option>All</option>
                      <option>High Severity</option>
                      <option>Low Severity</option>
                  </select>




                  <div className = "dropdown">
                      <button className = "btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        All
                        <span className = "caret"></span>
                      </button>
                      <ul className = "dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li className = "active"><a href="#">All</a></li>
                        <li><a href="#">High Severity</a></li>
                        <li><a href="#">Low Severity</a></li>
                      </ul>
                    </div>




              </div>
            </div>
          </div>
      
      





          <div className = "panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              
              <div className = "panel panel-default">
                <div className = "panel-heading" role="tab" id="headingOne">
                  <h4 className = "panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                   
                    <div className = "filter-list">
                      <span className = "flter-edit-icon"></span>
                      <a>
                        <div className = "row">
                          <div className = "col-md-12"> <span className = "floder-icon assetclick">H</span> <span className = "title text-pink assetclick">High Severity <small>4 Assets (wesecure, admin, goibibo)</small></span> </div>
                        </div></a>
                      </div>
                  </h4>
                </div>
                <div id="collapseOne" className = "panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                  <div className = "panel-body">
                    
                    
                      <div className = "filter-list fillter-textbox">
                          <div className = "row">
                            <div className = "col-md-12">
                              <div className = "tag-textbox"><input type="text" value="" placeholder="Add Asset" className = "form-control"/>
                                
                                  <a href="#"> </a>
                                
                                </div>
                            </div>
                    </div></div>
                    
                    
                    
                    <div className = "filter-list">
                        <div className = "row">
                          <div className = "col-md-12">
                            
                            <span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span> 
                            <a href="#" className = "close">  </a>
                          </div>
                        </div>
                      </div>
                      <div className = "filter-list">
                        <div className = "row">
                          <div className = "col-md-12">
                            
                            <span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span>
                            <a href="#" className = "close"> </a>
                          </div>
                        </div>
                      </div>
                      <div className = "filter-list">
                          <div className = "row">
                            <div className = "col-md-12">
                              
                              <span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span>
                              <a href="#" className = "close">  </a>
                            </div>
                          </div>
                        </div>
                        <div className = "filter-list">
                            <div className = "row">
                              <div className = "col-md-12">
                                
                                <span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span>
                                <a href="#" className = "close">  </a>
                              </div>
                            </div>
                          </div>
                      
                  </div>
                </div>
              </div>
              <div className = "panel panel-default">
                <div className = "panel-heading" role="tab" id="headingTwo">
                  <h4 className = "panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className = "filter-list">
                                <div className = "row">
                                        <div className = "col-md-12"> <span className = "floder-icon">L</span> <span className = "title text-blue">Low Severity <small>18 Assets (wesecure, admin, goibibo)</small></span> </div>
                                      </div>
                              </div>
                  </h4>
                </div>
                <div id="collapseTwo" className = "panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className = "panel-body">
                      <div className = "filter-list">
                          <div className = "row">
                            <div className = "col-md-12">
                              
                              <span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span>
                              <a href="#" className = "close"> </a>
                            </div>
                          </div>
                        </div>
                        <div className = "filter-list">
                            <div className = "row">
                              <div className = "col-md-12">
                                
                                <span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span>
                                <a href="#" className = "close">  </a>
                              </div>
                            </div>
                          </div>
                          <div className = "filter-list">
                              <div className = "row">
                                <div className = "col-md-12">
                                  
                                  <span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span>
                                  <a href="#" className = "close">  </a>
                                </div>
                              </div>
                            </div>
                            <div className = "filter-list">
                                <div className = "row">
                                  <div className = "col-md-12">
                                    
                                    <span className = "icon">G</span> <span className = "title">Goibibo.com <small>Created by Akhil Reni 25 days ago</small></span> 
                                    <a href="#" className = "close">  </a>
                                  
                                  </div>

                                </div>
                              </div>
                  </div>
                </div>
              </div>
            </div>

          {this.renderList(this.state.data)}     
      </div>
    </div>
    <div className = "backbtn-section visible-xs">
        <a href="javascript:void(0)" className = "assetclick">Back</a>
        
      </div>
    <div className = "dashboard-warp scrollbar">
        
      <div className = "row m-t-10">
        <div className = "col-md-12 p-0">
          <div className = "box-panel b-b-1">
            <div className = "row">
                <div className = "col-md-7 col-sm-6"><h2 className = "box-title p-0">Security health index</h2></div>
                <div className = "col-md-5 col-sm-6 text-right"><input type="text" className = "datepicker form-control" placeholder="To"/>
                  <input type="text" className = "datepicker form-control" placeholder="From"/>
                </div></div>
            <img src="../images/graph1.png" className = "img-responsive"/> </div>
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-6 p-0">
          <div className = "box-panel b-b-1 b-r-1 text-center">
            <div className = "row">
                <div className = "col-md-10">
                    <h2 className = "box-title p-0">Bugs type</h2>
                </div>
                <div className = "col-md-2 text-right">
                                      </div>
            </div>
            <img src="/graph2.png" /> </div>
        </div>
        <div className = "col-md-6 p-0">
          <div className = "box-panel b-b-1 text-center">
            <h2 className = "box-title p-0">Technology wise Vulnerabilites</h2>
            <img src="../images/graph3.png"/> </div>
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-12 p-0">
          <div className = "box-panel b-b-1">
            <h2 className = "box-title p-0">Severity vs Resolved</h2>
            <img src="images/graph4.png" className = "img-responsive inline-block"/>
          
          <div className = "severity-section">

            <div className = "severity-list">
                <span className = "count text-default">
                  85%
                </span>
                <span className = "severity-contsection">
                  <span className = "title">Risk <small>Can be reduced by resolving top findings</small></span>
                </span>
            </div>


            <div className = "severity-list">
              <span className = "count text-info">
                12
              </span>
              <span className = "severity-contsection">
                <span className = "title">Bugs <small>Can be reduced by resolving top findings</small></span>
              </span>
          </div>



          <div className = "severity-list">
            <span className = "count text-waring">
              N/A
            </span>
            <span className = "severity-contsection">
              <span className = "title">Average <small>Can be reduced by resolving top findings</small></span>
            </span>
        </div>

          </div>
          
          
          
          
          
          
          
          
          
          </div>
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-12 p-0">
          <div className = "box-panel b-b-1">
            <h2 className = "box-title p-0">Bugs with respect to</h2>


            

            <img src="images/graph5.png" className = "img-responsive"/> </div>
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-6 col-lg-6 p-0">
          <div className = "box-panel b-r-1 b-b-tab-p-1">
            <h2 className = "box-title p-0">Bugs with redpect to severity</h2>
            <div className = "bugs-cloums-section">
                <div className = "bugs-cloums b-r-1 b-b-1">
                  <h2>06 <small>New</small></h2>
                </div> 
                <div className = "bugs-cloums b-r-1 b-b-1">
                  <h2>24 <small>Committed</small></h2>
                </div> 
                <div className = "bugs-cloums b-b-1">
                  <h2>54 <small>Resolved</small></h2>
                </div> 
                <div className = "bugs-cloums b-r-1">
                  <h2>31 <small>Active</small></h2>
                </div> 
                <div className = "bugs-cloums b-r-1">
                  <h2>08 <small>Duplicate</small></h2>
                </div> 
                <div className = "bugs-cloums">
                  <h2>19 <small>Not Appilcable</small></h2>
                </div>
              </div>
          </div>
        </div>
        <div className = "col-md-6 p-0">
          <div className = "box-panel">
            <h2 className = "box-title p-0">Bugs with respect to states</h2>
            <div className = "bugs-cloums-section">
                <div className = "bugs-cloums b-r-1 b-b-1">
                  <h2>06 <small>New</small></h2>
                </div>
                <div className = "bugs-cloums b-r-1 b-b-1">
                  <h2>24 <small>Committed</small></h2>
                </div> 
                <div className = "bugs-cloums b-b-1">
                  <h2>54 <small>Resolved</small></h2>
                </div> 
                <div className = "bugs-cloums b-r-1">
                  <h2>31 <small>Active</small></h2>
                </div>
                <div className = "bugs-cloums b-r-1">
                  <h2>08 <small>Duplicate</small></h2>
                </div> 
                <div className = "bugs-cloums">
                  <h2>19 <small>Not Appilcable</small></h2>
                </div>
              </div>
          </div>
        </div>
      </div>
  </div></div>
</section>


      </div>
    );
  }
}
