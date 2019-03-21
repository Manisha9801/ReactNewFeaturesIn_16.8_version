import React , {useEffect} from 'react';


//This function will get called twice since we are getting two diffferent persons.
const useEffectExample = (props)=> {
    useEffect(() => {
        console.log(props.person);
        console.log('use Effect is called everytime component renders');
    }, [props.person]);
    return null;
}

export default useEffectExample;