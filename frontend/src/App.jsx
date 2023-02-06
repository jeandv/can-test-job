import Layout from './components/layout/Layout';
import EventDetails from './pages/EventDetails';
import Home from './pages/Home';

const App = () => {

  return (
    <Layout>
      <Home />
      <EventDetails />
    </Layout>
  )
}

export default App;