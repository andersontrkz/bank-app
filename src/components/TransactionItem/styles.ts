import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 24,
		borderBottomWidth: 0.5,
		borderBottomColor: colors.grayMedium,
	},
	date: {
		color: colors.grayMedium,
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
		color: colors.green,
		fontSize: 16,
		fontWeight: '700',
	},
	expense: {
		color: colors.red,
		fontSize: 16,
		fontWeight: '700',
	},
	skeleton: {
		marginTop: 6,
		width: 80,
		height: 12,
		backgroundColor: colors.grayMedium,
	},
});

export default styles;
