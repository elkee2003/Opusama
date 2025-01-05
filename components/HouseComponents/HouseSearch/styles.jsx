import { StyleSheet, } from 'react-native';
import {Colors} from '../../../constants/Colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:40,
        marginHorizontal:10,
    },
    searchInput:{
        padding:5,
        height:50,
        borderRadius:15,
        fontSize:16,
        backgroundColor:'white'
    },
    priceInputRow:{
        flexDirection:'row',
        justifyContent:'center',
        gap:5,
        marginBottom:15,
    },
    priceInput:{
        marginTop:5,
        padding:5,
        borderRadius:15,
        width:150,
        textAlign:'center',
        fontSize:16,
        backgroundColor:'white',
    },
    activityIndicator:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    propertyContainer:{
        marginHorizontal:10,
    },
    imageContainer:{
        aspectRatio: 3/2, 
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor:'#15141A'
    },
    image:{
        flex: 1,
        width: '100%',
        objectFit:'contain'
    },
    bedroom:{
        fontSize:15.5,
        color: Colors.COMMENTS,
    },
    
    location:{
        fontSize:15.5,
        color: Colors.COMMENTS,
    },
    contact:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    name:{
        fontSize:17,
        fontWeight:'bold',
        letterSpacing:0.7,
        color:'#141414',
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
        marginBottom:15,
    },
    noResultText:{
        marginTop:10,
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        letterSpacing:0.7,
        color:'#9b9999',
    },
    
})

export default styles
