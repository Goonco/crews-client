import { sectionDataAtom, questionDataAtom } from './MakeFormAtom';
import { useRecoilState } from 'recoil';
import { produce } from 'immer';

const generateRandomString = () => {
  const characters = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < 10; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
};

const isUniqueSectionName = (sectionList, newName) => {
  const isUnique = sectionList.every(
    (section) => section.sectionName !== newName
  );
  return isUnique;
};

const generateUniqueName = (sectionData) => {
  let newName;
  do {
    newName = generateRandomString();
  } while (!isUniqueSectionName(sectionData, newName));
  return newName;
};

export const useSection = () => {
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  const addSection = () => {
    if (sectionData.length >= 5) {
      alert('섹션은 5개까지만 추가할 수 있습니다.');
      return;
    }

    const nextState = produce(sectionData, (draftState) => {
      draftState.push({
        id: sectionData[sectionData.length - 1].id + 1,
        sectionName: generateUniqueName(sectionData),
        sectionDescription: '',
      });
    });
    setSectionData(nextState);
  };

  const deleteSection = (sectionId) => {
    if (!window.confirm('섹션 삭제 시 내부의 생성된 질문들이 모두 삭제됩니다.'))
      return;

    setQuestionData(
      questionData.filter((ques) => ques.sectionId !== sectionId)
    );
    setSectionData(sectionData.filter((section) => section.id !== sectionId));
  };

  const changeSection = (e, sectionId) => {
    const { name, value } = e.target;

    const nextState = produce(sectionData, (draftState) => {
      draftState.forEach((section, idx) => {
        if (section.id === sectionId) draftState[idx][name] = value;
      });
    });
    setSectionData(nextState);
  };

  return {
    sectionData,
    setSectionData,
    addSection,
    deleteSection,
    changeSection,
  };
};
