import { StyleSheet, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import TransactionList from '../../components/TransactionList';
import transactions from '../../data/transactions';
import user from '../../data/user';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header user={user} />
      
      <Balance user={user} />

      <TransactionList transactions={transactions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
