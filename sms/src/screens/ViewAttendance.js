import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAllStudents } from './../Actions/studentActions'
import { getAttendance } from './../Actions/attendanceActions'
// import { markAttendance } from './../Actions/attendanceActions'
import { connect } from 'react-redux';


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


export class ViewAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            modal: ''
        };
    }
    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    handleChangeIndex = (index) => {
        this.setState({ value: index });
    };

    componentDidMount() {
        this.props.getAllStudents();
    }

    onViewAttendance = (id) => {
        this.props.getAttendance(id)
        this.toggle()
    }

    toggle = () => this.setState({ modal: !this.state.modal });

    render() {

        const { students } = this.props.student

        const { attendances } = this.props.attendance

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

        return (
            <div className='flex  '>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    backdrop={"static"}
                    key={attendances._id}
                >
                    <ModalHeader toggle={this.toggle}> Confirm </ModalHeader>
                    <ModalBody>
                        {attendances.map((attendance, index) => {
                            
                                let num = 1;
                                num = num + index
                            
                            return (
                                <div>{num}. absent on {attendance.date}</div>
                            )
                        })}
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </Modal>

                {/* Left Side */}
                <Sidebar />

                {/* Right Side */}
                <div className='grow'>
                    <div className='headerBg text-center p-28 text-4xl font-bold '>
                        Attendance
                    </div>
                    <div className=''>
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
                                    <Tab label="Item One" {...a11yProps(0)} />
                                    <Tab label="Item Two" {...a11yProps(1)} />
                                    <Tab label="Item Three" {...a11yProps(2)} />
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
                                                        <StyledTableCell align="right">View Attendance</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {students.map(student => (
                                                        <StyledTableRow key={student._id}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {student.firstName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right" >
                                                                {student.lastName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right">
                                                                <Button color="primary" onClick={this.onViewAttendance.bind(this, student._id)} className='text-white font-bold py-2 px-2 rounded'> View Attendance </Button>
                                                            </StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}


                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>

                                </TabPanel>
                                <TabPanel value={value} index={1} >
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2} >
                                    Item Three
                                </TabPanel>
                            </SwipeableViews>
                        </Box>
                    </div>

                </div>
            </div>
        )
    }
}

ViewAttendance.propTypes = {
    getAllStudents: PropTypes.func.isRequired,
    getAttendance: PropTypes.func.isRequired,
    // markAttendance: PropTypes.func.isRequired,
    students: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    student: state.student,
    attendance: state.attendance

})

export default connect(mapStateToProps, { getAllStudents, getAttendance })(ViewAttendance)