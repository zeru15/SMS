import axios from 'axios'
import {
    ADD_NEW_TEACHER, GET_NEW_TEACHERS, NEW_TEACHERS_LOADING,
    TEACHERS_LOADING, ADD_TEACHER, GET_TEACHERS, EDIT_NEW_TEACHER, GET_SELECTED_TEACHER
    } from './Types'

export const getNewTeachers = () => async (dispatch, getState) => {

    await axios
        .get('http://localhost:5000/api/newTeachers')
        .then(res => {
            dispatch({
                type: GET_NEW_TEACHERS,
                payload: res.data
            })

        })
};

export const addNewTeacher = (body) => dispatch => {

    console.log(body)

    axios.post("http://localhost:5000/api/newTeachers", body)
        .then(res =>
            dispatch({
                type: ADD_NEW_TEACHER,
                payload: res.data
            }))
}


export const approveNewTeacher = (id, teacherIsApproved) => async (dispatch) => {
    console.log(id, teacherIsApproved)
    const response = await fetch(`http://localhost:5000/api/newTeachers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ teacherIsApproved }),
    });
};


export const getAllTeachers = () => async (dispatch, getState) => {

    await axios
        .get('http://localhost:5000/api/teachers')
        .then(res => {
            dispatch({
                type: GET_TEACHERS,
                payload: res.data
            })

        })
};

export const addTeacher = (body) => dispatch => {

    console.log("unique", body)

    axios.post("http://localhost:5000/api/teachers", body)
        .then(res =>
            dispatch({
                type: ADD_TEACHER,
                payload: res.data
            }))
}

// export const studentProfile = (id) => dispatch => {
//     console.log(id)

//     axios.get(`http://localhost:5000/api/students/${id}`)
//         .then(res => {
//             dispatch({
//                 type: GET_SELECTED_STUDENT,
//                 payload: res.data
//             })

//         })
// }

// export const assignSection = (id, section) => async (dispatch) => {
//     console.log(id, section)
//     const response = await fetch(`http://localhost:5000/api/students/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ section }),
//     });
//     const data = await response.json();
//     //   dispatch({     
//     //     type: EDIT_NEW_STUDENT,
//     //     payload: data.newStudent
//     //   });
// };
