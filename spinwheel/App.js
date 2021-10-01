import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {myDataList} from './src/data';

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('screen');
const LINE_AMMOUNT = 5;
const TOTAL_AMOUNT = LINE_AMMOUNT * 4 - 4;
const ONE_WIDTH = ScreenWidth / LINE_AMMOUNT;

export default function App() {
  const [data, setdata] = useState(null);
  const selectedIdx = useRef(12);
  const [selectedNum, setselectedNum] = useState(selectedIdx.current);
  const timer = useRef(null);

  useEffect(() => {
    if (myDataList) {
      setdata(myDataList);
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (data && timer.current == null) {
      timer.current = setInterval(() => {
        selectedIdx.current++;
        if (selectedIdx.current >= TOTAL_AMOUNT) {
          selectedIdx.current = 0;
        }
        setselectedNum(selectedIdx.current);
      }, 1000);
    }
  }, [data, selectedNum]);

  function renderItem(key, idx) {
    // console.log("aa", idx);
    if (!data || !data[idx]) {
      return null;
    }
    const selectStyle = idx === selectedNum ? styles.selected : {};
    return (
      <View key={key} style={[styles.itemView, selectStyle]}>
        <Text>{data[idx].name}</Text>
      </View>
    );
  }

  function renderRow(isFirst = true) {
    const arr = new Array(LINE_AMMOUNT - 1).fill(0);
    const start = isFirst ? 0 : (LINE_AMMOUNT - 1) * 2;
    const marginLeft = isFirst ? {} : {marginLeft: ONE_WIDTH};
    return (
      <View style={[styles.rowView, marginLeft]}>
        {arr.map((item, index) => {
          let tempIdx = start + LINE_AMMOUNT - 2;
          tempIdx = isFirst ? start + index : tempIdx - index;
          return renderItem(`row-${tempIdx}`, tempIdx);
        })}
      </View>
    );
  }

  function renderColumn(isLeft = true) {
    const posStyle = isLeft ? {left: 0} : {right: 0};
    const arr = new Array(LINE_AMMOUNT - 1).fill(0);
    const start = isLeft ? TOTAL_AMOUNT - LINE_AMMOUNT + 1 : LINE_AMMOUNT - 1;
    const marginTop = isLeft ? {marginTop: ONE_WIDTH} : {};
    return (
      <View style={[styles.columnView, posStyle, marginTop]}>
        {arr.map((item, index) => {
          let tempIdx = start + LINE_AMMOUNT - 2;
          tempIdx = isLeft ? tempIdx - index : start + index;
          return renderItem(`col-${tempIdx}`, tempIdx);
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
  selected: {
    borderColor: 'purple',
    borderWidth: 5,
    borderEndWidth: 5,
    borderBottomWidth: 5,
    borderBottomColor: 'purple',
    borderEndColor: 'purple',
    zIndex: 100,
  },
});
