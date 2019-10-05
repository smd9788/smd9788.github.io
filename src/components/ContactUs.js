import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
      <div className="row">
        <div className="twelve columns collapsed banner">
          <h2 style={{color: "#EEEEEE"}}>Feel free to contact me about work opportunities, networking, or just to share your story</h2>
          <div className="banner-text">
            <ul className="social" style={{textAlign: "center"}}>
               {
                 resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                   return(
                           <li key={item.name} style={{display:"inline-block", margin:"0 4rem"}}>
                             <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className} style={{color: "white"}}></i></a>
                             <h6>{item.name}</h6>
                           </li>
                         )
                       }
                 )
               }
            </ul>
          </div>
        </div>
      </div>
  </section>
        );
  }
}
