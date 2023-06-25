import { GET_GRADELEVEL  } from './../Actions/Types'

const initialState = {
    loading: false,
}

export const gradeLevelReducer = (state = { gradeLevels: [] }, action) => {

    switch (action.type) {

        case GET_GRADELEVEL:
            return {
                ...state,
                gradeLevels: action.payload,
                loading: false
            };
        default: return state;
    }
}