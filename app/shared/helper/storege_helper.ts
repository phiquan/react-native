import EncryptedStorage from 'react-native-encrypted-storage';

let token: string = 'token';
export const setToken = async (value: string): Promise<void> => {
  try {
    await EncryptedStorage.setItem(token, value);
  } catch (error) {
    console.log('SAVE ERROR');
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    let tokenValue: string | null = await EncryptedStorage.getItem(token);
    console.log(tokenValue)
    return tokenValue
  } catch {
    return null;
  }
};
