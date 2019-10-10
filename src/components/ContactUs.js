import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="twelve columns collapsed banner">
            <h3 style={{color: "#EEEEEE"}}>Feel free to contact me about work opportunities, networking, or just to share your story</h3>
          </div>
        </div>
        <ul>
           {
             resumeData.socialLinks && resumeData.socialLinks.map(item =>{
               return(
                       <li key={item.name} style={{display: "inline-block", margin: "0 3rem"}}>
                         <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className} style={{marginBottom: "1rem"}}></i></a>
                         <p><a href={item.url} rel="noopener noreferrer" target="_blank">{item.name}</a></p>
                       </li>
                     )
                   }
             )
           }
        </ul>
      </section>
      );
  }
}
