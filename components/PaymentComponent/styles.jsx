import { StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        marginHorizontal:10,
    },
    bckIcon:{
        fontSize:30,
        color:'black',
        zIndex:3,
    },
    logoCon:{
        marginTop:150,
        marginBottom:20,
        height:100,
        width:100,
        alignSelf:'center',
    },
    logo:{
        flex: 1,
        width: '100%',
    },
    flutterwaveTxt:{
        fontsize:19,
        fontWeight:'bold',
        textAlign:'center',
    },
    sub:{
        // marginTop:150,
        // top:'30%'
    },
    input:{
        padding:10,
        borderWidth:1,
        borderRadius:20,
        marginVertical:15,
        marginHorizontal:20,
        fontSize:18,
    },
    btnContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:150,
        backgroundColor:'#0aa30a',
        borderRadius:15,
        alignSelf:'center',
    },
    btnTxt:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        letterSpacing:0.3,
    },
})

export default styles;
