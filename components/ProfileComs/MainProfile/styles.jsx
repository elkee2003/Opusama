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
        alignItems:'center'
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
        padding:5,
    },

    subHeader:{
      fontSize:16,  
      fontWeight:'bold'
    },
})

export default styles
