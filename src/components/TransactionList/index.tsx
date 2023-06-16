import {FlatList, Text} from 'react-native';
import TransactionItem from '../../components/TransactionItem';
import type Transaction from '../../interfaces/Transaction';
import styles from './styles';

type TransactionProps = {
	transactions: Transaction[];
};

export default function TransactionList({transactions}: TransactionProps) {
	return (
		<>
			<Text style={styles.title}>Últimas movimentações</Text>

			<FlatList
				scrollEnabled
				showsVerticalScrollIndicator={false}
				style={styles.transactions}
				data={transactions}
				keyExtractor={ transaction => String(transaction.id) }
				renderItem={ ({item}) => <TransactionItem transaction={item} /> }
			/>
		</>
	);
}
