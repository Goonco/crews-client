import { Flex, Space } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import likelionLogo from './likelion_logo.jpeg';
function MainCollaborateSection() {
  return (
    <>
      <Space height={'50px'} />
      <H1>
        <span>Crews</span>와 함께하는 동아리
      </H1>
      <CollaborateCrewsSection>
        <BackgroundCircle />
        <Space height={'50px'} />
        <Flex gap={'30'}>
          <CrewImage background={likelionLogo}>
            <OverlayText className="overlay">멋쟁이 사자처럼</OverlayText>
          </CrewImage>
          <CrewImage background={likelionLogo}>
            <OverlayText className="overlay">멋쟁이 사자처럼</OverlayText>
          </CrewImage>
        </Flex>
        <Flex gap={'30'}>
          <CrewImage background={likelionLogo}>
            <OverlayText className="overlay">멋쟁이 사자처럼</OverlayText>
          </CrewImage>
          <CrewImage background={likelionLogo}>
            <OverlayText className="overlay">멋쟁이 사자처럼</OverlayText>
          </CrewImage>
          <CrewImage background={likelionLogo}>
            <OverlayText className="overlay">멋쟁이 사자처럼</OverlayText>
          </CrewImage>
        </Flex>
        <Flex gap={'30'}>
          {' '}
          <CrewImage background={likelionLogo}>
            <OverlayText className="overlay">멋쟁이 사자처럼</OverlayText>
          </CrewImage>
          <CrewImage background={likelionLogo}>
            <OverlayText className="overlay">멋쟁이 사자처럼</OverlayText>
          </CrewImage>
        </Flex>
      </CollaborateCrewsSection>
    </>
  );
}

const CollaborateCrewsSection = styled.div`
  position: relative;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  top: 100px;
  left: 230px;
  width: 264px;
  height: 264px;
  flex-shrink: 0;
  border-radius: 264px;
  background: var(--blue-b-03, #bacff8);
  filter: blur(50px);
`;

const CrewImage = styled.div`
  width: 96.128px;
  height: 95.327px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 96.128px;
  background: url(${likelionLogo});
  background-size: cover;
  .mask {
    p
    display: none;
    width: 96.128px;
    height: 95.327px;
    border-radius: 96.128px;
  }
  &:hover {
    filter: brightenss(0.4);
    .overlay {
      opacity: 1;
      color: white;
    }
    ,
    mask {
      display: block;
    }
  }
`;
const OverlayText = styled.div`
  font-size: 14px;
  margin-top: 20px;
  display: flex;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  position: relative;
  z-index: 3;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.36px;
  opacity: 0;
  word-break: keep-all;
`;

const H1 = styled.h1`
  color: var(--black-bk-02, #101010);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 140% */
  letter-spacing: -0.6px;
  span {
    color: var(--blue-b-05-m, #3172ea);
    font-family: Poppin;
    text-indent: 10px;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.72px;
    padding-right: 10px;
  }
`;
export default MainCollaborateSection;
