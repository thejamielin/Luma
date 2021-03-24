import Head from "next/head";
import styles from '../styles/Home.module.css';
import Checkbox from './Checkbox';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { slide as Menu } from 'react-burger-menu';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import React, { useState } from'react';
// Tabs courtesy of: https://github.com/reactjs/react-tabs

const Sidebar = ({selectedCheckboxes, genres, instruments}) => { 
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    // removes or adds a toggled Checkbox from the selectedCheckboxes state
    const toggleCheckbox = (label) => {
        if (selectedCheckboxes.has(label)) {
            selectedCheckboxes.delete(label);
        } else {
            selectedCheckboxes.add(label);
        }
    }

    // when "save" button is clicked - .preventDefault()
    // prevents browser from reloading (React handles on the state changing on
    // its own)
    const handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
        // for testing
        console.log(selectedCheckboxes);
    }

    // given a label (String) for the checkbox, create one checkbox
    const createCheckbox = (label) => (
        <Checkbox
            label = {label}
            handleCheckboxChange = {toggleCheckbox}
            key = {label}
        />
    )
    
    // render Heading and list of checkboxes
    const createCheckboxes = () => (
        <div className={styles.checkbox}>
            <h1 className={styles.head}> Instruments </h1>
            { instruments.map((instrument) => createCheckbox(instrument)) }
            <h1 className={styles.head} > Genres </h1>
            { genres.map((genre) => createCheckbox(genre)) }
        </div>
    )
    
    return (
        <>
        {/*<div className = {styles.sidebar}> */}
        <div className = {styles.menuBars}>
            <FaIcons.FaBars onClick = {showSidebar}/>
        </div>
        <nav className={sidebar ? styles.navMenuActive :  styles.navMenu }>
            <ul className = {styles.navMenuItems}>
                <div className = {styles.navbarToggle}>
                    <AiIcons.AiOutlineClose onClick = {showSidebar}/>
                </div>
                <form onSubmit={handleFormSubmit}>
                    {createCheckboxes()}
                    <button className = "btn btn-default" 
                    type="submit">Save</button>
                </form>
            </ul>
        </nav>
        {/*</div> */}
        </>
    );
}

export default Sidebar;
