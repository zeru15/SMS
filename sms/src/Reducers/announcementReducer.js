import { GET_ANNOUNCEMENT_REQUEST, GET_ANNOUNCEMENT_SUCCESS, GET_ANNOUNCEMENT_FAILED, ADD_ANNOUNCEMENT } from './../Actions/Types'

const initialState = {
    announcements: [],
    loading: false,
    error: ''
}

export const announcementReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ANNOUNCEMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                announcements: action.payload
            }
        case GET_ANNOUNCEMENT_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        case ADD_ANNOUNCEMENT:
            return {
                ...state,
                announcements: [action.payload, ...state.announcements],
                loading: false
            };
        default: return state
    }
}