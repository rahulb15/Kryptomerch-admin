import React, { useEffect, useState } from 'react';
import { BsEye } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { userLogin } from "../../../api/user.api";
import Logo from '../../../assets/images/logo.png';
import { getAdminUserProfile } from "../../../redux/get-admin-user/getAdminUser.action";
import { loginFail, loginPending, loginSuccess } from "../../../redux/login-redux/login.slice.";
import "./sign-in.scss";

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { isAuth, error } = useSelector(
        (state) => state.loginStatus
    );

    useEffect(() => {
        if (isAuth) {
            setPassword(localStorage.getItem('password'))
            setEmail(localStorage.getItem('email'))
        }
    }, [])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'password':
                setPassword(value);
                break;
            case 'email':
                setEmail(value);
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

    const lsRememberMe = () => {
        // const passwordInput = document.getElementById("passwordError").value;
        const emailInput = document.getElementById("email").value;
        const passwordInput = document.getElementById("examplePassword").value;
        if (emailInput !== "" && passwordInput !== "") {
            localStorage.email = emailInput;
            localStorage.password = passwordInput;
            // localStorage.password = passwordInput;
        } else {
            localStorage.email = "";
            localStorage.password = "";
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert('Fill up all the form!');
        }
        dispatch(loginPending());

        try {
            const isAuth = await userLogin({ email, password });

            if (isAuth.status === 'error') {
                toast.error("Invalid Email or Password", {
                    position: "top-right"
                });

                return dispatch(loginFail(isAuth.message));
            }
            dispatch(loginSuccess());
            dispatch(getAdminUserProfile());
            navigate('admin/ido-dashboard');
            // if(isAuth){
            //     toast.success("Login Succesfully", {
            //         position: "top-right"

            //       });  
            // }

            // dispatch(getUserProfile());
            // history.push('/dashboard');
        } catch (error) {
            dispatch(loginFail(error.message));
        }
    };

    return (
        <div className='signInBx'>
            <div className='signLogo'>
                <Link to="/admin"><img src={Logo} alt="" /></Link>
            </div>
            <div className='loginFrmBx'>
                <h2>Sign in</h2>
                <div className='logfrmBx'>
                    <FormGroup>
                        <Input type="text" name="email" id="email" autocomplete="off" value={email} placeholder="Email address or phone" onChange={handleOnChange} />
                    </FormGroup>
                </div>
                <div className='logfrmBx'>
                    <FormGroup>
                        <Input type="text" name="password" autocomplete="off" id="examplePassword" value={password} onChange={handleOnChange} placeholder="Password" />
                    </FormGroup>
                    <Button className='eyeBtn' onClick={revealPassword}><BsEye /></Button>
                </div>
                <div className='rembBx'>
                    <div className='remb'>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" onClick={lsRememberMe} />
                                Remember me
                            </Label>
                        </FormGroup>
                    </div>
                    <div className='frgpass'>
                        <Link to="admin/forgot-password">Forgot Password?</Link>
                    </div>
                </div>
                <div className='signBtn'>
                    <Button onClick={handleOnSubmit}>Sign In</Button>
                </div>

            </div>
        </div>
    )
}

export default SignIn