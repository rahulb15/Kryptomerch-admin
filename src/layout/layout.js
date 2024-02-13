import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import ForgotPassword from '../components/pages/forgot-password/forgot-password';
import ResetPassword from '../components/pages/reset-password/reset-password';
import ResetSuccessfully from '../components/pages/reset-successfully/reset-successfully';
import SignIn from '../components/pages/sign-in/sign-in';
import Verification from '../components/pages/verification/verification';

/*IDO dashboard*/
import BuyerDetail from '../components/pages/IDO-Dashboard/buyer-detail/buyer-detail';
import IDOBuyers from '../components/pages/IDO-Dashboard/ido-buyers/ido-buyers';
import IDODashboard from '../components/pages/IDO-Dashboard/ido-dashboard/ido-dashboard';
import IdoProjects from '../components/pages/IDO-Dashboard/ido-projects/ido-projects';
import Settings from '../components/pages/IDO-Dashboard/ido-setting/ido-setting';
import IdoTransitions from '../components/pages/IDO-Dashboard/ido-transactions/ido-transactions';
import TransitionsDetail from '../components/pages/IDO-Dashboard/transitions-detail/transitions-detail';
import ProtectedRoute from "./protected.route";
/*marketplace dashboard*/
import CollectionDetail from '../components/pages/Marketplace-Dashboard/collections-detail/collections-detail';
import Collections from '../components/pages/Marketplace-Dashboard/collections/collections';
import CreatorDetails from '../components/pages/Marketplace-Dashboard/creators-detail/creators-detail';
import Creators from '../components/pages/Marketplace-Dashboard/creators/creators';
import MarketplaceDashboard from '../components/pages/Marketplace-Dashboard/marketplace-dashboard/marketplace-dashboard';
import MarketplaceSetting from '../components/pages/Marketplace-Dashboard/marketplace-setting/marketplace-setting';
import NftsDetail from '../components/pages/Marketplace-Dashboard/nfts-detail/nfts-detail';
import Nfts from '../components/pages/Marketplace-Dashboard/nfts/nfts';

const Layout = () => {
    return (
        <Routes>
            <Route exact path="admin/sign-in" element={<SignIn />} />
            <Route path="/admin" element={<Navigate to="admin/sign-in" />} />
            <Route exact path="admin/forgot-password" element={<ForgotPassword />} />
            <Route exact path="admin/verification" element={<Verification />} />
            <Route exact path="admin/reset-password" element={<ResetPassword />} />
            <Route exact path="admin/reset-sucessfully" element={<ResetSuccessfully />} />

            {/* IDO dashboard */}
            <Route exact path="admin/ido-dashboard" element={<ProtectedRoute><IDODashboard /></ProtectedRoute>} />
            <Route exact path="admin/ido-buyers" element={<IDOBuyers />} />
            <Route exact path="admin/buyer-detail" element={<BuyerDetail />} />
            <Route exact path="admin/ido-projects" element={<IdoProjects />} />
            <Route exact path='admin/ido-transitions' element={<IdoTransitions />} />
            <Route exact path='admin/transitions-detail' element={<TransitionsDetail />} />
            <Route exact path='admin/ido-setting' element={<Settings />} />

            {/* Marketplace dashboard */}
            <Route exact path="admin/marketplace-dashboard" element={<MarketplaceDashboard />} />
            <Route exact path="admin/creators" element={<Creators />} />
            <Route exact path="admin/creator-detail" element={<CreatorDetails />} />
            <Route exact path="admin/collections" element={<Collections />} />
            <Route exact path="admin/collection-detail" element={<CollectionDetail />} />
            <Route exact path="admin/nfts" element={<Nfts />} />
            <Route exact path="admin/nfts-detail" element={<NftsDetail />} />
            <Route exact path="admin/marketplace-setting" element={<MarketplaceSetting />} />
        </Routes>
    )
}

export default Layout