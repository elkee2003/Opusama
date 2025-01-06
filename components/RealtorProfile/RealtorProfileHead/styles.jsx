import { StyleSheet, } from 'react-native';
import {Colors} from '../../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginHorizontal:10,
    },
    profilePicContainer:{
        height:130,
        width:130,
        borderRadius:35,
        backgroundColor:'#a2a2a8',
        justifyContent:'center',
        marginTop:10,
        marginBottom:5,
        position:'relative',
        overflow: 'hidden', 
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:35,
    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        color:'#01011b',
    },
    row:{
        flexDirection:'row',
        gap:10,
    },
    reviewIconRow:{
        flexDirection:'row',
        alignItems:'center',
        gap:2
    },
    star:{
        color:'#333236',
        fontSize:18,
    },
    starTxt:{
        fontSize:18,
        color:'#383737',
    },
    txtDesc:{
        fontSize:15,
        fontWeight:'bold',
        color:'#484849',
        marginBottom:20,
    },
    readMoreLess:{
        color:'#009b0f',
    },
    rateReviewBtn:{
        padding:10,
        marginHorizontal:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        backgroundColor:'#020425',
        marginBottom:10,
    },
    rateReviewBtnTxt:{
        color:'#ededee',
        fontSize:20,
        fontWeight:"bold",
    },
})

export default styles
