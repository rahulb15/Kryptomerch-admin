import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import Header from '../../../common-components/header/header';
import IdoLeftBar from '../marketplace-leftbar/marketplace-leftbar';
import ColDetTable from './nfts-table';
import "./nfts.scss";

const IdoBuyers = () => {
    useTitle('Marketplace')
    // const [search , setSearch] = useState('')

    // const handleChanges = (e) => {
    //     setSearch(e.target.value)
    // }

    // console.log(search)

    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar />
            {/* <div className='buyerFilter'>
                <div className='buyersHd'>Nfts</div>
                <div className='buyersFlt'>
                    <FormGroup className='fltrInp'>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Search item..." value={search} onChange={handleChanges} />
                    </FormGroup>
                    <Button className='fltrBtn'><FaFilter /></Button>
                </div>
            </div> */}
            {/* <div className='idoTable'> */}
            <ColDetTable />
            {/* </div> */}
            {/* <div className='paginationBx'> */}
            {/* <Pagination /> */}
            {/* </div> */}
        </div>
    )
}

export default IdoBuyers