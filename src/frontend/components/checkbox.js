import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class Checkbox extends Component {
    state = {
        isChecked: false,
    }

    // where is toggleCheckboxChange called
    // what is handleCheckboxChange

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props
        // sets the handleCheckboxChange values
        // and label values as props for this function

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            } // changes state to opposite state
        ));

        handleCheckboxChange(label); 
        // passes in label as an argument to
        // the handleCheckBoxChange function (toggleCheckbox)
    }

    render() {
        const { label } = this.props; // what specifically does this do
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
                <label>
                    {label}
                    <input 
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />
                </label>
            </div>
        );
    }
}

export default Checkbox;