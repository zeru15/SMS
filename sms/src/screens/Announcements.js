import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllAnnouncements, addAnnouncement } from './../Actions/announcementActions'


class CardModal extends Component {
    constructor(props) {
        super(props);
        // this.classes = useStyles();
        this.state = {
            modal: false,
        };
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    render() {
        const { announcement } = this.props;
        // const { open } = this.state;

        return (
            <div>
                {/* <CardActionArea onClick={this.handleOpen}> */}
                <div className='m-4'>
                <Card sx={{ maxWidth: 275, borderTop: 5, backgroundColor: 'lightblue' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ color: 'purple' }} >
                            {announcement.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {announcement.subtitle}
                        </Typography>
                        <Typography className="body2" variant="body2">
                            {announcement.message}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.toggle} > View </Button>
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


export class Announcements extends Component {

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
                    <div className='headerBg text-center p-28 text-4xl font-bold '>
                        Announcements
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
    announcement: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    announcement: state.announcement,
})


export default connect(mapStateToProps, { getAllAnnouncements, addAnnouncement })(Announcements)


