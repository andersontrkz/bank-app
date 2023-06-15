import { FlatList, StyleSheet, Text, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import transactions from '../../data/transactions';
import user from '../../data/user';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header user={user} />
      
      <Balance user={user} />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.transactions}
        data={transactions}
        keyExtractor={ (transaction) => String(transaction.id) }
        renderItem={ ({ item }) => <Text>{item.label}</Text> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 16,
  },
  transactions: {
    marginHorizontal: 16,
  }
});
