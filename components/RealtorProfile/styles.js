import { StyleSheet, Dimensions } from 'react-native'
import {Colors} from '../../constants/Colors'

const {width} = Dimensions.get('window');
const numcolumns = 3;
const margin = 2;
const totalSpacing = (numcolumns + 12) * margin;
const imageSize = (width - totalSpacing) / numcolumns;

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        marginHorizontal:10,
    },
    profileDetails:{
        
    },
    profilePicContainer:{
        height:130,
        width:130,
        borderRadius:35,
        backgroundColor:'#a2a2a8',
        justifyContent:'center',
        marginVertical:5,
        position:'relative',
        overflow: 'hidden', 
    },
    profileImg:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:35,
    },
    // row:{
    //     flexDirection:'row',
    //     gap:10,
    //     alignItems:'center'
    // },
    name:{
        flex:1,
        fontSize:28,
        fontWeight:"bold",
        color:'#01011b',
    },
    descriptionCon:{
        marginBottom:15,
    },
    description:{
        fontSize:17,
        color:Colors.COMMENTS,
        lineHeight:23,
    },
    profileBtnCon:{
        flexDirection:'row',
        gap:10,
        marginBottom:20,
    },
    contactBtn:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:'#02062e',
        borderRadius:20
    },
    contactBtnTxt:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    },
    rateReviewBtn:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:'Transparent',
        borderWidth:2,
        borderColor:'#02062e',
        borderRadius:20
    },
    rateReviewBtnTxt:{
        color:'#02062e',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    mediaRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: margin,
    },
    emptyContainer: {
        width: imageSize,
        aspectRatio: 3 / 4,
        margin: margin / 10, // Ensure the empty view takes up space
        backgroundColor: 'blue', // Make it invisible
      },
    mediaContainer:{
        width:imageSize,
        aspectRatio:3/4,
    },
    media:{
        flex:1,
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    // medias:{
    //     aspectRatio:2/3,
    //     width:100,
    // },
    
})

export default styles
