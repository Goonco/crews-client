import styled from 'styled-components';
import { useRecoilState } from 'recoil';

// Imported Functions & Datas
import { addQuestion, deleteSecition } from './formFunctions';
import { sectionDataAtom, questionDataAtom } from './FormAtom';

// Imported Components
import { Space } from 'components/atoms';
import SectionName from './SectionName';
import QuestionBox from './QuestionBox';

const SectionBox = ({ section }) => {
  const { section_name, section_description } = { ...section };
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  return (
    <SectionContainer>
      <SectionName section_name={section_name} />
      <Space height="50px" />
      <SectionDescriptionContainer children={section_description} />

      <Space height="50px" />
      <QuestionBox sectionName={section_name} />

      <MyButton
        onClick={() => addQuestion(section_name, questionData, setQuestionData)}
        children="질문 추가"
      />
      {section_name !== '공통' && (
        <MyButton
          onClick={() =>
            deleteSecition(
              section_name,
              sectionData,
              setSectionData,
              questionData,
              setQuestionData
            )
          }
          children="섹션 삭제"
        />
      )}
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  border: 2px solid black;

  width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const SectionDescriptionContainer = styled.div`
  border: 1px solid black;
  height: 100px;
`;

const MyButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: green;
  color: white;
`;

export default SectionBox;