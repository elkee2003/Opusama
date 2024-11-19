import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginHorizontal:20,
    },
    profilePicContainer:{
        height:120,
        width:120,
        borderRadius:75,
        backgroundColor:'#a2a2a8',
        justifyContent:'center',
        marginVertical:8,
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:75,
    },
    row:{
        flexDirection:'row',
        gap:10,
        marginBottom:3,
        alignItems:'center',
    },
    name:{
        flex:1,
        fontSize:20,
        fontWeight:"bold",
        color:'#01011b',
    },
    txt:{
        flex:1,
        fontSize:15,
        color:'#01011b'
    },
    profileSubrow:{
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'space-around',
        gap:20,
    },
    subHeaderContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius:20,
        padding:8,
        marginBottom:30,
    },

    subHeader:{
        color:'#0e0530',
        fontSize:18,  
        fontWeight:'bold'
    },
    btnCard:{
        padding:15,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#cac9c9",
        borderRadius:15,
    },
    btnTxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    nxtIcon:{
        fontSize:25,
    },
})

export default styles
