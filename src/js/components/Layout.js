import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

  constructor(){
    super();
    this.state = {
      title: "welcome"
    }
  }
  render() {
    setTimeout(() => {
      this.setState({title: "welcome pa!"});
    }, 2000);
    return (
      <div>
        <Header title={this.state.title} />
        <Header title={"Other thing"} />
        <Footer />
      </div>
    );
  }
}
