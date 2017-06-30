import React from "react";

export default class Nav extends React.Component{
  render(){
    return(
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                Featured
              </li>
              <li>
                Archives
              </li>
              <li>
                Settings
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}