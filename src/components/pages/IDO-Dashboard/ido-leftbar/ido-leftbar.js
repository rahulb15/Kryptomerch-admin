import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { AiFillHome, AiTwotoneSetting, AiOutlineLogout } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { TbArrowsLeftRight } from "react-icons/tb";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

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
          <NavLink href="/ido-dashboard" className="active">
            <AiFillHome /> Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ido-buyers">
            <FaUserAlt /> IDO Buyers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ido-projects">
            <FiCodesandbox /> Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ido-transitions">
            <TbArrowsLeftRight /> Transactions
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ido-setting">
            <AiTwotoneSetting /> Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={logout}>
            <AiOutlineLogout /> Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default IdoLeftbar;
