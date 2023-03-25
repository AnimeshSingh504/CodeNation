import React from 'react'
import Login from '../pages/Login';
import Signup from '../page/Signup';
import frameImg from "../assets/frame.png";

export const Template = ({title, subtitle1, subtitle2, formtype}) => {
  return (
    <div>
        <div>
            <div>{title}</div>
            <div>
                <p>{subtitle1}</p>
                <span>{subtitle2}</span>
            </div>

            {
                formtype === "Login" ? 
                (<Login/>) :
                (<Signup/>)
            }

            <div>
                <div></div>
                <div>OR</div>
                <div></div>
            </div>

            <button>
                <p>Sign in with Google</p>
            </button>
        </div>
        <div>
            <img src={frameImg} alt=""/>
        </div>
    </div>
  )
}

export default Template;