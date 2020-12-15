import { useState } from 'react'
import React, { Component }from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Redirect,NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios'
import '../App.css'


class Navbar extends Component {
    state = {
      categories:[],
      landsCat:[],
        isOpen: false
        };

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
getCategories = ()=>{
  axios.defaults.withCredentials=true;
     axios.get('/api/getHomesCategories').then((response)=>{
        return response.data.categories;
      }).then((categories)=>{
        this.setState({
         categories:categories});
      });
  }
  getCategoriesLands = ()=>{
    axios.defaults.withCredentials=true;
       axios.get('/api/getLandsCategories').then((response)=>{
          return response.data.categories;
        }).then((categories)=>{
          this.setState({
           landsCat:categories});
        });
    }
  componentDidMount(){
    this.getCategories();
    this.getCategoriesLands();
  }   
logout = e => {
    e.preventDefault();
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post("/logout").then(res => {
        sessionStorage.removeItem('loggedIn');
      });
    });
};
login = e =>{
  <Redirect to="/login"/>
}
render() {
  return (
    <Router>
      <MDBNavbar expand="md"  style={{height:"70px"}}>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!" className="Navv">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" className="Navv">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" className="Navv">Features</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="Navv d-none d-md-inline">Houses</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  {this.state.categories.map((item)=>
                  <MDBDropdownItem href="#!" className="Navv">{item.name}</MDBDropdownItem>
                  )}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
               <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="Navv d-none d-md-inline">Lands</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  {this.state.landsCat.map((item)=>
                  <MDBDropdownItem href="#!" className="Navv">{item.name}</MDBDropdownItem>
                  )}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav left>
          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
               <h3 className="Navv"><MDBIcon fas icon="home" className="Navv" />Subasta</h3>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown >
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="Navv"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default"  right>
                  <MDBNavLink className="waves-effect waves-light"  to="/login">
                    <h6 className="Navv"><MDBIcon fas icon="sign-in-alt" className="Navv"/>SignIn</h6>
                    </MDBNavLink>
                  <MDBNavLink className="waves-effect waves-light" to="/login">
                    <h6 className="Navv"><MDBIcon fas icon="sign-out-alt" className="Navv" /><a className="Navv">SignOut</a></h6>
                    </MDBNavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}
export default Navbar;