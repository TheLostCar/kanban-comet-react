import React from 'react'
import { Card, CardHeader, CardBody, FormGroup, Label } from 'reactstrap';

const LogIn = () => {
    return (
        <div class="d-flex justify-content-center p-5 my-auto col-">
            <Card style="flex-basis: 536px;">
                <CardHeader class="text-center text-white" style="background-color: #ff6600;">
                    Log In
                </CardHeader>

                <CardBody class="px-5">
                    <form>


                        <FormGroup>
                            <Label for="exampleFormControlInput1">Email address</Label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                placeholder="john.smith@example.com" />
                        </FormGroup>




                        <div class="form-row">
                            <FormGroup cols class="form-group col">
                                <Label for="Password">Password</Label>
                                <input type="text" class="form-control" name="password" id="password"
                                    placeholder="password" />

                            </FormGroup>


                        </div>

                        <FormGroup>
                            <button type="submit" class="btn btn-outline-primary bn-primary d-block mx-auto">Log In</button>
                        </FormGroup>

                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default LogIn
