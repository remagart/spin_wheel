import React, { } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('screen');
const ONE_WIDTH = ScreenWidth / 5;

export default function App() {
  function renderItem(key) {
    return (
      <View key={key} style={styles.itemView}>

      </View>
    );
  }

  function renderRow() {
    const arr = new Array(5).fill(0);
    return (
      <View style={styles.rowView}>
        {arr.map((item, index) => {
          return renderItem(`row-${index}`);
        })}
      </View>
    );
  }

  function renderColumn(isLeft = true) {
    const posStyle = isLeft ? {left: 0} : {right: 0};
    const arr = new Array(5).fill(0);
    return (
      <View style={[styles.columnView, posStyle]}>
        {arr.map((item, index) => {
          return renderItem(`col-${index}`);
        })}
      </View>
    );
  }

  function renderContainer() {
    return (
      <View style={styles.containerView}>
        {renderRow()}
        {renderColumn()}
        <View style={{flex: 1}} />
        {renderRow()}
        {renderColumn(false)}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderContainer()}
      <Text>123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerView: {
    width: ScreenWidth,
    height: ScreenWidth,
    backgroundColor: 'red',
  },
  rowView: {
    width: ScreenWidth,
    height: ONE_WIDTH,
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  columnView: {
    width: ONE_WIDTH,
    height: ScreenWidth,
    backgroundColor: 'yellow',
    position: 'absolute',
  },
  itemView: {
    width: ONE_WIDTH,
    height: ONE_WIDTH,
    borderEndColor: '#000',
    borderEndWidth: 1,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
});
