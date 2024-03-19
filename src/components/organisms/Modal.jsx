import styled from 'styled-components';

export const Modal = ({ isOpen, children, align = 'center' }) => {
  const marginTop = align === 'start' ? '100px' : '0';

  // const preventBubbling = (e) => {
  //   if (e.target === e.currentTarget) toggleOpen();
  // };

  return (
    <OuterDiv
      align={align}
      className={isOpen ? 'openOuter' : ''}
      // onClick={preventBubbling}
    >
      <InnerDiv marginTop={marginTop} className={isOpen ? 'openInner' : ''}>
        {children}
      </InnerDiv>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  overflow: scroll;
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;

  &.openOuter {
    display: flex;
    align-items: ${({ align }) => align};
    justify-content: center;
    animation: open-Outer 0.3s;
  }

  @keyframes open-Outer {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const InnerDiv = styled.div`
  display: none;
  position: absolute;

  width: fit-content;
  height: fit-content;

  margin-top: ${({ marginTop }) => marginTop};

  z-index: 999;

  &.openInner {
    display: block;
    animation: open-Inner 0.7s;
  }

  @keyframes open-Inner {
    from {
      opacity: 0;
      margin-bottom: -50px;
    }
    to {
      opacity: 1;
      margin-bottom: 0;
    }
  }
`;
