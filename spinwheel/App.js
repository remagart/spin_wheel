import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import {myDataList} from './src/data';

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('screen');
const LINE_AMMOUNT = 5;
const TOTAL_AMOUNT = LINE_AMMOUNT * 4 - 4;
const ONE_WIDTH = ScreenWidth / LINE_AMMOUNT;
const BLACKCAT = 'https://photo.16pic.com/00/53/69/16pic_5369835_b.jpg';

const BTN_TEXT = {
  start: '開始！',
  stop: '停止 😀',
  continued: '停止中... 🎲',
};

export default function App() {
  const [data, setdata] = useState(null);
  const selectedIdx = useRef(12);
  const [selectedNum, setselectedNum] = useState(selectedIdx.current);
  const timer = useRef(null);
  const [btnOpacity, setbtnOpacity] = useState(1);
  const [btntxt, setbtntxt] = useState(BTN_TEXT.start);

  useEffect(() => {
    if (myDataList) {
      setdata(myDataList);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  function onClicked() {
    if (timer.current == null && data) {
      setbtntxt(BTN_TEXT.stop);
      timer.current = setInterval(() => {
        moveSelected();
      }, 100);
    } else if (timer.current != null) {
      setbtntxt(BTN_TEXT.continued);
      clearInterval(timer.current);
      timer.current = null;
      almostStop(100);
    }
  }

  function almostStop(speed) {
    function fn() {
      speed += 100;
      clearInterval(timer.current);
      timer.current = null;
      if (speed > 1000) {
        clearInterval(timer.current);
        timer.current = null;
        const jump_one = setTimeout(() => {
          clearTimeout(jump_one);
          const isJump = !!Math.floor(Math.random() * 2);
          isJump && moveSelected();
          setbtntxt(BTN_TEXT.start);
        }, 1500);
      } else {
        timer.current = setInterval(fn, speed);
        moveSelected();
      }
    }

    timer.current = setInterval(fn, speed);
  }

  const moveSelected = useCallback(() => {
    selectedIdx.current++;
    if (selectedIdx.current >= TOTAL_AMOUNT) {
      selectedIdx.current = 0;
    }
    setselectedNum(selectedIdx.current);
  }, []);

  function renderItem(key, idx) {
    // console.log("aa", idx);
    if (!data || !data[idx]) {
      return null;
    }
    const selectStyle = idx === selectedNum ? styles.selected : {};

    const img =
      data[idx].url && data[idx].url !== '' ? data[idx].url : BLACKCAT;
    return (
      <View key={key} style={[styles.itemView, selectStyle]}>
        <Image source={{uri: img}} style={styles.imgSize} resizeMode="cover" />
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

  function renderMiddle() {
    const img = (data && data[selectedNum].url) || BLACKCAT;
    const name = (data && data[selectedNum].name) || '???';
    return (
      <View style={styles.middleView}>
        <ImageBackground
          source={{uri: img}}
          style={styles.middleImg}
          resizeMode="cover">
          <View style={styles.avaterView}>
            <Text style={styles.avaterTxt}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderContainer() {
    return (
      <View style={styles.containerView}>
        {renderRow()}
        {renderColumn()}
        {renderMiddle()}
        {renderRow(false)}
        {renderColumn(false)}
      </View>
    );
  }

  function renderBtn() {
    return (
      <Pressable
        onPress={onClicked}
        onPressIn={() => setbtnOpacity(0.2)}
        onPressOut={() => setbtnOpacity(1)}>
        <View style={[styles.btn, {opacity: btnOpacity}]}>
          <Text style={styles.btntxt}>{btntxt}</Text>
        </View>
      </Pressable>
    );
  }

  function renderPanel() {
    return <View style={styles.panel}>{renderBtn()}</View>;
  }

  function renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTxt}>抽抽看</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {myDataList !== null ? renderContainer() : null}
      <View style={{height: 32}} />
      {renderPanel()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFDFDF',
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingLeft: 16,
    marginBottom: 32,
    backgroundColor: 'rgba(17,153,255,0.55)',
  },
  headerTxt: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  containerView: {
    width: ScreenWidth,
    height: ScreenWidth,
  },
  rowView: {
    width: ScreenWidth - ONE_WIDTH,
    height: ONE_WIDTH,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  columnView: {
    width: ONE_WIDTH,
    height: ScreenWidth - ONE_WIDTH,
    backgroundColor: '#FFF',
    position: 'absolute',
  },
  itemView: {
    width: ONE_WIDTH,
    height: ONE_WIDTH,
    overflow: 'hidden',
  },
  selected: {
    borderColor: '#1199FF',
    borderWidth: 5,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#1199FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    marginHorizontal: (ScreenWidth - 200) / 2,
  },
  btntxt: {
    fontSize: 18,
    lineHeight: 21,
    color: '#FFF',
  },
  avaterView: {
    backgroundColor: '#E6E6E6',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  avaterTxt: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: 'bold',
    color: '#000',
  },
  imgSize: {
    width: ONE_WIDTH,
    height: ONE_WIDTH,
  },
  middleView: {
    flex: 1,
  },
  middleImg: {
    width: ScreenWidth - ONE_WIDTH * 2,
    height: ScreenWidth - ONE_WIDTH * 2,
    marginLeft: ONE_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16,
  },
});
