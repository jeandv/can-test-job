import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Cart from './pages/Cart';
// import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </Layout>
  )
}

export default App;