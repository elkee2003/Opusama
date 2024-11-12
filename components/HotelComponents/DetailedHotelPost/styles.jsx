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
    user:{
        flex:1
    },
    name:{
        fontSize:30,
        fontWeight:'bold',
        color: Colors.HEADING,
        letterSpacing:0.8,
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
    // writeReviewCon:{
    //     borderBottomWidth:1.5,
    //     marginRight:'auto',
    //     borderColor:'#19ad25',
    //     borderRadius:20,
       
    // },
    writeReview:{
        fontSize:16,
        color:'#07630e',
        textDecorationLine:'underline'

    },
    seeReviewsBtn:{
        marginVertical:10,
        padding:5,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:70,
        backgroundColor:'transparent',
        borderRadius:10,
    },
    seeReviewsBtnTxt:{
        fontSize:17,
        fontWeight:'bold',
        color: Colors.HEADING,
    },
    bookContainer:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        right:10,
        left:10,
        height:60,
        bottom:20,
        backgroundColor:'#19ad25',
        borderRadius:30
    },
    bookTxt:{
        color:'#dddcdc',
        fontSize:25,
        fontWeight:"bold",
    },
})

export default styles;