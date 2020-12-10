import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./../styles/LeadGenerator.css";

class LeadGenerator extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({
      clicked: true,
    });
  };

  render() {
    return (
      <div className="leadGenerator">
        {!this.state.clicked ? (
          <div className="leadGenerator__pre">
            <h4>
              ¿Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque, corrupti?
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              suscipit natus facilis necessitatibus ex ea odit rem veniam ipsam
              esse ab vitae cupiditate delectus, similique rerum quas
              praesentium neque modi!
            </p>
            <button onClick={this.handleClick}>¡ Lorem !</button>
          </div>
        ) : (
          <div className="leadGenerator__post">
            <ReactPlayer
              className="leadGenerator__video"
              width={640}
              height={360}
              controls={true}
              url="https://www.youtube.com/watch?v=pnkFJ0NQrkM"
            />
          </div>
        )}
      </div>
    );
  }
}

export default LeadGenerator;
