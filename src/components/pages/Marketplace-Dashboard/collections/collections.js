import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./collections.scss"
import Header from '../../../common-components/header/header'
import IdoLeftBar from'../marketplace-leftbar/marketplace-leftbar'
import {FaFilter} from "react-icons/fa"
import CollectionTable from "./collections-table"
import Pagination from "../../../common-components/pagination/pagination"
import useTitle from '../../../../hooks/useTitle';

const IdoBuyers = () => {
    useTitle('Marketplace')


    return (
        <div className = 'bashBg' >
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