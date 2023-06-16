import {StyleSheet} from 'react-native';

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

export default styles;
