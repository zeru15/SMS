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



export class Homepage extends Component {

  state = {
    modal: false
  }

  toggle = () => this.setState({ modal: !this.state.modal });

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
              </FormGroup>
              <FormGroup>
                <Label for='lastName'> Last Name </Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="LastName"
                  className="mb-3"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='grade'> Grade </Label>
                <Input
                  type="text"
                  name="grade"
                  id="grade"
                  placeholder="Grade"
                  className="mb-3"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='stuEmail'> Student Email </Label>
                <Input
                  type="email"
                  name="stuEmail"
                  id="stuEmail"
                  placeholder="Student Email"
                  className="mb-3"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='parEmail'> Parent Email </Label>
                <Input
                  type="email"
                  name="parEmail"
                  id="parEmail"
                  placeholder="Parent Email"
                  className="mb-3"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='transcript'> Transcript </Label>
                <Input
                  type="file"
                  name="transcript"
                  id="transcript"
                  placeholder="Transcript"
                  className="mb-3"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='appLetter'> Application Letter </Label>
                <Input
                  type="textarea"
                  rows="5"
                  name="appLetter"
                  id="appLetter"
                  placeholder="Application Letter"
                  className="mb-3"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Apply
              </Button>
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
              Register
            </Button>
          </div>

          <img src={Homepage1} style={{ height: 550, width: 550 }} className='rounded-2xl mt-8' />
        </div>
      </div>
    )
  }
}

export default Homepage
