// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./LandingPage";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import Dashboard from "./Dashboard";
// import PostAuction from "./postAuction";

// function App() {
//   return (
//     <Router basename="/Online-Auction-Platform">
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/postauction" element={<PostAuction />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
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
        <Route path="/auction/:id" element={<AuctionDetails />} /> {/* New route for auction details */}
      </Routes>
    </Router>
  );
}

export default App;

