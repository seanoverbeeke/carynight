import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import caryImage from '../assets/cary2.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  max-width: 414px; /* iPhone aspect ratio */
  margin: 0 auto;
  padding: 40px 20px;
  background-color: var(--netflix-black);
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const CaryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #e8b708; /* Gold color */
`;

const Price = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: var(--netflix-red);
  color: white;
  border: none;
  padding: 16px 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin: 30px 0;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: #f40612;
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/payment');
  };

  return (
    <Container>
      <ImageContainer>
        <CaryImage src={caryImage} alt="Cary" />
      </ImageContainer>
      <Title>Enjoy One Night with Cary</Title>
      <Price>$7.99</Price>
      <Button onClick={handleOrderClick}>ORDER NOW</Button>
    </Container>
  );
};

export default LandingPage; 