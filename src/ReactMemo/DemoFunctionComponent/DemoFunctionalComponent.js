import React , {useEffect,memo} from 'react';

const demoFunctionalComponent = props => {
    //Because of empty array passed as second argument this function will only get called when at the time of component mounting and unmounting
    useEffect(() => {
        console.log('demoFunctionalComponent is called in first time rendering');
        return () => {
            console.log('demoFunctionalComponent is called after component is unmounted from the DOM');
        }
    },[]);

    //uncomment following to see this component rendering each time props changes
    //This will get triggered everytime props changes and since re-rendering is done so which means DOM is getting removed and then re-rendered
    //So we will be able to see the second console getting printed as well.

    // useEffect(() => {
    //     console.log('demoFunctionalComponent is called in first time rendering');
    //     return () => {
    //         console.log('demoFunctionalComponent is called after component is unmounted from the DOM');
    //     }
    // });

    return (
        <div>
            <p>{props.Name}</p>
        </div>
    );
}

export default memo(demoFunctionalComponent);