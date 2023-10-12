import React from 'react'
//import { Button, FormGroup, Input } from 'reactstrap';
import Logo from '../../../assets/images/logo.png'
import SucessIcon from '../../../assets/images/sucess-icon.svg'
import "./reset-successfully.scss"
import { Link } from 'react-router-dom'

const ResetSuccessfully = () => {
    return (
        <div className='signInBx'>
            <div className='signLogo'>
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <div className='loginFrmBx'>
                <i><img src={SucessIcon} alt="" /></i>
                <h2>Password Reset Successfully</h2>
                <div className='dontsend'><Link to="">Login To Account</Link></div>
            </div>
        </div>
    )
}

export default ResetSuccessfully