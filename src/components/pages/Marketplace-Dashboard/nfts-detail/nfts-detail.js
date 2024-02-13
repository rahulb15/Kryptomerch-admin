import React from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Header from '../../../common-components/header/header';
import IdoLeftBar from '../marketplace-leftbar/marketplace-leftbar';
import HistoryAccordian from './historyaccordian';
import "./nfts-detail.scss";
import Overdetail from './overviewDetail';
import OverviewTabs from './overviewtabs/overviewTabs';

const IdoBuyers = () => {
    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar name='nfts' />
            <div className='buyerFilter mb-2'>
                <div className='buyersHd'>Nfts Details</div>
                <div className='buyersFlt'>
                    <Link to="admin/creators" className='backBtn'><HiArrowNarrowLeft /> Back</Link>
                </div>
            </div>
            <Overdetail />
            <div className='overviewTabouterBx'>
                <div className='overviewTabLeft'>
                    <OverviewTabs />
                </div>
                <div className='overviewtabRight'>
                    <HistoryAccordian />
                </div>
            </div>
        </div>
    )
}

export default IdoBuyers