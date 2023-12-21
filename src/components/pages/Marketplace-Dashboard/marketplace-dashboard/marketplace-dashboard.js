import React from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { BsArrowDownRightCircleFill, BsArrowUpRightCircleFill, BsThreeDots } from "react-icons/bs";
import { FaKickstarterK, FaPencilAlt, FaTshirt, FaUsers } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";
import { MdBlock, MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import BuyerImg1 from '../../../../assets/images/buyerImg.png';
import MerchImg from '../../../../assets/images/merchandImg.png';
import Salegraph from '../../../../assets/images/sale-graph2.png';
import VisitGraph from '../../../../assets/images/visiter-graph.png';
import useTitle from '../../../../hooks/useTitle';
import Header from '../../../common-components/header/header';
import MarketplaceLeftBar from '../marketplace-leftbar/marketplace-leftbar';
import "./marketplace-dashboard.scss";

const IdoDashboard = () => {
    useTitle('Marketplace')

    return (
        <div className='bashBg' >
            <Header />
            <MarketplaceLeftBar />
            <div className='kdmRateOuter'>
                <div className='rateBxInn'>
                    <div className='ratetoHd'>
                        <i><FaKickstarterK /></i>
                        <h2>KDA Rate</h2>
                        <button><FaPencilAlt /></button>
                    </div>
                    <div className='ratevalue_percent'>
                        <span>+1,186.59%</span>
                        <i className='yelloBtn'><BsArrowUpRightCircleFill /></i>
                    </div>
                    <div className='kdaValue'>
                        299.58 KDM
                    </div>
                </div>
                <div className='rateBxInn'>
                    <div className='ratetoHd'>
                        <i><FaUsers /></i>
                        <h2>Creators</h2>
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
                        <i><GiCrownCoin /></i>
                        <h2>Total NFTs</h2>
                        <button><FaPencilAlt /></button>
                    </div>
                    <div className='ratevalue_percent'>
                        <span>+1,186.59%</span>
                        <i className='yelloBtn'><BsArrowUpRightCircleFill /></i>
                    </div>
                    <div className='kdaValue'>
                        100,000,000
                    </div>
                </div>
                <div className='rateBxInn'>
                    <div className='ratetoHd'>
                        <i><FaTshirt /></i>
                        <h2>Listed Merchandise</h2>
                        <button><FaPencilAlt /></button>
                    </div>
                    <div className='ratevalue_percent'>
                        <span>+486.21%</span>
                        <i><BsArrowDownRightCircleFill /></i>
                    </div>
                    <div className='kdaValue'>
                        46,541
                    </div>
                </div>
            </div>
            <div className='schdule_Outer'>
                <div className='salegraph'>
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
                <div className='visitergraph'>
                    <div className='graphHd'>
                        <h2>Marketplace Visitors</h2>
                        <FormGroup>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>This week</option>
                                <option>This Month</option>
                                <option>Last Month</option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div className='salegraphBx'>
                        <img src={VisitGraph} alt='' />
                    </div>
                </div>
            </div>
            <div className='buyerList_Outer'>
                <div className='topbyrBx'>
                    <h2>Top Sellers</h2>
                    <ul>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='topbyrBx'>
                    <h2>Top Buyers</h2>
                    <ul>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='topbyrBx'>
                    <h2>Top Creators</h2>
                    <ul>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k items &nbsp; 5.8m KDA</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>DarienBowman</strong>
                                <span>9.5k items &nbsp; 5.6m KDA</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='topbyrBx merchandiseBx'>
                    <h2>Top Merchandise</h2>
                    <ul>
                        <li>
                            <div className='buyInn'>
                                <i><img src={MerchImg} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={MerchImg} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={MerchImg} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={MerchImg} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={MerchImg} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={MerchImg} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>10.2k KDM</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='recAcitivity_Outer'>
                <div className='recavitivity'>
                    <div class="graphHd">
                        <h2>Recent Activity</h2>
                    </div>
                    <ul>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>1 edition minted by <span>DBCooper</span></span>
                            </div>
                            <div className='acttime'>12 min ago</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>1 edition minted by <span>DBCooper</span></span>
                            </div>
                            <div className='acttime'>12 min ago</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>1 edition minted by <span>DBCooper</span></span>
                            </div>
                            <div className='acttime'>12 min ago</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>1 edition minted by <span>DBCooper</span></span>
                            </div>
                            <div className='acttime'>12 min ago</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>1 edition minted by <span>DBCooper</span></span>
                            </div>
                            <div className='acttime'>12 min ago</div>
                        </li>
                        <li>
                            <div className='buyInn'>
                                <i><img src={BuyerImg1} alt="" /></i>
                                <strong>TamaraBeltran</strong>
                                <span>1 edition minted by <span>DBCooper</span></span>
                            </div>
                            <div className='acttime'>12 min ago</div>
                        </li>
                    </ul>
                </div>
                <div className='historyActBx'>
                    <div class="graphHd mb-2">
                        <h2>Merchandise History</h2>
                        <div className='fullHistBtnBx'>
                            <Button className='fullhistBtn'>See Full History</Button>
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>All</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                    <div className='transTable'>
                        <table cellPadding="0" cellSpacing="0" width="100%" className='table' border="0">
                            <tr>
                                <th>Merchandise</th>
                                <th>Price</th>
                                <th>Buyer</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className='merchImg'>
                                        <i><img src={BuyerImg1} alt="" /></i>
                                        <span>Txn000098</span>
                                        <small>Sept 27, 2022 10:37 AM</small>
                                    </div>
                                </td>
                                <td>
                                    <span>0.0025</span>
                                    <small>USD</small>
                                </td>
                                <td>
                                    <span>Patricia Avila</span>
                                    <small>bc1qkv38jf8ja...</small>
                                </td>
                                <td>
                                    <Button className='processBtn'>Processing</Button>
                                </td>
                                <td>
                                    <Button className="actionBtn">
                                        <BsThreeDots />
                                        <div className='actionList'>
                                            <ul>
                                                <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                                <li><Link to="/nfts-detail"><MdBlock /> Suspend</Link></li>
                                                <li><Link to="/nfts-detail"><MdDeleteOutline /> View Details</Link></li>
                                            </ul>
                                        </div>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='merchImg'>
                                        <i><img src={BuyerImg1} alt="" /></i>
                                        <span>Txn000098</span>
                                        <small>Sept 27, 2022 10:37 AM</small>
                                    </div>
                                </td>
                                <td>
                                    <span>0.0025</span>
                                    <small>USD</small>
                                </td>
                                <td>
                                    <span>Patricia Avila</span>
                                    <small>bc1qkv38jf8ja...</small>
                                </td>
                                <td>
                                    <Button className='shippedBtn'>Shipped</Button>
                                </td>
                                <td>
                                    <Button className="actionBtn">
                                        <BsThreeDots />
                                        <div className='actionList'>
                                            <ul>
                                                <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                                <li><Link to="/nfts-detail"><MdBlock /> Suspend</Link></li>
                                                <li><Link to="/nfts-detail"><MdDeleteOutline /> View Details</Link></li>
                                            </ul>
                                        </div>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='merchImg'>
                                        <i><img src={BuyerImg1} alt="" /></i>
                                        <span>Txn000098</span>
                                        <small>Sept 27, 2022 10:37 AM</small>
                                    </div>
                                </td>
                                <td>
                                    <span>0.0025</span>
                                    <small>USD</small>
                                </td>
                                <td>
                                    <span>Patricia Avila</span>
                                    <small>bc1qkv38jf8ja...</small>
                                </td>
                                <td>
                                    <Button className='canceldBtn'>Cancelled</Button>
                                </td>
                                <td>
                                    <Button className="actionBtn">
                                        <BsThreeDots />
                                        <div className='actionList'>
                                            <ul>
                                                <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                                <li><Link to="/nfts-detail"><MdBlock /> Suspend</Link></li>
                                                <li><Link to="/nfts-detail"><MdDeleteOutline /> View Details</Link></li>
                                            </ul>
                                        </div>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='merchImg'>
                                        <i><img src={BuyerImg1} alt="" /></i>
                                        <span>Txn000098</span>
                                        <small>Sept 27, 2022 10:37 AM</small>
                                    </div>
                                </td>
                                <td>
                                    <span>0.0025</span>
                                    <small>USD</small>
                                </td>
                                <td>
                                    <span>Patricia Avila</span>
                                    <small>bc1qkv38jf8ja...</small>
                                </td>
                                <td>
                                    <Button className='refundBtn'>Cancelled</Button>
                                </td>
                                <td>
                                    <Button className="actionBtn">
                                        <BsThreeDots />
                                        <div className='actionList'>
                                            <ul>
                                                <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                                <li><Link to="/nfts-detail"><MdBlock /> Suspend</Link></li>
                                                <li><Link to="/nfts-detail"><MdDeleteOutline /> View Details</Link></li>
                                            </ul>
                                        </div>
                                    </Button>
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