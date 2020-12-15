import React from 'react';
import {MDBIcon } from "mdbreact";
class UserSidebar extends React.Component{

render(){
    return (
<div id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand">
          <a href="#">
          <MDBIcon fas icon="home" /> Start Bootstrap
          <hr style={{color:'white',backgroundColor:'white'}}/>
          </a>
        </li>
        <li>
          <a href="#">My Bids</a>
        </li>
        <li>
          <a href="#">Winning Bids</a>
        </li>
        <li>
          <a href="#">Favorite Bids</a>
        </li>
        <li>
          <a href="#">My Alerts</a>
        </li>
        <li>
          <a href="#"><MDBIcon fas icon="arrow-left" /></a>
        </li>
      </ul>
    </div>
    )
}
}
export default UserSidebar;