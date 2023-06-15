import { FlatList, StyleSheet, Text, View } from 'react-native';
import TransactionItem from '../../components/TransactionItem';
import Transaction from '../../interfaces/Transaction';

type TransactionProps = {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionProps) {
  return (
    <View>
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.transactions}
        data={transactions}
        keyExtractor={ (transaction) => String(transaction.id) }
        renderItem={ ({ item }) => <TransactionItem transaction={item} /> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
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
