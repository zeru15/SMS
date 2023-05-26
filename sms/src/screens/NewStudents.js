import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import Banner from './../Images/school-header.png'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { getNewStudents } from './../Actions/studentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';




const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'gradeLevel',
        headerName: 'Applying Grade',
        type: 'number',
        width: 120,
    },
    { field: 'studentEmail', headerName: 'Student Email', width: 170 },
    { field: 'parentEmail', headerName: 'Parent Email', width: 180 },
    { field: 'applicationLetter', headerName: 'Application Letter', width: 150 },
    { field: 'transcript', headerName: 'Transcript', width: 130 },
];



export class NewStudents extends Component {

    componentDidMount() {
        this.props.getNewStudents()
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
                            <DataGrid
                                rows={
                                    newStudents.map((newStudent) => {
                                        return {
                                            id: newStudent._id,
                                            firstName: newStudent.firstName,
                                            lastName: newStudent.lastName,
                                            gradeLevel: newStudent.gradeLevel,
                                            studentEmail: newStudent.studentEmail,
                                            parentEmail: newStudent.parentEmail,
                                            applicationLetter: newStudent.applicationLetter,
                                            transcript: newStudent.transcript
                                        }

                                    })
                                }
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

NewStudents.propTypes = {
    getNewStudents: PropTypes.func.isRequired,
    newStudent: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    newStudent: state.newStudent,

})


export default connect(mapStateToProps, {getNewStudents})(NewStudents)