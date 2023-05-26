import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.jfif';
import Title from './Title';
import Jokes from './Jokes';
import Header from './Header';

class App extends Component{
  state={displayBio:false}

  
  toggleDisplay=()=>{
    this.setState({displayBio:!this.state.displayBio})
  }
  render(){
    return(
      <div>
        <img src={profile} alt='profile' className="profile"/>
        <h1> Hello</h1>
        <p>My name is Harini.</p>
        <Title/>
        <p>I'm always looking forward to work on meaningful projects.</p>
        {
        this.state.displayBio?(
        <div>
          <p>I live in guntur</p>
          <p>My fav language is Java and React JS is awesome</p>
          <button onClick={this.toggleDisplay}>Read less</button>
        </div>
        ):(
          <div>
            <button onClick={this.toggleDisplay}>Read more</button>
          </div>
        )
    }
    <hr/>
    <Projects/>
    <hr/>
    <SocialProfiles/>
    </div>
      
    )
  }
}

export default App;
