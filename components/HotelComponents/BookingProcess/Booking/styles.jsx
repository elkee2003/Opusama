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
    calendar:{
        marginTop:25,
    },
    selectedDates:{
        fontSize:17,
        fontWeight:'bold',
        gap:5,
        marginVertical:10,
    },
    range:{
        fontSize:17,
    },
    rangeBold:{
        fontSize:18,
        fontWeight:'bold'
    },
    selectCheck:{
        fontSize:16,
        fontStyle:'italic',
        color:'grey'
    },
    priceLabel:{
        fontWeight:'bold',
        fontSize:20,
    },
    priceValue:{
        fontSize:18,
        textDecorationLine:'underline',
    },
    nxtBtn:{
        backgroundColor:'#23a508',
        justifyContent:'center',
        alignItems:'center',
        padding:2,
        marginHorizontal:80,
        marginVertical:20,
        borderRadius:20,
    },
    nxtIcon:{
        fontSize:50,
        fontWeight:'bold',
        color:'white'
    },
})

export default styles;

