import { sectionDataAtom, questionDataAtom } from './MakeFormAtom';
import { useRecoilState } from 'recoil';

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

const useSection = () => {
  const [sectionData, setSectionData] = useRecoilState(sectionDataAtom);
  const [questionData, setQuestionData] = useRecoilState(questionDataAtom);

  const addSection = () => {
    if (sectionData.length >= 5) {
      alert('섹션은 5개까지만 추가할 수 있습니다.');
      return;
    }

    let newName;
    do {
      newName = generateRandomString();
    } while (!isUniqueSectionName(sectionData, newName));

    const newId = sectionData[sectionData.length - 1].id + 1;
    setSectionData((prev) => [
      ...prev,
      {
        id: newId,
        sectionName: newName,
        sectionDescription: '',
      },
    ]);
  };

  const deleteSection = (idxToRemove) => {
    if (!window.confirm('섹션 삭제 시 내부의 생성된 질문들이 모두 삭제됩니다.'))
      return;

    // 질문 데이터 삭제
    const newQuestionData = questionData.filter(
      (ques) => ques.sectionId !== sectionData[idxToRemove].id
    );
    setQuestionData(newQuestionData);

    // 섹션 데이터 삭제
    const newSectionData = [...sectionData];
    newSectionData.splice(idxToRemove, 1);
    setSectionData(newSectionData);
  };

  const changeSection = (e, idxToChange) => {
    const { name, value } = e.target;
    const newSectionData = sectionData.map((section, idx) => {
      if (idx === idxToChange) return { ...section, [name]: value };
      return section;
    });
    setSectionData(newSectionData);
  };

  return { sectionData, addSection, deleteSection, changeSection };
};

export const useMySection = () => {
  return useRecoilState(sectionDataAtom);
};

export default useSection;
