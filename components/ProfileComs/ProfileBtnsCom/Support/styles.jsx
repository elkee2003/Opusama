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
        marginBottom:10,
    },
    subHeaderRow:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
    },
    divider:{
        borderWidth:0.5,
        borderColor:'#acacac',
        marginVertical:20
    },
    subHeaderTxt:{
        fontSize:19,
        fontWeight:'bold'
    },
    txt:{
        fontSize:18,
    },
    support:{
        fontSize:18,
        color:'#0574dd',
    }, 
    txtPhone:{
        fontSize:18,
        fontWeight:'bold',
    },
    icon:{
        fontSize:30,
    },
    txtBulletRow:{
        marginTop:6,
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    pointer:{
        fontSize:30,
    },
    lastSection:{
        marginBottom:15,
    },
})

export default styles
