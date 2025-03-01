
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import PostAuction from "./postAuction";
import AuctionDetails from "./AuctionDetails"; // Import the Auction Details page

function App() {
  return (
    <Router basename="/Online-Auction-Platform">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/postauction" element={<PostAuction />} />
        <Route path="/auction/:id" element={<AuctionDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;

