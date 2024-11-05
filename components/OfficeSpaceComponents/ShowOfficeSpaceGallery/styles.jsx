import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        backgroundColor:'grey',
        width:width,
        height:250,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        resizeMode:'cover',
        marginLeft:2,
        height:'100%',
        width:'100%'
    }
})

export default styles
