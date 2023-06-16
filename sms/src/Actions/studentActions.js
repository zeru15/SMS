import axios from 'axios'
import { ADD_NEW_STUDENT, GET_NEW_STUDENTS, GET_STUDENTS, ADD_STUDENT, EDIT_NEW_STUDENT } from './Types'


export const getNewStudents = () => async (dispatch, getState) => {

    await axios
        .get('http://localhost:5000/api/newStudents')
        .then(res => {
            dispatch({
                type: GET_NEW_STUDENTS,
                payload: res.data
            })

        })
};

export const addNewStudent = (newStudent, body) => dispatch => {

    console.log(body)

    axios.post("http://localhost:5000/api/newStudents",body)
        .then(res =>
            dispatch({
                type: ADD_NEW_STUDENT,
                payload: res.data
            }))
}


// export const approveNewStudent = (id, isApproved) => {
//     axios
//         .put(`http://localhost:5000/api/newStudents/${id}`)
//         .then(res =>
//             dispatch({
//                 type: EDIT_NEW_STUDENT,
//                 payload: {
//                     isApproved
//                 }
//             }))
// }

export const approveNewStudent = (id, isApproved) => async (dispatch) => {
    console.log(id, isApproved)
      const response = await fetch(`http://localhost:5000/api/newStudents/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isApproved }),
      });
      const data = await response.json();
    //   dispatch({
    //     type: EDIT_NEW_STUDENT,
    //     payload: data.newStudent
    //   });
  };


export const getAllStudents = () => async (dispatch, getState) => {

    await axios
        .get('http://localhost:5000/api/students')
        .then(res => {
            dispatch({
                type: GET_STUDENTS,
                payload: res.data
            })

        })
};

export const addStudent = (student, body) => dispatch => {

    console.log(body)

    axios.post("http://localhost:5000/api/students", body)
        .then(res =>
            dispatch({
                type: ADD_STUDENT,
                payload: res.data
            }))
}