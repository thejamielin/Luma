import { resetIdCounter } from "react-tabs";
import Footer from "./footer";
import Navbar from "./navbar";
import { Router, withRouter } from 'next/router';
import React, { Component } from "react";


const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;
