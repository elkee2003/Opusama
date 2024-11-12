import { StyleSheet, } from 'react-native'
import {Colors} from '../../../constants/Colors'

const styles = StyleSheet.create({
    container:{
        marginTop:45,
        marginHorizontal:20,
    },
    imageContainer:{
        aspectRatio: 3/2, // Aspect ratio for the image
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden', // Ensure image stays within bounds of container
        backgroundColor:'#15141A'
    },
    image:{
        flex: 1,
        width: '100%',
        resizeMode:'contain'
    },
    name:{
        fontSize:17,
        fontWeight:'bold',
        letterSpacing:0.7,
        color:'#141414',
    },
    contact:{
        flexDirection:'row',
    },
    bedroom:{
        fontSize:15.5,
        color: Colors.COMMENTS,
    },
    
    room:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    location:{
        fontSize:15.5,
        color: Colors.COMMENTS,
    },
    
    description:{
        fontSize:17,
        lineHeight:22,
        color: Colors.PRIMARY,
    },
    price:{
        fontSize:17,
        fontWeight:'bold',
    },
    priceRow:{
        flexDirection:'row',
        marginTop:5,
    },
})

export default styles;
