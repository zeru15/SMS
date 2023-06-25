import axios from 'axios'
import { MARK_ATTENDANCE, GET_ATTENDANCE } from './Types'

export const markAttendance = (id, isPresent, date) => dispatch => {
    console.log(isPresent ,id, date)

    const config = {
        headers: { 
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({ isPresent, date })

    axios.post(`http://localhost:5000/api/attendance/${id}`, body , config)
        
}

export const getAttendance = (id) => async (dispatch) => {
    console.log(id)

    await axios
    .get(`http://localhost:5000/api/attendance/${id}`)
    .then(res => {
        dispatch({
            type: GET_ATTENDANCE,
            payload: res.data
        })

    })

}