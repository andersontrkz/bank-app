import {FlatList, ScrollView, Text} from 'react-native';
import TransactionItem from '../../components/TransactionItem';
import type Transaction from '../../interfaces/Transaction';
import styles from './styles';

type TransactionProps = {
	transactions: Transaction[];
};

export default function TransactionList({transactions}: TransactionProps) {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Text style={styles.title}>Últimas movimentações</Text>

			<FlatList
				style={styles.transactions}
				data={transactions}
				keyExtractor={ transaction => String(transaction.id) }
				renderItem={ ({item}) => <TransactionItem transaction={item} /> }
			/>
		</ScrollView>
	);
}
