import React, { Component } from 'react'
import { FaEarlybirds, FaRegHeart, FaTshirt } from "react-icons/fa"
import { HiCheckCircle, HiEye, HiOutlineRefresh, HiShare } from "react-icons/hi"
import overviewDetImg from '../../../../assets/images/detail-thumb.png'

export default class OverviewDetail extends Component {
    render() {
        return (
            <div>
                <div className='overDet_Outer'>
                    <div className='overDet_Left'>
                        <img src={overviewDetImg} alt="" />
                        <div className='tshirtIcon'><FaTshirt /></div>
                    </div>
                    <div className='overDet_Right'>
                        <div className='overviewTitl bold'>
                            <span><FaEarlybirds /></span>&nbsp;
                            John Deo &nbsp;
                            <i><HiCheckCircle /></i>
                        </div>
                        <div className='overviewName bold'>KDA Punks #584</div>
                        <div className='overviewOwnerOuter'>
                            <div className='overwOwner'>
                                <a href='/marketplace/create-owned'>
                                    <i></i>
                                    <span>Creator</span>
                                    <strong>John Deo</strong>
                                </a>
                            </div>
                            <div className='overwOwner'>
                                <a href='/marketplace/create-owned'>
                                    <i></i>
                                    <span>Creator</span>
                                    <strong>John Deo</strong>
                                </a>
                            </div>
                        </div>
                        <div className='viewsBx'>
                            <div className='view'>
                                <a href=''>
                                    <i><HiEye /></i>
                                    458 views
                                </a>
                            </div>
                            <div className='view'>
                                <a href=''>
                                    <i><FaRegHeart /></i>
                                    189
                                </a>
                            </div>
                            <div className='view'>
                                <a href=''>
                                    <i><HiShare /></i>
                                    Share
                                </a>
                            </div>
                            <div className='view'>
                                <a href=''>
                                    <i><HiOutlineRefresh /></i>
                                    Refresh
                                </a>
                            </div>
                        </div>
                        <div className='saleendOuter'>
                            <div className='saleendDate'>Sale ends August 25, 2022 at 4:45pm GMT+5:30</div>
                            <div className='saleendTimer'></div>
                            <div className='bidBxOuter'>
                                <div className='bidBx'>
                                    <small>From</small>
                                    <strong>21.58 KDA</strong>
                                    <span>$1,063</span>
                                </div>
                                <div className='bidBx'>
                                    <small>Highest Floor bid</small>
                                    <strong>12.42 KDA</strong>
                                    <span>by 0x576fa468c...8598</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}