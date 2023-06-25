import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
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
import { Button } from 'reactstrap';
import { getAllTeachers } from './../Actions/teacherActions'
import { markAttendance } from './../Actions/teacherAttendanceActions'
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


export class TeacherAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }
    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    handleChangeIndex = (index) => {
        this.setState({ value: index });
    };

    componentDidMount() {
        this.props.getAllTeachers();
    }

    onPresent = (id) => {
        const currentDate = new Date().toLocaleDateString();
        this.props.markAttendance(id, true, currentDate)
    }

    onAbsent = (id) => {
        this.props.markAttendance(id, true)
    }

    render() {

        const { teachers } = this.props.teacher

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
                                                        <StyledTableCell align="right">Present</StyledTableCell>
                                                        <StyledTableCell align="right">Absent</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {teachers.map(teacher => (
                                                        <StyledTableRow key={teacher._id}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {teacher.teacherFirstName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right" >
                                                                {teacher.teacherLastName}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right">
                                                                <Button color="primary" onClick={this.onPresent.bind(this, teacher._id)} className='text-white font-bold py-2 px-2 rounded'> Present </Button>
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right">
                                                                <Button color="danger" onClick={this.onAbsent.bind(this, teacher._id)} className='text-white font-bold py-2 px-2  rounded' > Absent </Button> </StyledTableCell>
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

TeacherAttendance.propTypes = {
    getAllTeachers: PropTypes.func.isRequired,
    markAttendance: PropTypes.func.isRequired,
    teacher: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    teacher: state.teacher,

})

export default connect(mapStateToProps, { getAllTeachers, markAttendance })(TeacherAttendance)