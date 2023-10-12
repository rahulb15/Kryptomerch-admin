import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./ido-dashboard.scss"
import Header from '../../../common-components/header/header'
import IdoLeftBar from '../ido-leftbar/ido-leftbar'
import { FaKickstarterK, FaPencilAlt, FaUsers } from "react-icons/fa"
import { BsArrowDownRightCircleFill, BsArrowUpRightCircleFill } from "react-icons/bs"
import { AiFillDollarCircle } from "react-icons/ai"
import Salegraph from '../../../../assets/images/sale-graph.png'
import BuyerImg1 from '../../../../assets/images/buyer-image1.png'
import useTitle from '../../../../hooks/useTitle';

const IdoDashboard = () => {
    useTitle('IDO')

    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar />
            <div className='kdmRateOuter'>
                <div className='rateBxInn'>
                    <div className='ratetoHd'>
                        <i><FaKickstarterK /></i>
                        <h2>KDM Rate To KDA</h2>
                        <button><FaPencilAlt /></button>
                    </div>
                    <div className='ratevalue_percent'>
                        <span>+1,186.59%</span>
                        <i className='yelloBtn'><BsArrowUpRightCircleFill /></i>
                    </div>
                    <div className='kdaValue'>
                        0.93480975 KDA
                    </div>
                </div>
                <div className='rateBxInn'>
                    <div className='ratetoHd'>
                        <i><AiFillDollarCircle /></i>
                        <h2>KDM Rate To USD</h2>
                        <button><FaPencilAlt /></button>
                    </div>
                    <div className='ratevalue_percent'>
                        <span>+4.58%</span>
                        <i><BsArrowDownRightCircleFill /></i>
                    </div>
                    <div className='kdaValue'>
                        $3,172.21
                    </div>
                </div>
                <div className='rateBxInn'>
                    <div className='ratetoHd'>
                        <i><FaUsers /></i>
                        <h2>Registered Users</h2>
                        <button><FaPencilAlt /></button>
                    </div>
                    <div className='ratevalue_percent'>
                        <span>+2.41%</span>
                        <i className='yelloBtn'><BsArrowUpRightCircleFill /></i>
                    </div>
                    <div className='kdaValue'>
                        3,75,479
                    </div>
                </div>
                <div className='rateBxInn'>
                    <div className='ratetoHd'>
                        <i><FaKickstarterK /></i>
                        <h2>Total KDM Sold</h2>
                        <button><FaPencilAlt /></button>
                    </div>
                    <div className='ratevalue_percent'>
                        <span>+486.21%</span>
                        <i><BsArrowUpRightCircleFill /></i>
                    </div>
                    <div className='kdaValue'>
                        46,541.58
                    </div>
                </div>
            </div>
            <div className='schdule_Outer'>
                <div className='schdule_Left'>
                    <div className='schdule_Hd'>IDO Schedule</div>
                    <div className='saleList'>
                        <h2>Pre-Sale IDO <span className='yelloBg' >Running</span></h2>
                        <ul>
                            <li><span>Start at</span> 02 Dec, 2022 - 11:00 AM</li>
                            <li><span>Min purchase -</span> 0.35 KDM</li>
                            <li><span>End at </span>15 Jan, 2022 - 11:00 AM</li>
                            <li><span>Token Distribute -</span> 100,000,000</li>
                        </ul>
                    </div>
                    <div className='saleList last'>
                        <h2>Main IDO Sale <span>Upcoming</span></h2>
                        <ul>
                            <li><span>Start at</span> 02 Feb, 2023 - 11:00 AM</li>
                            <li><span>Min purchase</span> - 0.35</li>
                            <li><span>End at</span> 15 Mar, 2023 - 11:00 AM</li>
                            <li><span>Token Distribute</span> - 100,000,000</li>
                        </ul>
                    </div>
                    <div className='note'>*Time zone in Washington, DC, USA (GMT-4)</div>
                </div>
                <div className='schdule_Right'>
                    <div className='graphHd'>
                        <h2>Tokens Sale Graph</h2>
                        <FormGroup>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>This week</option>
                                <option>This Month</option>
                                <option>Last Month</option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div className='salegraphBx'>
                        <img src={Salegraph} alt='' />
                    </div>
                </div>
            </div>
            <div className='buyerList_Outer'>
                <div className='buyerList'>
                    <h2>Top Buyers</h2>
                    <ul>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='buyerList priceHist'>
                    <h2>KDM Price History</h2>
                    <ul>
                        <li>
                            <div className='buyInn'>
                                <strong>0.93480975 KDA</strong>
                                <span>$3,172.21</span>
                            </div>
                            <div className='buydate'>Sept 27, 2022</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <strong>0.93480975 KDA</strong>
                                <span>$3,172.21</span>
                            </div>
                            <div className='buydate'>Sept 27, 2022</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <strong>0.93480975 KDA</strong>
                                <span>$3,172.21</span>
                            </div>
                            <div className='buydate'>Sept 27, 2022</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <strong>0.93480975 KDA</strong>
                                <span>$3,172.21</span>
                            </div>
                            <div className='buydate'>Sept 27, 2022</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <strong>0.93480975 KDA</strong>
                                <span>$3,172.21</span>
                            </div>
                            <div className='buydate'>Sept 27, 2022</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <strong>0.93480975 KDA</strong>
                                <span>$3,172.21</span>
                            </div>
                            <div className='buydate'>Sept 27, 2022</div>
                        </li>
                    </ul>
                </div>
                <div className='transHistOuter'>
                    <div className='transHd'>
                        <div className='transHd_Left'>Transactions History</div>
                        <div className='fullHistBtnBx'>
                            <Button className='fullhistBtn'>See Full History</Button>
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Pending</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                    <div className='transTable'>
                        <table cellPadding="0" cellSpacing="0" width="100%" className='table' border="0">
                            <tr>
                                <th>Txn ID</th>
                                <th>Buyer</th>
                                <th>Tokens</th>
                                <th>Pay</th>
                                <th>Amount</th>
                            </tr>
                            <tr>
                                <td>
                                    <span>Txn000098</span>
                                    <small>Sept 27, 2022 10:37 AM</small>
                                </td>
                                <td>
                                    <span>LeslieSampson</span>
                                    <small>bc1qkv38jf8ja...</small>
                                </td>
                                <td>
                                    <span>685.52</span>
                                    <small>KDM</small>
                                </td>
                                <td>
                                    <span>0.93480975</span>
                                    <small>KDA</small>
                                </td>
                                <td>
                                    <span>589.21</span>
                                    <small>USD</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Txn000098</span>
                                    <small>Sept 27, 2022 10:37 AM</small>
                                </td>
                                <td>
                                    <span>LeslieSampson</span>
                                    <small>bc1qkv38jf8ja...</small>
                                </td>
                                <td>
                                    <span>685.52</span>
                                    <small>KDM</small>
                                </td>
                                <td>
                                    <span>0.93480975</span>
                                    <small>KDA</small>
                                </td>
                                <td>
                                    <span>589.21</span>
                                    <small>USD</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Txn000098</span>
                                    <small>Sept 27, 2022 10:37 AM</small>
                                </td>
                                <td>
                                    <span>LeslieSampson</span>
                                    <small>bc1qkv38jf8ja...</small>
                                </td>
                                <td>
                                    <span>685.52</span>
                                    <small>KDM</small>
                                </td>
                                <td>
                                    <span>0.93480975</span>
                                    <small>KDA</small>
                                </td>
                                <td>
                                    <span>589.21</span>
                                    <small>USD</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Txn000098</span>
                                    <small>Sept 27, 2022 10:37 AM</small>
                                </td>
                                <td>
                                    <span>LeslieSampson</span>
                                    <small>bc1qkv38jf8ja...</small>
                                </td>
                                <td>
                                    <span>685.52</span>
                                    <small>KDM</small>
                                </td>
                                <td>
                                    <span>0.93480975</span>
                                    <small>KDA</small>
                                </td>
                                <td>
                                    <span>589.21</span>
                                    <small>USD</small>
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