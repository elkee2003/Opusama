import { StyleSheet, } from 'react-native';
import {Colors} from '../../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
    },
    noReviews:{
        marginTop:60,
        fontSize:30,
        fontWeight:'bold',
        color:'#b6b3b3',
        textAlign:'center',
    },
    scrollContainer:{
        marginBottom:170,
    },

    reviewsContainer: {
        marginTop: 30,
        padding: 10,
        // backgroundColor: '#f9f9f9',
    },

    rateTxt:{
        // marginTop:30,
        textAlign:'center',
        fontSize:25.888,
        fontWeight:'bold',
        color:Colors.HEADING,
    },

    reviewerName: {
        fontWeight: 'bold',
        fontSize:17,
    },

    reviewText: {
        color: '#0e0d0d',
        fontSize:15,
        marginBottom:10,
    },

    usersStarContainer:{
        // flex:1,
        flexDirection:'row',
        gap:10,
    },

    // Section of user to rate starts here
    rateContainer:{
        gap:10,
    },
    starContainer:{
        flexDirection:'row',
        width:"70%",
        justifyContent:'space-between',
        alignSelf:'center',
    },
    
    reviewInput:{
        fontSize:16,
        borderWidth:1,
        borderRadius:20,
        padding:10,
        marginHorizontal:10,
    },

    submitReviewBtn:{
        marginTop:10,
        padding:5,
        marginHorizontal:90,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#020425',
        borderRadius:30,
    },

    submitReviewTxt:{
        color:'#05072b',
        fontSize:20,
        fontWeight:"bold",
    },

    reviewSection:{
        position:'absolute',
        justifyContent:'center',
        backgroundColor:'#dadada',
        right:0,
        left:0,
        height:150,
        bottom:15,
    },
})

export default styles;