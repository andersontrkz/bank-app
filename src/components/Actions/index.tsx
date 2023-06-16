import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './styles';

export default function Actions() {
	return (
		<ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<MaterialCommunityIcons name='cash-plus' size={24} color='black' />
				</View>
				<Text style={styles.actionLabel}>Entradas</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name='tagso' size={24} color='black' />
				</View>
				<Text style={styles.actionLabel}>Compras</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name='creditcard' size={24} color='black' />
				</View>
				<Text style={styles.actionLabel}>Cartão</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<Ionicons name='wallet-outline' size={24} color='black' />
				</View>
				<Text style={styles.actionLabel}>Carteira</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name='barcode' size={24} color='black' />
				</View>
				<Text style={styles.actionLabel}>Boletos</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name='filetext1' size={24} color='black' />
				</View>
				<Text style={styles.actionLabel}>Extratos</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name='barschart' size={24} color='black' />
				</View>
				<Text style={styles.actionLabel}>Investir</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<Ionicons name='settings-outline' size={24} color='black' />
				</View>
				<Text style={styles.actionLabel}>Opções</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}
