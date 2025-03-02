import { StyleSheet, } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginHorizontal:10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },
    bckBtnCon:{
        position:'absolute',
        top:10,
        left:10,
    },
    bckBtnIcon:{
        fontSize:30,
        color:'black'
    },
    profilePicContainer:{
        position:'relative',
        height:150,
        width:150,
        borderRadius:75,
        backgroundColor:'#a2a2a8',
        justifyContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        borderRadius:75,
    },
    removeButtonContainer: {
        position: 'absolute',
        top:20, 
        right: 90,
        zIndex: 1,
      },
    removebtn:{
        color: '#c70f0f',
        fontSize:40,
    },
    plusIconContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }], // Adjust translate values according to your icon size
        zIndex: 3,
    },
    plusIcon:{
        color: 'rgba(3, 3, 59, 0.7)',
        backgroundColor:'transparent',
        fontSize:60
    },
    input: {
        marginVertical: 10,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,
    },
    error:{
        color:'#d80b0b',
        fontSize:13,
        marginTop:5,
        marginHorizontal:15,
        marginBottom:5,
    },
    nxtBtn:{
        backgroundColor:'#0c052e',
        marginTop:10,
        padding:2,
        marginHorizontal:80,
        marginBottom:10,
        alignItems:'center',
        borderRadius:30,
    },
    nxtBtnIcon:{
        fontSize:50,
        color:'#ffffff'
    },
    
    signoutBtn:{
        position:'absolute',
        top:10,
        right:15,
    },
    signoutTxt:{
        fontSize:16,       
        color:'#c90707',
    },

    // Review styles
    subHeader:{
        marginTop:15,
        fontSize:15,
        fontWeight:'bold',
    },
    inputReview:{
        padding:5,
        fontSize:18,
        letterSpacing:0.5,
        color:"white",
        backgroundColor:'#3b3b3b',
        borderRadius:20,
    },
    inputReviewLast:{
        padding:5,
        fontSize:18,
        letterSpacing:0.5,
        color:"white",
        backgroundColor:'#3b3b3b',
        borderRadius:20,
        marginBottom:20,
    },

    saveBtn:{
        backgroundColor:'#05c405',
        marginTop:10,
        padding:2,
        marginHorizontal:55,
        marginBottom:10,
        alignItems:'center',
        borderRadius:30,
    },
    saveBtnTxt:{
        fontSize:30,
        fontWeight:'bold',
        color:'#e9e6e6'
    },

    // Empty items for users not signed in
    emptyInputCon:{
        marginTop:30,
    },
    emptyInput: {
        marginVertical: 10,
        backgroundColor: "white",
        padding: 25,
        borderRadius: 5,
    },
    emptyBtnCon:{
        backgroundColor:'#0c052e',
        marginTop:10,
        padding:2,
        marginHorizontal:80,
        marginBottom:10,
        alignItems:'center',
        borderRadius:30,
    },
    emptyBtnTxt:{
        fontSize:30,
        fontWeight:'bold',
        color:'#e9e6e6'
    },
  
  })

export default styles;
