import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Homepage1 from "./../Images/Homepage2.jpg"
import { Grid, Link } from '@material-ui/core'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { addNewStudent } from './../Actions/studentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



export class Homepage extends Component {

  state = {
    firstName: '',
    lastName: '',
    gradeLevel: '',
    studentEmail: '',
    parentEmail: '',
    transcript: null,
    applicationLetter: null,
    modal: false
  }

  toggle = () => this.setState({ modal: !this.state.modal });

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
    formData.append("gradeLevel", this.state.gradeLevel)
    formData.append("studentEmail", this.state.studentEmail)
    formData.append("parentEmail", this.state.parentEmail)
    formData.append("applicationLetter", this.state.applicationLetter)
    formData.append("transcript", this.state.transcript)

    this.props.addNewStudent(formData);

    console.log(formData)

    this.setState({
      firstName: '',
      lastName: '',
      grade: '',
      studentEmail: '',
      parentEmail: '',
      transcript: null,
      appLetter: null,
    })
  }

  // componentDidMount() {
  //   this.props.addNewStudent()
  // }

  render() {
    return (
      <div className='grid grid-cols-2 ' >
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          backdrop={"static"}
        >
          <ModalHeader toggle={this.toggle}> Apply for Registration </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='firstName'> First Name </Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="FirstName"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for='lastName'> Last Name </Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="LastName"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for='grade'> Grade </Label>
                <Input
                  type="text"
                  name="gradeLevel"
                  id="gradeLevel"
                  placeholder="GradeLevel"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for='studentEmail'> Student Email </Label>
                <Input
                  type="email"
                  name="studentEmail"
                  id="studentEmail"
                  placeholder="Student Email"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for='parentEmail'> Parent Email </Label>
                <Input
                  type="email"
                  name="parentEmail"
                  id="parentEmail"
                  placeholder="Parent Email"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for='transcript'> Transcript </Label>
                <Input
                  type="file"
                  name="transcript"
                  id="transcript"
                  placeholder="Transcript"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for='appLetter'> Application Letter </Label>
                <Input
                  type="file"
                  name="applicationLetter"
                  id="applicationLetter"
                  placeholder="Application Letter"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Button type="submit" color="dark" style={{ marginTop: '2rem' }} block>
                  Apply
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>



        {/* Login form */}
        <div className='m-40'>
          <Grid>
            <Grid align='center'>
              {/* <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar> */}
              <h2> Login </h2>
            </Grid>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='email'> Email </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-3"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='password'> Password </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Link href="#" >
                Forgot Your Password?
              </Link>
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Login
              </Button>
            </Form>
          </Grid>
        </div>

        {/* Homepage Banner */}
        <div className=''>
          <div className='text-right mt-2 mr-10'>
            <Button color="dark" onClick={this.toggle}>
              Apply
            </Button>
          </div>

          <img src={Homepage1} style={{ height: 550, width: 550 }} className='rounded-2xl mt-8' />
        </div>
      </div>
    )
  }
}


Homepage.propTypes = {
  addNewStudent: PropTypes.func.isRequired,
  newStudent: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  newStudent: state.newStudent,

})

export default connect(mapStateToProps, { addNewStudent })(Homepage)
