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

export default class Create_Assest extends Component {
    constructor(props) {
        super(props);
           this.state = {
            isOpen1: false,
            data:[],
          };
    }

    render(){
        return(
            <div className="assets-page">
                <header>
        <div className = "row">
            <div className = "col-md-1 logo">
                <a href="#">strobes</a>
            </div>
            <div className = "col-md-10 search-box">
                <input type="text" className = "form-control" placeholder="Search for Assets, Bugs, Assignees etc."/>
            </div>
            <div className = "col-md-1 p-0 user-prof dropdown">
                <a href="#" className = "user-link dropdown-toggle" id="userprofile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
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
           <section className = "main-section asset-menu-show">

        <div className = "left-side">

            <div className = "bug-list-section">
                <div className = "bug-list-header">
                    <div className = "row asset-small-none">
                        <div className = "col-md-6"><h1 className = "heading m-b-30">All Assets</h1></div>
                        <div className = "col-md-6 text-right">
<a href="#" className = "asset-menu" style={{marginTop:"0px"}}>
<svg width="20px" height="20px" viewBox="0 0 24 24">
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dashboard---new2" transform="translate(-306.000000, -110.000000)" fill-rule="nonzero" fill="#000000">
            <g id="menu" transform="translate(306.000000, 110.000000)">
                <path d="M12,0 C5.38328571,0 0,5.38328571 0,12 C0,18.6167143 5.38328571,24 12,24 C18.6167143,24 24,18.6167143 24,12 C24,5.38328571 18.6167143,0 12,0 Z M12,23.1428571 C5.85557143,23.1428571 0.857142857,18.144 0.857142857,12 C0.857142857,5.856 5.85557143,0.857142857 12,0.857142857 C18.1444286,0.857142857 23.1428571,5.856 23.1428571,12 C23.1428571,18.144 18.1444286,23.1428571 12,23.1428571 Z" id="Shape"></path>
                <path d="M17.1428571,6.85714286 L6.85714286,6.85714286 C6.62014286,6.85714286 6.42857143,7.04914286 6.42857143,7.28571429 C6.42857143,7.52228571 6.62014286,7.71428571 6.85714286,7.71428571 L17.1428571,7.71428571 C17.3798571,7.71428571 17.5714286,7.52228571 17.5714286,7.28571429 C17.5714286,7.04914286 17.3798571,6.85714286 17.1428571,6.85714286 Z" id="Shape"></path>
                <path d="M17.1428571,11.5714286 L6.85714286,11.5714286 C6.62014286,11.5714286 6.42857143,11.7634286 6.42857143,12 C6.42857143,12.2365714 6.62014286,12.4285714 6.85714286,12.4285714 L17.1428571,12.4285714 C17.3798571,12.4285714 17.5714286,12.2365714 17.5714286,12 C17.5714286,11.7634286 17.3798571,11.5714286 17.1428571,11.5714286 Z" id="Shape"></path>
                <path d="M17.1428571,16.2857143 L6.85714286,16.2857143 C6.62014286,16.2857143 6.42857143,16.4777143 6.42857143,16.7142857 C6.42857143,16.9508571 6.62014286,17.1428571 6.85714286,17.1428571 L17.1428571,17.1428571 C17.3798571,17.1428571 17.5714286,16.9508571 17.5714286,16.7142857 C17.5714286,16.4777143 17.3798571,16.2857143 17.1428571,16.2857143 Z" id="Shape"></path>
            </g>
        </g>
    </g>
</svg></a>
                        </div>
                    </div>
                    <a href="#" className = "asset-menu asset-small-show" style={{marginTop:"0px"}}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24">
                                
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dashboard---new2" transform="translate(-306.000000, -110.000000)" fill-rule="nonzero" fill="#000000">
                                        <g id="menu" transform="translate(306.000000, 110.000000)">
                                            <path d="M12,0 C5.38328571,0 0,5.38328571 0,12 C0,18.6167143 5.38328571,24 12,24 C18.6167143,24 24,18.6167143 24,12 C24,5.38328571 18.6167143,0 12,0 Z M12,23.1428571 C5.85557143,23.1428571 0.857142857,18.144 0.857142857,12 C0.857142857,5.856 5.85557143,0.857142857 12,0.857142857 C18.1444286,0.857142857 23.1428571,5.856 23.1428571,12 C23.1428571,18.144 18.1444286,23.1428571 12,23.1428571 Z" id="Shape"></path>
                                            <path d="M17.1428571,6.85714286 L6.85714286,6.85714286 C6.62014286,6.85714286 6.42857143,7.04914286 6.42857143,7.28571429 C6.42857143,7.52228571 6.62014286,7.71428571 6.85714286,7.71428571 L17.1428571,7.71428571 C17.3798571,7.71428571 17.5714286,7.52228571 17.5714286,7.28571429 C17.5714286,7.04914286 17.3798571,6.85714286 17.1428571,6.85714286 Z" id="Shape"></path>
                                            <path d="M17.1428571,11.5714286 L6.85714286,11.5714286 C6.62014286,11.5714286 6.42857143,11.7634286 6.42857143,12 C6.42857143,12.2365714 6.62014286,12.4285714 6.85714286,12.4285714 L17.1428571,12.4285714 C17.3798571,12.4285714 17.5714286,12.2365714 17.5714286,12 C17.5714286,11.7634286 17.3798571,11.5714286 17.1428571,11.5714286 Z" id="Shape"></path>
                                            <path d="M17.1428571,16.2857143 L6.85714286,16.2857143 C6.62014286,16.2857143 6.42857143,16.4777143 6.42857143,16.7142857 C6.42857143,16.9508571 6.62014286,17.1428571 6.85714286,17.1428571 L17.1428571,17.1428571 C17.3798571,17.1428571 17.5714286,16.9508571 17.5714286,16.7142857 C17.5714286,16.4777143 17.3798571,16.2857143 17.1428571,16.2857143 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg></a>
                    <div className = "row asset-small-none">
                        <div className = "col-md-6 btn-grop dropdown btn-mer">
                            <a className = "btn btn-brand btn-create" data-toggle="modal" data-target="#create-assets">
                                <span>Create</span>
                                
                            </a>
                            <i className = "fa fa-angle-down dropdown-toggle" id="crt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></i>
                            <ul className = "dropdown-menu" aria-labelledby="crt">
                                <li>
                                    <a href="#">Export Report</a>
                                </li>


                            </ul>
                        </div>






                        <div className = "col-md-6">
                            <a href="#" data-toggle="modal" data-target="#filters">



                                <svg id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 459 459">
                                    <g>
                                        <g id="filter">
                                            <path d="M178.5,382.5h102v-51h-102V382.5z M0,76.5v51h459v-51H0z M76.5,255h306v-51h-306V255z" fill="#727c8e" />
                                        </g>
                                    </g>

                                </svg>

                                Filters </a>
                        </div>
                    </div>


                    

                </div>
                <a href="#" className = "create-asset-small asset-small-show" style={{marginTop:"0px"}}>

                        <svg width="20px" height="20px" viewBox="0 0 24 24">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dashboard---new" transform="translate(-18.000000, -170.000000)" fill-rule="nonzero" fill="#2874F0">
                                    <g id="Group-2" transform="translate(18.000000, 170.000000)">
                                        <path d="M12,0 C5.38338462,0 0,5.38292308 0,12 C0,18.6170769 5.38338462,24 12,24 C18.6166154,24 24,18.6170769 24,12 C24,5.38292308 18.6166154,0 12,0 Z M12,23.0769231 C5.89246154,23.0769231 0.923076923,18.1075385 0.923076923,12 C0.923076923,5.89246154 5.89246154,0.923076923 12,0.923076923 C18.1075385,0.923076923 23.0769231,5.89246154 23.0769231,12 C23.0769231,18.1075385 18.1075385,23.0769231 12,23.0769231 Z" id="Shape"></path>
                                        <path d="M17.7692308,11.5384615 L12.4615385,11.5384615 L12.4615385,6.46153846 C12.4615385,6.20630769 12.2547692,6 12,6 C11.7452308,6 11.5384615,6.20630769 11.5384615,6.46153846 L11.5384615,11.5384615 L6.23076923,11.5384615 C5.976,11.5384615 5.76923077,11.7447692 5.76923077,12 C5.76923077,12.2552308 5.976,12.4615385 6.23076923,12.4615385 L11.5384615,12.4615385 L11.5384615,18 C11.5384615,18.2552308 11.7452308,18.4615385 12,18.4615385 C12.2547692,18.4615385 12.4615385,18.2552308 12.4615385,18 L12.4615385,12.4615385 L17.7692308,12.4615385 C18.024,12.4615385 18.2307692,12.2552308 18.2307692,12 C18.2307692,11.7447692 18.024,11.5384615 17.7692308,11.5384615 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                                            </a>

                <div className = "grids-list-scroll">
                        


                        <div className = "panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className = "panel panel-default high-servy">
                                  <div className = "panel-heading" role="tab" id="headingOne">
                                        <h4 className = "panel-title">
                                                <a href="#">
                                                        <img src="/src/images/high.png"/>
                                                        <h2>
                                                                High Severity
                                                                <small>4 Assets (wesecure, admin, goibibo)</small>
                                                        </h2></a>
                                          <a className = "collapsed arrow" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            
    <svg width="8px" height="5px" viewBox="0 0 8 5">
        
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dashboard---new2" transform="translate(-328.000000, -324.000000)" fill-rule="nonzero" fill="#23263B">
                <path d="M331.999987,329 C331.85661,329 331.713252,328.939976 331.60394,328.820182 L328.164113,325.048597 C327.945296,324.808678 327.945296,324.419689 328.164113,324.179867 C328.382843,323.940044 328.737548,323.940044 328.956383,324.179867 L331.999987,327.517173 L335.043608,324.179983 C335.262426,323.940161 335.617095,323.940161 335.835807,324.179983 C336.054731,324.419806 336.054731,324.808794 335.835807,325.048714 L332.396033,328.820298 C332.286668,328.940112 332.14331,329 331.999987,329 Z" id="Shape"></path>
            </g>
        </g>
    </svg>
                                          </a>
                                        </h4>
                                  </div>
                                  <div id="collapseOne" className = "panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div className = "panel-body">
                                      

                                            <ul className = "grids-list">
                                                    <li><a href="#">
                                                        <img src="/src/images/icon-1.png"/>
                                                        <h2>
                                                                Goibibo.com
                                                                <small>Created by Akhil  |   9 hr ago</small>
                                                        </h2></a>
                                                    </li>
                                                    <li><a href="#">
                                                            <img src="/src/images/icon-1.png"/>
                                                            <h2>
                                                                    Goibibo.com
                                                                    <small>Created by Akhil  |   9 hr ago</small>
                                                            </h2></a>
                                                        </li>
                                                        <li><a href="#">
                                                                <img src="/src/images/icon-1.png"/>
                                                                <h2>
                                                                        Goibibo.com
                                                                        <small>Created by Akhil  |   9 hr ago</small>
                                                                </h2></a>
                                                            </li>
                                                            </ul>

                                    </div>
                                  </div>
                                </div>
                                <div className = "panel panel-default low-servy">
                                  <div className = "panel-heading" role="tab" id="headingTwo">
                                    <h4 className = "panel-title">
                                            <a href="#">
                                                    <img src="/src/images/low.png"/>
                                                    <h2>
                                                            Low Severity
                                                            <small>4 Assets (wesecure, admin, goibibo)</small>
                                                    </h2></a>
                                      <a className = "collapsed arrow" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        
<svg width="8px" height="5px" viewBox="0 0 8 5">
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dashboard---new2" transform="translate(-328.000000, -324.000000)" fill-rule="nonzero" fill="#23263B">
            <path d="M331.999987,329 C331.85661,329 331.713252,328.939976 331.60394,328.820182 L328.164113,325.048597 C327.945296,324.808678 327.945296,324.419689 328.164113,324.179867 C328.382843,323.940044 328.737548,323.940044 328.956383,324.179867 L331.999987,327.517173 L335.043608,324.179983 C335.262426,323.940161 335.617095,323.940161 335.835807,324.179983 C336.054731,324.419806 336.054731,324.808794 335.835807,325.048714 L332.396033,328.820298 C332.286668,328.940112 332.14331,329 331.999987,329 Z" id="Shape"></path>
        </g>
    </g>
</svg>
                                      </a>
                                    </h4>
                                  </div>
                                  <div id="collapseTwo" className = "panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className = "panel-body">
                                            <ul className = "grids-list">
                                                    <li><a href="#">
                                                        <img src="/src/images/icon-1.png"/>
                                                        <h2>
                                                                Goibibo.com
                                                                <small>Created by Akhil  |   9 hr ago</small>
                                                        </h2></a>
                                                    </li>
                                                    <li><a href="#">
                                                            <img src="/src/images/icon-1.png"/>
                                                            <h2>
                                                                    Goibibo.com
                                                                    <small>Created by Akhil  |   9 hr ago</small>
                                                            </h2></a>
                                                        </li>
                                                        <li><a href="#">
                                                                <img src="/src/images/icon-1.png"/>
                                                                <h2>
                                                                        Goibibo.com
                                                                        <small>Created by Akhil  |   9 hr ago</small>
                                                                </h2></a>
                                                            </li>
                                                            </ul>
                                    </div>
                                  </div>
                                </div>
                                
                              </div>



                    <ul className = "grids-list">
                        <li><a href="#">
                            <img src="/src/images/icon-1.png"/>
                            <h2>
                                    Goibibo.com
                                    <small>Created by Akhil  |   9 hr ago</small>
                            </h2></a>
                        </li>
                        <li><a href="#">
                                <img src="/src/images/icon-1.png"/>
                                <h2>
                                        Goibibo.com
                                        <small>Created by Akhil  |   9 hr ago</small>
                                </h2></a>
                            </li>
                            <li className = "active"><a href="#">
                                    <img src="/src/images/icon-1.png"/>
                                    <h2>
                                            Goibibo.com
                                            <small>Created by Akhil  |   9 hr ago</small>
                                    </h2></a>
                                </li>
                                <li><a href="#">
                                        <img src="/src/images/icon-1.png"/>
                                        <h2>
                                                Goibibo.com
                                                <small>Created by Akhil  |   9 hr ago</small>
                                        </h2></a>
                                    </li>
                                    <li><a href="#">
                                            <img src="/src/images/icon-1.png"/>
                                            <h2>
                                                    Goibibo.com
                                                    <small>Created by Akhil  |   9 hr ago</small>
                                            </h2></a>
                                        </li>
                                        <li><a href="#">
                                                <img src="/src/images/icon-1.png"/>
                                                <h2>
                                                        Goibibo.com
                                                        <small>Created by Akhil  |   9 hr ago</small>
                                                </h2></a>
                                            </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>

        <div className = "right-side p-25 bg-color">
<div className = "row">

    <div className = "col-md-10 col-md-offset-1">

 
<div className = "inner-box">


<div className = "row">
    <div className = "col-md-8">
<h1 className = "heading m-b-30">Create Asset</h1>

        <div className = "row m-b-30">
            <div className = "col-md-12">
                <input type="text" className = "form-control" placeholder="Name" />
            </div>
        </div>
        <div className = "row m-b-30">
                <div className = "col-md-12">
                    <input type="text" className = "form-control" placeholder="Asset type"/>
                </div>
            </div>
            <div className = "row m-b-30">
                    <div className = "col-md-12">
                            <input type="file" name="file-7[]" id="file-7" className = "inputfile inputfile-6" data-multiple-caption="{count} files selected" multiple />
                            <label for="file-7"><span>Asset Image</span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Upload File</strong></label>
                        
                    </div>
                </div>
                <div className = "row m-b-30">
                        <div className = "col-md-12">
                                <button className = "btn btn-primary btn-rounded" type="submit">Submit</button>
                            </div>
                            </div>



    </div>
    <div className = "col-md-4">


        <div className = "preview-section p-25 bg-color">


                <h1 className = "heading m-b-30">Preview</h1>
        
        <div className = "row">
            <div className = "col-md-12">
                Name
                <span className = "block lable-view">Wescure</span>
            </div>
        </div>
        <div className = "row">
                <div className = "col-md-12">
                    Asset Type
                    <span className = "block lable-view">Wescure</span>
                </div>
            </div>
            <div className = "row">
                    <div className = "col-md-12">
                        Asset Image
                        <span className = "block lable-view">
                            <img src="/src/images/icon-1.png"/>
                        </span>
                    </div>
                </div>


    </div>
</div></div>


</div>

</div>



        

</div>
</div>


            </div>
            )

    }
}