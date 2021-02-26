import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Resume extends Component {
  render() {
    return(
      // <div className="resume">
      //   {/* <h1>My Resume</h1> */}
      // <div className="resume-one"> 
      //   <img src="/img/resume.png"
      //   alt="resume" class="center"
      //     height={950}
      //     width={700}/>
      
      // </div>
      // </div>

      <div className="contact-body">
      <Grid className="contact-grid-1">
        <Cell col={6}>
        <div className="resume-one"> 
          <img
            src="/img/resume1.png"
            alt="resumes"
            style={{height: '650px'}}
             />
             </div>
        </Cell>
        </Grid>
        <footer className= "footer">
      Copyright &copy; 2021 | JE Portfolio
    </footer>
        </div>
        
    )
  }
}

export default Resume;