import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://ak.picdn.net/shutterstock/videos/867649/thumb/1.jpg"
              alt="avatar"
              className="avatar-img1"
              />

            <div className="banner-text">
              <h1>JUDITH ESPINOZA</h1>
              <hr/>
              <br/>
              <p>ASPIRING FULL STACK ENGINEER</p>
                 <hr/>
                 <br/>
              <p>CODING LANGUAGES</p>
          <p>HTML  |  CSS  |  JavaScript  |  React  |  MySQL  |  NodeJS</p>
          <hr/>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://linkedin.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Email*/}
          <a href="https://mail.google.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>


          {/* Youtube */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> */}

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
