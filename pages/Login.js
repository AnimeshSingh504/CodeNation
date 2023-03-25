import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { NavLink, useNavigate } from 'react-router-dom';
import loginImg from '../assets/login.png';

export const Login = (props) => {

    let SetloggedIn = props.SetloggedIn;

    const navigate = useNavigate();

    const [formdata,setFormData] = useState({
        email:"", password:""
    })

    const [passwordVisible, setPasswordVisible] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        )) 
    }

    function passwordVisibleHandler(){
        setPasswordVisible(true);
    }

    function passwordInvisibleHandler(){
        setPasswordVisible(false);
    }

    function handleLogin(event){
        event.preventDefault();
        SetloggedIn(true);
        toast.success("Logged In");
        navigate("/");
    }


  return (
    <div>
        <div>
            <form onSubmit={handleLogin}>
                <label>
                    <p>Email Address<sup>*</sup></p>
                    
                    <input
                        required
                        type="email"
                        placeholder='Enter email address'
                        name='email'
                        value={formdata.email}
                        onChange={changeHandler}
                    />
                </label>

                <label>
                    <p>Password<sup>*</sup></p>
                        
                        <input
                            required
                            type= {passwordVisible? ("text") : ("password")}
                            placeholder='Enter password'
                            name='password'
                            value={formdata.password}
                            onChange={changeHandler}
                        />
                        <span>
                            {passwordVisible? (<AiOutlineEyeInvisible onClick={passwordInvisibleHandler}/>) : <AiOutlineEye onClick={passwordVisibleHandler}/>}
                        </span>
                </label>
                <NavLink to="#">
                    Forgot Password
                </NavLink>

                <button>
                    Log In
                </button>
            </form>
        </div>
        <div>
            <img src={loginImg} alt=""/>
        </div>
    </div>
  )
}

export default Login;
