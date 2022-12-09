import React, {useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {View, VStack, HStack, Image, Button, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCountOrder,
  minusCountOrder,
  removeOrders,
  totalPrice,
} from '../../redux/actions/actions';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export const MyOrders = ({navigation}) => {
  const [totalPriceValue, setTotalPriceValue] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const {colors, fonts} = useTheme();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.rootReducer.orders);
  console.log('orders', orders);
  useEffect(() => {}, [modalVisible]);
  const handleRemove = itemId => {
    setModalVisible(!modalVisible);
    setId(itemId);
  };
  const handleDelete = () => {
    dispatch(removeOrders(id));
    setId('');
    setModalVisible(!modalVisible);
  };
  console.log('id', id);
  return (
    <View style={styles(colors).mainContainer}>
      <Text style={styles(colors).headerText}>MyOrders </Text>
      <ScrollView style={styles(colors).container} bounces="false">
        {!orders[0] ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                paddingBottom: 10,
                color: colors.background,
              }}>
              you don't have any order , to order click on Home
            </Text>
            <Button
              onPress={() => navigation.navigate('HomeStack')}
              style={{backgroundColor: colors.background}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '900',
                  color: colors.heading,
                }}>
                Home
              </Text>
            </Button>
          </View>
        ) : null}
        {orders &&
          orders.map(item => {
            return (
              <VStack key={item?.id} style={{alignItems: 'center'}}>
                <View style={styles(colors).subContainer}>
                  <View style={styles(colors).imageContainer}>
                    <Image
                      alt="img"
                      style={styles(colors).image}
                      source={{
                        uri: item?.image,
                      }}
                    />
                  </View>
                  <View style={styles(colors).titleContainer}>
                    <View style={{width: 90}}>
                      <Text style={styles(colors).title}>{item?.title}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles(colors).price}>
                          ${item?.price * item.count}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: 100,
                        marginLeft: 30,
                        marginRight: 30,
                      }}>
                      <Pressable
                        onPress={() =>
                          item?.count === 1
                            ? handleRemove(item?.id)
                            : dispatch(minusCountOrder(item?.id))
                        }>
                        <Icon name="minus" size={20} color="orange" />
                      </Pressable>
                      <Text
                        style={{
                          color: colors.background,
                          fontSize: 16,
                          fontWeight: '800',
                        }}>
                        {item?.count}
                      </Text>
                      <Pressable
                        onPress={() => dispatch(addCountOrder(item?.id))}>
                        <Icon name="plus" size={20} color="orange" />
                      </Pressable>
                    </View>
                    <Icon
                      name="trash"
                      onPress={() => handleRemove(item?.id)}
                      size={25}
                      color="green"
                    />
                  </View>
                </View>
              </VStack>
            );
          })}
      </ScrollView>
      {modalVisible ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles(colors, fonts).centeredView}>
            <View style={styles(colors, fonts).modalView}>
              <Text style={styles(colors, fonts).modalText}>
                Are You Sure You Want To Remove
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 15,
                }}>
                <TouchableOpacity
                  style={[
                    styles(colors, fonts).button,
                    styles(colors, fonts).buttonClose,
                  ]}
                  onPress={() => handleDelete()}>
                  <Text style={styles(colors, fonts).textStyle}>Yes</Text>
                </TouchableOpacity>
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
          </View>
        </Modal>
      ) : null}
      {orders[0] ? (
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>
            Sub Total ${totalPriceValue}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: colors.heading,
              width: 100,
              borderRadius: 20,
              padding: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.background,
                fontSize: 16,
                fontWeight: '800',
              }}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = colors =>
  StyleSheet.create({
    mainContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.background,
    },
    headerText: {
      marginTop: 5,
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
      textAlign: 'center',
    },
    container: {
      backgroundColor: 'white',
      marginTop: 8,
      padding: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    subContainer: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#F9F6EE',
    },
    imageContainer: {},
    image: {
      width: 50,
      height: 50,
    },
    discounttext: {
      backgroundColor: '#87ab69',
      borderTopLeftRadius: 15,
      borderBottomRightRadius: 15,
      alignItems: 'center',
      padding: 2,
      marginBottom: 5,
    },
    textofimage: {
      fontSize: 12,
      fontWeight: '800',
      color: 'white',
    },
    titleContainer: {
      marginLeft: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: '800',
      color: 'orange',
    },
    previousprice: {
      textDecorationLine: 'line-through',
    },
    price: {
      fontSize: 14,
      fontWeight: '800',
      color: '#87ab69',
      marginLeft: 15,
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
      marginRight: 20,
      width: 100,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: colors.background,
      marginLeft: 20,
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
      color: colors.linkabletext,
    },
  });
