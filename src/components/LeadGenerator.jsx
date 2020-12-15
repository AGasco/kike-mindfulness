import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./../styles/LeadGenerator.css";

class LeadGenerator extends Component {
  render() {
    return (
      <div className="leadGenerator">
        <div className="leadGenerator__container">
          <h4>
            ¿Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, corrupti?
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            suscipit natus facilis necessitatibus ex ea odit rem veniam ipsam
            esse ab vitae cupiditate delectus, similique rerum quas praesentium
            neque modi!
          </p>
          <ScrollLink to="contacto" smooth={true} duration={600}>
            <button
              className="leadGenerator__button"
              onClick={this.props.onLeadClick}
            >
              ¡ Lorem !
            </button>
          </ScrollLink>
        </div>
      </div>
    );
  }
}

export default LeadGenerator;
