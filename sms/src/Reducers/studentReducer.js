import {
    ADD_NEW_STUDENT, GET_NEW_STUDENTS, NEW_STUDENTS_LOADING,
    STUDENTS_LOADING, ADD_STUDENT, GET_STUDENTS, EDIT_NEW_STUDENT, GET_SELECTED_STUDENT
} from './../Actions/Types'

const initialState = {
    loading: false,
    newStudent: null
}

export const newStudentReducer = (state = { newStudents: [] }, action) => {
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
        // case EDIT_NEW_STUDENT:
        //     return {
        //         ...state,
        //         // isApproved: [action.payload, ...state.isApproved]
        //         newStudent: action.payload,
        //         newStudents: [newStudent, ...state.newStudents]
        //     }
        default:
            return state;
    }
}


export const studentReducer = (state = { students: [], selectedStudent: {} }, action) => {
    switch (action.type) {
        case STUDENTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case ADD_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students],
                loading: false
            };
        case GET_STUDENTS:
            return {
                ...state,
                loading: false,
                students: action.payload
            };
        case GET_SELECTED_STUDENT:
            return {
                ...state,
                loading: false,
                selectedStudent: action.payload
            };
        default:
            return state;
    }
}