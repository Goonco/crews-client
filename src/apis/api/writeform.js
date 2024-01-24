import { baseInstance, authInstance } from 'apis/utils/instance';

const WRITE_FORM_DEFAULT = 'writeform';

export const WRITE_FORM_REQUEST = {
  sectionData: WRITE_FORM_DEFAULT + '/sectiondata',
  questionData: WRITE_FORM_DEFAULT + '/questiondata',
};

export const writeformApi = {
  getSection: async () => {
    return await baseInstance.get(WRITE_FORM_REQUEST.sectionData);
  },
  getQuestion: async () => {
    return await baseInstance.get(WRITE_FORM_REQUEST.questionData);
  },
};
