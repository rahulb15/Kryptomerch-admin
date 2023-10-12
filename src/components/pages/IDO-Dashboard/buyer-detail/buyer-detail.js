import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./buyer-detail.scss"
import Header from '../../../common-components/header/header'
import IdoLeftBar from '../ido-leftbar/ido-leftbar'
import { HiArrowNarrowLeft } from "react-icons/hi"
import { BsThreeDots, BsCheckCircle } from "react-icons/bs";
import { MdContentCopy, MdMailOutline, MdBlock, MdDeleteOutline } from "react-icons/md"

const BuyerDetail = () => {
    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar />
            <div className='buyerFilter'>
                <div className='buyersHd'>Buyer Details</div>
                <div className='buyersFlt'>
                    <Link to="/ido-buyers" className='backBtn'><HiArrowNarrowLeft /> Back</Link>
                </div>
            </div>
            <div className='buyerDetailBx'>
                <div className='buyerBalBx'>
                    <div className='buyerBal_Left'>
                        <div className='tokBalBx'>
                            <span>Token Balance</span>
                            <strong>4,257 KDM</strong>
                        </div>
                        <div className='tokBalBx'>
                            <span>Wallet Address</span>
                            <strong>1FfmbHfnpaZjKFvyi... <MdContentCopy /></strong>
                        </div>
                        <div className='tokBalBx'>
                            <span>Account Status</span>
                            <Button>Active</Button>
                        </div>
                    </div>
                    <div className='buyermailBx'>
                        <span><BsCheckCircle /> Email</span>
                        <Button className="actionBtn">
                            <BsThreeDots />
                            <div className='actionList'>
                                <ul>
                                    <li><Link to="/buyer-detail"><MdMailOutline /> Send Email</Link></li>
                                    <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                    <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                </ul>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className='userInfBx'>
                    <h4>USERS INFORMATION</h4>
                    <div className='userinfList'>
                        <table cellPadding="0" cellSpacing="0">
                            <tr>
                                <td>First Name</td>
                                <td>Peyton</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>Kaise</td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td>01713040400</td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td>Peyton_kaiser@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>10 Aug, 1980</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='userInfBx'>
                    <h4>MORE INFORMATION</h4>
                    <div className='userinfList'>
                        <table cellPadding="0" cellSpacing="0">
                            <tr>
                                <td>Joining Date</td>
                                <td>27 Sept, 2022 09:10 PM</td>
                            </tr>
                            <tr>
                                <td>Reg Method</td>
                                <td>Email</td>
                            </tr>
                            <tr>
                                <td>Last Login</td>
                                <td>27 Sept, 2022 09:10 PM</td>
                            </tr>
                            <tr>
                                <td>Newsleter Subscription</td>
                                <td>Yes</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BuyerDetail