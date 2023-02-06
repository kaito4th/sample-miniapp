import React, { useState } from 'react';
import type { TestDataLoad } from 'src/types';
import { TestMAPP } from 'react-native-sample1';

export default function App() {
  const [values, setValues] = useState<TestDataLoad>([]);
  const onAddtoCart = (item: any) => {
    setValues([...values, item]);
  };
  const response = [
    {
      id: 1,
      image:
        'https://s.wsj.net/public/resources/images/BN-NJ737_burger_GR_20160404133910.jpg',
      text: 'Burger',
    },
    {
      id: 2,
      image:
        'https://images4.fanpop.com/image/photos/20400000/PIZZA-pizza-20461160-1600-1200.jpg',
      text: 'Pizza',
    },
    {
      id: 3,
      image: 'https://i.imgflip.com/4qgzvd.jpg',
      text: 'Taco',
    },
    {
      id: 4,
      image:
        'https://blackwomenlookingformen.files.wordpress.com/2016/10/coffee1.jpg',
      text: 'Coffee',
    },

    {
      id: 5,
      image:
        'https://tuulavintage.com/wp-content/uploads/2019/04/Boba-Milk-Tea-e1555320653922-6501524.jpg',
      text: 'Waffle',
    },
    {
      id: 7,
      image:
        'https://tuulavintage.com/wp-content/uploads/2019/04/Boba-Milk-Tea-e1555320653922-6501524.jpg',
      text: 'Bread',
    },
    {
      id: 8,
      image:
        'https://tuulavintage.com/wp-content/uploads/2019/04/Boba-Milk-Tea-e1555320653922-6501524.jpg',
      text: 'Fruit',
    },
    {
      id: 9,
      image:
        'https://tuulavintage.com/wp-content/uploads/2019/04/Boba-Milk-Tea-e1555320653922-6501524.jpg',
      text: 'Pancake',
    },
    {
      id: 10,
      image:
        'https://tuulavintage.com/wp-content/uploads/2019/04/Boba-Milk-Tea-e1555320653922-6501524.jpg',
      text: 'Steak',
    },

    {
      id: 11,
      image: 'https://eyeforarecipe.ca/wp-content/uploads/2011/05/raw-rice.jpg',
      text: 'Kanin',
    },
  ];
  console.log('values: ', values);

  return (
    <>
      <TestMAPP
        dataIn={{
          type: 'type a',
          points: 1,
          text: 'sample',
          overlayStyle: { borderWidth: 2 },
        }}
        dataLoad={response}
        dataOut={(result: any) => {
          onAddtoCart(result);
        }}
      />

      <TestMAPP
        dataIn={{
          type: 'type b',
          points: 1,
          text: 'sample',
          overlayStyle: { borderWidth: 2 },
        }}
        dataLoad={values}
        dataOut={(result: any) => {
          console.log('screen2: ', result);
        }}
      />
    </>
  );
}
