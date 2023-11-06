import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from 'react-native';

export const AppPopUp = ({
  openPopUp,
  title,
  content,
  titleClosePopUp,
  onClosePopUp,
}: {
  openPopUp: boolean;
  title: String;
  content: string;
  titleClosePopUp: string;
  onClosePopUp: () => void;
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={openPopUp}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: Dimensions.get('screen').width * 0.7,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Text style={styles.modalTextTitle}>{title}</Text>
              <Text style={styles.modalTextContent}>{content}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width * 0.7,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              {titleClosePopUp && (
                <Button
                  title={titleClosePopUp}
                  onPress={() => {
                    onClosePopUp();
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'absolute',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 6,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalTextContent: {
    marginBottom: 15,
  },
  buttonSecondary: {
    fontSize: 14,
  },
});
