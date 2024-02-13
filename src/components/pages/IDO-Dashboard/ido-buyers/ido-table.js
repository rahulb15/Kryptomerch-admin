import React from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdBlock, MdContentCopy, MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

export default class IdoTable extends React.Component {
    render() {
        return (
            <Table borderless>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Tokens</th>
                        <th>Last Login</th>
                        <th>Account Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>PeytonKaiser</span>
                            <small>bc1qs5ss3xvjv... <MdContentCopy /> </small>
                        </td>
                        <td>
                            <span>Peyton_kaiser@gmail.com</span>
                            <small className='greenClr'>Verified</small>
                        </td>
                        <td>
                            <span>4,501</span>
                            <small>KDM</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="activeBtn">Active</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/buyer-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> Delete </Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>PeytonKaiser</span>
                            <small>bc1qs53xvjv... <MdContentCopy /></small>
                        </td>
                        <td>
                            <span>Peyton_kaiser@gmail.com</span>
                            <small className='greenClr'>Verified</small>
                        </td>
                        <td>
                            <span>4,501</span>
                            <small>KDM</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="activeBtn">Active</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/buyer-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> Delete </Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>PeytonKaiser</span>
                            <small>bc1qs53xvjv... <MdContentCopy /> </small>
                        </td>
                        <td>
                            <span>Peyton_kaiser@gmail.com</span>
                            <small className='greenClr'>Verified</small>
                        </td>
                        <td>
                            <span>4,501</span>
                            <small>KDM</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="activeBtn">Active</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/buyer-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> Delete </Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>PeytonKaiser</span>
                            <small>bc1qs53xvjv... <MdContentCopy /></small>
                        </td>
                        <td>
                            <span>Peyton_kaiser@gmail.com</span>
                            <small className='greenClr'>Verified</small>
                        </td>
                        <td>
                            <span>4,501</span>
                            <small>KDM</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="activeBtn">Active</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/buyer-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> Delete </Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>PeytonKaiser</span>
                            <small>bc1qs53xvjv... <MdContentCopy /></small>
                        </td>
                        <td>
                            <span>Peyton_kaiser@gmail.com</span>
                            <small className='greenClr'>Verified</small>
                        </td>
                        <td>
                            <span>4,501</span>
                            <small>KDM</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="activeBtn">Active</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/buyer-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> Delete </Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>PeytonKaiser</span>
                            <small>bc1qs53xvjv... <MdContentCopy /></small>
                        </td>
                        <td>
                            <span>Peyton_kaiser@gmail.com</span>
                            <small className='greenClr'>Verified</small>
                        </td>
                        <td>
                            <span>4,501</span>
                            <small>KDM</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="activeBtn">Active</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/buyer-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> Delete </Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>PeytonKaiser</span>
                            <small>bc1qs53xvjv... <MdContentCopy /></small>
                        </td>
                        <td>
                            <span>Peyton_kaiser@gmail.com</span>
                            <small className='greenClr'>Verified</small>
                        </td>
                        <td>
                            <span>4,501</span>
                            <small>KDM</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="activeBtn suspendBtn">Suspended</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/buyer-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> Delete </Link></li>
                                    </ul>
                                </div>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>PeytonKaiser</span>
                            <small>bc1qs53xvjv... <MdContentCopy /></small>
                        </td>
                        <td>
                            <span>Peyton_kaiser@gmail.com</span>
                            <small className='greenClr'>Verified</small>
                        </td>
                        <td>
                            <span>4,501</span>
                            <small>KDM</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="activeBtn">Active</Button>
                        </td>
                        <td>
                            <Button className="actionBtn">
                                <BsThreeDots />
                                <div className='actionList'>
                                    <ul>
                                        <li><Link to="/buyer-detail"><AiOutlineEye /> View Details</Link></li>
                                        <li><Link to="/"><MdBlock /> Suspend</Link></li>
                                        <li><Link to="/"><MdDeleteOutline /> Delete </Link></li>
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