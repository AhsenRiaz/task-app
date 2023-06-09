import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1e25',
    padding: 24
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#f4f4f4',
    fontSize: 16,
    marginBottom: 24
  },
  input: {
    height: 56,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    color: '#1f1e25',
    padding: 16,
    fontSize: 16
  },
  button: {
    width: '100%',
    height: 56,
    borderRadius: 5,
    backgroundColor: '#8257e6',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  emptyDiv: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listEmpty: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
  image: {
    height: 250,
    width: 250,
  }
});
