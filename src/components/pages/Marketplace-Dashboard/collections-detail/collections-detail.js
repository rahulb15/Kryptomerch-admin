import Axios from "axios";
import Pact from "pact-lang-api";
import React, { useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdDeleteOutline, MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import swal from "sweetalert";
import CreaterThumb from '../../../../assets/images/creater-thumb.png';
import Header from '../../../common-components/header/header';
import Pagination from "../../../common-components/pagination/pagination";
import IdoLeftBar from '../marketplace-leftbar/marketplace-leftbar';
import ColDetTable from './collections-detail-table';
import "./collections-detail.scss";

const NETWORK_ID = "mainnet01";
const CHAIN_ID = "8";

const API_HOST = `https://api.chainweb.com/chainweb/0.0/${NETWORK_ID}/chain/${CHAIN_ID}/pact`;

const IdoBuyers = () => {
    const [collection, setCollection] = useState({})
    const [nftNumber, setNftNUmber] = useState("")
    const [refresh, setRefresh] = useState(false)
    const [account, setAccount] = useState("")

    useEffect(() => {
        getCollector()
    }, [refresh])

    const getCollector = () => {
        const search = window.location.search
        const params = new URLSearchParams(search)
        let foo = params.get('id')
        const accessJWT = localStorage.getItem('accessAdminJWT');
        Axios.post("/adminCollection/getCollectionById", { _id: foo }, {
            headers: {
                Authorization: accessJWT,
            },
        })
            .then((response) => {
                if (response.data.status == "success") {
                    setCollection(response.data.data[0])
                    setAccount(response.data.data[0].user_info[0].walletAddress)
                    setNftNUmber(response.data.data[0].nft_info.length)

                }
            }).catch((error) => {
                console.log("error2", error)
            }

            )
        // setCollectionList(filteredCollectionList)

    }

    const getAllCollectionRequest = async (account) => {
        const accountName = account;
        const publicKey = accountName.slice(2, accountName.length);
        const guard = { keys: [publicKey], pred: "keys-all", }
        const a = accountName
        const pactCode = `(free.kryptomerch-contract.get-all-collections-request)`
        const signCmd = {
            pactCode: pactCode,
            caps: [
                Pact.lang.mkCap("GAS", "Capability to allow buying gas", "coin.GAS", [])
            ]
            ,
            sender: a,
            gasLimit: 150000,
            chainId: CHAIN_ID,
            ttl: 28800,
            envData:
            {
                "guard": guard
            },
        }; //alert to sign tx
        const cmd = await Pact.wallet.sign(signCmd);

        const localRes = await fetch(`${API_HOST}/api/v1/local`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(cmd),
        });
        const rawRes = await localRes;
        const resJSON = await rawRes.json();
        if (resJSON.result.status === "success") {
            const reqKey = await Pact.wallet.sendSigned(cmd, API_HOST)
            const signedtxx = await Pact.fetch.listen({ listen: reqKey.requestKeys[0] }, API_HOST);
        }
    }

    const getCollectionInfo = async (account) => {
        const accountName = account;
        const publicKey = accountName.slice(2, accountName.length);
        const guard = { keys: [publicKey], pred: "keys-all", }
        const a = accountName
        const pactCode = `(free.kryptomerch-contract.get-collection-info "CollectionTen")`
        const signCmd = {
            pactCode: pactCode,
            caps: [
                Pact.lang.mkCap("GAS", "Capability to allow buying gas", "coin.GAS", [])
            ]
            ,
            sender: a,
            gasLimit: 150000,
            chainId: CHAIN_ID,
            ttl: 28800,
            envData:
            {
                "guard": guard
            },
        }; //alert to sign tx
        const cmd = await Pact.wallet.sign(signCmd);
        const localRes = await fetch(`${API_HOST}/api/v1/local`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(cmd),
        });
        const rawRes = await localRes;
        const resJSON = await rawRes.json();
        if (resJSON.result.status === "success") {
            const reqKey = await Pact.wallet.sendSigned(cmd, API_HOST)
            const signedtxx = await Pact.fetch.listen({ listen: reqKey.requestKeys[0] }, API_HOST);
        }
    }

    const launchCollection = async (account) => {
        const accountName = "k:700084d1bf377ffadf4571f38ad19caf0988d3a4be0b7669f5845df7c5246508";
        const publicKey = accountName.slice(2, accountName.length);
        const guard = { keys: [publicKey], pred: "keys-all", }
        const a = accountName
        // const pactCode=`(free.merchfinal001.launch-nft-collection "collectionOne")`
        const pactCode = `(free.kryptomerch-contract.launch-nft-collection "collectionOne")`
        const signCmd = {
            pactCode: pactCode,
            caps: [
                Pact.lang.mkCap("GAS", "Capability to allow buying gas", "coin.GAS", []),
                // Pact.lang.mkCap("PASS", "Capability for owner", "free.kryptomerch-contract.IS_ADMIN")
            ],
            sender: a,
            gasLimit: 150000,
            chainId: CHAIN_ID,
            ttl: 28800,
            envData:
            {
                "guard": guard
            },
        }; //alert to sign tx
        const cmd = await Pact.wallet.sign(signCmd);
        const localRes = await fetch(`${API_HOST}/api/v1/local`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(cmd),
        });
        const rawRes = await localRes;
        const resJSON = await rawRes.json();
        if (resJSON.result.status === "success") {
            const reqKey = await Pact.wallet.sendSigned(cmd, API_HOST)
            const signedtxx = await Pact.fetch.listen({ listen: reqKey.requestKeys[0] }, API_HOST);
        }
    }

    const handleSuspend = (id) => {
        // e.preventDefault();
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
                getAllCollectionRequest(account);
                // getCollectionInfo(account);
                launchCollection(account);
                //     Axios.post("/adminCollection/suspendCollection",{_id:id, status: true}, {
                //         headers: {
                //             Authorization: accessJWT,
                //         },
                //     })
                //     .then((response) => {
                //         if(response.data.status=="success"){
                //             console.log("colec",response)
                //             swal("Success", "Collection suspended successfully", "success");
                //             setRefresh(!refresh)
                //         }

                //         console.log("responasa",response)

                //         }).catch((error)=>{
                // console.log("error2",error)
                //         }
                //         )
            } else {
                swal("Your collection is safe!");
            }
        });
    };

    return (
        <div className='bashBg' >
            <Header />
            <IdoLeftBar name="collections" />
            <div className='buyerFilter mb-3'>
                <div className='buyersHd'>Collections</div>
                <div className='buyersFlt'>
                    <Link to="/creators" className='backBtn'><HiArrowNarrowLeft /> Back</Link>
                </div>
            </div>
            <div className='buyerdetOuter'>
                <div className='buyerBalBx'>
                    <div className='buyerBal_Left'>
                        <div className='creatfltBx'>
                            <i><img src={CreaterThumb} alt="" /></i>
                        </div>
                        <div className='creatfltBx'>
                            <span>Name</span>
                            <strong>{collection.collectionName}</strong>
                        </div>
                        <div className='creatfltBx'>
                            <span>Items</span>
                            {collection ? <strong>{nftNumber}</strong> : <div>--</div>}
                        </div>
                        <div className='creatfltBx'>
                            <span>Owners</span>
                            <strong>272</strong>
                        </div>
                        <div className='creatfltBx'>
                            <span>Total Volume</span>
                            <strong>2822.7 KDA</strong>
                        </div>
                        <div className='creatfltBx'>
                            <span>Floor Price</span>
                            <strong>4.50 KDA</strong>
                        </div>
                        <div className='creatfltBx'>
                            <Button className="activeBtn" style={{ backgroundColor: collection.isActive ? null : "#ff4444" }}>{collection.isActive ? "Active" : "Inactive"}</Button>
                        </div>
                        <td>

                        </td>
                    </div>
                    <div className='buyermailBx'>
                        <Button className="actionBtn">
                            <BsThreeDots />
                            <div className='actionList'>
                                <ul>
                                    <li><Link to="/buyer-detail"><MdMailOutline /> Send Email</Link></li>
                                    {/* <li><Link to= {`?id=${collection._id}`} onClick={handleSuspend.bind(this,collection._id)}><MdBlock /> Suspend</Link></li> */}
                                    <li><Link to="/nfts-detail"><MdDeleteOutline /> View Details</Link></li>
                                </ul>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='buyersFlt creatorSrch'>
                <FormGroup className='fltrInp'>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Search item..." />
                </FormGroup>
                <Button className='fltrBtn'><FaFilter /></Button>
            </div>
            <div className='idoTable'>
                <ColDetTable />
            </div>
            <div className='paginationBx'>
                <Pagination />
            </div>
        </div>
    )
}

export default IdoBuyers