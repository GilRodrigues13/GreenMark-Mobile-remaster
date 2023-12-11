
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CDAA',
  },
 
  containerBar: {
        flex:1,
        position: 'absolute', 
        bottom: 0, 
        width: '100%', 
        height: 98,
        backgroundColor: '#20B2AA',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
  },
  
  
  button:{
    marginHorizontal: 100,
  },

  productContainer: {
    gap: 5,
    height: 260,
    width: 230,
    borderWidth: 5,
    borderColor: 'rgb(194, 193, 193)',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginLeft:80,
    marginTop:85,
    alignItems: 'center',
    justifyContent:'space-around',
    padding: 20,
    
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    gap:50
  },

});



