import React from 'react';
import styled from 'styled-components';

const CampaignCard = ({ name, description, current, goal }) => {
    return (
      <Card>
        <Title>{name}</Title>
        <Text>{description}</Text>
        <Goal>{current} / {goal} ETH</Goal>
      </Card>
    );
  };
  
  export default CampaignCard;
  
  // Styled Components
  const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  
  const Title = styled.h5`
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  `;
  
  const Text = styled.p`
    color: #666;
    font-size: 14px;
    margin-bottom: 20px;
  `;
  
  const Goal = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #4CAF50;
  `;
