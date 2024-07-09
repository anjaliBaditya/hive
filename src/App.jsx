//App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Login from "./components/login/card"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/logout" element={<Logout/>} />
        <Route path="/callbackgoogle" element={<GoogleCallback/>} /> */}

        {/* <Route path='/tpo' element={isTpo?<TpoDashboard/>: <Navigate to = "/tpo/login" replace ={true}/>}> */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  )
} 
//App.jsx