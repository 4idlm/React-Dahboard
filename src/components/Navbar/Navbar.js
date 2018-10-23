import React, { Component } from "react";
import "./Navbar.css";
import LeftNavbar from "../LeftNavbar/LeftNavbar";

class Navbar extends Component {
  state = {
    visible: false
  };
  menuTransform = () => {
    this.setState({
      visible: !this.state.visible
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <nav
          className={`margin-left-animation navbar navbar-expand-sm bg-color navbar-dark   logo-height ${
            this.state.visible ? "marginleftcanvas" : "openmarginleftcanvas"
          }`}
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={this.menuTransform}>
                <div class={`bar1 ${this.state.visible ? "change" : null}`} />
                <div class={`bar2 ${this.state.visible ? "change" : null}`} />
                <div class={`bar3 ${this.state.visible ? "change" : null}`} />
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto ">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-user" />
                <i className="fa fa-fw fa-dashboard" />
                Message
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-bell" />
                Notifications
              </a>
            </li>
            {/* <li><a href="#"><span class="glyphicon glyphicon-user"></span> 
      <img src="..." alt="..." class="rounded-circle"></img>
      </a></li> */}
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <LeftNavbar data={this.state.visible} />
        </div>
        <main className="mt-5 " style={{marginLeft:"100px"}}>{this.props.children}</main>
      </div>
    );
  }
}

export default Navbar;
