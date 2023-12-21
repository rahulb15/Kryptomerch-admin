import React from 'react';
import { FaFilter } from "react-icons/fa";
import { Button, FormGroup, Input } from 'reactstrap';
import useTitle from '../../../../hooks/useTitle';
import Header from '../../../common-components/header/header';
import IdoLeftBar from '../ido-leftbar/ido-leftbar';
import AddProjectModal from "./add-project";
import "./ido-projects.scss";
import IdoTable from "./ido-table";

const IdoProjects = () => {
    useTitle('IDO')

    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar />
            <div className='buyerFilter'>
                <div className='buyersHd'>Projects</div>
                <div className='buyersFlt'>
                    <FormGroup className='fltrInp'>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Search user..." />
                    </FormGroup>
                    <Button className='fltrBtn'><FaFilter /></Button>
                    {/* <Button className='addprojectBtn'>Add Project</Button> */}
                    <AddProjectModal />
                </div>
            </div>
            <div className='idoTable'>
                <IdoTable />
            </div>
            {/* <div className='paginationBx'>
                <Pagination />
            </div> */}
        </div>
    )
}

export default IdoProjects