import React, { Component } from 'react';
import NewTag from './New-tag';
import './App.css';




class App extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    }
  }

  onButtonClick = (event) => {
    this.setState({ name: !this.state.name });
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value })
  }


  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.name === true ?
              <h1>Hello, my name is {this.props.name}, my email is: {this.props.email}</h1>
              : <p>{this.state.name}</p>
          }

          <input
            type="text"
            placeholder="Enter text"
            onChange={this.onInputChange}
          />

          {/* <button onClick={this.onButtonClick}>Toggle</button> */}
        </header>
        {/* <NewTag /> */}
      </div>
    );
  }
}

export default App;



// const App = (props) => {
//   console.log("This is the info we're waiting for=====>", props)
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
          // <h1>Hello, my name is {props.name}, my email is: {props.email}</h1>
//         </header>
//       </div>
//     </>
//   )
// };







// stateless











