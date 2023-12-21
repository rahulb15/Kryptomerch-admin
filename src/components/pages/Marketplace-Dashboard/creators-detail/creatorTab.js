import classnames from 'classnames';
import React from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import CreatorTable from "./creators-detail-table";

const CreatorTab = (props) => {
  // console.log("propszzzzzzzzzzzzzzzzzzz",props)
  const [activeTab, setActiveTab] = React.useState('1');
  // const [nftList,setNftList]=React.useState([])
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

//   React.useEffect(()=>{
//     console.log("propszzzzzzzzzzzzzzzzzzz",props.creator._id)
//     const accessJWT = localStorage.getItem('accessAdminJWT');
//     axios.post("/adminNft/get-nft-by-client-id",{id:props.creator._id}, {
//       headers: {
//           Authorization: accessJWT,
//       },
//   })
//   .then((response) => {
//       // if(response.data.status=="success"){
//           // props.setCreator(response.data.creator) 
//           // props.setWalletAddress(response.data.creator.walletAddress.slice(0,9))
//       // }
//       setNftList(response.data.data)
//     console.log("responasa",response)

//       }).catch((error)=>{
// console.log("error2",error)
//       } 
//       )
//   },[props])

//   console.log("nftList",nftList)


  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Owned
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            On Sale
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Created
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Collections
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Merchandise
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className='idoTable'>
                  <CreatorTable />
              </div>
              {/* <div className='paginationBx'>
                  <Pagination />
              </div> */}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
              <Col sm="12">
                  <div className='idoTable'>
                      
                      <CreatorTable tabId={activeTab} creatorId={props.creator._id} search={props.search} />
                      
                  </div>
                  {/* <div className='paginationBx'>
                      <Pagination />
                  </div> */}
              </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
              <Col sm="12">
                  <div className='idoTable'>
                      <CreatorTable tabId={activeTab} creatorId={props.creator._id} search={props.search} />
                  </div>
                  {/* <div className='paginationBx'>
                      <Pagination />
                  </div> */}
              </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
              <Col sm="12">
                  <div className='idoTable'>
                      <CreatorTable tabId={activeTab} creatorId={props.creator._id} search={props.search} />
                  </div>
                  {/* <div className='paginationBx'>
                      <Pagination />
                  </div> */}
              </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
              <Col sm="12">
                  <div className='idoTable'>
                      <CreatorTable />
                  </div>
              </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default CreatorTab;

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);


//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       activeTab: '1'
//     };
//   }

//   toggle(tab) {
//     if (this.state.activeTab !== tab) {
//       this.setState({
//         activeTab: tab
//       });
//     }
//   }


//   //useEffect
//   componentDidMount() {
    
//     // axios.get('https://jsonplaceholder.typicode.com/posts')
//     axios.get('http://localhost:3001/adminNft/get-nft-by-client-id')
//       .then(res => {  
//         console.log("gggggggggggg",res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }




//   render() {

//     console.log("props",this.props);

//     return (
//       <div>
//         <Nav tabs>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '1' })}
//               onClick={() => { this.toggle('1'); }}
//             >
//               Owned
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '2' })}
//               onClick={() => { this.toggle('2'); }}
//             >
//               On Sale
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '3' })}
//               onClick={() => { this.toggle('3'); }}
//             >
//               Created
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '4' })}
//               onClick={() => { this.toggle('4'); }}
//             >
//               Collections
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '5' })}
//               onClick={() => { this.toggle('5'); }}
//             >
//               Merchandise
//             </NavLink>
//           </NavItem>
//         </Nav>
//         <TabContent activeTab={this.state.activeTab}>
//           <TabPane tabId="1">
//             <Row>
//               <Col sm="12">
//                 <div className='idoTable'>
//                     <CreatorTable />
//                 </div>
//                 <div className='paginationBx'>
//                     <Pagination />
//                 </div>
//               </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="2">
//             <Row>
//                 <Col sm="12">
//                     <div className='idoTable'>
//                         <CreatorTable />
//                     </div>
//                     <div className='paginationBx'>
//                         <Pagination />
//                     </div>
//                 </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="3">
//             <Row>
//                 <Col sm="12">
//                     <div className='idoTable'>
//                         <CreatorTable />
//                     </div>
//                     <div className='paginationBx'>
//                         <Pagination />
//                     </div>
//                 </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="4">
//             <Row>
//                 <Col sm="12">
//                     <div className='idoTable'>
//                         <CreatorTable />
//                     </div>
//                     <div className='paginationBx'>
//                         <Pagination />
//                     </div>
//                 </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="5">
//             <Row>
//                 <Col sm="12">
//                     <div className='idoTable'>
//                         <CreatorTable />
//                     </div>
//                     <div className='paginationBx'>
//                         <Pagination />
//                     </div>
//                 </Col>
//             </Row>
//           </TabPane>
//         </TabContent>
//       </div>
//     );
//   }
// }