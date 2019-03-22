import React , {useEffect, memo} from 'react';

const person = (props) => {

    //UseEffect demo
    useEffect(() => {
        console.log('This function is called at the time of mounting of the component since we are passing empty array as second argument so it won\'t get called everytime we do rendering of the component. ');
        const timeOut = setTimeout(()=> {
            alert('time  is out');
        },5000);            
    return () => {
        clearTimeout(timeOut);
        console.log('timer is cleared when component gets unmounted');
        console.log('This anonymous function is called at the time when component is getting unmounted because we have passed empty array as second argument to useEffect()')
        }           
    }, []);

    return (
    <div>
        <p onClick={props.click}>Hey This is {props.Name} and I am {props.age} years old</p>
    </div>
    );
}

export default memo(person);