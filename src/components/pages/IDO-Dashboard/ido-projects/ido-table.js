import React from 'react';
import { Button, Table } from 'reactstrap';
import ProjImg1 from "../../../../assets/images/proj-img1.png";

export default class IdoTable extends React.Component {
    render() {
        return (
            <Table borderless>
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Registration Start</th>
                        <th>Total Items</th>
                        <th>WL Mint Price</th>
                        <th>Public Mint Price</th>
                        <th>Mint Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                                <span>DBCooper</span>
                            </div>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <span>2,777</span>
                        </td>
                        <td>
                            <span>40</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>50</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="Edit_Btn">Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                                <span>DBCooper</span>
                            </div>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <span>2,777</span>
                        </td>
                        <td>
                            <span>40</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>50</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="Edit_Btn">Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='projImg'>
                                <img src={ProjImg1} alt="" />
                                <span>DBCooper</span>
                            </div>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <span>2,777</span>
                        </td>
                        <td>
                            <span>40</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>50</span>
                            <small>KDA</small>
                        </td>
                        <td>
                            <span>27 Sept, 2022</span>
                            <small>10:54 AM</small>
                        </td>
                        <td>
                            <Button className="Edit_Btn">Edit</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}