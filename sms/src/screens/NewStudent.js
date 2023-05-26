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




const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'grade',
        headerName: 'Applying Grade',
        type: 'number',
        width: 120,
    },
    { field: 'studentEmail', headerName: 'Student Email', width: 170 },
    { field: 'parentEmail', headerName: 'Parent Email', width: 180 },
    { field: 'applicationLetter', headerName: 'Application Letter', width: 150 },
    { field: 'transcript', headerName: 'Transcript', width: 130 },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];

const rows = [
    { id: 1, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
    { id: 2, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
    { id: 3, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
    { id: 4, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
    { id: 5, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
    { id: 6, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
    { id: 7, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
    { id: 8, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
    { id: 9, firstName: 'Snow', lastName: 'Jon', grade: 5, studentEmail: 'zeruf5@gmail.com', 
    parentEmail: 'firehabtwold@gmail.com', applicationLetter: 'Lorem Ipsum', transcript: 'Lorem Ipsum' },
];




export class NewStudent extends Component {
    render() {
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
                                rows={rows}
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

export default NewStudent