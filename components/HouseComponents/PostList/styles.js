import { StyleSheet, } from 'react-native'
import {Colors} from '../../../constants/Colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:30,
    },
    noListings:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#afadad',
        fontSize:30,
        top:'45%',
        marginHorizontal:10
    },
    searchInput:{
        padding:5,
        fontSize:16,
        backgroundColor:'white',
        marginHorizontal:10,
        borderRadius:10,
    }
})

export default styles
