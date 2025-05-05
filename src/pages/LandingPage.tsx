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
  padding: 40px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  background-size: cover;
  background-position: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Price = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 40px 0;
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
  margin-bottom: 60px;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: #f40612;
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/payment');
  };

  return (
    <Container>
      <Title>Enjoy One Night with Cary</Title>
      <Price>$7.99</Price>
      <Button onClick={handleYesClick}>Yes</Button>
    </Container>
  );
};

export default LandingPage; 