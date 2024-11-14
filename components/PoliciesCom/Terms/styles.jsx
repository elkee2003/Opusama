import { StyleSheet,} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginHorizontal:10,
        marginBottom:20,
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    subHeader:{
        marginTop:15,
        fontSize:19,
        fontWeight:'bold',
    },
    txt:{
        fontSize:17,
        lineHeight:20,
    },
    pointer:{
        fontWeight:'bold',
    },
    txtFailure:{
        marginTop:10,
        fontSize:17,
        lineHeight:20,
    },
    support:{
        fontStyle:'italic',
        fontWeight:'bold',
    }
})

export default styles;
