import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/account';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom';
// reactstrap components
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
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            firstFocus: false,
            lastForcus: false
        }
    }

    login = (e) => {
        e.preventDefault();
        this.props.actions.login(this.state.userName, this.state.password);
    }

    render() {
        const { userName, password, firstFocus, lastFocus } = this.state;

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
                                    <Form action="" className="form" method="">
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
                                                className={
                                                    "no-border input-lg" +
                                                    (firstFocus ? " input-group-focus" : "")
                                                }
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons users_circle-08"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="UserName..."
                                                    type="text"
                                                    onFocus={() => this.setState({ firstFocus: true })}
                                                    onBlur={() => this.setState({ firstFocus: false })}
                                                    value={userName}
                                                    onChange={e => this.setState({ userName: e.target.value })}
                                                ></Input>
                                            </InputGroup>
                                            <InputGroup
                                                className={
                                                    "no-border input-lg" +
                                                    (lastFocus ? " input-group-focus" : "")
                                                }
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons text_caps-small"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Password..."
                                                    type="password"
                                                    onFocus={() => this.setState({ firstFocus: true })}
                                                    onBlur={() => this.setState({ firstFocus: false })}
                                                    value={password}
                                                    onChange={e => this.setState({ password: e.target.value })}
                                                ></Input>
                                            </InputGroup>
                                        </CardBody>
                                        {
                                            this.props.account.error && (
                                                <div className="text-red">{this.props.account.error}</div>
                                            )
                                        }
                                        <CardFooter className="text-center">
                                            <Button
                                                block
                                                className="btn-round"
                                                color="info"
                                                href="#pablo"
                                                onClick={this.login}
                                                size="lg"
                                            >
                                                Login
                                        </Button>
                                            <div className="pull-left">
                                                <h6>
                                                    <Link to ="/dang-ky">
                                                        Create Account
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

function mapStateToProps(state) {
    return { account: state.account }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)
