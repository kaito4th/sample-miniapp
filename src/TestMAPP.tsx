import React from 'react';
import type { TestScreenOneDataIn } from './types/dataIn';
import type { TestDataLoad } from './types';
import ScreenOne from './screens/ScreenOne/ScreenOne';
import ScreenTwo from './screens/ScreenTwo/ScreenTwo';

type Props = {
  dataLoad: TestDataLoad;
  dataIn:
    | ({ type: 'type a' } & TestScreenOneDataIn)
    | ({ type: 'type b' } & TestScreenOneDataIn);
  dataOut?: (data: any) => void;
};

const TestMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  // const handleFoodname = (food: any) => {
  //   foodName(food);
  // };

  if (dataIn.type === 'type a') {
    //console.log('natritrigger ba to');
    return (
      <ScreenOne
        dataIn={dataIn}
        dataLoad={dataLoad}
        dataOut={dataOut ? dataOut : () => {}}
      />
    );
  } else if (dataIn.type === 'type b') {
    return (
      <ScreenTwo
        dataIn={dataIn}
        dataLoad={dataLoad}
        dataOut={dataOut ? dataOut : () => {}}
      />
    );
  } else {
    return <></>;
  }
};

export default TestMAPP;
