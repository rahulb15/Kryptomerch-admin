import React from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Header from '../../../common-components/header/header';
import IdoLeftBar from '../ido-leftbar/ido-leftbar';
import "./transitions-detail.scss";

const IdoDashboard = () => {
    return (
        <div className='bashBg'>
            <Header />
            <IdoLeftBar />
            <div className='buyerFilter'>
                <div className='buyersHd'>Transaction Details</div>
                <div className='buyersFlt'>
                    <Link to="admin/ido-buyers" className='backBtn'><HiArrowNarrowLeft /> Back</Link>
                </div>
            </div>
            <div className='buyerDetailBx'>
                <div className='buyerBalBx'>
                    <div className='buyerBal_Left'>
                        <div className='tokBalBx'>
                            <span>Tranx Date</span>
                            <strong>24 Sep, 2022 10:11PM</strong>
                        </div>
                        <div className='tokBalBx'>
                            <span>Action</span>
                            <Button className='approvebtn'>Approve Now</Button>
                        </div>
                        <div className='tokBalBx'>
                            <span>Tranx Approved Note</span>
                            <strong>By Admin at 24 Jul, 2018 10:12PM</strong>
                        </div>
                    </div>
                </div>
                <div className='userInfBx'>
                    <h4>TRANSACTION INFO</h4>
                    <div className='userinfList'>
                        <table cellPadding="0" cellSpacing="0">
                            <tr>
                                <td>Transaction Type</td>
                                <td>Purchase</td>
                            </tr>
                            <tr>
                                <td>Payment Getway</td>
                                <td>Kadena</td>
                            </tr>
                            <tr>
                                <td>Deposit From</td>
                                <td>0xbed9dA8f130aCC29F2580df183F3995eff78fb4D</td>
                            </tr>
                            <tr>
                                <td>Tx Hash</td>
                                <td>Tx156d3342d5c87d264f9359200xa058106537340385c87d264f93</td>
                            </tr>
                            <tr>
                                <td>Deposit To</td>
                                <td>0xbed9dA8f130aCC29F2580df183F3995eff78fb4D</td>
                            </tr>
                            <tr>
                                <td>Details</td>
                                <td>Tokens Purchase</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='userInfBx'>
                    <h4>TOKEN DETAILS</h4>
                    <div className='userinfList'>
                        <table cellPadding="0" cellSpacing="0">
                            <tr>
                                <td>Stage Name</td>
                                <td>IDO Phase 3</td>
                            </tr>
                            <tr>
                                <td>Contribution</td>
                                <td>
                                    <div className='contri'>
                                        <span>1.000 KDA</span>
                                        <small>$2540.65</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Tokens Added To</td>
                                <td>UD1020001</td>
                            </tr>
                            <tr>
                                <td>Token (T)</td>
                                <td>
                                    <div className='contri'>
                                        <span>4,780.00</span>
                                        <small>(4780 * 1)</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Bonus Tokens (B)</td>
                                <td>
                                    <div className='contri'>
                                        <span>0.00</span>
                                        <small>0.00</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Total Tokens</td>
                                <td>
                                    <div className='contri'>
                                        <span>4,780.00</span>
                                        <small>(T+B)</small>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdoDashboard