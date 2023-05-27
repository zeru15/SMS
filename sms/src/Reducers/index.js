import { combineReducers } from 'redux';
import { newStudentReducer } from './studentReducer';
import { announcementReducer } from './announcementReducer';

export default combineReducers({
    newStudent: newStudentReducer,
    announcement: announcementReducer
})