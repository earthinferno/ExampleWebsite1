'use strict';

import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {

    return (
        <div>

            <header>
                
                <div className="title"><a><Link to="/">Productivity Application</Link></a></div>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/hello">Hello World</Link>
                </nav>

            </header>

            <div>
                <h1>HOME PAGE</h1>
                <p>Welcome to Productivity Application Home Page.</p>
            </div>

        </div>
    );

}

export default Home;