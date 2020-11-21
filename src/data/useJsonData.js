/**
 * Manipulate Json data as required by Tabs/Tables
 *
 * @param data Data array consists of Json objects
 * @returns {{dataArray: *, getDataByType: (function(*): *), getTypes: (function(): *)}}
 */
const useJsonData = (data) => {
  const dataArray = data.repayments;

  const getDataByType = (type) => {
    return dataArray.filter(record => record.type === type);
  }

  const getTypes = () => {
    const types = dataArray.map(record => record.type);
    return types.filter((type, index, array) => array.indexOf(type) === index);
  }

  return {
    dataArray,
    getDataByType,
    getTypes,
  };
};

export default useJsonData;
