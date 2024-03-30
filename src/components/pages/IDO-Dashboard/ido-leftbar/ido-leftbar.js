import React from "react";
import { AiFillHome, AiOutlineLogout, AiTwotoneSetting } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { TbArrowsLeftRight } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { Nav, NavItem, NavLink } from "reactstrap";
import swal from "sweetalert";

import "./ido-leftbar.scss";

const IdoLeftbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    swal({
      title: "Are you sure?",
      text: "Once logged out, you will not be able to access your account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("accessAdminJWT");
        localStorage.removeItem("persist:root");
        navigate("/");
      } else {
        swal("Your are not logged out!");
      }
    });
  };

  return (
    <div className="leftbar">
      <Nav>
        <NavItem>
          {/* <NavLink href="/ido-dashboard" className="active">
            <AiFillHome /> Dashboard
          </NavLink> */}
          <Link to="/ido-dashboard" className="active">
            <AiFillHome /> Dashboard
          </Link>
        </NavItem>
        <NavItem>
          {/* <NavLink href="/ido-buyers">
            <FaUserAlt /> IDO Buyers
          </NavLink> */}
          <Link to="/ido-buyers">
            <FaUserAlt /> IDO Buyers
          </Link>
        </NavItem>
        <NavItem>
          {/* <NavLink href="/ido-projects">
            <FiCodesandbox /> Projects
          </NavLink> */}
          <Link to="/ido-projects">
            <FiCodesandbox /> Projects
          </Link>
        </NavItem>
        <NavItem>
          {/* <NavLink href="/ido-transitions">
            <TbArrowsLeftRight /> Transactions
          </NavLink> */}
          <Link to="/ido-transitions">
            <TbArrowsLeftRight /> Transactions
          </Link>

        </NavItem>
        <NavItem>
          {/* <NavLink href="/ido-setting">
            <AiTwotoneSetting /> Settings
          </NavLink> */}
          <Link to="/ido-setting">
            <AiTwotoneSetting /> Settings
          </Link>

        </NavItem>
        <NavItem>
          {/* <NavLink href="#" onClick={logout}>
            <AiOutlineLogout /> Logout
          </NavLink> */}
          <Link to="#" onClick={logout}>
            <AiOutlineLogout /> Logout
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default IdoLeftbar;

