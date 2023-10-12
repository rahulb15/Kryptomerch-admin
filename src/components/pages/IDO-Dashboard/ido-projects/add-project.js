import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, FormText } from 'reactstrap';

class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className='addprojModal'>
                <Button className='addprojectBtn' onClick={this.toggle}>Add Project</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal_Outer">
                    <ModalHeader className='projHdr' toggle={this.toggle}>Add New Project</ModalHeader>
                    <ModalBody>
                        <div className='modalBx'>
                            <div className='modalImg'>
                                <i></i>
                                <Button className='upldFile'>Choose File
                                    <input type="file" name='file' className='chosefile' />
                                </Button>
                            </div>
                            <div className='frmBxOuter'>
                                <div className='frmBxInn'>
                                    <div className='frmBx'>
                                        <FormGroup>
                                            <Label for="exampleEmail">Project Name</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className='frmBxInn'>
                                    <div className='frmBx'>
                                        <FormGroup>
                                            <Label for="exampleEmail">Registration Start</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                            <div className='frmBxOuter'>
                                <div className='frmBxInn'>
                                    <div className='frmBx'>
                                        <FormGroup>
                                            <Label for="exampleEmail">Total Items</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className='frmBxInn'>
                                    <div className='frmBx'>
                                        <FormGroup>
                                            <Label for="exampleEmail">WL Mint Price</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                            <div className='frmBxOuter'>
                                <div className='frmBxInn'>
                                    <div className='frmBx'>
                                        <FormGroup>
                                            <Label for="exampleEmail">Public Mint Price</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className='frmBxInn'>
                                    <div className='frmBx'>
                                        <FormGroup>
                                            <Label for="exampleEmail">Mint Date</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                            <div className='addProdBtnBx'>
                                <Button className='addprojBtn'>Add Project</Button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddModal;