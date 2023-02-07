import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import { publicRequest } from '../services/requestMethods';
import { addEventToCart } from '../redux/cartRedux';
import { mobile } from '../styles/responsive-config';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;
  &:hover{
      background-color: #000;
      color: white;
  }
`;

const EventDetails = () => {

  const location = useLocation();

  const id = location.pathname.split('/')[2];

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {

    const getEvent = async () => {

      try {

        const res = await publicRequest.get(`/events/find/${id}`);

        setLoading(false);
        setEvent(res.data);

      } catch (error) {
        console.log(error);
      }

    }

    getEvent();

  }, [id]);

  const handleClick = () => {

    dispatch(addEventToCart({ ...event, quantity }));

  }

  return (
    <Container>
      {
        loading
          ? <h1>Loading...</h1>
          : <Wrapper>

            <ImgContainer>
              <Image src={event.img} />
            </ImgContainer>

            <InfoContainer>

              <Title>{event.title}</Title>

              <Desc>{event.desc}</Desc>

              <AddContainer>

                <Price>$ {event.price}</Price>

                <AmountContainer>
                  <Remove onClick={() => quantity > 1 ? setQuantity(quantity - 1) : console.log('quantity: 0')} style={{ cursor: 'pointer' }} />
                  <Amount>{quantity}</Amount>
                  <Add onClick={() => setQuantity(quantity + 1)} style={{ cursor: 'pointer' }} />
                </AmountContainer>

                <Button onClick={handleClick}>ADD TO CART</Button>

              </AddContainer>

            </InfoContainer>

          </Wrapper>
      }
    </Container>
  );
};

export default EventDetails;