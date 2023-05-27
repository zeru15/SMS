import axios from 'axios'
import { GET_ANNOUNCEMENT_REQUEST, GET_ANNOUNCEMENT_SUCCESS, GET_ANNOUNCEMENT_FAILED, ADD_ANNOUNCEMENT } from './Types'

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

export const addAnnouncement = announcement => dispatch => {

    console.log(announcement)

    axios({
        method: "post",
        url: "http://localhost:5000/api/announcements",
        data: announcement,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(res =>
            dispatch({
                type: ADD_ANNOUNCEMENT,
                payload: res.data
            }))
}
