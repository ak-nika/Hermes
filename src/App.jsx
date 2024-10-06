import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import ShareResponse from "./pages/ShareResponse";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/share/:id" element={<ShareResponse />} />
      </Routes>
    </Router>
  );
};

export default App;
