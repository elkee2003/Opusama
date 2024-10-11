import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        marginHorizontal:10,
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    card:{
        padding:10,
        marginBottom:15,
        backgroundColor:'#e2e2e2',
        borderRadius:20,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    divider:{
        borderWidth:1,
        borderColor:'grey',
        marginVertical:20,
    },
    guest:{
        fontSize:17,
        fontWeight:'bold',
    },
    age:{
        color:'#4e4e4e'
    },
    value:{
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        marginRight:10,
    },
    btnValue:{
        borderWidth:1,
        borderRadius:10,
        padding:2
    },
    num:{
        fontSize:17,
    },
    txtInputHeader:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
    },
    txtInput:{
        fontSize:16,
        borderWidth:1,
        borderRadius:20,
        padding:10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    nxtBtn:{
        backgroundColor:'#23a508',
        justifyContent:'center',
        alignItems:'center',
        padding:2,
        marginHorizontal:80,
        marginVertical:20,
        borderRadius:20,
    },
    nxtIcon:{
        fontSize:50,
        fontWeight:'bold',
        color:'white'
    }
})

export default styles;
