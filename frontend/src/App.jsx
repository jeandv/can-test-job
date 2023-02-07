import { Navigate, Route, Routes } from 'react-router-dom';
import EventsList from './components/events/EventsList';
import Layout from './components/layout/Layout';
import Cart from './pages/Cart';
import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {

  const user = true;

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='event/:id' element={<EventDetails />} />
        <Route path='events/:category' element={<EventsList />} />
        <Route path='login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='register' element={<Register />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </Layout>
  )
}

export default App;