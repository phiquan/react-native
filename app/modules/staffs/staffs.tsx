import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {palette} from '../../theme/palette';

export const Home = (): JSX.Element => {
  return (
    <View style={style.container}>
      <Text>Home</Text>
    </View>
  );
};

export const Projet = (): JSX.Element => {
  return (
    <View style={style.container}>
      <Text>Project</Text>
    </View>
  );
};

export const Setting = (): JSX.Element => {
  return (
    <View style={style.container}>
      <Text>Setting</Text>
    </View>
  );
};

const staff = [
  {
    id: 'AnNP',
    fullName: 'Nguyen Phu An',
    role: 'CEO',
    type: 'PM/QA',
    team: 'N/A',
  },
  {
    id: 'DatNT',
    fullName: 'Nguyen Tien Dat',
    role: 'LEAD',
    type: 'F.STACK',
    team: '#DatNT',
  },
  {
    id: 'QuangNT',
    fullName: 'Nguyen Thanh Quang',
    role: 'MEMBER',
    type: 'F.STACK',
    team: '#DatNT',
  },
  {
    id: 'BaoNT',
    fullName: 'Nguyen Thai Bao',
    role: 'MEMBER',
    type: 'MOBILE/FE',
    team: '#DatNT',
  },
  {
    id: 'TungTT',
    fullName: 'Tran Thanh Tung',
    role: 'MEMBER',
    type: 'FE',
    team: '#DatNT',
  },
  {
    id: 'ThuongHV',
    fullName: 'Ha Van Thuong',
    role: 'MEMBER',
    type: 'FE',
    team: '#DatNT',
  },
  {
    id: 'GiangTT',
    fullName: 'Tran Truong Giang',
    role: 'LEAD',
    type: 'F.STACK',
    team: '#GiangTT',
  },
];

export const Staffs = (): JSX.Element => {
  return (
    <ScrollView horizontal={true}>
      <View style={{flexDirection: 'row'}}>
        <CustomColumn
          title="ID"
          listContent={staff.map(item => item.id)}
          padding={24}
        />
        <CustomColumn
          title="Full name"
          listContent={staff.map(item => item.fullName)}
          alignLeft={true}
        />
        <CustomColumn
          title="Role"
          listContent={staff.map(item => item.role)}
          padding={36}
        />
        <CustomColumn
          title="Type"
          listContent={staff.map(item => item.type)}
          padding={36}
        />
        <CustomColumn
          title="Team"
          listContent={staff.map(item => item.team)}
          padding={36}
        />
      </View>
    </ScrollView>
  );
};

const CustomColumn = ({
  title,
  listContent,
  alignLeft,
  padding,
}: {
  title: string;
  listContent: Array<String>;
  alignLeft?: boolean;
  padding?: number;
}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          alignSelf: 'flex-start',
        }}>
        <View
          style={[
            style.content,
            {backgroundColor: palette.disabled},
            padding !== undefined && {paddingHorizontal: padding},
            alignLeft && {alignItems: 'flex-start'},
          ]}>
          <Text>{title}</Text>
        </View>
        {listContent.map(item => (
          <View
            style={[
              style.content,
              padding !== undefined && {paddingHorizontal: padding},
              alignLeft && {alignItems: 'flex-start'},
            ]}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.lightStroke,
  },
});
