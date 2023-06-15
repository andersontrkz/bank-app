import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AnimatePresence, MotiText, MotiView } from 'moti';
import { useShowContent } from '../../contexts/useShowContent';
import { dateFormat } from '../../utils/datetime';
import Transaction from '../../interfaces/Transaction';
import TypeTransaction from '../../enums/TypeTransaction';
import { formatCurrency } from '../../utils/currency';

type TransactionProps = {
    transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionProps) {
  const { showContent, setShowContent } = useShowContent();

  return (
    <TouchableOpacity style={styles.container} onPress={setShowContent}>
      <Text style={styles.date}>{dateFormat(transaction.date)}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{transaction.label}</Text>
        {
          showContent ? 
          <AnimatePresence exitBeforeEnter>
            <MotiView
              style={styles.skeleton}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing' }}
            />
          </AnimatePresence> :
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={ transaction.type === TypeTransaction.Expense ? styles.expense : styles.income}
              from={{ translateX: 120 }}
              animate={{ translateX: 0 }}
              transition={{ type: 'timing' }}
            >
              {transaction.type === TypeTransaction.Expense ? `R$ -${formatCurrency(transaction.value)}` : `R$ ${formatCurrency(transaction.value)}`}
            </MotiText> 
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
  },
});
