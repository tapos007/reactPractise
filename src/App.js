import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons:[
        {name:'Sumon',age:28},
        {name:'Tapos',age:29},
        {name:'Shofi',age:30},
        {name:'Monir',age:31},
    ]
  };

  shitchNameHandler= ()=>{
      this.setState({
          persons:[
              {name:'Sumon123',age:28},
              {name:'Tapos',age:29},
              {name:'Shofi',age:30},
              {name:'Monir',age:31},
          ]
      });

  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.shitchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={"25"}/>
        <Person name={"shofi"} age={"35"}/>
        <Person name={"kayes"} age={"45"}/>
        <Person name={"mamun"} age={"78"}/>
        <Person name={"tapos"} age={"90"}/>

        <Person/>
      </div>
    );
  }
}

export default App;
