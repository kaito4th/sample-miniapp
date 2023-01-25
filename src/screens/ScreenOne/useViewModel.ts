import { useState } from 'react';
type Props = {
  dataOut: (value: any) => void;
};

const useViewModel = ({ dataOut }: Props) => {
  const [press, setPress] = useState(0);

  const onhandlePress = () => {
    setPress(press + 1);
  };

  return { onhandlePress, press };
};

export default useViewModel;
