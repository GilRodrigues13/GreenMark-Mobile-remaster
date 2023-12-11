import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66CDAA',
  },
  qrCode: {
    width: 300,
    height: 300,
  },
  
  textTotal:{
    margin:2,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    
  },
  textPrice:{
    margin:2,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    marginLeft:30,
  },
  textButtonPay:{
    width:100,
    marginTop:19,
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    textAlign:'center',
    color:'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    gap:10,
  },
  buttonHistory:{
    width:100,
    height:10,
    marginTop:19,
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    textAlign:'center',
    color:'white'
  }
});