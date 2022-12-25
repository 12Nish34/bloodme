import { StyleSheet, Text, View, FlatList, Animated, Image, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'


const LandingCarousel = () => {
    const data = [{
        id: 1,
        title: "hey",
        img: "https://st3.depositphotos.com/6464944/34714/v/1600/depositphotos_347142454-stock-illustration-female-doctor-in-medical-robe.jpg?forcejpeg=true"
        },{
            id: 2,
            title: "hey",
            img: "https://st3.depositphotos.com/6464944/34714/v/1600/depositphotos_347142454-stock-illustration-female-doctor-in-medical-robe.jpg?forcejpeg=true"
        },{
            id: 3,
        title: "hey",
        img: "https://st3.depositphotos.com/6464944/34714/v/1600/depositphotos_347142454-stock-illustration-female-doctor-in-medical-robe.jpg?forcejpeg=true"
        }
    ]
  return (
    <View>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item})=>{
            const img = item.img;
            return(
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: (Dimensions.get('screen').height)/4,
                }}>
                    <Image 
                        source={{uri:img}}
                        style={{
                            width: 400,
                            height:300,
                        }}
                    ></Image>
                    {console.log(item.img)}
                    <Text>{item.title}</Text>
                </View>
            )
        }}
        horizontal
       />
    </View>
  )
}

export default LandingCarousel

const styles = StyleSheet.create({})