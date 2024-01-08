import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useQuestion from '../hooks/useQuestion';

import { W01, G02, G06, B05 } from 'style/palette';
import {
  faCircleCheck,
  faFont,
  faFolder,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const QuestionHeader = ({ questionType, idx }) => {
  const { changeType, deleteQuestion } = useQuestion();

  return (
    <QuestionTypeBoxContainer>
      <TypeButton
        onClick={() => changeType(idx, 'checkbox')}
        className={'fa-xl' + (questionType === 'checkbox' ? ' selected' : '')}
        children={<FontAwesomeIcon icon={faCircleCheck} />}
      />
      <TypeButton
        onClick={() => changeType(idx, 'descriptive')}
        className={
          'fa-xl' + (questionType === 'descriptive' ? ' selected' : '')
        }
        children={<FontAwesomeIcon icon={faFont} />}
      />
      <TypeButton
        className={'fa-xl' + (questionType === 'file' ? ' selected' : '')}
        children={<FontAwesomeIcon icon={faFolder} />}
      />
      <TypeButton
        className={'fa-xl'}
        children={<FontAwesomeIcon icon={faXmark} />}
        onClick={() => deleteQuestion(idx)}
      />
    </QuestionTypeBoxContainer>
  );
};

const QuestionTypeBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  border: 1px solid ${G02};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  width: fit-content;
  padding: 12px;

  background-color: ${W01};

  // Type 선택창의 Overlap을 위한 CSS
  position: relative;
  margin-bottom: -1px;
  z-index: 1;
`;

const TypeButton = styled.button`
  color: ${G06};

  &.selected {
    color: ${B05};
  }
`;

export default QuestionHeader;
