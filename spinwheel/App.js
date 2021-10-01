import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {myDataList} from './src/data';

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('screen');
const ONE_WIDTH = ScreenWidth / 5;

export default function App() {
  let [data, setdata] = useState(null);

  useEffect(() => {
    if (myDataList) {
      setdata(myDataList);
    }
  }, []);

  function renderItem(key, idx) {
    // console.log("aa", idx);
    return (
      <View key={key} style={styles.itemView}>
        <Text>{data[idx].name}</Text>
      </View>
    );
  }

  function renderRow(isFirst = true) {
    const arr = new Array(4).fill(0);
    const start = isFirst ? 0 : 8;
    const marginLeft = isFirst ? {} : {marginLeft: ONE_WIDTH};
    return (
      <View style={[styles.rowView, marginLeft]}>
        {arr.map((item, index) => {
          return renderItem(`row-${start + index}`, start + index);
        })}
      </View>
    );
  }

  function renderColumn(isLeft = true) {
    const posStyle = isLeft ? {left: 0} : {right: 0};
    const arr = new Array(4).fill(0);
    const start = isLeft ? 12 : 4;
    const marginTop = isLeft ? {marginTop: ONE_WIDTH} : {};
    return (
      <View style={[styles.columnView, posStyle, marginTop]}>
        {arr.map((item, index) => {
          if (start + index === 16) {
            return null;
          }
          return renderItem(`col-${start + index}`, start + index);
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
        {renderRow(false)}
        {renderColumn(false)}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {myDataList !== null ? renderContainer() : null}
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
    width: ScreenWidth - ONE_WIDTH,
    height: ONE_WIDTH,
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  columnView: {
    width: ONE_WIDTH,
    height: ScreenWidth - ONE_WIDTH,
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
