import React, { Component, Fragment } from "react";
import "./LeftNavbar.css";
import { Link } from "react-router-dom";
import testlogo from "../../Images/png-logo-design-sample-logo-design-09-388.png";

class LeftNavbar extends Component {
  render(props) {
    console.log(this.props);
    return (
      <Fragment>
        <div className={`sidenav  ${this.props.data ? "opennav" : "closenav"}`}>
          <div class="navbar-header ">
            <a class="navbar-brand " href="#">
              <img src={testlogo} alt="logo" className="img-responsive logo" />
            </a>
          </div>
          <ul className="lefnav-list">
            <li>
              {" "}
              <span
                class="glyphicon leftnav-gly glyphicon-home"
                style={{ color: "#2196f3" }}
              />
              <Link to="/"> Home</Link>
            </li>
            <li>
              <span
                class="glyphicon leftnav-gly glyphicon-heart"
                style={{ color: "yellow" }}
              />
              <Link to="/EmplyoeeDetails"> Employee List</Link>
            </li>
            <li>
              <span
                class="glyphicon leftnav-gly glyphicon-user"
                style={{ color: "#e91e63" }}
              />
              <Link to="/Profile"> Person</Link>
            </li>
            <li>
              <span
                class="glyphicon leftnav-gly glyphicon-user"
                style={{ color: "pink" }}
              />
              <Link to="/Trail"> Trail</Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default LeftNavbar;
