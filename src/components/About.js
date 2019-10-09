import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="profilepic" />
            </div>
            <div className="nine columns contact-details">
               <h2>About Me</h2>
               <p>{resumeData.aboutme}</p>
               <h2>Contact Details</h2>
               <p className="address"></p>
               <span>{resumeData.name}</span>
               <br></br>
               <span>{resumeData.address}</span>
               <br></br>
               <span>{resumeData.email}</span>
               <br></br>
               <span>{resumeData.website}</span>
            </div>
         </div>
      </section>
    );
  }
}
