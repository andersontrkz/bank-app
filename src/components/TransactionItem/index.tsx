import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Transaction from '../../interfaces/Transaction';
import TypeTransaction from '../../enums/TypeTransaction';

type TransactionProps = {
    transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>{transaction.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{transaction.label}</Text>
        <Text style={ transaction.type === TypeTransaction.Expense ? styles.expense : styles.income}>
          {transaction.type === TypeTransaction.Expense ? `R$ -${transaction.value}` : `R$ ${transaction.value}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
  },
  date: {
    color: '#DADADA',
    fontWeight: '700',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
  income: {
    color: '#2ecc71',
    fontSize: 16,
    fontWeight: '700',
  },
  expense: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '700',
  },
});
