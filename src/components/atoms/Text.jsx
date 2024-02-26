import styled from 'styled-components';

export const Text = ({
  size = 1,
  weight = 500,
  color = 'inherit',
  children,
  variant,
  as = 'span',
  spacing = '-0px',
  font = 'Pretendard-Regular',
  cursor = 'inherit',
  underline = false,
  lineHeight = '120%',
  align = 'center',
  shadow = false,
  white = false,
  blue = false,
  isCut = false,
  ...rest
}) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      variant={variant}
      as={as}
      spacing={spacing}
      font={font}
      align={align}
      cursor={cursor}
      underline={underline}
      lineHeight={lineHeight}
      shadow={shadow}
      white={white}
      blue={blue}
      isCut={isCut}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  word-wrap: break-word;
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  overflow: ${({ isCut }) => (isCut ? 'hidden' : '')};
  text-overflow: ${({ isCut }) => (isCut ? 'ellipsis' : '')};
  display: ${({ isCut }) => (isCut ? '-webkit-box' : '')};
  -webkit-line-clamp: ${({ isCut }) => (isCut ? 1 : '')};
  -webkit-box-orient: ${({ isCut }) => (isCut ? 'vertical' : '')};

  letter-spacing: ${({ spacing }) => spacing};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ font }) => font};
  cursor: ${({ cursor }) => cursor};

  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
`;
