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
    sub:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'
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
    prices:{
        fontSize:19,
        marginVertical:10
    },
    oldPrice:{
        color:'#7c7676',
        textDecorationLine:'line-through'
    },
    newPrice:{
        fontWeight:'500'
    },
    totalPrice:{
        fontWeight:'bold',
        fontSize:19,
        textDecorationLine:'underline'
    },
})

export default styles;
