import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
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
  width: 70%;
  height: 70%;
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
  return (
    <Container>
      <Wrapper>

        <ImgContainer>
          <Image src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/battle-of-the-bands-banner-design-template-68716fe3da89747750fcab159e1a2e02_screen.jpg?ts=1628671666' />
        </ImgContainer>

        <InfoContainer>

          <Title>Battle of Bands</Title>

          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>


          <AddContainer>

            <Price>$ 20</Price>

            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>

            <Button>ADD TO CART</Button>

          </AddContainer>

        </InfoContainer>

      </Wrapper>
    </Container>
  );
};

export default EventDetails;