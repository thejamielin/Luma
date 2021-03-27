import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { render } from 'react-dom';

const Checkbox = ({label, handleCheckboxChange, labelKey}) => {
    const [isChecked, setChecked] = useState(false);

    // changes isChecked state and selectedCheckboxes state (from parent)
    const toggleCheckboxChange = () => {
        setChecked(!isChecked);
        handleCheckboxChange(label); 
    }

    return (
        <div className={styles.checkbox}>
            <label className= {styles.sideText}>
                <input 
                    type="checkbox"
                    value={label}
                    checked={isChecked}
                    onChange={toggleCheckboxChange}
                />
                {label}
            </label>
        </div>
    );

}

export default Checkbox;