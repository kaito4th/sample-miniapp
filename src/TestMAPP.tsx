import React from 'react';
import type { TestScreenOneDataIn } from './types/dataIn';
import type { TestDataLoad, TestDataOut } from './types';
import ScreenOne from './screens/ScreenOne/ScreenOne';
import ScreenTwo from './screens/ScreenTwo/ScreenTwo';

type Props = {
  dataLoad: TestDataLoad;
  dataIn: TestScreenOneDataIn;
  dataOut: TestDataOut;
};

const TestMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  if (dataIn.type === 'type a') {
    return <ScreenOne dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />;
  } else if (dataIn.type === 'type b') {
    return <ScreenTwo dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />;
  } else {
    return <></>;
  }
};

export default TestMAPP;
