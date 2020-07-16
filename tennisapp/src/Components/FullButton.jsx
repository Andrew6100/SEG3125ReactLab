import React from 'react'
// import Link from "react-router-dom"
import {BrowserRouter as Router, Route, Link } from "react-router-dom"

export default function FullButton(props) {
    const {buttonText, link} = props;
    return (
        <div>
            <Link to={link} className="btn btn-lg btn-success w-100 py-3 my-2">{buttonText}</Link> 
        </div>
    )
}