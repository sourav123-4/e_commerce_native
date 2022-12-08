import {HStack, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {View, Text, Modal} from 'react-native';
import {useTheme} from '@react-navigation/native';
export const MyAccount = ({navigation, theme}) => {
  console.log('I am theme', theme);
  const {colors, fonts} = useTheme();
  const [imageUri, setImageUri] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openCamera = () => {
    setModalVisible(false);
    launchCamera(options, res => {
      console.log('res', res);
      if (res.didCancel) {
        console.log('user canceled');
      } else if (res.errorMessage) {
        console.log('Image error', res.errorMessage);
      } else {
        setImageUri(res?.assets[0]?.uri);
      }
    });
  };
  const openGalary = () => {
    setModalVisible(false);
    launchImageLibrary(options, res => {
      console.log('res of galary', res);
      if (res.didCancel) {
        console.log('user canceled');
      } else if (res.errorMessage) {
        console.log('Image error', res.errorMessage);
      } else {
        setImageUri(res?.assets[0]?.uri);
      }
    });
  };

  return (
    <View style={[styles(colors, fonts).mainContainer]}>
      <Text style={[styles(colors, fonts).text, {marginLeft: 10}]}>
        Account
      </Text>
      <ScrollView style={styles(colors, fonts).container}>
        <VStack>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#F9F6EE',
            }}>
            {imageUri ? (
              <Image
                source={{uri: imageUri}}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                  margin: 10,
                }}
              />
            ) : (
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                  borderColor: 'gray',
                  margin: 10,
                  backgroundColor: 'gray',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles(colors, fonts).text}>Upload</Text>
              </TouchableOpacity>
            )}
            <Text style={{margin: 10, fontSize: 17, fontWeight: '700'}}>
              Guest
            </Text>
            {imageUri ? (
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text
                  style={{
                    marginLeft: 100,
                    marginTop: 40,
                    fontSize: 17,
                    fontWeight: '700',
                    color: 'blue',
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <TouchableOpacity
            style={styles(colors, fonts).components}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles(colors, fonts).textofcomponent}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(colors, fonts).components}>
            <Text style={styles(colors, fonts).textofcomponent}>My Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(colors, fonts).components}>
            <Text style={styles(colors, fonts).textofcomponent}>
              My Address
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles(colors, fonts).components}
            onPress={() => navigation.navigate('MyOrder')}>
            <Text style={styles(colors, fonts).textofcomponent}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(colors, fonts).components}>
            <Text style={styles(colors, fonts).textofcomponent}>
              Scan to Request
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles(colors, fonts).components}
            onPress={() => Linking.openSettings()}>
            <Text style={styles(colors, fonts).textofcomponent}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(colors, fonts).components}>
            <Text style={styles(colors, fonts).textofcomponent}>About</Text>
          </TouchableOpacity>
        </VStack>
      </ScrollView>
      {modalVisible ? (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles(colors, fonts).centeredView}>
            <View style={styles(colors, fonts).modalView}>
              {!imageUri ? (
                <Text style={styles(colors, fonts).modalText}>
                  To set the Photo Select from galary or camera
                </Text>
              ) : (
                <Text style={styles(colors, fonts).modalText}>
                  To change the Photo Select from galary or camera
                </Text>
              )}
              <View style={{flexDirection: 'row', marginBottom: 15}}>
                <TouchableOpacity
                  style={[
                    styles(colors, fonts).button,
                    styles(colors, fonts).buttonClose,
                  ]}
                  onPress={() => openCamera()}>
                  <Text style={styles(colors, fonts).textStyle}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles(colors, fonts).button,
                    styles(colors, fonts).buttonClose,
                    {marginLeft: 55},
                  ]}
                  onPress={() => openGalary()}>
                  <Text style={styles(colors, fonts).textStyle}>Galary</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={[
                  styles(colors, fonts).button,
                  styles(colors, fonts).buttonClose,
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles(colors, fonts).textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = (colors, fonts) => {
  return StyleSheet.create({
    mainContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.background,
      paddingTop: 5,
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: '800',
    },
    textofcomponent: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    container: {
      backgroundColor: 'white',
      marginTop: 8,
      padding: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    components: {
      borderBottomWidth: 1,
      padding: 13,
      borderBottomColor: '#F9F6EE',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
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
      borderRadius: 20,
      padding: 13,
      elevation: 8,
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
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};
