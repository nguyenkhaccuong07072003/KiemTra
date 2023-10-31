import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'

const background = require('../assets/homeimg.png');
const like = require('../assets/like.png');
const Home = () => {
  return (
    <View style={styles.container}>
        <Image source = {background} style = {styles.img}
        />
        <View style={styles.info}>
            <Text style = {styles.title}>
                Go for a walk and feed the dog
            </Text>
            <Image source={like}/>
        </View>

    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    img:{
        width:400,
        height:400,
    },
    info:{
        flexDirection:'row',
        paddingTop:20,
        
    },
    title:{
        fontSize:26,

    }

})