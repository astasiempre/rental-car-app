// import { Container, Block, Title, StyledLink } from './SecondPage.styled';
import { Container } from './SecondPage.styled';
// import example from '../../assets/example.png';
import { CardsGallery } from '../../components/Cards/CardsGallery';
const SecondPage = () => {
  return (
    <Container>
      {/* <Title>First Page</Title> */}
      <CardsGallery />
      {/* <StyledImage src={example} alt="Example" /> */}
    </Container>
  );
};

export default SecondPage;
