import { GET_SUBJECTS, GET_ASSIGNED_SUBJECTS, DELETE_ASSIGNED_SUBJECT } from './../Actions/Types'

const initialState = {
    loading: false,
}

export const subjectReducer = (state = { subjects: [] }, action) => {

    switch (action.type) {

        case GET_SUBJECTS:
            return {
                ...state,
                subjects: action.payload,
                loading: false
            };
        // case ADD_SECTION:
        //     return {
        //         ...state,
        //         sections: [action.payload, ...state.sections],
        //         loading: false
        //     };
        default: return state;
    }
}

export const assignedSubjectReducer = (state = { assignedSubjects: [] }, action) => {

    switch (action.type) {

        case GET_ASSIGNED_SUBJECTS:
            return {
                ...state,
                assignedSubjects: action.payload,
                loading: false
            };
        case DELETE_ASSIGNED_SUBJECT:
            return {
                ...state,
                assignedSubjects: state.assignedSubjects.filter(assignedSubjects => assignedSubjects.sectionId !== action.payload)
            };
        default: return state;
    }
}