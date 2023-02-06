import styled from 'styled-components';
import { nextEvents } from '../../data';
import Event from './Event';

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
  return (
    <Container>

      <h1>Open events!</h1>

      <ContainerEvents>
        {
          nextEvents.map((item) => (
            <Event item={item} key={item.id} />
          ))
        }
      </ContainerEvents>

    </Container>
  );
};

export default EventsList;