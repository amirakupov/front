import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DonorCard from './DonorCard';
import styled from 'styled-components';
import CampaignCard from './CampaignCard'
import withAuth from '/Users/amirakupov/Desktop/projects/DonateFront/front/src/auth/withAuth.js';


const Dashboard = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
      const fetchProjects = async () => {
          const token = localStorage.getItem('token');
          try {
              const response = await axios.get('/api/projects', {
                  headers: {
                      'x-auth-token': token,
                  },
              });
              setCampaigns(response.data);
          } catch (error) {
              console.error('Error fetching projects', error);
          }
      };

      fetchProjects();
  }, []);
     
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

export default withAuth(Dashboard);

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