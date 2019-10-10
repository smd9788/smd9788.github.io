import React, { Component } from 'react';
import '../App.css';

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
                    <div className="portfolio-item">
                      <a href={item.url} rel="noopener noreferrer" target="_blank">
                        <img src={`${item.imgurl}`} className="item-img" alt=""/>
                      </a>
                      <div className="portfolio-item-meta">
                        <h5><a href={item.url} rel="noopener noreferrer" target="_blank">{item.name}</a></h5>
                        <p>{item.description}</p>
                        <br></br>
                        <p>{item.tech}</p>
                        <br></br>
                        <button className="row">
                          <i class="fab fa-github fa-lg"></i>
                          <a href={item.repo} rel="noopener noreferrer" target="_blank">See the code</a>
                        </button>
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
