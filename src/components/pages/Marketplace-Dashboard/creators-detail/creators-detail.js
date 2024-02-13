import Axios from "axios";
import dateFormat from "dateformat";
import React, { useEffect, useState } from "react";
import { BsCheckCircle, BsThreeDots } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import {
  MdBlock,
  MdContentCopy,
  MdDeleteOutline,
  MdMailOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";
import swal from "sweetalert";
import CreaterThumb from "../../../../assets/images/creater-thumb.png";
import Header from "../../../common-components/header/header";
import IdoLeftBar from "../marketplace-leftbar/marketplace-leftbar";
import CreatorTab from "./creatorTab";
import "./creators-detail.scss";

const IdoBuyers = () => {
  // useTitle('Marketplace')
  const [search, setSearch] = useState("");
  const [creator, setCreator] = useState({});
  const [creatorWalletAddress, setWalletAddress] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getCollector();
  }, [refresh]);

  const getCollector = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let foo = params.get("id");
    const accessJWT = localStorage.getItem("accessAdminJWT");
    Axios.post(
      "/creator/getCreator",
      { _id: foo },
      {
        headers: {
          Authorization: accessJWT,
        },
      }
    )
      .then((response) => {
        if (response.data.status == "success") {
          setCreator(response.data.creator);
          setWalletAddress(response.data.creator.walletAddress.slice(0, 9));
        }
      })
      .catch((error) => {
        console.log("error2", error);
      });
    // setCollectionList(filteredCollectionList)
  };

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  const onSubmits = (e) => {
    e.preventDefault();
    //api call for suspend user
    const accessJWT = localStorage.getItem("accessAdminJWT");
    swal({
      title: "Are you sure?",
      text: "Once suspended, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Axios.post(
          "/adminNft/active-deactive-user",
          { _id: creator._id, status: false },
          {
            headers: {
              Authorization: accessJWT,
            },
          }
        )
          .then((response) => {
            if (response.data.status == "success") {
              setRefresh(!refresh);
            }
          })
          .catch((error) => {
            console.log("error2", error);
          });
      } else {
        swal("Your user is safe!");
      }
    });
  };

  //     Axios.post(
  //         "/adminNft/active-deactive-user",
  //         { _id: creator._id, status: false },
  //         {
  //             headers: {
  //                 Authorization: accessJWT,
  //             },
  //         }
  //     )
  //         .then((response) => {
  //             if (response.data.status == "success") {
  //                 setRefresh(!refresh);
  //             }
  //             console.log("responasa", response);
  //         })
  //         .catch((error) => {
  //             console.log("error2", error);
  //         });
  // };

  const onEmailSubmit = (e) => {
    e.preventDefault();
    //api call for suspend user
    const accessJWT = localStorage.getItem("accessAdminJWT");
    Axios.post(
      "/admin/sendMail",
      { email: creator.email },
      {
        headers: {
          Authorization: accessJWT,
        },
      }
    )
      .then((response) => {
        if (response.data.status == "success") {
          swal("Email sent successfully!");
          setRefresh(!refresh);
        }
      })
      .catch((error) => {
        console.log("error2", error);
      });
  };

  return (
    <div className="bashBg">
      <Header />
      <IdoLeftBar name={"creators"} />
      <div className="buyerFilter mb-3">
        <div className="buyersHd">Creator Details</div>
        <div className="buyersFlt">
          <Link to="admin/creators" className="backBtn">
            <HiArrowNarrowLeft /> Back
          </Link>
        </div>
      </div>
      <div className="buyerdetOuter">
        <div className="buyerBalBx">
          <div className="buyerBal_Left">
            <div className="creatfltBx">
              <i>
                <img src={CreaterThumb} alt="" />
              </i>
            </div>
            <div className="creatfltBx">
              <span>Name</span>
              <strong>{creator.name}</strong>
            </div>
            <div className="creatfltBx">
              <span>Wallet Address</span>
              <strong>
                {creatorWalletAddress}... <MdContentCopy />{" "}
              </strong>
            </div>
            <div className="creatfltBx">
              <span>Last Login</span>
              {/* <span>{dateFormat(data.lastLogin, "mmmm dS, yyyy")}</span>
                <small>{dateFormat(data.lastLogin, "h:MM:ss TT")}</small> */}
              <strong>
                {dateFormat(creator.lastLogin, "mmmm dS, yyyy h:MM:ss TT")}
              </strong>
            </div>
            <div className="creatfltBx">
              <span>Email Address</span>
              <strong>{creator.email}</strong>
            </div>
            <div className="creatfltBx">
              <span>Account Status</span>
              <Button
                style={
                  creator.isActive
                    ? //   {background:"#00C851"}
                    null
                    : { background: "#ff4444" }
                }
              >
                {creator.isActive ? "Active" : "Suspended"}
              </Button>
            </div>
          </div>
          <div className="buyermailBx">
            <span>
              <BsCheckCircle /> Email
            </span>
            <Button className="actionBtn">
              <BsThreeDots />
              <div className="actionList">
                <ul>
                  <li>
                    <Link
                      to={`admin/creator-detail?id=${creator._id}`}
                      onClick={onEmailSubmit}
                    >
                      <MdMailOutline /> Send Email
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`admin/creator-detail?id=${creator._id}`}
                      onClick={onSubmits}
                    >
                      <MdBlock /> Suspend
                    </Link>
                  </li>
                  {/* <li><button style={{background:"none",border:"none",outline:"none",cursor:"pointer", color:"#000",padding:"0px"}}
                    onClick={onSubmits}

                                    ><MdBlock /> Delete</button></li> */}
                  <li>
                    <Link to="admin/nfts-detail">
                      <MdDeleteOutline /> View Details
                    </Link>
                  </li>
                </ul>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="creatdetTab">
        <div className="createTab">
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
          <CreatorTab creator={creator} search={search} />
        </div>
      </div>
    </div>
  );
};

export default IdoBuyers;
