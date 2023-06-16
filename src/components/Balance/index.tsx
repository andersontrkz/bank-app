import {Text, View} from 'react-native';
import {AnimatePresence, MotiText, MotiView} from 'moti';
import {useShowContent} from '../../contexts/useShowContent';
import {formatCurrency} from '../../utils/currency';
import type User from '../../interfaces/User';
import styles from './styles';

type BalanceProps = {
	user: User;
};

export default function Balance({user: {balance, expenses}}: BalanceProps) {
	const {showContent} = useShowContent();

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
						showContent
							? <AnimatePresence exitBeforeEnter>
								<MotiView
									style={styles.skeleton}
									from={{opacity: 0}}
									animate={{opacity: 1}}
									transition={{type: 'timing'}}
								/>
							</AnimatePresence>
							: <AnimatePresence exitBeforeEnter>
								<MotiText
									style={styles.itemBalance}
									from={{translateX: 120}}
									animate={{translateX: 0}}
									transition={{type: 'timing', duration: 320}}
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
						showContent
							? <AnimatePresence exitBeforeEnter>
								<MotiView
									style={styles.skeleton}
									from={{opacity: 0}}
									animate={{opacity: 1}}
									transition={{type: 'timing'}}
								/>
							</AnimatePresence>
							: <AnimatePresence exitBeforeEnter>
								<MotiText
									style={styles.itemExpenses}
									from={{translateX: 120}}
									animate={{translateX: 0}}
									transition={{type: 'timing', duration: 320}}
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
