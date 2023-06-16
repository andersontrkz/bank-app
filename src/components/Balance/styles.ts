import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
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
		color: colors.grayDark,
		fontSize: 20,
	},
	itemContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemCurrency: {
		color: colors.grayDark,
		marginRight: 6,
	},
	itemBalance: {
		color: colors.green,
		fontSize: 22,
	},
	itemExpenses: {
		color: colors.red,
		fontSize: 22,
	},
	skeleton: {
		marginTop: 6,
		width: 120,
		height: 18,
		backgroundColor: colors.grayMedium,
	},
});

export default styles;
