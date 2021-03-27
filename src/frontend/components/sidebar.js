import Head from "next/head";
import styles from '../styles/Home.module.css';
import Checkbox from './Checkbox';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
<<<<<<< HEAD
import { slide as Menu } from 'react-burger-menu';
=======
// if errors: npm install react-icons
>>>>>>> cd3a7c3e9af904915a829f7d8487b9cf8e716cab
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import React, { useState } from'react';
// Tabs courtesy of: https://github.com/reactjs/react-tabs

<<<<<<< HEAD
const Sidebar = ({selectedCheckboxes, genres, instruments}) => { 
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

=======
const Sidebar = ({selectedCheckboxes, genres, instruments, sidebar, showSidebar}) => { 
    
    
>>>>>>> cd3a7c3e9af904915a829f7d8487b9cf8e716cab
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
<<<<<<< HEAD
        {/*<div className = {styles.sidebar}> */}
=======
>>>>>>> cd3a7c3e9af904915a829f7d8487b9cf8e716cab
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
<<<<<<< HEAD
        {/*</div> */}
=======
>>>>>>> cd3a7c3e9af904915a829f7d8487b9cf8e716cab
        </>
    );
}

export default Sidebar;
