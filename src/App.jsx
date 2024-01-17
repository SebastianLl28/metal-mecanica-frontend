import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Customer,
  Dashboard,
  Login,
  Orders,
  PrivatePage,
  Profile,
  Register
} from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<PrivatePage />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/orders' element={<Orders />} />
        </Route>
        <Route path='/*' element={<h2>404 page</h2>} />
      </Routes>
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme='light'
      />
    </BrowserRouter>
  )
}

export default App
