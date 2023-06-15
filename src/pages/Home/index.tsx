import { StyleSheet, Text, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';

const user = {
  name: 'Anderson Luiz',
  balance: 18630.33,
  expenses: -912.15,
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Header user={user} />
      
      <Balance user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
