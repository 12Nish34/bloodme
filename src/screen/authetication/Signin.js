import { Alert,Image, KeyboardAvoidingView,Dimensions,ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, ScrollViewComponent } from 'react-native'
import React, { useState } from 'react'
import theme from './../../../constaints/constaint'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Input, Button, BackgroundImage } from '@rneui/base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Signin = () => {
  const [click,setClick] = useState(false);
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const imageUri = "https://st4.depositphotos.com/6464944/26982/v/1600/depositphotos_269822828-stock-illustration-blood-donation-male-female-characters.jpg?forcejpeg=true"
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={{uri:imageUri}}
          style={{width: '100%', height: '100%'}}
        >
        </ImageBackground>
      </View>
        <View style={styles.content}>
        <Text style={{marginLeft:20, marginVertical:20, fontSize: theme.SMALL}}>Sigin to contine</Text>
        <Input
          inputContainerStyle={
            {
              borderBottomWidth: 1,
              borderColor:'#a0a2a7',
              height: 50,
              marginHorizontal:10,
            }
          }
          leftIcon={
            <MaterialIcons
                name="email"
                size={20}
                color={theme.black}
            />
          
        }
        inputStyle={styles.input}
        onBlur={()=>{
          
        }}
        value={email}
        autoCapitalize="none" 
        onChangeText={setEmail}
        placeholder='Email' 
        />
        <Input
          inputContainerStyle={
            {
              borderBottomWidth: 1,
              borderColor:'#a0a2a7',
              height: 50,
              marginHorizontal:10,
            }
          }
          leftIcon={
            <MaterialIcons
                name="person"
                size={20}
                color={theme.black}
            />
        }
        inputStyle={styles.input}
        onBlur={()=>{
          
        }}
        value={name}
        autoCapitalize="none" 
        onChangeText={setName}
        placeholder='Full Name' 
        />
        <Input
          inputContainerStyle={
            {
              borderBottomWidth: 1,
              borderColor:'#a0a2a7',
              height: 50,
              marginHorizontal:10,
            }
          }
          leftIcon={
            <MaterialIcons
                name="phone"
                size={20}
                color={theme.black}
            />
        }
        inputStyle={styles.input}
        onBlur={()=>{
          
        }}
        value={email}
        autoCapitalize="none" 
        onChangeText={setEmail}
        placeholder='Mobile No' 
        />
        <Button 
          titleStyle={{ 
              color: 'white',
          }}  
          buttonStyle={{
              backgroundColor: '#E94560',
              padding:15,
              borderRadius: 10,
              marginHorizontal: 10,
              marginTop: 3,
          }}
            title="Sign Up" type="clear"
            /> 
          <Text style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}>Read our terms and condition to get the best out of this app!</Text>
          </View> 
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create ({
  container:{
      flex: 1,
      width: '100%',
      height: Dimensions.get('screen').height,
      backgroundColor:theme.white,
  },

  header: {
      flex:2,
      height: 300,
  },

  content:{
      flex: 3,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      backgroundColor: 'white',
      height: (Dimensions.get('screen').height)-50,
  },

  logo: {
      marginTop: 80,
      fontSize: 60,
      color: "#EB1D36",
      textAlign: 'center',
      fontFamily: 'Pacifico_400Regular',
  },

  input: {
      paddingHorizontal: 5,
      color: 'black',
      fontSize:16,
  },

})


export default Signin


