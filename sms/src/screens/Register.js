import React, { Component } from 'react'
import {
    Button,
} from 'reactstrap';
import Homepage1 from "./../Images/Homepage2.jpg"
import { Grid, Link } from '@material-ui/core'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { addStudent } from './../Actions/studentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



export class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        dateOfBirth: '',
        sex: '',
        nationality: '',
        region: '',
        city: '',
        subCity: '',
        kebele: '',
        houseNumber: '',
        height: '',
        weight: '',
        bloodType: '',
        eyeColor: '',
        medicalStatus: '',
        parentFirstName: '',
        parentLastName: '',
        parentEmail: '',
        parentPhone: '',
        img: '',

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("firstName", this.state.firstName)
        formData.append("lastName", this.state.lastName)
        formData.append("email", this.state.email)
        formData.append("password", this.state.password)
        formData.append("phone", this.state.phone)
        formData.append("dateOfBirth", this.state.dateOfBirth)
        formData.append("sex", this.state.sex)
        formData.append("nationality", this.state.nationality)
        formData.append("region", this.state.region)
        formData.append("city", this.state.city)
        formData.append("subCity", this.state.subCity)
        formData.append("kebele", this.state.kebele)
        formData.append("houseNumber", this.state.houseNumber)
        formData.append("height", this.state.height)
        formData.append("weight", this.state.weight)
        formData.append("bloodType", this.state.bloodType)
        formData.append("eyeColor", this.state.eyeColor)
        formData.append("medicalStatus", this.state.medicalStatus)
        formData.append("parentFirstName", this.state.parentFirstName)
        formData.append("parentLastName", this.state.parentLastName)
        formData.append("parentEmail", this.state.parentEmail)
        formData.append("parentPhone", this.state.parentPhone)
        formData.append("img", this.state.img)

        const reqBody = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            dateOfBirth: this.state.dateOfBirth,
            sex: this.state.sex,
            nationality: this.state.nationality,
            region: this.state.region,
            city: this.state.city,
            subCity: this.state.subCity,
            kebele: this.state.kebele,
            houseNumber: this.state.houseNumber,
            height: this.state.height,
            weight: this.state.weight,
            bloodType: this.state.bloodType,
            eyeColor: this.state.eyeColor,
            medicalStatus: this.state.medicalStatus,
            parentFirstName: this.state.parentFirstName,
            parentLastName: this.state.parentLastName,
            parentEmail: this.state.parentEmail,
            parentPhone: this.state.parentPhone,
            img: this.state.img,
        }

        this.props.addStudent(formData, reqBody);

        console.log(formData)

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            dateOfBirth: '',
            sex: '',
            nationality: '',
            region: '',
            city: '',
            subCity: '',
            kebele: '',
            houseNumber: '',
            height: '',
            weight: '',
            bloodType: '',
            eyeColor: '',
            medicalStatus: '',
            parentFirstName: '',
            parentLastName: '',
            parentEmail: '',
            parentPhone: '',
            img: null
        })
    }


    render() {
        return (
            <div className='grid grid-cols-2 ' >

                {/* Login form */}
                <div className=''>
                    <Grid>
                        <Grid align='center'>
                            {/* <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar> */}
                            <h2> Register </h2>
                        </Grid>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Row>
                                    <Col md={6} >
                                        <Label for='firstName'> First Name </Label>
                                        <Input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="First Name"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='lastName'> Last Name </Label>
                                        <Input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Last Name"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='email'> Email </Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='password'> Password </Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='phone'> Phone </Label>
                                        <Input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='dateOfBirth'> Date Of Birth </Label>
                                        <Input
                                            type="text"
                                            name="dateOfBirth"
                                            id="dateOfBirth"
                                            placeholder="Date Of Birth"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='sex'> Sex </Label>
                                        <Input
                                            type="text"
                                            name="sex"
                                            id="sex"
                                            placeholder="Sex"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='nationality'> Nationality </Label>
                                        <Input
                                            type="text"
                                            name="nationality"
                                            id="nationality"
                                            placeholder="Nationality"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='region'> Region </Label>
                                        <Input
                                            type="text"
                                            name="region"
                                            id="region"
                                            placeholder="Region"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='city'> City </Label>
                                        <Input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="City"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='subCity'> Sub City </Label>
                                        <Input
                                            type="text"
                                            name="subCity"
                                            id="subCity"
                                            placeholder="Sub City"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='kebele'> Kebele </Label>
                                        <Input
                                            type="text"
                                            name="kebele"
                                            id="kebele"
                                            placeholder="Kebele"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='houseNumber'> House Number </Label>
                                        <Input
                                            type="text"
                                            name="houseNumber"
                                            id="houseNumber"
                                            placeholder="House Number"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='height'> Height </Label>
                                        <Input
                                            type="text"
                                            name="height"
                                            id="height"
                                            placeholder="Height"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='weight'> Weight </Label>
                                        <Input
                                            type="text"
                                            name="weight"
                                            id="weight"
                                            placeholder="Weight"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='bloodType'> Blood Type </Label>
                                        <Input
                                            type="text"
                                            name="bloodType"
                                            id="bloodType"
                                            placeholder="Blood Type"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='eyeColor'> Eye Color </Label>
                                        <Input
                                            type="text"
                                            name="eyeColor"
                                            id="eyeColor"
                                            placeholder="Eye Color"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='medicalStatus'> Medical Status </Label>
                                        <Input
                                            type="text"
                                            name="medicalStatus"
                                            id="medicalStatus"
                                            placeholder="Medical Status"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='parentFirstName'> Parent First Name </Label>
                                        <Input
                                            type="text"
                                            name="parentFirstName"
                                            id="parentFirstName"
                                            placeholder="Parent First Name"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='parentLastName'> Parent Last Name </Label>
                                        <Input
                                            type="text"
                                            name="parentLastName"
                                            id="parentLastName"
                                            placeholder="Parent Last Name"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='parentEmail'> Parent Email </Label>
                                        <Input
                                            type="email"
                                            name="parentEmail"
                                            id="parentEmail"
                                            placeholder="Parent Email"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label for='parentPhone'> Parent Phone </Label>
                                        <Input
                                            type="text"
                                            name="parentPhone"
                                            id="parentPhone"
                                            placeholder="Parent Phone"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} >
                                        <Label for='img'> Image </Label>
                                        <Input
                                            type="file"
                                            name="img"
                                            id="img"
                                            placeholder="Image"
                                            className="mb-3"
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </Row>
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>
                    </Grid>
                </div>

                {/* Homepage Banner */}
                <div>

                    <img src={Homepage1} style={{ height: 550, width: 550 }} className='rounded-2xl mt-8' alt="Homepage Banner" />

                </div>
            </div>
        )
    }
}


Register.propTypes = {
    addStudent: PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    student: state.student,

})

export default connect(mapStateToProps, { addStudent })(Register)
