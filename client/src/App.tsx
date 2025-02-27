import Profile from "./component/profile/TopLayout";
import Home from "./component/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./component/services/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
