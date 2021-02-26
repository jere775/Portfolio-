// import React, { Component } from 'react';


// class About extends Component {
//   render() {
//     return(
//       <div><h1>About Page</h1></div>
//     )
//   }
// }

// export default About;


import React, { Component } from 'react';
// import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div  className="about">
        <Grid>
          <Cell col={12}>
            <div style={{textAlign: 'center'}}>
            <h2>About Me</h2>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQHziBxbRKRSxA/profile-displayphoto-shrink_400_400/0/1608154300999?e=1619654400&v=beta&t=Y21UthsWQCmpy9OTRag1rPjbxxsn3Hm9rTBcxKZ1vnQ"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div >
            <div className="aboutme">
            <h2 style={{paddingTop: '1em'}}>Judith Espinoza</h2>
            <h4 style={{color: 'white'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid white', width: '100%'}}/>
            <p>A bilingual motivated and personable young adult pursuing a career in Computer Software. I’m currently in the Road to Hire Fellowship for Software Engineering. I specialize in HTML5, CSS3, JavaScript, Node.js and Git/Github. I also started learning MySQL and React. I'm passionate about learning other programming languages, frameworks, and skills that will help me in the future. I am currently seeking employment as a full-stack engineer at a well-established company.</p>
            <hr style={{borderTop: '3px solid white', width: '100%'}}/>
            <h5>Email</h5>
            <p>espinozajj775@gmail.com</p>
            <h5>LinkedIn</h5>
            <p>www.linkedin.com/in/judith-e-espinoza</p>
            {/* <hr style={{borderTop: '3px solid #36096D', width: '50%'}}/> */}
            <h5>Address</h5>
            <p>Charlotte, NC</p>
            <hr style={{borderTop: '3px solid white', width: '100%'}}/>
            </div>
          </Cell>
        </Grid>
        <hr style={{borderTop: '3px solid white', width: '100%'}}/>
        <footer className= "footer">
      Copyright &copy; 2021 | JE Portfolio
    </footer>
      </div>
    
    //   <div className="contact-body">
    //   <Grid className="contact-grid">
    //     <Cell col={6}>
    //       <h2>Judith Espinoza</h2>
    //       <img
    //         src="https://media-exp1.licdn.com/dms/image/C5603AQHziBxbRKRSxA/profile-displayphoto-shrink_400_400/0/1608154300999?e=1619654400&v=beta&t=Y21UthsWQCmpy9OTRag1rPjbxxsn3Hm9rTBcxKZ1vnQ"
    //         alt="avatar"
    //         style={{height: '250px'}}
    //          />
    //        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

    //     </Cell>
    //   </Grid>
    // </div>
    )
  }
}
export default About;