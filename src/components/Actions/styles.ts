import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
	container: {
		height: 160,
		marginTop: 16,
		paddingHorizontal: 16,
	},
	action: {
		alignItems: 'center',
		marginRight: 32,
	},
	actionButton: {
		backgroundColor: colors.grayLight,
		height: 60,
		width: 60,
		borderRadius: 60 / 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	actionLabel: {
		marginTop: 4,
		textAlign: 'center',
		fontWeight: '700',
	},
});

export default styles;
