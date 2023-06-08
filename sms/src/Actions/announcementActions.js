import axios from 'axios'
import { GET_ANNOUNCEMENT_REQUEST, GET_ANNOUNCEMENT_SUCCESS, GET_ANNOUNCEMENT_FAILED, ADD_ANNOUNCEMENT, DELETE_ANNOUNCEMENT } from './Types'

export const getAllAnnouncements = () => async dispatch => {

    dispatch({type: GET_ANNOUNCEMENT_REQUEST})

    try{
        const response = await axios.get('http://localhost:5000/api/announcements')
        console.log(response);
        dispatch({type: GET_ANNOUNCEMENT_SUCCESS, payload: response.data})
    }catch (error) {
        dispatch({type: GET_ANNOUNCEMENT_FAILED, payload: error})
    }
}

export const addAnnouncement = (announcement,body) => dispatch => {

    console.log('announcement',announcement)
    // url: "http://localhost:5000/api/announcements",
    

    axios.post("http://localhost:5000/api/announcements",body)
        .then(res =>
            dispatch({
                type: ADD_ANNOUNCEMENT,
                payload: res.data
            }))
            
}

export const deleteAnnouncement = id => dispatch => {
    console.log('ann del',id)
    axios
        .delete(`http://localhost:5000/api/announcements/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ANNOUNCEMENT,
                payload: id
            }))
}