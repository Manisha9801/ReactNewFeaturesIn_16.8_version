import React , {useState} from 'react';
import Person from './../Person/Person';

const multipleUseStateExample = (props) => {
  const [personState, updatePersonState] = useState({
      Person  :
      {
        "Name" : "Manisha",
        "age" : 23    
      },
    //   OtherState : 'This is other state'
    }
  );

  const [OtherState] = useState('This is other state');

  const changeHandler = () => {
    updatePersonState({
      Person : {
        "Name" : "Sachin",
        "age" : 25
      }
    });
  }

  console.log(personState,OtherState);

  return (
      <div className="App">  
        <div className="App-header">
           <Person Name={personState.Person.Name} age={personState.Person.age} />
        </div>
        <button onClick={changeHandler}>Click Me</button>
       </div>
  );

}

export default multipleUseStateExample;