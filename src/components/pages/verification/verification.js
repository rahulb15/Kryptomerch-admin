import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import Logo from '../../../assets/images/logo.png';
import "./verification.scss";

const SignIn = () => {
    return (
        <div className='signInBx'>
            <div className='signLogo'>
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <div className='loginFrmBx'>
                <h2>Verification</h2>
                <span>Enter the verification code you received on <i>dhruv…..123@mail.com</i></span>
                <div className='logfrmBx'>
                    <FormGroup>
                        <Input type="text" name="name" id="examplePassword" placeholder="Enter code" />
                    </FormGroup>
                </div>
                <div className='signBtn'>
                    <Button>Verify</Button>
                </div>
                <div className='dontsend'>Didn't receive the code? <Link to="">Resend</Link></div>
            </div>
            <div className='backBtn'>
                <Link to="/">Back</Link>
            </div>
        </div>
    )
}

export default SignIn