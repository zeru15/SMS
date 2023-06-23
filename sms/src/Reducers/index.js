import { combineReducers } from 'redux';
import { newStudentReducer, studentReducer } from './studentReducer';
import { newTeacherReducer, teacherReducer } from './teacherReducer';
import { announcementReducer } from './announcementReducer';
import { authReducer } from './authReducer';
import { sectionReducer } from './sectionReducer';
import { subjectReducer, assignedSubjectReducer } from './subjectReducer';

export default combineReducers({
    newStudent: newStudentReducer,
    announcement: announcementReducer,
    student: studentReducer,
    auth: authReducer,
    section: sectionReducer,
    subject: subjectReducer,
    assignedSubject: assignedSubjectReducer,
    newTeacher: newTeacherReducer
})