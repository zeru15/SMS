import axios from 'axios'
import { GET_SUBJECTS, GET_ASSIGNED_SUBJECTS, DELETE_ASSIGNED_SUBJECT, ADD_SUBJECT } from './Types'

export const getAllSubjects = () => async (dispatch, getState) => {

    await axios
        .get('http://localhost:5000/api/subjects')
        .then(res => {
            dispatch({
                type: GET_SUBJECTS,
                payload: res.data
            })

        })
};

export const addSubject = (subjectName) => dispatch => {

    console.log(subjectName)

    const config = {
        headers: { 
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({ subjectName })

    axios.post("http://localhost:5000/api/subjects", body, config )
        .then(res =>
            dispatch({
                type: ADD_SUBJECT,
                payload: res.data
            }))
}

export const assignSubject = (id, subjectName) => async (dispatch) => {
    console.log(id, subjectName)
    const response = await fetch(`http://localhost:5000/api/subjects/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subjectName }),
    });
    // const data = await response.json();

};

export const getAllAssignedSubjects = () => async (dispatch, getState) => {

    await axios
        .get('http://localhost:5000/api/assignedSubjects')
        .then(res => {
            dispatch({
                type: GET_ASSIGNED_SUBJECTS,
                payload: res.data
            })

        })
};

export const deleteAssignedSubject = (id, subjectName) => dispatch => {
    console.log('del', id, 'sub', subjectName)

    fetch(`http://localhost:5000/api/assignedSubjects/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subjectName }),
    });
    dispatch({
        type: DELETE_ASSIGNED_SUBJECT,
        payload: id
    })
}