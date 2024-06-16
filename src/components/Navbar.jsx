import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/create-campaign">Create Campaign</StyledLink>
      <StyledLink to="/donation-campaigns">Donation Campaigns</StyledLink>
      <Button>Connect Wallet</Button>
      <Button style={{ marginLeft: 'auto' }}>Donate Fund</Button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #2e2e2e;
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #646cff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: #535bf2;
  }
`;