import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Streams from "./pages/streams";
import Stream from "./pages/stream";
import NewStream from "./pages/streams/new";
import Student from "./pages/student";
import Students from "./pages/students";
import NewStudent from "./pages/students/new";
import EditStudent from "./pages/students/edit";
import NavBar from "./components/navbar";

import "./assets/fonts/index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Streams />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/streams/new" element={<NewStream />} />
          <Route path="/student" element={<Student />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/new" element={<NewStudent />} />
          <Route path="/students/edit" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
