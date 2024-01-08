import styled from 'styled-components';
import { useState } from 'react';

// Imported Functions & Datas
import useSection from './hooks/useSection';
import useQuestion from './hooks/useQuestion';
import { G06, BK01 } from 'style/palette';

// Imported Components
import SectionBox from './Section/SectionBox';
import MakeFormHeader from './MakeFormHeader';
import LoadingPage from './LoadingPage';
import { Button, Text } from 'components/atoms';

export const MakeFormPage = () => {
  const [loading, setLoading] = useState(0);
  const { sectionData, addSection } = useSection();
  const { questionData } = useQuestion();

  if (loading !== 0) return <LoadingPage />;
  else
    return (
      <MakeFormWrapper>
        <MakeFormContainer>
          <MakeFormHeader />

          <MakeFormContent>
            {sectionData.map((it, idx) => (
              <SectionBox key={idx} sectionData={it} idx={idx} />
            ))}
          </MakeFormContent>

          <MakeFormFooter>
            <NewSectionButton
              color={G06}
              onClick={addSection}
              children={
                <Text
                  size="20px"
                  weight="400"
                  children="새로운 섹션 추가하기"
                />
              }
            />

            <Button
              status="active"
              width="392px"
              height="65px"
              children="모집 공고 등록하기"
              onClick={() =>
                console.log(
                  JSON.stringify(sectionData, null, 2),
                  JSON.stringify(questionData, null, 2)
                )
              }
            />
          </MakeFormFooter>
        </MakeFormContainer>
      </MakeFormWrapper>
    );
};

const MakeFormWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

const MakeFormContainer = styled.div`
  width: 760px;
  margin: 0 auto;
`;

const MakeFormContent = styled.div`
  margin-bottom: 50px;
`;

const MakeFormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 80px;
  margin-bottom: 80px;
`;

const NewSectionButton = styled.button`
  border-bottom: 1px solid ${({ color }) => color};
  color: ${G06};
  &:hover {
    color: ${BK01};
  }
`;
