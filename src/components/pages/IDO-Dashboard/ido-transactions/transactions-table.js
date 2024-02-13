import React from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdBlock, MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

export default class IdoTable extends React.Component {
    render() {
        return (
            <Table borderless>
                <thead>
                    <tr>
                        <th>Tranx No</th>
                        <th>Tokens</th>
                        <th>Amount</th>
                        <th>USD Amount</th>
                        <th>From</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>TNX1002</span>
                            <small>2018-08-24 10:45PM</small>
                        </td>
                        <td>
                            <span>18,750</span>
                            <small>TWZ</small>
                        </td>
                        <td>
                            <span>200.62</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>5,475.14</span>
                            <small>USD</small>
                        </td>
                        <td>
                            <span>1F1T....4XQX</span>
                            <small>08 Jul, 18 10:20PM</small>
                        </td>
                        <td>
                            <Button className="purchaseBtn">Purchase</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/transitions-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> View Details</Link></li>
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