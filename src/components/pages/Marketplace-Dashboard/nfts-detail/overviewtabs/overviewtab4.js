import React, { Component } from 'react'
import CollectImg1 from '../../../../../assets/images/collection-img1.png'
import CollectImg2 from '../../../../../assets/images/collection-img2.png'
import CollectImg3 from '../../../../../assets/images/collection-img3.png'
import CollectImg4 from '../../../../../assets/images/collection-img4.png'
import CollectImg5 from '../../../../../assets/images/collection-img5.png'
//import CollectImg6 from '../../../../../assets/images/collection-img6.png'

export default class OverviewTab1 extends Component {
    render() {
        return (
            <div>
                <div className='latestBidBx'>
                    <h3>History</h3>
                    <ul>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg1} alt="" /></i>
                                <strong>0x83c...aba2<span> accepted bid</span></strong>
                                <small>2 hours ago</small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>$16,760</small>
                            </div>
                        </li>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg2} alt="" /></i>
                                <strong>0x83c...aba2<span> listed for</span></strong>
                                <small>2 hours ago</small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>$16,760</small>
                            </div>
                        </li>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg3} alt="" /></i>
                                <strong>0x83c...aba2<span> listed for</span></strong>
                                <small>2 hours ago</small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>$16,760</small>
                            </div>
                        </li>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg4} alt="" /></i>
                                <strong>0x83c...aba2<span> listed for</span></strong>
                                <small>2 hours ago</small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>$16,760</small>
                            </div>
                        </li>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg5} alt="" /></i>
                                <strong>0x83c...aba2<span> listed for</span></strong>
                                <small>2 hours ago</small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>$16,760</small>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}