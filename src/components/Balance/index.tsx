import { StyleSheet, Text, View } from 'react-native';
import { AnimatePresence, MotiText, MotiView } from 'moti';
import { useShowContent } from '../../contexts/useShowContent';
import User from '../../interfaces/User';
import { formatCurrency } from '../../utils/currency';

type BalanceProps = {
  user: User;
}

export default function Balance({ user: { balance, expenses } }: BalanceProps) {
  const { showContent } = useShowContent();

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
                style={styles.itemBalance}
                from={{ translateX: 120 }}
                animate={{ translateX: 0 }}
                transition={{ type: 'timing', duration: 320 }}
              >
                {formatCurrency(balance)}
              </MotiText> 
          </AnimatePresence>
          }
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.itemContent}>
          <Text style={styles.itemCurrency}>R$</Text>
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
                style={styles.itemExpenses}
                from={{ translateX: 120 }}
                animate={{ translateX: 0 }}
                transition={{ type: 'timing', duration: 320 }}
              >
                {formatCurrency(expenses)}
              </MotiText> 
          </AnimatePresence>
          }
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
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
  skeleton: {
    marginTop: 6,
    width: 120,
    height: 18,
    backgroundColor: '#DADADA',
  },
});
