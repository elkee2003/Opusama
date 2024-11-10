import { StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        marginHorizontal:10,
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    guestUnit:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    unitTxt:{
        textAlign:'center',
        borderRadius:20,
        padding:10,
        color:'white',
        backgroundColor:'#272727',
    },
    txtInputHeader:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:10,
    },
    txtInput:{
        fontSize:16,
        borderWidth:1,
        borderRadius:20,
        padding:10,
        color:'white',
        backgroundColor:'#08021f',
        marginBottom:10,
    },
    paymentBtn:{
        backgroundColor:'#23a508',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginHorizontal:70,
        marginVertical:20,
        borderRadius:20,
    },
    paymentTxt:{
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    }

})

export default styles
