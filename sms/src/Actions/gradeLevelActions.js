import axios from 'axios'
import { GET_GRADELEVEL  } from './Types'

export const getAllGradeLevels = () => async (dispatch, getState) => {

    await axios
        .get('http://localhost:5000/api/gradeLevels')
        .then(res => {
            dispatch({
                type: GET_GRADELEVEL,
                payload: res.data
            })

        })
};
