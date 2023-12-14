import Providers from "./components/providers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Subscription from "./pages/Subscription";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

import TeamMembers from "./pages/teamMembers";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Sidebar />}
          >
            <Route path="subscription" element={<Subscription />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="team-members" element={<TeamMembers />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
