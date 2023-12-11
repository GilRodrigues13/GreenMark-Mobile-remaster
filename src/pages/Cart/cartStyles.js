
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66CDAA',
        
       
      },
      containerLogo: {
        flex: 2,
        backgroundColor: '#66CDAA',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:90,
        left:90
      },
      textVazio:{
        flex:1,
        fontSize: 24,
        fontWeight: 'bold',
        top: -170,
        marginBottom: 12,
        color:'#351c2f',
        left:80
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
      
      imagemProduto: {
        width: 100, // Largura desejada
        height: 100, // Altura desejada
        // Outras propriedades de estilo, como margem, borda, etc.
      },
     
      containerBar: {
        position: 'absolute', // Use 'absolute' para posicionar independentemente
        bottom: 0, // Posição na parte inferior da tela
        width: '100%', // Largura total
        height: 98,
        backgroundColor: '#20B2AA',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
  button:{
    marginHorizontal: 100,
  },
  
  textTotal: {
    fontSize: 24, // Escolha o tamanho de fonte desejado
    fontWeight: 'bold', // Peso da fonte
    marginBottom: 12,
    color: 'black', // Cor do texto
    left: 80, // Ajuste a posição horizontal conforme necessário
    marginTop:5,
    left: 115,
    
  },
  buttonComprar: {
    width:100,
    marginTop:10,
    left: 145,   // Ajuste a posição horizontal conforme necessário
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    
  },
  textButtonComprar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }

});
