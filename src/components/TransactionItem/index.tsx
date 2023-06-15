import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AnimatePresence, MotiText, MotiView } from 'moti';
import Transaction from '../../interfaces/Transaction';
import TypeTransaction from '../../enums/TypeTransaction';
import { dateTimeFormat } from '../../utils/datetime';

type TransactionProps = {
    transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionProps) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue) }>
      <Text style={styles.date}>{dateTimeFormat(transaction.date)}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{transaction.label}</Text>
        {
          showValue ? 
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={ transaction.type === TypeTransaction.Expense ? styles.expense : styles.income}
              from={{ translateX: 120 }}
              animate={{ translateX: 0 }}
              transition={{ type: 'spring' }}
            >
              {transaction.type === TypeTransaction.Expense ? `R$ -${transaction.value}` : `R$ ${transaction.value}`}
            </MotiText> 
          </AnimatePresence> :
          <AnimatePresence exitBeforeEnter>
            <MotiView
              style={styles.skeleton}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing' }}
            />
          </AnimatePresence>
        }
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
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 12,
    backgroundColor: '#DADADA',
  }
});
