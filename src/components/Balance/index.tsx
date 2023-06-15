import { StyleSheet, Text, View } from 'react-native';
import { MotiView } from 'moti';
import User from '../../interfaces/User';

type BalanceProps = {
  user: User;
}

export default function Balance({ user: { balance, expenses } }: BalanceProps) {
  const convertToCurrency = (value: number) => Intl.NumberFormat('pt-BR').format(value);

  return (
    <MotiView style={styles.container}
      from={{
        rotateX: '-90deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 480,
        delay: 480,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.itemContent}>
          <Text style={styles.itemCurrency}>R$</Text>
          <Text style={styles.itemBalance}>{convertToCurrency(balance)}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.itemContent}>
          <Text style={styles.itemCurrency}>R$</Text>
          <Text style={styles.itemExpenses}>{convertToCurrency(expenses)}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: -24,
    marginHorizontal: 16,
  },
  item: {

  },
  itemTitle: {
    color: '#5f645f',
    fontSize: 20,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCurrency: {
    color: '#5f645f',
    marginRight: 6,
  },
  itemBalance: {
    color: '#2ecc71',
    fontSize: 22,
  },
  itemExpenses: {
    color: '#e74c3c',
    fontSize: 22,
  },
});
