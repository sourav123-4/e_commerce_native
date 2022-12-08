import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
export const DisplayItem = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>DisplayItem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // secondaryContainer: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '10px',
  //   width: '90%',
  // },
  // secondaryContainerChild: {},
  // boxHeading: {
  //   // textAlign: 'center',
  //   fontSize: 30,
  //   fontWeight: '900',
  // },
});
