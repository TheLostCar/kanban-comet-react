import React from 'react'
import { Card, CardHeader, CardBody, FormGroup, Label } from 'reactstrap';

const LogIn = () => {
    return (
        <div className="d-flex justify-content-center p-5 my-auto col-">
            <Card style="flex-basis: 536px;">
                <CardHeader className="text-center text-white" style="background-color: #ff6600;">
                    Log In
                </CardHeader>

                <CardBody className="px-5">
                    <form>


                        <FormGroup>
                            <Label for="exampleFormControlInput1">Email address</Label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="john.smith@example.com" />
                        </FormGroup>




                        <div className="form-row">
                            <FormGroup col className="form-group col">
                                <Label for="Password">Password</Label>
                                <input type="text" className="form-control" name="password" id="password"
                                    placeholder="password" />

                            </FormGroup>


                        </div>

                        <FormGroup>
                            <button type="submit" className="btn btn-outline-primary bn-primary d-block mx-auto">Log In</button>
                        </FormGroup>

                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default LogIn
