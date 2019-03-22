import React , {Component} from 'react';
import DemoFunctionalComponent from './DemoFunctionComponent/DemoFunctionalComponent';

class ReactMemo extends Component {
    state = {
        persons :  {
            Name : "Manisha"
        },
        showToggle : true
    }

    changeHandler = () => {
        this.setState((prevState) => {
            return {showToggle : !prevState.showToggle}
        });
    }

    updateNameState = (e) => {
        const person = {...this.state.persons};
        person.Name = e.target.value;
        this.setState((prevState) => {
            return {persons : person}
        });
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.persons.Name} onChange={(e) => this.updateNameState(e)} />
                <button onClick={this.changeHandler}>ChangeData</button>
                {this.state.showToggle ? <DemoFunctionalComponent Name={this.state.persons.Name} /> : null}
            </div>
        );
    }

}

export default ReactMemo;