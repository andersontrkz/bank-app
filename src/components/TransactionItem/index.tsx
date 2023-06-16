import {Text, TouchableOpacity, View} from 'react-native';
import {AnimatePresence, MotiText, MotiView} from 'moti';
import {useShowContent} from '../../contexts/useShowContent';
import {dateFormat} from '../../utils/datetime';
import {formatCurrency} from '../../utils/currency';
import TypeTransaction from '../../enums/TypeTransaction';
import type Transaction from '../../interfaces/Transaction';
import styles from './styles';

type TransactionProps = {
	transaction: Transaction;
};

export default function TransactionItem({transaction}: TransactionProps) {
	const {showContent, setShowContent} = useShowContent();

	return (
		<TouchableOpacity style={styles.container} onPress={setShowContent}>
			<Text style={styles.date}>{dateFormat(transaction.date)}</Text>

			<View style={styles.content}>
				<Text style={styles.label}>{transaction.label}</Text>
				{
					showContent
						? <AnimatePresence exitBeforeEnter>
							<MotiText
								style={ transaction.type === TypeTransaction.Expense ? styles.expense : styles.income}
								from={{translateX: 120}}
								animate={{translateX: 0}}
								transition={{type: 'timing'}}
							>
								{transaction.type === TypeTransaction.Expense ? `R$ -${formatCurrency(transaction.value)}` : `R$ ${formatCurrency(transaction.value)}`}
							</MotiText>
						</AnimatePresence>
						: <AnimatePresence exitBeforeEnter>
							<MotiView
								style={styles.skeleton}
								from={{opacity: 0}}
								animate={{opacity: 1}}
								transition={{type: 'timing'}}
							/>
						</AnimatePresence>
				}
			</View>
		</TouchableOpacity>
	);
}

