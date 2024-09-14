import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:40,
        marginHorizontal:10,
    },
    searchInput:{
        padding:5,
        height:50,
        borderRadius:15,
        fontSize:16,
        backgroundColor:'white'
    },
    activityIndicator:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    locationRow:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        borderBottomWidth:1,
        borderColor:'lightgrey',
        gap:10
    },
    icon:{
        fontSize:25,
        color:'#01012c',
    },
    iconContainer:{
        padding:5,
        // backgroundColor:'#bbbbbb',
        // borderRadius:20,
    },
    imgContainer:{
        height:40,
        width:40,
        borderRadius:10,
        overflow:'hidden'
    },
    img:{
        flex:1,
        resizeMode:'cover'
    },
    realtorName:{
        fontSize:18,
        fontWeight:'bold',
        flex:1,
    },
    subContainer:{
        marginTop:2,
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    subLocation:{
        color:'#525151',
        letterSpacing:0.5,
    },
    subPrice:{
        color:'#525151',
        letterSpacing:0.5,
    },
    noResultText:{
        marginTop:10,
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        letterSpacing:0.7,
        color:'#9b9999',
    },
})

export default styles
