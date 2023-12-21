import React from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Header from '../../../common-components/header/header';
import IdoLeftBar from '../ido-leftbar/ido-leftbar';
import "./ido-setting.scss";

const IdoSetting = () => {

    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar />
            <div className='buyerFilter'>
                <div className='buyersHd mb-2'>Settings</div>
            </div>
            <div className='changepassBx'>
                <div className='changepassInn'>
                    <div className='frmBx'>
                        <FormGroup>
                            <Label for="exampleEmail">Old Password</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                        </FormGroup>
                    </div>
                    <div className='frmBx'>
                        <FormGroup>
                            <Label for="exampleEmail">New Password</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                        </FormGroup>
                    </div>
                    <div className='frmBx'>
                        <FormGroup>
                            <Label for="exampleEmail">Confirm Password</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                        </FormGroup>
                    </div>
                    <div className="passnote">Password should be minmum 8 letter and include lower and uppercase letter.</div>
                    <div className='updateBtn'><Button>Update</Button></div>
                </div>
            </div>
            <div className='changepassBx'>
                <div className='twofactBx'>
                    <h2>Two-Factor Verification</h2>
                    <p>Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code.<br />You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>
                    <div className='updateBtn'><Button>Enable 2FA</Button></div>
                </div>
            </div>
        </div>
    )
}

export default IdoSetting