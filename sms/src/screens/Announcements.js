import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import {
//     CardActionArea,
//     CardMedia,
//     Button,
//     Modal,
//     makeStyles,
// } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GrAdd } from 'react-icons/gr'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllAnnouncements, addAnnouncement, deleteAnnouncement } from './../Actions/announcementActions'


class CardModal extends Component {
    
        // this.classes = useStyles();
        state = {
            modal: false,
        };
    

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    onDeleteClick = id => {
        this.props.deleteAnnouncement(id);
      }

    render() {
        const { announcement } = this.props;
        // const { open } = this.state;

        return (
            <div>
                {/* <CardActionArea onClick={this.handleOpen}> */}
                <div className='m-4'>
                    <Card sx={{ maxWidth: 275, maxHeight: 200, borderTop: 5, backgroundColor: 'lightblue' }}>
                        <CardContent>
                            <Typography variant="h5" className="truncate" component="div" sx={{ color: 'purple' }} >
                                {announcement.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} className="truncate" color="text.secondary">
                                {announcement.subtitle}
                            </Typography>
                            <Typography className="body2 truncate " variant="body2">
                                {announcement.message}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={this.toggle} > View </Button>
                            <Button onClick={this.onDeleteClick.bind(this, announcement._id)} > Delete </Button>
                        </CardActions>
                    </Card>
                </div>
                {/* </CardActionArea> */}
                {/* <Modal
                    open={open}
                    onClose={this.handleClose}
                //   className={this.classes.modal}
                >
                    <div >
                        <h2>{announcement.title}</h2>
                        <p>{announcement.description}</p>
                        <Button onClick={this.handleClose}>Close</Button>
                    </div>
                </Modal> */}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    backdrop={"static"}
                    key={announcement._id}
                >
                    <ModalHeader toggle={this.toggle}> {announcement.title} </ModalHeader>
                    <ModalBody>
                        <h2>{announcement.subtitle}</h2>
                        {announcement.message}
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}



class Announcements extends Component {

        // this.classes = useStyles();
        state = {
            modal2: false,
            title: "",
            subtitle: "",
            message: "",
            createdBy: ""
        };
    

    toggle2 = () => {
        this.setState({ modal2: !this.state.modal2 });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", this.state.title)
        formData.append("subtitle", this.state.subtitle)
        formData.append("message", this.state.message)
        formData.append("createdBy", this.state.createdBy)

        this.props.addAnnouncement(formData);
        

        this.setState({
            title: "",
            subtitle: "",
            message: "",
            createdBy: ""
        })
    }

    componentDidMount() {
        this.props.getAllAnnouncements()
    }

    render() {

        const { announcements } = this.props.announcement

        return (
            <div className='flex '>
                {/* Left Side */}
                < Sidebar />

                {/* Right Side */}
                < div className='grow' >

                    <Modal
                        isOpen={this.state.modal2}
                        toggle={this.toggle2}
                        backdrop={"static"}
                    >
                        <ModalHeader toggle={this.toggle2}> Apply for Registration </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for='title'> Title </Label>
                                    <Input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Title"
                                        className="mb-3"
                                        onChange={this.onChange}
                                    />
                                    <Label for='subtitle'> Subtitle </Label>
                                    <Input
                                        type="text"
                                        name="subtitle"
                                        id="subtitle"
                                        placeholder="Subtitle"
                                        className="mb-3"
                                        onChange={this.onChange}
                                    />
                                    <Label for='message'> Message </Label>
                                    <Input
                                        type="text"
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        className="mb-3"
                                        onChange={this.onChange}
                                    />
                                    <Label for='createdBy'> Created By </Label>
                                    <Input
                                        type="text"
                                        name="createdBy"
                                        id="createdBy"
                                        placeholder="Created By"
                                        className="mb-3"
                                        onChange={this.onChange}
                                    />
                                    <Button type="submit" color="dark" style={{ marginTop: '2rem' }} block>
                                        Send
                                    </Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>


                    <div className='headerBg text-center p-28 text-4xl font-bold '>
                        Announcements
                    </div>
                    <div className='text-right  '>
                        <Button onClick={this.toggle2} className='bg-white m-4'> <GrAdd /> </Button>
                    </div>

                    <div className='grid grid-cols-3 '>
                        {announcements.reverse().map((announcement) => (
                            <CardModal key={announcement._id} announcement={announcement} />
                        ))}
                    </div>
                </div>
            </div >
        )
    }
}

Announcements.propTypes = {
    getAllAnnouncements: PropTypes.func.isRequired,
    addAnnouncement: PropTypes.func.isRequired,
    deleteAnnouncement: PropTypes.func.isRequired,
    announcement: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    announcement: state.announcement,
})


export default connect(mapStateToProps, { getAllAnnouncements, addAnnouncement, deleteAnnouncement })(Announcements)


