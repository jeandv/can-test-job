import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { mobile } from '../../styles/responsive-config';
import { categories } from '../../data';

const Container = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px 0;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;