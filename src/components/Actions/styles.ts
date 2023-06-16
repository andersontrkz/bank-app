import {StyleSheet} from 'react-native';

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
		backgroundColor: '#ecf0f1',
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
