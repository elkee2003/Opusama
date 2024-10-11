import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#15141A',
        justifyContent:'center',
        alignItems:'center'
    },
    backIconContainer:{
        position:'absolute',
        top:70,
        left:15,
    },
    backIcon:{
        color:'#d6d0d0',
        fontSize:28,
    },
    image:{ 
        width: width, 
        aspectRatio:2/3,
        objectFit:'contain'
    }
   
})

export default styles;