import React from 'react';
import useJsonData from "./useJsonData";
import data from './data.json';

describe('useJsonData methods', () => {
  it('`dataArray` should return repayments array', () => {
    const {dataArray} = useJsonData(data);
    expect(dataArray).toEqual(data.repayments);
  });

  it('`getDataByType` should return array of particular data', () => {
    const testType = 'FAILED';
    const expectedArray = [
      {
        "date": "2020-09-01T00:00:00+10:00",
        "type": "FAILED",
        "description": "Quisque sodales lorem",
        "amount": 1.44
      },
      {
        "date": "2020-08-28T00:00:00+10:00",
        "type": "FAILED",
        "description": "Aenean elementum interdum",
        "amount": 0.45
      }
    ]

    const {getDataByType} = useJsonData(data);
    expect(getDataByType(testType)).toEqual(expectedArray);
  });

  it('`getTypes` should return array of types', () => {
    const typesArray = ['PENDING', 'FAILED', 'PROCESSED'];

    const {getTypes} = useJsonData(data);
    expect(getTypes()).toEqual(typesArray);
  });
});