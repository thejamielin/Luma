import React, { Component } from 'react';
import Checkbox from './Checkbox';

const instruments = ['Violin', 'Cello', 'Guitar', 'Bass', 'Drums'];
const genres = ['Classical', 'Pop', 'R&B'];

class Sidebar extends Component {
    
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
    }

    createCheckbox = label => (
        <Checkbox
            label = {label}
            handleCheckboxChange = {this.toggleCheckbox}
            // prop of handleCheckboxChange calls toggleCheckbox
            key = {label}
            />
    )

    createCheckboxes = () => (
        <div>
        <h1>Instruments </h1>
        { instruments.map(this.createCheckbox) }
        <h1>Genres </h1>
        { genres.map(this.createCheckbox) }
        </div>
    )
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                {this.createCheckboxes()}
                <button className = "btn btn-default" 
                type="submit">Save</button>
            </form>
        )
    }
}

export default Sidebar;