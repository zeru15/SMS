import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getNewStudents } from './../Actions/studentActions';
import { registerUser } from './../Actions/authActions';
import { approveNewStudent } from './../Actions/studentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, fabClasses } from '@mui/material';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';




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

    // state = {
    //     isApproved: null
    // }

    componentDidMount() {
        this.props.getNewStudents()
    }

     onApprove(id, value)  {
        const approvedStudent = this.props.newStudent.newStudents.find(newStudent => newStudent._id === id);
        console.log(approvedStudent.studentEmail);
        // approvedStudent.isApproved == true
        this.props.approveNewStudent(approvedStudent._id, true)
        this.props.registerUser(approvedStudent.studentEmail)
    }

    onReject = (id) => {
        const rejectedStudent = this.props.newStudent.newStudents.find(newStudent => newStudent._id === id);
        console.log(rejectedStudent.studentEmail);
        this.setState({
            isApproved: false
        })
        // this.props.approveNewStudent(rejectedStudent.isApproved)
    }

    render() {

        const { newStudents } = this.props.newStudent

        return (
            <div className='flex  '>

                {/* Left Side */}
                <Sidebar />

                {/* Right Side */}
                <div className='grow'>
                    <div className='headerBg text-center p-28 text-4xl font-bold '>
                        Student Applications
                    </div>

                    <div className='mt-12 mx-2'>
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
                                        {newStudents.map((newStudent) => (
                                            <StyledTableRow key={newStudent._id}>
                                                <StyledTableCell component="th" scope="row">
                                                    {newStudent.firstName}
                                                </StyledTableCell>
                                                <StyledTableCell align="right" >{newStudent.lastName}</StyledTableCell>
                                                <StyledTableCell align="right">{newStudent.gradeLevel}</StyledTableCell>
                                                <StyledTableCell align="right">{newStudent.studentEmail}</StyledTableCell>
                                                <StyledTableCell align="right">{newStudent.parentEmail}</StyledTableCell>
                                                <StyledTableCell align="right">{newStudent.applicationLetter}</StyledTableCell>
                                                <StyledTableCell align="right">{newStudent.transcript}</StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <button onClick={this.onApprove.bind(this, newStudent._id)} className='bg-blue-500 text-white font-bold py-2 px-2 rounded'> Approve </button>
                                                    <button onClick={this.onReject.bind(this, newStudent._id)} className='bg-red-500 text-white font-bold py-2 px-2 mt-1.5 rounded' > Reject </button> </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

NewStudents.propTypes = {
    getNewStudents: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    approveNewStudent: PropTypes.func.isRequired,
    newStudent: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    newStudent: state.newStudent,
    users: state.users

})


export default connect(mapStateToProps, { getNewStudents, registerUser, approveNewStudent })(NewStudents)