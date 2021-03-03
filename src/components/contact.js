import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Judith Espinoza</h2>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQHziBxbRKRSxA/profile-displayphoto-shrink_400_400/0/1608154300999?e=1619654400&v=beta&t=Y21UthsWQCmpy9OTRag1rPjbxxsn3Hm9rTBcxKZ1vnQ"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>HOPE TO HEAR FROM YOU SOON !</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent style={{color: 'white', fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github-square" aria-hidden="true"/>
                    https://github.com/jere775
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{color: 'white', fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    espinozajj775@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{color: 'white', fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                  in/judith-e-espinoza
                  </ListItemContent>
                </ListItem>


              </List>
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

export default Contact;
