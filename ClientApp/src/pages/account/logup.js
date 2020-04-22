import React, { Component } from 'react';
import { actAddUserRequest } from './../../actions/account';
import { connect } from 'react-redux';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col
} from "reactstrap";
import { Link } from 'react-router-dom';
class Logup extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: '',
            txtfullName: '',
            txtaddress: '',
            txtpassword: '',
            txtuserName: '',
            txtemail: '',
            txtphoneNumber: '',
            txtretypepassword: '',
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state.txtaddress);
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        var {id, txtpassword, txtphoneNumber, txtuserName, txtaddress, txtemail, txtfullName, txtretypepassword } = this.state;
        var users = {
           password:txtpassword,
           phoneNumber:txtphoneNumber,
           userName:txtuserName,
           address:txtaddress,
           email:txtemail,
           fullName:txtfullName
        }
        this.props.onAddproduct(users)
    }
    render() {
        var { txtpassword, txtphoneNumber, txtuserName, txtaddress, txtemail, txtfullName, txtretypepassword } = this.state;
        return (
            <>
                <div className="page-header clear-filter" filter-color="blue">
                    <div
                        className="page-header-image"
                        style={{
                            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
                        }}
                    ></div>
                    <div className="content">
                        <Container>
                            <Col className="ml-auto mr-auto" md="4">
                                <Card className="card-login card-plain">
                                    <Form onSubmit={this.onSubmit} className="form">
                                        <CardHeader className="text-center">
                                            <div className="logo-container">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/now-logo.png")}
                                                ></img>
                                            </div>
                                        </CardHeader>
                                        <CardBody>
                                            <InputGroup
                                            // className={
                                            //     // "no-border input-lg" +
                                            //     // (firstFocus ? " input-group-focus" : "")
                                            // }
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons users_circle-08"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="UserName..."
                                                    type="text"
                                                    name="txtuserName"
                                                    onChange={this.onChange}
                                                    value={txtuserName}
                                                ></Input>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons text_caps-small"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="FullName..."
                                                    type="text"
                                                    name="txtfullName"
                                                    value={txtfullName}
                                                    onChange={this.onChange}

                                                ></Input>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons text_caps-small"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="PhoneNumber..."
                                                    type="number"
                                                    name="txtphoneNumber"
                                                    value={txtphoneNumber}
                                                    onChange={this.onChange}

                                                ></Input>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons text_caps-small"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Example@gmail.com"
                                                    type="text"
                                                    name="txtemail"
                                                    value={txtemail}
                                                    onChange={this.onChange}
                                                ></Input>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons text_caps-small"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Address..."
                                                    type="text"
                                                    name="txtaddress"
                                                    value={txtaddress}
                                                    onChange={this.onChange}
                                                ></Input>
                                            </InputGroup>


                                            <InputGroup
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons text_caps-small"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Password..."
                                                    type="password"
                                                    name="txtpassword"
                                                    value={txtpassword}
                                                    onChange={this.onChange}
                                              
                                                ></Input>
                                            </InputGroup>
                                            <InputGroup
                                           
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons text_caps-small"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Retype Password..."
                                                    type="password"
                                                    name="txtretypepassword"
                                                    value={txtretypepassword}
                                                    onChange={this.onChange}
                                                
                                                ></Input>
                                            </InputGroup>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button
                                                block
                                                className="btn-round"
                                                color="info"
                                                size="lg"
                                            >
                                                Logup
                                    </Button>
                                            <div className="pull-left">
                                                <h6>
                                                    <Link to="/">
                                                        Login
                                                </Link>
                                                </h6>
                                            </div>

                                        </CardFooter>
                                    </Form>
                                </Card>
                            </Col>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddproduct: (users) => {
            dispatch(actAddUserRequest(users));
        }
    }
}

export default connect(null, mapDispatchToProps)(Logup);
