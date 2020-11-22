/**
 * Manipulate Json data as required by Tabs/Tables
 *
 * @param data Data array consists of Json objects
 * @returns {{dataArray: *, getDataByType: (function(*): *), getTypes: (function(): *)}}
 */
const useJsonData = (data) => {
  let jsonData = data && data.payments ? data : {payments: []};

  const getDataByType = (type) => {
    return jsonData.payments.filter(record => record.type === type);
  }

  const getData = () => {
    return jsonData;
  }

  const setData = (newData) => {
    jsonData = newData;
  }

  const getTypes = () => {
    const types = jsonData.payments.map(record => record.type);
    return types.filter((type, index, array) => array.indexOf(type) === index);
  }

  return {
    getData,
    setData,
    getDataByType,
    getTypes,
  };
};

export default useJsonData;
