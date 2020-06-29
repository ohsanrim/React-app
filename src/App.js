import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
       </header>
    );
  }
}
class TOC extends Component{
  render(){
    return(
      <nav>
    <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JAVASCRIPT</a></li>
    </ul>
</nav>

    );
  }
}
class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
          html is HyperText Markup Language.
      </article>

    );
  }
}

class App extends Component{
  constructor(props){
    super(props){
      this.state={
        subject:{title:'web',sub:'world wid web!'}
      }
    }
  }
  render(){
    return(
      <div className="App">
       <subject title={this.state.subject.title} sub={this.state.subject.sub}></subject>
       <TOC></TOC>
       <Content></Content>
      </div>
    );
  }
}

export default App;
