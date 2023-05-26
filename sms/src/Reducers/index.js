import { combineReducers } from 'redux';
import { newStudentReducer } from './studentReducer';

export default combineReducers({
    newStudent: newStudentReducer
})