import Layout from './components/layout/Layout';
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
    </Layout>
  )
}

export default App;