import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import Logo from '../../../assets/images/logo.png';
// import {loginSuccess,loginPending,loginFail} from "../../../redux/login-redux/login.slice."
import { toast } from 'react-toastify';
import { forgetPassword } from "../../../api/user.api";

const SignIn = () => {
    const [email, setEmail] = useState('');

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            default:
                break;
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            return alert('Fill up all the form!');
        }
        // dispatch(loginPending());

        try {
            const responseForgetPass = await forgetPassword({ email });
            if (responseForgetPass.status === 'success') {
                toast.success("Password Changing link has been sent", {
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
                <h2>Forgot Password</h2>
                <span>Enter the email address or phone number associated with your account and you will get a verification code to reset your password.</span>
                <div className='logfrmBx'>
                    <FormGroup>
                        <Input type="text" name="email" value={email} id="examplePassword" placeholder="Email address or phone" onChange={handleOnChange} />
                    </FormGroup>
                </div>
                <div className='signBtn'>
                    <Button onClick={handleOnSubmit}>Send Code</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn