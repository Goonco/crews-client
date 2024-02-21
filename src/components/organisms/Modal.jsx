import styled from 'styled-components';

export const Modal = ({ isOpen, toggleOpen, children }) => {
  const preventBubbling = (e) => {
    if (e.target === e.currentTarget) toggleOpen();
  };

  return (
    <OuterDiv className={isOpen ? 'openOuter' : ''} onClick={preventBubbling}>
      <InnerDiv className={isOpen ? 'openInner' : ''}>{children}</InnerDiv>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;

  &.openOuter {
    display: block;
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

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 999;

  &.openInner {
    display: block;
    animation: open-Inner 0.7s;
  }

  @keyframes open-Inner {
    from {
      opacity: 0;
      transform: translate(-50%, -70%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;
