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
    console.log(history.isActive("archives"));
    return(
      <div>
        <Nav />
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <h1>welcome pa!</h1>
        {this.props.children}
        <Link to="archives" activeClassName="test" class="btn btn-danger">archives</Link>
        <Link to="settings"><button class="btn btn-success">settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <Footer />
      </div>
    )
  }
}
