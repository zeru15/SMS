import './App.css';
import Homepage from './screens/Homepage';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewStudent from './screens/NewStudent';

function App() {
  return (
    <div className="App">
      

      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-student" element={<NewStudent />} />
        </Routes>


    </div>
  );
}

export default App;
