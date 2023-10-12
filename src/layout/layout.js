import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from '../components/pages/sign-in/sign-in';
import ForgotPassword from '../components/pages/forgot-password/forgot-password';
import Verification from '../components/pages/verification/verification';
import ResetPassword from '../components/pages/reset-password/reset-password';
import ResetSuccessfully from '../components/pages/reset-successfully/reset-successfully';

/*IDO dashboard*/
import IDODashboard from '../components/pages/IDO-Dashboard/ido-dashboard/ido-dashboard';
import IDOBuyers from '../components/pages/IDO-Dashboard/ido-buyers/ido-buyers';
import BuyerDetail from '../components/pages/IDO-Dashboard/buyer-detail/buyer-detail';
import IdoProjects from '../components/pages/IDO-Dashboard/ido-projects/ido-projects';
import IdoTransitions from '../components/pages/IDO-Dashboard/ido-transactions/ido-transactions';
import TransitionsDetail from '../components/pages/IDO-Dashboard/transitions-detail/transitions-detail';
import Settings from '../components/pages/IDO-Dashboard/ido-setting/ido-setting';
import ProtectedRoute from "./protected.route"
/*marketplace dashboard*/
import MarketplaceDashboard from '../components/pages/Marketplace-Dashboard/marketplace-dashboard/marketplace-dashboard';
import Creators from '../components/pages/Marketplace-Dashboard/creators/creators';
import CreatorDetails from '../components/pages/Marketplace-Dashboard/creators-detail/creators-detail';
import Collections from '../components/pages/Marketplace-Dashboard/collections/collections';
import CollectionDetail from '../components/pages/Marketplace-Dashboard/collections-detail/collections-detail';
import Nfts from '../components/pages/Marketplace-Dashboard/nfts/nfts'
import NftsDetail from '../components/pages/Marketplace-Dashboard/nfts-detail/nfts-detail'
import MarketplaceSetting from '../components/pages/Marketplace-Dashboard/marketplace-setting/marketplace-setting'

const Layout = () => {
    return (
        <Routes>
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/verification" element={<Verification />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
            <Route exact path="/reset-sucessfully" element={<ResetSuccessfully />} />

            {/* IDO dashboard */}
            <Route exact path="/ido-dashboard" element={<ProtectedRoute><IDODashboard /></ProtectedRoute>} />
            <Route exact path="/ido-buyers" element={<IDOBuyers />} />
            <Route exact path="/buyer-detail" element={<BuyerDetail />} />
            <Route exact path="/ido-projects" element={<IdoProjects />} />
            <Route exact path='/ido-transitions' element={<IdoTransitions />} />
            <Route exact path='/transitions-detail' element={<TransitionsDetail />} />
            <Route exact path='/ido-setting' element={<Settings />} />

            {/* Marketplace dashboard */}
            <Route exact path="/marketplace-dashboard" element={<MarketplaceDashboard />} />
            <Route exact path="/creators" element={<Creators />} />
            <Route exact path="/creator-detail" element={<CreatorDetails />} />
            <Route exact path="/collections" element={<Collections />} />
            <Route exact path="/collection-detail" element={<CollectionDetail />} />
            <Route exact path="/nfts" element={<Nfts />} />
            <Route exact path="/nfts-detail" element={<NftsDetail />} />
            <Route exact path="/marketplace-setting" element={<MarketplaceSetting />} />
        </Routes>
    )
}

export default Layout