import Axios from "axios";
import dateFormat from "dateformat";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdContentCopy, MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { toast } from 'react-toastify';

const IdoTable = (props) => {
  const deleteCreators = (_id) => {
    const accessJWT = localStorage.getItem("accessAdminJWT");
    Axios.post(
      "/creator/deleteCreator",
      { _id: _id },
      {
        headers: {
          Authorization: accessJWT,
        },
      }
    )
      .then((response) => {
        if (response.data.status == "success") {
          console.log("colec", response);
          // setCollection(response.data.data)
          // setCreator(response.data.creator)
          // setWalletAddress(response.data.creator.walletAddress.slice(0,9))
        }
      })
      .catch((error) => {
        console.log("error2", error);
      });
  };

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    toast.success("Copied to clipboard", {
      position: "top-right"
    });
  }


  return (
    <Table borderless>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Owned</th>
          <th>On Sale</th>
          <th>Created</th>
          <th>Collections</th>
          <th>Merchandise</th>
          <th>Last Login</th>
          <th>Account Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props?.creators.map((data) => {
          return (
            <tr key={data._id}>
              <td>
                <span>{data.name}</span>
                <small>
                  {data.walletAddress.slice(0, 8)}...{" "}
                  <MdContentCopy onClick={() => copyToClipboard(data.walletAddress)} style={{ cursor: "pointer" }} />
                </small>
              </td>
              <td>
                <span>{data.email}</span>
                <small className="greenClr">Verified</small>
              </td>
              <td>
                <span>{data.owner_info ? data.owner_info.length : "--"}</span>
              </td>
              <td>
                <span>
                  {
                    data.nft_info.filter((data) => data.onMarketplace == true)
                      .length
                  }
                </span>
              </td>
              <td>
                <span>{data.nft_info.length}</span>
              </td>
              <td>
                <span>{data.collection_info.length}</span>
              </td>
              <td>
                <span>
                  {data.merchandise_info ? data.merchandise_info.length : "--"}
                </span>
              </td>
              <td>
                <span>{dateFormat(data.lastLogin, "mmmm dS, yyyy")}</span>
                <small>{dateFormat(data.lastLogin, "h:MM:ss TT")}</small>
              </td>
              <td>
                <Button
                  className="activeBtn"
                  style={{ backgroundColor: data.isActive ? null : "#ff4444" }}
                >
                  {data.isActive ? "Active" : "Suspended"}
                </Button>
              </td>
              <td>
                <Button className="actionBtn">
                  <BsThreeDots />
                  <div className="actionList">
                    <ul>
                      <li>
                        <Link
                          to={{
                            pathname: "/creator-detail",
                            search: `?id=${data._id}`,
                          }}
                        >
                          <AiOutlineEye /> View Details
                        </Link>
                      </li>
                      <li onClick={() => deleteCreators(data._id)}>
                        <a>
                          <MdDeleteOutline /> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default IdoTable;
