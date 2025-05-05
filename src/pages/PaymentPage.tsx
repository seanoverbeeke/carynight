import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 414px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--netflix-black);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
`;

const PaymentPortal = styled.div`
  width: 100%;
  background-color: var(--netflix-dark);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid var(--netflix-gray);
  background-color: #333;
  color: white;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: var(--netflix-red);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const PurchaseButton = styled(Button)`
  background-color: var(--netflix-red);
  color: white;
`;

const SubscribeButton = styled(Button)`
  background-color: #333;
  color: white;
  border: 1px solid var(--netflix-gray);
`;

const InfoText = styled.p`
  font-size: 12px;
  color: var(--netflix-gray);
  margin-top: 16px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: var(--netflix-gray);
  font-size: 24px;
  cursor: pointer;
`;

const PaymentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: '4242 4242 4242 4242', // Demo credit card
    expiry: '12/24',
    cvv: '123',
    name: 'Demo User'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  const handleSubscribe = () => {
    window.location.href = 'https://www.believeplus.com';
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>Payment Details</Title>
      <PaymentPortal>
        <CloseButton onClick={handleBack}>×</CloseButton>
        <Form onSubmit={handlePurchase}>
          <FormGroup>
            <Label>Card Number</Label>
            <Input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Name on Card</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </FormGroup>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <FormGroup style={{ flexGrow: 1 }}>
              <Label>Expiry Date</Label>
              <Input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
              />
            </FormGroup>
            
            <FormGroup style={{ width: '100px' }}>
              <Label>CVV</Label>
              <Input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
              />
            </FormGroup>
          </div>
          
          <OptionsContainer>
            <PurchaseButton type="submit">Purchase One Night with Cary ($7.99)</PurchaseButton>
            <SubscribeButton type="button" onClick={handleSubscribe}>Subscribe to BELIEVE+</SubscribeButton>
          </OptionsContainer>
          
          <InfoText>
            This is a demo payment portal. No actual charges will be processed.
          </InfoText>
        </Form>
      </PaymentPortal>
    </Container>
  );
};

export default PaymentPage; 