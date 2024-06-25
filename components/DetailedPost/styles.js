import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,

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
    bedroom:{
        marginTop:10,
        fontSize:18,
        color:'#413b3b',
    },
    
    location:{
        fontSize:18,
        fontWeight:'bold',
        color:'#413b3b',
    },
    user:{
        flexDirection:'row',
        alignItems:'flex-start'
    },
    name:{
        fontSize:20,
        marginBottom:10,
        color:'#413b3b',
    },
    description:{
        marginTop:10,
        fontSize:21,
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