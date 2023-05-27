import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from 'reactstrap'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllAnnouncements, addAnnouncement } from './../Actions/announcementActions'

export class Announcements extends Component {

    componentDidMount() {
        this.props.getAllAnnouncements()
    }

    render() {

        const { announcements } = this.props.announcement

        return (
            <div className='flex '>

                {/* Left Side */}
                <Sidebar />

                {/* Right Side */}
                <div className='grow'>
                    <div className='headerBg text-center p-28 text-4xl font-bold '>
                        Announcements
                    </div>
                    {announcements.map(announcement => {
                        return (
                            <div key={announcement._id} >
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
                                        <Button> View </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    })}

                </div>
            </div>
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