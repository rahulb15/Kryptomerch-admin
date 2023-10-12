import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import { BsThreeDots } from "react-icons/bs";
import { MdContentCopy, MdBlock, MdDeleteOutline } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import ProjImg1 from "../../../../assets/images/proj-img1.png";
import Axios from "axios";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./collections.scss";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { FaFilter } from "react-icons/fa";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Pact from "pact-lang-api";
import swal from "sweetalert";
import { SpinnerCircular } from "spinners-react";
import Modal from "@mui/material";

const NETWORK_ID = "testnet04";
const CHAIN_ID = "1";

const API_HOST = `https://api.chainweb.com/chainweb/0.0/${NETWORK_ID}/chain/${CHAIN_ID}/pact`;

const IdoTable = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataId, setDataId] = useState("");

  const [collectionArray, setCollection] = useState([]);

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  useEffect(() => {
    getCollection();
  }, [page, search, refresh]);

  const getCollection = () => {
    const accessJWT = localStorage.getItem("accessAdminJWT");
    Axios.get(
      "/adminCollection/all-users-collection?page=" + page + "&limit=" + limit,
      {
        headers: {
          Authorization: accessJWT,
        },
        params: {
          search: search,
        },
      }
    )
      .then((response) => {
        if (response.data.status == "success") {
          console.log("colec", response);
          setCollection(response.data.data[0].paginatedResults);
          const total = response.data.data[0].totalCount / limit;
          setTotalPage(Math.ceil(total));
          // setCreator(response.data.creator)
          // setWalletAddress(response.data.creator.walletAddress.slice(0,9))
        }

        console.log("responasa", response);
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
  console.log("total", totalPage);

  const getAllCollectionRequest = async (data) => {
    console.log("datassssss", data);

    const accountName =
      "k:56609bf9d1983f0c13aaf3bd3537fe00db65eb15160463bb641530143d4e9bcf";
    const publicKey = accountName.slice(2, accountName.length);
    const guard = { keys: [publicKey], pred: "keys-all" };

    const a = accountName;

    const pactCode = `(free.merchfinal001.get-all-collections-request)`;
    const signCmd = {
      pactCode: pactCode,
      caps: [
        Pact.lang.mkCap(
          "GAS",
          "Capability to allow buying gas",
          "coin.GAS",
          []
        ),
      ],
      sender: a,
      gasLimit: 150000,
      chainId: CHAIN_ID,
      ttl: 28800,
      envData: {
        guard: guard,
      },
    }; //alert to sign tx
    console.log(signCmd, "signcmd");
    const cmd = await Pact.wallet.sign(signCmd);
    console.log("cmjj", cmd);

    const localRes = await fetch(`${API_HOST}/api/v1/local`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(cmd),
    });
    console.log(localRes, "localrp");
    const rawRes = await localRes;
    const resJSON = await rawRes.json();
    console.log("rawraw", resJSON);

    //    {
    //     "gas": 40016,
    //     "result": {
    //         "status": "success",
    //         "data": [
    //             "CollectionTen",
    //             "collectionFive",
    //             "collectionNine",
    //             "collectionOne",
    //             "collectionSeven",
    //             "collectionSix",
    //             "collectionThree",
    //             "collectionTwo"
    //         ]
    //     },
    //     "reqKey": "EO9zIrJR_J2pqIA-mUVBOZno1fUj_e6ypCF4aloiVHw",
    //     "logs": "wsATyGqckuIvlm89hhd2j4t6RMkCrcwJe_oeCYr7Th8",
    //     "metaData": {
    //         "publicMeta": {
    //             "creationTime": 1681873923,
    //             "ttl": 28800,
    //             "gasLimit": 150000,
    //             "chainId": "1",
    //             "gasPrice": 0.000001,
    //             "sender": "k:56609bf9d1983f0c13aaf3bd3537fe00db65eb15160463bb641530143d4e9bcf"
    //         },
    //         "blockTime": 1681873933212077,
    //         "prevBlockHash": "CAh1oUUzykbQy6FmnvW2iY_Epgzp_rly56Va9Ene5zM",
    //         "blockHeight": 3175061
    //     },
    //     "continuation": null,
    //     "txId": null
    // }
    if (resJSON.result.status === "success") {
      resJSON.result.data.map((item) => {
        console.log(item, "item");
        if (item === data.collectionName) {
          // console.log("true")
          launchCollection(item);
        }
        // getCollectionInfo(item)
      });

      //    const reqKey = await Pact.wallet.sendSigned(cmd, API_HOST)

      //  console.log(reqKey, "Reqkey");
      // const signedtxx = await Pact.fetch.listen( { listen: reqKey.requestKeys[0] } , API_HOST);
      //   console.log(signedtxx, "xxxxxxxxxxxxxx")
    }
  };

  const getCollectionInfo = async (data) => {
    const accountName =
      "k:56609bf9d1983f0c13aaf3bd3537fe00db65eb15160463bb641530143d4e9bcf";
    const publicKey = accountName.slice(2, accountName.length);
    const guard = { keys: [publicKey], pred: "keys-all" };

    const a = accountName;

    const pactCode = `(free.merchfinal001.get-collection-info "${data.collectionName}")`;
    const signCmd = {
      pactCode: pactCode,
      caps: [
        Pact.lang.mkCap(
          "GAS",
          "Capability to allow buying gas",
          "coin.GAS",
          []
        ),
      ],
      sender: a,
      gasLimit: 150000,
      chainId: CHAIN_ID,
      ttl: 28800,
      envData: {
        guard: guard,
      },
    }; //alert to sign tx
    console.log(signCmd, "signcmd");
    const cmd = await Pact.wallet.sign(signCmd);
    console.log("cmjj", cmd);

    const localRes = await fetch(`${API_HOST}/api/v1/local`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(cmd),
    });
    console.log(localRes, "localrp");
    const rawRes = await localRes;
    const resJSON = await rawRes.json();
    console.log("rawraw", resJSON);
    if (resJSON.result.status === "success") {
      const reqKey = await Pact.wallet.sendSigned(cmd, API_HOST);

      console.log(reqKey, "Reqkey");
      const signedtxx = await Pact.fetch.listen(
        { listen: reqKey.requestKeys[0] },
        API_HOST
      );
      console.log(signedtxx, "xxxxxxxxxxxxxx");
    }
  };

  const launchCollection = async (data) => {
    setDataId(data._id);
    setOpen(true);
    const accountName =
      "k:56609bf9d1983f0c13aaf3bd3537fe00db65eb15160463bb641530143d4e9bcf";
    const publicKey = accountName.slice(2, accountName.length);
    const guard = { keys: [publicKey], pred: "keys-all" };

    const a = accountName;

    // const pactCode=`(free.merchfinal001.launch-nft-collection "collectionOne")`
    const pactCode = `(free.merchfinal001.launch-nft-collection "${data.collectionName}")`;
    const signCmd = {
      pactCode: pactCode,
      caps: [
        Pact.lang.mkCap(
          "GAS",
          "Capability to allow buying gas",
          "coin.GAS",
          []
        ),
        Pact.lang.mkCap(
          "PASS",
          "Capability for owner",
          "free.merchfinal001.IS_ADMIN"
        ),
      ],
      sender: a,
      gasLimit: 150000,
      chainId: CHAIN_ID,
      ttl: 28800,
      envData: {
        guard: guard,
      },
    }; //alert to sign tx
    console.log(signCmd, "signcmd");
    const cmd = await Pact.wallet.sign(signCmd);
    console.log("cmjj", cmd);
    if (cmd) {
      const localRes = await fetch(`${API_HOST}/api/v1/local`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(cmd),
      });
      console.log(localRes, "localrp");
      const rawRes = await localRes;
      const resJSON = await rawRes.json();
      console.log("rawraw", resJSON);
      if (resJSON.result.status === "success") {
        const reqKey = await Pact.wallet.sendSigned(cmd, API_HOST);

        console.log(reqKey, "Reqkey");
        const signedtxx = await Pact.fetch.listen(
          { listen: reqKey.requestKeys[0] },
          API_HOST
        );
        console.log(signedtxx, "xxxxxxxxxxxxxx");
        if (signedtxx.result.status === "success") {
          handleApprove(data._id);
        } else {
          setOpen(false);
          swal("Error", "Collection is not active", "error");
        }
      } else {
        setOpen(false);
        swal("Error", "Collection is not active", "error");
      }
    } else {
      setOpen(false);
      swal("Error", "Wallet not connected", "error");
    }
  };

  const denyCollection = async (data) => {
    setDataId(data._id);
    setOpen(true);
    const accountName =
      "k:56609bf9d1983f0c13aaf3bd3537fe00db65eb15160463bb641530143d4e9bcf";
    const publicKey = accountName.slice(2, accountName.length);
    console.log("publicKeycw", publicKey);
    console.log("accountnamecw", accountName);
    const guard = { keys: [publicKey], pred: "keys-all" };

    const a = accountName;

    const pactCode = `(free.marketplacefinal002.deny-collection "${data.collectionName}")`;
    const signCmd = {
      pactCode: pactCode,
      caps: [
        Pact.lang.mkCap(
          "GAS",
          "Capability to allow buying gas",
          "coin.GAS",
          []
        ),
        Pact.lang.mkCap(
          "ADMIN",
          "Capability for owner",
          "free.marketplacefinal002.IS_ADMIN"
        ),
      ],
      sender: a,
      gasLimit: 150000,
      chainId: CHAIN_ID,
      ttl: 28800,
      envData: {
        "demothreeaccount-keyset": guard,
      },
    };
    console.log(signCmd, "signcmd");
    const cmd = await Pact.wallet.sign(signCmd);
    console.log("cmjj", cmd);
    if (cmd) {
      const localRes = await fetch(`${API_HOST}/api/v1/local`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(cmd),
      });
      console.log(localRes, "localrp");
      const rawRes = await localRes;
      const resJSON = await rawRes.json();
      console.log("rawraw", resJSON);
      if (resJSON.result.status === "success") {
        const reqKey = await Pact.wallet.sendSigned(cmd, API_HOST);

        console.log(reqKey, "Reqkey");
        const signedtxx = await Pact.fetch.listen(
          { listen: reqKey.requestKeys[0] },
          API_HOST
        );
        console.log(signedtxx, "xxxxxxxxxxxxxx");
        if (signedtxx.result.status === "success") {
          handleDeny(data._id);
        } else {
          setOpen(false);
          swal("Error", "Collection is not rejected", "error");
        }
      } else {
        setOpen(false);
        swal("Error", "Collection is not rejected", "error");
      }
    } else {
      setOpen(false);
      swal("Error", "Wallet not connected", "error");
    }
  };

  const handleApprove = (id) => {
    console.log("id", id);
    // e.preventDefault();
    //api call for suspend user
    const accessJWT = localStorage.getItem("accessAdminJWT");
    Axios.post(
      "/adminCollection/approveCollection",
      { _id: id, status: true },
      {
        headers: {
          Authorization: accessJWT,
        },
      }
    )
      .then((response) => {
        if (response.data.status == "success") {
          console.log("colec", response);
          setOpen(false);
          swal("Success", "Collection is Active Now", "success");
          setRefresh(!refresh);
        }

        console.log("responasa", response);
      })
      .catch((error) => {
        console.log("error2", error);
      });
  };

  const handleDeny = (id) => {
    console.log("id", id);
    // e.preventDefault();
    //api call for suspend user
    const accessJWT = localStorage.getItem("accessAdminJWT");
    Axios.post(
      "/adminCollection/denyCollection",
      { _id: id, status: false },
      {
        headers: {
          Authorization: accessJWT,
        },
      }
    )
      .then((response) => {
        if (response.data.status == "success") {
          console.log("colec", response);
          setOpen(false);
          swal("Success", "Collection is Rejected", "success");
          setRefresh(!refresh);
        }

        console.log("responasa", response);
      })
      .catch((error) => {
        console.log("error2", error);
      });
  };

  // const handleClose = () => {
  //     setOpen(false);
  //     // setRefresh(!refresh)
  //   };

  const ErrorShow = () => {
    swal(
      "Error",
      "You already submitted approval for this collection",
      "error"
    );
  };

  return (
    <React.Fragment>
      <div className="buyerFilter">
        <div className="buyersHd">Collections</div>
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
              <th width="80">Image</th>
              <th>Name</th>
              <th>Total Item</th>
              <th>Owners</th>
              <th>Total Volume</th>
              <th>Floor Price</th>
              <th>Created By</th>
              <th>Created On</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {collectionArray
              ? collectionArray.map((data) => {
                console.log("dataeeeeooo", data);
                return (
                  <tr>
                    <td>
                      <div className="projImg">
                        <img src={data.imageUrl} />
                      </div>
                    </td>
                    <td>
                      <span>{data.collectionName}</span>
                    </td>
                    <td>
                      <span>{data.nft_info.length}</span>
                    </td>
                    <td>
                      <span>149</span>
                    </td>
                    <td>
                      <span>2849.52</span>
                      <small>KDA</small>
                    </td>
                    <td>
                      <span>0.002</span>
                      <small>KDA</small>
                    </td>
                    <td>
                      <span>
                        {data.user_info.length ? (
                          data.user_info[0].name
                        ) : (
                          <div>--</div>
                        )}
                      </span>
                    </td>
                    <td>
                      {/* <span>21 December, 2022</span> */}
                      <span>
                        {new Date(data.createdDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                      {/* <small>10:54 AM</small> */}
                      <small>
                        {
                          new Date(data.createdDate)
                            .toLocaleDateString("en-US", {
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            })
                            .split(",")[1]
                        }
                      </small>
                    </td>
                    <td>
                      <Button
                        className="activeBtn"
                        style={{
                          backgroundColor: data.isActive
                            ? "#44ff44"
                            : "#ff4444",
                        }}
                      >
                        {dataId == data._id && open ? (
                          <SpinnerCircular
                            size={15}
                            thickness={100}
                            speed={100}
                            color="rgba(255, 255, 255, 0.5)"
                            secondaryColor="rgba(255, 255, 255, 0.5)"
                          />
                        ) : data.isActive ? (
                          "Active"
                        ) : (
                          "Inactive"
                        )}
                      </Button>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "10px" }}>
                        {data.isActive ? null : (
                          <>
                            <IconButton
                              style={{
                                backgroundColor: "#F2F2F2",
                                padding: "5px",
                                borderRadius: "5px",
                              }}
                              onClick={() =>
                                open ? ErrorShow() : launchCollection(data)
                              }
                            // launchCollection(data)}
                            >
                              <CheckIcon />
                            </IconButton>
                            <IconButton
                              style={{
                                backgroundColor: "#F2F2F2",
                                padding: "5px",
                                borderRadius: "5px",
                              }}
                              onClick={() =>
                                open ? ErrorShow() : denyCollection(data)
                              }
                            >
                              <CloseIcon />
                            </IconButton>
                          </>
                        )}

                        <Button className="actionBtn">
                          <BsThreeDots />
                          <div className="actionList">
                            <ul>
                              <li>
                                {" "}
                                <Link
                                  to={{
                                    pathname: "/collection-detail",
                                    search: `?id=${data._id}`,
                                  }}
                                >
                                  <AiOutlineEye /> View Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={{
                                    pathname: "/nfts-detail",
                                  }}
                                >
                                  <AiOutlineEye /> Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </Button>
                      </div>
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
      {/* {open ? (
        <div style={{ 
          position: "fixed", 
          top: "0", 
          left: "0", 
          width: "100%", 
          height: "100%", 
          backgroundColor: "rgba(0,0,0,0.5)", 
          zIndex: "9999",
          display: "flex",
          justifyContent: "center",
          alignItems: "center" 
          }}>
      <SpinnerCircular />
      </div>
      ) : null} */}
    </React.Fragment>
  );
};

export default IdoTable;
