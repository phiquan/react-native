import {AnyAction, configureStore, createSlice} from '@reduxjs/toolkit';
import {Button, Image} from '@rneui/base';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch, Provider} from 'react-redux';
import {palette} from '../theme/palette';

const pinCodeLenght: number = 6;
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    reset: state => {
      state.count = 0;
    },
    incrementByAmout: (state, action) => (state.count += action.payload),
  },
});

const keyBoardSlice = createSlice({
  name: 'keyBoard',
  initialState: '',
  reducers: {
    add: (state, action) => {
      if (state.length < pinCodeLenght) {
        return (state += action.payload);
      }
      return state;
    },
    del: state => state.slice(0, -1),
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    keyBoard: keyBoardSlice.reducer,
  },
});

const ReDux = () => {
  const pin = useSelector((state: AnyAction) => state.keyBoard);
  const dispatch = useDispatch();
  const {add, del} = keyBoardSlice.actions;
  const ListPin = () => {
    let content = [];
    for (let i = 0; i < pinCodeLenght; i++) {
      content.push(
        <Custompasscodevalue active={i < pin.length} key={i.toString()} />,
      );
    }
    return content;
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Enter your pass code</Text>
      <View style={{height: 50}} />
      <View style={style.row}>
        <ListPin />
      </View>
      <View style={{height: 50}} />
      <View style={style.row}>
        <Custombutton title="1" onPress={() => dispatch(add('1'))} />
        <View style={{width: 12}} />
        <Custombutton title="2" onPress={() => dispatch(add('2'))} />
        <View style={{width: 12}} />
        <Custombutton title="3" onPress={() => dispatch(add('3'))} />
      </View>
      <View style={style.row}>
        <Custombutton title="4" onPress={() => dispatch(add('4'))} />
        <View style={{width: 12}} />
        <Custombutton title="5" onPress={() => dispatch(add('5'))} />
        <View style={{width: 12}} />
        <Custombutton title="6" onPress={() => dispatch(add('6'))} />
      </View>
      <View style={style.row}>
        <Custombutton title="7" onPress={() => dispatch(add('7'))} />
        <View style={{width: 12}} />
        <Custombutton title="8" onPress={() => dispatch(add('8'))} />
        <View style={{width: 12}} />
        <Custombutton title="9" onPress={() => dispatch(add('9'))} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 248,
          justifyContent: 'flex-end',
        }}>
        <Custombutton title="0" onPress={() => dispatch(add('0'))} />
        <View style={{width: 12}} />
        <Button
          buttonStyle={{
            height: 75,
            width: 75,
            backgroundColor: 'transparent',
          }}
          onPress={() => dispatch(del())}>
          <Image
            source={require('./icon_dedete.png')}
            style={{height: 40, width: 40}}
          />
        </Button>
      </View>
    </View>
  );
};

const Custombutton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}): JSX.Element => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        style.button,
        {backgroundColor: pressed ? 'rgb(210, 230, 255)' : palette.disabled},
      ]}>
      <Text style={style.text}>{title}</Text>
    </Pressable>
  );
};

const Custompasscodevalue = ({active}: {active?: boolean}): JSX.Element => {
  return (
    <View style={[style.passcodevalue, active && style.passcodeValueActive]} />
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    marginBottom: 12,
  },
  button: {
    height: 75,
    width: 75,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: palette.black,
    fontWeight: 'bold',
    fontSize: 32,
  },
  passcodevalue: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderColor: palette.primary,
    borderWidth: 2,
    marginHorizontal: 8,
  },
  passcodeValueActive: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: palette.primary,
    marginHorizontal: 8,
  },
});

export const AppRedux = () => {
  return (
    <Provider store={store}>
      <ReDux />
    </Provider>
  );
};
