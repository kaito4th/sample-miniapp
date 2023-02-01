import { useState } from 'react';
type Props = {
  dataOut: (value: any) => void;
};

const useViewModel = ({ dataOut }: Props) => {
  const [press, setPress] = useState(0);
  //const [cart, setCart] = useState([])

  const onhandlePress = () => {
    setPress(press + 1);
  };

  const onAddToCart = (value: any) => {
    dataOut(value);
  };

  return { onhandlePress, press, onAddToCart };
};

export default useViewModel;
