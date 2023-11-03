import {Formik} from 'formik';
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {palette} from '../../theme/palette';
import {Button, Image} from '@rneui/base';

export const Filter = ({navigation}: {navigation: any}) => {
  return (
    <Formik
      initialValues={{
        id: '',
        role: '',
        type: '',
        team: '',
      }}
      onSubmit={value => console.log()}>
      {({values, handleChange, setFieldTouched, handleSubmit}) => (
        <View style={style.container}>
          <CustomInputText
            title="ID/Full Name"
            hintText="Search here..."
            icon={require('./Search.png')}
          />
          <CustomInputText title="Role" hintText="#Member" />
          <CustomInputText title="Type" hintText="#FE" />
          <CustomInputText title="Team" hintText="#LeaderID" />
          <View style={{flex: 1}} />
          <Button
            title="Apply"
            buttonStyle={style.button}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
    </Formik>
  );
};

const CustomInputText = ({
  title,
  hintText,
  icon,
}: {
  title: string;
  hintText: string;
  icon?: ImageSourcePropType;
}): JSX.Element => {
  return (
    <View>
      <Text>{title}</Text>
      <View style={{height: 4}} />
      <View style={style.row}>
        <TextInput style={style.input} placeholder={hintText} />
        {icon && <Image source={icon} style={style.suffixIcon} />}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    marginBottom: 20,
  },
  input: {
    height: 48,
    flex: 1,
    borderWidth: 1,
    borderColor: palette.lightStroke,
    padding: 12,
    marginBottom: 22,
    borderRadius: 6,
  },
  button: {
    height: 48,
  },
  row: {
    flexDirection: 'row',
  },
  suffixIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 12,
    top: 12,
  },
});
