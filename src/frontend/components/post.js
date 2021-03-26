import Link from 'next/link'
import Image from 'next/image'
import React from 'react';

export default class Posts extends React.Component {
    render(){
    return ( 
        <div className="postbox">
            <h3> {this.props.date} </h3>
            <p> {this.props.text} </p>
        </div>
    )
    }
}
 

