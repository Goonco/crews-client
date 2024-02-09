import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Middle = () => {
  const nav = useNavigate();

  return (
    <div>
      <Tmp onClick={() => nav('/evaluateform/1')}>To Evaluate</Tmp>
      <Tmp onClick={() => nav('/writeform')}>To Write</Tmp>
    </div>
  );
};

const Tmp = styled.button`
  width: 100px;
  height: 30px;
  background-color: red;
  border-bottom: 3px solid orangered;
`;

export default Middle;
