import EncryptedStorage from 'react-native-encrypted-storage';

let token: string = 'token';
export const setToken = async (value: string): Promise<void> => {
  try {
    console.log(value)
    await EncryptedStorage.setItem(token, value);
  } catch (error) {
    console.log('SAVE ERROR');
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    let tokenValue: string | null = await EncryptedStorage.getItem(token);
    return tokenValue
  } catch {
    return null;
  }
};
