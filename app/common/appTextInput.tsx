import {
  Image,
  ImageSourcePropType,
  InputModeOptions,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {palette} from '../theme/palette';

export const AppTextInput = ({
  title,
  hintText,
  suffixIcon,
  valid,
  validError,
  onChangeValue,
  onBlur,
  value,
  onPressSuffix,
  secureTextEntry,
  inputMode,
}: {
  value?: string;
  title?: string;
  hintText?: string;
  suffixIcon?: ImageSourcePropType;
  valid?: boolean;
  validError?: string;
  onChangeValue: (e: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onPressSuffix?: () => void;
  secureTextEntry?: boolean;
  inputMode?: InputModeOptions;
}): JSX.Element => {
  return (
    <View>
      {title && <Text style={{fontWeight:'400'}}>{title}</Text>}
      {title && <View style={{height: 4}} />}
      <View style={style.row}>
        <TextInput
          value={value}
          placeholder={hintText}
          style={[style.textinput, valid && {borderColor: palette.error}]}
          onChangeText={onChangeValue}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry ?? false}
          inputMode={inputMode ?? 'text'}
        />
        {suffixIcon && (
          <Pressable onPress={onPressSuffix}>
            <Image source={suffixIcon} style={style.suffixIcon} />
          </Pressable>
        )}
      </View>
      {valid && validError !== undefined && (
        <Text style={style.textError}>{validError}</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  textinput: {
    height: 48,
    flex: 1,
    borderWidth: 1,
    borderColor: palette.lightStroke,
    padding: 12,
    marginBottom: 5,
    borderRadius: 6,
  },
  suffixIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 12,
    top: 12,
  },
  textError: {
    fontSize: 12,
    color: palette.error,
  },
});
