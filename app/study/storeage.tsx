import {Dimensions, Text, TextInput, View} from 'react-native';
import {palette} from '../theme/palette';
import {useState} from 'react';
import {Button} from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

const key = 'value';
const keyEncrypted = 'valueEn';

const setStringValue = async (value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
  console.log('SAVE DONE');
};

const getStringValue = async () => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(value);
    return value;
  } catch (e) {
    return null;
  }
};

const setEncrypted = async (value: string) => {
  try {
    await EncryptedStorage.setItem(keyEncrypted, value);
  } catch (error) {
    console.log('SAVE ERROR');
  }
};

const getEncrypted = async () => {
  try {
    return await EncryptedStorage.getItem(keyEncrypted);
  } catch {
    return null;
  }
};

const AppStoreage = () => {
  const [value, setValue] = useState('');
  const [valueLocal, setValueLocal] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 16,
      }}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={{
          height: 48,
          width: Dimensions.get('screen').width - 32,
          borderWidth: 1,
          borderColor: palette.lightStroke,
          padding: 12,
          marginBottom: 5,
          borderRadius: 6,
        }}
        placeholder="Value"
      />

      <View style={{height: 16}} />

      <Button
        title={'save local'}
        buttonStyle={{
          width: Dimensions.get('screen').width - 32,
          borderRadius: 6,
        }}
        onPress={() => {
          // setStringValue(value)    //SAVE LOCAL
          setEncrypted(value); //SAVE LOCAL ENCRYPTED
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Button
          title={'GET VALUE'}
          buttonStyle={{
            height: 48,
            borderWidth: 1,
            borderColor: palette.lightStroke,
            padding: 12,
            marginBottom: 5,
            borderRadius: 6,
          }}
          onPress={async () => {
            // const val = await getStringValue();
            const val = await getEncrypted();
            console.log(val ?? 'null');
            setValueLocal(val ?? '');
          }}
        />
        <Text
          style={{
            flex: 1,
            height:48,
            textAlign: 'center',
          }}>
          {valueLocal}
        </Text>
      </View>
    </View>
  );
};

export default AppStoreage;
