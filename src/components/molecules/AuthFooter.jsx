import { B02, W01 } from 'style/palette';
import styled from 'styled-components';

export const AuthFooter = ({ children }) => {
  return <FooterContainer>{children}</FooterContainer>;
};

const FooterContainer = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  z-index: 10;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  width: 100vw;
  padding: 10px 20px;
  background-color: ${W01};
  border-top: 1px solid ${B02};
`;
