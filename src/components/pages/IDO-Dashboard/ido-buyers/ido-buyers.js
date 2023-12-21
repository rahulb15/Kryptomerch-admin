import React from 'react';
import { FaFilter } from "react-icons/fa";
import { Button, FormGroup, Input } from 'reactstrap';
import useTitle from '../../../../hooks/useTitle';
import Header from '../../../common-components/header/header';
import Pagination from "../../../common-components/pagination/pagination";
import IdoLeftBar from '../ido-leftbar/ido-leftbar';
import "./ido-buyers.scss";
import IdoTable from "./ido-table";

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