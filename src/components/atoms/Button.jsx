import styled from 'styled-components';
import { B05, W01, G03, G05, B06, G04 } from 'style/palette';

// Imported Components
import { Text } from './Text';

const ButtonColors = {
  active: B05,
  inactive: G03,
};

const HoverColors = {
  active: B06,
  inactive: G04,
};

const FontColors = {
  active: W01,
  inactive: G05,
};

const preventClick = (e) => {
  e.preventDefulat();
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
  const hoverColor = HoverColors[status];

  return (
    <StyledButton
      status={status}
      width={width}
      height={height}
      buttonColor={buttonColor}
      hoverColor={hoverColor}
      onClick={status === 'active' ? onClick : preventClick}
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

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;
