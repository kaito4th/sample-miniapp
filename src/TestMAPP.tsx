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
  dataOut: () => void;
};

const TestMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  if (dataIn.type === 'type a') {
    return (
      <ScreenOne
        dataIn={dataIn}
        dataLoad={dataLoad}
        dataOut={function (): void {
          throw new Error('Function not implemented.');
        }}
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
