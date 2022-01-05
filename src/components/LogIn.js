import React from 'react'
import { Card, CardHeader, CardBody, FormGroup, Label } from 'reactstrap';

const LogIn = () => {
    return (
        <div className="d-flex justify-content-center p-5 my-auto col-">
            <Card style={{ flexBasis: "536px" }}>
                <CardHeader className="text-center text-white" style={{ backgroundColor: "#ff6600" }}>
                    Log In
                </CardHeader>

                <CardBody className="px-5">
                    <form>


                        <FormGroup>
                            <Label for="email">Email</Label>
                            <input type="text" className="form-control" id="email"
                                placeholder="john.smith@example.com" />
                        </FormGroup>




                        <div className="form-row">
                            <FormGroup className="form-group col">
                                <Label for="password">Password</Label>
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
