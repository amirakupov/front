import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #242424;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background: #1e1e1e;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

export const Button = styled.button`
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    background: #ff6f61;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
    background: #ff3b2f;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
`;
export const ToggleLink = styled.p`
  color: #646cff;
  cursor: pointer;
  margin-top: 1rem;
  text-align: center;

  &:hover {
    color: #535bf2;
  }
`;
