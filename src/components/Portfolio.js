import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects</h1>
          <div id="portfolio-wrapper">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="twelve columns portfolio-item" style={{display:"flex", flexDirection:"row"}}>
                  <a href={item.url} rel="noopener noreferrer" target="_blank">
                    <img src={`${item.imgurl}`} className="item-img" alt=""/>
                  </a>
                  <div className="portfolio-item-meta">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
