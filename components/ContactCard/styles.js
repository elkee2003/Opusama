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
        height:350,
        backgroundColor:'#08012c',
        // justifyContent:'center',
        alignItems:'center',
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
        marginLeft:5,
        marginRight:20,
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
    txt:{
        marginLeft:10,
        marginRight:'auto',
        fontSize:20,
        color:'#cccccc',
        textAlign:'center',
    }
})

export default styles
