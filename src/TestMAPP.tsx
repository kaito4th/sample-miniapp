import React from 'react';
import type { TestScreenOneDataIn } from './types/dataIn';
import type { TestDataLoad } from './types';
import ScreenOne from './screens/ScreenOne/ScreenOne';
import ScreenTwo from './screens/ScreenTwo/ScreenTwo';

type Props = {
  dataLoad?: TestDataLoad;
  dataIn:
    | ({ type: 'type a' } & TestScreenOneDataIn)
    | ({ type: 'type b' } & TestScreenOneDataIn);
  dataOut: { foodName: (data: any) => void };
};

const TestMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  const { foodName } = dataOut;

  const handleFoodname = (food: any) => {
    foodName(food);
  };

  if (dataIn.type === 'type a') {
    console.log('natritrigger ba to');
    return (
      <ScreenOne
        dataIn={dataIn}
        dataLoad={dataLoad}
        handleFoodname={(data) => handleFoodname(data)}
      />
    );
  } else if (dataIn.type === 'type b') {
    return (
      <ScreenTwo
        dataIn={{
          points: '',
          text: '',
        }}
        dataLoad={dataLoad}
        dataOut={function (value: any): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  } else {
    return <></>;
  }
};

export default TestMAPP;
