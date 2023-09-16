import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
