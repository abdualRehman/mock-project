import Providers from "./components/providers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

import ProtectedRoute from "./components/protected-route";
import TeamMembers from "./pages/teamMembers";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route
            path="/"
            element={<Sidebar />}
          >
            <Route path="subscription" element={<Home />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="team-members" element={<TeamMembers />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
