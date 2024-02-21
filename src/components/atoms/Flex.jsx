import styled from 'styled-components';

export const Flex = ({
  children,
  width = 'auto',
  height = 'auto',
  direction = 'row',
  justify = 'center',
  align = 'center',
  gap = 0,
  wrap = 'no-wrap',
  className,
}) => {
  return (
    <FlexBase
      height={height}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      width={width}
      wrap={wrap}
      className={className}
    >
      {children}
    </FlexBase>
  );
};

const FlexBase = styled.div`
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: ${({ wrap }) => wrap};
`;
