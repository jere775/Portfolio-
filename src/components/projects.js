import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
            {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(file:///Users/judithespinoza/Desktop/Screen%20Shot%202021-03-02%20at%205.42.40%20PM.png) center / cover'}} ></CardTitle> */}
            <img
            src="/img/Paris.png"
            alt="Gateway"
            style={{height: '175px'}}
             />
            <CardText>
            Gateway Project: This is my very first project on Paris using HTML and CSS.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/jere775/gateway-project.git">GitHub</Button>
              <Button colored href="https://epic-joliot-db0f12.netlify.app">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
            {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Semantic HTML Revision to Gateway Project</CardTitle> */}
            <img
            src="/img/Paris.png"
            alt="revision project"
            style={{height: '175px'}}
             />
            <CardText>
            Semantic HTML Revision to Gateway Project: Part 2 of Gateway project.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/jere775/first-project.git">GitHub</Button>
              {/* <Button colored>Visual Studio</Button> */}
              <Button colored href="https://naughty-pasteur-ff6519.netlify.app">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
            {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle> */}
            <img
            src="/img/ecomm.png"
            alt="recommerce"
            style={{height: '175px'}}
             />
            <CardText>
              Ecommerce: My first Ecommerce project about anime and subscriptor using HTML and CSS.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/jere775/ecomm.git">GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored href="https://amazing-archimedes-df31e7.netlify.app/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
   {/* Project 4 */}
          <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
            {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle> */}
            <img
            src="/img/reserapp.png"
            alt="reservation-app"
            style={{height: '175px'}}
             />
            <CardText>
            A reservation app that using HTML and CSS to create a simple form that looks clean.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/jere775/reservePage.git">GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored href="https://stoic-wescoff-a27e85.netlify.app/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div> 
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
              {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle> */}
              <img
            src="/img/guess.png"
            alt="guessapp"
            style={{height: '175px'}}
             />
              <CardText>
              The Guessing Game utilizes the JavaScript Voice Recognition library.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/jere775/guess-app.git">GitHub</Button>
                <Button colored href="https://sleepy-perlman-94403e.netlify.app">Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

          {/* Project 2 */}
          <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
            {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle> */}
            <img
            src="/img/music-navbar.png"
            alt="music-navbar"
            style={{height: '175px'}}
             />
            <CardText>
            Using HTML, CSS, and JS to create a animated hamburger style navigation bar.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/jere775/music-hamburger-js.git">GitHub</Button>
              <Button colored href="https://adoring-hopper-8f6cac.netlify.app/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          {/* <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}

  </div>
  </div>  
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
          {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle> */}
          <img
            src="/img/tic-tac.png"
            alt="tic-tac-toe"
            style={{height: '175px'}}
             />
          <CardText>
          A Tic Tac Toe application was created to demonstrate proficient React hooks expertise.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/jere775/to-do-app.git">GitHub</Button>
            {/* <Button colored>CodePen</Button> */}
            <Button colored href="https://zen-hamilton-e4ff50.netlify.app/">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

      {/* Project 2 */}
      <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
        {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle> */}
        <img
            src="/img/react-ecommerce.png"
            alt="react-ecommerce"
            style={{height: '175px'}}
             />
        <CardText>
        A React Ecommerce Revision: Part 2 of my first Ecommerce.
        </CardText>
        <CardActions border>
          <Button colored href="https://github.com/jere775/react-ecommerce.git">GitHub</Button>
          {/* <Button colored >CodePen</Button> */}
          <Button colored href="https://upbeat-hoover-34b60a.netlify.app">Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project 3*/}
      <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          {/* <Button colored>CodePen</Button> */}
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
</div></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

      {/* Project 2 */}
      <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project 3 */}
      <Card shadow={2} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
</div></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab> CSS/HTML</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          {/* <Tab>NodeJS</Tab>
          <Tab>MySQL</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          <footer className= "footer">
      Copyright &copy; 2021 | JE Portfolio
    </footer>

      </div>
    )
  } 
}

export default Projects;
