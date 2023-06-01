import { GET_ANNOUNCEMENT_REQUEST, GET_ANNOUNCEMENT_SUCCESS, GET_ANNOUNCEMENT_FAILED, ADD_ANNOUNCEMENT, DELETE_ANNOUNCEMENT } from './../Actions/Types'

const initialState = {
    announcements: [],
    loading: false,
}

export const announcementReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                announcements: action.payload
            }
        case ADD_ANNOUNCEMENT:
            return {
                ...state,
                announcements: [action.payload, ...state.announcements],
                loading: false
            };
        case DELETE_ANNOUNCEMENT:
            return {
                ...state,
                announcements: state.announcements.filter(announcements => announcements._id !== action.payload)
            };
        default: return state;
    }
}