import { combineReducers } from 'redux';
import { newStudentReducer, studentReducer } from './studentReducer';
import { announcementReducer } from './announcementReducer';
import { authReducer } from './authReducer';

export default combineReducers({
    newStudent: newStudentReducer,
    announcement: announcementReducer,
    student: studentReducer,
    auth: authReducer
})