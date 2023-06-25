import './App.css';
import Homepage from './screens/Homepage';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";    
import "primereact/resources/primereact.min.css";
import NewStudents from './screens/NewStudents';
import { Provider } from 'react-redux';
import Store from './Store';
import Announcements from './screens/Announcements';
import Profile from './screens/Profile';
import Register from './screens/Register';
import Attendance from './screens/Attendance';
import StudentManagement from './screens/StudentManagement';
import NewTeachers from './screens/NewTeachers';
import TeacherAttendance from './screens/TeacherAttendance';
import ViewAttendance from './screens/ViewAttendance';

function App() {
  return (
    <div className="App">

      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/newStudents" element={<NewStudents />} />
          <Route path="/newTeachers" element={<NewTeachers />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/viewAttendance" element={<ViewAttendance/>} />
          <Route path="/teacherAttendance" element={<TeacherAttendance />} />
          <Route path="/studentManagement" element={<StudentManagement />} />
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
