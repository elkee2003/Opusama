import { StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginHorizontal:20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },
    subHeader:{
        fontSize:19,
        fontWeight:'bold',
        marginTop:15,
    },
    txtNum:{
        marginTop:8,
    },
    txtBulletRow:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    pointer:{
        fontSize:30,
    },
    txt:{
        fontSize:18,
    },
    subHeaderTxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    lastSection:{
        marginBottom:15,
    },
    deltBtn:{
        alignItems:"center",
        justifyContent:'center',
        marginVertical:20,
        marginHorizontal:20,
        padding:10,
        borderRadius:25,
        backgroundColor:'red'
    },
    deltTxt:{
        fontSize:23,
        fontWeight:'bold',
        color:'black',
    }
})

export default styles
