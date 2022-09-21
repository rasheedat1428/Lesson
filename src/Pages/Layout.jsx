import React from 'react'
import { Link } from 'react-router-dom'


const Layout = ({children}) => {
  return (
    <>
    <nav>
        <ul>
            <li>
                 <Link to="/"> Home</Link> 
            </li>
            <li> 
                <Link to="about"> AboutUs</Link>
                </li>
            <li> 
                <Link to="contact"> ContactUs</Link>
                </li>
            <li>
                <a href="log">Not Found</a>
            </li>
        </ul>
    </nav>
    {children}
    <footer>
        <p style={{ textAlign: "center", borderTop: "1px solid purple" }}>
            Copyright &copy; 2022</p>
    </footer>
    </>
  );
};

export default Layout;