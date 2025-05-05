import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  max-width: 414px; /* iPhone aspect ratio */
  margin: 0 auto;
  padding: 10px;
  background-color: var(--netflix-black);
  text-align: center;
  overflow-y: auto;
`;

const ImageContainer = styled.div`
  width: 80%;
  margin-bottom: 5px;
`;

const CaryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 5px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #e8b708; /* Gold color */
`;

const Price = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: var(--netflix-red);
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0 20px;
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
        <CaryImage src="/cary2.png" alt="Cary" />
      </ImageContainer>
      <Title>Enjoy One Night with Cary</Title>
      <Price>$7.99</Price>
      <Button onClick={handleOrderClick}>ORDER NOW</Button>
    </Container>
  );
};

export default LandingPage; 