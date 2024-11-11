import { StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#dddbdb',
        borderRadius:20,
        marginBottom:15,
    },
    subHeading:{
        fontSize:16,
        fontWeight:'bold'
    },
    detail:{
        fontSize:15,
        marginBottom:5,
    },
    priceTypeRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5,
    },
    priceType:{
        fontSize:15,
    },
    statusRow:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    greenIcon:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:'#03eb03',
    },
    redIcon:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:'#eb1e03',
    },
    deleteButtonCon:{
        padding:10,
        marginTop:10,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'#f31d1d',
    },
    deleteButtonTxt:{
        fontSize:15,
        fontWeight:'bold',
    },
    viewCon:{
        padding:10,
        width:150,
        marginTop:10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0ac00a',
        borderRadius:15,
    },
    viewTxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    delCon:{
        padding:10,
        width:150,
        marginTop:10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f31d1d',
        borderRadius:15,
    },
    delTxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    // cancelButtonCon:{
    //     padding:10,
    //     marginTop:10,
    //     alignSelf:'center',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     borderWidth:2,
    //     borderColor:'#f31d1d',
    //     borderRadius:15,
    // },
    // cancelButtonTxt:{
    //     fontSize:15,
    //     fontWeight:'bold',
    // },
})

export default styles;
