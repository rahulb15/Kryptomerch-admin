import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./nfts.scss"
import Header from '../../../common-components/header/header'
import IdoLeftBar from '../marketplace-leftbar/marketplace-leftbar'
//import { HiArrowNarrowLeft } from "react-icons/hi"
//import { FaFilter } from "react-icons/fa"
//import { BsThreeDots, BsCheckCircle } from "react-icons/bs";
//import { MdContentCopy, MdMailOutline, MdBlock, MdDeleteOutline } from "react-icons/md"
//import CreaterThumb from '../../../../assets/images/creater-thumb.png'
//import Pagination from "../../../common-components/pagination/pagination"
import ColDetTable from './nfts-table'
import useTitle from '../../../../hooks/useTitle';

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