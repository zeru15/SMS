import React, { Component } from 'react'
import Logo from './../Images/Logo.png'

class Sidebar extends Component {

    render() {

        return (
            <div className='w-1/5 bg-gray-800 text-white min-h-screen '>

                {/* Logo */}
                <div>
                    <img src={Logo} />
                </div>

                {/* Sidebar Items */}
                <div className='mt-16  ml-4 px-4 py-2 text-xl text-center hover:bg-amber-500 rounded-s ease-out duration-200'>
                    <a href="profile" className='text-white no-underline md:ml-4'> Profile </a>
                </div>
                <div className='mt-4 ml-4 px-4 py-2  text-xl  text-center hover:bg-amber-500 rounded-s ease-out duration-200 '>
                    <a href="announcements" className='text-white no-underline md:ml-4'> Announcements </a>
                </div>

                <div className='mt-4 ml-4 px-4 py-2  text-xl  text-center hover:bg-amber-500 rounded-s ease-out duration-200 '>
                    <a href="newStudents" className='text-white no-underline md:ml-4'> Student Application </a>
                </div>
                <div className='mt-4 ml-4 px-4 py-2  text-xl  text-center hover:bg-amber-500 rounded-s ease-out duration-200 '>
                    <a href="newTeachers" className='text-white no-underline md:ml-4'> Teacher Application </a>
                </div>

                <div className='mt-4 ml-4 px-4 py-2 text-xl   text-center hover:bg-amber-500 rounded-s ease-out duration-200 '>
                    <a href="attendance" className='text-white no-underline md:ml-4'> Attendance </a>
                </div>

                <div className='mt-4 ml-4 px-4 py-2 text-xl   text-center hover:bg-amber-500 rounded-s ease-out duration-200 '>
                    <a href="viewAttendance" className='text-white no-underline md:ml-4'> View Attendance </a>
                </div>

                <div className='mt-4 ml-4 px-4 py-2 text-xl   text-center hover:bg-amber-500 rounded-s ease-out duration-200 '>
                    <a href="teacherAttendance" className='text-white no-underline md:ml-4'> Attendance </a>
                </div>

                <div className='mt-4 ml-4 px-4 py-2 text-xl   text-center hover:bg-amber-500 rounded-s ease-out duration-200 '>
                    <a href="studentManagement" className='text-white no-underline md:ml-4'> Student Management </a>
                </div>

                <div className='mt-8 px-4 py-2  text-xl bg-amber-500 text-center  rounded-s ease-out duration-200 '>
                    <a  href="/" className='text-white no-underline md:ml-4'> Logout </a>
                </div>

            </div>
        )
    }

}

export default Sidebar