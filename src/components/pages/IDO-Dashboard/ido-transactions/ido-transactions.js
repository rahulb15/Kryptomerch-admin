import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./ido-transactions.scss"
import Header from '../../../common-components/header/header'
import IdoLeftBar from '../ido-leftbar/ido-leftbar'
import { FaFilter } from "react-icons/fa"
import TransactionsTable from "./transactions-table"
import Pagination from "../../../common-components/pagination/pagination"
import useTitle from '../../../../hooks/useTitle';

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