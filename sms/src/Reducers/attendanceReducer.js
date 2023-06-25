import { GET_ANNOUNCEMENT_REQUEST, GET_ANNOUNCEMENT_SUCCESS, GET_ANNOUNCEMENT_FAILED, ADD_ANNOUNCEMENT, DELETE_ANNOUNCEMENT } from './../Actions/Types'
import { MARK_ATTENDANCE, GET_ATTENDANCE } from './../Actions/Types'

const initialState = {
    
    loading: false,
}

export const attendanceReducer = (state = {attendances: []}, action) => {

    switch (action.type) {

        case GET_ATTENDANCE:
            return {
                ...state,
                loading: false,
                attendances: action.payload
            }
        default: return state;
    }
}