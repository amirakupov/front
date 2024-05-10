import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ProfileContainer, ProfileText, Button } from './styles/profileStyles';
import { useNavigate } from 'react-router-dom';

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
                const response = await axios.get('/api/profile/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(response.data);
            } catch (err) {
                console.error(err);
                navigate('/auth');
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
                <h2>User profile</h2>
                <ProfileText>user name: {profileData.username}</ProfileText>
                <ProfileText>email: {profileData.email}</ProfileText>
                <Button onClick={handleLogout}>logout</Button>
            </ProfileContainer>
        </Container>
    );
}

export default Profile;
