import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import type { TestScreenOneDataIn, TestDataLoad, TestDataOut } from 'src/types';
import _ from 'lodash';

type Props = {
  dataIn: TestScreenOneDataIn;
  dataLoad: TestDataLoad;
  dataOut: TestDataOut;
};

const ScreenOne = ({ dataIn, dataOut, dataLoad }: Props) => {
  const renderItem = ({ item }: any) => {
    return (
      <SafeAreaView>
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
                <Text style={[styles.textStyle, dataIn.textStyle]}>
                  {item.text}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataLoad}
        horizontal
        renderItem={(item: any) => renderItem(item)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    height: 100,
    borderWidth: 1.7,
    margin: 12,
    borderRadius: 7,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,0,0,0.5)',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    display: 'flex',
    justifyContent: 'center',
    opacity: 0.9,
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ScreenOne;
