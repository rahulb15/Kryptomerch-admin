import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { fetchAllCreators } from '../../../redux/get-creators/getcreators.action';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = () => {
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [changePage, setChangePage] = useState(false)
  const dispatch = useDispatch();
  //console.log("page", page)
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem onClick={() => setPage(page - 1)}>
        <PaginationLink className='nextBtn' href="#" >
          Pre
        </PaginationLink>
      </PaginationItem>

      <PaginationItem onClick={() => setPage(page - 1)}>
        <PaginationLink href="#">
          {page}
        </PaginationLink>
      </PaginationItem>

      <PaginationItem onClick={() => setPage(page + 1)}>
        <PaginationLink href="#">
          {page + 1}
        </PaginationLink>
      </PaginationItem>

      <PaginationItem onClick={() => setPage(page + 1)}>
        <PaginationLink className='nextBtn' href="#" >
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
}

export default Example