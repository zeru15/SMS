import './App.css';
import Homepage from './screens/Homepage';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewStudents from './screens/NewStudents';
import { Provider } from 'react-redux';
import Store from './Store';
import Announcements from './screens/Announcements';
import Profile from './screens/Profile';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">

      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-student" element={<NewStudents />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
