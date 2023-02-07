import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Event from './Event';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    aling-items: center;
`;

const ContainerEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5px;
`;

const EventsList = () => {

  let { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const getEvents = async () => {

      try {

        const res = await axios.get(category ? `http://localhost:5000/api/events?category=${category}` : 'http://localhost:5000/api/events');

        setEvents(res.data);
        setLoading(false);

      } catch (error) {
        console.log(error);
      }

    }

    getEvents();

  }, []);

  return (
    <Container>

      <h1>Open events!</h1>

      <ContainerEvents>
        {
          loading
            ? <h1>Loading...</h1>
            : events.map((item) => (
              <Event key={item._id} item={item} />
            ))
        }
      </ContainerEvents>

    </Container>
  );
};

export default EventsList;