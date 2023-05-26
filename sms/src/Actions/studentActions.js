import axios from 'axios'
import { ADD_NEW_STUDENT, GET_NEW_STUDENTS, NEW_STUDENTS_LOADING } from './Types'


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

export const addNewStudent = newStudent => dispatch => {

    console.log(newStudent)

    axios({
        method: "post",
        url: "http://localhost:5000/api/newStudents",
        data: newStudent,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(res =>
            dispatch({
                type: ADD_NEW_STUDENT,
                payload: res.data
            }))
}
