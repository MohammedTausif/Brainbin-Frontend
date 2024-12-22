
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from "./pages/Signin"
import { Dashboard } from './pages/Dashboard'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage';
import PrivateRoute from './components/ProctectedRoutes'
import { ShareLink } from './pages/ShareLink'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      {/* protectedRoutes */}
      <Route path='/dashboard' element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
      <Route path='/share/:shareLink' element={<ShareLink/>} />
    </Routes>
  </BrowserRouter>

}

export default App
