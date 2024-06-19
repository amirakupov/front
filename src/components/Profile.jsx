import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ProfileContainer, ProfileText, Button } from './styles/profileStyles';
import { useNavigate } from 'react-router-dom';
import withAuth from '/Users/amirakupov/Desktop/projects/DonateFront/front/src/auth/withAuth.js';

function Profile() {
    const [profileData, setProfileData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/auth');
                return;
            }

            try {
                const response = await axios.get('/api/users/me', {
                    headers: {
                        'x-auth-token': token,
                    },
                });
                console.log(response.data);
                setProfileData(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProfileData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth');
    };

    return (
        <Container>
            <ProfileContainer>
                <h2>User Profile</h2>
                <ProfileText>Username: {profileData.name}</ProfileText>
                <ProfileText>Email: {profileData.email}</ProfileText>
                <Button onClick={handleLogout}>Logout</Button>
            </ProfileContainer>
        </Container>
    );
}

export default withAuth(Profile);
