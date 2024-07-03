import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop:35,
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
        objectFit:'contain'
    },
    bedroom:{
        fontSize:14,
        color:'#413b3b',
    },
    
    location:{
        fontSize:14,
        color:'#413b3b',
    },
    contact:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    name:{
        fontSize:14,
        color:'#141414',
    },
    description:{
        fontSize:19,
        lineHeight:25
    },
    price:{
        fontSize:19,
        fontWeight:'400',
    },
    sub:{
        fontStyle:'italic',
        fontSize:19,
        fontWeight:'bold',
        marginRight:7
    },
    priceRow:{
        flexDirection:'row',
        marginTop:10,
    },
    priceRowTotal:{
        marginTop:4,
        flexDirection:'row',
    },
    totalPrice:{
        fontWeight:'bold',
        fontSize:19,
        textDecorationLine:'underline'
    },
})

export default styles;
