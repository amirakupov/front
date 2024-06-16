import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Input, ErrorMessage, ToggleLink } from './styles/authStyles';

function Auth() {
    const [name, setName] = useState(''); // Updated to include name
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isLogin) {
                response = await axios.post('/api/auth/login', { email, password });
            } else {
                response = await axios.post('/api/auth/register', { name, email, password });
            }

            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/dashboard');
        } catch (err) {
            let errorMessage = 'An unexpected error occurred. Please try again.';
            if (err.response) {
                switch (err.response.status) {
                    case 400:
                        errorMessage = 'Missing credentials or data validation error.';
                        break;
                    case 401:
                        errorMessage = 'Invalid credentials. Please try again.';
                        break;
                    case 404:
                        errorMessage = 'Server not found. Please check your network connection.';
                        break;
                    case 500:
                        errorMessage = 'Server error. Please try again later.';
                        break;
                    default:
                        errorMessage = err.response.data || errorMessage;
                }
            }
            setError(errorMessage);
        }        
    };

    return (
        <Container>
            <h2>{isLogin ? 'Login' : 'Sign up'}</h2>
            <Form onSubmit={handleSubmit}>
                {!isLogin && (
                    <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                )}
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">{isLogin ? 'Login' : 'Sign up'}</Button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Form>
            <ToggleLink onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Sign up now" : 'Already have an account? Login'}
            </ToggleLink>
        </Container>
    );
}

export default Auth;
