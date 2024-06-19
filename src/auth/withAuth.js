import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const withAuth = (WrappedComponent) => {
    const AuthenticatedComponent = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const checkAuth = async () => {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/auth');
                    return;
                }

                try {
                    await axios.get('/api/auth/verify', {
                        headers: {
                            'x-auth-token': token,
                        },
                    });
                } catch (err) {
                    navigate('/auth');
                }
            };

            checkAuth();
        }, [navigate]);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;
