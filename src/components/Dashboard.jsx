import React from 'react';
import DonorCard from './DonorCard';
import styled from 'styled-components';
import CampaignCard from './CampaignCard'


const Dashboard = () => {
    const campaigns = [
      { name: "Education Drive", description: "Supporting education in rural areas.", current: 2, goal: 5 },
      { name: "Health Support", description: "Aid for health facilities.", current: 3, goal: 3 },
      { name: "Reforestation", description: "Planting trees in deforested regions.", current: 1, goal: 4 },
      // Add more campaign details as required
    ];
    return (
      <DashboardContainer>
        <Content>
          <Section>
            <SectionTitle>My Donations</SectionTitle>
            <Grid>
              {Array.from({ length: 6 }).map((_, index) => (
                <DonorCard key={index} />
              ))}
            </Grid>
          </Section>
          <Section>
            <SectionTitle>Created Campaigns</SectionTitle>
            <Grid>
              {campaigns.map((campaign, index) => (
                <CampaignCard
                  key={index}
                  name={campaign.name}
                  description={campaign.description}
                  current={campaign.current}
                  goal={campaign.goal}
                />
              ))}
            </Grid>
          </Section>
        </Content>
      </DashboardContainer>
    );
  };

export default Dashboard;

// Styled components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;