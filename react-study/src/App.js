import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./practice/movie-routes/Home";
import Detail from "./practice/movie-routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
