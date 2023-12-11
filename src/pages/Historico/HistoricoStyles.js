// HistoricoStyles.js
import { StyleSheet } from 'react-native';

export const historicoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CDAA',
  },
  historicoContainer: {
    margin: 10,
    marginTop:150,
  },
  historicoItem: {
    marginBottom: 10,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  timeText: {
    fontSize: 16,
    color: 'white',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#20B2AA',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
