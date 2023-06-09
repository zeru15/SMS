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
import { registerUser, rejectUser } from './../Actions/authActions';
import { approveNewStudent, addStudent, getNewStudents } from './../Actions/studentActions';
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
        this.props.getNewStudents()
    }

    onApprove(id) {
        console.log(id)
        const approvedStudent = this.props.newStudent.newStudents.find(newStudent => newStudent._id === id);
        // const body = JSON.stringify(approvedStudent)
        console.log("unique one", approvedStudent);

        this.setState({ modal: !this.state.modal });

        this.props.approveNewStudent(approvedStudent._id, true)
        this.props.registerUser(approvedStudent.email, "Student")
        this.props.addStudent(approvedStudent)
    }

    onReject = (id) => {
        console.log(id)
        const rejectedStudent = this.props.newStudent.newStudents.find(newStudent => newStudent._id === id);
        console.log(rejectedStudent.email);

        this.setState({ modal2: !this.state.modal2 });

        this.props.rejectUser(rejectedStudent.email)
        this.props.approveNewStudent(rejectedStudent._id, false)
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

        const { newStudents } = this.props.newStudent

        const approvedStudents = newStudents.filter(newStudent => newStudent.isApproved === true);
        const rejectedStudents = newStudents.filter(newStudent => newStudent.isApproved === false);

        return (
            <div className='flex  '>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    backdrop={"static"}
                >
                    <ModalHeader toggle={this.toggle}> Student Approved! </ModalHeader>
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
                        Student Applications
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
                                                        <StyledTableCell align="right">Applying Grade</StyledTableCell>
                                                        <StyledTableCell align="right">Student Email</StyledTableCell>
                                                        <StyledTableCell align="right">Parent Email</StyledTableCell>
                                                        <StyledTableCell align="right">Application Letter</StyledTableCell>
                                                        <StyledTableCell align="right">Transcript</StyledTableCell>
                                                        <StyledTableCell align="right">Approval</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {newStudents.reverse().map((newStudent) => (
                                                        <StyledTableRow key={newStudent._id}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {newStudent.firstName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right" >{newStudent.lastName}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.gradeLevel}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.email}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.parentEmail}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.applicationLetter}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.transcript}</StyledTableCell>
                                                            <StyledTableCell align="right">
                                                                <Button disabled={newStudent.isApproved === null ? false : true} color="primary" onClick={this.onApprove.bind(this, newStudent._id)} className='text-white font-bold py-2 px-2 rounded'> Approve </Button>
                                                                <Button disabled={newStudent.isApproved === null ? false : true} color="danger" onClick={this.onReject.bind(this, newStudent._id)} className='text-white font-bold py-2 px-2 mt-1.5 rounded' > Reject </Button> 
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
                                                        <StyledTableCell align="right">Applying Grade</StyledTableCell>
                                                        <StyledTableCell align="right">Student Email</StyledTableCell>
                                                        <StyledTableCell align="right">Parent Email</StyledTableCell>
                                                        <StyledTableCell align="right">Application Letter</StyledTableCell>
                                                        <StyledTableCell align="right">Transcript</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {approvedStudents.reverse().map((newStudent) => (
                                                        <StyledTableRow key={newStudent._id}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {newStudent.firstName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right" >{newStudent.lastName}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.gradeLevel}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.email}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.parentEmail}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.applicationLetter}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.transcript}</StyledTableCell>
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
                                                        <StyledTableCell align="right">Applying Grade</StyledTableCell>
                                                        <StyledTableCell align="right">Student Email</StyledTableCell>
                                                        <StyledTableCell align="right">Parent Email</StyledTableCell>
                                                        <StyledTableCell align="right">Application Letter</StyledTableCell>
                                                        <StyledTableCell align="right">Transcript</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rejectedStudents.reverse().map((newStudent) => (
                                                        <StyledTableRow key={newStudent._id}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {newStudent.firstName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right" >{newStudent.lastName}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.gradeLevel}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.email}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.parentEmail}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.applicationLetter}</StyledTableCell>
                                                            <StyledTableCell align="right">{newStudent.transcript}</StyledTableCell>
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
    getNewStudents: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    rejectUser: PropTypes.func.isRequired,
    approveNewStudent: PropTypes.func.isRequired,
    addStudent: PropTypes.func.isRequired,
    newStudent: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    newStudent: state.newStudent,
    users: state.users

})


export default connect(mapStateToProps, { getNewStudents, registerUser, rejectUser, approveNewStudent, addStudent })(NewStudents)