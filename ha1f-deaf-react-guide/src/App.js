import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Button from './Button';

class App extends Component {
  
   state = {
  persons:[
    {name: 'Max', age:29},
    {name: 'Joe', age:48},
    {name: 'Mary', age:9}
  ], 
  otherState: 'some other state'
}

//you use the word handler to signify that you are not activtly calling this method but that it will handle something when interacted with
switchNameHandler = (newName) => {
  this.setState({ persons:[
    {name: newName, age:29},
    {name: 'Joey-Boi', age:48},
    {name: 'Mary', age:30}
  ], })
};

nameChangedHandler = (event) =>{
    this.setState({ persons:[
      {name: 'Manni', age:29},
      {name: event.target.value, age:48},
      {name: 'Mary', age:20}
    ], })
}
    render(){
      return (
        <div className="App">
        <Person 
          name= {this.state.persons[0].name}
          age= {this.state.persons[0].age}/>
        <Person 
          name= {this.state.persons[1].name} 
          age= {this.state.persons[1].age}
          // this is a way to pass an argument with the bind method the 'this' ref the class itself and the second param is the newName paramiter
          click= {this.switchNameHandler.bind(this, 'Maximus')}
          changed = {this.nameChangedHandler} >See this is where props.children is referring!</Person>
        <Person 
          name={this.state.persons[2].name} 
          age= {this.state.persons[2].age}/>
  
        <button 
        //recomended to use that this.bind as it is more efficient but this can also work
          onClick = {() => this.switchNameHandler('Maximan!!')}  > Switch Name </button>
        </div>
        //if you didnt want to use jsx lol: 
        //return.React.createElement('div', {className: 'App'}, React.createElement('h1', null, does this work now));
  
        //this above is the same as JSX:
        // <div> <h1>Does this work now</h1></div>
      );
    }
    }


export default App;




// ===========================================================
//!Hook based approach below for reference
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';
// import Button from './Button';

// const app = props => {
  
    //use state always returns 2 elements 
    //array destructuring if the [] is on the left side of the operator. 
  // const [ this.state, setthis.state ] = useState({
  //   persons:[
  //         {name: 'Max', age:29},
  //         {name: 'Joe', age:48},
  //         {name: 'Mary', age:9}
  //       ]
  // });

  // const [otherState, setOtherState] = useState({
  //   otherState: 'some other state'
  // })

  // const  switchNameHandler = () => {
    //using the second destrutured paramiter in the useState destructuring
    //*does not merge old and new state it replaces it... so other state will not be there when the onClick occurrs
    //   setthis.state({ persons:[
    //     {name: 'Maximilian', age:29},
    //     {name: 'Joe', age:48},
    //     {name: 'Mary', age:30}
    //   ],
    //  });
    // };

    // console.log(this.state, otherState);

    // return (
    //   <div className="App">
    //   <Person name= {this.state.persons[0].name}age= {this.state.persons[0].age}/>
    //   <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age}>See this is where props.children is referring!</Person>
    //   <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}/>

    //   <button onClick = {switchNameHandler}  > Switch Name </button>
    //   </div>
      //if you didnt want to use jsx lol: 
      //return.React.createElement('div', {className: 'App'}, React.createElement('h1', null, does this work now));

      //this above is the same as JSX:
      // <div> <h1>Does this work now</h1></div>
//     );
//   }


// export default app;