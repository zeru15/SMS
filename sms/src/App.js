import './App.css';
import Homepage from './screens/Homepage';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewStudents from './screens/NewStudents';
import { Provider } from 'react-redux';
import Store from './Store';
import Announcements from './screens/Announcements';

function App() {
  return (
    <div className="App">

      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-student" element={<NewStudents />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
