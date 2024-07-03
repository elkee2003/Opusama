import { StyleSheet, } from 'react-native'

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
        backgroundColor:"grey"
    },
    username:{
        fontSize:16,
        fontWeight:'bold'
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
        color:'#4b4a4a'
    },
    readMoreLess:{
        color:'#009b0f',
    },
})

export default styles
