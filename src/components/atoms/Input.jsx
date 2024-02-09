import styled from 'styled-components';
import { B01, B05, BK02, G01, G03, G04, R01, R02, W01 } from 'style/palette';

// Imported Components

const BorderColors = {
  active: B05,
  default: G03,
  inactive: G01,
  error: R02,
};

const BgColors = {
  active: B01,
  default: W01,
  inactive: G01,
  error: R01,
};

const FontColors = {
  active: BK02,
  default: BK02,
  inactive: G04,
  error: BK02,
};

export const Input = ({
  width = 'auto',
  height = 'auto',
  status = 'default',
  fontSize = '20px',
  fontWeight = 'bold',
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  type = 'text',
  padding,
  refer,
  ...rest
}) => {
  const borderColor = BorderColors[status];
  const bgColor = BgColors[status];
  const fontColor = FontColors[status];

  return (
    <StyledInput
      onChange={onChange}
      width={width}
      height={height}
      borderColor={borderColor}
      bgColor={bgColor}
      fontColor={fontColor}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      type={type}
      padding={padding}
      autoComplete="off"
      ref={refer}
      {...rest}
    />
  );
};

const StyledInput = styled.input`
  border-radius: 10px;
  border: 2px solid ${({ borderColor }) => borderColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  cursor: text;

  font-family: 'Pretendard-Regular';
  font-size: 16px;
  font-weight: 600;
  color: ${({ fontColor }) => fontColor};
  text-indent: 15px;
  padding: ${({ padding }) => padding};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
  }
`;
