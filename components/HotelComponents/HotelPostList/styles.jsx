import { StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:30,
    },
    searchBtn:{
        // position:'fixed',
        // top: 50,
        marginTop:10,
        backgroundColor:'#ffffff',
        height:60,
        width:Dimensions.get('screen').width - 20,
        marginHorizontal:10,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    searchBtnTxt:{
        fontSize:16,
        fontWeight:'bold',
        margin:15,
    },
    noListings:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#afadad',
        fontSize:30,
        top:'30%',
        marginHorizontal:10
    },
})

export default styles
