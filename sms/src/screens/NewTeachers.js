import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getNewTeachers, approveNewTeacher, addTeacher } from './../Actions/teacherActions';
import { registerUser, rejectUser } from './../Actions/authActions';
// import { approveNewStudent } from './../Actions/studentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fabClasses } from '@mui/material';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export class NewStudents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            modal: false,
            modal2: false
        };
    }

    // toggle = () => this.setState({ modal: !this.state.modal });

    // toggle2 = () => this.setState({ modal2: !this.state.modal2 });

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    handleChangeIndex = (index) => {
        this.setState({ value: index });
    };


    componentDidMount() {
        this.props.getNewTeachers()
    }

    onApprove(id) {
        console.log(id)
        const approvedTeacher = this.props.newTeacher.newTeachers.find(newTeacher => newTeacher._id === id);
        console.log("unique one", approvedTeacher);

        this.setState({ modal: !this.state.modal });

        this.props.approveNewTeacher(approvedTeacher._id, true)
        this.props.registerUser(approvedTeacher.teacherEmail, "Teacher")
        this.props.addTeacher(approvedTeacher)
    }

    onReject = (id) => {
        console.log(id)
        const rejectedTeacher = this.props.newTeacher.newTeachers.find(newTeacher => newTeacher._id === id);
        console.log(rejectedTeacher.teacherEmail);

        this.setState({ modal2: !this.state.modal2 });

        this.props.rejectUser(rejectedTeacher.teacherEmail)
        this.props.approveNewTeacher(rejectedTeacher._id, false)
    }

    render() {

        const { value } = this.state;
        // const theme = useTheme();

        function TabPanel(props) {
            const { children, value, index, ...other } = props;

            return (
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`full-width-tabpanel-${index}`}
                    aria-labelledby={`full-width-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <Box sx={{ p: 3 }}>
                            <Typography>{children}</Typography>
                        </Box>
                    )}
                </div>
            );
        }

        TabPanel.propTypes = {
            children: PropTypes.node,
            index: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired,
        };

        function a11yProps(index) {
            return {
                id: `full-width-tab-${index}`,
                'aria-controls': `full-width-tabpanel-${index}`,
            };
        }

        const { newTeachers } = this.props.newTeacher

        const approvedTeachers = newTeachers.filter(newTeacher => newTeacher.teacherIsApproved === true);
        const rejectedTeachers = newTeachers.filter(newTeacher => newTeacher.teacherIsApproved === false);

        return (
            <div className='flex  '>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    backdrop={"static"}
                    key={newTeachers._id}
                >
                    <ModalHeader toggle={this.toggle}> Teacher Approved! </ModalHeader>
                    <ModalBody>
                        Approval Email Has Been Sent!
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>

                <Modal
                    isOpen={this.state.modal2}
                    toggle={this.toggle2}
                    backdrop={"static"}
                >
                    <ModalHeader toggle={this.toggle2}> Student Rejected! </ModalHeader>
                    <ModalBody>
                        Rejection Email Has Been Sent!
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>

                {/* Left Side */}
                <Sidebar />

                {/* Right Side */}
                <div className='grow'>
                    <div className='headerBg text-center p-28 text-4xl font-bold '>
                        Teacher Applications
                    </div>

                    <div className='mb-10'>
                        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
                            <AppBar position="static">
                                <Tabs
                                    value={value}
                                    onChange={this.handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="All Applications" {...a11yProps(0)} />
                                    <Tab label="Approved" {...a11yProps(1)} />
                                    <Tab label="Rejected" {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                //   axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={this.handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} >

                                    <div style={{ height: 400, width: '100%' }}>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>First name</StyledTableCell>
                                                        <StyledTableCell align="right">Last Name</StyledTableCell>
                                                        <StyledTableCell align="right">Applying Subject</StyledTableCell>
                                                        <StyledTableCell align="right">Email</StyledTableCell>
                                                        <StyledTableCell align="right">Application Letter</StyledTableCell>
                                                        <StyledTableCell align="right">CV</StyledTableCell>
                                                        <StyledTableCell align="right">Approval</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {newTeachers.reverse().map((newTeacher) => (
                                                        <StyledTableRow key={newTeacher._id}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {newTeacher.teacherFirstName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right" >{newTeacher.teacherLastName}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.applyingSubject}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.teacherEmail}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.teacherApplicationLetter}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.cv}</StyledTableCell>
                                                            <StyledTableCell align="right">
                                                                <Button disabled={newTeacher.teacherIsApproved === null ? false : true} color="primary" onClick={this.onApprove.bind(this, newTeacher._id)} className='text-white font-bold py-2 px-2 rounded'> Approve </Button><br />
                                                                <Button disabled={newTeacher.teacherIsApproved === null ? false : true} color="danger" onClick={this.onReject.bind(this, newTeacher._id)} className='text-white font-bold py-2 px-2 mt-1.5 rounded' > Reject </Button>
                                                            </StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1} >

                                    <div style={{ height: 400, width: '100%' }}>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>First name</StyledTableCell>
                                                        <StyledTableCell align="right">Last Name</StyledTableCell>
                                                        <StyledTableCell align="right">Applying Subject</StyledTableCell>
                                                        <StyledTableCell align="right">Email</StyledTableCell>
                                                        <StyledTableCell align="right">Application Letter</StyledTableCell>
                                                        <StyledTableCell align="right">CV</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {approvedTeachers.reverse().map((newTeacher) => (
                                                        <StyledTableRow key={newTeacher._id}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {newTeacher.teacherFirstName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right" >{newTeacher.teacherLastName}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.applyingSubject}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.teacherEmail}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.teacherApplicationLetter}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.cv}</StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>

                                </TabPanel>
                                <TabPanel value={value} index={2} >

                                    <div style={{ height: 400, width: '100%' }}>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>First name</StyledTableCell>
                                                        <StyledTableCell align="right">Last Name</StyledTableCell>
                                                        <StyledTableCell align="right">Applying Subject</StyledTableCell>
                                                        <StyledTableCell align="right">Email</StyledTableCell>
                                                        <StyledTableCell align="right">Application Letter</StyledTableCell>
                                                        <StyledTableCell align="right">CV</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rejectedTeachers.reverse().map((newTeacher) => (
                                                        <StyledTableRow key={newTeacher._id}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {newTeacher.teacherFirstName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right" >{newTeacher.teacherLastName}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.applyingSubject}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.teacherEmail}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.teacherApplicationLetter}</StyledTableCell>
                                                            <StyledTableCell align="right">{newTeacher.cv}</StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>

                                </TabPanel>
                            </SwipeableViews>
                        </Box>
                    </div>
                </div>
            </div>
        )
    }
}

NewStudents.propTypes = {
    getNewTeachers: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    rejectUser: PropTypes.func.isRequired,
    approveNewTeacher: PropTypes.func.isRequired,
    addTeacher: PropTypes.func.isRequired,
    newStudent: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    newTeacher: state.newTeacher,
    users: state.users

})


export default connect(mapStateToProps, { getNewTeachers, approveNewTeacher, registerUser, rejectUser, addTeacher })(NewStudents)