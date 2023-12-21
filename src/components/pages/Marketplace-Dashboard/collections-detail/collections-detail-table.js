import React from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import ProjImg1 from "../../../../assets/images/creater-thumb.png";

export default class IdoTable extends React.Component {
    render() {
        return (
            <Table borderless>
                <thead>
                    <tr>
                        <th width="100">Image</th>
                        <th>Name</th>
                        <th>Creator</th>
                        <th>Owned By</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Bids</th>
                        <th>Height Bid</th>
                        <th>Posted On</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                            </div>
                        </td>
                        <td>
                            <span>KDA Punks #584</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>Fixed Price</span>
                        </td>
                        <td>
                            <span>21.56</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>--</span>
                        </td>
                        <td>
                            <span>--</span>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/nfts-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/nfts-detail"><MdDeleteOutline /> Delete</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                            </div>
                        </td>
                        <td>
                            <span>KDA Punks #584</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>Fixed Price</span>
                        </td>
                        <td>
                            <span>21.56</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>19</span>
                        </td>
                        <td>
                            <span>56.02</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/nfts-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/nfts-detail"><MdDeleteOutline /> Delete</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                            </div>
                        </td>
                        <td>
                            <span>KDA Punks #584</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>Fixed Price</span>
                        </td>
                        <td>
                            <span>21.56</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>--</span>
                        </td>
                        <td>
                            <span>--</span>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/nfts-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/nfts-detail"><MdDeleteOutline /> Delete</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                            </div>
                        </td>
                        <td>
                            <span>KDA Punks #584</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>Fixed Price</span>
                        </td>
                        <td>
                            <span>21.56</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>19</span>
                        </td>
                        <td>
                            <span>56.02</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/nfts-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/nfts-detail"><MdDeleteOutline /> Delete</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                            </div>
                        </td>
                        <td>
                            <span>KDA Punks #584</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>Fixed Price</span>
                        </td>
                        <td>
                            <span>21.56</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>--</span>
                        </td>
                        <td>
                            <span>--</span>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/nfts-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/nfts-detail"><MdDeleteOutline /> Delete</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                            </div>
                        </td>
                        <td>
                            <span>KDA Punks #584</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>KDA Punks</span>
                        </td>
                        <td>
                            <span>Fixed Price</span>
                        </td>
                        <td>
                            <span>21.56</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>19</span>
                        </td>
                        <td>
                            <span>56.02</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/nfts-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/nfts-detail"><MdDeleteOutline /> Delete</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}