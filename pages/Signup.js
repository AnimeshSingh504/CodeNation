import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import signupImg from "../assets/signup.png";


export const Signup = (props) => {

    let SetloggedIn = props.SetloggedIn;

    const navigate = useNavigate();

    const [formdata,setFormData] = useState({
        firstName:"", lastName:"", email:"", password1:"", password2:""
    })

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    const [passwordVisible1, setPasswordVisible1] = useState(false);

    function passwordVisibleHandler1(){
        setPasswordVisible1(true);
    }

    function passwordInvisibleHandler1(){
        setPasswordVisible1(false);
    }

    const [passwordVisible2, setPasswordVisible2] = useState(false);

    function passwordVisibleHandler2(){
        setPasswordVisible2(true);
    }

    function passwordInvisibleHandler2(){
        setPasswordVisible2(false);
    }

    function submitHandler(event){
        event.preventDefault();
        SetloggedIn(true);
        toast.success("Account Created");
        navigate("/");
    }

  return (
    <div>
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        
                        <input
                            required
                            type="text"
                            placeholder='Enter first name'
                            name='firstName'
                            value={formdata.firstName}
                            onChange={changeHandler}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        
                        <input
                            required
                            type="text"
                            placeholder='Enter last name'
                            name='lastName'
                            value={formdata.lastName}
                            onChange={changeHandler}
                        />
                    </label>
                </div>

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

                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                            
                            <input
                                required
                                type= {passwordVisible1? ("text") : ("password")}
                                placeholder='Enter password'
                                name='password1'
                                value={formdata.password1}
                                onChange={changeHandler}
                            />
                            <span>
                                {passwordVisible1? (<AiOutlineEyeInvisible onClick={passwordInvisibleHandler1}/>) : <AiOutlineEye onClick={passwordVisibleHandler1}/>}
                            </span>
                    </label>
                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                            
                            <input
                                required
                                type= {passwordVisible2? ("text") : ("password")}
                                placeholder='Confirm password'
                                name='password2'
                                value={formdata.password2}
                                onChange={changeHandler}
                            />
                            <span>
                                {passwordVisible2? (<AiOutlineEyeInvisible onClick={passwordInvisibleHandler2}/>) : <AiOutlineEye onClick={passwordVisibleHandler2}/>}
                            </span>
                    </label>
                </div>
                <button>
                    Create Account
                </button>
            </form>
        </div>
        <div>
            <img src={signupImg} alt=""/>
        </div>
    </div>
  )
}

export default Signup;

