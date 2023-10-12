import React, { useState, useEffect } from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap';
import Logo from '../../../assets/images/logo.png'
import "./reset-password.scss"
import { Link } from 'react-router-dom'
import { BsEye } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword, resetPassword } from "../../../api/user.api"
import axios from "axios"
import { toast } from 'react-toastify';
//import { useLocation } from 'react-router';
//import queryString from 'query-string';

const SignIn = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    const revealPassword = () => {
        var x = document.getElementById("examplePassword");
        // console.log("value of x", x)
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const revealPassword2 = () => {
        var x = document.getElementById("examplePassword2");
        // console.log("value of x", x)
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!password || !confirmPassword) {
            return alert('Fill up all the form!');
        }
        // dispatch(loginPending());
        try {
            const location = (new URLSearchParams(window.location.search)).get("id")
            console.log("token", location);
            const responseForgetPass = await resetPassword({ password, confirmPassword, token: `${location}` });
            console.log("forgot", responseForgetPass)
            if (responseForgetPass.status === 'success') {
                toast.success("Password has been changed", {
                    position: "top-right"
                });
            }
            if (responseForgetPass.status === 'error') {
                toast.error(responseForgetPass.message, {
                    position: "top-right"
                });
            }
        } catch (error) {
            toast.error(error, {
                position: "top-right"
            });
        }
    };

    return (
        <div className='signInBx'>
            <div className='signLogo'>
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <div className='loginFrmBx'>
                <h2>Reset Password</h2>
                {/* <span>Enter your new password should be unique one.</span> */}
                <div className='logfrmBx'>
                    <FormGroup>
                        <Input type="password" name="password" value={password} id="examplePassword" placeholder="New password*" onChange={handleOnChange} />
                    </FormGroup>
                    <Button className='eyeBtn' onClick={revealPassword}><BsEye /></Button>
                </div>
                <div className='logfrmBx'>
                    <FormGroup>
                        <Input type="password" name="confirmPassword" value={confirmPassword} id="examplePassword2" placeholder="Confirm password*" onChange={handleOnChange} />
                    </FormGroup>
                    <Button className='eyeBtn' onClick={revealPassword2}><BsEye /></Button>
                </div>
                <div className='signBtn'>
                    <Button onClick={handleOnSubmit}>Reset Password</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn