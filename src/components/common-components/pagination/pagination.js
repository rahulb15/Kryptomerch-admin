import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = () => {
  const [page, setPage] = useState(1)

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