import React from 'react';
import {
    LandingContainer,
    Navbar,
    Logo,
    NavLinks,
    NavLink,
    MainSection,
    Content,
    Title,
    Subtitle,
    ButtonGroup,
    PrimaryButton,
    SecondaryButton,
    HeroImage,
    FeaturesSection,
    Feature,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
    Footer,
    FooterText,
} from './styles/landingPageStyles'; // Adjusted path

const LandingPage = () => {
    return (
        <LandingContainer>
            <Navbar>
                <Logo>Donate Chain</Logo>
                <NavLinks>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/how-it-works">How it Works</NavLink>
                    <NavLink to="/auth">Login</NavLink>
                </NavLinks>
            </Navbar>
            <MainSection>
                <Content>
                    <Title>Empower Change with Crypto Donations</Title>
                    <Subtitle>Seamless, Secure, and Transparent.</Subtitle>
                    <ButtonGroup>
                        <PrimaryButton to="/auth">Get Started</PrimaryButton>
                        <SecondaryButton to="/learn-more">Learn More</SecondaryButton>
                    </ButtonGroup>
                </Content>
                <HeroImage src="https://via.placeholder.com/600x400" alt="Donate Chain Hero" />
            </MainSection>
            <FeaturesSection>
                <Feature>
                    <FeatureIcon>🔒</FeatureIcon>
                    <FeatureTitle>Secure</FeatureTitle>
                    <FeatureDescription>Your donations are secured with blockchain technology.</FeatureDescription>
                </Feature>
                <Feature>
                    <FeatureIcon>🌐</FeatureIcon>
                    <FeatureTitle>Global</FeatureTitle>
                    <FeatureDescription>Support causes from around the world with ease.</FeatureDescription>
                </Feature>
                <Feature>
                    <FeatureIcon>🔍</FeatureIcon>
                    <FeatureTitle>Transparent</FeatureTitle>
                    <FeatureDescription>Track your donations and see the impact.</FeatureDescription>
                </Feature>
            </FeaturesSection>
            <Footer>
                <FooterText>&copy; 2024 Donate Chain. All rights reserved.</FooterText>
            </Footer>
        </LandingContainer>
    );
};

export default LandingPage;
