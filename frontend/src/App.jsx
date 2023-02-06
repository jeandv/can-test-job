import Layout from './components/layout/Layout';
import Cart from './pages/Cart';
import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {

  return (
    <Layout>
      <Home />
      <EventDetails />
      <Login />
      <Register />
      <Cart />
    </Layout>
  )
}

export default App;