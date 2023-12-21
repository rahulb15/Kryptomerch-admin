import React from 'react';
import { FaFilter } from "react-icons/fa";
import { Button, FormGroup, Input } from 'reactstrap';
import useTitle from '../../../../hooks/useTitle';
import Header from '../../../common-components/header/header';
import Pagination from "../../../common-components/pagination/pagination";
import IdoLeftBar from '../ido-leftbar/ido-leftbar';
import "./ido-transactions.scss";
import TransactionsTable from "./transactions-table";

const IdoDashboard = () => {
    useTitle('IDO')

    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar />
            <div className='buyerFilter'>
                <div className='buyersHd'>Transactions</div>
                <div className='buyersFlt'>
                    <FormGroup className='fltrInp'>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Search by no, tokens, amount, name..." />
                    </FormGroup>
                    <Button className='fltrBtn'><FaFilter /></Button>
                </div>
            </div>
            <div className='idoTable'>
                <TransactionsTable />
            </div>
            <div className='paginationBx'>
                <Pagination />
            </div>
        </div>
    )
}

export default IdoDashboard