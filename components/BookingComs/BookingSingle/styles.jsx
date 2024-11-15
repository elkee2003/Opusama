import { StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
    container:{
        position:'relative',
        padding:10,
        backgroundColor:'#dddbdb',
        borderRadius:20,
        marginBottom:15,
    },
    removeButtonContainer: {
        position: 'absolute',
        top:5,
        right:10, 
        zIndex: 1,
      },
    removebtn:{
        color: '#c70f0f',
        fontSize:25,
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
    wait:{
        fontStyle:'italic',
        color:'#797777'
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
    viewConInfoRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5,
    },
    infoIconCon:{
        justifyContent:'center',
        alignItems:'center',
        padding:5,
    },
    infoIcon:{
        fontSize:20,
    },
    viewCon:{
        padding:10,
        width:150,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0ac00a',
        borderRadius:15,
    },
    viewTxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    removeCon:{
        padding:10,
        width:150,
        marginTop:10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#970303',
        borderRadius:15,
    },
    removeTxt:{
        color:'#f7f4f4',
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
