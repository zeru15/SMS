import { GET_SECTIONS, ADD_SECTION } from './../Actions/Types'

const initialState = {
    loading: false,
}

export const sectionReducer = (state = { sections: [] }, action) => {

    switch (action.type) {

        case GET_SECTIONS:
            return {
                ...state,
                sections: action.payload,
                loading: false
            };
        case ADD_SECTION:
            return {
                ...state,
                sections: [action.payload, ...state.sections],
                loading: false
            };
        default: return state;
    }
}