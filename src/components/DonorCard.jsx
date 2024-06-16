import React, { useState } from "react";
import styled from 'styled-components';

const DonorCard = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const donate = () => {
    if (!donationAmount) {
      alert("Please enter a donation amount.");
      return;
    }
    console.log(`Donating ${donationAmount} ETH...`);
    setDonationAmount("");
    alert(`You donated ${donationAmount} ETH.`);
  };

  return (
    <Card>
      <Title>Project Name</Title>
      <Text>With supporting text below as a natural lead-in to additional content.</Text>
      <InputGroup>
        <Input
          type="text"
          placeholder="Enter amount in ETH"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
        <Button onClick={donate}>Donate</Button>
      </InputGroup>
    </Card>
  );
};

export default DonorCard;

// Styled Components
const Card = styled.div`
  background-color: #FFF;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h5`
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;