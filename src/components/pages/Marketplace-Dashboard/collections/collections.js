import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import Header from '../../../common-components/header/header';
import IdoLeftBar from '../marketplace-leftbar/marketplace-leftbar';
import CollectionTable from "./collections-table";

const IdoBuyers = () => {
    useTitle('Marketplace')

    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar />
            {/* <div className='buyerFilter'>
                <div className='buyersHd'>Collections</div>
                <div className='buyersFlt'>
                    <FormGroup className='fltrInp'>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Search collection...." />
                    </FormGroup>
                    <Button className='fltrBtn'><FaFilter /></Button>
                </div>
            </div> */}
            {/* <div className='idoTable'> */}
            <CollectionTable />
            {/* </div> */}
            {/* <div className='paginationBx'>
                <Pagination />
            </div> */}
        </div>
    )
}

export default IdoBuyers