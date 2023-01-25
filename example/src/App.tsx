import * as React from 'react';

import { StyleSheet } from 'react-native';
import { TestMAPP } from 'react-native-sample1';

export default function App() {
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
      text: 'MilkTea',
    },

    {
      id: 6,
      image: 'https://eyeforarecipe.ca/wp-content/uploads/2011/05/raw-rice.jpg',
      text: 'Kanin',
    },
  ];

  return (
    <TestMAPP
      dataIn={{ type: 'type b', points: 1, text: 'sample' }}
      dataLoad={response}
      dataOut={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
