import React from "react";
import Providers from "./components/providers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Subscription from "./pages/Subscription";
import Navbar from "./components/navbar/navbar";
import DashboardLayout from '@/layouts/dashboard'

import TeamMembers from "./pages/teamMembers";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<DashboardLayout />}
          >
            <Route path="navbar" element={<Navbar />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="team-members" element={<TeamMembers />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
