import React from 'react';
import './Home.css';
import Gender from './Gender';
import { Link } from 'react-router-dom';
 
const Home = ()=>{

const logo = 'Dressify';
  return (
    <>
      <nav>
        <Link className='logo' to="/">{logo}</Link>
        <ul>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/all">
            All
          </Link>
          <Link className="link" to="/pending">
            Pending
          </Link>
          <Link className="link" to="/completed">
            Completed
          </Link>
        </ul>
      </nav>
      <hr />
      <Gender />
    </>
  );

} 

export default Home
