import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./marketplace-setting.scss";
import Header from "../../../common-components/header/header";
import IdoLeftBar from "../marketplace-leftbar/marketplace-leftbar";
//import { FaFilter } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import useTitle from "../../../../hooks/useTitle";
import { useSelector, useDispatch } from "react-redux";

const ChangePassword = (props) => {
  console.log("dddddddddddddddddddd", props);
  useTitle("Marketplace");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [oldPassword, setOldPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
  const [oldPasswordError, setOldPasswordError] = React.useState("");
  const { user } = useSelector((state) => state.adminUser);
  console.log("user", user);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 8) {
      setPasswordError(
        "Password should be minmum 8 letter and include lower and uppercase letter."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Password does not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 8) {
      setOldPasswordError(
        "Password should be minmum 8 letter and include lower and uppercase letter."
      );
    } else {
      setOldPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      passwordError === "" &&
      confirmPasswordError === "" &&
      oldPasswordError === ""
    ) {
      if (password === "" || confirmPassword === "" || oldPassword === "") {
        toast.error("Please fill all the fields", {
          position: "top-right",
        });
        return;
      }
      try {
        axios
          .post(`admin/changePassword?userId=${user._id}`, {
            oldPassword: oldPassword,
            newPassword: password,
            confirmPassword: confirmPassword,
          })
          .then(function (response) {
            console.log(response);
            if (response.data.status === "success") {
              toast.success(response.data.message, {
                position: "top-right",
              });

              setPassword("");
              setConfirmPassword("");
              setOldPassword("");
            } else {
              toast.error(response.data.message, {
                position: "top-right",
              });
            }

            // toast.success("Password changed successfully", {
            //     position: "top-right"
            // });

            // setPassword('')
            // setConfirmPassword('')
            // setOldPassword('')
          })
          .catch(function (error) {
            toast.error("Something went wrong", {
              position: "top-right",
            });

            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please fill all the fields", {
        position: "top-right",
      });
    }
  };

  console.log("...........", password, confirmPassword, oldPassword);
  console.log(
    "...........",
    passwordError,
    confirmPasswordError,
    oldPasswordError
  );

  return (
    <div className="bashBg">
      <Header />
      <IdoLeftBar />
      <div className="buyerFilter">
        <div className="buyersHd mb-2">Settings</div>
      </div>
      <div className="changepassBx">
        <div className="changepassInn">
          <div className="frmBx">
            <FormGroup>
              <Label for="exampleEmail">Old Password</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder=""
                value={oldPassword}
                onChange={handleOldPasswordChange}
              />
              {oldPasswordError && (
                <div
                  className="error"
                  style={{
                    display: passwordError.length > 0 ? "block" : "none",
                  }}
                >
                  {oldPasswordError}
                </div>
              )}
            </FormGroup>
          </div>
          <div className="frmBx">
            <FormGroup>
              <Label for="exampleEmail">New Password</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder=""
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <div
                  className="error"
                  style={{
                    display: passwordError.length > 0 ? "block" : "none",
                  }}
                >
                  {passwordError}
                </div>
              )}
            </FormGroup>
          </div>
          <div className="frmBx">
            <FormGroup>
              <Label for="exampleEmail">Confirm Password</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder=""
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {confirmPasswordError && (
                <div
                  className="error"
                  style={{
                    display: confirmPasswordError.length > 0 ? "block" : "none",
                  }}
                >
                  {confirmPasswordError}
                </div>
              )}
            </FormGroup>
          </div>
          <div className="passnote">
            Password should be minmum 8 letter and include lower and uppercase
            letter.
          </div>
          <div className="updateBtn">
            <Button onClick={handleSubmit}>Update</Button>
          </div>
        </div>
      </div>
      {/* <div className='changepassBx'>
                <div className='twofactBx'>
                    <h2>Two-Factor Verification</h2>
                    <p>Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code.<br/>You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>
                    <div className='updateBtn'><Button>Enable 2FA</Button></div>
                </div>
            </div> */}
    </div>
  );
};

export default ChangePassword;
