import React from 'react';
// import CompC from './Props/CompC'
import CompA from './Class to Class/CompA';
export class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   console.log("Hello")
  // }

  // componentDidMount=()=>{
  //   console.log("Did mount")
  // }
  render() {
  
    console.log("render")
    
    return <div>
    <h1>Hello sample</h1>
    <CompA/>
    </div>;
  }
}

export default App;
