import axios from 'axios'
import { MARK_ATTENDANCE } from './Types'

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