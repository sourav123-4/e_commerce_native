import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {View, Text, Input, VStack} from 'native-base';
import {useTheme} from '@react-navigation/native';
export function SearchScreen() {
  const {colors} = useTheme();
  const [value, setValue] = useState('');
  const data = [
    {
      id: 1,
      name: 'Apple',
      image:
        'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?cs=srgb&dl=pexels-mali-maeder-102104.jpg&fm=jpg',
      off: 30,
      previousprice: 20.54,
    },
    {
      id: 2,
      name: 'Orange',
      image:
        'https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=',
      off: 25,
      previousprice: 80.84,
    },
    {
      id: 3,
      name: 'Ananas',
      image:
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
      off: 15,
      previousprice: 100.78,
    },
    {
      id: 4,
      name: 'Banana',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMUExYTEBAXFhYWFhYTFhYZExYWGRkWFhYXFxYWFhYZHikhGRsnHBYWIjIiJiosLy8vGCA1OjUuOSkuLywBCgoKDg0OGxAQGy4nISYuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIAMQBAQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAD8QAAIBAgMEBwQHBwQDAAAAAAABAgMRBAUhEjFBUQYTImFxgZEyobHRFEJScpLB8BUjM1NiguEHQ9LxFqLC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADIRAAICAQIDBQcEAgMAAAAAAAABAgMRBCESMUEFUWFxkRMygaGx0fAiQsHhI2IVM1L/2gAMAwEAAhEDEQA/APuIAAAAAAAAABEzDH06MHUrTUIre38Et7fcgCWDg8L04qYirsYeioU7SanUbcpW5QjpFeLZaftqsnfstcVsv3ama3V1VvEmWeykdQCBgcwVTRq0rXtvT8GTy+E4zWYvYg01zAAJHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTia8acJTnJRjFOUm9yS1bPj+eYutj6zqSbhRirU4NXUUr3nK31np5aePX/6p45woU6af8SqnJfajTW1s249rYfl3nDwwuIq7MJTjTbhKSairxjfVbEbJN7STMupt4cLKRr00YpOUjXls61Cs68YLq6d6d073aWuqWmj5bzpaPS2jJNvbT5bN9d+9HuSYVUsP1ftaylJtb5Ser7iHg6OHqOpHYi2m1olvT1v3rd5Hg3ayFk2pJ4XLH58S1Tibq3SqTdsPBuT9htbpcHs8VofS8LXU4RmrdpJ6a+KPlWEqUaNV01FJyipLTm3de47ro3jbLYk9G7xfe96LtD2jWrVVhpSXN9X0+2e8puSa26HRgA+iMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK7M8ZsLZi+0/cuZCc1CPFI6k28I4np1NVa9OTd40VJRX9Umrv/1RQdHcPOtWq4i/7umlh1p7U59uVvBQX40bukeMtGc3wvb8jqcjyzqcLQoW7couvV+/U3X8E3H+0+dhJ6p2XS5JYXxNjXDiKEKFoW7jgcj2qONrUZvXbn53e0n5ppn1N4XQ+ZdMJdVmUalrbcaTl4qKpt+kEYaqU4zXXG3wy/sRki36RdH5VqbrUL9fRjtKK+vTV3KKX2lvXPVcj3otnSqQTv4nQ5XOa2ZRWqs1/nuOP6TZe8NjOspQlHD4i0pWT2adVu0oX3K71X3rLcFTG7Spfujy8U9/VcvLASakfTctzJtWeq4Pj/ks414vj66HDZXjtlJHQUcXc2aPtaaioyefPmdnp0+Rfgq6WIa4kuGJXH1PZp19VnPb8/OhnlVJEkHiZ6bisAAAAAAAAAAAAAAAAAAAAAAAAAAAAGqtU2U3+rnG0llhLOxhiatlo9fh3nP5q+y7b3xJtatfVsp8dWu33HzfaOrdicUb6auE4fNsPKdfD0dnaVStTjJJX7G0tt25KO0/I+q1LNuXF+5LcjmsiwsXN1mtVeEe7dtNe5epfXKtJNx06j37kpQ/Vk202c90z6NxxMIyWlWm7wfNfWg/HhyfmXlKZtkymMsZxzONYZQZBiL00pe1HR+Rd7KkrSSaas01dNcmnvKDMo9TWVRezN9r73H13+pcUKnG5kpscJcLLJRysogY/JEltUVa31f+PyIWDxFtGdNGRUZxl3+5Ba75L80L6cf5K/ijtct8MkUcRcm06hzmGxFt5Z0MSRp1BOdZc0qrW4mU6yfcyop1SRFnt6XWShsuXcYrKky1BAp4hrvX64kiGJi+NvE9mrV12dcPxM8oNG8AGkgAAAAAAAAAAAAAAAAAAAAACrzGreWzwXxZZ3ObdbablzbZg7Rt4K0u/wDg0aaGZZ7jDEVCix9ayZaYuWjOdzabSZ8jfNylg9GKwdFky/dQ74qX4u0/iWNyoyStelTfOEfgizgzfF4jgjJGfEkkVkik7opXvlciBm2E6ynKPG14/eWq+XmVWQ4262Jb+HyOjlE5HNKDpVm47pduPj9ZevxM98Gt0WVPKwdZTZutcqcrxymknvLWDNOnmpoqsi0ynzHL7XlFacVy7/AgUpNM6poqsfle+VP8P/H5GbUaKUXx1en59C2q5P8ATI0UcVwJ1PEFA209dGvXzRvpV2V1ajoy2VWToY1LmSZU0sUSFiD067kzO6mWUK7W5m+OLfc/cVCxPmSKalxVl3m6nUzW0GyqdS5stI4lcjNV4lTPG0ob5ojzzumtyuWy7VhX7819foVrTSlyiy+deJi6/JHL1ukdt0Tlukec1Z6zv1SXsptK+q1Sa2t/uOU9qxvnwQfyx9ST0ko7yPpf0y/syT4aa68jF139o+UdDcTsYiDhKUYVI7Eqbk2m9mTg1fvW966959FVUjq9VZXPhy+We4RpWCweIkvrETMOkNKgovES2VKSgmk3q+Nlw5vgRamJS3yscB0x6QXmlFNqD2XFrSW0m9rwulF211KtJrJ2W8MX5rOfuTenWMs+yJnpzX+nmMlVwNKU9624f2xm1FeSsvI6U+hTysmBrDwAAdOAAAGjGStCT/pfwOXoVDpcz/hT+6zmMPuPD7Xk8xXgzfo1+lnmK3HPZqtGdFX3Mp8dSvE+Yn/2fnebUjzovW2qKXGDlH37S90kdDTZxfRzFbGIdJ6Korx+/C7t5x2vwnX05m/JFol3PaVSz7jUmJEZcsroQxksHG+qK3Osv6yDS9pdqL7+Xg9xuw2Kto93wJ6s0XQ4b1jr1RS+KuRwmGrNO2qknZrimuB0GCzLhL1NWf5I5fvaS7a3r7SX/wBFNhcVfR6NaNPR35NGGVUqpZWxrTjZE7SjWTV07m+5y9Cu1udiZDMpLfqbK9XjaSKJad9CzxWCp1Pbin37n6og1MlX1Z+vzRjHM+NjGeavgjtlmnnvKP3OwhbHZMzp5VLjNL1Ztnh6VP8AiTv3Xt7lqQJ4ypLi/LQ0bHNkI2VxX6Ierb+RZwTfvS9CxnmsY6Uqfm1b/LK+vXqT9qT8Ny9DzaSNM66Kbr+JYm8+HJeiJwrS5L49THq0eOKMXI9UjzpzzyRekzRVRpr4aNSLjL/rwJexck4fB6nYWyjjh5+BFpdSvyXK1RXWS1afZ1e/Xn3NvfxJ1bHSfExzDEXlsR3R0/u4/I1wjcu1d87ZpzfJYEIpLODVUrSZG/Y6ruMZJt37K73+r+RbUsJtNJK7e5d51mVZaqSu1eT3v8jb2VpbLrE4ZSXN/wAeb+m/g8+puUI78+hsybLo0KMKMN0Fbxbbbfq2TgD7dLGx4redwAAAAACPjo3pyX9L+ByFI7WSureRxtrSa5Ox4va8doPz/g3aJ80bXHmQa9HQmXMKiPmbFmSNxwudU5Qe3T0nBqpF98Xe3hvXmdflOPjWpwqw3Tinbk+MX3p3XkVebYVNM5/ozmX0bEvDzf7us9qm/s1OXhL4pcy+p8UH3x+nX05iR9Jiz1mmlPQdYdbI4N2weU6jjufyPIzPdpEOFPdbMeZNpY5P2tDRjcqoV+09Jfbi7Pz5+ZpaQsXq+aWJpSXiV+zSeYvBGlkNSPsVYyXKScX7rmLy+uv9u/hJP8ybGUluk/UzeInzOf4X+2S8mv5JcVnemV/0Or/Kl7vmYvC1f5Uvwlh9Kqcw8XUItV/7fL7ElKfcvmV7w1b+VL0NU8PW40p/hb+BYSxlRcRHMpreUzVP7pS+RNOfRL5lDVqNaSTXimvieQaOj/akXpOCa9SNVwGHqawfVy7tY+nysUOuqXuTXk9n8yata96OPLcqhGNzdXwjptKco67rSWvlv4r1N1KkUumaeMFvtItZTGFonuOxSpqy9t7lyX2jTXzehTl1c6yjK2/ZlNRf9Wz8O7gTcrybDVe19L65vV2tF/hd2j0dN2bZP3MZ8Wl8ufyM1liiuKeceT+vL5lPh6Vy4wOWzl7MdPtPT3nR4bKaUN0F4vUnI9jT9hRW9r9Pu/sZLNe37i9SFgMvjTWmsuL/ACXJE4A96uuNcVCCwkefKTk8sAAmcAAAAAAByma09mrLvd/XU6spekFDdP8Atf5fmYe0auOny3NGlnw2Y7yqgj2UTXCVjZc+RsWco9QhY3D3W44rpHlW3Hs6Tj2ovvWp38kVmYYO6OVzcWpx5o6u5lb0Wz7rYKM3aolqudtJea+TOg27nAZlgJQk6lK6lvdt91uku/4lvkPSGNW0KnZqrhuUu+PfzRdZFcPtK/d6r/z/AEMb4Z1MZmW0RFUM9sqTUjhu64y64iOR7tDc7glquOuIjkY7Z3LOYJTrGE8SRnI0yqEZM6kmTHiDHrUyC6gdUx2NyLUiVKaNDrJdxq6w0zuRjHHMMqek9dRnGUtp2i96uteW7kn5G3JMZWc5rrZSpOKavK7jJvSCb7W7a9ES8wyx14PS7a2bN2SV77V+aPMtwUKKaUtpu201otFZKK5fNnv2aiEdAornyx8d/QohBu3JnKhT+wn5EDMcUoyUEnTVo6xbi223ptfVSUXqufAtp1EtyKrNcBUrW6t2lutdK+t1v08nvuedoZQ9tF28vHv6F9rljY+gdBMxlWw/bbk6c3TUm7ylFRjJOTe99q1+NrnSnKf6eYCpSw8lVVnKo2ldPRRjFW36dnm9x1Z9zU8wTPBtSU3gAAsKwAAAAAAAAAR8bQ24SjzWnitxIMWzjSawzqeHk46cbPU9iT87oWntLdL48fn6kCCPjtZQ6rHE9qqxSimZo8cLoQNjRh65RJlNj8Bfgcjm+QbTurqW9Nc1uZ9DmRMRhlIlC1wfFF4Z1b7M4bAZ/Wo2hioucVuqxV2vvpa+aOowuOhUipQmpJ7mmmjVjsqT4HP1smnTk5Um4vu/NcST4Jf6v5f18CeDr1IybORp53Xp6VKTkucd/o/mWeF6Q0pb5bL5STj73oyLrmt2vTc5gu02YyvyNFLGRluafg0zaqpBSi+pwxlFnios2o2pFqijmWQZ0TGNAnOPM1ynFb5L1v8AA5KEWE2zCFIxr7MIuc2lFat/re+4TxnCMb9709xlTwvWJuer1ty17ihOuE1xPC8N/wA9Cbzgr62P6yMXTuqclfVWcvvd27Q8pxPcXTjBqnF32bt6JWcraacrL1FNl2qxxvh5dCUH+lGcoFlkWWupNK3e3yQyvLKlV9mPZ4yeiXzfcjtsBg40o7MfN8WbOzuzJ3yUrFiH18F4d77uRl1OpVaxHn9PP7G+lTUUorclZGwA+xSSWEeMAAdAAAAAAAAAB5c11JGbNNRHGCtx7Uk0/wBMpvii2xyKWvO2p5mv03tY5XNfM2aezh26G5HtzRCrfibYs+WsraZ6S3PVMzcbmlxMoMpxnZnWjydIi1sMibtmE2Vzg8cwngpcRgU+BW4nKeSOkqIjzRXC2cWWo5OeTu/slTmdeVK0VUnGV0r7c7a3aSSer0Z3NVXOW6XZW+zWSbirxnZJvVNJ2fieroLY23KFvJ/Uqsb4XwlTgcyrSV1WqWu17ct63reW1CpVftVZvxnL5lflWGko3krJt7Omr1d2/wBcC5pQRfq3GubjDkSreYpslYSBZU1oQ6BZYek3vPIszJ7FjfeZUKF2T68lTja/aekeNu/yPFLZXZV2RJUZSltS1f60R62h7NllTtRkuv6IwwmUQk+1Ob4v2dfcdHluT0I2extPnJ7Xu3e4hYHCsvsNTPoKtLVF5UFnyMNls3tlk6mbUa4I2I3oxnoAOgAAAAAAAAAAAA8ZhJGw8YBAxNG5R43BM6iUDRVw6ZCUck4ywcDX26buvQ34XHxlxs+K4nSYvLFLgc7mHR9746Hl6vQK3dbP85/fn4murUY2ZKhUNm0c/KVelo1tL0fqbqebR+tePivz3Hh3aS6vnHPlv/ZthOMuTLa5i5EWGMjLdJPwaPZYhHnylFbFyybZM0zNM6/eapYuPMpVcrHiCZLKXMk7NyvzTGRpLXtSe6K+L5Iyni2/ZXn/AIIjwDk9qWrfFnsaTsp7StXw/OXx38DPZcuUSrjNze1K933e5dxPw9NcmTqOV9xNo5Y+R6X/AB9T6P1K3qJEbDxXItsNST3GVDK3yLXC5dY10aSuveEV/PqZ53OXNkenhrkqjge4sKGFsS40jdGBmdhEo4W3AlwpmxRMixRwVN5PEj0AkcAAAAAAAAAAAAAAAAAAB5Y9ABg4GudBPgbwMAra+WRlwKzE9HIPgdKCLgmSU2jiavRKPI1f+Ktbr+rO6sLEHTFk1bJHDR6Ls3U+jR2dhYeyiPayOWpdHrcCZTyVLgXtj077OJH2jKuGVpG6GAiuBOBJRRziZojh0uBsVNGYO4OZPEj0A6cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z',
      off: 25,
      previousprice: 60.54,
    },
    {
      id: 5,
      name: 'Mango',
      image:
        'https://media.istockphoto.com/id/467328250/photo/mango.jpg?s=612x612&w=0&k=20&c=cYSHeExkHZVYQM6xkWehclgYDqkmB7o4E494xz5GbXs=',
      off: 10,
      previousprice: 120.54,
    },
    {
      id: 6,
      name: 'Watermelon',
      image:
        'http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/30.jpg',
      off: 20,
      previousprice: 50.54,
    },
    {
      id: 7,
      name: 'Papaya',
      image:
        'https://media.istockphoto.com/id/1025192794/photo/whole-and-half-ripe-papaya-with-green-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9o8LUjHkl7jqAlDGbcLaFZdY1k-06QkxAz130zYisyQ=',
      off: 30,
      previousprice: 40.74,
    },
    {
      id: 8,
      name: 'Kiwi',
      image:
        'data:image/jpeg;base64,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',
      off: 10,
      previousprice: 110.24,
    },
    {
      id: 9,
      name: 'Cherry',
      image:
        'data:image/jpeg;base64,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za9/ZL2Dk/HLb6GQmG0lzxXCmc3IjD8pFjtJONmeObaV2gZd+UOW3xDBrFaYOrEaei9zN7hHJyKQWW/rqPlPQ+F0yihbeEdO3pOqJHJqG1SJHB4ZaaKiCyqLCbE4qJynDKIiIAiIgCIiAIiIAiIgCcCgPSc4gFQ5w4IXX2lMaj3gOo7ylq9RRoxsOnUW6kX1nsJEq/GuV1cl6ZyMdxup+HSQcFI36fWyxra+ikHid1yk2tboQb3udTt0nN+MpqLqARtlJ8+05Y/gGJU+6reY/wASMbgtc7raVPA/c9GOuxtcoziuMixC3+OgPnOXLlRBV9u9iwuEH8N9C1u9tPiZ1ry+/UGbuG5ee/WTx4VF2Z9RrHkjtjwjr5y4ZTxYFRSFqqLX6OvRW9OhlMSi6HKwIM9SocusRrOuvyeWl7jZ58cm3g81M4MJf35GbtOKchtfW85tLfXVFEpISdJauC8JYWdx6D7mWrh/KKprl17nUybocGt0nUiieTcQeBwFztLFhOHAdJvYbh4XpN9KVp26KmzWpYUDpNpaYE5zMi5HBEROAREQBERAEREAREQBERAEREATEzEA6mpA7ia74BD0m5E7bO2aH/pqdp2JglHSbcRY3M61pAdJyyDtOcThw4ZB2mcg7TlEWDjkHaZtMxAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/2Q==',
      off: 15,
      previousprice: 160.94,
    },
    {
      id: 10,
      name: 'Pear',
      image:
        'https://img.freepik.com/free-vector/vintage-pear-illustration_53876-112720.jpg?w=2000',
      off: 25,
      previousprice: 70.54,
    },
  ];

  return (
    <View style={styles(colors).mainContainer}>
      <Text style={styles(colors).headerText}>Search Box </Text>
      <Input
        backgroundColor="white"
        borderRadius="10"
        placeholder="search Products"
        placeholderTextColor="blue"
        fontSize="15"
        fontWeight="bold"
        margin="3"
        onChangeText={val => setValue(val)}
      />
      <ScrollView style={styles(colors).container} bounces="false">
        {data
          .filter(item => {
            if (value) {
              return item.name.toLowerCase().includes(value.toLowerCase());
            } else {
              return item;
            }
          })
          .map(item => {
            return (
              <VStack key={item.id}>
                <View style={styles(colors).subContainer}>
                  <View style={styles(colors).imageContainer}>
                    <View style={styles(colors).discounttext}>
                      <Text style={styles(colors).textofimage}>
                        {item.off}% off
                      </Text>
                    </View>
                    <Image
                      style={styles(colors).image}
                      source={{
                        uri: item.image,
                      }}
                    />
                  </View>
                  <View style={styles(colors).titleContainer}>
                    <Text style={styles(colors).title}>{item.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles(colors).previousprice}>
                        ${item.previousprice}/250 gm
                      </Text>
                      <Text style={styles(colors).price}>
                        $
                        {item.previousprice -
                          (item.previousprice * item.off) / 100}
                        /250 gm
                      </Text>
                    </View>
                  </View>
                </View>
              </VStack>
            );
          })}
      </ScrollView>
    </View>
  );
}

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
    },
    title: {
      fontSize: 16,
      fontWeight: '800',
      color: 'orange',
    },
    previousprice: {
      textDecorationLine: 'line-through',
      color: colors.text,
    },
    price: {
      fontSize: 14,
      fontWeight: '800',
      color: '#87ab69',
      marginLeft: 15,
    },
  });
