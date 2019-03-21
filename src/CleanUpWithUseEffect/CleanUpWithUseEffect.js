import React, {useEffect,useState} from 'react';
import Person from './../Person/Person';

const cleanUpWithUseEffect = (props) => {
    const [personState,updateUserState] = useState({
        persons :
        [
            {'Name' : 'Ram','Age' : 12},
            {'Name' : 'Shyam','Age' : 18}
        ]
    }
    );

    const [toggleState, updateToggleState] = useState({
        currentState : false
    });


    const toggleBtn = () => {
        updateToggleState(
            {currentState : !toggleState.currentState}
        );
    }

    let persons = null;

    if(personState.persons) {
        persons = personState.persons.map((person,key) => {
            return <Person key={key} name={person.Name} age={person.Age} />
        });
    }

    return (
        <div>
            <button onClick={toggleBtn}>Toggle Btn</button>
            {toggleState.currentState ? persons : null}
        </div>
    );
}

export default cleanUpWithUseEffect;