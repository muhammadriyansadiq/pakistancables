import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './admin/pages/AdminDashboard';
import Adminteamhirarachy from './admin/pages/Adminteamhirarachy';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminteamhirarchy" element={<Adminteamhirarachy />} />


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
