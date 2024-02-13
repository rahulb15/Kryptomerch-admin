import React from 'react';
import { AiFillHome, AiOutlineLogout, AiTwotoneSetting } from "react-icons/ai";
import { FaSuitcase, FaTshirt, FaUserAlt } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import swal from 'sweetalert';

import "./marketplace-leftbar.scss";

const IdoLeftbar = (props) => {
    const [path, setPath] = React.useState("")
    const [active, setActive] = React.useState(false)
    const navigate = useNavigate()
    React.useEffect(() => {
        // setPath(window.location.pathname)
        switch (window.location.pathname) {
            case "/marketplace-dashboard":
                setActive(true)
                setPath(window.location.pathname)
                break;
            case "/creators":
                setActive(true)
                setPath(window.location.pathname)
                break;
            case "/collections":
                setActive(true)
                setPath(window.location.pathname)
                break;
            case "/nfts":
                setActive(true)
                setPath(window.location.pathname)
                break;
            case "/merchandise":
                setActive(true)
                setPath(window.location.pathname)
                break;
            case "/marketplace-setting":
                setActive(true)
                setPath(window.location.pathname)
                break;
            default:
                setActive(false)
                break;
        }
    }, [active])

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
                navigate("/")
            } else {
                swal("Your are not logged out!");
            }
        });
    }

    return (
        <div className='leftbar'>
            <Nav>
                <NavItem>
                    {/* <Link href="/marketplace-dashboard" className={path==='/marketplace-dashboard'?'active':''}><AiFillHome /> Dashboard</Link> */}
                    <Link to="/marketplace-dashboard" className={path === '/marketplace-dashboard' ? 'active' : props.name === 'marketplace-dashboard' ? 'active' : ''}><AiFillHome /> Dashboard</Link>
                </NavItem>
                <NavItem>
                    {/* <Link href="/creators" className={path==='/creators'?'active': props.name==='creators'?'active':''}><FaUserAlt /> Creators</Link> */}
                    <Link to="/creators" className={path === '/creators' ? 'active' : props.name === 'creators' ? 'active' : ''}><FaUserAlt /> Creators</Link>
                </NavItem>
                <NavItem>
                    {/* <NavLink href="/collections" className={path==='/collections'?'active':props.name==='collections'?'active':''}><FaSuitcase /> Collections</NavLink> */}
                    <Link to="/collections" className={path === '/collections' ? 'active' : props.name === 'collections' ? 'active' : ''}><FaSuitcase /> Collections</Link>
                </NavItem>
                <NavItem>
                    {/* <NavLink href="/nfts" className={path==='/nfts'?'active': props.name==='nfts'?'active':''} */}
                    <Link to="/nfts" className={path === '/nfts' ? 'active' : props.name === 'nfts' ? 'active' : ''}
                    ><GiCrownCoin /> Nfts</Link>
                </NavItem>
                <NavItem>
                    {/* <NavLink href="#" className={path==='/'?'active':''}
><FaTshirt /> Merchandise</NavLink> */}
                    <Link to="#" className={path === '/merchandise' ? 'active' : props.name === 'merchandise' ? 'active' : ''} ><FaTshirt /> Merchandise</Link>
                </NavItem>
                <NavItem>
                    {/* <NavLink href="/marketplace-setting" className={path==='/marketplace-setting'?'active':''} */}
                    {/* ><AiTwotoneSetting /> Settings</NavLink> */}
                    <Link to="/marketplace-setting" className={path === '/marketplace-setting' ? 'active' : props.name === 'marketplace-setting' ? 'active' : ''} ><AiTwotoneSetting /> Settings</Link>
                </NavItem>
                <NavItem>
                    <NavLink href="#"
                        onClick={logout}
                    ><AiOutlineLogout /> Logout</NavLink>
                    {/* <button className="logout-btn" onClick={logout}><AiOutlineLogout /> Logout</button> */}
                </NavItem>

            </Nav>
        </div>
    )
}

export default IdoLeftbar