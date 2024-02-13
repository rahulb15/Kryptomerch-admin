import axios from "axios";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import ProjImg1 from "../../../../assets/images/proj-img1.png";

const IdoTable = (props) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [nftList, setNftList] = React.useState([]);
  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    const accessJWT = localStorage.getItem("accessAdminJWT");
    if (props.tabId == "2" || props.tabId == "3") {
      axios
        .post(
          "/adminNft/get-nft-by-client-id?page=" + page + "&limit=" + limit,
          { id: props.creatorId },
          {
            headers: {
              Authorization: accessJWT,
            },
            params: {
              search: props.search,
            },
          }
        )
        .then((response) => {
          // if(response.data.status=="success"){
          // props.setCreator(response.data.creator)
          // props.setWalletAddress(response.data.creator.walletAddress.slice(0,9))
          // }
          setNftList(response.data.data[0].paginatedResults);
          const total = response.data.data[0].totalCount / limit;
          setTotalPage(Math.ceil(total));
          // console.log("responasa",response)
        })
        .catch((error) => {
          console.log("error2", error);
        });
    }
    else if (props.tabId == "4") {
      axios
        .post(
          "/adminCollection/getCollectionByClientID?page=" + page + "&limit=" + limit,
          { clientID: props.creatorId },
          {
            headers: {
              Authorization: accessJWT,
            },
            params: {
              search: props.search,
            },
          }
        )
        .then((response) => {
          setCollections(response.data.user[0].paginatedResults);
          const total = response.data.user[0].totalCount[0].count / limit;
          setTotalPage(Math.ceil(total));
          // console.log("responasa",response)
        })
        .catch((error) => {
          console.log("error2", error);
        }
        );
    }
  }, [props.tabId, page, props.search]);

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
    <>
      <Table borderless>
        <thead>
          <tr>
            <th>Image</th>
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
          {props.tabId === "2" &&
            nftList?.map((item, index) => {
              console.log("item", item);
              if (item?.onMarketplace === true) {
                return (
                  <tr key={index}>
                    <td>
                      <div className="projImg">
                        <img src={ProjImg1} alt="" />
                      </div>
                    </td>
                    <td>
                      <span>{item?.user_info.map((item) => item.name)}</span>
                    </td>
                    <td>
                      <span>{item?.creator}</span>
                    </td>
                    <td>
                      <span>{item?.creatorName}</span>
                    </td>
                    <td>
                      <span>{item?.sellingType}</span>
                    </td>
                    <td>
                      <span>{item?.nftPrice}</span>
                      <small>KDA</small>
                    </td>
                    <td>
                      <span>--</span>
                    </td>
                    <td>
                      <span>--</span>
                    </td>
                    <td>
                      <span>--</span>
                      <small>--</small>
                    </td>
                    <td>
                      <Button className="actionBtn">
                        <BsThreeDots />
                        <div className="actionList">
                          <ul>
                            <li>
                              <Link to="admin/nfts-detail">
                                <AiOutlineEye /> View Details
                              </Link>
                            </li>
                            <li>
                              <Link to="admin/nfts-detail">
                                <MdDeleteOutline /> Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Button>
                    </td>
                  </tr>
                );
              }
              // }) : props?.nftList?.map((item,index)=>{
              //     return(
              //         <tr key={index}>
              //         <td>
              //             <div className='projImg'>
              //                 <img src={ProjImg1} alt="" />
              //             </div>
              //         </td>
              //         <td>
              //             <span>{item?.name}</span>
              //         </td>
              //         <td>
              //             <span>{item?.creator}</span>
              //         </td>
              //         <td>
              //             <span>{item?.ownedBy}</span>
              //         </td>
              //         <td>
              //             <span>{item?.type}</span>
              //         </td>
              //         <td>
              //             <span>{item?.price}</span>
              //             <small>KDA</small>
              //         </td>
              //         <td>
              //             <span>--</span>
              //         </td>
              //         <td>
              //             <span>--</span>
              //         </td>
              //         <td>
              //             <span>27 Sept, 2022</span>
              //             <small>10:54 AM</small>
              //         </td>
              //         <td>
              //             <Button className="actionBtn">
              //                 <BsThreeDots />
              //                 <div className='actionList'>
              //                     <ul>
              //                         <li><Link to="/"><AiOutlineEye /> View Details</Link></li>
              //                         <li><Link to="/"><MdDeleteOutline /> Delete</Link></li>
              //                     </ul>
              //                 </div>
              //             </Button>
              //         </td>
              //     </tr>
              //     )
            })}
          {props.tabId === "3" &&
            nftList?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="projImg">
                      <img src={ProjImg1} alt="" />
                    </div>
                  </td>
                  <td>
                    <span>{item?.user_info.map((item) => item.name)}</span>
                  </td>
                  <td>
                    <span>{item?.creator}</span>
                  </td>
                  <td>
                    <span>{item?.creatorName}</span>
                  </td>
                  <td>
                    <span>{item?.sellingType}</span>
                  </td>
                  <td>
                    <span>{item?.nftPrice}</span>
                    <small>KDA</small>
                  </td>
                  <td>
                    <span>--</span>
                  </td>
                  <td>
                    <span>--</span>
                  </td>
                  <td>
                    <span>--</span>
                    <small>--</small>
                  </td>
                  <td>
                    <Button className="actionBtn">
                      <BsThreeDots />
                      <div className="actionList">
                        <ul>
                          <li>
                            <Link to="admin/nfts-detail">
                              <AiOutlineEye /> View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="admin/nfts-detail">
                              <MdDeleteOutline /> Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Button>
                  </td>
                </tr>
              )
            })}
          {props.tabId === "4" &&
            collections?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="projImg">
                      <img src={item.imageUrl} alt="" />
                    </div>
                  </td>
                  <td>
                    {/* <span>{item?.user_info.map((item) => item.name)}</span> */}
                    <span>{item?.collectionName}</span>
                  </td>
                  <td>
                    <span>{item?.creator}</span>
                  </td>
                  <td>
                    <span>{item?.user_info.map((item) => item.name)}</span>
                  </td>
                  <td>
                    <span>{item?.category}</span>
                  </td>
                  <td>
                    <span>{item?.nftPrice}</span>
                    <small>KDA</small>
                  </td>
                  <td>
                    <span>--</span>
                  </td>
                  <td>
                    <span>--</span>
                  </td>
                  <td>
                    <span>--</span>
                    <small>--</small>
                  </td>
                  <td>
                    <Button className="actionBtn">
                      <BsThreeDots />
                      <div className="actionList">
                        <ul>
                          <li>
                            <Link to="admin/nfts-detail">
                              <AiOutlineEye /> View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="admin/nfts-detail">
                              <MdDeleteOutline /> Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Button>
                  </td>
                </tr>
              )

            }
            )}
        </tbody>
      </Table>
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
    </>
  );
};

export default IdoTable;