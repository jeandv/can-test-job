import { Link } from 'react-router-dom';
import { InvertColors, SearchOutlined, ShoppingCartOutlined, } from '@material-ui/icons';
import styled from 'styled-components';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: relative;
    filter: grayscale();
  transition: all ease 300ms;
  &:hover {
    filter: none;
  }
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;  
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #000;
    color: white;
    transform: scale(1.1);
  }
`;

const Event = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/event/${item._id}`} style={{ color: '#5796fa' }}>
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Event;