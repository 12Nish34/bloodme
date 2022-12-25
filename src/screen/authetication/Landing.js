import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LandingCarousel from '../../component/LandingCarousel'




const Landing = () => {
    
  return (
    <View style={styles.container}>
        <LandingCarousel></LandingCarousel>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})