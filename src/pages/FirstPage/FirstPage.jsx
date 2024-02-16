import { Container } from './FirstPage.styled';
// import example from '../../assets/example.png';
import { CardsGallery } from '../../components/Cards/CardsGallery';

const FirstPage = () => {
  return (
    <Container>
      {/* <Title>First Page</Title> */}
      <CardsGallery/>
      {/* <StyledImage src={example} alt="Example" /> */}
    </Container>
  );
};

export default FirstPage;
