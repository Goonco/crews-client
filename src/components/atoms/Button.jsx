import styled from 'styled-components';
import { B05, W01, G03, G05 } from 'style/palette';

// Imported Components
import { Text } from './Text';

const ButtonColors = {
  active: B05,
  inactive: G03,
};

const FontColors = {
  active: W01,
  inactive: G05,
};

export const Button = ({
  width = 'auto',
  height = 'auto',
  status = 'active',
  fontSize = '16px',
  fontWeight = 'bold',
  onClick,
  children,
  className,
}) => {
  const buttonColor = ButtonColors[status];
  const fontColor = FontColors[status];

  return (
    <StyledButton
      status={status}
      width={width}
      height={height}
      buttonColor={buttonColor}
      onClick={onClick}
      className={className}
    >
      <Text
        size={fontSize}
        color={fontColor}
        weight={fontWeight}
        children={children}
      />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ buttonColor }) => buttonColor};
  cursor: ${({ status }) => (status === 'inactive' ? 'default' : 'pointer')};
`;
