export const generateRandomString = () => {
  const characters = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < 10; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
};

export const isUniqueSectionName = (sectionList, newName) => {
  const isUnique = sectionList.every(
    (section) => section.sectionName !== newName
  );
  return isUnique;
};
