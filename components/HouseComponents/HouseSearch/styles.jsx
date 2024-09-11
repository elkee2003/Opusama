import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        marginHorizontal:10,
    },
    searchInput:{
        padding:5,
        height:50,
        borderRadius:15,
        fontSize:16,
        backgroundColor:'white'
    },
    activityIndicator:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    locationRow:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        borderBottomWidth:1,
        borderColor:'lightgrey'
    },
    iconContainer:{
        backgroundColor:'lightgrey',
        padding:5,
        borderRadius:10,
        marginRight:10
    },
    
})

export default styles
