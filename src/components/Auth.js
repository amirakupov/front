import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Input, ErrorMessage } from './styles/authStyles';

function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isLogin) {
                response = await axios.post('/api/auth/login', { username, password });
            } else {
                response = await axios.post('/api/auth/register', { username, password, email });
            }

            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/profile');
        } catch (err) {
            setError(err.response ? err.response.data.error : 'error');
        }
    };

    return (
        <Container>
            <h2>{isLogin ? 'Login' : 'Sign up'}</h2>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                {!isLogin && (
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                )}
                <Input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">{isLogin ? 'login' : 'sign up'}</Button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Form>
            <Button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? ' Still dont have an account? sign up now' : 'Already have an account? register'}
            </Button>
        </Container>
    );
}

export default Auth;
