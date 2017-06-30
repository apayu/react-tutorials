import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav"
import Footer from "../components/layout/Footer"

export default class Layout extends React.Component{
  navigate(){
    this.props.history.pushState(null, "/");
  }
  render(){
    const { history } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return(
      <div>
        <Nav location = {location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>welcome apa</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
