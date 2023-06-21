import axios from 'axios'
import { GET_SECTIONS, ADD_SECTION } from './Types'

export const getAllSections = () => async (dispatch, getState) => {

    await axios
        .get('http://localhost:5000/api/sections')
        .then(res => {
            dispatch({
                type: GET_SECTIONS,
                payload: res.data
            })

        })
};

export const addSection = (sectionName) => dispatch => {

    console.log(sectionName)

    const config = {
        headers: { 
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({ sectionName })

    axios.post("http://localhost:5000/api/sections", body, config )
        .then(res =>
            dispatch({
                type: ADD_SECTION,
                payload: res.data
            }))
}
