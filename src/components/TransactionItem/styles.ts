import {StyleSheet} from 'react-native';

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

export default styles;
