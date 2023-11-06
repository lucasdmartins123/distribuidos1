import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Begin from "./pages/Begin/Begin.jsx";
import Read from "./pages/Read/Read.jsx";
import Write from "./pages/Write/Write.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Begin />} />
      <Route path="/read" element={<Read />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
}

export default App;
