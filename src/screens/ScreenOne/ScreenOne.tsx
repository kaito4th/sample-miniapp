import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import type { TestScreenOneDataIn, TestDataLoad, TestDataOut } from 'src/types';
// import useViewModel from './useViewModel';
import _ from 'lodash';

type Props = {
  dataIn: TestScreenOneDataIn;
  dataLoad: TestDataLoad;
  dataOut: TestDataOut;
};

const ScreenOne = ({ dataIn, dataOut, dataLoad }: Props) => {
  //const { onAddToCart } = useViewModel({ dataOut });
  // const FoddNameFunc = (data: string) => {
  //   dataOut(data);
  // };

  const renderItem = ({ item }: any) => {
    //console.log(item.image);
    return (
      <View style={[styles.listContainer, dataIn.listContainerStyle]}>
        <TouchableOpacity onPress={() => dataOut(item)}>
          <ImageBackground
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{
              width: 100,
              height: '100%',
              opacity: 1,
            }}
            borderRadius={5}
          >
            <View style={[styles.overlay, dataIn.overlayStyle]}>
              <Text style={[styles.textstyle, dataIn.textStyle]}>
                {item.text}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataLoad}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      {/* <Text>ScreenOne</Text>
      <TouchableOpacity
        style={{ height: 50, width: 50, backgroundColor: 'blue' }}
        onPress={onhandlePress}
      >
        <Text>Button</Text>
      </TouchableOpacity>
      <Text>{dataIn.text}</Text>
      <Text>{press}</Text>
      {dataLoad.data && _.map(dataLoad.data, (item) => <Text>{item}</Text>)} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
  },
  listContainer: {
    height: 100,
    borderWidth: 1.7,
    // borderColor: 'black',
    //flexDirection: 'row',
    margin: 12,
    borderRadius: 7,
  },
  overlay: {
    display: 'flex',
    opacity: 0.9,
    backgroundColor: 'rgba(255,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  textstyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ScreenOne;
``;
