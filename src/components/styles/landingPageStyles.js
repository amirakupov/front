import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
`;

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    background: #1e1e1e;
`;

export const Logo = styled.h1`
    color: #ffffff;
    font-size: 24px;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 20px;
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        text-decoration: underline;
    }
`;

export const MainSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    max-width: 1200px;
    width: 100%;
`;

export const Content = styled.div`
    max-width: 600px;
`;

export const Title = styled.h2`
    font-size: 48px;
    color: #333;
`;

export const Subtitle = styled.p`
    font-size: 24px;
    color: #666;
    margin: 20px 0;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 20px;
`;

export const PrimaryButton = styled(Link)`
    padding: 15px 30px;
    background: #ff6f61;
    color: #fff;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        background: #ff3b2f;
    }
`;

export const SecondaryButton = styled(Link)`
    padding: 15px 30px;
    background: #ddd;
    color: #333;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        background: #ccc;
    }
`;

export const HeroImage = styled.img`
    max-width: 600px;
    width: 100%;
`;

export const FeaturesSection = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 50px;
    background: #f9f9f9;
    width: 100%;
`;

export const Feature = styled.div`
    text-align: center;
    max-width: 300px;
`;

export const FeatureIcon = styled.div`
    font-size: 48px;
`;

export const FeatureTitle = styled.h3`
    font-size: 24px;
    margin: 20px 0 10px;
`;

export const FeatureDescription = styled.p`
    font-size: 16px;
    color: #666;
`;

export const Footer = styled.footer`
    padding: 20px;
    background: #1e1e1e;
    color: #fff;
    width: 100%;
    text-align: center;
`;

export const FooterText = styled.p`
    font-size: 14px;
`;
