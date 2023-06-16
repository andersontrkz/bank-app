import {StyleSheet, View} from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import TransactionList from '../../components/TransactionList';
import transactions from '../../data/transactions';
import user from '../../data/user';
import styles from './styles';

export default function Home() {
	return (
		<View style={styles.container}>
			<Header user={user} />
			<Balance user={user} />
			<Actions />
			<TransactionList transactions={transactions} />
		</View>
	);
}
