import './App.css';
import Homepage from './screens/Homepage';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      

      <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>


    </div>
  );
}

export default App;
