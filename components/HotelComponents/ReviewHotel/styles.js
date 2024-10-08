import { StyleSheet, } from 'react-native'
import {Colors} from '../../../constants/Colors'

const styles = StyleSheet.create({
    reviewContainer:{
        gap:10,
        marginTop:5,
        marginBottom:15,
    },
    profileReviewContainer:{
        gap:5,
    },
    profileDetails:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    profilePicContainer:{
        height:45,
        width:45,
        borderRadius:20,
        backgroundColor:"grey",
        justifyContent:'center',
        alignItems:'center',
    },
    profileImg:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:35,
    },
    vectorIcon:{
        fontSize:20,
        alignSelf:'center',
        color:'#3a3a3a',
    },
    username:{
        fontSize:17,
        fontWeight:'bold',
        color:Colors.HEADING
    },
    profileStarContainer:{
        flexDirection:'row',
        gap:5,
    },
    profileStar:{
        fontSize:20,
        color:'black'
    },
    profileReviewTxt:{
        fontSize:16,
        lineHeight:23,
        color:Colors.COMMENTS,
    },
    readMoreLess:{
        color:'#009b0f',
    },
})

export default styles
