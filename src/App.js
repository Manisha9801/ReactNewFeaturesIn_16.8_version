// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Person Name={'Manisha'} age={23} />
//         </header>
//       </div>
//     );
//   }
// }
// export default App;

//React 16.8 new feature of useState() hooks.
//Run this code to know the difference.

import React , {useState} from 'react';
import Person from './Person/Person';
import UseEffectExample from './UseEffectExample/UseEffectExample';


const app = (props) => {
  const [personState, updatePersonState] = useState({
      Person  :
      [{
        "Name" : "Ram",
        "age" : 23    
      },
      {
        "Name" : "Ram",
        "age" : 23    
      },],
      OtherState : true
    }
  );

  const changeHandler = (newName) => {
    updatePersonState({
      Person : [{
        "Name" : newName,
        "age" : 25
      },
      {
        "Name" : "Ram",
        "age" : 23    
      }],
      OtherState : !personState.OtherState   //Access previous state with this
    });
  }

  console.log(personState);

  let person = null;
  
  if(personState.OtherState && personState.Person.length>0) {
    person = (
      <div className="App-header">
      {personState.Person.map((person,key) => {
        return (
          <Person 
            key = {key}
            Name={person.Name}
            age={person.age}
            onClick = {(e) =>changeHandler('Manisha')}   //Anonymous function is passed hence it will not get called while rendering
          />
        );
      })}
    </div>
    );
  }


  let forUseEffectDemo = null;

  if(personState.Person.length>0) {
    forUseEffectDemo = (
      personState.Person.map((person,key) => {
        return <UseEffectExample key={key} person = {person} />
      })
    );
  }

  return (
      <div className="App">  
        <button onClick={(e) => changeHandler('Sachin')}>Click Me</button>
        {
          personState.OtherState ?
          person
         :null
        }

        {forUseEffectDemo ? forUseEffectDemo : null}
       </div>
  );

}

export default app;