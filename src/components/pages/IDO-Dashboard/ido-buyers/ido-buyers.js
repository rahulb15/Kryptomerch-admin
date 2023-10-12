import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./ido-buyers.scss"
import Header from '../../../common-components/header/header'
import IdoLeftBar from '../ido-leftbar/ido-leftbar'
import { FaFilter } from "react-icons/fa"
import IdoTable from "./ido-table"
import Pagination from "../../../common-components/pagination/pagination"
import useTitle from '../../../../hooks/useTitle';

const IdoBuyers = () => {
    useTitle('IDO')

    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar />
            <div className='buyerFilter'>
                <div className='buyersHd'>IDO Buyers</div>
                <div className='buyersFlt'>
                    <FormGroup className='fltrInp'>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Search user..." />
                    </FormGroup>
                    <Button className='fltrBtn'><FaFilter /></Button>
                </div>
            </div>
            <div className='idoTable'>
                <IdoTable />
            </div>
            <div className='paginationBx'>
                <Pagination />
            </div>
        </div>
    )
}

export default IdoBuyers