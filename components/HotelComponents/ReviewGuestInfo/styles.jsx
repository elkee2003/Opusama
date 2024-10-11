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
    txtInputHeader:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
    },
    txtInput:{
        fontSize:16,
        borderWidth:1,
        borderRadius:20,
        padding:10,
    },
    paymentBtn:{
        backgroundColor:'#23a508',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        marginHorizontal:40,
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
