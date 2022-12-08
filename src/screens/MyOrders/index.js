import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
// import {} from 'react-native';
import {View, VStack, HStack, Image, Button, Text} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {removeOrders} from '../../redux/actions/actions';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export const MyOrders = ({navigation}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.rootReducer.orders);
  console.log('orders in order', orders);
  return (
    // <View style={styles(colors).mainContainer}>
    //   <Text style={{fontSize: 18, fontWeight: '800', color: colors.heading}}>
    //     You Have {orders.length} Orders
    //   </Text>
    //   <ScrollView>
    //     <View>
    //       <HStack
    //         flexWrap={'wrap'}
    //         alignItems={'center'}
    //         justifyContent={'center'}>
    //         {!orders[0] ? (
    //           <View
    //             style={{
    //               alignItems: 'center',
    //               justifyContent: 'center',
    //               paddingTop: 10,
    //             }}>
    //             <Text
    //               style={{fontSize: 14, fontWeight: '600', paddingBottom: 10}}>
    //               you don't have any order , to order click on Home
    //             </Text>
    //             <Button onPress={() => navigation.navigate('HomeStack')}>
    //               <Text style={{fontSize: 14, fontWeight: '900'}}>Home</Text>
    //             </Button>
    //           </View>
    //         ) : null}
    //         {orders?.map(item => {
    //           const {id, title, price, weight, unit, image} = item;
    //           return (
    //             <VStack
    //               key={id}
    //               alignItems={'center'}
    //               justifyContent={'center'}
    //               margin={2}
    //               space={1}
    //               padding={5}
    //               rounded={15}
    //               bg="primary.600"
    //               borderColor="emerald.300"
    //               borderWidth={1}>
    //               <Image
    //                 source={{
    //                   uri: `${image}`,
    //                 }}
    //                 alt="Alternate Text"
    //                 size="xl"
    //                 rounded="lg"
    //               />
    //               <Text fontWeight={700} fontSize="lg">
    //                 {title}
    //               </Text>
    //               <Text fontSize="sm" fontWeight={700}>
    //                 {weight} {unit}
    //               </Text>
    //               <Text fontSize="xl" fontWeight={700}>
    //                 {price} <Icon name="rupee" />
    //               </Text>
    // <Button
    //   bgColor="emerald.700"
    //   px={8}
    //   onPress={() => dispatch(removeOrders(item))}>
    //   <Text color="primary.600" fontWeight={700} fontSize="lg">
    //     Remove
    //   </Text>
    // </Button>
    //             </VStack>
    //           );
    //         })}
    //       </HStack>
    //     </View>
    //   </ScrollView>
    // </View>

    <View style={styles(colors).mainContainer}>
      {/* <Text style={styles(colors).headerText}>Search Box </Text> */}
      <ScrollView style={styles(colors).container} bounces="false">
        {orders.map(item => {
          return (
            <VStack key={item.id}>
              <View style={styles(colors).subContainer}>
                <View style={styles(colors).imageContainer}>
                  <Image
                    style={styles(colors).image}
                    source={{
                      uri: item.image,
                    }}
                  />
                </View>
                <View style={styles(colors).titleContainer}>
                  <Text style={styles(colors).title}>{item.title}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles(colors).price}>${item.price}</Text>
                  </View>
                </View>
              </View>
              <Icon
                name="trash"
                onPress={() => dispatch(removeOrders(item))}
                size={25}
              />
            </VStack>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = colors =>
  StyleSheet.create({
    // mainContainer: {
    //   display: 'flex',
    //   flex: 1,
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   paddingTop: 10,
    //   backgroundColor: colors.background,
    // },
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
    },
    title: {
      fontSize: 16,
      fontWeight: '800',
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
  });
