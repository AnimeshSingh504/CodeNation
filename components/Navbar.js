import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { toast } from 'react-hot-toast';

export const Navbar = (props) => {

    let loggedIn = props.loggedIn;
    let SetloggedIn = props.SetloggedIn;

  return (
    <div>
        <nav className='flex bg-violet-400 justify-evenly'>
            <NavLink to="/">
                <img src={logo} alt=""/>
            </NavLink>

            <div>
                <ul className='flex gap-5'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Support</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Contact</NavLink>
                    </li>
                </ul>
            </div>
            
            {/* Login SignUp Logout Dashboard */}
            <div className='flex gap-5'>
                {
                    !loggedIn && 
                    <NavLink to="/Login">
                        <button>Login</button>
                    </NavLink>
                }
                {
                    !loggedIn && 
                    <NavLink to="/Signup">
                        <button>SignUp</button>
                    </NavLink>
                }
                {
                    loggedIn && 
                    <NavLink to="/">
                        <button onClick={ () => {
                            SetloggedIn(false);
                            toast.success("Logged Out");
                        }}>Log Out</button>
                    </NavLink>
                }
                {
                    loggedIn && 
                    <NavLink to="/Dashboard">
                        <button>Dashboard</button>
                    </NavLink>
                }
            </div>
        </nav>

    </div>
  )
}

export default Navbar;
