import {StatusBar, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 72;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.yellow,
		flexDirection: 'row',
		paddingVertical: statusBarHeight,
		paddingHorizontal: 24,
	},
	containerLeft: {
		backgroundColor: colors.yellow,
		flexDirection: 'row',
	},
	content: {
		alignItems: 'center',
		backgroundColor: colors.yellow,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: statusBarHeight,
	},
	username: {
		fontSize: 18,
		fontWeight: '700',
	},
	eyeIcon: {
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 16,
	},
	userIcon: {
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		borderRadius: 48 / 2,
		height: 48,
		justifyContent: 'center',
		width: 48,
		marginLeft: 16,
	},
});

export default styles;
