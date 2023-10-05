import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const nav = useNavigate();

  return (
    <NavigationContainer>
      <button onClick={() => nav('/')}>To Home</button>
      <button onClick={() => nav('/makeform')}>To MakeForm</button>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;
`;
