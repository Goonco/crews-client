import styled from 'styled-components';

import { B02 } from 'style/palette';

import { Button } from 'components/atoms';

const ConfirmBar = () => {
  return (
    <ConfirmBarContainer>
      <ConfirmButton
        width="250px"
        height="60px"
        children="지원서 평가 완료하기"
      />
    </ConfirmBarContainer>
  );
};

const ConfirmBarContainer = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  padding: 20px 30px;
  background-color: ${B02};
`;

const ConfirmButton = styled(Button)`
  margin-left: auto;
`;

export default ConfirmBar;
