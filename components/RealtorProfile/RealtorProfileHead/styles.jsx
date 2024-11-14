import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginHorizontal:10,
    },
    profilePicContainer:{
        height:130,
        width:130,
        borderRadius:35,
        backgroundColor:'#a2a2a8',
        justifyContent:'center',
        marginTop:10,
        marginBottom:5,
        position:'relative',
        overflow: 'hidden', 
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:35,
    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        color:'#01011b',
    },
    // txt:{
    //     flex:1,
    //     fontSize:15,
    //     color:'#01011b'
    // },
    txtDesc:{
        fontSize:15,
        fontWeight:'bold',
        color:'#484849',
        marginBottom:20,
    },
    readMoreLess:{
        color:'#009b0f',
    },
})

export default styles
