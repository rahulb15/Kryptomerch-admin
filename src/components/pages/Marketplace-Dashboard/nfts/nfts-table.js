import Axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, FormGroup, Input, Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import "./nfts.scss";

const IdoTable = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState("");
  const [nfts, setNft] = useState([]);

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getCollection();
  }, [page, search]);

  const getCollection = () => {
    const accessJWT = localStorage.getItem("accessAdminJWT");
    Axios.get("/adminNft/all-users-nft?page=" + page + "&limit=" + limit, {
      headers: {
        Authorization: accessJWT,
      },
      params: {
        search: search,
      },
    })
      .then((response) => {
        if (response.data.status == "success") {
          setNft(response.data.data[0].paginatedResults);
          const total = response.data.data[0].totalCount / limit;
          setTotalPage(Math.ceil(total));
          // setTotalPage(response.data.data[0].totalCount)
          // setCreator(response.data.creator)
          // setWalletAddress(response.data.creator.walletAddress.slice(0,9))
        }
      })
      .catch((error) => {
        console.log("error2", error);
      });
  };

  function decreasePage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function increasePage() {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }

  return (
    <React.Fragment>
      <div className="buyerFilter">
        <div className="buyersHd">Nfts</div>
        <div className="buyersFlt">
          <FormGroup className="fltrInp">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Search item..."
              value={search}
              onChange={handleChanges}
            />
          </FormGroup>
          <Button className="fltrBtn">
            <FaFilter />
          </Button>
        </div>
      </div>
      <div className="idoTable">
        <Table borderless>
          <thead>
            <tr>
              {/* <th width="100">Image</th> */}
              <th>Name</th>
              <th>Creator</th>
              <th>Owned By</th>
              <th>Type</th>
              <th>Price</th>
              <th>Bids</th>
              <th>Height Bid</th>
              <th>Posted On</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {nfts.length
              ? nfts.map((data) => {
                return (
                  <tr>
                    {/* <td>
        <div className='projImg'>
            <img src={ProjImg1} alt="" />
        </div>
    </td> */}
                    <td>
                      <span>{data.collectionName}</span>
                    </td>
                    <td>
                      <span>{data.creatorName}</span>
                    </td>
                    <td>
                      <span>{data.user_info[0].name}</span>
                    </td>
                    <td>
                      <span>{data.sellingType}</span>
                    </td>
                    <td>
                      <span>{data.nftPrice}</span>
                      <small>KDA</small>
                    </td>
                    <td>
                      <span>--</span>
                    </td>
                    <td>
                      <span>{data?.bidInfo ? data?.bidInfo?.bidPrice : "--"}</span>
                    </td>
                    <td>
                      <span>27s Sept, 2022</span>
                      <small>10:54 AM</small>
                    </td>
                    <td>
                      <Button className="actionBtn">
                        <BsThreeDots />
                        <div className="actionList">
                          <ul>
                            <li>
                              <Link
                                to={{
                                  pathname: "/nfts-detail",
                                  search: `?id=${data._id}`,
                                }}
                              >
                                <AiOutlineEye /> View Details
                              </Link>
                            </li>
                            <li>
                              <Link to="/nfts-detail">
                                <MdDeleteOutline /> Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Button>
                    </td>
                  </tr>
                );
              })
              : null}
          </tbody>
        </Table>
      </div>
      <div className="paginationBx">
        <Pagination aria-label="Page navigation example">
          <PaginationItem onClick={() => decreasePage()}>
            <PaginationLink className="nextBtn" href="#">
              Pre
            </PaginationLink>
          </PaginationItem>

          <PaginationItem onClick={() => decreasePage()}>
            <PaginationLink href="#" className="active">
              {page}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem onClick={() => increasePage()}>
            <PaginationLink href="#">{page + 1}</PaginationLink>
          </PaginationItem>

          <PaginationItem onClick={() => increasePage()}>
            <PaginationLink className="nextBtn" href="#">
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    </React.Fragment>
  );
};

export default IdoTable;
