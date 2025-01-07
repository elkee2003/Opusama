import { StyleSheet, } from 'react-native'
import {Colors} from '../../../constants/Colors'

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginHorizontal:10,
        position:'relative'
    },
    bckContainer:{
        position:'absolute',
    },
    bckIcon:{
        fontSize:30,
        color:'black',
        zIndex:3,
    },
    scrollContainer:{
        marginTop:40,
        marginBottom:120,
    },
    imageContainer:{
        aspectRatio: 3/2, // Aspect ratio for the image
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden', // Ensure image stays within bounds of container
    },
    image:{
        flex: 1,
        width: '100%',
    },
    realtorNameRow:{
        flex:1,
        flexDirection:'row',
        gap:10,
        alignItems:'center',
    },
    name:{
        fontSize:30,
        fontWeight:'bold',
        color: Colors.HEADING,
        letterSpacing:0.8,
    },
    realtorStar:{
        color:'#333236',
        fontSize:22,
    },
    realtorStarTxt:{
        fontSize:22,
        color:'#383737',
    },
    bedroom:{
        fontSize:17,
        color:Colors.COMMENTS,
    },
    locationRow:{
        flexDirection:'row',
    },
    location:{
        fontSize:17,
        fontWeight:'bold',
        color:Colors.COMMENTS,
    },
    reviewIconRow:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    star:{
        color:'#07021f',
        fontSize:18,
    },
    starTxt:{
        fontSize:17,
    },
    descriptionContainer:{
        flexDirection:'row'
    },
    description:{
        // marginTop:10,
        fontSize:19,
        lineHeight:25,
        color:Colors.TEXTCOLOUR,
    },
    readMoreLess:{
        color:'#009b0f',
    },
    propertyType:{
        fontSize:18,
        fontWeight:'bold',
        lineHeight:25,
        justifyContent:'center',
    },
    subheader:{
        fontSize:19,
        fontWeight:'bold',
        color: Colors.HEADING,
        lineHeight:25,
        justifyContent:'center',
    },
    price:{
        fontSize:18,
        fontWeight:'400',
        color:Colors.TEXTCOLOUR,
    },
    sub:{
        fontStyle:'italic',
        fontSize:18,
        fontWeight:'bold',
        marginRight:7,
        color:Colors.TEXTCOLOUR,
    },
    priceRow:{
        flexDirection:'row',
        marginTop:10,
    },
    cautionFeeRow:{
        flexDirection:'row',
        marginBottom:10,
    },
    priceRowTotal:{
        marginTop:4,
        flexDirection:'row',
    },
    topBorderLine:{
        marginVertical:5,
        borderBottomWidth:1,
        borderColor:'#c4c4c4',
    },
    borderLine:{
        marginVertical:20,
        borderBottomWidth:1,
        borderColor:'#a7a7a7',
    },
    totalPrice:{
        fontWeight:'bold',
        fontSize:19,
        textDecorationLine:'underline',
        color:Colors.TEXTCOLOUR,
    },

    // For inspection fee
    subInspectionFee:{
        fontStyle:'italic',
        fontSize:18,
        fontWeight:'bold',
        marginRight:7,
        color:'grey',
    },
    inspectionFee:{
        fontWeight:'bold',
        fontSize:19,
        color:'grey',
    },
    luxPolHeadTxt:{
        fontSize:25.888,
        fontWeight:'bold',
        marginBottom:10,
        color:Colors.HEADING,
    },
    luxPolTxt:{
        fontSize:16,
        color:Colors.COMMENTS,
        lineHeight:23,
    },
    rateContainer:{
        flex:1,
        gap:10,
    },
    rateTxt:{
        fontSize:25.888,
        fontWeight:'bold',
        color:Colors.HEADING,
    },
    starContainer:{
        flex:1,
        flexDirection:'row',
        width:"70%",
        justifyContent:'space-between',
        alignSelf:'center',
    },
    
    usersStarContainer:{
        flex:1,
        flexDirection:'row',
        gap:10,
    },

    reviewInput:{
        fontSize:16,
        borderWidth:1,
        borderRadius:20,
        padding:10,
    },

    submitReviewBtn:{
        marginTop:10,
        padding:5,
        marginHorizontal:90,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#020425',
        borderRadius:30
    },

    submitReviewTxt:{
        color:'#05072b',
        fontSize:20,
        fontWeight:"bold",
    },

    lastRatingReviewTxt:{
        marginTop: 15,
        fontSize:25.888,
        fontWeight:'bold',
        color:Colors.HEADING,
    },


    lastReviewsContainer: {
        padding: 7,
        borderRadius:20,
        backgroundColor: '#e4dfdf',
    },
    reviewsContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
    },

    seeAllReviews:{
        fontSize:16,
        color:'#07630e',
        textDecorationLine:'underline',
        marginBottom:50,
    },

    reviewItem: {
        borderBottomWidth:1,
        borderColor:'#dbd9d9',
        marginBottom: 15,
    },

    reviewerName: {
        fontWeight: 'bold',
        fontSize:17,
    },

    // rating: {
    //     color: '#333',
    // },

    reviewText: {
        color: '#0e0d0d',
        fontSize:15,
        marginBottom:10,
    },

    noReviews:{
        marginTop:60,
        fontSize:30,
        fontWeight:'bold',
        color:'#b6b3b3',
        textAlign:'center',
    },

    getinTouchContainer:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        right:10,
        left:10,
        height:60,
        bottom:20,
        backgroundColor:'#020425',
        borderRadius:30
    },
    getInTouchTxt:{
        color:'#dddcdc',
        fontSize:25,
        fontWeight:"bold",
    },
})

export default styles;