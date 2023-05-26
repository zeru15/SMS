import { ADD_NEW_STUDENT, GET_NEW_STUDENTS, NEW_STUDENTS_LOADING } from './../Actions/Types'

const initialState = {
    newStudents: [],
    loading: false,
}

export const newStudentReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_STUDENTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case ADD_NEW_STUDENT:
            return {
                ...state,
                newStudents: [action.payload, ...state.newStudents],
                loading: false
            };
        case GET_NEW_STUDENTS:
            return {
                ...state,
                loading: false,
                newStudents: action.payload
            };
        default:
            return state;
    }
}