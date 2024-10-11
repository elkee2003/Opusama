import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
    },
    card:{
        width:300,
        height:550,
        backgroundColor:'#126901',
        // justifyContent:'center',
        // alignItems:'center',
        borderRadius:40,
        paddingHorizontal:15,
        overflow:'hidden'
    },
    imgContainer:{
        height:150,
        width:150,
        borderRadius:35,
        backgroundColor:'#d4d4ca',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30,
        alignSelf:'center'
    },
    profileImg:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:35,
    },
    vectorIcon:{
        fontSize:90,
        alignSelf:'center',
        color:'#838181',
    },
    contactDetails:{
        // marginLeft:5,
        // marginRight:20,
    },
    row:{
        flexDirection:'row',
        gap:10,
        marginVertical:5,
        alignItems:'center',
    },
    icon:{
        fontSize:20,
        color:'#cccccc',
    },
    txtEmail:{
        flex:1,
        fontSize:20,
        color:'#cccccc',
        textAlign:'center',
    },
    phoneNumberTxt:{
        marginLeft:10,
        fontSize:20,
        color:'#cccccc',
        textAlign:'center',
    },
    paymentBtn:{
        padding:9,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 20,
        borderRadius:20,
        backgroundColor:'#041938',
        marginVertical:10,
    },
    paymentTxt:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#e4e1e1'
    },
    bookContainer:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
    },
    bookHeader:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    bookRow:{
        flexDirection:'row',
        gap:10,
        marginTop:10,
    },
    bookBtn:{
        fontSize:17,
        color:'#b8b7b7'
    }

})

export default styles
