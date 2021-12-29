import React from 'react'
import { Card, CardHeader, CardBody, FormGroup, Label} from 'reactstrap';

function SignUp({ location }) {
    const email = location.state ? location.state.email : '';
    console.log(email)

    return (
        <div className="d-flex justify-content-center p-5 my-auto  col-">
            <Card className="card">
                <CardHeader className="card-header text-center bg-primary text-white">
                    Sign Up
                </CardHeader>

                <CardBody className="px-5">
                    <form>

                        <div className="form-row">
                            <FormGroup className="form-group col-12 col-sm-6">
                                <Label for="firstName">First Name</Label>
                                <input type="text" name="firstName" id="firstName" className="form-control" placeholder="John" />
                            </FormGroup>

                            <FormGroup className="form-group col-12 col-sm-6">
                                <Label for="lastName">Last Name</Label>
                                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Smith" />
                            </FormGroup>
                        </div>
                        <FormGroup className="form-group">
                            <Label for="signupEmailInput">Email address</Label>
                            <input type="text" name="signupEmailInput" id="signupEmailInput" className="form-control"
                                placeholder="john.smith@example.com" />
                        </FormGroup>




                        <div className="form-row">
                            <FormGroup className="form-group col-12 col-sm-6">
                                <Label for="Password">Password</Label>
                                <input type="password" className="form-control" name="password" id="password"
                                    placeholder="password" />

                            </FormGroup>

                            <FormGroup className="form-group col-12 col-sm-6">
                                <Label for="confirmPassword" className="invisible d-none d-sm-inline-block">Confirm
                                    Password</Label>
                                <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"
                                    placeholder="Confirm password" />
                            </FormGroup>
                        </div>
                        {/* 
                    <!-- <div className="form-group"> --> */}
                        <button type="submit" className="btn btn-primary d-block mx-auto">Sign Up</button>
                        {/* <!-- </div> --> */}

                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default SignUp
