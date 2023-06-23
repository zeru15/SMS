import {
    ADD_NEW_TEACHER, GET_NEW_TEACHERS, NEW_TEACHERS_LOADING,
    TEACHERS_LOADING, ADD_TEACHER, GET_TEACHERS, EDIT_NEW_TEACHER, GET_SELECTED_TEACHER
} from './../Actions/Types'

const initialState = {
    loading: false,
    newTeacher: null
}

export const newTeacherReducer = (state = { newTeachers: [] }, action) => {
    switch (action.type) {
        case NEW_TEACHERS_LOADING:
            return {
                ...state,
                loading: true
            };
        case ADD_NEW_TEACHER:
            return {
                ...state,
                newTeachers: [action.payload, ...state.newTeachers],
                loading: false
            };
        case GET_NEW_TEACHERS:
            return {
                ...state,
                loading: false,
                newTeachers: action.payload
            };
        // case EDIT_NEW_TEACHER:
        // return {
        // ...state,
        // // isApproved: [action.payload, ...state.isApproved]
        // newTeacher: action.payload,
        // newTeachers: [newTeacher, ...state.newTeachers]
        // }
        default:
            return state;
    }
}

export const teacherReducer = (state = { teachers: [], selectedTeacher: {} }, action) => {
    switch (action.type) {
        case TEACHERS_LOADING:
            return {
                ...state,
                loading: true
            };
        case ADD_TEACHER:
            return {
                ...state,
                teachers: [action.payload, ...state.teachers],
                loading: false
            };
        case GET_TEACHERS:
            return {
                ...state,
                loading: false,
                teachers: action.payload
            };
        case GET_SELECTED_TEACHER:
            return {
                ...state,
                loading: false,
                selectedTeacher: action.payload
            };
        default:
            return state;
    }
}
