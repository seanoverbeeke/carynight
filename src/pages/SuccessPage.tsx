import styled from 'styled-components';
import caryImage from '../assets/cary.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 414px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--netflix-black);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
  color: var(--netflix-red);
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;

const CaryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Message = styled.p`
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
`;

const SuccessPage = () => {
  return (
    <Container>
      <Title>Payment Successful!</Title>
      <Subtitle>Your one night with Cary is confirmed</Subtitle>
      
      <ImageContainer>
        <CaryImage src={caryImage} alt="Cary" />
      </ImageContainer>
      
      <Message>Have at him!</Message>
    </Container>
  );
};

export default SuccessPage; 